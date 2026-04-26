# Claude Code Handoff — Rebecca Wipfler Personal Website

## About the user

**Name:** Rebecca Wipfler  
**Role:** Deep-sea ecologist, PhD candidate, Caltech (Orphan Lab, Geological & Planetary Sciences)  
**Location:** Pasadena, CA  
**Contact:** rlwipfler@gmail.com

**Communication preferences:**
- Casual, direct tone — she types fast and informally, don't mirror back excessive formality
- Prefers you explain *why* before diving into code, especially for structural decisions
- Asks good design questions — engage with them seriously before building
- Will say "yes" or "ok lets do that" as a go-ahead — that's your cue to proceed
- Appreciates when you flag trade-offs ("here's why I'd do X instead of Y")
- Sometimes uploads screenshots to show you what she's seeing — take them seriously
- Wants to understand what's happening, not just have it fixed silently

---

## About the website

A personal academic/portfolio site for a deep-sea ecologist. The aesthetic is an ocean-depth metaphor — dark water background, bioluminescent particle effects, depth rail on the left, vertical navigation rail on the right. The whole site is a descent through ocean zones (Surface → Twilight → Midnight → Abyssal → Hadal).

**Tech stack:** Pure HTML/CSS/JS — no framework, no build step, no dependencies except:
- Google Fonts (Cormorant Garamond + JetBrains Mono)
- D3 v7.8.5 + TopoJSON v3.0.2 (expeditions.html globe only)
- world-atlas JSON from jsdelivr (expeditions.html globe only)

**File structure:**
```
your-site/
├── index.html          ← main scroll page, ocean animation, DSV Alvin cursor
├── about.html          ← bio, photos, CV download, quick facts
├── expeditions.html    ← interactive globe + depth chart of all 12 expeditions
├── research.html       ← 3 research theme cards, publications, outreach section
├── creative.html       ← artists she collects, field artifacts, project placeholders
├── live.html           ← links to official deep-sea ROV livestream hubs
├── site.css            ← shared CSS for all subpages (nav, background, particles, etc.)
├── particles.js        ← shared bioluminescent particle system (call: initParticles('biolum-layer'))
└── images/             ← DOES NOT EXIST YET — needs to be created when photos are added
    ├── about/
    │   ├── portrait.jpg
    │   └── field.jpg
    └── research/
        ├── incubation-system.jpg
        ├── methane-seep.jpg
        └── deepsee.jpg
```

**Navigation architecture:**
- `index.html` right nav: all 7 items scroll within page (anchors). Subpage links live in section h2 headers (clickable) and "Dive In" cards at the bottom of each section.
- Subpages: right nav has 7 items (↑ Surface, About, Expeditions, Research, Creative, Watch, Contact). "↑ Surface" is styled in biolum green to signal "go home."
- Each subpage has a "Dive Out · Return to Surface" pill button fixed at top-center.
- Left rail on subpages: thin spine with "↑ Surface" link and zone badge (e.g. "— Midnight Zone · Expeditions —")

**CSS variable system (defined in site.css):**
```css
--ink:    #d9e6f5   /* main text */
--ink-dim:#7892b5   /* secondary text */
--cyan:   #4fc8d8   /* interactive highlights */
--biolum: #6effd4   /* bioluminescent green, "go home" / special actions */
--amber:  #f0b030   /* warm accent */
--violet: #b090ff   /* creative section accent */
--border: rgba(79,200,216,0.12)
--panel:  rgba(5,14,32,0.55)
```

**Expedition type colour system (CSS classes in index.html):**
```css
.tag--alvin  /* dark red  — DSV Alvin dives */
.tag--rov    /* amber     — ROV cruises */
.tag--day    /* blue      — day cruises */
.tag--topic  /* teal      — topic tags (methane seeps, etc.) */
.tag--field  /* brown     — field research */
.exp-dot--alvin / --rov / --day   /* coloured dots in expedition list */
```

---

## What's done

### index.html
- Full ocean scroll experience with animated DSV Alvin sub following cursor
- Dive Mode toggle (darkens page, Alvin headlight illuminates creatures)
- Marine snow, bioluminescent particles, jellyfish, anglerfish, vampire squid, glow squid, shrimp, worm, eel
- Seafloor canvas with methane seep habitat (carbonate mound, tube worms, sea pig, flapjack octopus, isopod, pushcores)
- Scroll-based water column darkening (surface blue → abyssal black)
- Depth rail on left (0m → 6500m), custom cyan cursor dot
- 7-section layout: Hero, About, Expeditions (3 highlights), Research (full pub list), Creative, Watch, Contact
- Each of Expeditions/Research/Creative/Watch has a clickable h2 header + "Dive In" card linking to its subpage

