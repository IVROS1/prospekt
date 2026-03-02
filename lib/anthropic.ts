import Anthropic from '@anthropic-ai/sdk'

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "placeholder",
})

export interface Lead {
  company_name: string
  company_website?: string
  company_industry?: string
  company_size?: string
  company_location?: string
  contact_name?: string
  contact_role?: string
}

export interface OutreachTexts {
  email: string
  linkedin: string
}

export async function generateOutreach(
  lead: Lead,
  sellerContext: { what: string; who: string; where?: string }
): Promise<OutreachTexts> {
  const prompt = `Du är en erfaren säljare som skriver personaliserad outreach på svenska. 
Skriv kortfattad, professionell text som INTE låter som ett sälj-mail.

Säljare säljer: ${sellerContext.what}
Målgrupp: ${sellerContext.who}

Lead-info:
- Bolag: ${lead.company_name}
- Bransch: ${lead.company_industry || 'okänd'}
- Storlek: ${lead.company_size || 'okänd'}
- Ort: ${lead.company_location || 'okänd'}
- Kontakt: ${lead.contact_name || 'okänd'} (${lead.contact_role || 'okänd roll'})
- Hemsida: ${lead.company_website || 'saknas'}

SKAPA TVÅ TEXTER:

EMAIL_SUBJECT: [Kort ämnesrad, 5-8 ord, inte säljig]

EMAIL_BODY: [3-4 meningar. Börja med en observation om deras bolag (inte smicker). 
Sedan en mening om vad du gör. Avsluta med en enkel fråga. MAX 80 ord.]

LINKEDIN: [1-2 meningar. Direkt och personlig. MAX 40 ord.]

Svara EXAKT i detta format, ingen annan text.`

  const response = await anthropic.messages.create({
    model: 'claude-3-5-haiku-20241022',
    max_tokens: 400,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''

  // Parse response
  const emailSubjectMatch = text.match(/EMAIL_SUBJECT:\s*(.+)/)?.[1]?.trim() || ''
  const emailBodyMatch = text.match(/EMAIL_BODY:\s*([\s\S]+?)(?=LINKEDIN:|$)/)?.[1]?.trim() || ''
  const linkedinMatch = text.match(/LINKEDIN:\s*([\s\S]+?)$/)?.[1]?.trim() || ''

  return {
    email: emailSubjectMatch ? `Ämne: ${emailSubjectMatch}\n\n${emailBodyMatch}` : emailBodyMatch,
    linkedin: linkedinMatch,
  }
}
