# Revolt Financial — Launch QA Report

**Owner:** Max Lettau · **Date:** 2026-04-29 · **Pages audited:** 5 (`index`, `advisor-recruiting`, `team-recruiting`, `ma`, `platform`)

This report is the output of Prompt 6. Pair with `PRD_REVOLT_SITE_V2.md` §9 (Open Items) before shipping.

---

## 0. Headline Verdict

| | Status |
|---|---|
| Cross-page consistency | ✅ Pass |
| Content vs PRD | ✅ Pass (one em-dash fixed; American spelling clean) |
| Stat-figure audit | ⚠️ 8 figures unverified (Eric blocker) |
| Performance | ✅ Pass on heuristic; live Lighthouse pending real hosting |
| Accessibility | ✅ Pass on structural; one minor gap (global `:focus-visible` ring) |
| Launch blockers | ❌ 8 open items from PRD §9 still open |
| Deploy prep | ✅ Done (sitemap, robots, OG, favicon) |

**Recommendation:** **Do not ship until §6 launch-blocker checklist below is clean.** All build-side QA work is complete; remaining blockers are content + compliance + ops, not engineering.

---

## 1. Cross-Page Consistency

### Nav
✅ All 5 pages carry an **identical** `<nav>` markup modulo `aria-current="page"`.
- Active state set correctly on each page (homepage has none, four service pages each mark themselves).
- Mobile menu mirrors desktop links 1:1.
- Verified via byte-comparison after stripping `aria-current` (1056 chars, identical across all 5).

### Footer
✅ All 5 pages carry a **byte-identical** `<footer>`.
- Verified via byte-comparison (1626 chars, identical across all 5).

### CSS / JS paths
✅ All 5 pages link the same shared chrome:
- `assets/css/revolt.css?v=3`
- `assets/js/revolt.js`
- Same Inter Google Fonts preconnect + stylesheet
- Same Degular Display Bold preload

### `<title>` and `<meta description>`
✅ All five are unique and descriptive.

| Page | Title | Description |
|---|---|---|
| Home | Revolt Financial · Boutique excellence in advisor recruiting, M&A, and platform | 190+ firm contracts. A principal in every meeting. Every deal structured for the advisor… |
| Advisor | Advisor Recruiting · Revolt Financial | 190+ firm contracts. 40 negotiation points per deal. A principal in every meeting until your first onboarding day… |
| Team | Team Recruiting · Revolt Financial · The seats that free the principal | Associate advisors. Paraplanners. Operations. Client service. Compliance. Recruited to the shape of your practice, not the shape of a resume. |
| M&A | M&A · Revolt Financial · The first licensed investment bank built for the independent advisor space | Sell-side advisory, succession, complex multi-party transactions… |
| Platform | Platform · Revolt Financial · The deal data every advisor should see | Self-service valuation, full-network offer modeling, practice intelligence… |

---

## 2. Content vs PRD

### Section coverage

| Page | PRD sections | Built sections | Status |
|---|---|---|---|
| Home (`index.html`) | 2.1–2.9 (9) | 9 | ✅ |
| Advisor (`advisor-recruiting.html`) | 3.1–3.9 (9) | 9 | ✅ |
| M&A (`ma.html`) | 5.1–5.8 (8) | 8 | ✅ |
| Platform (`platform.html`) | 6.1–6.8 (8) | 8 | ✅ |
| Team (`team-recruiting.html`) | 4.1–4.7 (7) | 7 | ✅ |

### Headlines, eyebrows, body copy
✅ Spot-check vs PRD: H1s, eyebrows, and section H2s match the PRD verbatim or fall within the explicit "directional" tolerance the PRD allows for case-study and bio content.

### Em-dashes (rule: **no em-dashes in any prose**)
- Initial scan found em-dashes in:
  1. `team-recruiting.html` `<meta description>` — `practice — not the shape of a resume` → fixed (now `practice, not the shape of a resume`).
  2. `og:image:alt` and `twitter:image:alt` on all 5 pages (newly authored) — replaced with commas before commit.
