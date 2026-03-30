# Client Onboarding Dashboard — AI Assistant Guide

@PROMPT.md

## Project Overview

This is a **client onboarding dashboard** — a high-end, interactive project proposal page built with Next.js. It is designed as a template that gets customized per-client via a guided 9-step intake flow (see PROMPT.md for full details).

The dashboard features a dark immersive design with grid textures, corner bracket frames, 3D tilt cards, parallax images, animated counters, and scroll-triggered animations.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss` plugin)
- **Animations:** Framer Motion
- **Fonts:** Inter (sans), Playfair Display (serif), Geist Mono (mono) — loaded via `next/font/google`
- **Deployment target:** Vercel

## Repository Structure

```
├── PROMPT.md                    # 9-step guided setup instructions (繁體中文)
├── CLAUDE.md                    # This file — AI assistant rules
├── AGENTS.md                    # Next.js agent rules + Vercel best practices
├── README.md                    # User-facing quick start
├── package.json                 # Dependencies & scripts
├── next.config.ts               # Next.js config (minimal)
├── tsconfig.json                # TypeScript config (strict, bundler resolution)
├── eslint.config.mjs            # ESLint with next/core-web-vitals + typescript
├── postcss.config.mjs           # PostCSS with Tailwind v4 plugin
├── public/                      # Static assets (logos, SVGs)
└── src/
    ├── app/
    │   ├── globals.css          # ✏️ EDITABLE — theme variables & utility classes
    │   ├── layout.tsx           # Root layout (fonts, metadata, lang="zh-TW")
    │   ├── page.tsx             # Main page — composes all section components
    │   └── favicon.ico
    ├── components/              # 🔒 DO NOT MODIFY
    │   ├── Navigation.tsx       # Fixed top nav with section links
    │   ├── Hero.tsx             # Hero section with project intro
    │   ├── WelcomeModal.tsx     # Welcome overlay on first visit
    │   ├── Overview.tsx         # Project summary & objectives
    │   ├── Timeline.tsx         # Phase timeline with tasks
    │   ├── Deliverables.tsx     # Deliverable categories & items
    │   ├── Scope.tsx            # Included/excluded items
    │   ├── Investment.tsx       # Pricing, discounts, payment schedule
    │   ├── NextSteps.tsx        # CTA + next steps flow
    │   ├── Footer.tsx           # Page footer
    │   ├── ImageBreak.tsx       # Full-width parallax image divider
    │   ├── ParallaxImage.tsx    # Parallax scroll effect wrapper
    │   ├── CursorGlow.tsx       # Cursor-following glow effect
    │   ├── ScrollReveal.tsx     # Scroll-triggered reveal animation
    │   ├── SectionLabel.tsx     # Section header label component
    │   ├── TiltCard.tsx         # 3D tilt card interaction
    │   └── AnimatedCounter.tsx  # Number counter animation
    └── lib/
        └── project-data.ts      # ✏️ EDITABLE — all project content data
```

## Key Rules

1. **Only edit two files:**
   - `src/lib/project-data.ts` — all content/data
   - `src/app/globals.css` — brand accent color on lines 8-9 only
2. **NEVER modify component files** in `src/components/`
3. **Use Traditional Chinese (繁體中文)** for all communication with the user
4. **Follow the 9-step intake flow** defined in PROMPT.md
5. **When a user opens this project, automatically start the guided setup** with the welcome message from PROMPT.md

## Data File: `src/lib/project-data.ts`

Exports a single `PROJECT` object consumed by all components. Structure:

| Key | Description | Constraints |
|-----|-------------|-------------|
| `accentColor` | Brand HEX color | Must match `--color-accent` in globals.css |
| `client` | Client info (name, logo, contact, industry) | Logo path relative to `public/` |
| `studio` | Studio/agency info (name, role, email) | — |
| `project` | Project metadata (name, tagline, type, dates) | `status` must use `as const` |
| `overview` | Summary + objectives | **Exactly 4 objectives** |
| `timeline` | Array of phases | Each `status` must use `"upcoming" as const` |
| `deliverables` | Categorized deliverable items | **Exactly 4 categories**, 3-4 items each |
| `scope` | Included (6-9) and excluded (5-7) items | — |
| `quote` | Pricing, discounts, payment schedule | `subtotal` = sum of lineItems prices; `total` = subtotal - discount; integers only |
| `nextSteps` | Ordered next steps | **Exactly 5 steps** |
| `cta` | Call-to-action section | headline, body, buttonText, email |
| `images` | 6 image URLs | Keys: hero1, hero2, product, editorial, texture, brutalist |

### Technical Requirements

- `project.status` → `"等待確認" as const`
- `timeline[].status` → `"upcoming" as const`
- All prices are integers (no decimals)
- Images: use Unsplash URLs with `?w=1200&q=80` or local `/filename.png`

## Styling: `src/app/globals.css`

Uses Tailwind CSS v4 `@theme inline` block for CSS custom properties. Key variables:

- `--color-accent` / `--color-accent-dim` (lines 8-9) — brand color; dim = same hex + `10` suffix for 10% opacity
- `--color-bg` / `--color-bg-card` / `--color-bg-elevated` — dark background palette
- `--color-gold` / `--color-gold-dim` — luxury gold accent
- `--color-text-primary` / `--color-text-secondary` / `--color-text-muted` — text hierarchy
- `--color-border` / `--color-border-hover` — border colors

Utility CSS classes: `.grid-texture`, `.noise`, `.frame`, `.frame-full`, `.card`, `.section-divider`, `.gradient-text`, `.gold-shimmer`, `.glass-card`, `.luxury-divider`

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Deployment

Push to GitHub and connect to Vercel, or run `npx vercel` for manual deploy.

## Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json). All imports use this alias.
