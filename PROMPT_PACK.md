# Revolt Financial — Claude Code Prompt Pack

Six prompts. Copy one into Claude Code, run it, review, commit, move to the next.

**Setup (do once before prompt 1):** Place `DESIGN_TOKENS.md`, `PRD_REVOLT_SITE_V2.md`, and this file in the project root. Place brand assets (Degular Display Bold .otf, brand photos, logo PNG with transparent background) in `assets/`. Then run prompt 0.

---

## Prompt 0 — Project Setup & Shared Chrome

```
Read DESIGN_TOKENS.md and PRD_REVOLT_SITE_V2.md before doing anything.

Set up the project structure:

revolt-website/
├── index.html              [empty for now]
├── advisor-recruiting.html [empty]
├── team-recruiting.html    [empty]
├── ma.html                 [empty]
├── platform.html           [empty]
├── assets/
│   ├── css/
│   │   └── revolt.css      [you build this]
│   ├── js/
│   │   └── revolt.js       [you build this]
│   ├── fonts/              [Degular .otf already here, convert to .woff2]
│   └── images/             [brand photos already here]
├── components/
│   ├── nav.html            [you build, will be inlined per page]
│   └── footer.html         [you build, will be inlined per page]
├── DESIGN_TOKENS.md
├── PRD_REVOLT_SITE_V2.md
└── PROMPT_PACK.md

Tasks:
1. Convert assets/fonts/DegularDisplay-Bold.otf to .woff2. If Trade Gothic
   Next LT Pro is not licensed for web, set up the fallback to Inter (per
   tokens file Section 2). Document in a comment.

2. Build assets/css/revolt.css. Include:
   - All :root custom properties from DESIGN_TOKENS.md sections 1, 2, 3, 6
   - @font-face declarations
   - Reset (box-sizing, margin/padding zero, smooth scroll, antialiased)
   - Type scale classes (.h1, .h2, .h3, .lead, .body, .small, .eyebrow, .label)
   - Section background utilities (.bg-black, .bg-slate, .bg-cream, .bg-tan,
     .bg-olive, .bg-teal, .bg-white) — each sets background AND default text colors per
     the text-on-background mapping in tokens Section 1
   - Button classes (.btn-primary, .btn-ghost, .btn-sms)
   - Component classes (.tile, .compare__row, .eyebrow with rule, .field, .faq)
   - Hero pattern (.hero with overlay + ambient drift)
   - Backdrop numeral pattern (.backdrop-num)
   - Strikethrough headline pattern
   - Scroll reveal styles ([data-reveal])
   - prefers-reduced-motion override
   - Responsive breakpoints at 900px (tablet) and 600px (mobile)

3. Build assets/js/revolt.js. Include:
   - Intersection Observer for [data-reveal] (per tokens Section 6)
   - Nav scroll-state toggle (transparent over hero, solid past 80px)
   - Mobile nav hamburger toggle
   - Stat counter count-up animation (fires on reveal)
   - Nothing else. No analytics. No third-party scripts.

4. Build components/nav.html (the markup from tokens Section 7) and
   components/footer.html (per tokens Section 8). Each page in later prompts
   will inline these. Add a comment block at the top of each:
   <!-- This is the canonical nav. Inline into every page. Do not edit
        per page. If this needs changing, change it here and propagate. -->

5. Verify:
   - `revolt.css` is under 30KB before any page-specific overrides
   - `revolt.js` is under 5KB
   - The fonts load with font-display: swap and a sensible system fallback
   - The CSS reset does not break the native <details> accordion

Do not build any page yet. Just chrome. Show me the file tree, the .css, and
the .js when you are done. I will review before the first page build.
```

---

## Prompt 1 — Homepage (`index.html`)

