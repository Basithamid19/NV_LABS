# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Neuroveda Labs — a high-end, mobile-first DTC eCommerce marketing site for organic Himalayan Shilajit. It is a single-page React app with two "views" (a `home` marketing page and a `shop`/product detail page) toggled in state, not a router. The visual brand is editorial/premium: parchment backgrounds, deep teal accent, generous tracking on uppercase labels, scroll-reveal animations.

The repo was scaffolded from Google AI Studio; some scaffold residue remains (see "Scaffold residue" below).

## Commands

```bash
npm install      # install dependencies
npm run dev      # Vite dev server on http://localhost:3000 (host 0.0.0.0)
npm run build    # production build to dist/
npm run preview  # serve the built dist/ locally
```

There is **no test runner, linter, or formatter** configured. `npm run build` (which runs `vite build`) is the only automated check — run it before pushing to catch TypeScript/import errors. There is no `tsc`-only typecheck script; type errors surface through the Vite build.

## Architecture

- **Entry:** `index.html` → `index.tsx` (mounts `<App/>` in React StrictMode into `#root`) → `App.tsx`.
- **`App.tsx` is the orchestrator.** It owns all top-level state and renders every section. There is no router and no global state library:
  - `view: 'home' | 'shop'` — toggles between the marketing page and `<ProductPage/>`. `navigateTo()` sets view and smooth-scrolls to top.
  - `activeHeroSlide` — lifted up from `<Hero/>` so `<Header/>` can invert its text color over the hero.
  - `isFactsOpen` — controls the `<SupplementFacts/>` modal on the home view.
- **Navigation is prop-drilled.** Components receive `onNavigate`, `onOpenFacts`, `onSlideChange` callbacks rather than reaching into a router/context. Keep this pattern; do not add a router unless explicitly asked.
- **`components/` is flat** — one presentational component per file, each a named export `export const X: React.FC<XProps>`. Static content (slides, bundles, benefits, FAQ items, facts tables) lives in `const` arrays/objects at the top of each component file, then `.map()`ed into JSX. Add/edit content by editing these arrays.
- **Scroll-reveal animation:** `App.tsx` runs a single `IntersectionObserver` that adds the `visible` class to every `.scroll-reveal` element. To make a new home section animate in, wrap it in `<div className="scroll-reveal">`. The observer re-runs on `view` change (see its `[view]` dependency) — preserve this so sections animate after navigating back home.
- **`ProductPage.tsx`** is the most logic-heavy component: bundle/quantity selection (`1|2|3`), purchase type (`one-time | subscribe`), and derived price math (per-day, savings, MSRP strikethrough). Prices live in the `bundles` array; changing pricing means editing that array, not the JSX.
- **`StickyCTA.tsx` is currently unused** (not imported anywhere). Don't assume it's wired up.

## Design System

The design tokens are defined **inline in `index.html`**, not in a Tailwind config file. Tailwind is loaded from the **CDN** (`<script src="https://cdn.tailwindcss.com">`) and configured via the `tailwind.config` object in the same file. There is no `tailwind.config.js`, no PostCSS, and no CSS build step.

To add or change a color, font, or spacing token, edit the `tailwind.config` block in `index.html`. Current tokens:

- **Colors:** `primary` `#0c6658` (teal), `parchment` `#FDFBF7` (page bg), `mutedParchment` `#F5F2EC`, `charcoal` `#1A1A1A` (text). Use opacity suffixes (`text-charcoal/40`, `border-charcoal/5`, `bg-primary/[0.04]`) heavily, as the existing code does.
- **Fonts:** both `font-serif` and `font-sans` map to **Chakra Petch** (loaded via Google Fonts in `index.html`).
- **Spacing:** custom `section-sm` (44px) and `section-md` (56px).
- **Custom CSS** in the `<style>` block: `.scroll-reveal` / `.scroll-reveal.visible` (the reveal transition) and `.no-scrollbar`.

### Styling conventions (match these)

- **All styling is Tailwind utility classes inline in JSX.** No CSS modules, no styled-components, no separate stylesheets beyond `index.html`'s `<style>`.
- Uppercase microcopy uses tight tracking, e.g. `text-[10px] font-bold uppercase tracking-[0.2em]`. Reuse arbitrary values like `tracking-[0.3em]`, `h-[52px]`, `rounded-[32px]` rather than inventing new scales.
- Inline SVGs (heroicons-style, `stroke="currentColor"`) are used for all icons; there is no icon library.
- Mobile-first: base classes target mobile, `md:`/`lg:` add desktop. Always keep components responsive.
- Built-in `animate-in` / `fade-in` / `slide-in-from-*` utilities are used for entrance animations (these come from the Tailwind CDN build).

