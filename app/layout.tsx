import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'Prospekt — Hitta dina nästa kunder automatiskt',
  description: 'AI-leadsmaskin för svenska bolag. Beskriv din kund, få 10 leads med personaliserad outreach — på 60 sekunder.',
  openGraph: {
    title: 'Prospekt — Hitta dina nästa kunder automatiskt',
    description: 'AI-leadsmaskin för svenska bolag. Beskriv din kund, få 10 leads med personaliserad outreach — på 60 sekunder.',
    url: 'https://prospekt.app',
    siteName: 'Prospekt',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospekt',
    description: 'AI-leadsmaskin för svenska bolag',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
