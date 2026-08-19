import type { Metadata } from 'next'
import { assetPath } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond60 Seniors Care | Assisted Living in Manor, Palghar',
  description: 'Wholesome senior assisted living, specialized care and recovery support in a calm residential setting near Manor, Palghar.',
  icons: { icon: assetPath('/images/logo.png'), apple: assetPath('/images/logo.png') },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
