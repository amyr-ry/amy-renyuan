# About & Contact — content.md
(Two separate pages, /about/ and /contact/, already exist in nav — this is content for both)

---

## Page 1: About

### Folder / Assets Needed

```
/about/
  index.html            ← existing page, content to be updated
  portrait.jpg          ← Amy to provide: a professional-but-approachable photo
```

### Case Study Statement — About Page Copy

*(verbatim copy — bolded phrases are emphasis cues for CC)*

**Header**

**Name:** Amy Ren

**Opening line (large, sets the tone for the whole page):** It's genuinely hard to describe who I am in one sentence, so here's the long version — pick whichever part you're curious about.

**Card 1 — The Professional Me** *(always visible, not a dropdown — this is the anchor)*

**One-liner:** Bilingual marketer bridging Chinese brands and global markets — research-first, systems-minded, and genuinely fluent in both cultures, not just both languages.

- I study how people actually behave, then build the marketing that meets them there — the throughline from a Sociology degree to cross-border marketing work
- My focus is 出海 (cross-border) marketing: helping Chinese brands enter markets like the U.S. and Southeast Asia, and helping global brands make sense of Chinese platforms and consumers
- **Long-term, I want to build my own integrated cross-border marketing company** — strategy, content, and execution under one roof, instead of a brand getting handed between three different vendors
- **Education:** The University of Chicago, B.A. Sociology, Media Arts & Design minor, Summa Cum Laude, Phi Beta Kappa, Gary Becker Scholar, Class of 2026 · Booth School of Business, Master in Management (MiM), Marketing concentration, starting Aug 2026

**[Photo: portrait.jpg]**

**Card 2 — Me at School** *(dropdown, collapsed by default)*

**One-liner:** Sociology major who kept getting pulled into anything with a camera, a spreadsheet, or a client attached.

- Studied Sociology with a Media Arts & Design minor — systems thinking on one side, visual storytelling on the other
- Treasurer for MODA (UChicago's fashion organization), handling budgeting and fundraising for a 100+ member group
- Coursework ran from Text Mining in R to AI + Video — the quantitative and the creative, on purpose

**Card 3 — My Side Hustles** *(dropdown, collapsed by default)*

**One-liner:** If there's a client, a deliverable, and a deadline, I'm probably already in it.

- Cross-border marketing consulting for an Amazon-based industrial brand, a media agency's own accounts, a coconut water brand's Xiaohongshu launch, and a handful of others
- Two self-media accounts on the side — one food, one travel — mostly because I like documenting things and I'm curious what makes content land differently across platforms *(link to Creator Content case study)*
- Won 1st place in a UChicago AI video competition, which is a fun way of saying I'll happily go down a rabbit hole with a new creative tool

**Card 4 — What I Do in My Leisure Time** *(dropdown, collapsed by default)*

**One-liner:** Mostly: cooking, traveling, and pretending I'm not going to overplan the itinerary again.

- I travel with my parents when I can, and I'm the one in a friend group who ends up planning the itinerary
- Cook most of my own meals — it shows up in the food account, but it started long before that
- Genuinely curious about what makes people from different cultures click (or not) — which is probably why this career path made sense in the first place

---

## Page 2: Contact

### Folder / Assets Needed

```
/contact/
  index.html                        ← existing page, content to be updated
  Amy_Ren_Resume_EN.pdf             ← Amy to provide: PDF export of Amy_Ren_Resume_EN_v2.docx
  任源_Amy_Ren_简历_2026.pdf          ← Amy to provide: PDF export of the Chinese resume
```

### Case Study Statement — Contact Page Copy

**Header:** Let's Talk

**One-liner:** Open to full-time roles starting July 2027 — cross-border marketing, 出海 brands, and boutique agencies especially.

**Contact block**
- **Email:** amyry@uchicago.edu
- **LinkedIn:** linkedin.com/in/amyren0905
- **Resume:** Both English and Chinese versions, embedded as scrollable in-page PDF viewers side by side (not just download buttons — recruiters should be able to scroll and read without leaving the page), each with a download link underneath for anyone who wants the file itself

---

## Visual Direction

**About page:** Opening line sits alone at the top, large and simple — no photo competing with it yet. Below that, four cards in sequence:
- **Card 1 (The Professional Me) is always expanded, never collapsible** — it's the anchor a fast-scanning recruiter needs to see without clicking anything. Photo sits within or beside this card.
- **Cards 2–4 are dropdown/accordion elements, collapsed by default** — each shows its title and one-liner when collapsed (so even collapsed, the flavor comes through), and expands to reveal the bullets on click/tap. Simple chevron or "+" indicator, nothing playful/cartoonish — keep it in the site's existing burgundy/Georgia visual language, not a literal dating-app card style.
- Each card (expanded or collapsed) should look like a clear, distinct module — enough visual separation that this reads as "four things to explore" rather than one long scroll.

**Contact page:** Keep this simple and functional — this page's job is to make it effortless to reach you or read/grab your resume. A clean block with the three contact methods up top, then the two resumes below as side-by-side scrollable embedded PDF viewers (stack vertically on mobile), each with a small "Download PDF" link beneath it. Apply the same font-size bump from the Round 2 instructions here too.

---

## Build Instructions for Claude Code

1. **About page** — replace existing content with the copy above. Opening line at top. Card 1 (The Professional Me) always expanded, includes the photo. Cards 2–4 (Me at School / My Side Hustles / What I Do in My Leisure Time) built as accordion elements — collapsed by default, showing title + one-liner, expanding on click to show bullets. Link the self-media bullet point (in Card 3) to `/case-studies/自媒体/` (or whatever the Creator Content page's actual route ends up being).
2. **Contact page** — replace existing content with the copy above. Email as a `mailto:` link, LinkedIn as an external link (new tab), two scrollable embedded PDF viewers side by side for the English and Chinese resumes, each with a "Download PDF" link underneath.
3. Apply the site-wide font-size bump (from the Round 2 instructions doc) to both pages.
4. No hero-banner treatment needed on either page — these aren't case studies, keep them lighter-weight than that pattern.

---

## Notes for Amy

1. **Photo needed** — drop a photo into `/about/portrait.jpg` (or tell me the actual filename/path and I'll update this doc). Professional-but-approachable is the read to aim for, not a stiff headshot. This one now sits inside the always-visible Card 1, so it's doing more work than a generic hero photo would — pick one that feels like "you," not just presentable.
2. **Two resume PDFs needed** — export `Amy_Ren_Resume_EN_v2.docx` and `任源_Amy_Ren_简历_2026_v2.docx` to PDF and place them at `/contact/Amy_Ren_Resume_EN.pdf` and `/contact/任源_Amy_Ren_简历_2026.pdf` (or tell me the actual filenames and I'll update this doc).
3. Email and LinkedIn are filled in from your resume — confirm these are the ones you want public (the resume also lists a phone number; I left it off the public Contact page on purpose, since a public phone number invites spam. Say the word if you actually want it listed).
6. The "Open to full-time roles starting July 2027" one-liner on Contact is a draft — tell me if you'd rather not state a start date publicly, or want to phrase it differently.
7. I kept "A Little More Personal" short on purpose — three bullets, not a full hobby list. If you want more personality in there, tell me what to add rather than me guessing at what else you'd want public.
