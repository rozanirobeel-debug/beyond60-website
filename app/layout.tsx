import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond60 Seniors Care | Prototype',
  description: 'Senior assisted living near Manor, Palghar — website prototype, not the live site.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
