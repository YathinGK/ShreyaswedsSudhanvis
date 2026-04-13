import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sudhanvi S & Shreyas Anand Wedding Invitation',
  description: 'You are cordially invited to celebrate the wedding of Vishu and Kavya',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B4513',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${greatVibes.variable} ${poppins.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
