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

export const contact = {
  address: 'Near Vegas Hill Rill, NH-8, Ten Naka, Silent Resort Road, Manor, Maharashtra 401403',
  phone: '+91 951 959 5655',
  phoneHref: 'tel:+919519595655',
  whatsappHref: 'https://wa.me/919519595655',
  visitWhatsappHref: 'https://wa.me/919519595655?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20to%20visit%20Beyond60.',
  email: 'hello@beyond60seniorscare.com',
}

const sectionImage = (name: string) => assetPath(`/images/sectioned/${name}`)
const amenityImage = (name: string) => assetPath(`/images/amenities/${name}`)

// Section 1 — opening title card
export const opening = {
  line: 'Because your family deserves peace of mind.',
}

// Section 2 — hero
export const hero = {
  eyebrow: 'Reassurance for your family. A fuller life for them.',
  headline: 'The care you’d choose for them yourself.',
  image: sectionImage('hero-senior-portrait.jpg'),
  imageAlt: 'Smiling senior resident at Beyond60, wrapped in a white dupatta with festival colour on her cheek',
}

// Section 3 — location & reassurance (scroll-scrubbed drone descent)
export const location = {
  eyebrow: 'Peace of mind, simply stated',
  line: 'A calm, residential setting — with an on-call ambulance and trained staff, always within reach.',
  video: assetPath('/videos/drone-location-to-pool-hd.mp4'),
  poster: assetPath('/videos/drone-location-to-pool-poster.jpg'),
  finalFrame: assetPath('/videos/drone-location-to-pool-final.jpg'),
  posterAlt: 'Aerial approach over the Beyond60 property, descending toward the courtyard pool',
}

// Section 4 — specialized care (backdrop = frozen final frame of the location descent)
export const specializedCare = {
  backdrop: location.finalFrame,
  backdropAlt: 'Beyond60 courtyard pool, viewed at ground level',
  intro: 'Specialized care, for every stage of need.',
  closing:
    'Every resident is personally assessed before admission — we visit them at their current home first to confirm we can genuinely provide the right level of care. If we’re not certain we can, we say so, and decline respectfully rather than take on more than we can deliver.',
  items: [
    { title: 'Memory Care', detail: 'Dementia & Alzheimer’s support', icon: 'Brain' },
    { title: 'Recovery Care', detail: 'Post-hospitalisation & stroke recovery', icon: 'Activity' },
    { title: 'Mobility & Paralysis Care', detail: 'Paralysis, Parkinson’s, physiotherapy & rehab', icon: 'Accessibility' },
    { title: 'Chronic Illness Management', detail: 'Diabetes and other ongoing conditions', icon: 'Stethoscope' },
    { title: 'Palliative Care', detail: 'Comfort-focused care for advanced conditions', icon: 'HeartHandshake' },
    { title: 'Nursing & Everyday Support', detail: 'Feeding, mobility aids, daily nursing needs', icon: 'HeartPulse' },
    { title: 'Respite Care', detail: 'Short-term stays', icon: 'CalendarClock' },
  ],
}

// Section 4.5 — scenic transition (scroll-scrubbed drone rise, continues seamlessly from the location descent's final frame)
export const scenic = {
  video: assetPath('/videos/drone-pool-to-overhead-hd.mp4'),
  poster: assetPath('/videos/drone-pool-to-overhead-poster.jpg'),
  finalFrame: assetPath('/videos/drone-pool-to-overhead-final.jpg'),
  posterAlt: 'Aerial view rising from the courtyard pool into a straight-down view of the Beyond60 grounds',
}

// Section 5 — amenities scroll-through (backdrop = frozen final frame of the scenic rise)
export const amenitiesBackdrop = {
  image: scenic.finalFrame,
  alt: 'Overhead view of the Beyond60 courtyard and pool',
}

