'use client'

import { useState } from 'react'
import { Check, ArrowLeft, Loader2, Zap, Star } from 'lucide-react'
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
    features: ['Obegränsat leads', 'White-label rapport', 'API-access', 'Webhook till alla CRM', 'Dedikerad support'],
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
    if (planKey === 'free') return

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
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', position: 'relative' }}>

      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      {/* Top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        borderBottom: '1px solid var(--border)',
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 20px', height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span className="font-mono" style={{ fontSize: 12, letterSpacing: '3px', color: 'var(--gold)', fontWeight: 600 }}>PROSPEKT</span>
          </Link>
          <Link href="/dashboard" style={{ textDecoration: 'none', fontSize: 13, color: 'var(--text-muted)' }}>
            ← Dashboard
          </Link>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', padding: '60px 20px' }}>

        {/* Back link */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', marginBottom: 48 }}>
          <ArrowLeft style={{ width: 14, height: 14 }} /> Tillbaka
        </Link>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--gold-dim)', border: '1px solid var(--border-gold)',
            borderRadius: 20, padding: '6px 16px', marginBottom: 24,
          }}>
            <Zap style={{ width: 12, height: 12, color: 'var(--gold)' }} />
            <span className="font-mono" style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '2px' }}>PRISSÄTTNING</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Välj din plan
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-muted)' }}>
            Avsluta när du vill. Inga bindningstider.
          </p>
        </div>

        {/* Plans grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {PLANS.map(plan => (
            <div
              key={plan.key}
              style={{
                borderRadius: 12,
                padding: 24,
                border: plan.highlight
                  ? '1px solid var(--border-gold)'
                  : '1px solid var(--border)',
                background: plan.highlight
                  ? 'linear-gradient(135deg, rgba(240,165,0,0.12) 0%, rgba(10,10,10,0) 100%)'
                  : 'var(--bg-card)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--gold)', color: '#000', fontSize: 10, fontWeight: 700,
                  fontFamily: 'var(--font-mono)', letterSpacing: '2px',
                  padding: '4px 14px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <Star style={{ width: 9, height: 9 }} />
                  POPULÄRAST
                </div>
              )}

              {/* Plan name */}
              <div className="font-mono" style={{ fontSize: 10, letterSpacing: '2px', color: plan.highlight ? 'var(--gold)' : 'var(--text-muted)', marginBottom: 8 }}>
                {plan.name.toUpperCase()}
              </div>

              {/* Price */}
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 32, fontWeight: 800, color: plan.highlight ? 'var(--gold)' : 'var(--text)' }}>
                  {plan.price === 0 ? '0' : plan.price}
                </span>
                <span style={{ fontSize: 14, color: 'var(--text-muted)', marginLeft: 2 }}>
                  {plan.price === 0 ? ' kr' : ' kr/mån'}
                </span>
              </div>

              {/* Leads */}
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20 }}>
                {plan.leads === 99999 ? 'Obegränsat' : plan.leads} leads/mån
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text-muted)' }}>
                    <Check style={{ width: 13, height: 13, marginTop: 2, flexShrink: 0, color: plan.highlight ? 'var(--gold)' : 'var(--green)' }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleUpgrade(plan.key)}
                disabled={plan.disabled || loading === plan.key}
                className={plan.highlight ? 'btn-gold' : 'btn-outline'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '11px',
                  fontSize: 13,
                  opacity: plan.disabled ? 0.4 : 1,
                  cursor: plan.disabled ? 'not-allowed' : 'pointer',
                }}
              >
                {loading === plan.key
                  ? <Loader2 style={{ width: 14, height: 14, animation: 'spin 1s linear infinite' }} />
                  : plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-dim)', marginTop: 40 }}>
          Betalning via Stripe. Säker och krypterad. Avsluta när som helst.
        </p>
      </div>
    </div>
  )
}
