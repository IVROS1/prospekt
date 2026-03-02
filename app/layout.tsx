import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prospekt — Hitta dina nästa kunder automatiskt',
  description: 'AI-leadsmaskin för svenska bolag. Beskriv din kund, få 10 leads med personaliserad outreach — på 60 sekunder.',
  openGraph: {
    title: 'Prospekt — Hitta dina nästa kunder automatiskt',
    description: 'AI-leadsmaskin för svenska bolag. Beskriv din kund, få 10 leads med personaliserad outreach — på 60 sekunder.',
    url: 'https://prospekt.vercel.app',
    siteName: 'Prospekt',
    locale: 'sv_SE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        {children}
        <Toaster
          theme="dark"
          toastOptions={{ style: { background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', color: '#e8e8e8' } }}
          position="top-right"
        />
      </body>
    </html>
  )
}
