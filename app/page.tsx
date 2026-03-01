'use client'

import { useState } from 'react'
import { ArrowRight, Zap, Download, Link2, Check, Star, Users, TrendingUp } from 'lucide-react'
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
    features: ['250 leads/månad', 'AI-genererad outreach', 'CSV-export + Webhook-integration', 'Status-tracking', 'Prioriterat stöd'],
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
    features: ['Obegränsat leads', 'White-label (din logga)', 'API-access', 'Webhook till alla CRM', 'Dedikerad support'],
    cta: 'Kontakta oss',
    href: 'mailto:hej@prospekt.app',
    highlight: false,
  },
]

const TESTIMONIALS = [
  { name: 'Sara L.', role: 'Konsult, Stockholm', text: 'Hittade 3 nya kunder på första veckan. Hade aldrig fått dem utan Prospekt.' },
  { name: 'Marcus K.', role: 'Säljchef, SaaS-bolag', text: 'Vi ersatte Apollo och Clay med Prospekt. Halva priset, bättre leads för Sverige.' },
  { name: 'Anna B.', role: 'Grundare, Göteborg', text: 'Äntligen ett lead-verktyg som faktiskt förstår den svenska marknaden.' },
]

export default function LandingPage() {
  const [demoWhat, setDemoWhat] = useState('')
  const [demoWho, setDemoWho] = useState('')
  const [demoWhere, setDemoWhere] = useState('')

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-[#FAFAF9]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900">Prospekt</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Logga in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Prova gratis <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-indigo-100">
          <Star className="w-3 h-3 fill-indigo-400 text-indigo-400" />
          AI-leadsmaskin för svenska bolag
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Hitta dina nästa<br />
          <span className="text-indigo-500">10 kunder</span> på 60 sekunder
        </h1>

        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Beskriv vem du säljer till. Prospekt hittar rätt bolag, rätt person och skriver
          personaliserad outreach på svenska — klar att skicka.
        </p>

        {/* Demo search box */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-6 text-left">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Prova direkt</p>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Jag säljer...</label>
              <input
                value={demoWhat}
                onChange={e => setDemoWhat(e.target.value)}
                placeholder='t.ex. "redovisningstjänster" eller "HR-mjukvara"'
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-slate-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Till...</label>
                <input
                  value={demoWho}
                  onChange={e => setDemoWho(e.target.value)}
                  placeholder='t.ex. "startups 10-50 anst."'
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-slate-50"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">I...</label>
                <input
                  value={demoWhere}
                  onChange={e => setDemoWhere(e.target.value)}
                  placeholder='t.ex. "Stockholm" eller "hela Sverige"'
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-slate-50"
                />
              </div>
            </div>
            <Link
              href={`/signup?what=${encodeURIComponent(demoWhat)}&who=${encodeURIComponent(demoWho)}&where=${encodeURIComponent(demoWhere)}`}
              className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-xl transition-colors"
            >
              Hitta mina kunder <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-center text-slate-400 mt-3">5 leads gratis • Inget kreditkort</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Tre steg. Sedan säljer du.</h2>
        <p className="text-slate-500 text-center mb-12">Inget mer manuellt prospektering i Excel.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '1', icon: <Users className="w-6 h-6 text-indigo-500" />, title: 'Beskriv din kund', desc: 'Skriv vad du säljer, till vilken typ av bolag och var. Samma som du skulle säga till en kollega.' },
            { step: '2', icon: <TrendingUp className="w-6 h-6 text-indigo-500" />, title: 'AI hittar leads', desc: 'Vi söker igenom svenska bolag och hittar rätt person med rätt roll. Varje lead är relevant.' },
            { step: '3', icon: <Zap className="w-6 h-6 text-indigo-500" />, title: 'Outreach är klar', desc: 'Personaliserad email och LinkedIn-text per lead, klar att skicka eller exportera till ditt CRM.' },
          ].map(item => (
            <div key={item.step} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <div className="text-xs font-bold text-indigo-400 mb-2">STEG {item.step}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CRM INTEGRATION CALLOUT */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Fungerar med ditt CRM</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Prospekt ersätter inte ditt CRM — vi matar det med kvalificerade leads.
              Exportera direkt till HubSpot, Pipedrive eller Salesforce via CSV eller webhook.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel', 'Notion'].map(crm => (
              <span key={crm} className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-green-400" /> {crm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Enkel prissättning</h2>
        <p className="text-slate-500 text-center mb-12">Betala bara för vad du använder. Avsluta när du vill.</p>
        <div className="grid md:grid-cols-4 gap-4">
          {PRICING.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border ${
                plan.highlight
                  ? 'bg-indigo-500 border-indigo-400 text-white shadow-xl scale-105'
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
                {plan.price}<span className={`text-sm font-normal ${plan.highlight ? 'text-indigo-200' : 'text-slate-400'}`}>{plan.period}</span>
              </div>
              <div className={`text-xs mb-4 ${plan.highlight ? 'text-indigo-100' : 'text-slate-500'}`}>{plan.leads}/månad</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-xs ${plan.highlight ? 'text-indigo-50' : 'text-slate-600'}`}>
                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-indigo-200' : 'text-green-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center text-sm font-medium py-2.5 rounded-xl transition-colors ${
                  plan.highlight
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-4 py-12 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                <div className="text-slate-400 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-slate-200 py-16">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Redo att hitta din nästa kund?</h2>
          <p className="text-slate-500 mb-8">5 leads gratis. Inget kreditkort.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Kom igång nu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-700">Prospekt</span>
            <span className="text-sm text-slate-400">— AI-leadsmaskin för Sverige</span>
          </div>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-slate-600">Integritetspolicy</Link>
            <Link href="/terms" className="hover:text-slate-600">Villkor</Link>
            <a href="mailto:hej@prospekt.app" className="hover:text-slate-600">hej@prospekt.app</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