## Image Handling — Critical

The site deploys to GitHub Pages under a sub-path, so Vite's `base` is set to `/NV_LABS/` in `vite.config.ts`. This affects how local images must be referenced:

- **Local images** live in `public/images/` and **must be referenced with the full base-prefixed absolute path**, e.g. `src="/NV_LABS/images/P1.png"` (see `ProductPage.tsx`). A bare `/images/...` path will 404 on the deployed Pages site. This is the single most common way to break the deployed build — verify the `/NV_LABS/` prefix on any local image path.
- **Decorative/lifestyle images** are loaded directly from Unsplash CDN URLs with `?q=80&w=...&auto=format&fit=crop` query params. Match that pattern for new decorative imagery.
- If `vite.config.ts` `base` ever changes, every `/NV_LABS/...` image path must change with it.

## Deployment

- **GitHub Pages via GitHub Actions** (`.github/workflows/deploy.yml`). It triggers on **push to `main`**, runs `npm install` + `npm run build`, and publishes `dist/`.
- Live URL pattern: `https://basithamid19.github.io/NV_LABS/`.
- **This branch's work pushes to `claude/zealous-keller-JOsOB`, not `main`.** Pushing to the working branch does not deploy; only merges to `main` deploy. Don't push to `main` without explicit permission.

## Performance Requirements

- **Keep entrance/scroll animations on CSS transforms and opacity** (as the existing `.scroll-reveal` and `animate-in` usage does) so they stay GPU-composited and smooth on mobile.
- **One shared `IntersectionObserver`** drives all reveals — don't add a per-component observer or scroll listener where the `.scroll-reveal` class will do. `Header` already uses a throttle-free scroll listener; avoid adding more global scroll handlers.
- **Image weight is the main budget.** Local product PNGs are large; prefer optimized/`.webp` where possible and always size Unsplash images with `w=` to the rendered dimension rather than pulling full-resolution. Use `object-cover` with fixed aspect containers (the existing pattern) to avoid layout shift.
- Tailwind is loaded from CDN at runtime (not tree-shaken at build). Be aware this is a deliberate simplicity trade-off; if asked to optimize for production performance, migrating Tailwind to a build-time dependency is the highest-impact change.

## SEO Requirements

The current `index.html` has only `<title>`, `lang="en"`, and a viewport tag. When touching `index.html` or adding pages/content, improve SEO without breaking the design:

- Maintain a single, descriptive `<title>` and add a `<meta name="description">` reflecting the Shilajit/wellness offering.
- Add Open Graph / Twitter card tags for link previews (DTC product pages rely on shareable previews).
- Preserve **one `<h1>` per view** — `Hero` and `ProductPage` each render the primary `<h1>`; keep heading hierarchy (`h1`→`h2`→`h4`) meaningful and don't duplicate `<h1>`.
- Keep descriptive `alt` text on images (existing components do this) and `aria-label`s on icon-only buttons (e.g. the gallery thumbnails).
- Because this is a client-rendered SPA, content is not pre-rendered; if SEO becomes a hard requirement, that's a structural conversation (SSR/prerender), not a quick tag edit.

## Rules to Avoid Breaking Existing Functionality

1. **Never break the `/NV_LABS/` image prefix** on local images (see Image Handling). Test that images resolve under the base path.
2. **Don't remove or rename the `.scroll-reveal` class or the `#root` id** — the observer and React mount depend on them.
3. **Keep design tokens in `index.html`'s `tailwind.config`.** Don't introduce a `tailwind.config.js` or arbitrary hex colors in components when a token exists; use `primary`, `parchment`, `mutedParchment`, `charcoal`.
4. **Preserve the prop-drilled navigation contract.** Components expect `onNavigate('home'|'shop')`, `onOpenFacts`, `onSlideChange`. Changing these signatures means updating `App.tsx` and every caller.
5. **Keep the `view` state as the single source of truth** for which page renders; don't add a parallel routing mechanism.
6. **Maintain mobile-first responsiveness** — this is explicitly a mobile-first DTC experience.
7. **Components are named exports as `React.FC<Props>`** — match this signature so imports in `App.tsx`/`ProductPage.tsx` keep working.
8. **Run `npm run build` before pushing** — it is the only safety net for type/import errors.

