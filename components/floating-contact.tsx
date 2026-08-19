'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { track } from '@/lib/analytics'
import { contact } from '@/lib/site-config'

export function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Contact Beyond60">
      <a
        href={contact.phoneHref}
        onClick={() => {
          track('call_clicked', { source: 'floating' })
          track('qualified_lead_started', { channel: 'call', source: 'floating' })
        }}
        aria-label={`Call Beyond60 at ${contact.phone}`}
      >
        <Phone size={19} /><span>Call</span>
      </a>
      <a
        href={contact.whatsappHref}
        onClick={() => {
          track('visit_booked', { channel: 'whatsapp', source: 'floating' })
          track('qualified_lead_started', { channel: 'visit', source: 'floating' })
        }}
        aria-label="Message Beyond60 on WhatsApp"
      >
        <MessageCircle size={20} /><span>WhatsApp</span>
      </a>
    </div>
  )
}
