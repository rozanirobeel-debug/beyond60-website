# Beyond60 Website Prototype

Lead-generation website prototype for Beyond60 Seniors Care (Manor, Palghar). Built on the Obsidian Web Stack (Next.js + Motion + Three.js foundation).

**Status: prototype only. Not connected to the live domain. Do not treat as production.**

## What this is

- Real content: packages/pricing from `packages.txt` (2026-07-29), real contact details verified against the live site, real photos of residents/the residence.
- Cinematic motion system (scroll-linked reveals, magnetic buttons, scene transitions) restyled to Beyond60's actual brand colors (forest green + gold, pulled from the real logo/site CSS).
- Primary conversions: phone call and WhatsApp. Secondary: facility visit.

## What this is not

- Not fabricated: no invented reviews, staff credentials, occupancy numbers, or years-of-operation claims. Anything not verified was left out rather than guessed.
- Not a replacement for the live site. No production/DNS change happens without explicit approval.

## Start locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Known open items before this could go live

- Confirm packages.txt pricing (dated Sept 2024) is still current in 2026.
- Confirm the WhatsApp number — used the live site's published phone number since `packages.txt` listed a different one.
- Real testimonials/staff credentials/certifications are not yet included — none exist in verified form yet.
- No analytics/tracking wired up yet.
