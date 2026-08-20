# AGRIVISION AI — agrivisionai.org

The corporate website for **AGRIVISION AI** (legal entity *Agrivisionai Inc*), a Detroit,
Michigan company building AI-first tools for global agriculture.

Its flagship product, **YieldAI Global**, is live in India, the USA and Canada at
[yieldaiglobal.com](https://yieldaiglobal.com). This repository is the company/marketing site,
not the product itself.

- **Live:** https://agrivisionai.org
- **Hosting:** Vercel (production alias on `agrivisionai.org`)
- **Founder:** Vijesh Reddy Golamari — Founder, CEO & AI Architect

---

## Table of contents

- [Stack](#stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Routes](#routes)
- [Page composition](#page-composition)
- [Sections](#sections)
- [Content data files](#content-data-files)
- [The honesty policy](#the-honesty-policy)
- [SEO & structured data](#seo--structured-data)
- [Analytics](#analytics)
- [Brand assets](#brand-assets)
- [Design system](#design-system)
- [Deploying](#deploying)
- [Company facts](#company-facts-reference)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.3 (App Router, Turbopack) |
| Language | TypeScript 5.5 |
| UI | React 19.2 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 12.43 |
| Icons | lucide-react |
| Linting | ESLint 9 (flat config, eslint-config-next) |
| Hosting | Vercel |

Fully static: every route is prerendered at build time (SSG). There is no backend, no database
and no API routes in this repo.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also the pre-deploy check)
npm start        # serve the production build locally
```

Node 20.9+ required (the Next.js 16 engine constraint). There are **no environment
variables** — analytics IDs are inlined in `app/layout.tsx`, and nothing here needs secrets.

---

## Project structure

```
app/
  layout.tsx            Root layout: metadata, JSON-LD schema, GA4 + Clarity
  page.tsx              Homepage composition
  globals.css           Tailwind layers + design-system utilities
  sitemap.ts            Sitemap (derives blog/product URLs from data files)
  robots.ts             robots.txt
  image-sitemap.xml/    Image sitemap route handler
  opengraph-image.png   Social preview images (OG + Twitter)
  about|careers|contact|faq|founder|press|links|privacy|terms/
  blog/                 Index + [slug] + blog-data.ts
  products/             Index + [slug] + products-data.ts

components/
  Nav.tsx               Fixed header, mobile menu
  Footer.tsx            CTA band, link columns, socials
  Logo.tsx              Wordmark
  Tilt.tsx              Mouse-parallax 3D tilt wrapper
  BuildNotesCard.tsx    LinkedIn newsletter card (homepage + blog index)
  primitives.tsx        Reveal, SectionEyebrow, CountUp, GradientOrb
  sections/             One file per page section (see below)

public/
  logo.png              Horizontal wordmark (2069×760)
  logo-square.png       Square mark (512)
  logo-1024.png         Square mark (1024)
  founder.jpg           Founder portrait
  team/                 Leadership headshots
  press/                Press-kit logo downloads
  buildvaillant-logo.jpg
  llms.txt              AI-crawler summary of the company (AI-SEO)
```

---

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/about` | Company, purpose, team, sustainability |
| `/products` | Product family index |
| `/products/[slug]` | `yieldai-global`, `cropvision`, `fieldsense`, `fieldops` |
| `/founder` | Full founder profile (ProfilePage schema) |
| `/blog` | Blog index |
| `/blog/[slug]` | 16 posts — 10 English, 6 Hindi |
| `/careers` | Open roles + how to apply |
| `/contact` | Contact routes and form |
| `/faq` | FAQ (also emits FAQPage schema) |
| `/press` | Press kit, fact sheet, press release, downloads |
| `/links` | Link-in-bio page for social profiles |
| `/privacy`, `/terms` | Legal |

All routes are listed in `app/sitemap.ts`; blog and product URLs are derived automatically from
their data files, so adding an entry there adds it to the sitemap.

---

## Page composition

**Homepage** (`app/page.tsx`)

```
Nav → Hero → TechStack → Products → Platform → FarmerExperience → Grounding → Capabilities
    → BuildNotesCard → Footer
```

**About** (`app/about/page.tsx`)

```
Nav → About → Purpose → Team → Sustainability → Footer
```

Other pages compose `Nav` + one or two sections + `Footer`.

---

## Sections

Each file in `components/sections/` is self-contained: its data array sits at the top of the
file, the component below it. To change copy, edit the array — not the JSX.

### In use

| Section | Where | What it does |
|---|---|---|
| `Hero` | home | Headline, live status, primary CTA, animated farm scene |
| `TechStack` | home | Technology strip |
| `Products` | home | YieldAI flagship card, module grid, BuildVaillant venture card |
| `Platform` | home | The 17 YieldAI modules in 4 themed groups + facts bar |
| `FarmerExperience` | home | Four farmer moments + phone preview |
| `Grounding` | home | Where the AI's answers come from + the safety rule |
| `Capabilities` | home | Capability cards + build lifecycle |
| `About` | /about | Company overview, focus areas, timeline, stats |
| `Purpose` | /about | Mission, vision, motto cards + the YieldAI app banner |
| `Team` | /about | Founder profile + leadership cards |
| `Sustainability` | /about | Low-pesticide projections (labelled as models) |
| `FarmerWorking` | via Hero | Animated tractor/field scene |
| `FAQ` | /faq | Q&A + FAQPage JSON-LD |
| `Careers`, `Contact` | /careers, /contact | Roles, contact routes and form |

### Not currently mounted

None. `Dashboard.tsx`, `FieldScene.tsx` and `Services.tsx` were cut when the homepage was
shortened and have now been deleted — every component in `components/` renders on some page.
Two of them had also drifted out of date, still labelling shipped capabilities as roadmap.

---

## Content data files

Long-form content lives in typed data files, separate from presentation:

| File | Contains |
|---|---|
| `app/blog/blog-data.ts` | All 16 posts (title, meta, `lang`, `altSlug`, date, sections, tags). Exports `postSlugs` for the sitemap. |
| `app/products/products-data.ts` | The 4 products: status, hero copy, overview, capabilities, audience, roadmap, FAQ, SEO meta. A product with a `liveUrl` renders a "Start Free Trial" CTA; without one it renders "Request early access". |
| `app/press/press-data.ts` | Boilerplate, fact sheet, key facts, quotes, press release, media contact. |

Adding a blog post or product = adding one object to the relevant array. Routing, the sitemap
and the page render follow automatically.

---

## The honesty policy

**This is the most important convention in the repo.** The site is written by an early-stage,
founder-led company building in public, and it deliberately does not overclaim. When editing
copy, keep to these rules:

1. **No invented metrics.** No user counts, revenue figures, accuracy percentages or growth
   numbers unless they are real and verifiable. Projections and models are labelled as such —
   see `Sustainability`, which marks every figure "projected" or "modelled".
2. **No fake social proof.** No customer logos, testimonials or "trusted by" claims until true.
3. **Live vs planned is explicit.** YieldAI Global and CropVision are marked **Live**; FieldSense
   and FieldOps are marked **Planned (roadmap)**. Never blur the two.
4. **The safety rule is product-critical.** Anything approaching chemical or dosage advice must
   route the farmer to a local agriculture extension officer / Krishi Vigyan Kendra. It appears
   in `Grounding`, on the CropVision page, and throughout the blog. Do not soften it.
5. **Brand disambiguation.** Several unrelated organisations share the "AgriVision" name. Copy
   and schema state that this is *Agrivisionai Inc*, Detroit, founded 2026 by Vijesh Reddy
   Golamari, and not affiliated with any similarly named project.
6. **Historical posts stay as written.** The founder essay is pre-launch and carries a dated
   update note at the top rather than being rewritten.

---

## SEO & structured data

- **Per-page metadata** via the App Router `metadata` export: title, description, canonical,
  OpenGraph and Twitter cards.
- **JSON-LD** in `app/layout.tsx`: `Organization`, `WebSite`, `Person` (founder),
  `SoftwareApplication` (per product), `ItemList`, `ContactPoint`, `Place`.
  `FAQ` emits `FAQPage`; blog posts emit `BlogPosting` + `BreadcrumbList`.
- **`public/llms.txt`** — a plain-language summary of the company, product, modules, languages,
  pricing and data sources, written for AI crawlers and answer engines.
- **Sitemaps** — `app/sitemap.ts` (pages, auto-derived) and `app/image-sitemap.xml/` (images).
- **Bilingual content** — 10 English and 6 Hindi guides target farmer search intent in both
  languages, all funnelling to the YieldAI free trial.
- **hreflang** — a post carrying an `altSlug` is paired with its translation via
  `alternates.languages` in `app/blog/[slug]/page.tsx`, so Google serves the right language.
  Six English/Hindi pairs are currently linked; unpaired posts emit a canonical only.

Search Console is set up as a **domain property** (`sc-domain:agrivisionai.org`).

---

## Analytics

Both are inlined in `app/layout.tsx`:

- **Google Analytics 4** — `G-DFX8SDNRYV`
- **Microsoft Clarity** — session replay and heatmaps

GA4 is linked to Search Console.

---

## Brand assets

| Asset | Path |
|---|---|
| Horizontal wordmark | `public/logo.png` |
| Square mark | `public/logo-square.png`, `public/logo-1024.png` |
| Press-kit downloads | `public/press/` |
| Founder portrait | `public/founder.jpg` |
| Team headshots | `public/team/` |

Brand colours are Tailwind tokens: `brand-primary` (green `#0F6B3E`), `brand-secondary`
(blue `#0A84FF`), `brand-sun`, plus an `ink-*` neutral ramp.

---

## Design system

Utilities live in `app/globals.css`:

- `.card-surface` — the standard card (border, radius, hover sheen)
- `.mesh-hero`, `.mesh-soft` — atmospheric background gradients
- `.grain` — subtle film grain
- `.tilt-3d`, `.tilt-layer` — 3D parallax, driven by `components/Tilt.tsx`
- `.chip`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`
- `.container-narrow` — the page width container
- `.gradient-text-green` — the green gradient headline treatment

Motion and accessibility conventions:

- All 3D/parallax effects are wrapped in `prefers-reduced-motion` and `(pointer: fine)` guards,
  so they are disabled on touch devices and for users who ask for reduced motion.
- Sections animate in with the `Reveal` primitive (`viewport={{ once: true }}`).
- Focus-visible rings and button `:active` states are defined globally.

---

## Deploying

```bash
npm run build                 # verify it compiles first
vercel --prod --yes           # deploy and alias to agrivisionai.org
```

After a content change that should be indexed quickly, request indexing for the affected URLs
in Google Search Console.

---

## Company facts (reference)

Kept here so copy stays consistent across the site.

- **Legal entity:** Agrivisionai Inc, a Delaware C-Corporation
- **Headquarters:** Detroit, Michigan, USA
- **Founded:** May 2026 by Vijesh Reddy Golamari (sole founder — no co-founders)
- **Flagship product:** YieldAI Global — live in India, the USA and Canada
- **Platform:** 17 modules · 13 languages · 54 crops
- **Pricing:** 30-day free trial, then $9.99/month
- **Market data sources:** mandi (India), USDA (USA), StatCan (Canada)
- **Agronomy grounding:** ICAR, FAO, state agriculture departments
- **Schemes covered:** PM-KISAN, PMFBY and others
- **Venture:** [BuildVaillant](https://buildvaillant.com) — web and product development studio,
  the revenue engine funding the agriculture work
- **Contact:** hello@agrivisionai.org · careers@agrivisionai.org · support@agrivisionai.org
- **Elsewhere:** [LinkedIn](https://www.linkedin.com/company/agrivisionai/) ·
  [X](https://x.com/yieldaiglobal) · [GitHub](https://github.com/agrivisionai-org) ·
  Wikidata `Q140381136`

---

© 2026 AGRIVISION AI (Agrivisionai Inc). All rights reserved.
