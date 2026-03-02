'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
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
        email, password,
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
      <div className="text-center py-6">
        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
          <span className="text-2xl">📬</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Kolla din inbox!</h2>
        <p className="text-slate-500 text-sm">Vi skickade en bekräftelselänk till <strong>{email}</strong></p>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-slate-900 mb-1">Skapa konto</h1>
      <p className="text-slate-500 text-sm mb-6">
        {plan !== 'free' ? `Plan: ${plan.charAt(0).toUpperCase() + plan.slice(1)}` : '5 leads gratis · Inget kreditkort'}
      </p>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-700 mb-1 block">E-post</label>
          <input
            type="email" required value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="du@bolag.se"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 bg-slate-50 transition-all"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700 mb-1 block">Lösenord</label>
          <input
            type="password" required minLength={8} value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Minst 8 tecken"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 bg-slate-50 transition-all"
          />
        </div>
        <button
          type="submit" disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          Skapa konto <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <p className="text-center text-xs text-slate-400 mt-5">
        Har du redan ett konto?{' '}
        <Link href="/login" className="text-indigo-600 hover:underline">Logga in</Link>
      </p>
      <p className="text-center text-xs text-slate-300 mt-2">
        Genom att skapa ett konto godkänner du våra{' '}
        <Link href="/terms" className="underline">villkor</Link>.
      </p>
    </>
  )
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="font-semibold text-slate-900">Prospekt</span>
      </Link>
      <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <Suspense>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  )
}