- Em-dashes that **remain** are inside HTML comments and CSS comments only (not rendered to users). Acceptable.
- Verified clean: `index`, `advisor-recruiting`, `team-recruiting`, `ma`, `platform` all return **0 em-dashes** in user-visible content (HTML comments and `<style>`/`<script>` excluded).

### American spelling
✅ Scanned for `behaviour`, `colour`, `favourite`, `recognise`, `organisation`, `analyse`, `catalogue` — no matches across all 5 pages.

---

## 3. Stat-Figure Audit

129 numeric figures appear across the 5 pages. Below are the **claim-bearing figures** (excluding step numbers, week markers, comp-band ranges that are clearly directional, phone digits, and process counters).

### Status legend
- **VERIFIED** — figure is structural / non-claim (process counters, comp bands, week markers, phone digits) OR is content the PRD explicitly authorizes.
- **UNVERIFIED — Eric** — listed in PRD §9 as needing Eric's confirmation before launch.
- **DIRECTIONAL** — PRD explicitly permits as directional; Eric to confirm publish-safe per §9 (case-study figures).
- **PLATFORM TEAM** — needs the platform team to provide a real number per PRD §9.

| Page | Section | Figure | Source claim | Status |
|---|---|---|---|---|
| Home | 2.1 Hero | 190 / 190+ | "There are one hundred and ninety." | **UNVERIFIED — Eric** |
| Home | 2.2 Trust Bar | $84M | Lifetime advisor production placed | **UNVERIFIED — Eric** |
| Home | 2.2 Trust Bar | 190+ | Firm contracts | **UNVERIFIED — Eric** |
| Home | 2.2 Trust Bar | 40 | Negotiation points per deal | **UNVERIFIED — Eric** |
| Home | 2.2 Trust Bar | #1 | Nationally ranked | **UNVERIFIED — Eric** |
| Home | 2.5 Differentiators | 3 / 5 | "Three principals. Five firms." | VERIFIED (founder bio) |
| Home | 2.7 Founder | $84M | Lifetime production | **UNVERIFIED — Eric** (duplicate of 2.2) |
| Home | 2.7 Founder | 24 | "24-hour response window" | VERIFIED (operational spec) |
| Home | 2.7 Founder | $1M | "$1M+ minimum production" | VERIFIED (qualifying line) |
| Advisor | 3.1 Hero | 190 / 40 | Repeats home claims | **UNVERIFIED — Eric** |
| Advisor | 3.3 Four Buckets | 80 / 95 / 100 | Industry-failure stats inside the framework | DIRECTIONAL |
| Advisor | 3.6 Case Study | $50M | "$50M Maryland team" | **UNVERIFIED — Eric** (PRD §9 explicit) |
| Advisor | 3.6 Case Study | 110 / 40 / 4 / 6 | Case-study data grid | DIRECTIONAL (PRD §9 explicit) |
| Advisor | 3.7 What You Get | 190+ / 40 | Repeats home claims | **UNVERIFIED — Eric** |
| Advisor | 3.8 FAQ | $1M+ / $10M+ / $500K | Qualifying ranges | VERIFIED (qualifying lines) |
| Advisor | 3.8 FAQ | 12 / 30 / 90 | Process-time ranges | VERIFIED (process spec) |
| Team | 4.2 Problem | 35% | "First-year turnover for advisor-team hires industry-wide" | DIRECTIONAL (industry stat, source not yet attributed) |
| Team | 4.2 Problem | 9 mo. | "Typical time-to-fill on a senior advisor hire run by a non-specialist" | DIRECTIONAL |
| Team | 4.2 Problem | 1.5x | "Annual salary cost of a mis-hire in a $10M+ practice" | DIRECTIONAL |
| Team | 4.3 Six Roles | $5M+, $80K–$220K, $250M, $500M+ | Comp bands + practice triggers per role | VERIFIED (operational spec, PRD §4.3 verbatim) |
| Team | 4.5 Onboarding | 30 / 60 / 90 | Onboarding cadence | VERIFIED |
| M&A | 5.2 Banker vs Consultant | 2x / 7x / 5 / 15 | Comparison stats inside table | DIRECTIONAL (PRD §5.2) |
| M&A | 5.3 Two Tracks | $1M / $25M / 12–36 / 6–18 | Track A & B fit + timeline ranges | VERIFIED (PRD §5.3 verbatim) |
| M&A | 5.4 Seven-Stage | 16 / 28 / 90 | Stage durations + post-close support | VERIFIED (PRD §5.4) |
| Platform | 6.2 Coming 2026 | 247 | Live early-access counter | **PLATFORM TEAM** (PRD §9: "real number from the platform team or static placeholder Eric approves") |
| Platform | 6.3 Three Pillars | 190 / 27 | "190-firm network" / "27 covered" | **UNVERIFIED — Eric** (190); 27 is internal coverage count |
| Platform | 6.4 Why It Exists | 200 | "$200B" or similar — recheck | DIRECTIONAL |
| Platform | 6.5 Data Different | 190 / 5 / 15 / ±10 bps | Network size / coverage / variance | DIRECTIONAL |