### about.html
- Photo placeholders (uncomment `<img>` tags when photos are ready)
- CV download button (link: `cv/wipfler_cv.pdf` — file doesn't exist yet)
- 4-paragraph scientist bio + 1 human paragraph
- 8-cell vitals grid
- Profile links

### expeditions.html
- Interactive D3 globe (drag, zoom, hover tooltips, auto-rotate)
- Depth chart canvas showing all 12 expeditions by depth with animated seafloor creatures, hydrothermal vents, carbonate mound, pushcores
- Full expedition log (2015–2025)
- MAX_DEPTH = 6500m (matches index depth rail)

### research.html
- 3 research theme cards with image placeholders
- Full publications list (4 papers)
- Outreach section at `id="outreach"` — linked from index Research section

### creative.html
- 6 artist cards with dual image slots (Zoe Keller, NocturnalSea, and others)
- Field artifacts section (5 cards: isopod costume, crushed cups, 3D prints, workshop build, shelf collection)
- All image slots have `<img>` tags with local paths — images don't exist yet

### live.html
- 5 official ROV/deep-sea livestream hub cards (Nautilus Live, NOAA Okeanos, Schmidt Ocean, OceanX, YouTube)
- Featured embed slot (placeholder — ready for a YouTube embed)

---

## What still needs doing

### High priority
1. **Add photos** — about.html and research.html have placeholder `<img>` tags commented out. Uncomment and point to real image files once photos are in the `images/` folder.
2. **Add CV PDF** — `cv/wipfler_cv.pdf` doesn't exist yet. Create the folder and drop in the file.
3. **Embed a livestream** in live.html — the featured embed slot is a placeholder div. Replace with a YouTube `<iframe>` embed when there's an active expedition to feature.
4. **creative.html image paths** — all artist and project cards have `<img src="images/artists/...">` and `<img src="images/projects/...">` that are broken until images are added.

### Medium priority
5. **Press/media section** — if Rebecca gets any coverage or her work is mentioned in press, add a section to research.html or about.html
6. **Teaching/mentorship** — could add a card to about.html for TA experience, mentored students, etc.
7. **Expedition individual pages** — expeditions.html has click handlers that go to `expedition-[id].html` (e.g. `expedition-at5024.html`). These pages don't exist. Either build them or remove the click handler.

### Low priority / nice to have
8. **drawSeafloor() in index.html** is 317 lines — could be split into helper functions for readability but it works fine
9. **world-atlas JSON** in expeditions.html is fetched from jsdelivr CDN with no local fallback. Consider bundling it locally.
10. **OG meta tags** — no `<meta property="og:...">` tags for social sharing. Worth adding before any public launch.

---

## Known patterns to maintain

- **Never inline styles** in HTML content — use CSS classes. The tag colour system (`.tag--alvin` etc.) is the established pattern.
- **Shared CSS goes in site.css** — any style needed by 2+ subpages belongs there, not copy-pasted.
- **Particle system** — call `initParticles('biolum-layer')` after `<script src="particles.js"></script>`. The canvas must have `id="biolum-layer"`. creative.html previously used `biolum-canvas` — that was unified, don't reintroduce it.
- **index.html is self-contained** — it does NOT link to site.css. It has its own inline styles. Don't add a site.css link to it.
- **Font pairing:** Cormorant Garamond (serif, italic for headings) + JetBrains Mono (for labels, meta, UI elements). Don't introduce a third font.
- **Zone labels** follow ocean depth: Twilight Zone (200–1000m) → Midnight Zone (1000–4000m) → Abyssal Zone (4000–6500m) → Hadal Zone (>6000m). About page = Twilight, Expeditions = Midnight, Research = Abyssal, Creative = Abyssal, Watch = Hadal.
- **Dive In cards** on index use `.dive-in-card` class with `.dic-label`, `.dic-title`, `.dic-desc` children.
- **No JS frameworks** — vanilla JS only. No React, no Vue, no bundler.

---

## Content facts (for writing/editing copy)

- PhD candidate, 5th year, Caltech, Geological & Planetary Sciences
- Advisor: Victoria Orphan (Orphan Lab: orphanlab.caltech.edu)
- Dissertation: *In-situ Microbial Activity in the Deep Ocean*
- NSF Graduate Research Fellow 2020–2025
- BS Molecular & Cellular Biology, Summa Cum Laude, UIUC 2019
- Undergraduate research: Dr. Rachel Whitaker, NASA Astrobiology Institute, Yellowstone extremophiles (*Sulfolobus islandicus*)
- Ocean Exploration Trust alumna — E/V Nautilus intern (2017) → Science Manager in Training (2018–19)
- Nautilus Live profile: nautiluslive.org/people/rebecca-wipfler
- 12 expeditions, 5 research vessels, ~110 days at sea, max depth ~5,500m
- 2 HOV Alvin dives: AT50-12 (2023, Southern California) and AT50-24 (2025, Aleutian Islands)
- Publications: 4 (2 in 2025, 1 in 2024, 1 in 2019) — see research.html for full list
- Notable personal items: giant isopod Halloween costume (photographed at MBARI with real isopods), crushed cup art collection, deep-sea artist collection
