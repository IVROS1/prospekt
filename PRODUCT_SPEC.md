# Prospekt — Produkt-spec v1.0

## Vision
AI-leadsmaskin för svenska bolag. Hitta rätt kunder + skriv personaliserad outreach på svenska. Enkelt som Google, kraftfullt som Apollo.

## Positionering
- **Inte ett CRM** — vi matar ditt befintliga CRM (HubSpot, Pipedrive, Excel)
- **Inte ett emailverktyg** — vi hittar leads + skriver texten, du skickar
- **Inte ett amerikanskt enterprise-verktyg** — byggt för svenska SMBs och konsulter

## Core User Flow

### Steg 1 — Input
Användaren fyller i:
- "Jag säljer [VAD]"
- "Till [VEM / bransch / bolagsstorlek]"
- "I [var / Stockholm, Göteborg, hela Sverige]"

Exempel: "Jag säljer redovisningstjänster till startups med 5-50 anställda i Stockholm"

### Steg 2 — AI hittar leads
- Apify scraper mot Allabolag.se + LinkedIn
- Returnerar: bolagsnamn, bransch, antal anställda, hemsida, kontaktperson (namn + roll + LinkedIn-URL)
- Visar 10-50 leads i ett kort-baserat gränssnitt (inte en tabell!)

### Steg 3 — AI skriver outreach
- Claude genererar personaliserad text per lead
- Anpassat till: vad bolaget gör, vad kontaktpersonen jobbar med, Daniels erbjudande
- Ton: professionell svenska, inte säljig
- Format: kort email (3-4 meningar) + LinkedIn-meddelande (1-2 meningar)

### Steg 4 — Export / Skicka
- Kopiera enskild text (clipboard)
- Exportera alla till CSV (kompatibelt med HubSpot/Pipedrive import)
- Webhook-URL (skicka direkt till CRM-automation)
- "Öppna i LinkedIn" (deeplink)

## Teknisk Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn/UI
- **Backend:** Next.js API routes
- **Auth:** Supabase Auth (email + Google OAuth)
- **DB:** Supabase PostgreSQL
- **Lead-sökning:** Apify (Actor: `apify/linkedin-company-search` + Allabolag scraper)
- **AI-generering:** Anthropic Claude 3.5 Haiku (billigast, snabbast för outreach)
- **Payments:** Stripe Checkout
- **Deploy:** Vercel

## Datamodell (Supabase)

```sql
-- Users hanteras av Supabase Auth

CREATE TABLE searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  query_what TEXT NOT NULL,        -- "vad säljer du"
  query_who TEXT NOT NULL,         -- "till vem"
  query_where TEXT,                -- "var"
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  search_id UUID REFERENCES searches(id),
  user_id UUID REFERENCES auth.users(id),
  company_name TEXT,
  company_website TEXT,
  company_industry TEXT,
  company_size TEXT,
  company_location TEXT,
  contact_name TEXT,
  contact_role TEXT,
  contact_linkedin_url TEXT,
  contact_email TEXT,
  ai_email_text TEXT,
  ai_linkedin_text TEXT,
  status TEXT DEFAULT 'new',       -- new, contacted, replied, converted
  exported_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT DEFAULT 'free',        -- free, starter, pro, agency
  leads_used_this_month INT DEFAULT 0,
  leads_limit INT DEFAULT 5,       -- free: 5, starter: 50, pro: 250, agency: unlimited
  billing_period_start TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Prissättning

| Plan | Pris | Leads/mån | CRM Export |
|------|------|-----------|------------|
| Gratis | 0 kr | 5 | Nej |
| Starter | 299 SEK/mån | 50 | CSV |
| Pro | 799 SEK/mån | 250 | CSV + Webhook |
| Agency | 1 999 SEK/mån | Obegränsat | Allt + White-label |

## UI/UX Design Principer

1. **Minimal landing page** — Hero med sökritan direkt. Ingen lång scrollsida.
2. **Resultat som KORT** — inte tabeller. Varje lead är ett kort med bild/ikon, bolagsinfo, AI-text.
3. **En-knapps-export** — kopiera, exportera, eller webhook med ett klick per lead
4. **Notion-känsla** — rent, mycket luft, subtila animationer
5. **Mobil-first** — sälj på en konferens med telefonen

## Färgpalett
- Bakgrund: #FAFAF9 (off-white)
- Primary: #0F172A (slate-900)
- Accent: #6366F1 (indigo-500)
- Success: #22C55E (green-500)
- Text: #334155 (slate-700)

## Apify Integration

### Primär: LinkedIn Company Search
```
Actor: apify/linkedin-company-search
Input:
  keywords: [bransch/typ från user query]
  location: [plats från user query]
  maxResults: 50
