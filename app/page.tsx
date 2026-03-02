'use client'

import { ArrowRight, Zap, Check, Mail, Linkedin, Search, Sparkles, Download } from 'lucide-react'
import Link from 'next/link'

const MOCK_LEADS = [
  { company: 'Klarna Bank AB',    role: 'Head of Sales',           tag: 'Fintech',     score: 98, initials: 'KL', color: 'bg-pink-50 text-pink-600 border-pink-100' },
  { company: 'Epidemic Sound',    role: 'VP Business Development', tag: 'Music Tech',  score: 94, initials: 'ES', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { company: 'GetAccept',         role: 'Revenue Director',        tag: 'SaaS',        score: 91, initials: 'GA', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { company: 'Bambuser',          role: 'VP Sales',                tag: 'E-commerce',  score: 87, initials: 'BA', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { company: 'Wrapp',             role: 'Head of Partnerships',    tag: 'Retail Tech', score: 84, initials: 'WR', color: 'bg-amber-50 text-amber-600 border-amber-100' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased select-none">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shadow-sm">
              <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
            </div>
            <span className="font-semibold text-gray-900 text-[15px] tracking-tight">Prospekt</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <Link href="#features" className="hover:text-gray-900 transition-colors">Funktioner</Link>
            <Link href="#pricing"  className="hover:text-gray-900 transition-colors">Priser</Link>
            <Link href="#crm"      className="hover:text-gray-900 transition-colors">Integrationer</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
              Logga in
            </Link>
            <Link href="/signup" className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Prova gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto">

          {/* Badge */}
          <div className="animate-fadeUp inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 border border-indigo-100">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            Söker nu i 50 000+ svenska bolag
          </div>

          <h1 className="animate-fadeUp delay-100 text-[56px] sm:text-[72px] leading-[1.05] font-bold text-gray-900 tracking-[-2.5px] mb-6">
            Hitta rätt kund.
            <br />
            <span className="text-gray-300">Automatiskt.</span>
          </h1>

          <p className="animate-fadeUp delay-200 text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
            AI som hittar, kvalificerar och skriver outreach till svenska B2B-kunder —&nbsp;på&nbsp;60&nbsp;sekunder.
          </p>

          <div className="animate-fadeUp delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link href="/signup" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white font-semibold px-7 py-3.5 rounded-full text-[15px] transition-all w-full sm:w-auto justify-center shadow-sm">
              Kom igång gratis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#demo" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-7 py-3.5 rounded-full text-[15px] transition-all border border-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-white w-full sm:w-auto justify-center">
              Se demo
            </Link>
          </div>

          <p className="animate-fadeUp delay-400 text-xs text-gray-400">Fri plan · Inget kreditkort · Igång på 2 minuter</p>
        </div>
      </section>

      {/* ─── PRODUCT DEMO ─── */}
      <section id="demo" className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="animate-scaleIn delay-500 rounded-2xl border border-gray-200/80 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
            
            {/* Browser chrome */}
            <div className="bg-gray-50 border-b border-gray-200 px-5 py-3.5 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-white border border-gray-200 rounded-md py-1 px-3 text-xs text-gray-400 text-center max-w-sm mx-auto">
                app.prospekt.se/dashboard
              </div>
            </div>

            {/* App header */}
            <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Search className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-400">Stockholm · Growth-stage startups · SaaS</p>
                </div>
                <p className="text-xl font-bold text-gray-900">12 leads hittade</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3.5 py-2 rounded-lg transition-colors">
                  <Download className="w-3.5 h-3.5" /> Exportera CSV
                </button>
                <button className="flex items-center gap-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3.5 py-2 rounded-lg transition-colors">
                  <Sparkles className="w-3.5 h-3.5" /> Ny sökning
                </button>
              </div>
            </div>

            {/* Column headers */}
            <div className="bg-gray-50/60 border-b border-gray-100 px-8 py-2.5 grid grid-cols-12 gap-4 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              <div className="col-span-5">Bolag & kontakt</div>
              <div className="col-span-2 hidden md:block">Bransch</div>
              <div className="col-span-2 hidden lg:block">Match</div>
              <div className="col-span-3 ml-auto">Åtgärd</div>
            </div>

            {/* Leads */}
            <div className="bg-white divide-y divide-gray-50">
              {MOCK_LEADS.map((lead, i) => (
                <div key={i} className="px-8 py-4 grid grid-cols-12 gap-4 items-center group hover:bg-gray-50/50 transition-colors">
                  <div className="col-span-5 flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold border flex-shrink-0 ${lead.color}`}>
                      {lead.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{lead.company}</p>
                      <p className="text-xs text-gray-400 truncate">{lead.role}</p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden md:block">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-medium">{lead.tag}</span>
                  </div>
                  <div className="col-span-2 hidden lg:flex items-center gap-1.5">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${lead.score}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600">{lead.score}%</span>
                  </div>
                  <div className="col-span-3 flex items-center gap-2 justify-end">
                    <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <Mail className="w-3 h-3" /> Email
                    </button>
                    <button className="hidden sm:flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </button>
                  </div>
                </div>
              ))}

              {/* Blurred rows */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="px-8 py-4 grid grid-cols-12 gap-4 items-center" style={{ filter: `blur(${3 + i * 2}px)`, opacity: 0.3 }}>
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-200 flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-3 bg-gray-300 rounded w-36" />
                      <div className="h-2 bg-gray-200 rounded w-24" />
                    </div>
                  </div>
                  <div className="col-span-2 hidden md:block"><div className="h-6 bg-gray-200 rounded-full w-16" /></div>
                </div>
              ))}

              <div className="px-8 py-5 text-center bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
                <Link href="/signup" className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                  Logga in för att se alla 12 leads <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">Hur det funkar</p>
            <h2 className="text-4xl sm:text-[48px] font-bold text-gray-900 tracking-tight leading-tight">
              Tre steg. Klart.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: <Search className="w-5 h-5" />,
                title: 'Beskriv din kund',
                body: 'Ange bransch, bolagsstorlek och roll. Prospekt söker igenom hela den svenska marknaden.',
              },
              {
                step: '02',
                icon: <Sparkles className="w-5 h-5" />,
                title: 'AI kvalificerar',
                body: 'Varje lead poängsätts och rankas efter hur väl de matchar din ideala kundprofil.',
              },
              {
                step: '03',
                icon: <Mail className="w-5 h-5" />,
                title: 'Outreach klart',
                body: 'AI skriver personaliserade email och LinkedIn-meddelanden — redo att skicka på svenska.',
              },
            ].map((f) => (
              <div key={f.step} className="bg-white rounded-2xl p-8 border border-gray-200/80 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    {f.icon}
                  </div>
                  <span className="text-[13px] font-bold text-gray-200">{f.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTREACH PREVIEW ─── */}
      <section className="py-24 px-6 bg-white" id="outreach">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">AI-outreach</p>
            <h2 className="text-4xl sm:text-[44px] font-bold text-gray-900 tracking-tight leading-tight mb-5">
              Personaliserat.<br />Klart att skicka.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              AI skriver ett unikt email och ett LinkedIn-meddelande per lead — baserat på bolagets senaste nyheter och din produkt.
            </p>
            <ul className="space-y-3">
              {['Professionell svenska utan slarvfel', 'Anpassas efter din ton och produkt', 'Redigera och skicka med ett klick'].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Outreach card */}
          <div className="rounded-2xl border border-gray-200 shadow-[0_16px_48px_-8px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-100 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center text-xs font-bold">KL</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Klarna Bank AB</p>
                  <p className="text-xs text-gray-400">Alex Magnusson · Head of Sales</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">98% match</span>
            </div>
            <div className="bg-white divide-y divide-gray-50">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Hej Alex,<br /><br />
                  Såg att Klarna expanderar säljteamet — imponerande tillväxt. Vi hjälper B2B-bolag att hitta och nå rätt kunder snabbare med AI.<br /><br />
                  Kan vi ta 15 minuter?
                </p>
                <div className="flex gap-2">
                  <button className="text-xs font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg">Kopiera</button>
                  <button className="text-xs font-medium border border-gray-200 text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-50">Generera om</button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">LinkedIn DM</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Hej Alex — imponerad av Klarnas tillväxt senaste kvartalet. Jobbar med AI-driven prospektering för svenska B2B-bolag. Kan vi byta några ord?
                </p>
                <div className="flex gap-2">
                  <button className="text-xs font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg">Kopiera</button>
                  <button className="text-xs font-medium border border-gray-200 text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-50">Generera om</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CRM ─── */}
      <section id="crm" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">Integrationer</p>
          <h2 className="text-4xl sm:text-[44px] font-bold text-gray-900 tracking-tight mb-4">Passar ditt CRM.</h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto mb-12">
            Exportera leads direkt till ditt befintliga system. Inget manuellt arbete.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel / CSV', 'Notion', 'Webhook API'].map(c => (
              <div key={c} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-shadow">
                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">Prissättning</p>
            <h2 className="text-4xl sm:text-[44px] font-bold text-gray-900 tracking-tight mb-3">Enkelt och transparent.</h2>
            <p className="text-gray-500 text-lg">Avsluta när du vill. Inga bindningstider.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Gratis',   price: '0',     suffix: '',        desc: 'Prova utan risk',
                features: ['5 leads / månad', 'AI-outreach', 'Kopiera text'],
                cta: 'Kom igång', href: '/signup',                    hi: false,
              },
              {
                name: 'Starter', price: '299',   suffix: ' kr/mån', desc: 'För freelancers',
                features: ['50 leads / månad', 'AI-outreach', 'CSV-export', 'Email + LinkedIn'],
                cta: 'Välj Starter', href: '/signup?plan=starter',    hi: false,
              },
              {
                name: 'Pro',     price: '799',   suffix: ' kr/mån', desc: 'För säljteam',
                features: ['250 leads / månad', 'AI-outreach', 'CSV + Webhook', 'Status-tracking', 'Prioriterat stöd'],
                cta: 'Välj Pro', href: '/signup?plan=pro',            hi: true,
              },
              {
                name: 'Agency', price: '1 999', suffix: ' kr/mån', desc: 'För byråer',
                features: ['Obegränsat leads', 'White-label', 'API-access', 'Alla CRM', 'Dedikerad support'],
                cta: 'Kontakta oss', href: 'mailto:hej@prospekt.app', hi: false,
              },
            ].map(p => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 flex flex-col border transition-all ${
                  p.hi
                    ? 'bg-indigo-600 border-indigo-600 shadow-[0_8px_32px_rgba(99,102,241,0.35)]'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {p.hi && (
                  <div className="inline-flex self-start bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">
                    Populärast
                  </div>
                )}
                <p className={`text-sm font-bold mb-0.5 ${p.hi ? 'text-white' : 'text-gray-900'}`}>{p.name}</p>
                <p className={`text-xs mb-4 ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.desc}</p>
                <div className="mb-5">
                  <span className={`text-3xl font-bold tracking-tight ${p.hi ? 'text-white' : 'text-gray-900'}`}>{p.price}</span>
                  <span className={`text-sm ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.suffix}</span>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${p.hi ? 'text-indigo-100' : 'text-gray-500'}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${p.hi ? 'text-indigo-300' : 'text-emerald-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-colors ${
                    p.hi
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

      {/* ─── FINAL CTA ─── */}
      <section className="py-28 px-6 bg-gray-950 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto mb-8 shadow-[0_8px_24px_rgba(99,102,241,0.5)]">
            <Zap className="w-6 h-6 text-white" fill="currentColor" />
          </div>
          <h2 className="text-4xl sm:text-[52px] font-bold text-white tracking-tight leading-tight mb-5">
            Börja hitta kunder idag.
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            5 leads gratis. Ingen betalning krävs. Igång på 2 minuter.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-full text-[15px] transition-colors">
            Prova Prospekt gratis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-950 border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center">
              <Zap className="w-2.5 h-2.5 text-white" fill="currentColor" />
            </div>
            <span className="text-sm text-gray-500">Prospekt · AI-leadsmaskin för Sverige</span>
          </div>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="mailto:hej@prospekt.app" className="hover:text-gray-400 transition-colors">hej@prospekt.app</a>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Integritetspolicy</Link>
            <Link href="/terms"   className="hover:text-gray-400 transition-colors">Villkor</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
