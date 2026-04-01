import type { Metadata, Viewport } from 'next'
import { syne, raleway, synenew } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: "Startup Blueprint | How Women Leaders Are Structuring the AI-Powered Generation of African Startups",
  description:
    "An exclusive roundtable on April 25, 2026 in Lagos, Nigeria. Discover how women leaders are structuring the AI-powered generation of African startups.",
  keywords: ['African startups', 'women in tech', 'AI', 'Lagos', 'startup event', 'roundtable'],
  openGraph: {
    title: "Startups Blueprint",
    description:
      'How Women Leaders Are Structuring the AI-Powered Generation of African Startups.',
    type: 'website',
    locale: 'en_NG',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon.png', // or .png
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png', // optional
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C1A1A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${raleway.variable} ${synenew.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}