export const amenities = [
  {
    title: 'Dining',
    label: 'DINING',
    detail: 'Planned daily meals, built around personalized routines — not a fixed menu everyone eats the same way.',
    image: amenityImage('dining.jpg'),
    alt: 'Bright Beyond60 dining area with tables and chairs',
  },
  {
    title: 'Library',
    label: 'LIBRARY',
    detail: 'A quiet, light-filled place for books, reading and unhurried time.',
    image: amenityImage('library.jpg'),
    alt: 'Beyond60 library with bookshelves and reading table',
  },
  {
    title: 'Entertainment',
    label: 'ENTERTAINMENT',
    detail: 'Television, games and comfortable lounge seating for shared downtime.',
    image: amenityImage('entertainment.jpg'),
    alt: 'Beyond60 entertainment lounge with television and seating',
  },
  {
    title: 'Outdoor Activities & Ground',
    label: 'OUTDOOR',
    detail: 'Open-air courtyard space for group activities, fresh air and gentle movement.',
    image: amenityImage('outdoor.jpg'),
    alt: 'Residents seated together outdoors at Beyond60',
  },
  {
    title: 'Gym',
    label: 'GYM',
    detail: 'Outdoor exercise equipment suited to gentle, senior-friendly routines.',
    image: amenityImage('gym.jpg'),
    alt: 'Outdoor gym equipment at Beyond60',
  },
  {
    title: 'Pool',
    label: 'POOL',
    detail: 'A calm courtyard pool for supervised recreation and relaxed afternoons.',
    image: amenityImage('pool.jpg'),
    alt: 'Beyond60 courtyard swimming pool',
  },
]

// Section 6 — reviews
export const ratingBreakdown = {
  average: 4.6,
  total: 63,
  stars: [
    { label: '5 star', count: 42 },
    { label: '4 star', count: 18 },
    { label: '3 star', count: 2 },
    { label: '2 star', count: 0 },
    { label: '1 star', count: 1 },
  ],
}

export const reviews = [
  {
    quote: 'My mother passed away in the year 2021 and Covid (Lockdown) and it’s Stopped in 2023. What worng when I visit to beyond 60 in 2024 and asking the death certificate.',
    name: 'Anis Charania',
    rating: 1,
  },
  {
    quote: 'Good environment and average accomodation facility.. though was a great experience👍🏻 …',
    name: 'Saibin Manesia',
    rating: 3,
  },
  {
    quote: 'It is a comfortable place with adequate facilities and a clean environment. It is a home away from home and one feels included and cared for..',
    name: 'Rozina R',
    rating: 4,
  },
  {
    quote: 'Awsm place with beautiful ambiance and great facilities.....Staff are friendly and Co-operative. Had a great fun 😊😊😊 …',
    name: 'alisha jaria',
    rating: 4,
  },
  {
    quote: 'My Aunt lives there and she is very happy to be there, I live in US and everytime I call, the Gentleman that answers is always so cordial and friendly. THANK-YOU.',
    name: 'Shaukat Wadiwalla',
    rating: 5,
  },
  {
    quote: 'Excellent place for the seniors. Had mum stay at Beyond 60 for around 18 months and were extremely happy. The care and treatment was top class and the food was healthy. We could see the happiness on mum’s face.',
    name: 'Amyn Nayani',
    rating: 5,
  },
  {
    quote: 'The place is well maintained and provides a perfect ambience for seniors to unwind and relax. The staff is courteous and prompt. You can rest assured your loved one will be taken care of without any second thought.',
    name: 'Melinda Arora',
    rating: 5,
  },
  {
    quote: 'My brother & I are very grateful to all the wonderful people at Beyond 60 for their unremitting care of our Mother who was bedridden for the last months of her life. Everyone at the facility took the utmost care of her tirelessly & with great compassion.',
    name: 'Sujata Simons',
    rating: 5,
  },
]

// Section 7 — room / care-plan tiers (unchanged model)
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

// Section 8 — admissions process
export const admissionSteps = [
  {
    title: 'Call or WhatsApp us',
    detail: 'Reach out anytime, no pressure, just a conversation.',
  },
  {
    title: 'Book a visit',
    detail: 'See the space, meet the team in person.',
  },
  {
    title: 'In-person counselling',
    detail: 'We sit down together to understand your family’s specific needs.',
  },
  {
    title: 'Weekly follow-up',
    detail: 'Once settled, we check in regularly to keep you informed.',
  },
]

