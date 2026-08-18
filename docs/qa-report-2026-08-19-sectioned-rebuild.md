# QA Report — Sectioned Homepage Rebuild — 2026-08-19

## Scope verified

- Homepage is exactly six sections: hero, reassurance, amenities, reviews, rooms, and admissions.
- The former continuous scroll-story component has been removed.
- Hero uses a drone-derived exterior view with one primary action.
- Reassurance copy uses “on-call ambulance”; it does not name a hospital or claim a distance or response time.
- Amenities render exactly five real-photo cards. Dining copy covers both planned daily meals and personalized routines.
- Reviews render as one rotating quote at a time from five distinct public reviewers in `docs/reviews-source.md`.
- Rooms render four equal cards using the approved privacy model: Twin Sharing, Semi-Private, Executive / Private, and Whole-Apartment-Exclusive.
- Room cards contain photos only; there are no video elements on the page.
- Persistent Call and WhatsApp actions are present throughout the page.
- Existing `call_clicked`, `visit_booked`, and `qualified_lead_started` hooks remain wired to the relevant actions.

## Tooling and motion

- Lenis drives smooth wheel scrolling.
- GSAP ScrollTrigger provides independent fade/slide-up section reveals.
- Reduced-motion preferences disable the animation layer.
- The primary buttons use a shadcn-style Radix Slot + class-variance-authority component, restyled to the Beyond60 palette.

## Automated verification

- `npm run check`: pass
- `npm run build`: pass
- Local HTTP response at `http://localhost:3000`: 200
- Browser DOM verification: 6 sections, 5 amenity cards, 4 room cards, 1 review card, 2 persistent contact actions, 0 video elements
- Full rendered page height at 1440px viewport width: 4,417px
- Screenshot: `artifacts/beyond60-sectioned-homepage.png`

## Deployment

Not pushed and not deployed. This build remains local for review.
