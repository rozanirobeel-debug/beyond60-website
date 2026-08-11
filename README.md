# Beyond60 Website Prototype

Lead-generation website prototype for Beyond60 Seniors Care (Manor, Palghar). Built on the Obsidian Web Stack (Next.js + Motion foundation).

**Status: prototype only. Not connected to the live domain. Do not treat as production.**

## What this is

- Real content, sourced from the 2026-07-28 Beyond60 growth audit (`CLIENT_READY_REPORT.md`, `PUBLIC_RESEARCH*.md`, `INTAKE_SUMMARY.md`, `LEAD_SYSTEM_SUMMARY.md`, `PACKAGE_DATA_2026-07-29.md`) plus verified public-site contact details.
- Real photography: the 8-frame drone shortlist (`MEDIA_SHORTLIST.md`) for hero/social-proof/trust sections, plus existing high-resolution ground photos for the residence gallery. Resident faces are shown deliberately, per Robeel's explicit confirmation — not blurred or cropped.
- Conversion path matches the operator's own stated journey: call/WhatsApp → book an appointment → in-person counselling → weekly follow-up — not a generic contact form.
- Cinematic motion system (scroll-linked reveals, magnetic buttons, scene transitions) restyled to Beyond60's actual brand colors (forest green + gold, pulled from the real logo). 3D/R3F was evaluated and deliberately dropped for this build — real photography earns more trust than an abstract WebGL object for this audience.
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

See `docs/qa-report-2026-08-12.md` for the pass against `docs/quality-gates.md`. One open item: Lighthouse/live-screenshot verification needs a browser-capable environment — it wasn't available in the session this pass was built in.

## Known open items before this could go live

- Get a real Lighthouse (mobile + desktop) pass and live screenshots — not possible in the environment this update was built in.
- Confirm whether the 8 drone-shortlist frames should be re-extracted at higher resolution or replaced with an edited video cut for final client-facing use (per `MEDIA_SHORTLIST.md` caveat — these are single frames from a moving drone shot).
- Real testimonials/staff credentials/certifications are still not included — none exist in verified, reusable form yet (see `QA_REVIEW.md` on consent).
- No lead-tracking backend yet — analytics events are stubs only.
- Push to `origin`/GitHub Pages deployment was intentionally not done as part of this pass — needs explicit approval first.
