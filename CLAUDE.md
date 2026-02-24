# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Studio is a Tailwind Plus agency/portfolio website template built with Next.js 16 (App Router), Tailwind CSS v4, and MDX for content. It uses webpack (not Turbopack).

## Commands

```bash
npm run dev     # Start dev server (uses --webpack flag)
npm run build   # Production build (uses --webpack flag)
npm run lint    # ESLint
```

No test suite is included.

## Architecture

### Content via MDX

Content for blog articles and case studies lives as `page.mdx` files:
- `src/app/blog/[article]/page.mdx` — blog articles
- `src/app/work/[caseStudy]/page.mdx` — case studies

Each MDX file exports a metadata object (`article` or `caseStudy`) as a named export. The `remarkMDXLayout` plugin in `next.config.mjs` automatically injects the wrapper layout component — blog files get `@/app/blog/wrapper` and work files get `@/app/work/wrapper`. **Do not manually add layout imports in MDX files.**

Content is discovered at build time via `fast-glob` in `src/lib/mdx.ts` using `loadArticles()` and `loadCaseStudies()`.

### Key MDX Metadata Shapes

```ts
// Blog article
export const article = {
  date: 'YYYY-MM-DD',
  title: string,
  description: string,
  author: { name: string, role: string, image: { src: ImportedImage } }
}

// Case study
export const caseStudy = {
  date: 'YYYY-MM',
  client: string,
  title: string,
  description: string,
  summary: string[],
  logo: ImportedImage,
  image: { src: ImportedImage, ... },
  service: string,
  testimonial: { author: { name: string, role: string }, content: string }
}
```

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` — configuration lives in CSS (`src/styles/tailwind.css`) not a JS config file.
- Custom fonts (Mona Sans variable font) declared in `src/styles/base.css`.
- Typography styles for MDX content in `src/styles/typography.css`, applied via the `Typography` wrapper component injected by the `remarkRehypeWrap` rehype plugin.
- Prettier sorts Tailwind classes; it references a custom stylesheet in its config (`prettier.config.js`).

### Animation

Heavy use of Framer Motion:
- `FadeIn` / `FadeInStagger` — scroll-triggered fade-ins with context-based stagger. `FadeInStagger` is a client component that wraps server-rendered children.
- `GrayscaleTransitionImage` — grayscale-to-color image transition driven by scroll position.
- `RootLayout` (client component) — manages mobile nav open/close state and wraps the whole app in `MotionConfig` respecting `prefers-reduced-motion`.

### Path Alias

`@/*` maps to `./src/*`.

### Webpack Note

The project explicitly uses `--webpack` in both `dev` and `build` scripts. Do not switch to Turbopack without testing MDX plugin compatibility.
