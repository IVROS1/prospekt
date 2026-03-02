'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import type { Database } from '@/lib/supabase'
import {
  Search, LogOut, Download, Copy, Check, ChevronDown, ChevronUp,
  ExternalLink, Loader2, Mail, Linkedin, AlertCircle, Zap
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

type Lead = Database['public']['Tables']['leads']['Row']
type Sub  = Database['public']['Tables']['subscriptions']['Row']

/* ── Helpers ── */
function initials(name: string) {
  return (name || '??').split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success('Kopierat!')
  }
  return (
    <button onClick={copy} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:11, color:'var(--text-muted)', border:'1px solid var(--border)', borderRadius:6, padding:'4px 10px', background:'transparent', cursor:'pointer', transition:'border-color 0.15s' }}>
      {copied ? <Check style={{ width:11, height:11, color:'var(--green)' }} /> : <Copy style={{ width:11, height:11 }} />}
      {copied ? 'Kopierat!' : label}
    </button>
  )
}

/* ── Lead Card ── */
function LeadCard({ lead }: { lead: Lead }) {
  const [expanded, setExpanded] = useState(false)
  const [status, setStatus]     = useState(lead.status || 'new')
  const supabase = createBrowserClient()

  const updateStatus = async (s: string) => {
    setStatus(s)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase.from('leads') as any).update({ status: s }).eq('id', lead.id)
  }

  const statusMap: Record<string, { label: string; color: string }> = {
    new:       { label: 'Ny',        color: 'var(--text-muted)' },
    contacted: { label: 'Kontaktad', color: '#60a5fa' },
    replied:   { label: 'Svarade',   color: 'var(--gold)' },
    converted: { label: '✓ Kund',    color: 'var(--green)' },
  }
  const s = statusMap[status] || statusMap.new

  return (
    <div className="card" style={{ overflow:'hidden', transition:'border-color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-gold)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>

      <div style={{ padding:'16px' }}>
        {/* Header */}
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12, marginBottom:12 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, flex:1, minWidth:0 }}>
            <div style={{ width:36, height:36, borderRadius:8, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:'var(--gold)', fontFamily:'var(--font-mono)', flexShrink:0 }}>
              {initials(lead.company_name || '')}
            </div>
            <div style={{ minWidth:0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                <h3 style={{ fontSize:14, fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{lead.company_name}</h3>
                {lead.company_website && (
                  <a href={`https://${lead.company_website.replace(/^https?:\/\//,'')}`} target="_blank" rel="noopener noreferrer" style={{ color:'var(--text-muted)', flexShrink:0 }}>
                    <ExternalLink style={{ width:12, height:12 }} />
                  </a>
                )}
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:4 }}>
                {[lead.company_industry, lead.company_size, lead.company_location].filter(Boolean).map(t => (
                  <span key={t} style={{ fontSize:10, background:'rgba(255,255,255,0.05)', border:'1px solid var(--border)', borderRadius:5, padding:'2px 7px', color:'var(--text-muted)', fontFamily:'var(--font-mono)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <select value={status} onChange={e => updateStatus(e.target.value)}
            style={{ fontSize:11, fontWeight:600, color: s.color, background:'transparent', border:'none', cursor:'pointer', outline:'none', fontFamily:'var(--font-mono)' }}>
            {Object.entries(statusMap).map(([v, { label }]) => <option key={v} value={v}>{label}</option>)}
          </select>
        </div>

        {/* Contact */}
        {(lead.contact_name || lead.contact_role) && (
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(255,255,255,0.03)', border:'1px solid var(--border)', borderRadius:8, padding:'8px 12px', marginBottom:12 }}>
            <div>
              <div style={{ fontSize:13, fontWeight:600 }}>{lead.contact_name || '—'}</div>
              <div style={{ fontSize:11, color:'var(--text-muted)' }}>{lead.contact_role || '—'}</div>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              {lead.contact_linkedin_url && (
                <a href={lead.contact_linkedin_url} target="_blank" rel="noopener noreferrer"
                  style={{ width:28, height:28, borderRadius:6, background:'rgba(96,165,250,0.15)', border:'1px solid rgba(96,165,250,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Linkedin style={{ width:13, height:13, color:'#60a5fa' }} />
                </a>
              )}
              {lead.contact_email && (
                <a href={`mailto:${lead.contact_email}`}
                  style={{ width:28, height:28, borderRadius:6, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Mail style={{ width:13, height:13, color:'var(--gold)' }} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Expand */}
        <button onClick={() => setExpanded(!expanded)}
          style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:'var(--gold)', background:'transparent', border:'none', cursor:'pointer', fontFamily:'var(--font-mono)' }}>
          <Zap style={{ width:12, height:12 }} />
          AI-OUTREACH
          {expanded ? <ChevronUp style={{ width:12, height:12 }} /> : <ChevronDown style={{ width:12, height:12 }} />}
        </button>
      </div>

      {/* Outreach */}
      {expanded && (
        <div style={{ borderTop:'1px solid var(--border)' }}>
          {[
            { key: 'email', icon: <Mail style={{ width:12, height:12 }} />, label:'EMAIL', text: lead.ai_email_text },
            { key: 'li', icon: <Linkedin style={{ width:12, height:12 }} />, label:'LINKEDIN', text: lead.ai_linkedin_text },
          ].filter(m => m.text).map(m => (
            <div key={m.key} style={{ padding:'14px 16px', borderBottom:'1px solid var(--border)' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, color:'var(--text-muted)' }}>
                  {m.icon}
                  <span className="label">{m.label}</span>
                </div>
                <CopyButton text={m.text!} label="Kopiera" />
              </div>
              <pre style={{ fontSize:11, color:'var(--text-muted)', lineHeight:1.7, whiteSpace:'pre-wrap', fontFamily:'var(--font-mono)', background:'rgba(255,255,255,0.02)', border:'1px solid var(--border)', borderRadius:6, padding:'10px 12px', margin:0 }}>
                {m.text}
              </pre>
            </div>
          ))}
          {!lead.ai_email_text && !lead.ai_linkedin_text && (
            <div style={{ padding:'14px 16px', fontSize:12, color:'var(--text-dim)' }}>
              AI-outreach genereras vid nästa sökning.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ── Dashboard ── */
function DashboardInner() {
  const [what, setWhat]       = useState('')
  const [who, setWho]         = useState('')
  const [where, setWhere]     = useState('')
  const [loading, setLoading] = useState(false)
  const [leads, setLeads]     = useState<Lead[]>([])
  const [searchId, setSearchId] = useState<string | null>(null)
  const [sub, setSub]         = useState<Sub | null>(null)
  const router       = useRouter()
  const searchParams = useSearchParams()
  const supabase     = createBrowserClient()

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await (supabase.from('subscriptions') as any).select('*').eq('user_id', user.id).single()
      setSub(data)
      const w = searchParams.get('what'); if (w) setWhat(w)
      const h = searchParams.get('who');  if (h) setWho(h)
      const r = searchParams.get('where'); if (r) setWhere(r)
    }
    init()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = async () => {
    if (!what || !who) { toast.error('Fyll i vad du säljer och till vem'); return }
    setLoading(true); setLeads([])
    try {
      const res  = await fetch('/api/search', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ what, who, where, limit:10 }) })
      const data = await res.json()
      if (data.error === 'quota_exceeded') { toast.error(`Kvot nådd (${data.used}/${data.limit}). Uppgradera!`); return }
      if (!res.ok) throw new Error(data.error || 'Sökning misslyckades')
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
    window.open(`/api/export/csv${searchId ? `?search_id=${searchId}` : ''}`, '_blank')
    toast.success('CSV exporteras...')
  }

  const handleLogout = async () => { await supabase.auth.signOut(); router.push('/') }

  const used    = sub?.leads_used_this_month || 0
  const limit   = sub?.leads_limit || 5
  const pct     = Math.min((used / limit) * 100, 100)
  const plan    = sub?.plan || 'free'
  const atLimit = used >= limit

  return (
    <div style={{ minHeight:'100vh', background:'var(--bg)', color:'var(--text)' }}>

      {/* Grid bg */}
      <div className="grid-bg" style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }} />

      {/* TOP BAR */}
      <div style={{ position:'sticky', top:0, zIndex:10, borderBottom:'1px solid var(--border)', background:'rgba(10,10,10,0.92)', backdropFilter:'blur(12px)' }}>
        <div style={{ maxWidth:1000, margin:'0 auto', padding:'0 20px', height:52, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <Link href="/" style={{ textDecoration:'none' }}>
            <span className="font-mono" style={{ fontSize:12, letterSpacing:'3px', color:'var(--gold)', fontWeight:600 }}>PROSPEKT</span>
          </Link>
          <div style={{ display:'flex', alignItems:'center', gap:20 }}>
            {/* Quota */}
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span className="label">{used}/{limit}</span>
              <div className="progress-bar" style={{ width:60 }}>
                <div className="progress-bar-fill" style={{ width:`${pct}%`, background: pct >= 80 ? '#f59e0b' : 'var(--gold)' }} />
              </div>
              <span className="label" style={{ textTransform:'uppercase' }}>{plan}</span>
            </div>
            {plan === 'free' && (
              <Link href="/pricing" className="btn-gold" style={{ padding:'5px 14px', fontSize:11 }}>Uppgradera</Link>
            )}
            <button onClick={handleLogout} style={{ background:'transparent', border:'none', cursor:'pointer', color:'var(--text-muted)', display:'flex', alignItems:'center' }} title="Logga ut">
              <LogOut style={{ width:15, height:15 }} />
            </button>
          </div>
        </div>
      </div>

      <div style={{ position:'relative', zIndex:1, maxWidth:1000, margin:'0 auto', padding:'28px 20px' }}>

        {/* SEARCH PANEL */}
        <div className="card-gold" style={{ padding:24, marginBottom:24 }}>
          <h2 style={{ fontSize:16, fontWeight:700, marginBottom:4 }}>Hitta leads</h2>
          <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:20 }}>Beskriv vem du säljer till — AI:n gör resten.</p>

          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <div>
              <label className="label" style={{ display:'block', marginBottom:6 }}>Jag säljer...</label>
              <input value={what} onChange={e => setWhat(e.target.value)}
                placeholder='t.ex. "redovisningstjänster" eller "HR-mjukvara för SMB"'
                className="input" />
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
              <div>
                <label className="label" style={{ display:'block', marginBottom:6 }}>Till...</label>
                <input value={who} onChange={e => setWho(e.target.value)}
                  placeholder='t.ex. "startups med 10-50 anst."'
                  className="input" />
              </div>
              <div>
                <label className="label" style={{ display:'block', marginBottom:6 }}>I... (valfritt)</label>
                <input value={where} onChange={e => setWhere(e.target.value)}
                  placeholder='t.ex. "Stockholm"'
                  className="input" />
              </div>
            </div>

            <div style={{ display:'flex', gap:10, marginTop:4 }}>
              <button onClick={handleSearch} disabled={loading || atLimit} className="btn-gold"
                style={{ flex:1, justifyContent:'center', padding:'12px', fontSize:14 }}>
                {loading
                  ? <><Loader2 style={{ width:14, height:14, animation:'spin 1s linear infinite' }} /> Söker leads... (~30 sek)</>
                  : <><Search style={{ width:14, height:14 }} /> Hitta leads</>}
              </button>
              {leads.length > 0 && (
                <button onClick={handleExportCSV} className="btn-outline" style={{ padding:'12px 18px', display:'flex', alignItems:'center', gap:6 }}>
                  <Download style={{ width:14, height:14 }} /> CSV
                </button>
              )}
            </div>
          </div>

          {atLimit && (
            <div style={{ marginTop:16, display:'flex', alignItems:'center', gap:10, background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.3)', borderRadius:8, padding:'10px 14px' }}>
              <AlertCircle style={{ width:14, height:14, color:'#f59e0b', flexShrink:0 }} />
              <span style={{ fontSize:13, color:'#f59e0b', flex:1 }}>Kvot nådd för månaden.</span>
              <Link href="/pricing" className="btn-gold" style={{ padding:'5px 14px', fontSize:11 }}>Uppgradera →</Link>
            </div>
          )}
        </div>

        {/* LOADING SKELETONS */}
        {loading && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:12 }}>
            {[...Array(6)].map((_,i) => (
              <div key={i} className="card" style={{ padding:20, animation:'pulse 1.5s ease-in-out infinite' }}>
                <div style={{ display:'flex', gap:10, marginBottom:12 }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:'var(--border)' }} />
                  <div style={{ flex:1 }}>
                    <div style={{ height:12, background:'var(--border)', borderRadius:4, width:'60%', marginBottom:6 }} />
                    <div style={{ height:10, background:'var(--border)', borderRadius:4, width:'40%' }} />
                  </div>
                </div>
                <div style={{ height:32, background:'var(--border)', borderRadius:6 }} />
              </div>
            ))}
          </div>
        )}

        {/* LEADS */}
        {!loading && leads.length > 0 && (
          <>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
              <h3 style={{ fontSize:14, fontWeight:700 }}>
                <span style={{ color:'var(--gold)', fontFamily:'var(--font-mono)', marginRight:8 }}>{leads.length}</span>
                leads hittade
              </h3>
              <span className="label" style={{ color:'var(--green)' }}>● AI-outreach klar</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:12 }}>
              {leads.map(lead => <LeadCard key={lead.id} lead={lead} />)}
            </div>
          </>
        )}

        {/* EMPTY STATE */}
        {!loading && leads.length === 0 && (
          <div style={{ textAlign:'center', padding:'80px 0' }}>
            <div style={{ width:52, height:52, borderRadius:12, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
              <Search style={{ width:22, height:22, color:'var(--gold)' }} />
            </div>
            <h3 style={{ fontSize:16, fontWeight:600, marginBottom:8 }}>Inga leads ännu</h3>
            <p style={{ fontSize:13, color:'var(--text-muted)' }}>Fyll i formuläret ovan och tryck på "Hitta leads".</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return <Suspense><DashboardInner /></Suspense>
}
