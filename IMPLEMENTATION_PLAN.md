# Boe Ventures Site Polish — Implementation Plan

## Context

Boe Ventures (boe.ventures) is the personal AS / holding company of Kristian Elset Bøe. NOT a consulting agency — a product holding company. Solo founder, no team. Current portfolio: Homi (AI home search), SwipeStats (dating analytics), and soon Promad.life (professional nomad community).

The site uses the Tailwind Plus "Studio" template (Next.js 16, Tailwind CSS v4, MDX, Framer Motion). The landing page and case studies have been customized, but many inner pages still have dummy template content.

## About Kristian

- Norwegian engineer and entrepreneur, splits time Oslo ↔ NYC
- MSc in Artificial Intelligence from NTNU
- Through-line: matching and coordination problems (apartment matching thesis → workplace matchmaking at Scales/Antler → dating data at SwipeStats → home search at Homi)
- Past work: Netlight Consulting, Schibsted/VG, Crux Advisers
- Volunteer: Project Manager for Norwegian Game Awards (Start NTNU), STeLA Forum facilitator at Stanford
- Nova Talent member
- Full-stack: Next.js, TypeScript, tRPC, AI/ML
- Values: ships fast, iterates from evidence, remote-first, freedom through technology
- Contact: kristian@boe.ventures
- LinkedIn: linkedin.com/in/kristianeboe
- GitHub: github.com/kristianeboe

## Image Assets Available

- `src/images/team/kristian.jpg` — headshot (1200x1200 JPEG)
- `src/images/placeholder.svg` — generic placeholder for missing images
- `src/images/laptop.jpg`, `src/images/meeting.jpg`, `src/images/whiteboard.jpg` — stock photos from template (can reuse)
- Old template team photos in `src/images/team/` — DELETE these (fake people)

## Tasks (Priority Order)

### Task 1: Fix About Page ✅
- Rewrote `src/app/about/page.tsx` for Boe Ventures
- Solo founder story with matching-problems through-line (thesis → Homi)
- Uses `kristian.jpg` for the founder photo (only person shown)
- Removed all 12 fake team members
- Replaced "Culture" section with "Approach" (evidence over opinion, remote-first, compounding bets)
- Stats updated: 3 products, 2 countries, ∞ matching problems
- Blog section conditionally rendered (only shows if articles exist)

### Task 2: Fix Contact Page ✅
- Updated `src/app/contact/page.tsx`
- Replaced dummy agency emails with `kristian@boe.ventures`
- Replaced budget radio inputs with a simple textarea ("What's on your mind?")
- Removed "Company" and "Phone" fields — not relevant for a solo founder
- Updated all copy: "Say hello", "Let's talk", "Where I work from", "Find me online"
- Updated metadata description

### Task 3: Fix Process Page ✅
- Updated `src/app/process/page.tsx`
- Replaced all sarcastic template content with Kristian's actual approach
- Sections: Discover → Build → Iterate (renamed "Deliver" to "Iterate")
- Removed fake testimonial (Debra Fiscal / Unseal)
- Replaced "Values" section with "Principles" — evidence over opinion, small surface area, compounding bets, remote by default, ship then polish, own the problem
- Updated metadata: "How I Work" title and Boe Ventures description

### Task 4: Remove Dummy Blog Posts ✅
- Deleted the 3 template blog post directories from `src/app/blog/`
- Updated blog page with Boe Ventures copy ("Writing", "Notes from the build")
- Empty state shows "Writing coming soon" with LinkedIn link
- Blog infrastructure (MDX, loadArticles, wrapper) preserved for future use
- Nav/footer blog links kept — page handles empty state gracefully

### Task 5: Generate BV Favicon ✅
- Created `src/app/icon.tsx` — Next.js App Router ImageResponse, 32×32 dark square with white "BV" text
- Created `src/app/apple-icon.tsx` — 180×180 version for Apple touch icon
- Both use `#0a0a0a` background matching the site's `neutral-950` dark theme
- Build generates `/icon` and `/apple-icon` routes automatically

### Task 6: Clean Up Team Images ✅
- Removed all 12 fake team member photos from `src/images/team/`
- Only `kristian.jpg` remains; it's the only image referenced in the codebase (about page)
- Build passes cleanly

### Task 7: Add Promad.life Case Study ✅
- Created `src/app/work/promad/page.mdx` following existing MDX format
- Promad.life: curated content and community for professional nomads (digital nomads / remote workers)
- Features: destinations, gear, software, community (Slack) — reflected in case study copy
- Used `src/images/laptop.jpg` as placeholder hero image (copied to `src/app/work/promad/hero.jpg`)
- Created compass-icon logomark SVGs in `src/images/clients/promad/` (all 4 variants: logomark-dark, logomark-light, logo-dark, logo-light)
- Added Promad to clients arrays on both homepage (`page.tsx`) and work page (`work/page.tsx`)
- Build passes cleanly, `/work/promad` renders as a static route

### Task 8: SEO & Meta Pass ✅
- Fixed Work page metadata: updated title to "Work", rewrote description, replaced template copy in PageIntro and Clients section heading
- Created `src/app/opengraph-image.tsx` — Next.js ImageResponse OG image (1200×630) with dark background, BV logomark, headline, and tagline
- Added `metadataBase: new URL('https://boe.ventures')` to root layout to resolve OG image URLs correctly (eliminates localhost warning)
- All pages now have proper Boe Ventures metadata; /opengraph-image route generates at build time

### Task 9: Fix Social Links ⬜
- Add LinkedIn icon/link to SocialMedia component (linkedin.com/in/kristianeboe)
- Add X/Twitter if Kristian has one
- Remove Facebook and Dribbble (already partially done)

### Task 10: Final Cleanup ⬜
- Search entire `src/` for remaining "Studio" references and replace
- Search for remaining template company names (Phobia, Family Fund, Unseal, etc.)
- Ensure `npm run build` passes cleanly
- Commit with descriptive message

---

## Validation (run after EVERY change)

```bash
npm run build
```

Build MUST pass. If it doesn't, fix the error before committing.

## Git Convention

After each task, commit with: `task N: <description>`
