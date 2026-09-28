# Reference homepage: measured spec

Source: full-page screenshots of https://www.conejovalleycounseling.com/home, captured by the site owner on 2026-09-28. When this spec was written the sandbox blocked the site, so every measurement below comes from those screenshots, not from the site's DOM or CSS.

**Update (2026-09-28, later session):** the live page became reachable. Its HTML text confirms the section order, copy and navigation structure used here: About · Our Team ▾ · Specialties ▾ · Methods ▾ · FAQs · Contact, and a mobile menu built from "Folder: … / Back" sub-lists. A headless-Chrome capture at 1440 and 390 matched the layouts measured below.

Colours are the exception. They come from the site's own `site.css` variables (read via a text fetch) and were confirmed by sampling screenshot pixels.

- **Desktop:** the 1418 px-wide capture is treated as 1440 CSS px (scale 0.985). Values are rounded to the nearest px or 0.1 vw.
- **Tablet:** the 832 px capture is treated as 768 CSS px.
- **Mobile:** the 380 px capture is treated as 390 CSS px.
- Measurement error is roughly ±3–5% (JPEG compression and screenshot scaling).

## Colour (from `site.css`, pixel-confirmed)

| Role | Variable | Hex |
| --- | --- | --- |
| Canvas (hero, intro, schedule) | `--lightAccent` hsl(45 30.8% 94.9%) | `#F6F4EE` |
| Surface (who, areas, specialties, footer) | `--white` | `#FFFFFF` |
| Tint (how we work) | `--accent` hsl(36 30.9% 84.1%) | `#E3D9CA` |
| Band / text | `--black` hsl(0 0% 16.9%) | `#2B2B2B` |
| Script accent, bottom bar | `--darkAccent` hsl(180 22.8% 61.4%) | `#86B3B3` |
| Hairlines (sampled) | — | `#F0F0EE` |

## Typography (visual match; the original font files are not accessible)

| Role | Reference look | Clone font | Desktop / tablet / mobile |
| --- | --- | --- | --- |
| Display (H1) | light, low-contrast serif | Newsreader 300 | 56 / 37 / 33 px, lh 1.33 |
| H2 | same family | Newsreader 300 | 47 / 32 / 29 px, lh 1.33 |
| H3 (card titles) | same family | Newsreader 300 | 26 / 24 / 22 px |
| Accent word | thin monoline script, teal, ~1.45× | Ms Madi | inherits |
| Body | Mulish-like humanist sans, light | Mulish 300 | 16.5 / 16 / 16 px, lh ≈1.8 |
| Eyebrows / leads | uppercase, tracked ≈0.12em | Mulish 400 | 15 / 15 / 14 px |
| Nav | uppercase, tracked ≈0.12em | Mulish 400 | 13 px |
| Expertise list | uppercase, tracked ≈0.15em | Mulish 500 | 14 px, row pitch 78 px |

## Components

- **Header:** logo at 6.1vw, about 225 px wide. The nav's right edge (the Contact pill) sits at 95vw. Items are about 36 px apart. The **Contact button is an outlined ellipse** (`border-radius: 50%`, about 110×48). The header has no border and shares the page background. The hero starts 154 px from the top of the page. Below roughly 1024 px the nav collapses to a thin three-line hamburger (seen in the 768 capture).
- **Primary CTAs are text links:** uppercase, tracked, with a 1 px underline about 8 px below the text ("BOOK AN APPOINTMENT", "LEARN MORE"). **"BOOK NOW" and "CONTACT" are ellipse pills.**
- **Corners:** no rounded corners on images or cards.

## Sections (desktop, 1440)

Heights are measured between background colour changes.

