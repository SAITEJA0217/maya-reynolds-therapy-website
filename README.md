# Dr. Maya Reynolds, PsyD — Homepage

A premium, editorial homepage for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, CA. Built for the Grow My Therapy Front-End Developer Internship assignment.

## Assignment overview

| Part | What was asked | Where it lives |
| --- | --- | --- |
| 1. Clone | Recreate the layout, section order, grids, hierarchy, nav and footer of [conejovalleycounseling.com/home](https://www.conejovalleycounseling.com/home) | Component architecture in `components/sections` follows the reference section map below |
| 2. Redesign | Rebrand using Maya's profile as the single source of truth | All copy in `data/site.ts`; tokens in `styles/tokens.css` |
| 3. New section | An "Our Office" section using her office photos and details | `components/sections/Office.tsx` |
| 4. Walkthrough | A 5-minute client-facing Loom | Script in `docs/loom-walkthrough.md` |

### Reference → redesign section map

| # | Reference section | Maya's version |
| --- | --- | --- |
| 1 | Header: logo · About ▾ · Specialties ▾ · Methods ▾ · FAQs · Contact | Same structure; dropdowns link to on-page anchors |
| 2 | Hero: italic caps eyebrow, H1 with italic accent, one line, CTA, overlapping image pair | Same; arched office photo + inset detail |
| 3 | "You're holding onto hope…" centered H2, italic lead, paragraph, image + paragraph | "From the outside, you're doing fine…" |
| 4 | "Who we help" — 3 image columns | "Who I help" — three adult client profiles from the profile |
| 5 | Full-width statement band | Quote band in deep olive |
| 6 | "Our areas of expertise" ruled italic list, "…and more" | "Areas of focus" |
| 7 | "How we work" — image, italic lead, 2 paragraphs, CTA | About Dr. Reynolds + the four methods she integrates |
| 8 | "Honoring where you've been…" + specialties cards | Exactly three services: Anxiety & Panic, Trauma & EMDR, Burnout & Perfectionism |
| — | *(not on reference)* | **NEW: The office** |
| — | FAQs (separate page in reference nav) | On-page FAQ accordion |
| 9 | "Schedule an appointment" CTA + image | Appointment request with portrait + form |
| 10 | Footer: blurb · Navigate · Contact · Team · legal | Blurb · Navigate · Contact · Specialties · crisis line |

## Tech stack

- **Next.js 16** (App Router, fully static prerender) · **React 19** · **TypeScript** (strict, no `any`)
- **Tailwind CSS v4** with design tokens declared in `@theme`
- `next/image` (AVIF/WebP, blur placeholders, responsive `sizes`)
- `next/font/local` with self-hosted variable fonts (Fraunces + DM Sans, SIL OFL)
- No UI or animation libraries. Only two client components (navigation + contact form).

## Project structure

```
app/            layout (fonts, metadata), page composition, global CSS
components/
  layout/       Header, Navigation (client), Footer, StructuredData
  sections/     Hero, Intro, WhoIHelp, QuoteBand, FocusAreas, About,
                Specialties, Office, Faq, Contact
  ui/           Container, ButtonLink, Eyebrow, SectionHeading, RichText,
                ServiceCard, Logo, ContactForm (client)
data/           site.ts (every line of copy), types.ts
styles/         tokens.css (colour, type, layout tokens)
public/images/  optimised photos (Maya's portrait + office)
docs/           Loom walkthrough script
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

Typography: **Fraunces** (display serif, with its italic used for the one-word accents the reference site is known for) + **DM Sans** (body/UI). Fluid scale: Display → H2 → H3 → Lead → Body 17px → Small → Eyebrow (tracked caps).

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

QA'd at 1440, 1280, 1024, 768, 430, 390 and 375px: no horizontal overflow, no broken images, no console errors at any width. Fluid type caps mobile headings, grids collapse 3 → 1 columns, and the nav switches to a full-screen menu below 1024px.

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
- Layout reference: Conejo Valley Family Counseling homepage. Structure only; no code or assets reused.
