# Case Studies — Hero / Index Page

```
/case-studies/
  index.html          ← this page (to be built)
  content.md          ← this file
  algood/             ← DONE, see its own content.md, cover.jpg = Brand/3
  amg/                ← NOT YET BUILT — use placeholder cover for now
  pastnext/            ← NOT YET BUILT — use placeholder cover for now
  creator-content/          ← NOT YET BUILT — use placeholder cover for now
```

This page has two tiers, bento-style — **all 8 case studies get their own dedicated page**, but they're not all the same size/prominence on this index:

1. A statement block at the top (full width)
2. A **2×2 grid** of the 4 main Case Studies (Algood, AMG, PastNext, Creator Content) — larger cards, primary depth
3. A **single row of 4 smaller cards** (Camal, Law School, SMG, CSSS) — smaller cards, but each still links to its own real page, not just an asset

---

## Case Study Statement

*(DRAFT — placeholder copy. Amy: this is intentionally rough. Revisit once all 4 main case studies are built and you can see the full shape of the section — do not treat this as final.)*

**Eyebrow:** Case Studies

**Heading:** Selected Work

**Statement (short paragraph, full width, above the grid):**

Four years, four very different rooms — an agency, a B2B manufacturer, a growth-stage 出海 brand, and my own channels — and the same instinct running through all of them: find out what the audience actually needs before writing a word of copy. These are the projects that best show how I think, not just what I shipped.

---

## Main Case Studies (2×2 grid)

| Position | Name | Status | Cover image | Link |
|---|---|---|---|---|
| 1 (top-left, largest — flagship gets visual priority) | Algood | ✅ built | `algood/cover.jpg` | `/case-studies/algood/` |
| 2 | AMG | 🔲 not built yet | placeholder — use a neutral dark card with just the name until real cover exists | `/case-studies/amg/` |
| 3 | PastNext | 🔲 not built yet | placeholder | `/case-studies/pastnext/` |
| 4 | Creator Content (小红书 + 抖音, platform strategy) | 🔲 not built yet | placeholder | `/case-studies/creator-content/` |

Each grid card: cover image as background/top, name, a one-line tag underneath (see below), whole card is a link. Algood's tag should reflect its flagship status; the other three can use a short one-line descriptor for now.

**One-line tags (draft, revise later):**
- Algood — *Amazon growth & brand strategy, from AI-search research to shipped assets*
- AMG — *[Amy: fill in once built — Expert Insights pivot, platform strategy]*
- PastNext — *[Amy: fill in once built — competitive research & market intelligence]*
- Creator Content — *[Amy: fill in once built — platform-native content strategy across 小红书/抖音]*

Since Algood is the only one built, give it real visual weight (it can be the largest cell in the 2×2, or simply render fully while the other three show a "coming soon" muted state) — do NOT make all 4 cells look equally finished when 3 aren't built yet; that would read as broken, not intentional.

---

## Additional Work (row of 4 smaller cards)

| Name | Folder | One-line tag (draft) | Link |
|---|---|---|---|
| Camal | `Camal/` | B2B marketing across three continents, in a client's second language | `/case-studies/camal/` |
| Law School | `Law school/` | Competitive benchmark for a website renewal, built without a cooperative client | `/case-studies/law-school/` |
| SMG | `SMG/` | Investigative news production, weekly and live | `/case-studies/smg/` |
| CSSS | `CSSS/` | Three years, dept member to VP — event ops at scale | `/case-studies/csss/` |

**Correction from an earlier draft of this file:** all 8 case studies get their own dedicated page (Amy built 8 folders — that's the source of truth). These 4 are visually smaller/secondary in the bento layout, but each is a real page with its own `content.md` (to be written when we get to each one), not a link-to-asset card. Folder names above match Amy's actual `case-studies/` directory exactly — read from those paths, don't rename.

These four do NOT need their own dedicated pages — they're a lighter-weight gallery. A card that expands in place (accordion/lightbox) or links straight to the underlying asset is enough. Visually smaller and less prominent than the 2×2 grid above, per the original site plan (Additional Work = supplementary breadth, not primary depth).

---

## Build Instructions for Claude Code

**Typography / chrome:** follow the same system already used on About/Art — no separate spec needed.

**Layout, top to bottom:**

1. Statement block — full width, generous margins, similar treatment to the Art hero's opening statement.
2. 2×2 grid — bento-style, cards can vary slightly in size (Algood can take a bigger cell since it's the only finished one), rounded corners, hover state lifts/shadows. Unbuilt cards (AMG, PastNext, Creator Content) render in a visibly muted/placeholder state (e.g., lower-opacity card, "Coming soon" label) rather than a broken link or empty box — they should look intentional, not missing.
3. Additional Work row (Camal, Law School, SMG, CSSS) — 4 smaller cards in a single row on desktop (wrap to 2×2 or stack on mobile), lighter visual weight than the main grid. Each card links to its own dedicated page (not built yet — same "coming soon" muted treatment as the main grid's unbuilt cards, until each one is scoped and built).

**Responsive:** 2×2 grid → single column stack on mobile; Additional Work row → 2×2 → single column as viewport narrows.

---

## Notes for Amy

1. Everything in this file is a placeholder except the Algood entry and structure — I wrote enough so Claude Code can build the page scaffold and slot in Algood now, without waiting on AMG/PastNext/Creator Content.
2. Come back and rewrite the Statement + one-line tags once all 4 main case studies exist — right now I'm guessing at tags for work we haven't scoped copy for yet (AMG, PastNext, Creator Content).
3. I made an editorial call that unbuilt cards should look like "coming soon," not identical to Algood's finished card — otherwise the page looks broken rather than in-progress. Override this if you'd rather hide unbuilt cards entirely until they're ready.
4. All 8 case studies get their own page — corrected from an earlier draft where I'd assumed the smaller 4 would just link to assets. Each of the 4 smaller ones will need its own `content.md` when we scope it, same as AMG/PastNext/Creator Content.
