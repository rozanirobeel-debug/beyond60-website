# Website Brief

## Business
- Business name: Beyond 60 Seniors Care (Beyond60 Senior's Care Foundation)
- Market and location: Premium senior/assisted living residence near Manor, Palghar, Maharashtra — roughly 60 km from Borivali, serving Mumbai-area families.
- Primary audience: NRIs, entrepreneurs and working adult children who cannot personally provide daily care for an aging parent and are willing to pay a premium for quality, trustworthy care. Decision-maker is usually an adult child, spouse or guardian, not the senior themselves.
- Primary offer: Three priced care categories — Self Independent, Semi Dependent, and Bedridden/Dementia Care — covering food, accommodation, housekeeping, laundry, amenities, and (at higher tiers) daily monitoring, medicine support and full caretaker assistance.
- Primary conversion action: Call or WhatsApp the admissions team, leading to a booked appointment/visit and in-person counselling at the residence.
- Qualified lead definition (per CLIENT_READY_REPORT.md): a decision-maker or strong influencer (adult child, NRI family member, spouse, guardian) with a care need Beyond60 can serve, comfortable with the Manor/Palghar location, price fit for the relevant package, a decision timeline of now-to-90-days, a valid phone/WhatsApp contact, and agreement on a clear next step (visit, counselling call, package discussion, or follow-up date).

## Strategy
- Business bottleneck this website must address: Not demand generation — the audit's main finding is that Beyond60 needs a system that captures, qualifies, and follows up with leads properly before spending on ads. The website's job is to make the existing offer easier to trust, easier to inquire about, and easier to qualify, not to invent a new business angle.
- Customer questions and objections: Will my parent be safe and looked after 24/7? Is the staff qualified and present around the clock? What exactly is included at each price point, and are there hidden costs? Is the location too far / inconvenient to visit often? Can we see it in person before committing? What happens after admission — are we kept informed?
- Proof available: Real drone and ground photography of the residence, pool, courtyard and residents (consent confirmed by Robeel — faces are not blurred/cropped, this is intentional); public testimonial themes on the operator's own site (compassion, staff care, meals, activities, safety — no verbatim quotes captured/verified, so none are fabricated on this site); verified package pricing and inclusions (PACKAGE_DATA_2026-07-29.md); the operator's own stated conversion journey (book appointment → in-person counselling → weekly follow-up).
- Required integrations: None yet. Lead-definition and inquiry-tracking (backlog B60-001/B60-002) are explicitly out of scope for this build — the site only exposes analytics event hooks as placeholders for that future system.
- Analytics events that matter: `qualified_lead_started` (any call/WhatsApp/visit-intent action), `call_clicked` (tel: link used), `visit_booked` (visit/appointment CTA used). Currently wired as console-only stubs in `lib/analytics.ts` — no tracking backend exists yet.

## Art Direction
- Desired emotional response: Calm, trustworthy, premium — reassurance for a family making a high-stakes, emotional decision. Not clinical/cold, not salesy.
- Approved accent colour: Forest green + gold, pulled directly from the real Beyond60 logo and signage (see `public/images/logo.png`).
- Reference links: Obsidian Web Stack default cinematic direction (motion-first, one continuous scroll-linked background, masked text reveals, magnetic CTAs); reel-inspiration log 2026-08-04 reviewed, nothing contradicts the existing Next + Motion stack choice.
- Motion intensity: cinematic, with full reduced-motion fallback (verified via `prefers-reduced-motion`).
- 3D justification: None. 3D/R3F was evaluated and dropped for this build — real photography of the actual residence and residents earns more trust than an abstract WebGL object for a senior-care audience, and it avoids the extra performance/complexity cost. `@react-three/fiber`/`three` remain listed as optional stack dependencies but are unused here.

## Constraints
- Launch date: Not set. This is a prototype pass for Robeel/Lorenzo review — not connected to the live domain, no DNS/production change without explicit approval.
- Content owner: Robeel (client-side), reviewed through Lorenzo before anything goes live.
- Accessibility needs: Keyboard navigation and visible focus states on all interactive elements; reduced-motion mode must remain fully understandable; mobile layout is a deliberate single-column reflow, not just a squeeze.
- Performance exceptions: None requested. Images are plain `<img>` with `loading="lazy"` and explicit width/height (Next's static export uses `images.unoptimized: true` for GitHub Pages compatibility, so there is no server-side image optimization — file sizes were kept small at source).
- Legal/privacy requirements: Resident faces are shown with Robeel's explicit confirmation. No testimonial quotes, staff credentials, occupancy figures, or years-of-operation claims are fabricated — anything not verified was left out (see QA_REVIEW.md note on consent for testimonials/photos before any future reuse).
