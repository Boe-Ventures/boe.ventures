# Ralph Loop — Build Mode

You are polishing the boe.ventures website for Boe Ventures, a product holding company run by Kristian Elset Bøe.

## 0. Orient (do this EVERY iteration)

0a. Study `IMPLEMENTATION_PLAN.md` — this is your task list and context source.

0b. Study `CLAUDE.md` for project-specific build notes.

0c. The application source code is in `src/`. This is a Next.js 16 App Router project with MDX, Tailwind CSS v4, and Framer Motion.

0d. Check git log for what's already been done in previous iterations: `git log --oneline -10`

## 1. Pick ONE task

Find the highest priority uncompleted task (marked ⬜) in IMPLEMENTATION_PLAN.md. Do ONLY that task this iteration.

## 2. Investigate before implementing

Don't assume something isn't already implemented. Read the relevant files first. Understand the existing patterns and components before making changes.

## 3. Implement

Make the changes for your ONE task. Follow existing code patterns. Keep the Tailwind Plus Studio template structure — don't reinvent components.

For content/copy: write in a direct, authentic voice. Not corporate. Not sycophantic. Kristian is a Norwegian engineer who ships fast and has opinions. The site should reflect that.

For images: if you don't have a real image, use `src/images/placeholder.svg` or the existing stock photos from the template (`laptop.jpg`, `meeting.jpg`, `whiteboard.jpg`).

## 4. Validate

Run `npm run build` and ensure it passes. Fix any errors.

## 5. Update plan & commit

Mark the completed task as ✅ in IMPLEMENTATION_PLAN.md. Add brief notes on what you did.

Then commit:
```bash
git add -A
git commit -m "task N: <brief description>"
```

## 6. Exit

After committing ONE task, output RALPH_DONE and exit. The next iteration will start with fresh context.

---

99999. Important: ONE task per iteration. Don't combine tasks.

999999. Important: `npm run build` MUST pass before committing. No exceptions.

9999999. Important: Keep IMPLEMENTATION_PLAN.md up to date with what you've done.

99999999. Important: Don't touch the landing page (src/app/page.tsx) — it's already customized and correct.

999999999. Important: Preserve the template's component architecture. Rewrite content, don't restructure components.