## Scaffold residue (don't rely on it)

- `vite.config.ts` injects `process.env.API_KEY` / `process.env.GEMINI_API_KEY` from `.env.local`, and the README mentions setting `GEMINI_API_KEY`. **No code currently uses these** — they are leftovers from the AI Studio template. Don't document them as required to run the site.
- `metadata.json` (`name`, `description`, `requestFramePermissions`) is AI Studio metadata, not app config.

## Neuroveda Labs Brand Rules

Neuroveda Labs should feel premium, scientific, natural, and trustworthy. The brand should avoid looking like a generic supplement dropshipping store.

Use language that is:
- Calm
- Premium
- Evidence-aware
- Wellness-oriented
- Minimal
- Confident but not exaggerated

Avoid language that sounds:
- Cheap
- Aggressive
- Overhyped
- Bro-science
- Medical or disease-focused

The site should feel closer to a high-end wellness/longevity brand than a discount supplement store.

## Supplement Compliance Rules

Do not write copy that claims Shilajit cures, treats, prevents, or diagnoses any disease or medical condition.

Avoid claims such as:
- Cures anxiety
- Treats depression
- Fixes testosterone
- Heals inflammation
- Prevents disease
- Reverses aging
- Detoxes heavy metals
- Guaranteed results

Prefer softer structure/function language such as:
- Supports energy
- Supports focus
- Supports daily vitality
- Helps maintain overall wellness
- Traditionally used in Ayurvedic wellness
- Supports mineral intake

When creating product copy, include disclaimers where appropriate:
“These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.”

## E-Commerce Launch Rules

The site is currently pre-launch. Do not imply that inventory is already warehoused in the US unless explicitly confirmed.

If adding purchase, preorder, or checkout language, be transparent about availability and shipping timelines.

Avoid fake urgency unless real:
- Do not use “Only 3 left” unless inventory tracking exists.
- Do not use fake countdown timers.
- Do not imply thousands of customers or reviews unless real.

Acceptable pre-launch language:
- Join the early access list
- Reserve your first batch
- Pre-launch batch
- Ships when first batch arrives
- Be first to know when we launch

## Product Image Rules

Product images may be mockups until physical product photography is available.

When using AI-generated or mockup product images:
- Keep them realistic and consistent
- Avoid misleading “real-life” claims
- Use consistent bottle/jar shape, label placement, color, and lighting
- Do not create fake certification badges unless certifications are confirmed
- Do not show lab reports, seals, or official claims unless verified

Local product images should still follow the `/NV_LABS/images/...` path rule.

## Conversion Optimization Rules

Prioritize trust before aggressive selling.

Every major product section should answer one of these:
- What is it?
- Why should I trust it?
- What makes it different?
- How do I use it?
- Is it tested?
- When will I receive it?
- What happens if I’m not satisfied?

Good conversion elements:
- Clear hero value proposition
- Lab testing / purity explanation
- Origin story
- Ingredient transparency
- Usage instructions
- FAQ section
- Founder or brand story
- Email capture
- Clear preorder/launch status

Avoid cluttered sales tactics, excessive popups, flashing banners, or spammy discount language.

## Content Tone Examples

Better:
“Organic Himalayan Shilajit resin designed to support daily energy, focus, and mineral replenishment.”

Avoid:
“Skyrocket testosterone, cure fatigue, and unlock superhuman performance.”

Better:
“Traditionally used in Ayurvedic wellness, our Shilajit is sourced with purity, traceability, and daily ritual in mind.”

Avoid:
“The ultimate ancient miracle supplement doctors don’t want you to know about.”

## Development Priorities

When improving the website, prioritize work in this order:

1. Mobile experience
2. Brand trust and premium feel
3. Product clarity
4. Conversion flow
5. SEO and metadata
6. Performance
7. Animation polish

Do not add complex features before the core product page, trust sections, and launch/preorder flow are clear.

## Future E-Commerce Notes

The current app is a marketing SPA, not a full e-commerce system.

Before real sales, the project may need:
- Shopify, Medusa, WooCommerce, Stripe Checkout, or another commerce backend
- Real checkout flow
- Inventory status
- Shipping policy
- Refund policy
- Terms of service
- Privacy policy
- FDA disclaimer
- Email capture integration
- Analytics and ad pixels

Do not build fake checkout logic inside React unless explicitly requested. Prefer linking to or integrating with a real commerce system when ready.
