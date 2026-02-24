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

### Task 1: Fix About Page ⬜
- Rewrite `src/app/about/page.tsx` for Boe Ventures
- Solo founder story, not "three friends started a studio"
- Use Kristian's through-line: matching problems from thesis to Homi
- Use `kristian.jpg` for the founder photo
- Remove fake team members (Angela Fisher, Benjamin Russel, etc.)
- Keep the page structure/components but rewrite all content
- Remove or simplify the "Culture" / "Team" sections for a solo operation

### Task 2: Fix Contact Page ⬜
- Update `src/app/contact/page.tsx`
- Replace `careers@studioagency.com` and `press@studioagency.com` with `kristian@boe.ventures`
- Update any contact copy to be personal (not corporate)
- Keep the form structure but make it feel right for a solo founder

### Task 3: Fix Process Page ⬜
- Update `src/app/process/page.tsx`
- Replace generic agency process with Kristian's actual approach
- Discover → Research → Build → Iterate
- Reference real methodology: evidence-driven, ship fast, iterate
- Remove "Studio" references and fake testimonials

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
