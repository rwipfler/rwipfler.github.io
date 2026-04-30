# Website Audit — rwipfler.github.io
*Analyzed as a professional web designer + scientist + computer scientist. April 2026.*

---

## PART 1 — CRITICAL BUGS (fix these first, they are embarrassing right now)

These are things a visitor sees today that should not be live.

---

### 1. The h1 says "Website in Progress" — on the public homepage
**File:** `index.html`, line 513

```html
<h1>Rebecca Wipfler -Website in Progress</h1>
```

This is the very first line anyone reads on the site. It's publicly live. The "-Website in Progress" text needs to come out immediately. It should just say `Rebecca Wipfler` or something intentional.

**I can fix this right now — just say the word.**

---

### 2. Unfinished placeholder text is live on the homepage
**File:** `index.html`, lines 548–549

```
explored sunken submarines, and XXXX
```

The word "XXXX" is live on the expeditions section of the homepage. Also ends with a stray period on the next line. This needs real text or deletion.

Also on lines 598–604, the research section has a run-on draft sentence with a spelling error:

```
I am profeccieintin visualzing bioinformatic data
```

This is visibly broken and live.

---

### 3. Wrong numbers in the homepage stats
**File:** `index.html`, lines 529–530

| Stat on site | What your records say |
|---|---|
| "6 Research vessels" | 5 research vessels |
| "~4,997m Record Dive Depth" | ~5,500m (AT50-24, Aleutian Islands) |

The 5,500m dive depth is actually remarkable — it's your deepest expedition on record and featured correctly on the expedition page. The homepage undersells it.

---

### 4. Three broken CSS class selectors (styles silently not applying)
These are copy-paste truncation errors — the class names got cut off. The CSS just silently fails, meaning the styles inside are being ignored.

