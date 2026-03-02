'use client'

import { ArrowRight, Zap, Check, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'

const MOCK_LEADS = [
  { company: 'Klarna Bank AB',    role: 'Head of Sales',           tag: 'Fintech',    score: 98 },
  { company: 'Epidemic Sound',    role: 'VP Business Development', tag: 'Music Tech', score: 94 },
  { company: 'GetAccept',         role: 'Revenue Director',        tag: 'SaaS',       score: 91 },
  { company: 'Bambuser',          role: 'VP Sales',                tag: 'E-commerce', score: 87 },
  { company: 'Wrapp',             role: 'Head of Partnerships',    tag: 'Retail Tech',score: 84 },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white select-none">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#f5f5f7]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">Prospekt</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#outreach" className="hover:text-gray-900 transition-colors hidden sm:block">Funktioner</Link>
            <Link href="#pricing"  className="hover:text-gray-900 transition-colors hidden sm:block">Priser</Link>
            <Link href="/login"    className="hover:text-gray-900 transition-colors">Logga in</Link>
            <Link href="/signup"   className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors ml-2">Prova gratis</Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="bg-[#f5f5f7] overflow-hidden text-center">
        <div className="pt-20 pb-0 px-6">

          <p className="text-sm text-gray-500 mb-4 tracking-wide">Prospekt</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.05] mb-4">
            Hitta rätt kund.<br />Automatiskt.
          </h1>

          <p className="text-gray-500 text-xl max-w-sm mx-auto mb-8">
            AI-leadsmaskin byggd för Sverige.
          </p>

          <div className="flex items-center justify-center gap-3 mb-16">
            <Link href="/signup"  className="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium px-6 py-3 rounded-full transition-colors">
              Prova gratis
            </Link>
            <Link href="#demo" className="text-indigo-600 hover:text-indigo-800 text-base font-medium px-6 py-3 rounded-full border border-indigo-200 hover:border-indigo-300 bg-white/60 transition-colors inline-flex items-center gap-1.5">
              Se hur det funkar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* PRODUCT IMAGE — full width, flush to bottom */}
        <div className="max-w-4xl mx-auto px-4" id="demo">
          <div className="rounded-t-3xl border border-gray-200 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
            
            {/* Chrome */}
            <div className="bg-gray-100/80 backdrop-blur border-b border-gray-200 px-5 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-white border border-gray-200 rounded-lg py-1.5 px-3 text-xs text-gray-400 text-center max-w-xs mx-auto">
                app.prospekt.se
              </div>
            </div>

            {/* App toolbar */}
            <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Sökning · Stockholm · Startups</p>
                <p className="text-sm font-semibold text-gray-900">12 leads hittade</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full transition-colors">
                  Exportera CSV
                </button>
                <button className="text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-full transition-colors">
                  + Ny sökning
                </button>
              </div>
            </div>

            {/* Leads list */}
            <div className="bg-white">
              {MOCK_LEADS.map((lead, i) => (
                <div key={i} className={`flex items-center gap-4 px-6 py-4 group hover:bg-gray-50 transition-colors ${i < MOCK_LEADS.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-100 flex-shrink-0">
                    {lead.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold text-gray-900 text-sm">{lead.company}</p>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full hidden sm:inline">{lead.tag}</span>
                    </div>
                    <p className="text-xs text-gray-400">{lead.role}</p>
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {lead.score}% match
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                      <Mail className="w-3 h-3" /> Email
                    </button>
                    <button className="hidden sm:flex items-center gap-1 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </button>
                  </div>
                </div>
              ))}

              {/* Blurred/locked rows */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-4 border-t border-gray-50" style={{ filter: `blur(${2 + i * 1.5}px)`, opacity: 0.35 }}>
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-gray-200 rounded-full w-44" />
                    <div className="h-2 bg-gray-100 rounded-full w-32" />
                  </div>
                </div>
              ))}

              <div className="border-t border-gray-100 py-5 text-center bg-gradient-to-b from-white to-gray-50/80">
                <Link href="/signup" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1.5">
                  Logga in för att se alla 12 leads <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUTREACH SECTION ─── */}
      <section className="bg-white text-center overflow-hidden pt-24 pb-0" id="outreach">
        <div className="px-6 mb-14">
          <p className="text-sm text-gray-400 mb-4">Outreach</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Personaliserat.<br />Klart att skicka.
          </h2>
          <p className="text-gray-400 text-lg max-w-xs mx-auto mb-8">
            AI skriver email och LinkedIn-text per lead — på professionell svenska.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/signup"  className="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium px-6 py-3 rounded-full transition-colors">
              Prova gratis
            </Link>
            <Link href="#pricing" className="text-indigo-600 text-base font-medium px-6 py-3 rounded-full border border-indigo-200 hover:border-indigo-300 bg-transparent transition-colors">
              Se priser
            </Link>
          </div>
        </div>

        {/* Outreach card — full width */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="rounded-t-3xl border border-gray-200 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-left">
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100">K</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Klarna Bank AB</p>
                  <p className="text-xs text-gray-400">Alex Magnusson · Head of Sales</p>
                </div>
              </div>
              <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">98% match</span>
            </div>

            <div className="bg-white divide-y divide-gray-50">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-lg bg-indigo-50 flex items-center justify-center"><Mail className="w-3 h-3 text-indigo-500" /></div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Hej Alex,<br /><br />
                  Jag såg att Klarna expanderar sitt säljteam — grattis. Jag hjälper svenska bolag att hitta och nå rätt kunder snabbare med AI.<br /><br />
                  Kan vi ta 15 minuter?
                </p>
                <div className="flex gap-2">
                  <button className="text-xs font-medium bg-indigo-600 text-white px-4 py-2 rounded-full">Kopiera text</button>
                  <button className="text-xs font-medium border border-gray-200 text-gray-500 px-4 py-2 rounded-full hover:bg-gray-50">Generera om</button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center"><Linkedin className="w-3 h-3 text-blue-500" /></div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">LinkedIn</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Hej Alex — imponerad av Klarnas tillväxt. Jobbar med AI-driven prospektering för svenska bolag. Kan vi prata?
                </p>
                <div className="flex gap-2">
                  <button className="text-xs font-medium bg-indigo-600 text-white px-4 py-2 rounded-full">Kopiera text</button>
                  <button className="text-xs font-medium border border-gray-200 text-gray-500 px-4 py-2 rounded-full hover:bg-gray-50">Generera om</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CRM SECTION ─── */}
      <section className="bg-[#f0f4ff] text-center py-24 px-6">
        <p className="text-sm text-indigo-400 mb-4">Integrationer</p>
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
          Funkar med ditt CRM.
        </h2>
        <p className="text-gray-400 text-lg max-w-xs mx-auto mb-10">
          Exportera leads direkt. Inget manuellt arbete.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
          {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel', 'Notion', 'Webhook API'].map(c => (
            <div key={c} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="bg-white py-24 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm text-gray-400 mb-4">Prissättning</p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight mb-4">Enkelt och transparent.</h2>
            <p className="text-gray-400 text-lg">Avsluta när du vill.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Gratis',  price: '0',     unit: '',        leads: '5 leads / mån',   features: ['5 leads/månad', 'AI-outreach', 'Clipboard'],                          cta: 'Kom igång',   href: '/signup',              hi: false },
              { name: 'Starter', price: '299',   unit: ' kr/mån', leads: '50 leads / mån',  features: ['50 leads/månad', 'AI-outreach', 'CSV-export', 'Email + LinkedIn'],     cta: 'Välj Starter',href: '/signup?plan=starter',  hi: false },
              { name: 'Pro',     price: '799',   unit: ' kr/mån', leads: '250 leads / mån', features: ['250 leads/månad', 'AI-outreach', 'CSV + Webhook', 'Status-tracking', 'Prioriterat stöd'], cta: 'Välj Pro', href: '/signup?plan=pro', hi: true },
              { name: 'Agency',  price: '1 999', unit: ' kr/mån', leads: 'Obegränsat',      features: ['Obegränsat leads', 'White-label', 'API-access', 'Alla CRM', 'Dedikerad support'], cta: 'Kontakta oss', href: 'mailto:hej@prospekt.app', hi: false },
            ].map(p => (
              <div key={p.name} className={`rounded-2xl p-6 flex flex-col border ${p.hi ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-200 hover:border-gray-300'} transition-colors`}>
                {p.hi && <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-3">Populärast</p>}
                <p className={`text-sm font-medium mb-1 ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.name}</p>
                <p className={`text-3xl font-bold mb-1 ${p.hi ? 'text-white' : 'text-gray-900'}`}>
                  {p.price}<span className={`text-sm font-normal ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.unit}</span>
                </p>
                <p className={`text-xs mb-5 ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.leads}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${p.hi ? 'text-indigo-100' : 'text-gray-500'}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${p.hi ? 'text-indigo-300' : 'text-emerald-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={`block text-center text-sm font-semibold py-3 rounded-full transition-colors ${p.hi ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gray-900 py-24 text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">Börja idag.</h2>
        <p className="text-gray-400 text-lg mb-10">5 leads gratis. Igång på 2 minuter.</p>
        <Link href="/signup" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full text-base transition-colors">
          Prova gratis <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-900 border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center">
              <Zap className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-sm text-gray-500">Prospekt · AI-leadsmaskin för Sverige</span>
          </div>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="mailto:hej@prospekt.app" className="hover:text-gray-300">hej@prospekt.app</a>
            <Link href="/privacy" className="hover:text-gray-300">Integritetspolicy</Link>
            <Link href="/terms"   className="hover:text-gray-300">Villkor</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
