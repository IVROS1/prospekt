'use client'

import { useState } from 'react'
import { ArrowRight, Zap, Download, Link2, Check, Star, Users, TrendingUp, Sparkles, Search, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'

const PRICING = [
  {
    name: 'Gratis',
    price: '0 kr',
    period: '',
    desc: 'Prova utan kreditkort',
    leads: '5 leads',
    features: ['5 leads/månad', 'AI-genererad outreach', 'Kopiera till urklipp'],
    cta: 'Kom igång gratis',
    href: '/signup',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '299 kr',
    period: '/mån',
    desc: 'För soloföretagare och konsulter',
    leads: '50 leads',
    features: ['50 leads/månad', 'AI-genererad outreach', 'CSV-export (HubSpot, Pipedrive)', 'Email + LinkedIn-texter'],
    cta: 'Starta Starter',
    href: '/signup?plan=starter',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '799 kr',
    period: '/mån',
    desc: 'För säljteam som vill växa',
    leads: '250 leads',
    features: ['250 leads/månad', 'AI-genererad outreach', 'CSV-export + Webhook', 'Status-tracking', 'Prioriterat stöd'],
    cta: 'Starta Pro',
    href: '/signup?plan=pro',
    highlight: true,
  },
  {
    name: 'Agency',
    price: '1 999 kr',
    period: '/mån',
    desc: 'För byråer och återförsäljare',
    leads: 'Obegränsat',
    features: ['Obegränsat leads', 'White-label', 'API-access', 'Webhook till alla CRM', 'Dedikerad support'],
    cta: 'Kontakta oss',
    href: 'mailto:hej@prospekt.app',
    highlight: false,
  },
]

const STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Beskriv din kund',
    desc: 'Skriv vad du säljer, till vilken typ av bolag och var. Som att prata med en kollega.',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Sparkles,
    step: '02',
    title: 'AI hittar leads',
    desc: 'Vi söker igenom svenska bolag och hittar rätt person med rätt roll — på sekunder.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Mail,
    step: '03',
    title: 'Outreach är klar',
    desc: 'Personaliserad email + LinkedIn-text per lead. Redo att skicka eller exportera till ditt CRM.',
    color: 'from-violet-500 to-blue-600',
  },
]

const MOCK_LEADS = [
  { company: 'Klarna Bank AB', role: 'Head of Sales', industry: 'Fintech', location: 'Stockholm', size: '3 000+' },
  { company: 'Epidemic Sound', role: 'VP Business Dev', industry: 'Music Tech', location: 'Stockholm', size: '500–1000' },
  { company: 'GetAccept', role: 'Revenue Director', industry: 'SaaS', location: 'Malmö', size: '200–500' },
]

