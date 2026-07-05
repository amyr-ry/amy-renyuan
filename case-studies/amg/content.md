# AMG (Ashford Media Group) — Case Study Page

Folder structure (Amy's actual directory):

```
/case-studies/amg/
  index.html                    ← this page (to be built)
  content.md                    ← this file
  cover.png                     ← Instagram grid screenshot (confirmed PNG)
  workbook.pdf                  ← content strategy doc: pillars, hashtag strategy, weekly tips, Expert Insights questions
  linkedin.pdf                  ← LinkedIn pivot strategy: content pillar remap, IG-vs-LinkedIn framing, 3-phase rollout
  notion/
    1    ← "A reusable page for every client" (client-page template)
    2    ← "Automated the client kickoff"
    3    ← "Automated influencer follow-ups"
    4    ← "Meeting notes sync into Notion"
  client/
    v2.png                      ← Father's Day social post collage
    Webinar-3.png                ← law firm webinar promo graphic
    5.png                        ← nonprofit donation campaign graphic
    Julia Schick.png             ← spokesperson/client card
    Screenshot ...13.45.28.png   ← G Herbo release graphic
    Screenshot ...13.44.20.png   ← Frank Rello release graphic
```

**Video:** Expert Insights Reel is hosted on Vimeo (embed code in Build Instructions, Section A).

**No PDF download for the Notion section** — internal ops detail stays screenshots-only.

---

## Case Study Statement

*(Use this text verbatim. Bullets, bold lead phrase per bullet — same convention as Algood. This page should read more storytelling-forward than Algood's data-driven tone; let section intros carry voice, keep bullets factual.)*

### Hero

**Eyebrow:** Case Study 02

**Title:** AMG

**Role line:** Digital Marketing & Strategy Intern · Ashford Media Group, Chicago, IL · Mar 2025 – Present

**One-liner:** I walked into an agency with no content system and no story. I built both.

**Small stat line (secondary, muted, not a big numeral callout):** 50+ posts written and produced · 1,300+ followers · 9,000+ reach in four months

### Section A — Building AMG's Content Engine

- **Audited the agency's positioning from scratch** — there was no content system in place when I joined
- **Designed a three-pillar content framework**: recurring formats — BTS, artist spotlights, weekly highlights — for consistency, built out with a full hashtag and cadence strategy
- **Added a fourth pillar I originated myself: Expert Insights** — a thought-leadership interview series, not something I was assigned. I wrote every discussion question across four thematic tracks (Intentional Branding, PR & Social Impact, Direct-to-Fan Growth, Experiential Marketing) — 16 weeks of original content — and produced the video content
- **Wrote and scheduled the content calendar** across AMG's own accounts, working from assets the team provided

**[Embed: Expert Insights video — see Build Instructions]**

**[Embed: full "workbook.pdf" content below, scrollable — the actual planning document]**

**[Button: "See it live on Instagram" → https://www.instagram.com/ashfordmedia/]**

### Section B — Pivot & Expansion: Rebuilding for LinkedIn

- **The numbers didn't land** — strong effort, but Instagram underperformed relative to what the series deserved
- **Remapped the same pillar system for a different platform and a different audience**: Monday industry tips, Wednesday Expert Insight (rewritten for a B2B tone), Friday client-results roundups
- **Sequenced a three-phase rollout** — foundation and credibility first, consistent posting and targeted outreach second, long-form thought leadership third
- **Honest note:** this is the strategy I designed before my time at AMG wrapped up. I didn't get to see it fully play out, so I'm not claiming results here.

**[Embed: full "linkedin.pdf" content, or a distilled visual remap — see Build Instructions]**

### Section C — Rebuilding the Agency's Operating System in Notion

- **Redesigned the entire agency HQ**: task views that auto-hide completed work, a cleaned-up client roster, reusable client-page templates, an automated client-kickoff form, and a new PR tracker
- **Went beyond the rebuild** — authored a full audit and 4-week roadmap for deeper automation and AI integration (meeting notes flowing in automatically, two-way Slack sync, automated archiving, cross-database client views, email-to-database pipelines), mapping what's possible today versus what needs more tooling, and sequencing a realistic build plan
- **Systems thinking applied inward** — not client-facing content, but the infrastructure that makes everything else repeatable

*(4-image highlight strip below — see Assets table)*

### Section D — Beyond AMG's Own Accounts

Alongside AMG's own channels, I managed and produced content end-to-end for 10+ additional clients spanning music, nonprofit, legal, and consumer brands.

*(6-image gallery below — see Assets table)*

### Closing

Systems and stories aren't opposites. Build the right one, and the other takes care of itself.

---

## Assets

| Asset | Path | Use |
|---|---|---|
| Cover / hero image | `cover.png` | Hero background + Case Studies index thumbnail |
| Content strategy doc | `workbook.pdf` | Embedded scrollable panel, Section A |
| LinkedIn strategy doc | `linkedin.pdf` | Embedded scrollable panel or distilled visual, Section B |
| Expert Insights video | Vimeo ID 1207183918 | Embedded video, Section A |
| Notion highlights 1–4 | `notion/1`–`notion/4` | Framed-screenshot strip, Section C |
| Client gallery 1–6 | `client/*.png` (6 files, see folder structure) | Contact-sheet style mosaic, Section D |

---

## Visual Direction (this is the "make it not boring" section — read before building)

Amy's site uses an editorial, quote-forward aesthetic (wine/burgundy `#6e2436`, generous whitespace, pull-quote treatment on the About page). For this page, avoid repeating the same "image card with shadow" pattern for every section — each section here has a different kind of asset, so give each a distinct visual language:

**Section A — literal "pillar" motif.** She built a three-pillar framework, then added a fourth. Render this as an actual set of vertical columns/cards side by side (like short stone pillars or simple vertical bars), three in a consistent muted style for the recurring formats (BTS / Spotlights / Weekly Highlights), and a fourth pillar visually distinguished — taller, accent color, or elevated — for Expert Insights, since she originated it herself. The Vimeo video and the workbook embed can sit directly inside or just below that fourth pillar's card, so the "signature pillar" visually contains its own proof.

**Section B — a remap, not a re-list.** Since this section is literally about translating one system into another platform, show it as a simple two-column or side-by-side "IG pillar → LinkedIn pillar" mapping (arrows between the two), followed by a horizontal 3-step timeline for the phased rollout (Phase 1 → 2 → 3, small icons or numbered nodes on a line). This reuses the pillar/structure motif from Section A but shows it being transformed, which ties the two sections together visually.

**Section C — frame screenshots like software, not like photos.** These are Notion UI screenshots, not lifestyle images — wrap each in a simple browser/app window frame (thin rounded-top bar with 3 small dots, like a macOS window chrome) rather than a plain photo card. This signals "this is a tool I built," distinct from the editorial photo treatment elsewhere on the site.

**Section D — a contact-sheet / wall-of-work mosaic, not a clean grid.** This section's whole point is volume and range. A slightly denser, contact-sheet-style mosaic (small variation in card size, tighter gaps, maybe a slight rotation on 1-2 images) reads as "here's the breadth of work" more than a uniform grid does. Keep it clean enough to stay on-brand, but let it feel more like a wall than a spreadsheet.

Keep all four treatments within the same overall color/type system — the goal is variety in structure and framing, not four unrelated visual styles.

---

## Build Instructions for Claude Code

**Page chrome / typography:** same system as About/Art/Algood.

**Layout, top to bottom:**

1. **Hero** — `cover.png` as hero background. Eyebrow, title "AMG", role line, one-liner as subhead (carries the storytelling tone). Small muted stat line underneath — not a big-numeral row like Algood's.

2. **Section A** — heading, bullet list, then the **pillar visual** (see Visual Direction above): 3 muted pillar cards (BTS / Spotlights / Weekly Highlights) + 1 elevated/accented pillar card (Expert Insights) containing the Vimeo embed:
   ```html
   <div style="padding:75% 0 0 0;position:relative;">
     <iframe src="https://player.vimeo.com/video/1207183918?badge=0&autopause=0&player_id=0&app_id=58479"
       frameborder="0"
       allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
       referrerpolicy="strict-origin-when-cross-origin"
       style="position:absolute;top:0;left:0;width:100%;height:100%;"
       title="Expert Insights Shoot_Reel 1">
     </iframe>
   </div>
   <script src="https://player.vimeo.com/api/player.js"></script>
   ```
   Below the pillars, an embedded scrollable panel with `workbook.pdf`'s text content (extract and render as styled HTML in a fixed-height scrollable div, not a static image or raw PDF viewer). Then the Instagram button: "See it live on Instagram" → `https://www.instagram.com/ashfordmedia/`, new tab.

3. **Section B** — heading, bullet list, then the **pillar-remap visual**: IG pillar → LinkedIn pillar mapping (arrows), then a horizontal 3-phase timeline. Optionally embed `linkedin.pdf` content in a scrollable panel below, same treatment as workbook.pdf in Section A (or just the visual remap if that's sufficient — use judgment on whether both together is redundant).

4. **Section C** — heading, bullet list, then **4 screenshots each in a browser-window frame** (rounded top bar, 3 dots, per Visual Direction), arranged in a strip/grid. No PDF download.

5. **Section D** — one-line intro, then the **6-image contact-sheet mosaic** (varied size/slight rotation, denser gaps) using `client/*.png`.

6. **Closing** — one-line closing statement.

**Interaction:** all image assets click to view larger (lightbox or new tab). No carousel anywhere on this page.

**Index page:** use `cover.png` as the AMG thumbnail in the Case Studies 2×2 grid, replacing its "coming soon" placeholder.

**Responsive:** pillars stack vertically on mobile (keep Expert Insights pillar visually distinct even when stacked); remap/timeline collapses to a vertical sequence; browser-framed screenshots go from strip to 2×2 to single column; mosaic collapses to a simple 2-column then 1-column grid, dropping the rotation effect on mobile (keep it simple at small sizes).

---

## Notes for Amy

1. Restructured per your note: Expert Insights now lives inside Section A as the fourth pillar (not a separate section), since that's how it actually existed in your real content system. Section B is now specifically the LinkedIn pivot.
2. I leaned into a distinct visual idea per section (pillars / remap / software-frame screenshots / contact-sheet mosaic) instead of repeating the same card-grid four times — flag it if any of these feels like too much production work for Claude Code to execute well; the fallback is a plainer version of each but I'd try the fuller version first.
3. Didn't include the AMG HQ Automation/AI audit PDF as a download — still folded into Section C bullets. Say the word if you want it added back as a link.
4. Cover file confirmed as `cover.png`.