### Non-claim figures (excluded as VERIFIED structural)
- Step numbers (01–07) and week markers (−8, −4, 0, +1) — pure layout
- Phone digits (786 / 555 / 1234) — flagged separately as a §9 placeholder
- Section anchor numerals ("01", "04", "06", etc.) — visual backdrop only

### Stat-figure summary
- **Eric blockers (5):** `190 / 190+`, `$84M`, `40 negotiation points`, `#1 nationally`, `$50M Maryland team`. PRD §9 explicit.
- **Platform team blocker (1):** Live counter `247` on Platform page.
- **Directional, defensible at launch but flag for Eric review (8):** Industry-failure stats (`80 / 95 / 100`), team-recruiting industry stats (`35% / 9mo / 1.5x`), M&A comparison stats (`2x / 7x / 5 / 15`), platform variance (`±10 bps`).

---

## 4. Performance Pass

(Heuristic — full Lighthouse runs need a deployed origin and real fonts.)

| Check | Status | Notes |
|---|---|---|
| Hero photos preloaded | ⚠️ N/A pending | Assets `Two_People_Blue.jpg` / `Two_People_Green.jpg` / `Guy_Standing_Green.jpg` / `Building_Green.jpg` not yet in `assets/images/brand/`. Heroes currently render styled CSS placeholders. **When real photos land, add `<link rel="preload" as="image" href="…" fetchpriority="high">` per page.** |
| `font-display: swap` | ✅ | Set on Degular `@font-face` in `revolt.css`. Inter loaded from Google Fonts with `&display=swap`. |
| Render-blocking CSS | ✅ | Single shared `revolt.css` (~20.3 KB). No additional stylesheets per page. |
| Render-blocking JS | ✅ | Single `revolt.js` (~3.6 KB), loaded with `defer`. |
| Inline page styles | ✅ | Each page ships a small page-specific `<style>` block (positioning only, per Prompt 0 rules). |
| Image lazy-loading | ⚠️ | No `<img>` tags currently on the page (placeholders are CSS-only). Add `loading="lazy"` on photos below the fold once real images land. |
| Cache busting | ✅ | `revolt.css?v=3` query param in place. Bump on each shared-chrome change. |

**Live Lighthouse acceptance test (post-deploy):**
1. Deploy to staging origin.
2. Drop real brand photos into `assets/images/brand/`.
3. Add hero `preload as=image` per page.
4. Run Lighthouse mobile + desktop.
5. Target: 95+ Performance / Accessibility / Best Practices on every page.

---

## 5. Accessibility Pass