| # | Section | BG | Height | Layout |
| --- | --- | --- | --- | --- |
| 1 | Hero | canvas | 154 → ~800 | Left image bleeds off the left edge: 0 → 34.4vw, 581 px tall. Text column starts at 42.8vw: eyebrow at the top, then H1 / body / link bottom-aligned with the image. A second image bleeds off the right edge (93.4vw →), starting about 200 px lower. |
| 2 | Intro | canvas (continues) | → 1670 | Image bleeds off the right edge: 69.7vw →, 624 px tall, top 919. H2 at 8.8vw, about 44vw wide, starting ~127 px below the image top. Two text columns: 8.8→34vw (uppercase lead + body) and 35.4→60.6vw. |
| 3 | Who we help | surface | 1020 | H2 at 5.9vw. Three image cards at 16.4 / 43.1 / 69.7vw, each 25.4vw wide, portrait images (≈0.76), title ~40 px below the image, then body. |
| 4 | Statement | band | 666 | Left-aligned at 8.8vw, 60vw wide, H2 size. Last sentence italic. Top padding ≈330, bottom ≈150 (text sits low). |
| 5 | Areas of expertise | surface | 807 | H2 (+ script) at 8.8vw. Two ruled columns: 35.3→60.9vw and 65.5→91.3vw. Six rows each, 78 px pitch, no rule under the last row. |
| 6 | How we work | tint | 922 | Eyebrow at +129. H2 ~175 below it. Two columns: 8.8→38vw (uppercase lead + body) and 39.3→68vw. "LEARN MORE ABOUT US" link below. **Right column image: inferred** (the page text includes one, but it rendered in none of the captures, most likely a scroll-triggered fade). |
| 7 | Honoring + specialties | surface | 1683 | Statement H2 at 58.9vw, ~458 px below the section top. **Large left image: inferred** from the empty space and the page text. "Our *specialties* include…" at 8.8vw. 2×2 grid at 39vw and 69.3vw (each ~25.7vw), row pitch ~430, "LEARN MORE" links. |
| 8 | Schedule | canvas | 836 | Content indented to 20.1vw: eyebrow at +108, H2, body ~36vw wide, "BOOK NOW" ellipse. **Right image: inferred.** |
| 9 | Footer | surface | 468 | Logo at 5vw. Blurb at 6.7vw. Column headings (tracked caps) at 42.8 / 57.9 / 76.8vw: Navigate / Our Team / Contact. |
| 10 | Bottom bar | accent | ~52 | Legal links in white at 6.7vw. |

## Tablet (768)

The desktop grid holds with the same vw proportions (hero text still at 43vw, intro at 9vw). Only the nav changes, collapsing to the hamburger. Type is smaller (see table).

## Mobile (390)

- 23 px (6vw) gutters. Every section stacks into one column.
- **Hero:** text first; then the image pair (left image ~71% wide, right image bleeding off the edge, offset downward).
- **Intro:** heading → lead → body → image → second body.
- **Who we help:** each card is image → title → body.
- **Specialties:** "Our *specialties* include…" on one line, then the items stacked.

## Not verified (no capture provided)

- The desktop dropdown panels and the open mobile menu. Both are built to the standard pattern for Squarespace 7.1 (desktop: panel below the item; mobile: full-screen overlay with folder → sub-list → "Back"). The text export of the page confirms the folder/Back structure.
- The three inferred image positions (§6, §7, §8).

## Clone vs reference: measured section heights

Heights are in CSS px, measured from background-colour boundaries: in the reference screenshots, and in `/reference` rendered by headless Chromium at the same width. The reference numbers carry the ±3–5% screenshot error noted above.

| Section | 1440 ref | 1440 clone | Δ | 768 ref | 768 clone | Δ | 390 ref | 390 clone | Δ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Header + hero + intro (one canvas block) | 1670 | 1671 | 0% | 1671 | 1597 | −4% | 2033 | 1991 | −2% |
| Who we help | 1020 | 1049 | +3% | 865 | 821 | −5% | 1966 | 1946 | −1% |
| Statement band | 666 | 678 | +2% | 433 | 436 | +1% | 434 | 448 | +3% |
| Areas of expertise | 807 | 817 | +1% | 524 | 537 | +2% | 1039 | 1040 | 0% |
| How we work | 921 | 949 | +3% | 964 | 936 | −3% | 1469 | 1582* | +8% |
| Honoring + specialties | 1685 | 1705 | +1% | 1612 | 1538 | −5% | n/a† | 1998 | — |
| Schedule | 836 | 855 | +2% | 847 | 889 | +5% | n/a† | 1208 | — |
| Footer + bar | 518 | 471 | −9% | ~487 | 702‡ | — | n/a† | 1184 | — |

\* The clone includes the inferred "How we work" image, which never rendered in the reference capture.
† The 390 capture is cut off at 8000 px (inside Specialties), so nothing below that point could be compared.
‡ **Deliberate deviation:** at 768 the reference squeezes four footer columns, and its email address overflows the viewport. The clone uses 3 columns there and the reference grid from 1024 up.

**Not matched exactly:**
- **Fonts:** the original faces weren't accessible, so the closest open-licence matches are used. Line breaks mostly match; a few headings wrap one word differently.
- **Wordmark:** the reference logo is an image; the clone uses a typeset stand-in.
- **Inferred images:** §6, §7 and §8 above.
