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

## 2026-08-19 — Literal drone scrubbing and botanical-layer correction

- Restored literal desktop scroll-to-`currentTime` control for both drone clips, using the newly available `-hd.mp4` variants. Location uses a pinned `120%` viewport range and Scenic uses `130%`; both videos stay paused, have no autoplay, and move only as ScrollTrigger progress changes.
- Tied the Location copy to the same scroll/video progress: hidden through 45%, interpolated from 45–78%, then fully visible. Scenic has no copy overlay. Mobile continues to use the final-frame images with the video elements hidden.
- Put page sections/content above the botanical layers (`section` z-index 2, transitions z-index 1, in-section motifs z-index -1). Changed blooms into dedicated, clipped act-break bands so their large scale appears only between content sections and cannot cross photos, text, cards or buttons.
- Measured proof at 1440×900: Location 20/60/90% = 3.111/9.332/13.998s of 15.553s; Scenic 20/60/90% = 3.510/10.531/15.796s of 17.551s. Every sample stayed paused with 0.0000s drift after 800ms stopped. Location copy opacity at those points = 0/0.455/1.
- Proof: `artifacts/orion-location-scrub-{early,mid,late}.png`, `orion-scenic-scrub-{early,mid,late}.png`, `orion-content-above-botanical.png`, `orion-bloom-transition-dominant.png`, `orion-mobile-location-fallback.png`, and `orion-scroll-scrub-proof.json`.
- Verification: `npm run check` and `npm run build` pass. No deploy or push performed.

## 2026-08-19 — Pinned editorial care and amenities sequences

- Rebuilt Specialized Care and Amenities as full-screen pinned editorial canvases based on the approved Son Daven reference: varied cards enter from alternating edges, overlap briefly, hold while scrolling pauses, and exit before the next card arrives.
- Specialized Care now uses seven accurate premium text-and-icon cards over the frozen pool frame; Amenities uses six real Beyond60 photographs over the frozen overhead frame. Both end with a final reassurance statement.
- Kept the property image at z-index 0, the subtle botanical atmosphere at 2, and all readable content/cards at 3+, preserving the corrected background/content layering.
- Added responsive mobile choreography, reduced-motion static layouts, stable pin measurements, and a dedicated browser regression script.
- Final QA: HD Location video measured 2.175 / 7.777 / 13.379 seconds at 14 / 50 / 86% scroll and stayed paused; desktop and mobile had zero page errors and zero horizontal overflow; every sampled editorial stage showed the correct layer order and active card. Mobile retains the approved static final-frame fallback.
- Proof: `artifacts/final-editorial-{desktop,mobile}-{care,amenities}.png` and `artifacts/final-editorial-qa.json`.
- Verification: `npm run check`, `npm run build`, and `node qa-editorial-final.mjs` pass. No deploy or push performed.