export default function LandingPage() {
  const [demoWhat, setDemoWhat] = useState('')
  const [demoWho, setDemoWho] = useState('')
  const [demoWhere, setDemoWhere] = useState('')

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">Prospekt</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-white/50 hover:text-white transition-colors">
              Logga in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-lg shadow-indigo-500/20"
            >
              Prova gratis <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full" />
          <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[80px] rounded-full" />
          <div className="absolute top-40 right-1/4 w-[250px] h-[250px] bg-blue-600/10 blur-[80px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 pt-24 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full mb-8 border border-indigo-500/20">
            <Sparkles className="w-3 h-3" />
            AI-leadsmaskin byggd för Sverige
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Hitta dina nästa
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              10 kunder
            </span>{' '}
            <br className="hidden md:block" />
            på 60 sekunder
          </h1>

          <p className="text-base md:text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed px-2">
            Beskriv vem du säljer till. Vi hittar rätt bolag, rätt person och skriver
            personaliserad outreach på svenska — klar att skicka.
          </p>

          {/* Demo form */}
          <div className="max-w-2xl mx-auto bg-white/5 rounded-2xl border border-white/10 p-5 text-left backdrop-blur-sm shadow-2xl">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Prova direkt</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-white/40 mb-1 block">Jag säljer...</label>
                <input
                  value={demoWhat}
                  onChange={e => setDemoWhat(e.target.value)}
                  placeholder={'t.ex. "redovisningstjänster" eller "HR-mjukvara"'}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-white/40 mb-1 block">Till...</label>
                  <input
                    value={demoWho}
                    onChange={e => setDemoWho(e.target.value)}
                    placeholder={'t.ex. "startups 10–50 anst."'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 mb-1 block">I...</label>
                  <input
                    value={demoWhere}
                    onChange={e => setDemoWhere(e.target.value)}
                    placeholder={'t.ex. "Stockholm"'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  />
                </div>
              </div>
              <Link
                href={`/signup?what=${encodeURIComponent(demoWhat)}&who=${encodeURIComponent(demoWho)}&where=${encodeURIComponent(demoWhere)}`}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
              >
                Hitta mina kunder <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-center text-white/25 mt-3">5 leads gratis · Inget kreditkort</p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-10 text-white/30 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              Ingen onboarding
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              Svensk marknad
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              Funkar med HubSpot
            </div>
          </div>
        </div>
      </section>

      {/* MOCK PRODUCT PREVIEW — hidden on mobile */}
      <section className="hidden md:block max-w-5xl mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
            <div className="ml-4 flex-1 bg-white/5 rounded px-3 py-1 text-xs text-white/20 max-w-xs">
              app.prospekt.se/dashboard
            </div>
          </div>

          {/* Mock dashboard content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-white/30 mb-1">Senaste sökning</p>
                <p className="text-sm text-white/70 font-medium">"Redovisningstjänster → startups → Stockholm"</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                12 leads hittade
              </div>
            </div>

            <div className="space-y-3">
              {MOCK_LEADS.map((lead, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.04] rounded-xl p-4 border border-white/5 hover:border-indigo-500/20 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center text-indigo-400 font-bold text-sm border border-indigo-500/20 flex-shrink-0">
                    {lead.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm truncate">{lead.company}</p>
                    <p className="text-xs text-white/40">{lead.role} · {lead.industry} · {lead.location}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1 text-xs text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-2.5 py-1.5 rounded-lg transition-all">
                      <Mail className="w-3 h-3" /> Email
                    </button>
                    <button className="flex items-center gap-1 text-xs text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 px-2.5 py-1.5 rounded-lg transition-all">
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </button>
                  </div>
                  <div className="text-xs text-white/25 flex-shrink-0 ml-2">{lead.size} anst.</div>
                </div>
              ))}
              {/* Blurred rows hinting at more */}
              <div className="flex items-center gap-4 bg-white/[0.02] rounded-xl p-4 border border-white/5 blur-[2px] select-none">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex-shrink-0" />
                <div className="flex-1"><div className="h-3 bg-white/10 rounded w-40 mb-2" /><div className="h-2 bg-white/5 rounded w-28" /></div>
              </div>
              <div className="flex items-center gap-4 bg-white/[0.02] rounded-xl p-4 border border-white/5 blur-[3px] select-none">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex-shrink-0" />
                <div className="flex-1"><div className="h-3 bg-white/10 rounded w-36 mb-2" /><div className="h-2 bg-white/5 rounded w-24" /></div>
              </div>
              <div className="text-center pt-2">
                <Link href="/signup" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                  Logga in för att se alla 12 leads →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tre steg. Sedan säljer du.</h2>
          <p className="text-white/40">Inget mer manuellt prospektering i Excel.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div key={i} className="relative bg-white/[0.03] rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all group">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg`}>
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs font-bold text-white/20 mb-2 font-mono">{s.step}</div>
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CRM COMPATIBILITY */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Fungerar med ditt CRM</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Prospekt ersätter inte ditt CRM — vi matar det med kvalificerade leads.
              Exportera direkt till HubSpot, Pipedrive eller Salesforce.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel', 'Notion'].map(crm => (
              <span key={crm} className="bg-white/5 text-white/60 text-xs px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-green-400" /> {crm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20 border-t border-white/5">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enkel prissättning</h2>
          <p className="text-white/40">Betala bara för vad du använder. Avsluta när du vill.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 border transition-all ${
                p.highlight
                  ? 'bg-gradient-to-b from-indigo-500/20 to-purple-600/10 border-indigo-500/40 shadow-2xl shadow-indigo-500/10 scale-[1.02]'
                  : 'bg-white/[0.03] border-white/8 hover:border-white/15'
              }`}
            >
              {p.highlight && (
                <div className="text-indigo-300 text-xs font-bold mb-3 uppercase tracking-wider">Populärast</div>
              )}
              <div className="text-sm font-semibold mb-1 text-white/60">{p.name}</div>
              <div className="text-3xl font-bold mb-1 text-white">
                {p.price}<span className="text-sm font-normal text-white/30">{p.period}</span>
              </div>
              <div className="text-xs mb-5 text-white/30">{p.leads}/månad</div>
              <ul className="space-y-2 mb-6">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/50">
                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.highlight ? 'text-indigo-400' : 'text-green-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className={`block text-center text-sm font-medium py-2.5 rounded-xl transition-all ${
                  p.highlight
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-20">
        <div className="max-w-xl mx-auto text-center px-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-500/30">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Redo att hitta din nästa kund?</h2>
          <p className="text-white/40 mb-8">5 leads gratis. Inget kreditkort. Igång på 2 minuter.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-medium px-8 py-4 rounded-xl text-lg transition-all shadow-2xl shadow-indigo-500/30"
          >
            Kom igång nu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Prospekt</span>
            <span className="text-sm text-white/25">— AI-leadsmaskin för Sverige</span>
          </div>
          <div className="flex gap-6 text-xs text-white/25">
            <Link href="/privacy" className="hover:text-white/60">Integritetspolicy</Link>
            <Link href="/terms" className="hover:text-white/60">Villkor</Link>
            <a href="mailto:hej@prospekt.app" className="hover:text-white/60">hej@prospekt.app</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