// Section 9 — final CTA
export const finalCta = {
  headline: 'Ready for peace of mind?',
  subline: 'One call, one visit — that’s all it takes to see if Beyond60 is right for your family.',
  button: 'Call or WhatsApp us',
}

// Gallery page — full media grid across all areas
export const galleryFull = [
  { src: assetPath('/images/gallery-full/gate.jpg'), alt: 'Beyond60 Seniors Care Foundation entrance gate, Manor', category: 'Gate' },
  { src: assetPath('/images/drone/complex-full-aerial.jpg'), alt: 'Aerial view of the Beyond60 residence complex and pool', category: 'Exterior' },
  { src: assetPath('/images/gallery-full/office.jpg'), alt: 'Beyond60 reception and office desk', category: 'Office' },
  { src: amenityImage('dining.jpg'), alt: 'Bright Beyond60 dining area with tables and chairs', category: 'Dining' },
  { src: amenityImage('library.jpg'), alt: 'Beyond60 library with bookshelves and reading table', category: 'Library' },
  { src: amenityImage('entertainment.jpg'), alt: 'Beyond60 entertainment lounge with television and seating', category: 'Entertainment' },
  { src: assetPath('/images/gallery-full/activities-2.jpg'), alt: 'Residents seated together for a group activity at Beyond60', category: 'Activities' },
  { src: amenityImage('outdoor.jpg'), alt: 'Residents seated together outdoors at Beyond60', category: 'Outdoor' },
  { src: amenityImage('gym.jpg'), alt: 'Outdoor gym equipment at Beyond60', category: 'Gym' },
  { src: assetPath('/images/gallery-full/gym-2.jpg'), alt: 'Outdoor courtyard and pool walkway at Beyond60', category: 'Grounds' },
  { src: amenityImage('pool.jpg'), alt: 'Beyond60 courtyard swimming pool', category: 'Pool' },
  { src: assetPath('/images/gallery-full/pool-wide.jpg'), alt: 'Wide view of the Beyond60 courtyard pool between residence blocks', category: 'Pool' },
  { src: assetPath('/images/gallery-full/room-1.jpg'), alt: 'Twin-bed resident room at Beyond60', category: 'Rooms' },
  { src: assetPath('/images/gallery-full/room-2.jpg'), alt: 'Resident room with adjustable bed at Beyond60', category: 'Rooms' },
  { src: sectionImage('executive-private.jpg'), alt: 'Executive private room at Beyond60', category: 'Rooms' },
  { src: assetPath('/images/gallery-full/ambulance.jpg'), alt: 'Beyond60 on-call ambulance parked at the residence', category: 'Ambulance' },
  { src: assetPath('/images/gallery-full/staff-greeting.jpg'), alt: 'Staff member warmly greeting a resident at Beyond60', category: 'Staff' },
  { src: assetPath('/images/gallery-full/staff-team.jpg'), alt: 'Beyond60 caregiving staff team', category: 'Staff' },
  { src: assetPath('/images/drone/staff-care-moment.jpg'), alt: 'Beyond60 staff member caring for residents', category: 'Staff' },
  { src: assetPath('/images/gallery-1.jpg'), alt: 'Residents celebrating a birthday together at Beyond60', category: 'Activities' },
  { src: assetPath('/images/gallery-3.jpg'), alt: 'Residents and family at a community event at Beyond60', category: 'Activities' },
  { src: assetPath('/images/gallery-4.jpg'), alt: 'Residents and staff at a festival gathering at Beyond60', category: 'Activities' },
  { src: assetPath('/images/drone/courtyard-aerial.jpg'), alt: 'Aerial view of the Beyond60 courtyard with loungers and palms', category: 'Exterior' },
  { src: assetPath('/images/drone/aerial-approach.jpg'), alt: 'Aerial approach to the Beyond60 residence near Manor, Palghar', category: 'Exterior' },
]
