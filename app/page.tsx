'use client'

import { ArrowRight, Check, Mail, Linkedin, Search, Sparkles, Download, Zap } from 'lucide-react'
import Link from 'next/link'

const LEADS = [
  { co: 'Klarna Bank AB',  role: 'Head of Sales',        tag: 'Fintech',    score: 98 },
  { co: 'Epidemic Sound', role: 'VP Business Dev.',      tag: 'Music Tech', score: 94 },
  { co: 'GetAccept',      role: 'Revenue Director',      tag: 'SaaS',       score: 91 },
  { co: 'Bambuser',       role: 'VP Sales',              tag: 'E-commerce', score: 87 },
  { co: 'Wrapp',          role: 'Head of Partnerships',  tag: 'Retail',     score: 83 },
]

function initials(name: string) {
  return name.split(' ').slice(0,2).map(w => w[0]).join('')
}

export default function Home() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>

      {/* ── NAV ── */}
      <header style={{ position:'fixed', inset:'0 0 auto', zIndex:50, borderBottom:'1px solid var(--border)', background:'rgba(10,10,10,0.92)', backdropFilter:'blur(12px)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px', height:56, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span className="font-mono" style={{ fontSize:13, letterSpacing:'3px', color:'var(--gold)', fontWeight:600 }}>
            PROSPEKT
          </span>
          <nav style={{ display:'flex', alignItems:'center', gap:32 }}>
            <Link href="#how" style={{ fontSize:13, color:'var(--text-muted)', textDecoration:'none' }} className="hover:text-[var(--text)]">Hur det funkar</Link>
            <Link href="#pricing" style={{ fontSize:13, color:'var(--text-muted)', textDecoration:'none' }} className="hover:text-[var(--text)]">Priser</Link>
            <Link href="/login" style={{ fontSize:13, color:'var(--text-muted)', textDecoration:'none' }} className="hover:text-[var(--text)]">Logga in</Link>
            <Link href="/signup" className="btn-gold" style={{ padding:'8px 18px', fontSize:13 }}>
              Prova gratis
            </Link>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="grid-bg" style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'80px 24px 60px', textAlign:'center', overflow:'hidden' }}>
        {/* Gradient vignette */}
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(240,165,0,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:200, background:'linear-gradient(to bottom, transparent, var(--bg))', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:1, maxWidth:680 }}>

          {/* Badge */}
          <div className="badge-gold animate-fadeIn" style={{ marginBottom:32, display:'inline-flex' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--green)', animation:'pulse-dot 2s infinite' }} />
            50 000+ svenska bolag indexerade
          </div>

          {/* Headline */}
          <h1 className="animate-fadeUp delay-100" style={{ fontSize:'clamp(40px,7vw,72px)', fontWeight:800, lineHeight:1.05, letterSpacing:'-2px', marginBottom:24 }}>
            Hitta din nästa<br />
            <span style={{ color:'var(--gold)' }}>kund automatiskt.</span>
          </h1>

          <p className="animate-fadeUp delay-200" style={{ fontSize:18, color:'var(--text-muted)', lineHeight:1.6, marginBottom:40, maxWidth:480, margin:'0 auto 40px' }}>
            AI som söker, kvalificerar och skriver outreach till svenska B2B-kunder — på 60 sekunder.
          </p>

          <div className="animate-fadeUp delay-300" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, flexWrap:'wrap' }}>
            <Link href="/signup" className="btn-gold" style={{ fontSize:16, padding:'14px 28px' }}>
              Kom igång gratis <ArrowRight style={{ width:16, height:16 }} />
            </Link>
            <Link href="#how" className="btn-outline" style={{ fontSize:14 }}>
              Se hur det funkar
            </Link>
          </div>

          <p className="animate-fadeUp delay-400" style={{ marginTop:18, fontSize:12, color:'var(--text-dim)' }}>
            Fri plan · Inget kreditkort · Igång på 2 min
          </p>
        </div>
      </section>

      {/* ── PRODUCT MOCKUP ── */}
      <section style={{ padding:'80px 24px', background:'var(--bg)' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>

          <div style={{ textAlign:'center', marginBottom:48 }}>
            <p className="label" style={{ marginBottom:12 }}>Se det i aktion</p>
            <h2 style={{ fontSize:36, fontWeight:700, letterSpacing:'-1px' }}>12 leads. 60 sekunder.</h2>
          </div>

          {/* Browser window */}
          <div className="card-gold" style={{ overflow:'hidden', boxShadow:'0 40px 80px rgba(0,0,0,0.6)' }}>

            {/* Chrome bar */}
            <div style={{ display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid var(--border)', background:'rgba(255,255,255,0.03)', padding:'10px 16px' }}>
              <div style={{ display:'flex', gap:6 }}>
                {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
              </div>
              <div style={{ flex:1, maxWidth:260, margin:'0 auto', background:'rgba(255,255,255,0.05)', border:'1px solid var(--border)', borderRadius:6, padding:'4px 12px', textAlign:'center', fontSize:11, color:'var(--text-dim)', fontFamily:'var(--font-mono)' }}>
                app.prospekt.se
              </div>
            </div>

            {/* Toolbar */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid var(--border)', padding:'14px 20px' }}>
              <div>
                <p className="label" style={{ marginBottom:4 }}>Stockholm · SaaS · Growth-stage</p>
                <p style={{ fontSize:18, fontWeight:700 }}>12 leads hittade</p>
              </div>
              <div style={{ display:'flex', gap:8 }}>
                <button className="btn-outline" style={{ padding:'7px 14px', fontSize:12, display:'flex', alignItems:'center', gap:6 }}>
                  <Download style={{ width:13, height:13 }} /> CSV
                </button>
                <button className="btn-gold" style={{ padding:'7px 14px', fontSize:12 }}>
                  <Sparkles style={{ width:13, height:13 }} /> Ny sökning
                </button>
              </div>
            </div>

            {/* Header row */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 80px 100px 80px', gap:12, padding:'9px 20px', borderBottom:'1px solid var(--border)', background:'rgba(255,255,255,0.02)' }}>
              {['BOLAG','BRANSCH','MATCH',''].map((h,i) => (
                <span key={i} className="label">{h}</span>
              ))}
            </div>

            {/* Lead rows */}
            {LEADS.map((l, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 80px 100px 80px', gap:12, alignItems:'center', padding:'13px 20px', borderBottom:'1px solid var(--border)', transition:'background 0.15s', cursor:'default' }}
                onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background='transparent')}>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:34, height:34, borderRadius:8, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700, color:'var(--gold)', flexShrink:0 }}>
                    {initials(l.co)}
                  </div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:600, marginBottom:2 }}>{l.co}</p>
                    <p style={{ fontSize:11, color:'var(--text-muted)' }}>{l.role}</p>
                  </div>
                </div>
                <span style={{ fontSize:11, background:'rgba(255,255,255,0.05)', border:'1px solid var(--border)', borderRadius:6, padding:'3px 8px', color:'var(--text-muted)', display:'inline-block' }}>{l.tag}</span>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <div className="progress-bar" style={{ flex:1 }}>
                    <div className="progress-bar-fill" style={{ width:`${l.score}%`, background: l.score >= 90 ? 'var(--gold)' : 'var(--green)' }} />
                  </div>
                  <span style={{ fontSize:11, fontFamily:'var(--font-mono)', color: l.score >= 90 ? 'var(--gold)' : 'var(--green)', fontWeight:700 }}>{l.score}</span>
                </div>
                <div style={{ display:'flex', gap:6, justifyContent:'flex-end' }}>
                  <button style={{ display:'flex', alignItems:'center', gap:4, padding:'5px 9px', background:'transparent', border:'1px solid var(--border)', borderRadius:6, fontSize:11, color:'var(--text-muted)', cursor:'pointer' }}>
                    <Mail style={{ width:11, height:11 }} /> Email
                  </button>
                </div>
              </div>
            ))}

            {/* Blurred/locked rows */}
            {[1,2,3].map(i => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 20px', borderBottom:'1px solid var(--border)', filter:'blur(5px)', opacity:0.15 }}>
                <div style={{ width:34, height:34, borderRadius:8, background:'var(--border)' }} />
                <div style={{ flex:1, height:12, background:'var(--border)', borderRadius:4 }} />
              </div>
            ))}

            <div style={{ padding:'18px', textAlign:'center', background:'linear-gradient(to bottom, transparent, rgba(10,10,10,0.8))' }}>
              <Link href="/signup" style={{ fontSize:13, color:'var(--gold)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 }}>
                Logga in för att se alla 12 leads <ArrowRight style={{ width:13, height:13 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding:'80px 24px' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p className="label" style={{ marginBottom:12 }}>Hur det funkar</p>
            <h2 style={{ fontSize:36, fontWeight:700, letterSpacing:'-1px' }}>Tre steg. Klart.</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:16 }}>
            {[
              { n:'01', icon:<Search style={{width:18,height:18}}/>, t:'Beskriv din kund', d:'Ange bransch, bolagsstorlek och roll. Vi söker hela svenska marknaden.' },
              { n:'02', icon:<Sparkles style={{width:18,height:18}}/>, t:'AI kvalificerar', d:'Varje lead poängsätts efter hur väl de matchar din ideala kundprofil.' },
              { n:'03', icon:<Mail style={{width:18,height:18}}/>, t:'Outreach klart', d:'AI skriver email och LinkedIn-text per lead — på professionell svenska.' },
            ].map(s => (
              <div key={s.n} className="card" style={{ padding:28, transition:'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor='var(--border-gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor='var(--border)')}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
                  <div style={{ width:38, height:38, borderRadius:8, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--gold)' }}>
                    {s.icon}
                  </div>
                  <span className="font-mono" style={{ fontSize:28, fontWeight:800, color:'rgba(255,255,255,0.06)' }}>{s.n}</span>
                </div>
                <h3 style={{ fontSize:16, fontWeight:700, marginBottom:8 }}>{s.t}</h3>
                <p style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI OUTREACH ── */}
      <section style={{ padding:'80px 24px', borderTop:'1px solid var(--border)' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
          <div>
            <p className="label" style={{ marginBottom:16 }}>AI-outreach</p>
            <h2 style={{ fontSize:36, fontWeight:700, letterSpacing:'-1px', marginBottom:16, lineHeight:1.2 }}>
              Personaliserat.<br />Klart att skicka.
            </h2>
            <p style={{ fontSize:16, color:'var(--text-muted)', lineHeight:1.7, marginBottom:28 }}>
              Ett email och ett LinkedIn-DM per lead — anpassat till varje bolag, på professionell svenska.
            </p>
            {['Professionell svenska utan slarvfel','Baseras på bolagets senaste nyheter','Redigera och kopiera med ett klick'].map(f => (
              <p key={f} style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, color:'var(--text-muted)', marginBottom:10 }}>
                <Check style={{ width:14, height:14, color:'var(--green)', flexShrink:0 }} /> {f}
              </p>
            ))}
          </div>

          <div className="card-gold" style={{ overflow:'hidden' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 16px', borderBottom:'1px solid var(--border)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ width:32, height:32, borderRadius:7, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:'var(--gold)', fontFamily:'var(--font-mono)' }}>KL</div>
                <div>
                  <p style={{ fontSize:13, fontWeight:600 }}>Klarna Bank AB</p>
                  <p style={{ fontSize:11, color:'var(--text-muted)' }}>Alex Magnusson · Head of Sales</p>
                </div>
              </div>
              <span style={{ fontSize:11, fontWeight:700, color:'var(--gold)', background:'var(--gold-dim)', border:'1px solid var(--border-gold)', borderRadius:6, padding:'3px 8px', fontFamily:'var(--font-mono)' }}>98%</span>
            </div>
            {[
              { icon:<Mail style={{width:13,height:13}}/>, label:'EMAIL', text:'Hej Alex,\n\nSåg att Klarna expanderar säljteamet — imponerande tillväxt. Vi hjälper B2B-bolag att hitta och nå rätt kunder med AI.\n\nKan vi ta 15 minuter?' },
              { icon:<Linkedin style={{width:13,height:13}}/>, label:'LINKEDIN DM', text:'Hej Alex — imponerad av Klarnas tillväxt senaste kvartalet. Jobbar med AI-driven prospektering för svenska B2B-bolag. Kan vi byta några ord?' },
            ].map(m => (
              <div key={m.label} style={{ padding:'16px', borderBottom:'1px solid var(--border)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:10 }}>
                  <span style={{ color:'var(--text-muted)' }}>{m.icon}</span>
                  <span className="label">{m.label}</span>
                </div>
                <p style={{ fontSize:12, lineHeight:1.7, color:'var(--text-muted)', whiteSpace:'pre-line', marginBottom:12 }}>{m.text}</p>
                <div style={{ display:'flex', gap:8 }}>
                  <button className="btn-gold" style={{ padding:'6px 14px', fontSize:11 }}>Kopiera</button>
                  <button className="btn-outline" style={{ padding:'5px 12px', fontSize:11 }}>Generera om</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section id="integrations" style={{ padding:'80px 24px', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <p className="label" style={{ marginBottom:12 }}>Integrationer</p>
          <h2 style={{ fontSize:36, fontWeight:700, letterSpacing:'-1px', marginBottom:12 }}>Funkar med ditt CRM.</h2>
          <p style={{ fontSize:16, color:'var(--text-muted)', marginBottom:40 }}>Exportera leads direkt. Inget manuellt arbete.</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['HubSpot','Pipedrive','Salesforce','Excel / CSV','Notion','Webhook API'].map(c => (
              <span key={c} className="card" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'9px 18px', fontSize:13 }}>
                <Check style={{ width:13, height:13, color:'var(--green)' }} /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding:'80px 24px', borderTop:'1px solid var(--border)' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p className="label" style={{ marginBottom:12 }}>Prissättning</p>
            <h2 style={{ fontSize:36, fontWeight:700, letterSpacing:'-1px', marginBottom:10 }}>Enkelt och transparent.</h2>
            <p style={{ fontSize:16, color:'var(--text-muted)' }}>Avsluta när du vill. Inga bindningstider.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
            {[
              { n:'Gratis',  p:'0',   s:'',       d:'Prova utan risk', f:['5 leads/mån','AI-outreach','Kopiera text'],                                             cta:'Kom igång',    href:'/signup',              hi:false },
              { n:'Starter', p:'299', s:' kr/mån',d:'För freelancers', f:['50 leads/mån','AI-outreach','CSV-export','Email + LinkedIn'],                           cta:'Välj Starter', href:'/signup?plan=starter', hi:false },
              { n:'Pro',     p:'799', s:' kr/mån',d:'För säljteam',    f:['250 leads/mån','AI-outreach','CSV + Webhook','Status-tracking','Prio-support'],         cta:'Välj Pro',     href:'/signup?plan=pro',     hi:true  },
              { n:'Agency',  p:'1999',s:' kr/mån',d:'För byråer',      f:['Obegränsat','White-label','API-access','Alla CRM','Dedikerat stöd'],                    cta:'Kontakta oss', href:'mailto:hej@prospekt.app',hi:false},
            ].map(p => (
              <div key={p.n} style={{
                display:'flex', flexDirection:'column', padding:22, borderRadius:10, transition:'all 0.2s',
                background: p.hi ? 'var(--gold-dim)' : 'var(--bg-card)',
                border: p.hi ? '1px solid var(--border-gold)' : '1px solid var(--border)',
                boxShadow: p.hi ? '0 0 40px rgba(240,165,0,0.1)' : 'none',
              }}>
                {p.hi && <span className="label" style={{ marginBottom:12, color:'var(--gold)' }}>Populärast</span>}
                <p style={{ fontSize:14, fontWeight:700, marginBottom:4 }}>{p.n}</p>
                <p style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16 }}>{p.d}</p>
                <p style={{ marginBottom:20 }}>
                  <span style={{ fontSize:28, fontWeight:800 }}>{p.p}</span>
                  <span style={{ fontSize:12, color:'var(--text-muted)' }}>{p.s}</span>
                </p>
                <ul style={{ flex:1, listStyle:'none', marginBottom:20 }}>
                  {p.f.map(f => (
                    <li key={f} style={{ display:'flex', alignItems:'center', gap:8, fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>
                      <Check style={{ width:13, height:13, color: p.hi ? 'var(--gold)' : 'var(--green)', flexShrink:0 }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={p.hi ? 'btn-gold' : 'btn-outline'} style={{ justifyContent:'center', textDecoration:'none', textAlign:'center', padding:'10px 16px' }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding:'100px 24px', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <div style={{ maxWidth:480, margin:'0 auto' }}>
          <div style={{ width:52, height:52, borderRadius:12, background:'var(--gold-dim)', border:'1px solid var(--border-gold)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 28px' }}>
            <Zap style={{ width:22, height:22, color:'var(--gold)' }} />
          </div>
          <h2 style={{ fontSize:48, fontWeight:800, letterSpacing:'-2px', lineHeight:1.1, marginBottom:16 }}>
            Börja hitta<br />kunder idag.
          </h2>
          <p style={{ fontSize:16, color:'var(--text-muted)', marginBottom:36 }}>5 leads gratis. Inget kreditkort krävs.</p>
          <Link href="/signup" className="btn-gold" style={{ fontSize:16, padding:'14px 32px' }}>
            Prova Prospekt gratis <ArrowRight style={{ width:16, height:16 }} />
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop:'1px solid var(--border)', padding:'24px', background:'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
          <span className="font-mono" style={{ fontSize:12, letterSpacing:'3px', color:'var(--text-muted)' }}>PROSPEKT</span>
          <div style={{ display:'flex', gap:24 }}>
            {[['hej@prospekt.app','mailto:hej@prospekt.app'],['Integritetspolicy','/privacy'],['Villkor','/terms']].map(([t,h]) => (
              <a key={t} href={h} style={{ fontSize:12, color:'var(--text-dim)', textDecoration:'none' }} className="hover:text-[var(--text-muted)]">{t}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
