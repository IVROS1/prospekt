import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Database } from '@/lib/supabase'
import { searchSwedishLeads } from '@/lib/apify'
import { generateOutreach } from '@/lib/anthropic'


export const dynamic = 'force-dynamic'
export const maxDuration = 60

type Sub = Database['public']['Tables']['subscriptions']['Row']

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { what, who, where, limit = 10 } = await req.json()

    if (!what || !who) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check quota
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: subData } = await (supabase.from('subscriptions') as any)
      .select('*')
      .eq('user_id', user.id)
      .single()

    const sub = subData as Sub | null
    const used = sub?.leads_used_this_month ?? 0
    const maxLeads = sub?.leads_limit ?? 5

    if (used >= maxLeads) {
      return NextResponse.json({
        error: 'quota_exceeded',
        used,
        limit: maxLeads,
        plan: sub?.plan ?? 'free',
      }, { status: 402 })
    }

    const actualLimit = Math.min(limit, maxLeads - used)

    // Create search record
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: search, error: searchErr } = await (supabase.from('searches') as any)
      .insert({ user_id: user.id, query_what: what, query_who: who, query_where: where ?? null })
      .select()
      .single()

    if (searchErr || !search) {
      return NextResponse.json({ error: 'Failed to create search' }, { status: 500 })
    }

    // Fetch leads from Apify
    const scraped = await searchSwedishLeads({ what, who, where, limit: actualLimit })

    // Generate AI outreach + save to DB
    const leads = await Promise.all(
      scraped.map(async (lead) => {
        // Graceful fallback if AI is overloaded or fails
        let outreach = { email: '', linkedin: '' }
        try {
          outreach = await generateOutreach(lead, { what, who, where })
        } catch (aiErr) {
          console.warn('Outreach generation failed (non-fatal):', aiErr instanceof Error ? aiErr.message : aiErr)
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data: saved } = await (supabase.from('leads') as any)
          .insert({
            search_id: search.id,
            user_id: user.id,
            ...lead,
            ai_email_text: outreach.email || null,
            ai_linkedin_text: outreach.linkedin || null,
          })
          .select()
          .single()
        return saved
      })
    )

    // Update quota
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase.from('subscriptions') as any)
      .upsert({
        user_id: user.id,
        leads_used_this_month: used + leads.length,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })

    return NextResponse.json({ search_id: search.id, leads })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('Search error:', msg)
    return NextResponse.json({ error: 'Internal error', detail: msg }, { status: 500 })
  }
}
