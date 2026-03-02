'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

function SignupForm() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [sent, setSent]         = useState(false)
  const searchParams = useSearchParams()
  const supabase     = createBrowserClient()

  const plan  = searchParams.get('plan')  || 'free'
  const what  = searchParams.get('what')  || ''
  const who   = searchParams.get('who')   || ''
  const where = searchParams.get('where') || ''

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Use NEXT_PUBLIC_APP_URL for a stable redirect URL (must be in Supabase allowlist)
      const base = process.env.NEXT_PUBLIC_APP_URL || window.location.origin
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${base}/auth/callback`,
          data: { plan, query_what: what, query_who: who, query_where: where },
        },
      })
      if (error) throw error
      setSent(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Något gick fel'
      // Surface a more helpful message for the common redirect-URL error
      if (msg.toLowerCase().includes('redirect')) {
        toast.error('Kontakonfiguration saknas. Kontakta oss på hej@prospekt.app')
      } else {
        toast.error(msg)
      }
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div style={{ textAlign:'center', padding:'24px 0' }}>
        <div style={{ width:52, height:52, borderRadius:12, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', fontSize:22 }}>
          📬
        </div>
        <h2 style={{ fontSize:18, fontWeight:700, marginBottom:8 }}>Kolla din inbox!</h2>
        <p style={{ fontSize:13, color:'var(--text-muted)' }}>
          Vi skickade en bekräftelselänk till <strong style={{ color:'var(--text)' }}>{email}</strong>
        </p>
      </div>
    )
  }

  return (
    <>
      <h1 style={{ fontSize:22, fontWeight:700, marginBottom:6 }}>Skapa konto</h1>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>
        {plan !== 'free'
          ? `Plan: ${plan.charAt(0).toUpperCase() + plan.slice(1)}`
          : '5 leads gratis · Inget kreditkort'}
      </p>

      <form onSubmit={handleSignup} style={{ display:'flex', flexDirection:'column', gap:14 }}>
        <div>
          <label className="label" style={{ display:'block', marginBottom:6 }}>E-post</label>
          <input
            type="email" required value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="du@bolag.se"
            className="input"
          />
        </div>
        <div>
          <label className="label" style={{ display:'block', marginBottom:6 }}>Lösenord</label>
          <input
            type="password" required minLength={8} value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Minst 8 tecken"
            className="input"
          />
        </div>
        <button type="submit" disabled={loading} className="btn-gold" style={{ justifyContent:'center', width:'100%', padding:'12px' }}>
          {loading && <Loader2 style={{ width:14, height:14, animation:'spin 1s linear infinite' }} />}
          Skapa konto <ArrowRight style={{ width:14, height:14 }} />
        </button>
      </form>

      <p style={{ textAlign:'center', fontSize:12, color:'var(--text-dim)', marginTop:20 }}>
        Har du redan ett konto?{' '}
        <Link href="/login" style={{ color:'var(--gold)', textDecoration:'none' }}>Logga in</Link>
      </p>
      <p style={{ textAlign:'center', fontSize:11, color:'var(--text-dim)', marginTop:8 }}>
        Genom att skapa ett konto godkänner du våra{' '}
        <Link href="/terms" style={{ color:'var(--text-muted)', textDecoration:'underline' }}>villkor</Link>.
      </p>
    </>
  )
}

export default function SignupPage() {
  return (
    <div style={{ minHeight:'100vh', background:'var(--bg)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'24px' }}>

      {/* Grid bg */}
      <div className="grid-bg" style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }} />

      <div style={{ position:'relative', zIndex:1, width:'100%', maxWidth:380 }}>

        {/* Logo */}
        <Link href="/" style={{ display:'flex', justifyContent:'center', marginBottom:32, textDecoration:'none' }}>
          <span className="font-mono" style={{ fontSize:13, letterSpacing:'3px', color:'var(--gold)', fontWeight:600 }}>PROSPEKT</span>
        </Link>

        <div className="card-gold" style={{ padding:32 }}>
          <Suspense>
            <SignupForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