```
Build index.html per PRD_REVOLT_SITE_V2.md Section 2.

Read the entire PRD section 2 (subsections 2.1 through 2.9) before writing.
Read DESIGN_TOKENS.md for any token reference. The CSS, JS, nav, and footer
already exist from Prompt 0 — link to them, do not rebuild them.

Section background rotation per the PRD:
cream → black → tan → cream → olive → black → teal → cream

Section list:
2.1 Hero (black over Two_People_Blue.jpg)
2.2 Trust Bar (black, no photo, count-up animated stats)
2.3 Positioning (tan)
2.4 Four Pillars Grid (cream)
2.5 Differentiators (olive)
2.6 How It Works (cream)
2.7 Founder Credibility (black over Guy_Standing_Green.jpg, split layout)
2.8 For Firms & Custodians (teal, half-width container)
2.9 Contact (cream, two-column with form)

Hard rules:
- Inline the nav from components/nav.html. Inline the footer from
  components/footer.html. Mark the homepage nav state as default (no
  active page styling).
- Use ONLY classes from assets/css/revolt.css. No inline styles unless
  positioning a backdrop numeral or a one-off photo placement.
- Every section that should reveal on scroll gets data-reveal. Stat counters
  get data-counter="$84M" or similar; the JS already handles count-up.
- Square corners everywhere. No box shadows on cards.
- Yellow (mustard) used only for: H1, primary CTAs, eyebrow rules, stat
  numbers, the "REVOLT" mark in nav. Nowhere else.
- All copy comes verbatim from the PRD. Do not improvise headlines or body.
- No em dashes. American spelling. Numbers as figures.
- The hero photo is preloaded with <link rel="preload">.
- The page must validate as HTML5 and pass a basic accessibility scan
  (no images without alt, headings in order, form labels associated).

After building, run a quick check:
- Does the page load and render without console errors?
- Does the nav scroll-state toggle work past 80px scroll?
- Do the four tiles in section 2.4 hover correctly (translateY -4px,
  border to mustard)?
- Does the strikethrough class render the mustard line correctly?

Show me the file path, the page in a screenshot if possible, and any
deviations from the PRD spec. If something in the PRD is ambiguous, flag
it instead of guessing.
```

---

## Prompt 2 — Advisor Recruiting (`advisor-recruiting.html`)

```
Build advisor-recruiting.html per PRD_REVOLT_SITE_V2.md Section 3.

Read the entire PRD section 3 (subsections 3.1 through 3.9) before writing.
Tokens, CSS, JS, nav, and footer already exist. Link to them.

Section background rotation:
black → cream → black → tan → cream → olive → black → cream

Section list:
3.1 Hero (black over Two_People_Blue, strikethrough on "three firms")
3.2 The Industry Is Structurally Broken (cream, 6-row comparison table)
3.3 The Four Structural Buckets (black, 2x2 grid — signature framework)
3.4 The Process (tan, 7-stage vertical numbered list)
3.5 Rule of Three (cream, big backdrop numeral "3")
3.6 Anonymized Case Study (olive, two-column with 2x2 data grid)
3.7 What You Get (black, 5 numbered rows)
3.8 FAQ (cream, native <details> accordion, 8 questions)
3.9 Contact CTA (black over Building_Green.jpg)

Hard rules (in addition to the rules in Prompt 1):
- The Four Structural Buckets grid in 3.3 is the page's most-visited section.
  Make it readable. 2x2 on desktop, 1-column on mobile. Each bucket card has
  the bucket number top-left in mustard, bucket name in display below, and a
  4-row mini-spec (Economics, Autonomy, Equity, Best fit) using the
  .compare__row pattern.
- The strikethrough on "three firms" in 3.1 H1 uses
  text-decoration-color: var(--mustard) and thickness 0.08em.
- The FAQ uses native <details>/<summary>. Do not write JS for the accordion.
  Style the summary with a custom plus indicator that rotates 45deg on open
  (CSS only, transform on details[open] summary::after).
- Mark the nav active state on "Advisor Recruiting".
- Stat figures in section 3.6 (the case study data grid) display as four
  numbers with mustard labels. No animation needed on these — they are
  already in view by scroll position.

Show the page when done.
```

---

## Prompt 3 — M&A (`ma.html`)

