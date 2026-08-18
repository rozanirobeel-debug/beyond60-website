# Beyond60 Website Prototype

Lead-generation website prototype for Beyond60 Seniors Care (Manor, Palghar). Built on the Obsidian Web Stack (Next.js + Motion foundation).

**Status: prototype only. Not connected to the live domain. Do not treat as production.**

## What this is

- Real content, sourced from the 2026-07-28 Beyond60 growth audit (`CLIENT_READY_REPORT.md`, `PUBLIC_RESEARCH*.md`, `INTAKE_SUMMARY.md`, `LEAD_SYSTEM_SUMMARY.md`, `PACKAGE_DATA_2026-07-29.md`) plus verified public-site contact details.
- Real photography: the drone shortlist provides the exterior hero, while the enhanced ground-photo set provides the five amenity cards and four room-option cards. Resident faces are shown deliberately, per Robeel's explicit confirmation — not blurred or cropped.
- Conversion path matches the operator's own stated journey: call/WhatsApp → book an appointment → in-person counselling → weekly follow-up — not a generic contact form.
- A concise six-section layout replaces the earlier continuous camera/scroll-story concept. Lenis smooth scrolling and GSAP ScrollTrigger now support independent section reveals; there is no scroll-scrubbed camera path.
- Reusable shadcn-style button primitives are built with Radix Slot and class-variance-authority, then restyled to Beyond60's warm ivory, sage, forest green and gold palette.
- Analytics event hooks (`qualified_lead_started`, `call_clicked`, `visit_booked`) are wired as console-only stubs in `lib/analytics.ts`, so the site won't need a rebuild once the lead tracker (backlog B60-001/B60-002) lands. No tracking backend exists yet — that's explicitly out of scope for this pass.

## What this is not

- Not fabricated: no invented reviews, staff credentials, occupancy numbers, or years-of-operation claims. Anything not verified was left out rather than guessed.
- Not a lead-capture/tracking system. That backend (qualified-lead definition + inquiry tracker, B60-001/B60-002) is a separate, later build.
- Not a replacement for the live site. No production/DNS change happens without explicit approval.

## Start locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000` (or whichever port the dev server reports if 3000 is already in use).

## Quality gates

See `docs/qa-report-2026-08-19-sectioned-rebuild.md` for the current pass and rendered screenshot evidence.

## Known open items before this could go live

- Get a real Lighthouse pass on both mobile and desktop before external sharing.
- Confirm whether the 8 drone-shortlist frames should be re-extracted at higher resolution or replaced with an edited video cut for final client-facing use (per `MEDIA_SHORTLIST.md` caveat — these are single frames from a moving drone shot).
- Confirm final consent and display policy for the selected public Google review excerpts before production use.
- No lead-tracking backend yet — analytics events are stubs only.
- Push to `origin`/GitHub Pages deployment was intentionally not done as part of this pass — needs explicit approval first.
