export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${path}`
}

export const siteConfig = {
  brand: 'BEYOND60',
  eyebrow: 'SENIOR ASSISTED LIVING / MANOR, PALGHAR',
  headline: ['Peace of mind,', 'for your family.'],
  description:
    'A serene, family-run senior care residence near Manor, Palghar — 24-hour care, real supervision and a calm daily routine, around 60 km from Borivali.',
  cta: 'Call admissions',
  ctaHref: 'tel:+919519595655',
  secondaryCta: 'Message on WhatsApp',
  secondaryCtaHref: 'https://wa.me/919519595655',
  phoneDisplay: '+91 951 959 5655',
}

export const trustStrip = [
  ['Care model', '24-hour supervision'],
  ['Location', '~60 km from Borivali'],
  ['Care levels', '3 categories'],
]

export const careCategories = [
  {
    index: '01',
    title: 'Self Independent',
    detail: 'Full accommodation, food, housekeeping, laundry and use of all amenities for residents who live independently.',
    status: 'FROM ₹27,000/mo',
  },
  {
    index: '02',
    title: 'Semi Dependent',
    detail: 'Everything in Self Independent plus daily monitoring, basic observation and help with medicines.',
    status: 'FROM ₹32,000/mo',
  },
  {
    index: '03',
    title: 'Bedridden / Dementia Care',
    detail: 'Full-time caretaker assistance — showering, diaper changing, washroom support and feeding, alongside full accommodation.',
    status: 'FROM ₹37,000/mo',
  },
]

export const qualitySignals = [
  ['Room options', 'Twin, semi-private, executive private'],
  ['Refundable deposit', '₹50,000'],
  ['One-time admission fee', '₹5,000'],
  ['What it includes', 'Toiletries, bedding and linen provided'],
]

export const admissionSteps = [
  { title: 'Call or WhatsApp', detail: 'Speak directly with the admissions team about your family’s situation.' },
  { title: 'Understand needs', detail: 'We ask about care level, mobility and medical needs to recommend the right category.' },
  { title: 'Visit the residence', detail: 'See the rooms, common areas and daily routine in person before deciding anything.' },
  { title: 'Choose a package', detail: 'Self independent, semi dependent, or bedridden/dementia care — priced by room type.' },
  { title: 'Admission', detail: 'Deposit and admission fee, then move-in on a date that works for your family.' },
]

export const contact = {
  address: 'Near Vegas Hill Rill, NH-8, Ten Naka, Silent Resort Road, Manor, Maharashtra 401403',
  phone: '+91 951 959 5655',
  phoneHref: 'tel:+919519595655',
  whatsappHref: 'https://wa.me/919519595655',
  email: 'hello@beyond60seniorscare.com',
}

export const gallery = [
  { src: assetPath('/images/gallery-4.jpg'), alt: 'Beyond60 resident smiling at the residence' },
  { src: assetPath('/images/gallery-1.jpg'), alt: 'Residents celebrating a birthday at Beyond60' },
  { src: assetPath('/images/gallery-3.jpg'), alt: 'Residents and family at a Beyond60 community event' },
  { src: assetPath('/images/about-residence.jpg'), alt: 'Beyond60 Seniors Care residence entrance, Manor' },
]
