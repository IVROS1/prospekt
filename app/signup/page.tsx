'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase'
import { Zap, ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const searchParams = useSearchParams()
  const supabase = createBrowserClient()

  const plan = searchParams.get('plan') || 'free'
  const what = searchParams.get('what') || ''
  const who = searchParams.get('who') || ''
  const where = searchParams.get('where') || ''

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: { plan, query_what: what, query_who: who, query_where: where },
        },
      })
      if (error) throw error
      setSent(true)
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Något gick fel')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
          <span className="text-3xl">📬</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Kolla din inbox!</h2>
        <p className="text-white/50 text-sm">Vi skickade en bekräftelselänk till <strong className="text-white">{email}</strong></p>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-white mb-1">Skapa konto</h1>
      <p className="text-white/40 text-sm mb-6">
        {plan !== 'free' ? `Plan: ${plan.charAt(0).toUpperCase() + plan.slice(1)}` : '5 leads gratis · Inget kreditkort'}
      </p>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-white/50 mb-1 block">E-post</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="du@bolag.se"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-white/50 mb-1 block">Lösenord</label>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Minst 8 tecken"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 disabled:opacity-50 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          Skapa konto <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <p className="text-center text-xs text-white/30 mt-5">
        Har du redan ett konto?{' '}
        <Link href="/login" className="text-indigo-400 hover:text-indigo-300">Logga in</Link>
      </p>
      <p className="text-center text-xs text-white/20 mt-2">
        Genom att skapa ett konto godkänner du våra{' '}
        <Link href="/terms" className="underline">villkor</Link>.
      </p>
    </>
  )
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/15 blur-[100px] rounded-full" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-white">Prospekt</span>
        </Link>

        {/* Card */}
        <div className="w-full bg-white/[0.04] rounded-2xl border border-white/10 shadow-2xl p-8 backdrop-blur-sm">
          <Suspense>
            <SignupForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
