import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://siaventure.com'),
  title: {
    default: 'Sia Venture — Beautiful Digital Planners & Trackers',
    template: '%s — Sia Venture',
  },
  description:
    'Sia Venture sells minimal, beautiful digital planners, habit trackers, and productivity templates. Download instantly, stay consistent, and build better habits.',
  keywords: [
    'digital planners',
    'habit trackers',
    'productivity templates',
    'notion templates',
    'goodnotes planner',
    'printable planner',
    'daily planner',
  ],
  openGraph: {
    title: 'Sia Venture — Beautiful Digital Planners & Trackers',
    description:
      'Minimal, beautiful digital planners and trackers. Download instantly and build better habits.',
    type: 'website',
    siteName: 'Sia Venture',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sia Venture — Beautiful Digital Planners & Trackers',
    description:
      'Minimal, beautiful digital planners and trackers. Download instantly and build better habits.',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-background`}
    >
      <head><meta name="p:domain_verify" content="cdbfbd1af9d3b7bbc3979b88d176c30a"/></head>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
