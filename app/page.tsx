'use client'

import { useState } from 'react'
import { ArrowRight, Zap, Check, Search, Sparkles, Mail, Linkedin, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  {
    num: '01',
    title: 'Beskriv din kund',
    desc: 'Skriv vad du säljer, till vilken typ av bolag och var. Som att prata med en kollega.',
  },
  {
    num: '02',
    title: 'AI hittar leads',
    desc: 'Vi söker igenom svenska bolag och hittar rätt person med rätt roll — på sekunder.',
  },
  {
    num: '03',
    title: 'Outreach är klar',
    desc: 'Personaliserad email + LinkedIn-text per lead, klar att skicka eller exportera till ditt CRM.',
  },
]

const PRICING = [
  {
    name: 'Gratis',
    price: '0',
    period: '',
    leads: '5 leads / mån',
    features: ['5 leads per månad', 'AI-genererad outreach', 'Kopiera till urklipp'],
    cta: 'Kom igång gratis',
    href: '/signup',
    primary: false,
  },
  {
    name: 'Starter',
    price: '299',
    period: 'kr / mån',
    leads: '50 leads / mån',
    features: ['50 leads per månad', 'AI-genererad outreach', 'CSV-export', 'Email + LinkedIn-texter'],
    cta: 'Välj Starter',
    href: '/signup?plan=starter',
    primary: false,
  },
  {
    name: 'Pro',
    price: '799',
    period: 'kr / mån',
    leads: '250 leads / mån',
    features: ['250 leads per månad', 'AI-genererad outreach', 'CSV + Webhook', 'Status-tracking', 'Prioriterat stöd'],
    cta: 'Välj Pro',
    href: '/signup?plan=pro',
    primary: true,
  },
  {
    name: 'Agency',
    price: '1 999',
    period: 'kr / mån',
    leads: 'Obegränsat',
    features: ['Obegränsat leads', 'White-label', 'API-access', 'Alla CRM-integrationer', 'Dedikerad support'],
    cta: 'Kontakta oss',
    href: 'mailto:hej@prospekt.app',
    primary: false,
  },
]

const MOCK_LEADS = [
  { company: 'Klarna Bank AB', role: 'Head of Sales', industry: 'Fintech', location: 'Stockholm' },
  { company: 'Epidemic Sound', role: 'VP Business Dev', industry: 'Music Tech', location: 'Stockholm' },
  { company: 'GetAccept', role: 'Revenue Director', industry: 'SaaS', location: 'Malmö' },
]

export default function LandingPage() {
  const [what, setWhat] = useState('')
  const [who, setWho] = useState('')
  const [where, setWhere] = useState('')

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-slate-900 text-sm">Prospekt</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#pricing" className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">
              Priser
            </Link>
            <Link href="/login" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Logga in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Prova gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-indigo-600 text-sm font-medium mb-6 tracking-wide uppercase">
          AI-leadsmaskin för Sverige
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
          Hitta din nästa kund
          <br />
          <span className="text-indigo-600">på 60 sekunder.</span>
        </h1>

        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Beskriv vem du säljer till. Prospekt hittar rätt bolag, rätt person och
          skriver personaliserad outreach på svenska — klar att skicka.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-7 py-3.5 rounded-xl text-base transition-colors w-full sm:w-auto justify-center"
          >
            Prova gratis <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#how"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium px-7 py-3.5 rounded-xl text-base transition-colors border border-slate-200 hover:border-slate-300 w-full sm:w-auto justify-center"
          >
            Se hur det funkar
          </Link>
        </div>

        <p className="text-sm text-slate-400 mt-5">
          5 leads gratis · Inget kreditkort
        </p>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="max-w-3xl mx-auto px-6 pb-24" id="how">
        {/* Browser chrome */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/60">
          {/* Chrome bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 max-w-xs mx-auto text-center">
              app.prospekt.se/dashboard
            </div>
          </div>

          {/* Search bar inside app */}
          <div className="p-5 border-b border-slate-100 bg-white">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                value={what}
                onChange={e => setWhat(e.target.value)}
                placeholder='Jag säljer "redovisningstjänster"'
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all bg-slate-50"
              />
              <input
                value={who}
                onChange={e => setWho(e.target.value)}
                placeholder='Till "startups, 10–50 anst."'
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all bg-slate-50"
              />
              <Link
                href={`/signup?what=${encodeURIComponent(what)}&who=${encodeURIComponent(who)}`}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
              >
                <Search className="w-4 h-4" /> Hitta leads
              </Link>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white divide-y divide-slate-50">
            <div className="px-5 py-3 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-500">12 leads hittade</p>
              <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                Exportera CSV <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            {MOCK_LEADS.map((lead, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50/60 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-100 flex-shrink-0">
                  {lead.company[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 text-sm">{lead.company}</p>
                  <p className="text-xs text-slate-400 truncate">{lead.role} · {lead.industry} · {lead.location}</p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-1 text-xs text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg transition-all">
                    <Mail className="w-3 h-3" /> Email
                  </button>
                  <button className="flex items-center gap-1 text-xs text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg transition-all hidden sm:flex">
                    <Linkedin className="w-3 h-3" /> LinkedIn
                  </button>
                </div>
              </div>
            ))}
            <div className="px-5 py-3 text-center">
              <Link href="/signup" className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
                Logga in för att se alla 12 leads →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-slate-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hur det funkar</h2>
            <p className="text-slate-500 max-w-md mx-auto">Inget mer manuellt prospektering. Tre steg, sedan säljer du.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {STEPS.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xs font-bold text-indigo-600 font-mono">{s.num}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM SECTION */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Fungerar med ditt CRM</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Prospekt ersätter inte ditt CRM — vi matar det. Exportera leads direkt
              till HubSpot, Pipedrive eller Salesforce med ett klick.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel', 'Notion'].map(crm => (
              <span key={crm} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full">
                <Check className="w-3 h-3 text-emerald-500" /> {crm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Enkel prissättning</h2>
            <p className="text-slate-500">Betala bara för vad du använder. Avsluta när du vill.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 border transition-all flex flex-col ${
                  p.primary
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {p.primary && (
                  <span className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-3 block">Populärast</span>
                )}
                <p className={`text-sm font-semibold mb-1 ${p.primary ? 'text-indigo-100' : 'text-slate-500'}`}>{p.name}</p>
                <div className="mb-1">
                  <span className={`text-3xl font-bold ${p.primary ? 'text-white' : 'text-slate-900'}`}>{p.price}</span>
                  <span className={`text-sm ml-1 ${p.primary ? 'text-indigo-200' : 'text-slate-400'}`}>{p.period}</span>
                </div>
                <p className={`text-xs mb-5 ${p.primary ? 'text-indigo-200' : 'text-slate-400'}`}>{p.leads}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-start gap-2 text-xs ${p.primary ? 'text-indigo-100' : 'text-slate-500'}`}>
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.primary ? 'text-indigo-300' : 'text-emerald-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className={`block text-center text-sm font-medium py-2.5 rounded-xl transition-all ${
                    p.primary
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Redo att hitta din nästa kund?</h2>
          <p className="text-slate-400 mb-8">5 leads gratis. Inget kreditkort. Igång på 2 minuter.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Kom igång nu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Prospekt</span>
            <span className="text-sm text-slate-500">— AI-leadsmaskin för Sverige</span>
          </div>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white">Integritetspolicy</Link>
            <Link href="/terms" className="hover:text-white">Villkor</Link>
            <a href="mailto:hej@prospekt.app" className="hover:text-white">hej@prospekt.app</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
