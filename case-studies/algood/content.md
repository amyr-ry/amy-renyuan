# Algood — Case Study Page (Flagship)

Folder structure (already organized by Amy — Claude Code should read paths exactly as below):

```
/case-studies/algood/
  index.html          ← this page (to be built)
  content.md          ← this file
  cover.jpg            ← hero image + Case Studies index/preview thumbnail (= Brand/3)
  Rufus/
    Rufus.pdf          ← full 15-page research deck (download only, not embedded)
    1                  ← research highlight (search/query interaction screenshot)
    2                  ← research highlight (search/query interaction screenshot)
    3                  ← synthesis — dark "INSIGHTS" slide, numbered takeaways
    4                  ← output example — Q&A card
  Brand/
    brand.pdf          ← full 7-page brand deck (download only, not embedded)
    1                  ← research — competitive benchmark slide
    2                  ← synthesis — dark "direction" slide, numbered takeaways
    3                  ← output — Brand Focus Image module (also used as cover.jpg)
    4                  ← output — Brand Q&A module, 4 cards
```

**Note on file extensions:** Amy's files are numbered without extensions shown in her file manager — read whatever the actual extension is on disk (jpg/png) when wiring up `<img>` tags.

---

## Case Study Statement

*(Use this text verbatim — do not rewrite or paraphrase further. This is a case study, not an artist statement — bullets, not prose. Bold the lead verb/phrase in each bullet as shown, so it's scannable in 5 seconds.)*

### Hero

**Eyebrow:** Case Study 01 · Flagship

**Title:** Algood

**Role line:** Cross-Border Marketing Consultant · Algood | Lgyorway · Jan 2026 – Present

**One-liner:** Turning a shopper's question into a search signal.

**Skill tags (small chips under the one-liner):** AI Search Optimization · Competitive Benchmarking · Brand Identity Systems · Bilingual Copywriting

**Stat row (large numbers, small labels):**
- $229.9K — revenue, trailing 12 months (+407% YoY)
- 703 — units sold, trailing 12 months (+406% YoY)

**Stat caption (small, muted text directly under the stat row — this line matters, do not drop it):** Store-wide performance during the engagement period, shown for context.

### Context

- **Owned U.S. market entry strategy** and brand positioning for Lgyorway, a Chinese industrial equipment brand
- **Ran two parallel workstreams:** get Amazon's AI shopping assistant (Rufus) to recommend the product to the right buyer, and reposition a brand page that read as consumer lifestyle into one that reads as industrial equipment

### Section A — Rufus Research → Production Q&A Copy

- **Mapped real user queries** into Rufus at three touchpoints: the search bar, competitor product pages, and our own product page
- **Tested hypotheses directly** by querying Rufus and reading how it responded
- **Found the signal:** scene-based queries ("what's this for," "who's this good for") drove more relevant, more confident recommendations than plain keywords
- **Wrote 6 new Q&A entries** built around keyword + use scenario + reason, pre-empting the objections (installation, durability, use case) that would otherwise stall a recommendation
- **Built the insight into a live listing optimization framework**, not a one-off fix

**[View highlights below → full research deck available as PDF: `Rufus/Rufus.pdf`]**

### Section B — Brand Story Redesign

- **Flagged by my manager:** the brand page read as a consumer lifestyle product, not industrial equipment
- **Benchmarked category leaders** (DeWalt) to define the direction
- **Translated direction into a visual system:** orange-and-steel palette, logo redesign (dropped a mismatched heart icon), new Focus Image module, new Q&A module addressing safety and durability
- **Built and shipped** the final assets live on Amazon

**[View highlights below → full brand deck available as PDF: `Brand/brand.pdf`]**

### Closing

Both pieces come from the same instinct: figure out what the platform — or the person — is actually asking, then answer it in the shape they need.

---

## Assets

| Asset | Path | Use |
|---|---|---|
| Cover / hero image | `cover.jpg` (same file as `Brand/3`) | Hero background on this page AND the preview thumbnail on the Case Studies index/hero page |
| Rufus highlight 1 | `Rufus/1` | Research — query/search interaction screenshot |
| Rufus highlight 2 | `Rufus/2` | Research — query/search interaction screenshot |
| Rufus highlight 3 | `Rufus/3` | Synthesis — numbered insight takeaways (dark slide) |
| Rufus highlight 4 | `Rufus/4` | Output example — Q&A card |
| Brand highlight 1 | `Brand/1` | Research — competitive benchmark |
| Brand highlight 2 | `Brand/2` | Synthesis — numbered direction points (dark slide) |
| Brand highlight 3 | `Brand/3` | Output — Brand Focus Image module (also doubles as cover/hero) |
| Brand highlight 4 | `Brand/4` | Output — Brand Q&A module, 4 cards |
| Rufus full deck | `Rufus/Rufus.pdf` | Download-only, linked from a button, not embedded |
| Brand full deck | `Brand/brand.pdf` | Download-only, linked from a button, not embedded |

Images should already be web-sized; if any came straight from a raw export and are large/uncompressed, downscale to ~1600px wide and compress before shipping — check file sizes before committing.

---

## Build Instructions for Claude Code

**Page chrome / typography:** follow the same design system already established for the About/Art pages — no separate instructions needed here.

**Layout, top to bottom:**

1. **Hero** — `cover.jpg` as hero background/image. Eyebrow tag, title "Algood", role line below it, one-liner as a subhead, then a row of small skill-tag chips (pill-shaped, muted background, not competing visually with the stat row below). Below that, the stat row: two large numbers side by side, each with a small label underneath and the YoY figure as a smaller inline note. Directly under the stat row, render the stat caption in small muted text — this is a credibility signal, not filler, do not drop it or bury it.

2. **Context** — bullet list, bold lead phrase per bullet per the spec above.

3. **Section A (Rufus Research)** — heading, bullet list (bolded lead phrases), then a **4-image highlight strip**: horizontal row on desktop (single column stack on mobile) of `Rufus/1` through `Rufus/4`, each in a rounded card with subtle shadow, same treatment as the Art section's image cards. Below the strip, a download link: "View full research deck (PDF)" → `Rufus/Rufus.pdf`, opens in a new tab.

4. **Section B (Brand Story)** — same pattern: heading, bullet list, 4-image highlight strip using `Brand/1` through `Brand/4`, download link "View full brand deck (PDF)" → `Brand/brand.pdf`.

5. **Closing** — the one-line closing statement, set apart as a page-ending beat.

**Highlight strip interaction:** static 4-up grid/row, click to open larger (lightbox or new tab). No slideshow/carousel — deliberately using curated highlights + PDF download instead of a full-deck viewer.

**Index / Case Studies hero page:** use `cover.jpg` (`Brand/3`) as the Algood preview thumbnail, consistent with using it as this page's hero.

**Responsive:** stat row stacks vertically on mobile; skill tags wrap to multiple lines if needed; highlight strips go from 4-across to 2x2 to single column as viewport narrows.

---

## Notes for Amy

1. Role line pulled from your resume bullet (Jan 2026 – Present).
2. Added a **stat caption** under the revenue numbers — defuses the Algood-attribution question before an HR reader has to ask it. Keep it even though it's tempting to cut.
3. Added a **skill tag row** under the one-liner so a skimming reader categorizes your competencies in one glance.
4. Bolded the lead phrase of every bullet for scannability.
5. I described `Rufus/1` and `Rufus/2` generically as "research highlights" since I can't confirm exactly which two research slides you kept in that spot after reorganizing — Claude Code will see the actual images and can caption more precisely if needed; flag it to CC if the captions need adjusting once it's built.
6. Still no slideshow/carousel — curated highlights + PDF download, as decided.