```
Build ma.html per PRD_REVOLT_SITE_V2.md Section 5.

Read the entire PRD section 5 (subsections 5.1 through 5.8) before writing.
Tokens, CSS, JS, nav, and footer already exist.

Section background rotation:
black → cream → black → tan → cream → teal → black → cream

Section list:
5.1 Hero (black, atmospheric — NO people photo, just a dark black
    treatment with the "M&A" backdrop numeral)
5.2 The Banker vs. The Consultant (cream, 8-row comparison)
5.3 The Two Tracks (black, two cards side-by-side)
5.4 The Seven-Stage Process (tan, vertical numbered)
5.5 Three-Lens Valuation (cream, three equal cards)
5.6 Confidentiality (teal, hero-sized — this is the page's biggest moment
    after the hero)
5.7 Who Runs It (black, JP Aubry block, two-column)
5.8 CTA (cream)

Hard rules:
- This is the most serious page on the site. Tone is denser, more
  institutional, less playful. Type weights run heavier on display.
- The Confidentiality section 5.6 must feel like a hero — full section
  height (min-height: 80vh on desktop), backdrop numeral "CONFIDENTIAL"
  ghosted at 0.05 opacity, three columns of rules at the bottom.
- "First licensed investment bank built for the independent advisor space"
  appears multiple times. Do not vary the phrasing. It is the page's
  positioning claim and consistency matters.
- Mark nav active on "M&A".
- JP Aubry photo placeholder: 280x280 square, black background with subtle
  grain texture, "JP" centered in mustard Degular Display Bold. This is the
  placeholder until the real headshot arrives. Do not use a stock photo.

Show the page when done.
```

---

## Prompt 4 — Platform (`platform.html`)

```
Build platform.html per PRD_REVOLT_SITE_V2.md Section 6.

Read the entire PRD section 6 (subsections 6.1 through 6.8) before writing.
Read PRD section 7 (Platform Integration Handoff) for context — this page
positions the platform but does NOT host it.

Section background rotation:
black → cream → tan → black → olive → cream → black

Section list:
6.1 Hero (black, atmospheric grid pattern, NO photo)
6.2 Coming 2026 + Live Counter (cream, animated count-up to placeholder N)
6.3 What It Does — Three Pillars (tan, 3-column feature grid)
6.4 Why It Exists (black)
6.5 What Makes the Data Different (olive, three large numerals)
6.6 Privacy & Data Handling (cream)
6.7 How to Get Access (black, two cards: recruiter path + early-access form)
6.8 For Firms & Custodians (cream, small)

Hard rules:
- This page does NOT have a "Sign Up" or "Try the Platform" button. Critical.
  The only ways forward are (a) Text the desk to ask for a recruiter link,
  or (b) join the early-access list via email.
- The hero in 6.1 is tech-forward and atmospheric. NO brand photo.
  Background: black, plus a subtle SVG grid pattern (1px slate-30 lines on
  a 60px grid), positioned absolute, opacity 0.4. Hero feels like a
  precision instrument, not a marketing photo.
- The three pillar cards in 6.3 each have a placeholder image area: a
  280x180 box with black background, the same subtle grid pattern, and
  the label "Preview coming · 2026" centered in mustard. These are
  swapped for real product screenshots before launch.
- The counter in 6.2 uses data-counter="247" (or whatever number Eric
  approves). Animate count-up on reveal, ease-out 1.5s. Mustard, ~120px
  Degular Display Bold.
- Mark nav active on "Platform".
- The early-access form in 6.7 card 2 is a single email field plus submit.
  Wire it to the same backend endpoint as the homepage contact form, but
  pass a list_id parameter so the marketing team can segment. Confirm the
  endpoint with me before wiring.

Show the page when done.
```

---

## Prompt 5 — Team Recruiting (`team-recruiting.html`)