Output: companies med LinkedIn-data
```

### Sekundär: Allabolag.se scraper (bygg custom)
```
URL-mönster: https://www.allabolag.se/bransch/[SIC-kod]?county=[lan]
Scrapa: bolagsnamn, org-nr, antal anst., omsättning, adress
```

## API Routes

```
POST /api/search          — Skapa sökning, kör Apify, returnera leads
POST /api/generate        — Generera AI-outreach för ett lead
POST /api/export/csv      — Exportera leads som CSV
POST /api/webhook/setup   — Konfigurera CRM-webhook
POST /api/stripe/checkout — Skapa Stripe Checkout session
GET  /api/stripe/portal   — Stripe customer portal
POST /api/stripe/webhook  — Stripe webhook handler
```

## Milstolpar (Antfarm Build)

### US-001: Projekt-setup + infrastruktur
- Next.js 14 + TypeScript + Tailwind + Shadcn/UI
- Supabase projekt + schema + auth
- Vercel deployment pipeline
- Env vars setup

### US-002: Landing page
- Hero med sökritan (VAD / VART / VEM)
- Pricing-sektion (3 planer)
- "Prova gratis"-CTA → signup
- SEO meta tags (sv + en)

### US-003: Auth flow
- Supabase email auth (signup/login/logout)
- Google OAuth
- Onboarding modal efter signup

### US-004: Lead-sökning (kärnan)
- Sök-UI i dashboard
- Apify-integration (LinkedIn Company Search actor)
- Allabolag fallback scraper
- Resultat-kort UI med animationer

### US-005: AI outreach-generering
- Claude 3.5 Haiku API integration
- Prompt engineering för svensk professionell ton
- Per-lead: email-text + LinkedIn-text
- Copy-to-clipboard

### US-006: Export + CRM-integration
- CSV-export av alla leads i en sökning
- Webhook-konfig (POST leads till valfri URL)
- Status-tracking (new → contacted → replied)

### US-007: Stripe payments
- Checkout för Starter/Pro/Agency
- Webhook handler (subscription created/updated/cancelled)
- Lead-quota enforcement (soft limit med upgrade prompt)
- Customer portal (hantera abonnemang)

### US-008: Polish + launch-ready
- Error handling everywhere
- Loading states + skeletons
- Mobile responsive
- Metadata + OG image
- robots.txt + sitemap.xml

## Env Vars (Vercel)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ANTHROPIC_API_KEY=
APIFY_API_TOKEN=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_APP_URL=https://prospekt.app
```

## Distribution Plan (First 24h)

### Tier 1 — Gratis, snabbt
1. Reddit r/startups_sweden, r/ehandel, r/webdev (posts klara)
2. LinkedIn post från Decido Systems (länka till Prospekt) — NEJ, separat brand
3. LinkedIn post från Daniel (personlig) — kräver godkännande
4. Hacker News "Show HN" (engelska)
5. IndieHackers "I just launched"

### Tier 2 — Direct outreach
1. Kontakta 20 svenska säljchefer/founders via LinkedIn
2. Posta i Facebook-grupper: "Entrepreneurer i Sverige", "Startup Stockholm"
3. Slack: Nordic Startup Network, Swedish Entrepreneurs

### Tier 3 — Paid (dag 2+)
1. LinkedIn Ads mot: Säljchefer, VD:ar på 10-100 anst. bolag i Sverige
2. Google Ads: "hitta kunder Sverige", "lead generation Sverige"

## Success Metrics (24h)

- [ ] MVP live på Vercel
- [ ] Minst 1 riktig sökning fungerar end-to-end
- [ ] Stripe checkout fungerar
- [ ] 3+ signups
- [ ] 1+ betalande kund
