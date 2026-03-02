'use client'

import { ArrowRight, Zap, Check, Mail, Linkedin, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const MOCK_LEADS = [
  { company: 'Klarna Bank AB', role: 'Head of Sales', industry: 'Fintech · Stockholm', score: 98 },
  { company: 'Epidemic Sound', role: 'VP Business Development', industry: 'Music Tech · Stockholm', score: 94 },
  { company: 'GetAccept', role: 'Revenue Director', industry: 'SaaS · Malmö', score: 91 },
  { company: 'Bambuser', role: 'VP Sales', industry: 'E-commerce · Stockholm', score: 87 },
]

const FEATURES = [
  {
    title: 'Svenska leads, inte amerikanska',
    desc: 'Till skillnad från Apollo och Clay är Prospekt byggt för den svenska marknaden. Rätt bolag, rätt person, rätt kontext.',
  },
  {
    title: 'Outreach klar att skicka',
    desc: 'AI skriver personaliserad email och LinkedIn-text per lead. Professionell svenska, inte säljig. Klar på sekunder.',
  },
  {
    title: 'Funkar med ditt CRM',
    desc: 'Exportera leads som CSV direkt till HubSpot, Pipedrive eller Salesforce. Eller skicka via webhook.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">Prospekt</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-gray-500 hover:text-gray-900 hidden sm:block">Features</Link>
            <Link href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 hidden sm:block">Priser</Link>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900">Logga in</Link>
            <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Prova gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-5">
          AI-driven leadsgenerering för Sverige
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Hitta rätt kund.
          <br />
          Automatiskt.
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto mb-8">
          Beskriv vem du säljer till — Prospekt hittar rätt bolag, rätt person
          och skriver personaliserad outreach på svenska.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors"
          >
            Prova gratis <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-6 py-3.5 rounded-xl text-base border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Se ett exempel
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-4">5 leads gratis · Inget kreditkort krävs</p>
      </section>

      {/* ── PRODUCT DEMO ── */}
      <section className="max-w-4xl mx-auto px-6 pb-24" id="demo">
        <div className="rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 overflow-hidden">

          {/* App top bar */}
          <div className="bg-gray-50 border-b border-gray-200 px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              </div>
              <div className="hidden sm:block bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400">
                app.prospekt.se/dashboard
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-indigo-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              12 leads hittade
            </div>
          </div>

          {/* Search query */}
          <div className="bg-white border-b border-gray-100 px-5 py-4">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Senaste sökning</p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">&ldquo;Redovisningstjänster&rdquo;</span> till{' '}
              <span className="font-medium">startups 10–50 anst.</span> i{' '}
              <span className="font-medium">Stockholm</span>
            </p>
          </div>

          {/* Lead rows */}
          <div className="bg-white divide-y divide-gray-50">
            {MOCK_LEADS.map((lead, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-100 flex-shrink-0">
                  {lead.company[0]}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{lead.company}</p>
                  <p className="text-xs text-gray-400">{lead.role} · {lead.industry}</p>
                </div>

                {/* Score */}
                <div className="hidden sm:flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  {lead.score}% match
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-1 text-xs text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg">
                    <Mail className="w-3 h-3" /> Email
                  </button>
                  <button className="hidden sm:flex items-center gap-1 text-xs text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg">
                    <Linkedin className="w-3 h-3" /> LinkedIn
                  </button>
                </div>
              </div>
            ))}

            {/* Blurred hint rows */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 select-none" style={{ filter: `blur(${3 + i}px)`, opacity: 0.4 }}>
                <div className="w-9 h-9 rounded-xl bg-gray-100 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-3.5 bg-gray-200 rounded w-36 mb-2" />
                  <div className="h-2.5 bg-gray-100 rounded w-24" />
                </div>
              </div>
            ))}

            <div className="px-5 py-4 bg-gray-50 text-center">
              <Link href="/signup" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
                Logga in för att se alla leads <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="border-t border-gray-100 py-24 bg-gray-50" id="features">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Byggt för Sverige</h2>
            <p className="text-gray-500 max-w-sm mx-auto">Inte ytterligare ett amerikanskt verktyg med dåliga svenska leads.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRM ── */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Integrerar med ditt CRM</h3>
            <p className="text-gray-500 text-sm">Exportera leads med ett klick. Inget manuellt copy-paste.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel', 'Notion'].map(c => (
              <span key={c} className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                <Check className="w-3 h-3 text-emerald-500" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="border-t border-gray-100 py-24 bg-gray-50" id="pricing">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Välj din plan</h2>
            <p className="text-gray-500">Avsluta när du vill. Inget bindningstid.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Gratis', price: '0', unit: '', leads: '5 leads/mån', features: ['5 leads/månad', 'AI-outreach', 'Clipboard-export'], cta: 'Kom igång', href: '/signup', highlighted: false },
              { name: 'Starter', price: '299', unit: ' kr/mån', leads: '50 leads/mån', features: ['50 leads/månad', 'AI-outreach', 'CSV-export', 'Email + LinkedIn'], cta: 'Välj Starter', href: '/signup?plan=starter', highlighted: false },
              { name: 'Pro', price: '799', unit: ' kr/mån', leads: '250 leads/mån', features: ['250 leads/månad', 'AI-outreach', 'CSV + Webhook', 'Status-tracking', 'Prioriterat stöd'], cta: 'Välj Pro', href: '/signup?plan=pro', highlighted: true },
              { name: 'Agency', price: '1 999', unit: ' kr/mån', leads: 'Obegränsat', features: ['Obegränsat leads', 'White-label', 'API-access', 'Alla CRM', 'Dedikerad support'], cta: 'Kontakta', href: 'mailto:hej@prospekt.app', highlighted: false },
            ].map(p => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 border flex flex-col ${
                  p.highlighted
                    ? 'bg-indigo-600 border-indigo-600 text-white'
                    : 'bg-white border-gray-200'
                }`}
              >
                {p.highlighted && <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-3">Populärast</p>}
                <p className={`text-sm font-medium mb-1 ${p.highlighted ? 'text-indigo-200' : 'text-gray-500'}`}>{p.name}</p>
                <p className={`text-3xl font-bold mb-1 ${p.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {p.price}<span className={`text-sm font-normal ${p.highlighted ? 'text-indigo-200' : 'text-gray-400'}`}>{p.unit}</span>
                </p>
                <p className={`text-xs mb-5 ${p.highlighted ? 'text-indigo-200' : 'text-gray-400'}`}>{p.leads}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-start gap-2 text-xs ${p.highlighted ? 'text-indigo-100' : 'text-gray-500'}`}>
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.highlighted ? 'text-indigo-300' : 'text-emerald-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-colors ${
                    p.highlighted
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Börja hitta kunder idag.</h2>
          <p className="text-gray-400 mb-8">5 leads gratis. Igång på under 2 minuter.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Prova gratis <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-gray-400">Prospekt · AI-leadsmaskin för Sverige</span>
          </div>
          <div className="flex gap-5 text-xs text-gray-600">
            <a href="mailto:hej@prospekt.app" className="hover:text-gray-300">hej@prospekt.app</a>
            <Link href="/privacy" className="hover:text-gray-300">Integritetspolicy</Link>
            <Link href="/terms" className="hover:text-gray-300">Villkor</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
