'use client'

import { ArrowRight, Zap, Check, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'

const MOCK_LEADS = [
  { company: 'Klarna Bank AB',   role: 'Head of Sales',         industry: 'Fintech · Stockholm',      score: 98 },
  { company: 'Epidemic Sound',   role: 'VP Business Development',industry: 'Music Tech · Stockholm',   score: 94 },
  { company: 'GetAccept',        role: 'Revenue Director',       industry: 'SaaS · Malmö',             score: 91 },
  { company: 'Bambuser',         role: 'VP Sales',               industry: 'E-commerce · Stockholm',   score: 87 },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">Prospekt</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link href="#features" className="text-sm text-gray-500 hover:text-gray-900 hidden md:block">Features</Link>
            <Link href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 hidden md:block">Priser</Link>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900">Logga in</Link>
            <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Prova gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* ── SECTION 1 — HERO ── */}
      <section className="bg-[#f5f5f7] text-center pt-16 pb-0 overflow-hidden">
        <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-4">
          Prospekt
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-3">
          Hitta rätt kund.<br className="hidden sm:block" /> Automatiskt.
        </h1>
        <p className="text-gray-500 text-lg max-w-sm mx-auto mb-8 px-4">
          AI-leadsmaskin byggd för den svenska marknaden.
        </p>
        <div className="flex items-center justify-center gap-3 mb-12">
          <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
            Prova gratis
          </Link>
          <Link href="#demo" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium px-5 py-2.5 rounded-full border border-indigo-200 hover:border-indigo-300 bg-white transition-colors inline-flex items-center gap-1">
            Se hur det funkar <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product screenshot */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-t-2xl border border-gray-200 border-b-0 overflow-hidden shadow-2xl shadow-gray-300/40">
            {/* Browser chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              </div>
              <div className="flex-1 bg-white border border-gray-200 rounded-md py-1 text-xs text-gray-400 text-center max-w-xs mx-auto">
                app.prospekt.se
              </div>
            </div>
            {/* App header */}
            <div className="bg-white border-b border-gray-100 px-5 py-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">Dashboard</p>
              <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                12 leads hittade
              </div>
            </div>
            {/* Leads */}
            <div className="bg-white divide-y divide-gray-50">
              {MOCK_LEADS.map((lead, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 group hover:bg-gray-50/70 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100 flex-shrink-0">
                    {lead.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{lead.company}</p>
                    <p className="text-xs text-gray-400 truncate">{lead.role} · {lead.industry}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex-shrink-0">
                    {lead.score}% match
                  </div>
                  <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1 text-xs text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-lg hover:bg-gray-50">
                      <Mail className="w-3 h-3" /> Email
                    </button>
                    <button className="hidden sm:flex items-center gap-1 text-xs text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-lg hover:bg-gray-50">
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </button>
                  </div>
                </div>
              ))}
              <div className="px-5 py-3.5 bg-gray-50/60">
                <div className="flex gap-3 blur-sm select-none pointer-events-none">
                  <div className="w-8 h-8 rounded-xl bg-gray-200 flex-shrink-0" />
                  <div className="flex-1 py-1 space-y-1.5">
                    <div className="h-2.5 bg-gray-200 rounded w-40" />
                    <div className="h-2 bg-gray-100 rounded w-28" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — OUTREACH ── */}
      <section className="bg-white text-center pt-20 pb-0 overflow-hidden" id="demo">
        <p className="text-gray-500 text-sm mb-3">Outreach på sekunder</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight mb-3">
          Personaliserat. Klart att skicka.
        </h2>
        <p className="text-gray-500 text-base max-w-xs mx-auto mb-8">
          AI skriver email och LinkedIn-text per lead — på professionell svenska.
        </p>
        <div className="flex items-center justify-center gap-3 mb-14">
          <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
            Prova gratis
          </Link>
          <Link href="#pricing" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium px-5 py-2.5 rounded-full border border-indigo-200 hover:border-indigo-300 bg-white transition-colors">
            Se priser
          </Link>
        </div>

        {/* Outreach mockup */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="rounded-t-2xl border border-gray-200 border-b-0 overflow-hidden shadow-2xl shadow-gray-200/50 text-left">
            <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">AI-genererad outreach — Klarna Bank AB</p>
            </div>
            <div className="bg-white divide-y divide-gray-50">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3 h-3 text-indigo-500" />
                  </div>
                  <p className="text-xs font-semibold text-gray-700">Email</p>
                </div>
                <p className="text-xs text-gray-500 mb-2 font-medium">Till: alex.magnusson@klarna.com · Head of Sales</p>
                <p className="text-sm text-gray-900 leading-relaxed">
                  Hej Alex,<br /><br />
                  Jag såg att Klarna expanderar sitt säljteam just nu — grattis till tillväxten. Jag hjälper svenska SaaS-bolag att hitta och nå rätt kunder snabbare med AI-driven prospektering.<br /><br />
                  Kan vi ta 15 minuter nästa vecka?<br /><br />
                  Mvh,
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-medium">Kopiera</button>
                  <button className="text-xs border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg">Redigera</button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-3 h-3 text-blue-500" />
                  </div>
                  <p className="text-xs font-semibold text-gray-700">LinkedIn-meddelande</p>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed">
                  Hej Alex — imponerad av Klarnas tillväxt. Hjälper bolag som era med AI-driven prospektering på svenska. Kan vi ta ett snabbt samtal?
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-medium">Kopiera</button>
                  <button className="text-xs border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg">Redigera</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — CRM ── */}
      <section className="bg-[#f0f4ff] text-center py-20" id="features">
        <p className="text-indigo-500 text-sm mb-3">Sömlöst flöde</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
          Funkar med ditt CRM.
        </h2>
        <p className="text-gray-500 text-base max-w-xs mx-auto mb-8">
          Exportera leads med ett klick. Inga copy-paste. Ingen manuell inmatning.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 px-6">
          {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel', 'Notion', 'Webhook'].map(crm => (
            <div key={crm} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-full shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              {crm}
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4 — PRICING ── */}
      <section className="bg-white py-24 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gray-500 text-sm mb-3">Prissättning</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">Enkel och transparent.</h2>
            <p className="text-gray-500">Avsluta när du vill. Inget bindningstid.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Gratis',  price: '0',     unit: '',        leads: '5 leads / mån',  features: ['5 leads/månad', 'AI-outreach', 'Clipboard'],                          cta: 'Kom igång',  href: '/signup',             hi: false },
              { name: 'Starter', price: '299',   unit: ' kr/mån', leads: '50 leads / mån', features: ['50 leads/månad', 'AI-outreach', 'CSV-export', 'Email + LinkedIn'],     cta: 'Välj plan',  href: '/signup?plan=starter', hi: false },
              { name: 'Pro',     price: '799',   unit: ' kr/mån', leads: '250 leads / mån',features: ['250 leads/månad', 'AI-outreach', 'CSV + Webhook', 'Status-tracking', 'Prioriterat stöd'], cta: 'Välj plan', href: '/signup?plan=pro', hi: true },
              { name: 'Agency',  price: '1 999', unit: ' kr/mån', leads: 'Obegränsat',     features: ['Obegränsat leads', 'White-label', 'API-access', 'Alla CRM', 'Dedikerad support'], cta: 'Kontakta', href: 'mailto:hej@prospekt.app', hi: false },
            ].map(p => (
              <div key={p.name} className={`rounded-2xl p-6 flex flex-col border ${p.hi ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-200'}`}>
                {p.hi && <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-3">Populärast</p>}
                <p className={`text-sm font-medium mb-1 ${p.hi ? 'text-indigo-200' : 'text-gray-500'}`}>{p.name}</p>
                <p className={`text-3xl font-bold mb-1 ${p.hi ? 'text-white' : 'text-gray-900'}`}>
                  {p.price}<span className={`text-sm font-normal ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.unit}</span>
                </p>
                <p className={`text-xs mb-5 ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.leads}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-start gap-2 text-xs ${p.hi ? 'text-indigo-100' : 'text-gray-500'}`}>
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.hi ? 'text-indigo-300' : 'text-emerald-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={`block text-center text-sm font-semibold py-2.5 rounded-full transition-colors ${p.hi ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gray-900 py-20 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Börja idag.</h2>
        <p className="text-gray-400 text-base mb-8">5 leads gratis. Igång på under 2 minuter.</p>
        <Link href="/signup" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-7 py-3.5 rounded-full text-base transition-colors">
          Prova gratis <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center">
              <Zap className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-sm text-gray-500">Prospekt · AI-leadsmaskin för Sverige</span>
          </div>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="mailto:hej@prospekt.app" className="hover:text-gray-300">hej@prospekt.app</a>
            <Link href="/privacy" className="hover:text-gray-300">Integritetspolicy</Link>
            <Link href="/terms" className="hover:text-gray-300">Villkor</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
