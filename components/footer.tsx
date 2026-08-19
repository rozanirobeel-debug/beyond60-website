import Link from 'next/link'
import { assetPath, contact, siteConfig } from '@/lib/site-config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer shell">
      <Link className="wordmark" href="/">
        <img className="wordmark-logo" src={assetPath('/images/logo.png')} alt={siteConfig.brand} />
      </Link>
      <div className="footer-contact">
        <p>{contact.address}</p>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <span>© {year} Beyond60 Seniors Care</span>
    </footer>
  )
}
