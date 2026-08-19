import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return <main className="not-found"><div><h1>404</h1><h2>This page has wandered off.</h2><p>Let’s take you back to Beyond60.</p><Button asChild><Link href="/">Return home</Link></Button></div></main>
}
