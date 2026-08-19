import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond60 Seniors Care | Assisted Living in Manor, Palghar',
  description: 'Wholesome senior assisted living, specialized care and recovery support in a calm residential setting near Manor, Palghar.',
  icons: { icon: '/images/logo.png', apple: '/images/logo.png' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
