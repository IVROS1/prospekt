import { createClient } from '@supabase/supabase-js'
import { createBrowserClient as createSSRBrowserClient } from '@supabase/ssr'

export type Database = {
  public: {
    Tables: {
      searches: {
        Row: {
          id: string
          user_id: string
          query_what: string
          query_who: string
          query_where: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['searches']['Row'], 'id' | 'created_at'>
      }
      leads: {
        Row: {
          id: string
          search_id: string
          user_id: string
          company_name: string | null
          company_website: string | null
          company_industry: string | null
          company_size: string | null
          company_location: string | null
          contact_name: string | null
          contact_role: string | null
          contact_linkedin_url: string | null
          contact_email: string | null
          ai_email_text: string | null
          ai_linkedin_text: string | null
          status: string
          exported_at: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['leads']['Row'], 'id' | 'created_at'>
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          plan: string
          leads_used_this_month: number
          leads_limit: number
          billing_period_start: string | null
          created_at: string
          updated_at: string
        }
      }
    }
  }
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
const SUPABASE_SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON

// Browser client (for 'use client' components) — uses @supabase/ssr for proper cookie handling
export const createBrowserClient = () =>
  createSSRBrowserClient<Database>(SUPABASE_URL, SUPABASE_ANON)

// Admin client (for API routes / webhook handlers — no RLS)
export const adminClient = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_SERVICE,
  { auth: { autoRefreshToken: false, persistSession: false } }
)
