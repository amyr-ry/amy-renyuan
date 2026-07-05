# PastNext — Case Study Page

Folder structure (Amy's actual directory):

```
/case-studies/pastnext/
  index.html              ← this page (to be built)
  content.md              ← this file
  cover.png               ← hero image + Case Studies index thumbnail (Amy made this collage herself)
  Fizzib/
    1.jpg   ← cover slide
    2.jpg   ← PDP structure plan
    3.jpg   ← visual/copy tone direction
    4.jpg   ← example competitor teardown
  Jiaguoyuan/
    1.jpg   ← market trend research
    2.jpg   ← "TA Voice" consumer sentiment analysis
    3.jpg   ← 5-brand competitor comparison table
    4.jpg   ← KFS budget allocation matrix
  doTERRA/
    1.jpg   ← May WeChat performance overview
    2.jpg   ← May KPI summary + optimization takeaways
    3.jpg   ← July trend-keyword research
    4.jpg   ← July content calendar
  Ostelin/
    press-release.docx   ← no deck for this client — embed as scrollable text, same pattern as AMG's workbook
```

(`SELECTION_NOTES.md` was my own working file for picking images — not needed by Claude Code.)

---

## Case Study Statement

*(Use this text verbatim. Bullets, not prose. This internship was 4 years ago during Amy's freshman year, and every deliverable below was a team effort, not solo work — the copy must say so plainly and matter-of-factly, not as a disclaimer.)*

### Hero

**Eyebrow:** Case Study 03

**Title:** PastNext

**Role line:** Account Department Intern · PAST|NEXT® Communications, Shanghai · Jun–Jul 2023

**One-liner:** Four industries, eight weeks, freshman year — the fastest I've ever had to learn.

**Small meta line (secondary, muted — scope, not a performance stat):** 4 client categories · supplements, beverage, wellness, health

### Context

- **Joined as a freshman account-department intern** at a mid-size agency, supporting a rotating set of brand clients at once
- **Landed in four unrelated categories in two months** — a vitamin brand, a beverage brand, a wellness brand, and a health brand — with a new set of category facts to learn each time
- **Every deliverable below was a team effort** — account leads, creative, and I all had a hand in these; I contributed research, competitive analysis, and drafts

### Client 1 — Fizzib (Cenovis, B-vitamin effervescent tablets)

- **Built a competitive teardown across four rival B-vitamin brands**, mapping taste, coating, and sweetener differences
- **Translated the product's actual formulation advantages** — a cyclodextrin-based technique for masking bitterness, a different disintegrant for the fizz — into claims a shopper would actually understand
- **Structured the full product detail page**, section by section, from hero claim to brand credibility

*(4-image highlight strip: `Fizzib/1.jpg`–`4.jpg`)*

### Client 2 — Jiaguoyuan (coconut water, Xiaohongshu marketing plan)

- **Researched category growth trends** and pulled consumer sentiment straight from real reviews and comments
- **Benchmarked five competing coconut water brands** on positioning, spokespeople, and claims
- **Recommended a KOL/paid-media budget split** tailored to the brand's early growth stage

*(4-image highlight strip: `Jiaguoyuan/1.jpg`–`4.jpg`)*

### Client 3 — doTERRA (essential oils, WeChat reporting + content calendar)

- **Reported on a month of WeChat performance** — which posts drove reads, shares, and follower growth, and why
- **Mapped the next month's content calendar** around seasonal and cultural moments, backed by competitor and reference-case research

*(4-image highlight strip: `doTERRA/1.jpg`–`4.jpg`)*

### Client 4 — Ostelin (bone health, event press release)

- **Wrote the press release** for a bone-health activation event featuring actor Huang Xuan and JD Health

*(Embed full press release text below, scrollable panel — see Build Instructions)*

### Closing

Four industries, eight weeks, one instinct: learn the category fast enough to sound like you've always been in it.

---

## Assets

| Asset | Path | Use |
|---|---|---|
| Cover / hero image | `cover.png` | Hero background + Case Studies index thumbnail |
| Fizzib highlights 1–4 | `Fizzib/1.jpg`–`4.jpg` | Highlight strip, Client 1 |
| Jiaguoyuan highlights 1–4 | `Jiaguoyuan/1.jpg`–`4.jpg` | Highlight strip, Client 2 |
| doTERRA highlights 1–4 | `doTERRA/1.jpg`–`4.jpg` | Highlight strip, Client 3 |
| Ostelin press release | `Ostelin/press-release.docx` | Embedded scrollable text panel, Client 4 (no images for this one) |

---

## Build Instructions for Claude Code

**Page chrome / typography:** same system as About/Art/Algood/AMG — no new spec needed.

**Layout, top to bottom:**

1. **Hero** — `cover.png` as hero background. Eyebrow, title "PastNext", role line, one-liner as subhead. Small muted meta line underneath (scope, not a stat row — no big numerals on this page, there's no clean growth metric to lead with here and it shouldn't be invented).

2. **Context** — bullet list.

3. **Four client sections, presented as a consistent repeating pattern** (heading + bullets + 4-image highlight strip, same rounded-card treatment as Algood/AMG's highlight strips) for Fizzib, Jiaguoyuan, and doTERRA. For Ostelin, keep the same heading + bullet pattern, but swap the image strip for an embedded scrollable text panel containing the actual press release content (extract from `Ostelin/press-release.docx` and render as styled HTML in a fixed-height scrollable div — same technique as AMG's workbook embed).

4. **Closing** — one-line closing statement.

**Visual variety note:** three of the four client sections share the same highlight-strip format by design — this page's differentiator is the four-industries breadth, not visual novelty per section. It's fine for this page to be more uniform than AMG's; don't force four different visual motifs here. The Ostelin section's text-panel treatment is the one deliberate variation, since it doesn't have images.

**Interaction:** highlight strip images click to view larger (lightbox or new tab). No carousel.

**Index page:** use `cover.png` as the PastNext thumbnail in the Case Studies 2×2 grid, replacing its "coming soon" placeholder.

**Responsive:** meta line and hero collapse normally on mobile; 4-image strips go from 4-across to 2×2 to single column; Ostelin's text panel keeps its internal scroll on mobile.

---

## Notes for Amy

1. No stat row on this page — unlike Algood and AMG, there's no clean, honest growth number to lead with for a 2-month freshman-year internship, so I didn't force one. The "4 client categories" meta line carries the scope instead.
2. Team credit is stated plainly in Context and doesn't need repeating in every client section — let me know if you'd rather it appear again per-client.
3. Ostelin is the one structurally different section on this page (text panel instead of image strip) — that's intentional given what actually exists, not an oversight.
