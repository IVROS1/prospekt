'use client'

import { useState } from 'react'
import { useRouter }  from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Loader2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

export default function LoginPage() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const router  = useRouter()
  const supabase = createBrowserClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      router.push('/dashboard')
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Fel e-post eller lösenord')
    } finally {
      setLoading(false)
    }
  }

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
          <h1 style={{ fontSize:22, fontWeight:700, marginBottom:6 }}>Logga in</h1>
          <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>Välkommen tillbaka</p>

          <form onSubmit={handleLogin} style={{ display:'flex', flexDirection:'column', gap:14 }}>
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
                type="password" required value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input"
              />
            </div>
            <button type="submit" disabled={loading} className="btn-gold" style={{ justifyContent:'center', width:'100%', padding:'12px' }}>
              {loading
                ? <Loader2 style={{ width:14, height:14, animation:'spin 1s linear infinite' }} />
                : <>Logga in <ArrowRight style={{ width:14, height:14 }} /></>}
            </button>
          </form>

          <p style={{ textAlign:'center', fontSize:12, color:'var(--text-dim)', marginTop:20 }}>
            Inget konto?{' '}
            <Link href="/signup" style={{ color:'var(--gold)', textDecoration:'none' }}>Skapa ett gratis</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
