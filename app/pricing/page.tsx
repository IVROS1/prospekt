'use client'

import { useState } from 'react'
import { Check, Zap, ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { createBrowserClient } from '@/lib/supabase'

const PLANS = [
  {
    key: 'free',
    name: 'Gratis',
    price: 0,
    leads: 5,
    features: ['5 leads/månad', 'AI email + LinkedIn-text', 'Kopiera till urklipp'],
    cta: 'Aktuell plan',
    disabled: true,
  },
  {
    key: 'starter',
    name: 'Starter',
    price: 299,
    leads: 50,
    features: ['50 leads/månad', 'AI email + LinkedIn-text', 'CSV-export (HubSpot, Pipedrive)', 'Status-tracking'],
    cta: 'Välj Starter',
    disabled: false,
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 799,
    leads: 250,
    features: ['250 leads/månad', 'AI email + LinkedIn-text', 'CSV-export + Webhook', 'Status-tracking', 'Prioriterat stöd'],
    cta: 'Välj Pro',
    disabled: false,
    highlight: true,
  },
  {
    key: 'agency',
    name: 'Agency',
    price: 1999,
    leads: 99999,
    features: ['Obegränsat leads', 'White-label', 'API-access', 'Webhook till alla CRM', 'Dedikerad support'],
    cta: 'Kontakta oss',
    disabled: false,
    agency: true,
  },
]

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const supabase = createBrowserClient()

  const handleUpgrade = async (planKey: string) => {
    if (planKey === 'agency') {
      window.location.href = 'mailto:hej@prospekt.app?subject=Agency-plan'
      return
    }

    setLoading(planKey)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = `/signup?plan=${planKey}`; return }

      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planKey }),
      })
      const { url, error } = await res.json()
      if (error) throw new Error(error)
      window.location.href = url
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Något gick fel')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Tillbaka
        </Link>

        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900">Prospekt</span>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Välj din plan</h1>
          <p className="text-slate-500">Avsluta när du vill. Inga bindningstider.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {PLANS.map(plan => (
            <div
              key={plan.key}
              className={`rounded-2xl p-6 border ${
                plan.highlight
                  ? 'bg-indigo-500 border-indigo-400 text-white shadow-xl'
                  : 'bg-white border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="text-indigo-100 text-xs font-bold mb-2">POPULÄRAST</div>
              )}
              <div className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-indigo-100' : 'text-slate-500'}`}>
                {plan.name}
              </div>
              <div className={`text-3xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                {plan.price === 0 ? '0 kr' : `${plan.price} kr`}
                <span className={`text-sm font-normal ${plan.highlight ? 'text-indigo-200' : 'text-slate-400'}`}>
                  {plan.price > 0 ? '/mån' : ''}
                </span>
              </div>
              <div className={`text-xs mb-5 ${plan.highlight ? 'text-indigo-100' : 'text-slate-400'}`}>
                {plan.leads === 99999 ? 'Obegränsat' : plan.leads} leads/mån
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-xs ${plan.highlight ? 'text-indigo-50' : 'text-slate-600'}`}>
                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-indigo-200' : 'text-green-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => !plan.disabled && handleUpgrade(plan.key)}
                disabled={plan.disabled || loading === plan.key}
                className={`w-full text-sm font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors ${
                  plan.disabled
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : plan.highlight
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {loading === plan.key ? <Loader2 className="w-4 h-4 animate-spin" /> : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
