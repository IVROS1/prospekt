'use client'

import { ArrowRight, Zap, Check, Mail, Linkedin, Search, Sparkles, Download } from 'lucide-react'
import Link from 'next/link'

const LEADS = [
  { co: 'Klarna Bank AB',    role: 'Head of Sales',           tag: 'Fintech',     score: 98, ab: 'KL', bg: 'bg-rose-50   text-rose-600   border-rose-100'   },
  { co: 'Epidemic Sound',    role: 'VP Business Development', tag: 'Music Tech',  score: 94, ab: 'ES', bg: 'bg-violet-50 text-violet-600 border-violet-100' },
  { co: 'GetAccept',         role: 'Revenue Director',        tag: 'SaaS',        score: 91, ab: 'GA', bg: 'bg-sky-50    text-sky-600    border-sky-100'    },
  { co: 'Bambuser',          role: 'VP Sales',                tag: 'E-commerce',  score: 87, ab: 'BA', bg: 'bg-emerald-50 text-emerald-600 border-emerald-100'},
  { co: 'Wrapp',             role: 'Head of Partnerships',    tag: 'Retail Tech', score: 83, ab: 'WR', bg: 'bg-amber-50  text-amber-600  border-amber-100'  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">

      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-white" fill="currentColor" />
            </span>
            <span className="text-[15px] tracking-tight">Prospekt</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-gray-500 md:flex">
            <Link href="#features"      className="hover:text-gray-900 transition-colors">Funktioner</Link>
            <Link href="#pricing"       className="hover:text-gray-900 transition-colors">Priser</Link>
            <Link href="#integrations"  className="hover:text-gray-900 transition-colors">Integrationer</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login"  className="hidden text-sm text-gray-500 hover:text-gray-900 transition-colors sm:block">Logga in</Link>
            <Link href="/signup" className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors">
              Prova gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 text-center px-5">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            50 000+ svenska bolag indexerade
          </div>

          <h1 className="mb-5 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl">
            Hitta rätt kund.<br />
            <span className="text-gray-300">Automatiskt.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-gray-500">
            AI som hittar, kvalificerar och skriver outreach till svenska B2B-kunder på&nbsp;60&nbsp;sekunder.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/signup" className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-gray-700 transition-colors sm:w-auto">
              Kom igång gratis <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#demo" className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors sm:w-auto">
              Se demo
            </Link>
          </div>

          <p className="mt-5 text-xs text-gray-400">Fri plan · Inget kreditkort · Igång på 2 minuter</p>
        </div>
      </section>

      {/* PRODUCT DEMO */}
      <section id="demo" className="bg-gray-50 py-16 px-5">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/60">
            
            {/* Browser bar */}
            <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-5 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="mx-auto max-w-xs flex-1 rounded-md border border-gray-200 bg-white py-1 text-center text-xs text-gray-400">
                app.prospekt.se/dashboard
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-4">
              <div>
                <div className="mb-0.5 flex items-center gap-2 text-xs text-gray-400">
                  <Search className="h-3.5 w-3.5" />
                  Stockholm · Growth-stage startups · SaaS
                </div>
                <p className="text-base font-bold text-gray-900">12 leads hittade</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button className="hidden items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100 sm:flex">
                  <Download className="h-3.5 w-3.5" /> Exportera CSV
                </button>
                <button className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                  <Sparkles className="h-3.5 w-3.5" /> Ny sökning
                </button>
              </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50/60 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              <div className="col-span-5">Bolag &amp; kontakt</div>
              <div className="col-span-3 hidden md:block">Bransch</div>
              <div className="col-span-2 hidden lg:block">Match</div>
              <div className="col-span-4 md:col-span-2 text-right">Åtgärd</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-50">
              {LEADS.map((l, i) => (
                <div key={i} className="group grid grid-cols-12 items-center gap-4 px-6 py-4 transition-colors hover:bg-gray-50/50">
                  <div className="col-span-5 flex min-w-0 items-center gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold ${l.bg}`}>
                      {l.ab}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-900">{l.co}</p>
                      <p className="truncate text-xs text-gray-400">{l.role}</p>
                    </div>
                  </div>
                  <div className="col-span-3 hidden md:block">
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">{l.tag}</span>
                  </div>
                  <div className="col-span-2 hidden lg:flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: `${l.score}%` }} />
                    </div>
                    <span className="text-xs font-bold text-emerald-600">{l.score}%</span>
                  </div>
                  <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50">
                      <Mail className="h-3 w-3" /> Email
                    </button>
                    <button className="hidden items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 sm:flex">
                      <Linkedin className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Blurred locked rows */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="grid grid-cols-12 items-center gap-4 px-6 py-4" style={{ filter: `blur(${3 + i * 2}px)`, opacity: 0.3 }}>
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-xl bg-gray-200" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-36 rounded bg-gray-300" />
                      <div className="h-2 w-24 rounded bg-gray-200" />
                    </div>
                  </div>
                  <div className="col-span-3 hidden md:block"><div className="h-6 w-16 rounded-full bg-gray-200" /></div>
                </div>
              ))}

              <div className="border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50 py-5 text-center">
                <Link href="/signup" className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                  Logga in för att se alla 12 leads <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="features" className="bg-white py-24 px-5">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">Hur det funkar</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Tre steg. Klart.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n:'01', icon:<Search className="h-5 w-5"/>,    title:'Beskriv din kund',  body:'Ange bransch, bolagsstorlek och roll. Prospekt söker igenom hela den svenska marknaden.' },
              { n:'02', icon:<Sparkles className="h-5 w-5"/>, title:'AI kvalificerar',    body:'Varje lead poängsätts och rankas efter hur väl de matchar din ideala kundprofil.'       },
              { n:'03', icon:<Mail className="h-5 w-5"/>,     title:'Outreach klart',    body:'AI skriver personaliserade email och LinkedIn-meddelanden på professionell svenska.'      },
            ].map(s => (
              <div key={s.n} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:border-gray-200 transition-colors">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-gray-100">{s.n}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTREACH PREVIEW */}
      <section className="bg-gray-50 py-24 px-5">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-indigo-600">AI-outreach</p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-[44px] leading-tight">
              Personaliserat.<br />Klart att skicka.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-500">
              Ett unikt email och LinkedIn-meddelande per lead — baserat på bolagets nyheter och din produkt.
            </p>
            <ul className="space-y-3">
              {['Professionell svenska utan slarvfel','Anpassas efter din ton och produkt','Redigera och skicka med ett klick'].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="h-4 w-4 shrink-0 text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50">
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-xs font-bold text-rose-600">KL</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Klarna Bank AB</p>
                  <p className="text-xs text-gray-400">Alex Magnusson · Head of Sales</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">98% match</span>
            </div>
            <div className="divide-y divide-gray-50">
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Email</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Hej Alex,<br /><br />
                  Såg att Klarna expanderar säljteamet — imponerande tillväxt. Vi hjälper B2B-bolag att hitta och nå rätt kunder snabbare med AI.<br /><br />
                  Kan vi ta 15 minuter?
                </p>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-700">Kopiera</button>
                  <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50">Generera om</button>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-blue-500" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">LinkedIn DM</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Hej Alex — imponerad av Klarnas tillväxt senaste kvartalet. Jobbar med AI-driven prospektering för svenska B2B-bolag. Kan vi byta några ord?
                </p>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-700">Kopiera</button>
                  <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50">Generera om</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="bg-white py-24 px-5 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">Integrationer</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-[44px]">Passar ditt CRM.</h2>
          <p className="mx-auto mb-12 max-w-sm text-lg text-gray-500">Exportera leads direkt. Inget manuellt arbete.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['HubSpot','Pipedrive','Salesforce','Excel / CSV','Notion','Webhook API'].map(c => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-shadow">
                <Check className="h-3.5 w-3.5 text-emerald-500" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-gray-50 py-24 px-5">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">Prissättning</p>
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-[44px]">Enkelt och transparent.</h2>
            <p className="text-lg text-gray-500">Avsluta när du vill. Inga bindningstider.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name:'Gratis',  price:'0',     suf:'',        sub:'Prova utan risk',   feats:['5 leads / månad','AI-outreach','Kopiera text'],                                  cta:'Kom igång',     href:'/signup',                  hi:false },
              { name:'Starter', price:'299',   suf:' kr/mån', sub:'För freelancers',   feats:['50 leads / månad','AI-outreach','CSV-export','Email + LinkedIn'],                cta:'Välj Starter',  href:'/signup?plan=starter',     hi:false },
              { name:'Pro',     price:'799',   suf:' kr/mån', sub:'För säljteam',      feats:['250 leads / månad','AI-outreach','CSV + Webhook','Status-tracking','Prio stöd'],cta:'Välj Pro',      href:'/signup?plan=pro',         hi:true  },
              { name:'Agency',  price:'1 999', suf:' kr/mån', sub:'För byråer',        feats:['Obegränsat leads','White-label','API-access','Alla CRM','Dedikerat stöd'],      cta:'Kontakta oss',  href:'mailto:hej@prospekt.app',  hi:false },
            ].map(p => (
              <div key={p.name} className={`flex flex-col rounded-2xl p-6 transition-all ${p.hi ? 'bg-indigo-600 shadow-xl shadow-indigo-200/60' : 'border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'}`}>
                {p.hi && <span className="mb-4 self-start rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Populärast</span>}
                <p className={`mb-0.5 text-sm font-bold ${p.hi ? 'text-white' : 'text-gray-900'}`}>{p.name}</p>
                <p className={`mb-4 text-xs ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.sub}</p>
                <p className={`mb-5 ${p.hi ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-3xl font-bold tracking-tight">{p.price}</span>
                  <span className={`text-sm ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.suf}</span>
                </p>
                <ul className="mb-6 flex-1 space-y-2.5">
                  {p.feats.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${p.hi ? 'text-indigo-100' : 'text-gray-500'}`}>
                      <Check className={`h-4 w-4 shrink-0 ${p.hi ? 'text-indigo-300' : 'text-emerald-500'}`} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={`block rounded-xl py-2.5 text-center text-sm font-semibold transition-colors ${p.hi ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-28 text-center px-5">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-500/40">
            <Zap className="h-6 w-6 text-white" fill="currentColor" />
          </div>
          <h2 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Börja hitta kunder idag.
          </h2>
          <p className="mb-10 text-lg text-gray-400">5 leads gratis. Ingen betalning krävs.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-gray-900 hover:bg-gray-100 transition-colors">
            Prova Prospekt gratis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-gray-950 py-8 px-5">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-600">
              <Zap className="h-2.5 w-2.5 text-white" fill="currentColor" />
            </span>
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