```
Build team-recruiting.html per PRD_REVOLT_SITE_V2.md Section 4.

Read the entire PRD section 4 (subsections 4.1 through 4.7) before writing.
Tokens, CSS, JS, nav, and footer already exist.

Section background rotation:
cream → black → olive → cream → tan → black → cream

Section list:
4.1 Hero (black over Two_People_Green.jpg)
4.2 Why Most Firms Staff Wrong (cream, 3 stat callouts)
4.3 Six Roles We Recruit (olive, 3-column grid, 1-col mobile)
4.4 Vetting Framework (cream, three horizontal stages)
4.5 90-Day Onboarding (tan, four cards)
4.6 Integrated Engagement Advantage (black, two-column with timeline diagram)
4.7 CTA (cream)

Hard rules:
- The six role cards in 4.3 each show the role name (display H3), 2-line
  description, "When you need it" trigger, and comp range. Mustard top
  border (3px) on each card. No icons.
- The integration timeline diagram in 4.6 is a clean horizontal numbered
  flow: Week -8, Week -4, Week 0, Week +1. Use SVG or pure CSS (display:
  flex, mustard line connecting four numbered nodes). No JS.
- Mark nav active on "Team Recruiting".

Show the page when done.
```

---

## Prompt 6 — QA, Polish, Launch Prep

```
Run launch QA across all five pages and the shared chrome.

Read DESIGN_TOKENS.md and PRD_REVOLT_SITE_V2.md (especially Section 9,
Open Items) before starting.

Tasks:

1. Cross-page consistency audit:
   - Open all five HTML files. Confirm the nav and footer markup are
     identical except for the active-state class. Any drift gets fixed
     by re-inlining from components/.
   - Confirm every page uses the same revolt.css and revolt.js paths.
   - Confirm every page's <title> and <meta description> are unique
     and descriptive.

2. Content audit against the PRD:
   - For each page, confirm every section listed in the PRD is present.
   - Confirm headlines, eyebrows, and body copy match the PRD verbatim.
     If any block was paraphrased during the build, restore the PRD copy.
   - Confirm no em dashes in any prose. Confirm American spelling.

3. Stat-figure audit:
   - List every numeric figure on every page (the $84M, 190+, 40, #1,
     10 deals, 3 firms, 100% range, etc.). Output a spreadsheet-style
     table: page, section, figure, source claim, status (verified /
     unverified). PRD Section 9 lists what needs Eric verification.

4. Performance pass:
   - Run Lighthouse on each page. Target: 95+ on Performance,
     Accessibility, Best Practices.
   - Confirm hero photos are preloaded.
   - Confirm fonts use font-display: swap.
   - Confirm no render-blocking CSS or JS beyond the tokens stylesheet.

5. Accessibility pass:
   - All images have alt text.
   - Form labels are associated with inputs.
   - Heading order is correct (one H1 per page, H2s under, no skips).
   - Color contrast minimum 4.5:1 for body text, 3:1 for large display.
     Special attention to mustard headlines on cream and on white.
   - prefers-reduced-motion respected.
   - Focus states visible on every interactive element.

6. Launch-blocker checklist (PRD Section 9):
   - Output a checklist showing the status of every open item.
   - For each item, mark: blocking (do not ship), optional (can ship,
     fix in week 2), or done.

7. Deploy prep:
   - Build a sitemap.xml.
   - Build a robots.txt (allow all by default; flag any pages to noindex).
   - Add Open Graph + Twitter card meta tags to every page using a
     consistent OG image (Revolt mark on slate, 1200x630).
   - Add a favicon (Revolt mark, 32x32 and 180x180 for iOS).

Output: a single markdown report listing what passed, what failed, and
the launch-blocker checklist with status per item.
```

---

## Workflow notes

- Run prompts in order. Do not jump ahead. Each one assumes the previous one is done and reviewed.
- Between prompts, open the page in a browser and click through it before moving on.
- If a prompt produces something off-brand or off-spec, do not let Claude Code "fix it" with a follow-up. Reject the output, edit the prompt to be more specific, and re-run.
- The PRD is the contract. If Claude Code wants to deviate, the answer is no — flag it back to me and we adjust the PRD.
- After Prompt 6, the site is ready for Eric review. Do not ship until the launch-blocker checklist is clean.

---

End of prompt pack.
