import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Database } from '@/lib/supabase'


export const dynamic = 'force-dynamic'
type Lead = Database['public']['Tables']['leads']['Row']

export async function GET(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const searchId = req.nextUrl.searchParams.get('search_id')

  let query = supabase.from('leads').select('*').eq('user_id', user.id)
  if (searchId) query = query.eq('search_id', searchId)

  const { data } = await query.order('created_at', { ascending: false })
  const leads = (data ?? []) as Lead[]

  if (!leads.length) {
    return NextResponse.json({ error: 'No leads found' }, { status: 404 })
  }

  const headers = [
    'Bolag', 'Hemsida', 'Bransch', 'Storlek', 'Ort',
    'Kontakt', 'Roll', 'LinkedIn', 'Email',
    'AI Email-text', 'AI LinkedIn-text', 'Status'
  ]

  const rows = leads.map(l => [
    l.company_name ?? '',
    l.company_website ?? '',
    l.company_industry ?? '',
    l.company_size ?? '',
    l.company_location ?? '',
    l.contact_name ?? '',
    l.contact_role ?? '',
    l.contact_linkedin_url ?? '',
    l.contact_email ?? '',
    (l.ai_email_text ?? '').replace(/"/g, '""'),
    (l.ai_linkedin_text ?? '').replace(/"/g, '""'),
    l.status ?? 'new',
  ].map(v => `"${v}"`).join(','))

  const csv = [headers.join(','), ...rows].join('\n')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (supabase.from('leads') as any)
    .update({ exported_at: new Date().toISOString() })
    .in('id', leads.map(l => l.id))

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="prospekt-leads-${new Date().toISOString().split('T')[0]}.csv"`,
    },
  })
}
