# Creator Content — Case Study Page

Folder structure (Amy's actual directory):

```
/case-studies/自媒体/
  index.html          ← this page (to be built)
  content.md           ← this file
  美食号1.PNG           ← Douyin content grid screenshot
  美食号2.PNG           ← content calendar screenshot
  个人号1.PNG           ← RedNote profile summary (309 followers / 855 likes & saves)
  个人号2.PNG           ← RedNote note: Santa Monica + Malibu day-trip guide
  个人号3.PNG           ← RedNote note: Joshua Tree day-trip guide
```

**Videos:** both hosted on Vimeo (embed codes in Build Instructions, Sections A & B).

**No PDF download on this page** — this isn't a client deliverable, there's no formal doc to hand over.

---

## Case Study Statement

*(Use this text verbatim. Bullets, bold lead phrase per bullet — same convention as Algood/AMG. This page should read more personal and lower-key than either of those — no hero stat row, let the honesty carry it.)*

### Hero

**Eyebrow:** Case Study 04

**Title:** Creator Content

**One-liner:** No growth target, no dashboard driving the calendar — just two accounts, built anyway.

**Small stat line (secondary, muted, not a big numeral callout):** Two accounts, launched June 2026, still early

### Intro — Why This Exists

- **A personal experiment, not a client engagement**
- Started both accounts in **June 2026, right after graduation** — the goal was to document daily life and help a few people along the way
- **别饿着!!!** (Douyin, food) launched late June 2026; **Amyr_ry** (RedNote, personal) had been mostly dormant for about a year before being relaunched the same month
- Everything below is early-stage and shown with full context, not cherry-picked

### Section A — Amyr_ry (RedNote): Content Range

- Personal account covering both travel vlogs and practical, guide-style posts — same voice, two different formats
- Featured notes: a Santa Monica + Malibu day-trip guide and a Joshua Tree day-trip guide, both written first-person with specific, practical detail (exact timing, entry logistics, real warnings like "wear boots near the cactus")
- **Guide-style posts consistently outperform vlog-style posts on this platform** — an early but concrete read on what this platform's audience actually wants

**[Embed: convocation video — see Build Instructions, Section A]**

**[Image: 个人号2.PNG + 个人号3.PNG side by side — the two guide notes]**

### Section B — 别饿着!!! (Douyin): AI-Assisted Production System

- Persona, tone, and content direction are entirely self-directed — the voice, the recipes, the daily rhythm
- Filming and editing done solo, every dish, every day
- **Daily posting created a real bottleneck**: writing captions from scratch, every day, wasn't sustainable
- Solution: turned her own voice into a reusable template, then had AI draft caption copy off that template — **AI drafts, she edits and approves**. It saves time, not creativity
- Same underlying method as the "train the AI on brand voice first" approach used in client work, applied here to her own account instead

**[Embed: 028 video — see Build Instructions, Section B]**

**[Image: 美食号2.PNG — the content calendar, the actual paper trail behind the system]**

### Section C — Early Signals

*(Honest framing — early-stage, not a growth case. Completion rate included on purpose.)*

- Douyin backend, 7-day snapshot vs. comparable creators in the same category:
  - Views: outperforming 93.56% of comparable creators
  - Engagement rate: 4.6% vs. 2.7% category average
  - Posting volume: 7 vs. 2
  - Net follower growth: +18 vs. +2
  - Completion rate: 1.5% vs. 12.3% category average — **trailing, and flagged here as the next thing to work on, not hidden**
- RedNote: 309 followers, 855 likes & saves as of early July 2026

**[Image: 个人号1.PNG — RedNote profile summary]**
**[Image: 美食号1.PNG — Douyin content grid, as a volume/consistency visual]**

### Closing

Still early. No idea where either account goes from here — but the system behind them already works.

---

## Assets

| Asset | Path | Use |
|---|---|---|
| convocation video | Vimeo ID 1208210741 | Embedded video, Section A |
| 028 video | Vimeo ID 1208211595 | Embedded video, Section B |
| RedNote profile summary | `个人号1.PNG` | Section C (Early Signals) |
| RedNote note — Santa Monica + Malibu | `个人号2.PNG` | Section A |
| RedNote note — Joshua Tree | `个人号3.PNG` | Section A |
| Douyin content grid | `美食号1.PNG` | Section C (Early Signals) |
| Content calendar | `美食号2.PNG` | Section B |

---

## Visual Direction (read before building)

This page should feel more intimate and lower-production than Algood or AMG — it's personal work, not a client deliverable, and the visual treatment should say that without saying it out loud. Avoid the "image card with shadow" default here too; each section gets its own logic:

**Section A — RedNote notebook feel.** RedNote's whole visual identity is the note card. Instead of framing the two guide screenshots as generic image cards, let them overlap slightly like a real feed — small rotation, soft stacking, the way notes actually appear when you scroll RedNote. The video sits beside or above the pair, not competing with them for the same visual language.

**Section B — the calendar as artifact.** The content calendar screenshot is the strongest single piece of evidence on this page — treat it like a planner you'd pin above a desk, not a shrunk-down thumbnail. Consider a simple pinned/tilted card treatment (a small shadow and a slight tilt, like a photo taped to a wall) rather than a flat rectangle. The Douyin content grid screenshot (used in Section C) can stay flatter and smaller — it's a supporting volume metric, not the hero image.

**Section C — understated, not a stat row.** This is the opposite instinct from Algood's big-numeral hero block. Render the five comparison stats as thin horizontal bars (your account vs. category average) rather than large numbers — bars make the shortfall on completion rate legible in the same visual language as the wins, instead of hiding it in smaller type. Muted background block, no bright color celebration.

Keep everything within the site's existing burgundy/Georgia system — the goal is a quieter register for this page, not a different brand.

---

## Build Instructions for Claude Code

**Page chrome / typography:** same system as About/Art/Algood/AMG.

**Layout, top to bottom:**

1. **Hero** — no background photo needed (unlike Algood/AMG); can be a simple text-forward hero, burgundy accent, since there's no single flagship cover image for this case. Eyebrow, title "Creator Content", role line, one-liner as subhead. Small muted stat line underneath, not a numeral callout.

2. **Intro** — short paragraph/bullet block, sets the "not chasing growth" framing before anything else. This should read confident, not apologetic.

3. **Section A** — heading, bullet list, then:
   ```html
   <div style="padding:75% 0 0 0;position:relative;">
     <iframe src="https://player.vimeo.com/video/1208210741?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
       frameborder="0"
       allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
       referrerpolicy="strict-origin-when-cross-origin"
       style="position:absolute;top:0;left:0;width:100%;height:100%;"
       title="convocation">
     </iframe>
   </div>
   <script src="https://player.vimeo.com/api/player.js"></script>
   ```
   Below the video, `个人号2.PNG` and `个人号3.PNG` as an overlapping note-card pair (see Visual Direction).

4. **Section B** — heading, bullet list, then:
   ```html
   <div style="padding:75% 0 0 0;position:relative;">
     <iframe src="https://player.vimeo.com/video/1208211595?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
       frameborder="0"
       allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
       referrerpolicy="strict-origin-when-cross-origin"
       style="position:absolute;top:0;left:0;width:100%;height:100%;"
       title="028">
     </iframe>
   </div>
   <script src="https://player.vimeo.com/api/player.js"></script>
   ```
   Below the video, `美食号2.PNG` (content calendar) as the pinned/tilted artifact (see Visual Direction).

5. **Section C** — heading, then the five-stat horizontal bar comparison (your account vs. category average), muted background block, completion rate included at same visual weight as the others. Below the bars, `个人号1.PNG` and `美食号1.PNG` as two smaller supporting images side by side.

6. **Closing** — one-line closing statement.

**Interaction:** all image assets click to view larger (lightbox or new tab). No carousel.

**Index page:** use a cropped detail from `个人号2.PNG` (the Santa Monica sunset shot) as the Case Studies grid thumbnail.

**Responsive:** note-card pair in Section A stacks vertically on mobile (drop the overlap/rotation, keep it simple). Calendar artifact in Section B stays full-width, drop the tilt effect on small screens. Stat bars in Section C stack to full-width single column.

---

## Notes for Amy

1. Path is set to `/case-studies/自媒体/` per your folder screenshot — same level as `amg`, `algood`, `pastnext`.
2. Translations fixed: RedNote (not "Xiaohongshu"), Douyin stays as Douyin (no English rebrand, unlike RedNote). Title/role line describes you as a "self-media creator," not "自媒体" transliterated.
3. No AI prompt/template screenshot included, per your call — Section B describes the mechanism in prose only.
4. I didn't add a callback to the Algood TikTok-vs-Amazon platform-logic insight. Section A's "guide-style outperforms vlog-style" line would be a natural place for a one-sentence cross-reference if you want the cases to talk to each other — just say so.
5. File extensions for `美食号2`, `个人号2`, `个人号3` assumed as `.PNG` to match the two files that showed extensions in your screenshot — flag if any of these are actually a different format.
6. Opening framing statement is close to your own words ("record life, not chasing traffic, help some people along the way") — double check it still sounds like you before this goes to CC.
