# Dr. Maya Reynolds, PsyD — Homepage

A premium, editorial homepage for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, CA. Built for the Grow My Therapy Front-End Developer Internship assignment.

## Assignment overview

| Part | What was asked | Where it lives |
| --- | --- | --- |
| 1. Clone | Recreate the layout, section order, grids, hierarchy, nav and footer of [conejovalleycounseling.com/home](https://www.conejovalleycounseling.com/home) | **`/reference`** (noindex): a structural clone rendered with the reference's copy, colours and type, with placeholder imagery. Measurements and side-by-side results are in `docs/reference-spec.md` |
| 2. Redesign | Rebrand using Maya's profile as the single source of truth | All copy in `data/site.ts`; tokens in `styles/tokens.css` |
| 3. New section | An "Our Office" section using her office photos and details | `components/sections/Office.tsx` |
| 4. Walkthrough | A 5-minute client-facing Loom | Script in `docs/loom-walkthrough.md` |

### Reference → redesign section map

| # | Reference section | Maya's version |
| --- | --- | --- |
| 1 | Header: logo · About ▾ · Our Team ▾ · Specialties ▾ · Methods ▾ · FAQs · Contact (ellipse pill) | Same; "Our Team" becomes "The Office" (a solo practice). Folders link to on-page anchors |
| 2 | Hero: image bleeding off the left, text column at 43vw, script accent word, underlined text CTA, sliver image bleeding off the right | Same geometry; italic-serif accent in brick |
| 3 | "You're holding onto hope…" H2 + two text columns, image bleeding off the right | "You look fine from the outside…" |
| 4 | "Who we help" — 3 image columns | "Who I help" — three adult client profiles from the profile |
| 5 | Dark statement band, last sentence italic | Same, deep olive |
| 6 | "Our areas of expertise": two ruled columns of tracked caps | "Areas of focus" |
| 7 | "How we work" on tint: eyebrow, H2, caps lead + two text columns, underlined link | "How I work": her bio, portrait and the four methods she integrates |
| 8 | "Honoring where you've been…" beside a large image, then "Our specialties include…" + 2×2 grid with "Learn more" links | Same; exactly three services: Anxiety & Panic, Trauma & EMDR, Burnout & Perfectionism |
| — | *(not on reference)* | **NEW: The office** |
| — | FAQs (separate page in reference nav) | On-page FAQ accordion |
| 9 | "Schedule an appointment", indented at 20vw, "Book now" ellipse | Same layout; the right column holds the request form |
| 10 | Footer: logo + blurb · Navigate · Our Team · Contact, then an accent bar with legal links | Logo + blurb · Navigate · Specialties · Contact, then an olive bar with the 988 crisis line |

## How the clone and the redesign share one structure

`components/page/HomepageSections.tsx` renders the reference's section order. Both routes use it:

- `/reference` passes the reference content (`data/reference.ts`) under `data-theme="reference"`.
- `/` passes Maya's content (`data/site.ts`) under the default theme, and inserts the Office and FAQ sections after Specialties.

Each section component positions itself with the reference's measured grid (vw-based columns, bleed images, spacing). It styles itself only through semantic tokens (`canvas`, `surface`, `tint`, `band`, `accent`…) defined in `styles/tokens.css`. That keeps the redesign structurally identical to the clone by construction; only content, colour, type and imagery change.

## Tech stack

- **Next.js 16** (App Router, fully static prerender) · **React 19** · **TypeScript** (strict, no `any`)
- **Tailwind CSS v4** with design tokens declared in `@theme`
- `next/image` (AVIF/WebP, blur placeholders, responsive `sizes`)
- `next/font/local` with self-hosted variable fonts (Fraunces + DM Sans, SIL OFL)
- No UI or animation libraries. Only two client components (navigation + contact form).

## Project structure

```
app/              / (Maya), /reference (clone), fonts, metadata, global CSS
components/
  page/           HomepageSections: the shared reference architecture
  layout/         SiteHeader, Navigation (client), SiteFooter, StructuredData
  sections/       HeroSection, IntroSection, AudiencesSection, StatementBand,
                  AreasSection, ApproachSection, SpecialtiesSection,
                  ScheduleSection, OfficeSection (new), FaqSection
  ui/             Figure, RichText, TextLink, PillLink, Wordmark, ContactForm (client)
data/             site.ts (Maya), reference.ts (clone), types.ts
styles/           tokens.css (semantic roles + two themes)
public/images/    Maya's portrait and office photos (cropped)
public/reference/ neutral placeholder artwork for the clone
docs/             reference-spec.md, loom-walkthrough.md
```

## Design direction

Premium, editorial, calm. The palette is taken from Maya's own office rather than a therapy-template palette:

| Token | Hex | Source / use |
| --- | --- | --- |
| Primary — olive | `#33402F` | Olive tree in her session room; buttons, rules |
| Primary dark | `#2B3628` | Quote band, footer |
| Secondary — sage | `#8A9A7E` / `#C9D2BD` | Decorative rules; text on dark |
| Accent — clay | `#9A5238` | Exposed brick; eyebrows, italic emphasis |
| Background — linen | `#F5F1EA` | Walls and curtains |
| Surface | `#FBF9F5` / `#EBE3D6` | Cards, alternating sections |
| Text / muted | `#26241F` / `#5F5A51` | 13.8:1 and 6.1:1 on linen |
| Border | `#D8CEBF` | Hairlines |

Typography: **Fraunces** (display serif; its italic replaces the reference's script accent words) + **DM Sans** (body/UI). The type *scale* is the reference's, measured from screenshots: H1 56/37/33px and H2 50/34/29px at 1440/768/390, 16–16.5px body at 1.8 line height, tracked-caps eyebrows, navigation and links. The clone uses Newsreader + Mulish + Ms Madi, the closest open-licence matches to the reference's faces.

Imagery: every photo on the page is **Maya's real portrait or her real office**, cropped into details (the hourglass on her bookshelf, window light on the brick, the armchair). No stock photography, so the site never shows a room clients won't actually walk into.

## Content integrity

All copy is written from the supplied profile only. Not included because the profile doesn't state them: phone, email, fees, insurance, license number, years of experience, testimonials, couples/child/teen services, free consultations. The crisis line (988) in the footer is standard public-safety information, not a claim about the practice.

## Features

- Sticky header, dropdown nav (hover, click and keyboard; Esc closes), full-screen mobile menu
- JS-free FAQ accordion using native `<details>` with animated height
- Scroll-driven section reveals in pure CSS (progressive enhancement, off under reduced motion)
- Subtle image zoom and card lift on hover
- Appointment request form, ready for an endpoint (see Deployment)

## Local setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

## Deployment (Vercel)

1. Push to GitHub and import the repo in Vercel (framework auto-detected, no config needed).
2. Optional environment variables:
   - `NEXT_PUBLIC_SITE_URL`: canonical domain (falls back to Vercel's production URL).
   - `NEXT_PUBLIC_FORM_ENDPOINT`: POST endpoint for the appointment form (e.g. Formspree, or a HIPAA-compliant intake tool). Without it the form runs in **preview mode** and shows a confirmation without sending anything.

## Responsive support

Both `/` and `/reference` are QA'd with headless Chromium at 1440, 1280, 1024, 768, 430, 390 and 375px. At every width: no horizontal overflow, no broken images, no console errors or failed requests, no text under 12px, and every in-page link resolves. Fluid type caps mobile headings, grids collapse 3 → 1 columns, and the nav switches to a full-screen menu below 1024px.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`, `address`, `dl`, `figure`)
- One H1, sequential heading levels, descriptive alt text on every image
- Skip link, visible `:focus-visible` rings, 44px+ touch targets
- Dropdowns expose `aria-expanded` / `aria-controls`; Esc closes and returns focus to the menu button
- All text pairs meet WCAG AA contrast
- `prefers-reduced-motion` disables reveals, transitions and smooth scrolling

## SEO

- Title and meta description targeting "Santa Monica therapist / psychologist", anxiety, trauma, EMDR, burnout, telehealth in California
- Canonical URL, Open Graph and Twitter card with a 1200×630 office image
- JSON-LD: `Psychologist` (address, area served) and `FAQPage`
- Local keywords appear naturally in the H1 eyebrow, body copy, office section and footer

## Performance

- Static prerender, server components by default
- Images served as AVIF/WebP at the right size per breakpoint; hero preloaded; others lazy with blur placeholders
- Self-hosted fonts (no third-party font requests), `display: swap`, variable axes in one file each

## Credits

- Portrait and office photographs: supplied with Dr. Maya Reynolds' profile (Grow My Therapy assignment assets). Dr. Reynolds is a fictional therapist profile supplied for the assignment.
- Fonts: Fraunces (Undercase Type) and DM Sans (Colophon), SIL Open Font License.
- Layout reference: Conejo Valley Family Counseling homepage. The `/reference` route transcribes its copy for structural comparison only. It is `noindex`, uses placeholder images, and reuses no code, images or font files from the original.
- Clone fonts: Newsreader, Mulish and Ms Madi (SIL Open Font License).
