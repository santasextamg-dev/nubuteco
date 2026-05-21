import type { Metadata, Viewport } from 'next'
import { Libre_Franklin, Patua_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const libreFranklin = Libre_Franklin({ 
  subsets: ["latin"],
  variable: '--font-libre-franklin',
})

const patuaOne = Patua_One({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-patua-one',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#F4DDC0',
}

export const metadata: Metadata = {
  title: 'NuButeco - Vem como quiser, sem cerimônia',
  description: 'A casa é sua. Música ao vivo, cerveja gelada e clima de resenha. O melhor do sertanejo e modão para embalar a noite.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${libreFranklin.variable} ${patuaOne.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
