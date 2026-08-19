export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${path}`
}

export const siteConfig = {
  brand: 'BEYOND60',
  eyebrow: 'SENIOR ASSISTED LIVING / MANOR, PALGHAR',
  headline: ['Peace of mind,', 'for your family.'],
  description:
    'A serene senior living residence near Manor, Palghar, with thoughtful support and a calm daily routine.',
  cta: 'Call admissions',
  ctaHref: 'tel:+919519595655',
  secondaryCta: 'Message on WhatsApp',
  secondaryCtaHref: 'https://wa.me/919519595655',
  phoneDisplay: '+91 951 959 5655',
}

export const trustStrip = [
  ['Setting', 'Calm and residential'],
  ['Community', 'Meals, activities and companionship'],
  ['Support', 'Discussed around each resident'],
]

export const roomOptions = [
  {
    title: 'Twin Sharing',
    detail: 'A shared living space with an unrelated roommate, offering everyday companionship and the most accessible room format.',
    image: 'twin-sharing.jpg',
    imageAlt: 'Twin-sharing room with two beds at Beyond60',
  },
  {
    title: 'Semi-Private',
    detail: 'A small private room for residents who value their own quiet space within the wider community.',
    image: 'semi-private.jpg',
    imageAlt: 'Small private room at Beyond60',
  },
  {
    title: 'Executive / Private',
    detail: 'A master bedroom with an ensuite, offering more personal space and privacy.',
    image: 'executive-private.jpg',
    imageAlt: 'Executive private room at Beyond60',
  },
  {
    title: 'Whole-Apartment-Exclusive',
    detail: 'The complete apartment reserved for one resident, a couple or one family’s private use.',
    image: '',
    imageAlt: '',
  },
]

export const qualitySignals = [
  ['Room options', 'Shared, private and whole-apartment'],
  ['Plan guidance', 'Discussed privately with admissions'],
  ['Care matching', 'Based on the resident’s needs'],
  ['What it includes', 'Accommodation, meals and daily support'],
]

// Mirrors the journey Beyond60's own site already describes: book appointment,
// in-person counselling, weekly follow-up. See PUBLIC_RESEARCH_2026-07-29.md.
export const careJourney = [
  {
    title: 'Call or WhatsApp',
    detail: 'Speak directly with the admissions team about your family’s situation, preferred room privacy and daily support needs.',
  },
  {
    title: 'Book an appointment',
    detail: 'Schedule a visit to the residence — see the rooms, common areas and daily routine in person.',
  },
  {
    title: 'In-person counselling',
    detail: 'A sit-down conversation at the residence to match care needs, room type and package before anyone decides.',
  },
  {
    title: 'Weekly follow-up',
    detail: 'After admission, the family stays in the loop with regular check-ins — not just a one-time move-in.',
  },
]

export const contact = {
  address: 'Near Vegas Hill Rill, NH-8, Ten Naka, Silent Resort Road, Manor, Maharashtra 401403',
  phone: '+91 951 959 5655',
  phoneHref: 'tel:+919519595655',
  whatsappHref: 'https://wa.me/919519595655',
  visitWhatsappHref: 'https://wa.me/919519595655?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20to%20visit%20Beyond60.',
  email: 'hello@beyond60seniorscare.com',
}

// Referrals are the strongest confirmed lead source (INTAKE_SUMMARY.md) — the
// site should visibly earn that same trust for people arriving without one.
export const socialProof = {
  kicker: 'HOW MOST FAMILIES FIND US',
  heading: ['Most residents arrive', 'through another family.'],
  body: 'Word of mouth is still Beyond60’s strongest source of new residents — families who already trust us send the next family who needs us.',
  images: [
    { src: assetPath('/images/drone/residents-group.jpg'), alt: 'Residents gathered together at Beyond60, Manor' },
    { src: assetPath('/images/gallery-2.jpg'), alt: 'Two residents laughing together at Beyond60' },
  ],
}

export const trustSection = {
  kicker: 'WHY FAMILIES TRUST BEYOND60',
  heading: ['Real staff.', 'Real routines.'],
  body: 'Trained staff are present around the clock, and the building is designed for safety, not just appearance — the kind of detail you can verify on a visit, not just read about.',
  points: [
    '24/7 health and wellness monitoring',
    'Medication management by trained staff',
    'Safety-first building: handrails, non-slip flooring, good lighting',
    'Planned meals, activities and daily community routines',
  ],
  image: { src: assetPath('/images/drone/staff-care-moment.jpg'), alt: 'Beyond60 staff member caring for residents' },
}

export const gallery = [
  { src: assetPath('/images/about-residence.jpg'), alt: 'Beyond60 Seniors Care Foundation entrance signage, Manor' },
  { src: assetPath('/images/drone/aerial-approach.jpg'), alt: 'Aerial approach to the Beyond60 residence near Manor, Palghar' },
  { src: assetPath('/images/gallery-1.jpg'), alt: 'Residents celebrating a birthday together at Beyond60' },
  { src: assetPath('/images/drone/pool-groundlevel.jpg'), alt: 'Pool and courtyard seating at Beyond60' },
  { src: assetPath('/images/gallery-3.jpg'), alt: 'Residents and family at a community event at Beyond60' },
  { src: assetPath('/images/drone/courtyard-aerial.jpg'), alt: 'Aerial view of the Beyond60 courtyard with loungers and palms' },
  { src: assetPath('/images/gallery-4.jpg'), alt: 'Residents and staff at a festival gathering at Beyond60' },
  { src: assetPath('/images/drone/complex-full-aerial.jpg'), alt: 'Full aerial view of the Beyond60 residence complex and pool' },
]
