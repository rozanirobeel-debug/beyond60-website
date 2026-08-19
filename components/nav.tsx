'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { contact, siteConfig } from '@/lib/site-config'

const links = [
  { href: '/#care', label: 'Specialized Care' },
  { href: '/#amenities', label: 'Amenities' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#rooms', label: 'Rooms' },
  { href: '/#admission', label: 'Admissions' },
  { href: '/gallery', label: 'Photo Gallery' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav shell" aria-label="Main navigation">
      <Link className="wordmark" href="/" aria-label="Beyond60 home" onClick={() => setOpen(false)}>
        <span className="wordmark-dot" />
        {siteConfig.brand}
      </Link>

      <div className="nav-links" aria-label="Section navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <a className="nav-phone" href={contact.phoneHref} aria-label={`Call Beyond60 at ${contact.phone}`}>
        <Phone size={14} /> {contact.phone}
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a href={contact.phoneHref} onClick={() => setOpen(false)}>
          <Phone size={16} /> Call {contact.phone}
        </a>
      </div>
    </nav>
  )
}
