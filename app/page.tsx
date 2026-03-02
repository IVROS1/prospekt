'use client'

import { ArrowRight, Zap, Check, Mail, Linkedin, Search, Sparkles, Download } from 'lucide-react'
import Link from 'next/link'

const LEADS = [
  { co: 'Klarna Bank AB',   role: 'Head of Sales',           tag: 'Fintech',    score: 98, ab: 'KL', clr: 'bg-rose-100 text-rose-700'    },
  { co: 'Epidemic Sound',   role: 'VP Business Dev.',        tag: 'Music Tech', score: 94, ab: 'ES', clr: 'bg-violet-100 text-violet-700' },
  { co: 'GetAccept',        role: 'Revenue Director',        tag: 'SaaS',       score: 91, ab: 'GA', clr: 'bg-sky-100 text-sky-700'       },
  { co: 'Bambuser',         role: 'VP Sales',                tag: 'E-commerce', score: 87, ab: 'BA', clr: 'bg-emerald-100 text-emerald-700'},
  { co: 'Wrapp',            role: 'Head of Partnerships',    tag: 'Retail Tech',score: 83, ab: 'WR', clr: 'bg-amber-100 text-amber-700'   },
]

export default function Home() {
  return (
    <div className="bg-white text-gray-900 antialiased">

      {/* ─── NAV ─── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-6">
          <span className="flex items-center gap-2 font-bold text-[17px] tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-indigo-600">
              <Zap className="h-[14px] w-[14px] text-white" fill="currentColor" />
            </span>
            Prospekt
          </span>

          <nav className="hidden items-center gap-8 text-[14px] text-gray-500 md:flex">
            <Link href="#how" className="hover:text-gray-900 transition-colors">Hur det funkar</Link>
            <Link href="#pricing" className="hover:text-gray-900 transition-colors">Priser</Link>
            <Link href="#integrations" className="hover:text-gray-900 transition-colors">Integrationer</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden text-[14px] text-gray-500 hover:text-gray-900 sm:block">
              Logga in
            </Link>
            <Link href="/signup" className="rounded-full bg-indigo-600 px-5 py-2 text-[14px] font-semibold text-white hover:bg-indigo-700 transition-colors">
              Prova gratis
            </Link>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-[60px] text-center">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] text-gray-500 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            50 000+ svenska bolag
          </div>

          {/* Headline — ONE sentence, gradient on key phrase */}
          <h1 className="mb-6 text-[64px] font-extrabold leading-[1.05] tracking-[-3px] text-gray-900 sm:text-[80px]">
            Hitta din nästa<br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              kund automatiskt.
            </span>
          </h1>

          {/* Subtitle — ONE sentence */}
          <p className="mx-auto mb-10 max-w-lg text-[20px] leading-relaxed text-gray-500">
            AI som söker, kvalificerar och skriver outreach till svenska B2B-kunder — på 60 sekunder.
          </p>

          {/* CTA — ONE button */}
          <Link
            href="/signup"
            className="inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-8 py-4 text-[16px] font-semibold text-white shadow-lg hover:bg-gray-700 hover:shadow-xl transition-all"
          >
            Kom igång gratis <ArrowRight className="h-4 w-4" />
          </Link>

          <p className="mt-5 text-[13px] text-gray-400">Fri plan · Inget kreditkort · Igång på 2 min</p>
        </div>
      </section>

      {/* ─── PRODUCT SCREENSHOT ─── */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <p className="mb-3 text-center text-[13px] font-semibold uppercase tracking-widest text-gray-400">
            Se det i aktion
          </p>
          <h2 className="mb-12 text-center text-[36px] font-bold tracking-tight text-gray-900">
            12 leads. 60 sekunder.
          </h2>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/70">

            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-5 py-3.5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="mx-auto flex-1 max-w-sm rounded-md border border-gray-200 bg-white py-1 text-center text-[12px] text-gray-400">
                app.prospekt.se
              </div>
            </div>

            {/* App toolbar */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div>
                <p className="mb-0.5 text-[12px] text-gray-400">Stockholm · SaaS · Growth-stage</p>
                <p className="text-[18px] font-bold text-gray-900">12 leads hittade</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="hidden items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-[12px] font-medium text-gray-600 hover:bg-gray-50 sm:flex">
                  <Download className="h-3.5 w-3.5" /> CSV
                </button>
                <button className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-[12px] font-medium text-white">
                  <Sparkles className="h-3.5 w-3.5" /> Ny sökning
                </button>
              </div>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50/50 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <span className="col-span-5">Bolag</span>
              <span className="col-span-2 hidden md:block">Bransch</span>
              <span className="col-span-3 hidden lg:block">Match</span>
              <span className="col-span-7 md:col-span-3 lg:col-span-2 text-right">Åtgärd</span>
            </div>

            {/* Lead rows */}
            <div className="divide-y divide-gray-50/80">
              {LEADS.map((l, i) => (
                <div key={i} className="group grid grid-cols-12 items-center gap-4 px-6 py-4 hover:bg-gray-50/60 transition-colors">
                  <div className="col-span-5 flex min-w-0 items-center gap-3">
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[11px] font-bold ${l.clr}`}>
                      {l.ab}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-semibold text-gray-900">{l.co}</p>
                      <p className="truncate text-[12px] text-gray-400">{l.role}</p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden md:block">
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">{l.tag}</span>
                  </div>
                  <div className="col-span-3 hidden lg:flex items-center gap-2.5">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${l.score}%` }} />
                    </div>
                    <span className="text-[12px] font-bold text-emerald-600 tabular-nums">{l.score}%</span>
                  </div>
                  <div className="col-span-7 md:col-span-2 flex items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50">
                      <Mail className="h-3 w-3" /> Email
                    </button>
                    <button className="hidden items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 sm:flex">
                      <Linkedin className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Locked/blurred rows */}
              {[5, 4, 3].map((blur, i) => (
                <div key={i} className="grid grid-cols-12 items-center gap-4 px-6 py-4" style={{ filter: `blur(${blur}px)`, opacity: 0.25 }}>
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-xl bg-gray-200" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-32 rounded bg-gray-300" />
                      <div className="h-2 w-20 rounded bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-b from-white to-gray-50 py-5 text-center">
                <Link href="/signup" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                  Logga in för att se alla 12 leads <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-indigo-600">Hur det funkar</p>
            <h2 className="text-[40px] font-bold tracking-tight text-gray-900">Tre steg. Klart.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { n: '1', icon: <Search className="h-5 w-5" />,    t: 'Beskriv din kund',  d: 'Ange bransch, bolagsstorlek och roll. Vi söker hela den svenska marknaden.' },
              { n: '2', icon: <Sparkles className="h-5 w-5" />,  t: 'AI kvalificerar',   d: 'Varje lead poängsätts efter hur väl de matchar din ideala kundprofil.' },
              { n: '3', icon: <Mail className="h-5 w-5" />,      t: 'Outreach klart',   d: 'AI skriver email och LinkedIn-text per lead — på professionell svenska.' },
            ].map(s => (
              <div key={s.n} className="rounded-2xl border border-gray-100 p-7 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                    {s.icon}
                  </div>
                  <span className="text-[28px] font-black text-gray-100">{s.n}</span>
                </div>
                <h3 className="mb-2 text-[17px] font-bold text-gray-900">{s.t}</h3>
                <p className="text-[14px] leading-relaxed text-gray-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTREACH ─── */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-indigo-600">AI-outreach</p>
            <h2 className="mb-5 text-[40px] font-bold leading-tight tracking-tight text-gray-900">
              Personaliserat.<br />Klart att skicka.
            </h2>
            <p className="mb-8 text-[18px] leading-relaxed text-gray-500">
              Ett email och ett LinkedIn-DM per lead — anpassat till varje bolag, på professionell svenska.
            </p>
            {['Professionell svenska utan slarvfel', 'Baseras på bolagets senaste nyheter', 'Redigera och kopiera med ett klick'].map(f => (
              <p key={f} className="mb-3 flex items-center gap-3 text-[15px] text-gray-600">
                <Check className="h-4 w-4 shrink-0 text-emerald-500" /> {f}
              </p>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/80 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-rose-100 text-[11px] font-bold text-rose-700">KL</span>
                <div>
                  <p className="text-[14px] font-semibold text-gray-900">Klarna Bank AB</p>
                  <p className="text-[12px] text-gray-400">Alex Magnusson · Head of Sales</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">98% match</span>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { icon: <Mail className="h-4 w-4 text-gray-400" />, label: 'Email', text: 'Hej Alex,\n\nSåg att Klarna expanderar säljteamet — imponerande tillväxt. Vi hjälper B2B-bolag att hitta och nå rätt kunder med AI.\n\nKan vi ta 15 minuter?' },
                { icon: <Linkedin className="h-4 w-4 text-blue-400" />, label: 'LinkedIn DM', text: 'Hej Alex — imponerad av Klarnas tillväxt senaste kvartalet. Jobbar med AI-driven prospektering för svenska B2B-bolag. Kan vi byta några ord?' },
              ].map(m => (
                <div key={m.label} className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    {m.icon}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{m.label}</span>
                  </div>
                  <p className="mb-4 whitespace-pre-line text-[13px] leading-relaxed text-gray-700">{m.text}</p>
                  <div className="flex gap-2">
                    <button className="rounded-lg bg-gray-900 px-4 py-1.5 text-[12px] font-semibold text-white hover:bg-gray-700 transition-colors">Kopiera</button>
                    <button className="rounded-lg border border-gray-200 px-4 py-1.5 text-[12px] text-gray-500 hover:bg-gray-50 transition-colors">Generera om</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTEGRATIONS ─── */}
      <section id="integrations" className="bg-white px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-indigo-600">Integrationer</p>
          <h2 className="mb-4 text-[40px] font-bold tracking-tight text-gray-900">Funkar med ditt CRM.</h2>
          <p className="mx-auto mb-12 max-w-sm text-[18px] text-gray-500">Exportera leads direkt. Inget manuellt arbete.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['HubSpot', 'Pipedrive', 'Salesforce', 'Excel / CSV', 'Notion', 'Webhook API'].map(c => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-[14px] font-medium text-gray-700 shadow-sm">
                <Check className="h-4 w-4 text-emerald-500" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-indigo-600">Prissättning</p>
            <h2 className="mb-3 text-[40px] font-bold tracking-tight text-gray-900">Enkelt och transparent.</h2>
            <p className="text-[18px] text-gray-500">Avsluta när du vill. Inga bindningstider.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n:'Gratis',  p:'0',     s:'',        d:'Prova utan risk',  f:['5 leads/mån','AI-outreach','Kopiera text'],                                         cta:'Kom igång',    href:'/signup',                 hi:false },
              { n:'Starter', p:'299',   s:' kr/mån', d:'För freelancers',  f:['50 leads/mån','AI-outreach','CSV-export','Email + LinkedIn'],                       cta:'Välj Starter', href:'/signup?plan=starter',    hi:false },
              { n:'Pro',     p:'799',   s:' kr/mån', d:'För säljteam',     f:['250 leads/mån','AI-outreach','CSV + Webhook','Status-tracking','Prioriterat stöd'],cta:'Välj Pro',     href:'/signup?plan=pro',        hi:true  },
              { n:'Agency',  p:'1 999', s:' kr/mån', d:'För byråer',       f:['Obegränsat','White-label','API-access','Alla CRM','Dedikerat stöd'],               cta:'Kontakta oss', href:'mailto:hej@prospekt.app', hi:false },
            ].map(p => (
              <div key={p.n} className={`flex flex-col rounded-2xl p-6 transition-all ${p.hi ? 'bg-indigo-600 shadow-xl' : 'border border-gray-200 bg-white hover:shadow-md'}`}>
                {p.hi && <span className="mb-4 self-start rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Populärast</span>}
                <p className={`mb-1 text-[14px] font-bold ${p.hi ? 'text-white' : 'text-gray-900'}`}>{p.n}</p>
                <p className={`mb-4 text-[12px] ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.d}</p>
                <p className="mb-5">
                  <span className={`text-[30px] font-bold ${p.hi ? 'text-white' : 'text-gray-900'}`}>{p.p}</span>
                  <span className={`text-[13px] ${p.hi ? 'text-indigo-200' : 'text-gray-400'}`}>{p.s}</span>
                </p>
                <ul className="mb-6 flex-1 space-y-2.5">
                  {p.f.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-[13px] ${p.hi ? 'text-indigo-100' : 'text-gray-500'}`}>
                      <Check className={`h-4 w-4 shrink-0 ${p.hi ? 'text-indigo-300' : 'text-emerald-500'}`} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={`block rounded-xl py-2.5 text-center text-[14px] font-semibold transition-colors ${p.hi ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gray-950 px-6 py-28 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/40">
            <Zap className="h-7 w-7 text-white" fill="currentColor" />
          </div>
          <h2 className="mb-5 text-[48px] font-bold leading-tight tracking-tight text-white">
            Börja hitta kunder idag.
          </h2>
          <p className="mb-10 text-[18px] text-gray-400">5 leads gratis. Inget kreditkort krävs.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-bold text-gray-900 hover:bg-gray-100 transition-colors">
            Prova Prospekt gratis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.06] bg-gray-950 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="flex items-center gap-2 text-[14px] text-gray-500">
            <span className="grid h-5 w-5 place-items-center rounded-md bg-indigo-600">
              <Zap className="h-2.5 w-2.5 text-white" fill="currentColor" />
            </span>
            Prospekt · AI-leadsmaskin för Sverige
          </span>
          <div className="flex gap-6 text-[12px] text-gray-600">
            <a href="mailto:hej@prospekt.app" className="hover:text-gray-400 transition-colors">hej@prospekt.app</a>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Integritetspolicy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Villkor</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