| File | Broken selector (what's there) | What it should be |
|---|---|---|
| `research.html`, line 49 | `.theme-    .theme-title` | `.theme-body .theme-title` |
| `creative.html`, line 173 | `.artist-    .artist-body h3` | `.artist-body h3` |
| `expeditions.html`, line 36 | `.gt-    #globe-legend` | something with `.gt-name` — needs checking |

The effect: `.theme-title` (the card headings on Research page) and `.artist-body h3` (artist name headings on Creative page) may not be getting the right font size and styling.

---

### 5. Inline styles on multiple pages (violates your own site rules)
Your site rules say "No inline styles in HTML." These exist:

- `live.html`, line 111 — `style="margin:0; font-size:1.1rem;"` on a paragraph in the embed box
- `index.html`, line 629 — `style="color:var(--ink-dim); border-bottom:..."` on an anchor
- `index.html`, line 649 — `style="font-size:20px;"` on a paragraph in the creative section
- `expedition-at5024.html`, line 43 — `style="font-size:0.62em;font-style:normal;..."` on an `<em>` in the hero title

These should all be CSS classes.

---

### 6. Builder/editorial notes visible to the public
These are things that made sense during construction but should not be on the live site:

**live.html footer** (lines 188–189):
```
OFFICIAL STREAM HUBS ONLY
SEPARATE FROM CREATIVE PAGE
```
The footer of the Watch page reads like an internal design memo. Should be changed to something like the site name or expedition-relevant info.

**live.html stats row** (line 93):
```
0 Fragile direct links
```
This is also an internal design note — "0 fragile direct links" means nothing to a visitor.

**creative.html stats row** (lines 277–280):
```
5 Project placeholders
2 Image slots per card
1 Your point of view
```
These are builder notes. Three of the four stats are construction scaffolding, not real content for visitors.

**creative.html — "setup-note" paragraphs on every artist card:**
```
Best card use: one full biodiversity composition plus one photo...
```
These appear in every artist card and are visible to the public. They are writing instructions for you, not content for readers.

**creative.html — "section-note" above the artist grid:**
```
Replace the placeholders later with real image files.
```
Same — visible to the public.

---

### 7. CV download link is a 404
**File:** `about.html`, line 145

```html
<a href="cv/wipfler_cv.pdf" class="cv-btn" target="_blank">Download CV</a>
```

There is no `cv/` folder in the repo. Anyone who clicks "Download CV" hits a 404. Until the PDF is added, the button should either be hidden or point to a Google Drive link.

---

### 8. Missing images cause broken image icons in Creative page
**File:** `creative.html`

Every `<img>` tag on the Creative page points to a file that does not exist yet (except 5 of the artist main images). Broken `<img>` tags render as broken-image icons — a blank box with an X — which looks worse than the placeholder divs used on other pages. These should either use a proper fallback or have the actual image in place.

---

### 9. About.html photos are commented out — placeholders show instead
**File:** `about.html`, lines 126–140

The `<img>` tags for portrait and field photo are commented out. The page shows the hexagon placeholder instead. This is cosmetically acceptable but noted — as soon as photos are ready, these just need to be uncommented.

---

## PART 2 — MISSING FILES (what needs to exist before the site is "done")

### Images needed

**about.html:**

| Filename | Path | What it should show | Aspect ratio |
|---|---|---|---|
| `portrait.jpg` | `images/about/` | Portrait of you, head/torso, decent lighting | 3 : 4 (tall) |
| `field.jpg` | `images/about/` | On-deck or lab photo, candid preferred | 4 : 3 (wide) |

**research.html:**

| Filename | Path | What it should show | Aspect ratio |
|---|---|---|---|
| `incubation-system.jpg` | `images/research/` | Your high-pressure incubation system, or a seafloor scene | 16 : 9 |
| `methane-seep.jpg` | `images/research/` | A methane seep community, microbial mat, or carbonate mound | 16 : 9 |
| `deepsee.jpg` | `images/research/` | A screenshot or figure from the DeepSee CHI paper | 16 : 9 |

**creative.html — artist images:**

5 of the 6 "main" artist images already exist in `images/artists/`. All 6 "office" images are missing. Zoe Keller's main image is also missing.

| Filename | Path | What it should show |
|---|---|---|
| `zoekeller-main.jpg` | `images/artists/` | One of Zoe Keller's ocean biodiversity compositions |
| `zoekeller-office.jpg` | `images/artists/` | A Zoe Keller print or book page in your office/space |
| `nocturnalsea-office.jpg` | `images/artists/` | NocturnalSea work in your workspace |
| `sneepsnorp-office.jpg` | `images/artists/` | Sneepsnorp papercraft on your shelf |
| `roughforradio-office.jpg` | `images/artists/` | A Roughforradio item you own |
| `pikaole-office.jpg` | `images/artists/` | A Pikaole item in your space |
| `mernstw-office.jpg` | `images/artists/` | A mernstw item in your space |

**creative.html — project images (all 10 are missing):**

| Filename | Path | What it should show |
|---|---|---|
| `isopod-costume-main.jpg` | `images/projects/` | Full-body shot of the giant isopod costume |
| `isopod-costume-detail.jpg` | `images/projects/` | Close-up or photo with real isopods at MBARI |
| `crushed-cup-art-main.jpg` | `images/projects/` | Your full collection of crushed cups together |
| `crushed-cup-art-detail.jpg` | `images/projects/` | Close-up of one favorite cup |
| `deepsea-3dprints-main.jpg` | `images/projects/` | 3D prints collection overview |
| `deepsea-3dprints-detail.jpg` | `images/projects/` | Close-up of print texture or detail |
| `workshop-build-main.jpg` | `images/projects/` | Whatever custom build or project you want here |
| `workshop-build-detail.jpg` | `images/projects/` | Detail shot of that project |
| `collection-shelf-main.jpg` | `images/projects/` | Wide shot of your office shelf showing everything |
| `collection-shelf-detail.jpg` | `images/projects/` | A close detail corner of the shelf |

**Expedition pages — all 12 need photos:**

Every expedition page has four empty placeholder slots. Up to 4 photos per expedition (16:9 ratio). Suggested naming: `images/expeditions/[id]/photo1.jpg` through `photo4.jpg`. Even 1 or 2 real photos per expedition would dramatically improve these pages.

---

### Other files needed

| File | Path | What it is |
|---|---|---|
| `wipfler_cv.pdf` | `cv/` | Your current CV — linked from the Download CV button |
| `favicon.ico` | root (`/`) | Browser tab icon — currently missing on every single page |
| `favicon.svg` | root (`/`) | SVG version for modern browsers |
| `apple-touch-icon.png` | root (`/`) | 180×180px icon for iOS bookmarks |
| `sitemap.xml` | root (`/`) | Search engine sitemap — not required but helps Google index the site |

---

## PART 3 — CONTENT GAPS (things that exist but have placeholder text or are incomplete)

### All 12 expedition detail pages need your writing

Every one of them has:
```
[ Narrative coming soon — field notes from X ]
```

Each needs 3–8 sentences in your own voice. Not formal. What did it feel like? What's one moment that sticks? What did you see out the porthole? Even a couple of sentences would transform these pages. Here are all 12:

| Expedition ID | Name | Year |
|---|---|---|
| `na086` | Quinault Canyon & Olympic Coast NMS | 2017 |
| `na087` | Heceta Bank, Oregon | 2017–18 |
| `na101` | Hawaiian Seamounts | 2018 |
| `na111` | Unknown / Pacific | 2018–19 |
| `na112` | Unknown / Pacific | 2018–19 |
| `wf0220` | R/V Western Flyer cruise | 2020 |
| `fk210922` | R/V Falkor cruise | 2021 |
| `wf0521` | R/V Western Flyer cruise | 2021 |
| `at5012` | DSV Alvin, Southern CA seeps | 2023 |
| `yellowfin` | R/V Yellowfin cruise | unknown |
| `wflyer` | Western Flyer Day Cruise | unknown |
| `at5024` | HOV Alvin, Aleutian Islands | 2025 |

All 12 also have this funding slot left blank:
```html
<div class="meta-value" style="color:rgba(79,200,216,0.28)"><!-- FILL --></div>
```

---

### research.html — publication DOI links

| Publication | Status |
|---|---|
| GCA 2025 — Cryptic methane cycling | No DOI link — add when published/available |
| Parra et al., bioRxiv 2025 — Endolithic microbes | Listed as "In progress" — add link when available |
| CHI 2024 DeepSee | Has a link ✓ |
| Oceanography 2019 Seamounts | Has a link ✓ |

---

### live.html — featured embed is empty

The featured video slot says:
```
Replace this box with a single YouTube embed...
```

This is visible to the public. You need to decide: is there one Nautilus Live or Schmidt Ocean video you want featured here? I can add the embed code once you pick one. A YouTube embed is two lines of HTML.

---

### about.html — no links to academic profiles

The links row only has email, Orphan Lab, Nautilus Live, and WHOI cruise page. Standard for a scientist at your level would include:

- Google Scholar
- ORCID
- ResearchGate (optional)
- Twitter/X or Bluesky (if you have one)
- LinkedIn (optional)

These are what people look for first when vetting a collaborator.

---

### index.html — contact section is sparse

The contact section only has email and two institutional links. Missing: any context about what kinds of contact are welcome (collaboration, press, speaking, teaching), office/department address, or Caltech GPS department link.

---

## PART 4 — TECHNICAL & SEO (invisible to visitors, important for the internet)

### Missing from EVERY page:

| What | Why it matters |
|---|---|
| `<meta name="description" content="...">` | The text Google shows under your link in search results. Without it Google picks a random sentence from the page. |
| `<meta property="og:title">` | When someone shares your URL on Twitter, LinkedIn, or Slack — this is the title that appears in the preview card. Currently shows nothing. |
| `<meta property="og:description">` | Description in the social share preview card. |
| `<meta property="og:image">` | The preview image for social shares. Without it, shared links appear blank. |
| `<meta name="twitter:card" content="summary_large_image">` | Makes Twitter/X show a large image preview instead of a tiny thumbnail. |
| `<link rel="canonical" href="...">` | Tells Google the official URL for each page, preventing duplicate content penalties. |
| Favicon `<link>` tags | Without them, the browser tab shows a blank icon on every page. |

### What can be done without you:
All OG/meta/favicon infrastructure can be added to every page. The one thing needed from you: a photo to use as the OG image (usually a portrait or field photo). Until you have one, the `og:image` tag can be skipped or use a placeholder.

### Performance note:
Google Fonts is loaded consistently across pages (two `<link>` tags each time), which is fine. No external JS dependencies outside D3/TopoJSON on the expeditions page. The site is already very lightweight — this is good.

---

## PART 5 — DESIGN & UX (things that affect how people read and use the site)

### Mobile experience is poor
At 760px and below, the vertical text nav rail (right side) collapses to 32px wide with 9px font in writing-mode vertical — essentially invisible on a phone. No hamburger menu exists. Anyone visiting on a phone has no visible navigation. This is the single biggest usability gap.

What's needed: a simple bottom navigation bar for mobile, or a hamburger icon that expands a menu.

---

### Custom cursor hides system cursor — accessibility problem
`site.css` sets `body { cursor: none; }` and replaces it with a custom glowing dot. This is visually cool on a desktop with a mouse. But:

- Screen readers and keyboard users navigate without a mouse — hiding the cursor can confuse them
- On tablets with a stylus, `cursor: none` is jarring
- The fallback `@media (pointer: coarse)` only covers touchscreens, not keyboard-primary users

The fix: also restore cursor behavior for users navigating by keyboard, and add `@media (prefers-reduced-motion)` support.

---

### "Skip to main content" link missing
Screen readers and keyboard navigators expect a visually hidden "Skip to main content" link at the very top of every page. It is one line of HTML and CSS. Required for WCAG accessibility compliance.

---

### Page layout inconsistency
The `main` tag uses different padding systems across pages:

- `about.html`: `padding: 0 80px 6rem 80px; max-width: 1000px;`
- `creative.html`: uses `.page-wrap` instead of `<main>`, with `padding: 2.5rem 3rem`
- `live.html`, `research.html`: `padding-bottom: 4rem` with section padding `2.5rem 3rem`

This means the left margin of text jumps depending on which page you're on. A visitor moving from Research to Creative to About will notice the content shifts position.

---

### research.html heading is italic and cyan — inconsistency with other pages
The Research page `<h1>` is styled:
```css
font-style: italic; color: var(--cyan);
```
Every other page uses normal weight, `var(--ink)` colored headings. Unless intentional, this reads as a mistake.

---

### Creative page builder notes are still visible to visitors
The `setup-note` class paragraphs ("Best card use: one full biodiversity composition...") and the `section-note` divs ("Replace the placeholders later with real image files") are construction scaffolding that remains publicly visible on every artist and project card. These need to be removed or converted to HTML comments once the cards are filled in.

---

## PART 6 — WHAT WOULD MAKE IT SIGNIFICANTLY BETTER

These are improvements beyond fixing bugs, based on what comparable academic portfolio sites do well.

---

### Add Google Scholar citation count
The strongest academic portfolio sites show a total citation count from Google Scholar on the About or Research page. For a PhD candidate with 4 publications, even showing the number is meaningful. One line of text to add — just needs the actual number.

---

### Teaching / mentorship section
You have substantial mentorship experience (Science Manager in Training, supervising Nautilus interns). A "Teaching & Mentorship" section on About — or even a short new page — would be professionally valuable and differentiate you from peers who only list publications.

---

### Press / media section
If you have given talks, been quoted in anything, appeared in podcast or press coverage, or have Nautilus Live Ship-to-Shore video clips of yourself, these belong on a dedicated section of Research or About. Recruiters and collaborators look for this.

---

### Live page should feature you personally
The live.html page is a general ROV livestream hub but does not connect back to you. A personal callout — "I was Science Manager in Training on E/V Nautilus 2018–19, here is my crew profile" — would anchor this page to you instead of reading like a generic resource list.

---

### Bio text on index.html should match about.html quality
The homepage bio is a rougher, shorter version of the About page bio. The about.html bio is excellent — careful, voiced, specific. The index.html bio currently has typos and draft phrasing. These should agree.

---

### Auto-updating copyright year in footer
The footer says `© 2026 R. WIPFLER`. A one-line JavaScript snippet can make this update automatically each year so you never have to manually change it.

---

### Talks / presentations section on research.html
If you have given conference talks at AGU, OSM, ASM, or elsewhere, a Talks section below Publications is standard and expected at the PhD level. Even a short list of 2–3 talks establishes the section for future additions.

---

### Expedition pages should link out to Nautilus cruise pages
Some expedition pages already have `nautiluslive.org/cruise/NA086` etc. linked. The ones that do not have this external link filled in feel incomplete. The NA086 page (Quinault Canyon) is the good model to follow.

---

## PART 7 — WHAT I NEED FROM YOU TO MAKE CHANGES HAPPEN

Here is exactly what can be done without you vs. what only you can provide.

---

### Things I can fix right now with no input from you:

- Remove "-Website in Progress" from the h1
- Fix the 3 broken CSS selectors
- Remove inline styles and move them to proper CSS classes
- Fix the footer on live.html (remove editorial notes)
- Remove setup-notes and editorial placeholders from creative.html
- Fix the stats numbers (vessels and depth) — will confirm 5,500m with you first
- Add all OG/meta/description tags across every page (will draft the copy for you to review)
- Fix the "XXXX" in the expeditions blurb (will draft a replacement)
- Fix the spelling error and incomplete sentence in the research section
- Add auto-updating copyright year JS

---

### Files I need from you:

| What | Where it goes |
|---|---|
| `wipfler_cv.pdf` | `cv/` folder — so the Download CV button works |
| Portrait photo (3:4 ratio) | `images/about/portrait.jpg` — About page + OG image |
| Field / on-deck photo (4:3 ratio) | `images/about/field.jpg` — About page |
| 3 research photos or paper figures (16:9) | `images/research/` — Research page theme cards |
| Up to 7 "in my office" photos of artist work | `images/artists/` — Creative page artist cards |
| Isopod costume photos (2) | `images/projects/` — Creative page projects section |
| Crushed cup photos (2) | `images/projects/` — Creative page projects section |
| 3D print photos (2, if you have them) | `images/projects/` — Creative page projects section |
| Office shelf photos (2) | `images/projects/` — Creative page projects section |
| Expedition photos (up to 4 per cruise) | `images/expeditions/[id]/` — each expedition page |
| A favicon image (any small square image — or tell me what you want) | Root folder |

---

### Information or decisions I need from you:

| What | Where it goes |
|---|---|
| Field notes for each of 12 expeditions (3–8 sentences, casual voice) | Each expedition detail page |
| Funding info for each expedition | Expedition detail pages |
| Which YouTube video to feature on live.html | Featured embed slot |
| Google Scholar profile URL | About page links row |
| ORCID ID | About page links row |
| Twitter / X / Bluesky handle (if you have one) | About page links row |
| ResearchGate profile URL (optional) | About page links row |
| DOI or journal link for GCA 2025 paper | Research page + index.html |
| Final link for Parra et al. bioRxiv 2025 when ready | Research page |
| Whether "Available for public talks" on research.html is accurate right now | Outreach card text |
| What you want the favicon to look like (submarine? microbe? R.W. monogram?) | Every page tab |
| Any press coverage, talks given, or media appearances | New press/media section |
| Teaching and mentorship history | New section on about.html |
| A short sentence to replace "XXXX" in the expeditions blurb on the homepage | index.html, ~line 549 |
| Confirmation that 5,500m is the correct max dive depth | index.html stats |

---

## PRIORITY ORDER

### Fix immediately — embarrassing while live:
1. Remove "Website in Progress" from h1
2. Fix "XXXX" and the spelling/grammar errors in index.html
3. Fix the wrong stat numbers (vessels + depth)
4. Clean editorial notes from live.html footer and creative.html
5. Fix the 3 broken CSS selectors

### Fix when you have an hour:
6. Add the CV PDF
7. Add portrait + field photos to about.html
8. Add OG meta tags and favicon across all pages

### Fix when you have the content:
9. Add expedition field notes — start with AT50-24 and AT50-12 (your two Alvin dives — most impressive)
10. Add research theme images
11. Fill in artist office photos
12. Add isopod costume + crushed cup photos

### Fix when you're ready to polish:
13. Mobile navigation (hamburger menu or bottom nav)
14. Accessibility (cursor, skip links, aria-labels)
15. Teaching/mentorship section
16. Press/media section
17. Google Scholar / ORCID links in about.html
18. Talks section on research.html
19. Auto-updating copyright year
