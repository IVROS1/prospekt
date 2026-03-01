'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import type { Database } from '@/lib/supabase'
import {
  Search, Zap, LogOut, Download, Copy, Check, ChevronDown, ChevronUp,
  ExternalLink, Loader2, Mail, Linkedin, TrendingUp, AlertCircle
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Suspense } from 'react'

type Lead = Database['public']['Tables']['leads']['Row']
type Sub = Database['public']['Tables']['subscriptions']['Row']

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success('Kopierat!')
  }
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-slate-300 px-2.5 py-1.5 rounded-lg transition-all"
    >
      {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Kopierat!' : label}
    </button>
  )
}

function LeadCard({ lead }: { lead: Lead }) {
  const [expanded, setExpanded] = useState(false)
  const [status, setStatus] = useState(lead.status)
  const supabase = createBrowserClient()

  const updateStatus = async (newStatus: string) => {
    setStatus(newStatus)
    await (supabase.from('leads') as any).update({ status: newStatus }).eq('id', lead.id)
  }

  const statusColors: Record<string, string> = {
    new: 'bg-slate-100 text-slate-600',
    contacted: 'bg-blue-50 text-blue-600',
    replied: 'bg-amber-50 text-amber-600',
    converted: 'bg-green-50 text-green-600',
  }

  const statusLabels: Record<string, string> = {
    new: 'Ny',
    contacted: 'Kontaktad',
    replied: 'Svarade',
    converted: '✓ Kund',
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-slate-900 truncate">{lead.company_name}</h3>
              {lead.company_website && (
                <a
                  href={`https://${lead.company_website.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-500 flex-shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {lead.company_industry && (
                <span className="text-xs bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-100">
                  {lead.company_industry}
                </span>
              )}
              {lead.company_size && (
                <span className="text-xs bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-100">
                  {lead.company_size}
                </span>
              )}
              {lead.company_location && (
                <span className="text-xs bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-100">
                  📍 {lead.company_location}
                </span>
              )}
            </div>
          </div>
          <select
            value={status}
            onChange={e => updateStatus(e.target.value)}
            className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer focus:outline-none ${statusColors[status] || statusColors.new}`}
          >
            {Object.entries(statusLabels).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>
        </div>

        {/* Contact */}
        {(lead.contact_name || lead.contact_role) && (
          <div className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2 mb-3">
            <div>
              <div className="text-sm font-medium text-slate-800">{lead.contact_name || '—'}</div>
              <div className="text-xs text-slate-500">{lead.contact_role || '—'}</div>
            </div>
            <div className="flex gap-2">
              {lead.contact_linkedin_url && (
                <a
                  href={lead.contact_linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                </a>
              )}
              {lead.contact_email && (
                <a
                  href={`mailto:${lead.contact_email}`}
                  className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium text-indigo-500 hover:text-indigo-700 transition-colors"
        >
          <Zap className="w-3.5 h-3.5" />
          AI-outreach
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Outreach texts */}
      {expanded && (
        <div className="border-t border-slate-50 divide-y divide-slate-50">
          {lead.ai_email_text && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" /> Email
                </div>
                <CopyButton text={lead.ai_email_text} label="Kopiera" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50 rounded-xl p-3 font-mono">
                {lead.ai_email_text}
              </p>
            </div>
          )}
          {lead.ai_linkedin_text && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Linkedin className="w-3.5 h-3.5 text-blue-500" /> LinkedIn
                </div>
                <CopyButton text={lead.ai_linkedin_text} label="Kopiera" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-xl p-3 font-mono">
                {lead.ai_linkedin_text}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function DashboardInner() {
  const [what, setWhat] = useState('')
  const [who, setWho] = useState('')
  const [where, setWhere] = useState('')
  const [loading, setLoading] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [searchId, setSearchId] = useState<string | null>(null)
  const [sub, setSub] = useState<Sub | null>(null)
  const [user, setUser] = useState<{ email?: string } | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createBrowserClient()

  useEffect(() => {
    const initUser = async () => {
      const { data: { user: u } } = await supabase.auth.getUser()
      if (!u) { router.push('/login'); return }
      setUser({ email: u.email })

      // Load subscription
      const { data: subData } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', u.id)
        .single()
      setSub(subData)

      // Pre-fill from URL params (from landing page demo)
      const w = searchParams.get('what')
      const h = searchParams.get('who')
      const r = searchParams.get('where')
      if (w) setWhat(w)
      if (h) setWho(h)
      if (r) setWhere(r)
    }
    initUser()
  }, [])

  const handleSearch = async () => {
    if (!what || !who) { toast.error('Fyll i vad du säljer och till vem'); return }
    setLoading(true)
    setLeads([])
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ what, who, where, limit: 10 }),
      })
      const data = await res.json()

      if (data.error === 'quota_exceeded') {
        toast.error(`Du har nått din gräns (${data.used}/${data.limit} leads). Uppgradera för fler.`)
        return
      }
      if (!res.ok) throw new Error(data.error || 'Sökningen misslyckades')

      setLeads(data.leads || [])
      setSearchId(data.search_id)
      toast.success(`${data.leads?.length || 0} leads hittade!`)
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Något gick fel')
    } finally {
      setLoading(false)
    }
  }

  const handleExportCSV = () => {
    const url = `/api/export/csv${searchId ? `?search_id=${searchId}` : ''}`
    window.open(url, '_blank')
    toast.success('CSV exporteras...')
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const usedLeads = sub?.leads_used_this_month || 0
  const maxLeads = sub?.leads_limit || 5
  const quotaPercent = Math.min((usedLeads / maxLeads) * 100, 100)
  const plan = sub?.plan || 'free'
  const isAtLimit = usedLeads >= maxLeads

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* TOP BAR */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-[#FAFAF9]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900">Prospekt</span>
          </Link>
          <div className="flex items-center gap-4">
            {/* Quota indicator */}
            <div className="hidden md:flex items-center gap-2">
              <div className="text-xs text-slate-500">{usedLeads}/{maxLeads} leads</div>
              <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${quotaPercent >= 80 ? 'bg-amber-400' : 'bg-indigo-400'}`}
                  style={{ width: `${quotaPercent}%` }}
                />
              </div>
              <span className="text-xs text-slate-400 capitalize">{plan}</span>
            </div>
            {plan === 'free' && (
              <Link
                href="/pricing"
                className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
              >
                Uppgradera
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="text-slate-400 hover:text-slate-700 transition-colors"
              title="Logga ut"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* SEARCH PANEL */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-1">Hitta leads</h2>
          <p className="text-sm text-slate-500 mb-4">Beskriv vem du säljer till — AI:n gör resten.</p>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Jag säljer...</label>
              <input
                value={what}
                onChange={e => setWhat(e.target.value)}
                placeholder='t.ex. "redovisningstjänster" eller "HR-mjukvara för SMB"'
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-slate-50/50"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Till...</label>
                <input
                  value={who}
                  onChange={e => setWho(e.target.value)}
                  placeholder='t.ex. "startups med 10-50 anst."'
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-slate-50/50"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">I... (valfritt)</label>
                <input
                  value={where}
                  onChange={e => setWhere(e.target.value)}
                  placeholder='t.ex. "Stockholm"'
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSearch}
                disabled={loading || isAtLimit}
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Söker leads... (~30 sek)
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Hitta leads
                  </>
                )}
              </button>
              {leads.length > 0 && (
                <button
                  onClick={handleExportCSV}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" />
                  CSV
                </button>
              )}
            </div>
          </div>

          {isAtLimit && (
            <div className="mt-4 flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-sm text-amber-700">Du har nått din gräns för månaden.</span>
              </div>
              <Link
                href="/pricing"
                className="text-xs bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors"
              >
                Uppgradera →
              </Link>
            </div>
          )}
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 animate-pulse">
                <div className="h-4 bg-slate-100 rounded-full w-2/3 mb-3" />
                <div className="flex gap-2 mb-3">
                  <div className="h-3 bg-slate-100 rounded-full w-16" />
                  <div className="h-3 bg-slate-100 rounded-full w-20" />
                </div>
                <div className="h-12 bg-slate-50 rounded-xl" />
              </div>
            ))}
          </div>
        )}

        {/* LEADS GRID */}
        {!loading && leads.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">
                {leads.length} leads hittade
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                AI-outreach genererad
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {leads.map(lead => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          </>
        )}

        {/* EMPTY STATE */}
        {!loading && leads.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-indigo-300" />
            </div>
            <h3 className="font-semibold text-slate-700 mb-2">Inga leads ännu</h3>
            <p className="text-sm text-slate-400">Fyll i formuläret ovan och tryck på "Hitta leads".</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardInner />
    </Suspense>
  )
}
