# Additional Case Studies — content.md
(Camal / Law School / SMG / CSSS — four lightweight case studies, each gets its own page)

**Important: this is one shared reference document, not a single-page spec.** Camal, Law School, SMG, and CSSS are four fully independent case study pages, each with its own `index.html` in its own folder (see folder structure below). They just happen to be documented together in one file since each is short enough that a separate content.md per page would be overkill. Build four separate `index.html` files — do not merge these into one scrolling page or a tabbed/accordion single page. Each "Section" below (1–4) maps to exactly one folder, one page, one URL.

**Template for all four (read once, applies to every page below):**
- One screen, no scrolling saga. Header (title + role line) → Context (3–5 bullets) → 1–2 assets inline (CSSS is the one exception, at 4 photos — see Section 4). That's the whole page.
- No Project 1/2/3 split, no Early Signals, no PDF download, no closing statement.
- Apply the site-wide full-width-text fix (from the earlier instructions doc) from the start — no narrow-column-with-empty-space layout.
- Keep visual treatment consistent with the main case studies (burgundy palette, Georgia-family type) but noticeably lighter/quieter — these read as supporting material, not flagship work, and the page should feel that way at a glance without being sloppy.

Folder structure (Amy's actual directory — content.md sits directly in `/case-studies/`, each subfolder becomes its own page):

```
/case-studies/
  content.md               ← this file

/case-studies/camal/
  index.html               ← page to build
  (video hosted on Vimeo, see Section 1 Build Instructions)

/case-studies/law-school/
  index.html               ← page to build
  (video hosted on Vimeo, see Section 2 Build Instructions)
  benchmark-1.png           ← rows 1–6 of website benchmarking research
  benchmark-2.png           ← rows 7–12 of website benchmarking research

/case-studies/smg/
  index.html               ← page to build
  (video hosted on Vimeo, see Section 3 Build Instructions)

/case-studies/csss/
  index.html               ← page to build
  Screenshot_2024-08-25_at_5_40_01_PM.png    ← welcome mixer, balloon photo
  111724622616__pic_hd.jpg                    ← CSSS 2023 Voice of UVA
  131724622705__pic_hd.jpg                    ← CSSS 2024 Spring Festival Gala
  151724622825__pic_hd.jpg                    ← traditional music performance
```

---

## Section 1 — Camal

### Case Study Statement

**Title:** Camal

**Role line:** Sales and Marketing Intern · CAMAL Group · Jul 2024 – Oct 2024 · Remote

**Context**
- Camal is a Singapore-headquartered company with offices across mainland China, Southeast Asia, and Africa — functioning like an agency for Chinese-to-Africa trade, moving heavy machinery (tractors, industrial equipment) and chemicals into African infrastructure markets
- Executed email marketing campaigns and managed CRM workflows in Zoho Vault, moving leads through the pipeline
- Produced 10 YouTube videos end to end — concept to final edit — averaging 800 views each
- **The real constraint was language, not product complexity**: most African client contacts weren't fluent in English, so outbound copy had to be written at an elementary reading level without losing credibility — while still selling serious industrial equipment. Calibrating technical B2B messaging to actual audience literacy, not assumed sophistication.

### Assets

| Asset | Path | Use |
|---|---|---|
| Company video | Vimeo ID 1208240932 | Embedded video, only asset on this page |

### Build Instructions

- Header, context bullets, video embedded below. That's the full page.
- No secondary image needed — one strong asset is enough here, don't pad it with a placeholder screenshot.

```html
<div style="padding:75% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/1208240932?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="CAMAL company video">
  </iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
```

---

## Section 2 — Law School (UChicago Law, Communications Office)

### Case Study Statement

**Title:** UChicago Law School — Communications Office

**Role line:** Communications Office Intern · The University of Chicago Law School · Jun 2026 – Present

**Context**
- Part-time role, started June 2026 — unrelated to the law firm client work covered elsewhere on the site; this is in-house communications for the law school itself
- Produced and edited short-form video content for the school's social channels, shifting from a static-post approach to video-first content with branded title and end cards
- Compiling a yearbook-style publication for the school — structuring and organizing a large volume of information, a lower-lift organizational task included here for range
- Benchmarked 15 top-ranked U.S. law school websites — navigation design, visual hierarchy, information architecture — to inform recommendations for an upcoming UChicago Law website redesign
- **Honest framing:** less than a month into this role. Included here for range, not positioned as a flagship deliverable.

### Assets

| Asset | Path | Use |
|---|---|---|
| Reel | Vimeo ID 1208242396 | Embedded video |
| Benchmarking excerpt 1 | `benchmark-1.png` (rows 1–6, Stanford through Harvard) | Static image, side-by-side pair |
| Benchmarking excerpt 2 | `benchmark-2.png` (rows 7–12, Duke through Vanderbilt) | Static image, side-by-side pair |

### Build Instructions

- Header, context bullets, video embedded above.
- Below the video, the two benchmarking screenshots placed side by side (horizontal pair, not stacked) — together they read as one continuous excerpt of the research table, split across two images for legibility.
- Do not embed or link the raw `.xlsx` file.

```html
<div style="padding:75% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/1208242396?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="America 250_Reel 1_V2">
  </iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
```

---

## Section 3 — SMG (Shanghai Media Group)

### Case Study Statement

**Title:** Shanghai Media Group (SMG)

**Role line:** Local News Department Intern · Shanghai Media Group · Jun 2025 – Aug 2025

**Context**
- Shanghai's largest traditional media outlet — supported a live news broadcast airing twice weekly
- Produced and reported on 20+ stories aired during prime time, including investigative coverage on government accountability
- Extended broadcast content into short-form video and WeChat distribution — one piece reached 10K+ views
- **The discipline here was different from project-based work**: weekly live production meant revising and resubmitting stories against tight, recurring deadlines, not a single project cycle — iterative persistence under real time pressure

### Assets

| Asset | Path | Use |
|---|---|---|
| WeChat video | Vimeo ID 1208241690 | Embedded video, only asset on this page |

### Build Instructions

- Header, context bullets, video embedded below. Full page.
- **This video is vertical (9:16, portrait)** — do not force it into the same wide 16:9/4:3 container used for Camal and Law School. Use a portrait aspect-ratio container so the video isn't letterboxed or cropped, and keep it narrower/centered on the page rather than stretched full-width.

```html
<div style="padding:177.78% 0 0 0;position:relative;max-width:360px;margin:0 auto;">
  <iframe src="https://player.vimeo.com/video/1208241690?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="SMG视频号">
  </iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
```

---

## Section 4 — CSSS (Chinese Students and Scholars Society, UVA)

### Case Study Statement

**Title:** CSSS — Chinese Students and Scholars Society

**Role line:** Activities Dept. Member → Dept. Head → Internal Vice President · CSSS, University of Virginia · Aug 2022 – May 2024

**Context**
- Three-year arc: activities department member (year 1) → department head (year 2) → Internal Vice President (year 3)
- Kept the VP role even after transferring to UChicago — flew back for every major event rather than stepping down
- **As Internal Vice President**: spearheaded internal operations across HR, project, and event management, as well as WeChat Official Account operations — coordinating across five departments and 50 members
- Ran 6 major events a year, 200+ attendees each, owning venue, staffing, procurement, logistics, and visual direction end to end
- Flagship events across the three years: a welcome mixer, a talent-show-style program, a Spring Festival Gala, and a Mid-Autumn garden party

### Assets

| Asset | Path | Use |
|---|---|---|
| Welcome mixer photo | `Screenshot_2024-08-25_at_5_40_01_PM.png` | Static image — casual/orientation energy, class-year balloons |
| Voice of UVA photo | `111724622616__pic_hd.jpg` | Static image — talent-show program, titled on screen |
| Spring Festival Gala photo | `131724622705__pic_hd.jpg` | Static image — flagship formal produced event |
| Music performance photo | `151724622825__pic_hd.jpg` | Static image — live traditional performance, stage production |

### Build Instructions

- Header, context bullets, then all four photos as a single row/grid (2×2 on smaller screens) — not a carousel, not a stacked column. These four should read as a quick visual survey of "the range of events across three years," not a gallery to click through.
- No PDF, no captions needed beyond what's already visible in-frame (e.g., the Voice of UVA and Spring Festival Gala photos already have their event names on-screen).

---

## Notes for Amy

1. **Law School benchmark screenshots** — referenced as `benchmark-1.png` and `benchmark-2.png` in the assets table. Save your two screenshots into the `law-school` folder under those names (or whatever names you actually use — CC should be able to match them either way).
2. All four pages intentionally skip the "Early Signals" / PDF / closing-statement pattern used on the main four case studies — these are meant to read as lighter supporting material, not equal-weight flagship work.