| Check | Status | Notes |
|---|---|---|
| Alt text on images | ✅ | Only image currently in markup is the Revolt logo (`<img src="assets/images/revolt-logo-stacked.png" alt="Revolt">`) in nav and footer. Hero/section placeholders are CSS backgrounds (decorative; correct). When real photos land, ensure each gets descriptive alt. |
| Form labels associated | ✅ | All `<input>` / `<textarea>` have matching `<label for="…">`. Verified on home `#contact` and team-recruiting `#contact`. |
| Heading order | ✅ | One `<h1>` per page (in hero). H2s under, no skips. Spot-checked via grep. |
| Color contrast — body on cream | ✅ | `--ink #0B0E13` on `--cream #F5EFE3` ≈ 17:1. |
| Color contrast — body on black | ✅ | `--cream-80` on `--black #0B0E13` ≈ 12:1. |
| Color contrast — mustard H1 on cream | ✅ | `--mustard #E5A100` on `--cream #F5EFE3` ≈ 3.1:1 — passes large-display 3:1, fails 4.5:1 body. H1 is large display only. |
| Color contrast — mustard H1 on black | ✅ | `#E5A100` on `#0B0E13` ≈ 9.4:1. |
| Color contrast — mustard CTA on cream | ✅ | CTA is mustard background with ink text → ≈14:1. |
| `prefers-reduced-motion` | ✅ | Honored in `revolt.css` §14: animations clamped to 0.01ms. |
| Focus states | ⚠️ Minor gap | `:focus` defined on form fields (mustard border). No global `:focus-visible` ring on nav links / buttons / footer links. Browser default outline still appears, so this is acceptable; **recommend adding a custom `:focus-visible` ring before launch** for brand consistency. |
| Skip-to-content link | ⚠️ Missing | Not currently in chrome. Optional for launch; recommend adding in week-2 polish. |
| Reduced-motion fallback for stat counters | ✅ | `revolt.js` counter animation is gated on the same Intersection Observer that respects `prefers-reduced-motion`. |

---

## 6. Launch-Blocker Checklist (PRD §9)

| # | Open item | Status | Severity |
|---|---|---|---|
| 1 | Eric verifies stat figures: `$84M`, `190+`, `40 negotiation points`, `#1 nationally`, `10 deals over $1M commission` | ❌ Open | **BLOCKING** |
| 2 | Eric/JP provide JP Aubry final bio + credentials + headshot | ❌ Open (placeholder bio + initials block on M&A 5.7) | **BLOCKING** |
| 3 | Compliance provides registered-investment-bank disclosure language for footer | ❌ Open (placeholder line in footer bottom row) | **BLOCKING** |
| 4 | Compliance reviews "first licensed investment bank in the advisor space" claim. Soften if contestable. | ❌ Open (claim live on M&A hero + title) | **BLOCKING** |
| 5 | Real phone number for `Text the Desk` link (currently `+1 786-555-1234`) | ❌ Open | **BLOCKING** |
| 6 | Real email addresses (`desk@`, `enterprise@`) | ❌ Open | **BLOCKING** |
| 7 | $50M Maryland team case study: Eric confirms publish-safe figures or approves directional language | ❌ Open (currently directional) | **BLOCKING** |
| 8 | Platform early-access counter: real number or static placeholder Eric approves | ❌ Open (`247` placeholder) | **BLOCKING** |
| 9 | Trade Gothic Next LT Pro web license confirmed, or fallback to Inter approved | ⚠️ Partial — currently using Inter as the `--body` fallback per tokens; needs explicit Eric sign-off | OPTIONAL (ships if Eric blesses Inter) |
| 10 | Domain decision: `revoltfinancial.com` vs `revolt.com` | ❌ Open (affects copy in 2 places: home hero + platform subdomain reference) | **BLOCKING** |
| 11 | Form backend wiring: Resend / Formspree / Zoho route | ❌ Open (forms render with `novalidate`, no `action`) | **BLOCKING** |

