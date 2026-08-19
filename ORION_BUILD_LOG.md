# Orion build log

## 2026-08-19 — Expanded nine-section rebuild

- Replaced the compact homepage with the approved nine-section narrative.
- Added page-wide Lenis scrolling and GSAP ScrollTrigger reveals/parallax.
- Added optimized amenity/gallery media, desktop location video and mobile poster fallback.
- Added seven specialized-care cards, six amenity stories, eight real reviews with full rating distribution, four room tiers, four admission steps, FAQ and final CTA.
- Added `/gallery`, a custom not-found page, responsive navigation, persistent call/WhatsApp controls, metadata/favicon, contact links and automatic footer year.
- FAQ wording is drafted and still requires Robeel's editorial approval.
- Verification: `npm run check` and `npm run build` pass; desktop/mobile browser QA passes with no horizontal overflow.
- Review screenshots: `artifacts/rebuild-hero.png`, `rebuild-drone.png`, `rebuild-specialized-care.png`, `rebuild-amenities.png`, `rebuild-reviews.png`.
- No deploy or push performed.

## 2026-08-19 — Consolidated interaction draft for markup

- Replaced Location and Scenic video `currentTime` scroll seeking with normally playing, non-looping video plus scroll-linked GSAP scale/translate transforms. Each shot settles to a 1:1 resting transform, and the existing final-frame image carries that state into the following backdrop section.
- Added reusable botanical-bloom act breaks at Opening→Hero, Hero→Location, Location→Specialized Care, Specialized Care→Scenic, Scenic→Amenities and Amenities→Reviews. Branch strokes draw outward, leaves emerge, and a warm-gold glow follows before the transition recedes.
- Reworked Amenities into an asymmetric editorial collage with six differently sized/offset photo tiles. Every tile retains its title; the two feature tiles also retain the longer description.
- Kept Rooms→Admissions and Admissions→Final CTA quieter so the signature bloom remains an act-break device rather than appearing at every minor boundary.
- Verification: `npm run check` and `npm run build` pass.
- Review screenshots: `artifacts/orion-bloom-hero-location.png`, `orion-bloom-amenities-reviews.png`, `orion-location-panzoom-{early,mid,late}.png`, `orion-scenic-panzoom-{early,mid,late}.png`, `orion-amenities-collage.png`.
- Draft only for Robeel's markup; no deploy or push performed.
