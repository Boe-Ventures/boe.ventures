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

### Task 4: Remove Dummy Blog Posts ⬜
- Delete the 3 template blog posts in `src/app/blog/`
- Either: leave blog empty with a "Coming soon" message, or remove the blog link from nav/footer
- Keep the blog infrastructure (MDX setup) for future use

### Task 5: Generate BV Favicon ⬜
- Create favicon from the BV monogram (black square, white BV text)
- Replace `src/app/favicon.ico` with new one
- Also create `apple-icon.png` if the template supports it

### Task 6: Clean Up Team Images ⬜
- Remove all fake team member photos from `src/images/team/` EXCEPT `kristian.jpg`
- Update any references to removed images

### Task 7: Add Promad.life Case Study ⬜
- Create `src/app/work/promad/page.mdx` following existing format
- Promad.life: curated content and community for professional nomads (digital nomads / remote workers)
- Features: destinations, gear, software, community (Slack)
- Use placeholder.svg for hero image
- Create logomark SVG (simple icon for Promad)
- Add to clients array on homepage and work page

### Task 8: SEO & Meta Pass ⬜
- Ensure all pages have proper metadata exports
- Update descriptions to be Boe Ventures specific
- Add og:image if possible (can use placeholder for now)

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