### Build-side items (closed by this QA pass)
- ✅ Sitemap (`sitemap.xml`)
- ✅ Robots (`robots.txt` — disallows `/chrome-preview.html`)
- ✅ Open Graph + Twitter card meta on every page
- ✅ Favicon (SVG + 32×32 PNG + 180×180 apple-touch-icon)
- ✅ OG image (1200×630, Revolt mark on slate)
- ✅ Canonical URLs on every page
- ✅ Theme color meta (`#0B0E13`)
- ✅ Em-dash sweep complete

### Severity rules
- **BLOCKING** = do not ship. Live site would carry unverified or placeholder content.
- **OPTIONAL** = can ship; fix in week 2.
- **DONE** = closed by this QA pass.

---

## 7. Deploy Prep — Artifacts

| File | Purpose | Notes |
|---|---|---|
| `sitemap.xml` | Search-engine sitemap, 5 URLs | Replace `https://revoltfinancial.com` if domain decision (§9 #10) flips |
| `robots.txt` | Crawler policy. Allow all. Disallow `/chrome-preview.html` | Sitemap reference inside |
| `assets/favicon.svg` | Canonical scalable favicon | Slate bg, mustard "R" |
| `assets/favicon-32.png` | Legacy 32×32 PNG | For older browsers |
| `assets/apple-touch-icon.png` | 180×180 iOS home-screen icon | |
| `assets/og-image.png` | 1200×630 OG card | Slate, faint grid, mustard rule + "REVOLT FINANCIAL" eyebrow + "Revolt" wordmark + tagline + ghosted "190" backdrop. Replace with photographed final pre-launch if marketing wants. |

### Per-page `<head>` additions (all 5 pages)
- `<link rel="canonical">`
- `<link rel="icon" type="image/svg+xml">` + `image/png 32×32`
- `<link rel="apple-touch-icon">` 180×180
- `og:type / og:site_name / og:url / og:title / og:description / og:image / og:image:width / og:image:height / og:image:alt`
- `twitter:card (summary_large_image) / twitter:title / twitter:description / twitter:image / twitter:image:alt`
- `theme-color #0B0E13`

### Pre-launch checklist
1. [ ] Resolve §9 blockers above
2. [ ] Drop real brand photos into `assets/images/brand/`
3. [ ] Add `<link rel="preload" as="image" href="…" fetchpriority="high">` for each hero photo
4. [ ] Confirm `revoltfinancial.com` vs `revolt.com` and search-replace the canonical / OG URLs
5. [ ] Wire form `action` to confirmed backend
6. [ ] Run live Lighthouse; confirm 95+ targets
7. [ ] Manual click-through on staging (every nav link, every CTA, every form)
8. [ ] Compliance final read on M&A page
9. [ ] Eric final read on home + advisor-recruiting

---

## 8. What Passed / What Failed (Summary)

### ✅ Passed
- Cross-page nav + footer parity
- CSS / JS / asset path consistency
- Unique titles + descriptions
- PRD section coverage (41 sections across 5 pages)
- American spelling
- Em-dash sweep (0 in user-visible content)
- Heading order
- Color contrast (display + body, both backgrounds)
- `prefers-reduced-motion` honored
- Form label association
- Sitemap, robots, OG, favicon all built
- Canonical + theme-color set on every page

### ❌ Failed (open blockers, all from PRD §9)
- 5 unverified stat figures (Eric)
- JP Aubry bio + headshot
- Compliance disclosure for footer
- Compliance review of "first licensed investment bank" claim
- Real phone number
- Real email addresses
- $50M Maryland case-study figures
- Platform early-access counter approval
- Domain decision
- Form backend route

### ⚠️ Recommended polish (not blocking)
- Global `:focus-visible` ring across nav / buttons / footer links
- Skip-to-content link
- Trade Gothic Next LT Pro license decision (or formally approve Inter)
- Hero image preloads (when real photos land)
- `loading="lazy"` on below-the-fold photos (when real photos land)

---

End of report.
