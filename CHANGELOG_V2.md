# Revolt — V2 PRD Migration · Changelog

**Date:** 2026-04-29 · **Source:** `PRD_REVOLT_SITE_V2.md` · **Pages touched:** 5

---

## Brand & architecture (site-wide)

| Change | Where | Reason |
|---|---|---|
| `Revolt Financial` → `Revolt` in titles, OG/Twitter cards, OG site_name | All 5 pages, head | V2 §1.1 — brand simplifies to single word at top of house |
| Primary nav reduced from 4 service links to 3 | `components/nav.html` + inlined nav on every page | V2 §1.2 — Platform is infrastructure inside Recruiting, not a fourth offering |
| Primary nav CTA `Text the Desk` → `Contact Us` (anchor, not sms:) | All pages | V2 §1.5 — "contact us" replaces "text the desk" as the universal CTA verb |
| Primary buttons across the site: `Text the desk` → `Contact us` / `Contact Us` (CTAs use mailto: or anchor, not sms:) | Index hero · index §2.9 contact form · advisor §3.11 contact CTA · team §4.7 contact form · platform §6.7 access card 1 · ma §5.8 contact form | V2 §1.5 |
| Form submit button copy `Send to the desk` → `Send` | Index, advisor, team, ma | Implicit from §1.5 voice change |
| Hero secondary CTA "See the four service lines" → "See the three business lines" | Index | V2 §1.2 |
| Footer column structure already V2-aligned (Revolt / Resources / Contact, Platform under Resources). Verified, no change needed. | Footer | V2 §1.3 |
| Footer lede "Revolt is a boutique financial-services talent firm. Recruiting, Team Recruiting, and M&A." (singular brand voice) | Footer | V2 §1.1 |

---

## Page-by-page

### `index.html` — homepage

| Section | Change |
|---|---|
| Title / OG / Twitter | New title: `Revolt · Your book. Your team. Your terms.` Site name: `Revolt`. Image alt rewritten. |
| §2.1 Hero | Eyebrow `BOUTIQUE EXCELLENCE` → `Revolt`. H1 `You have more options than you think.` → **`Your book. Your team. Your terms.`** Lead unchanged. Primary CTA `Text the Desk` (sms:) → **`Contact Us`** (anchor to `#contact`). Secondary CTA copy updated to "three business lines". |
| §2.4 What we do | Renamed in DOM: `2.4 Four Pillars` → **`2.4 Three Business Lines`**. Layout collapsed from `grid-4` (Advisor, Team, M&A, Platform) to **`grid-3` (Revolt Recruiting, Revolt Team Recruiting, Revolt M&A)**. Tile titles renamed. Tile copy refreshed (Recruiting tile mentions 90-day onboarding; Team tile lists six seats). Platform tile removed. |
| §2.6 Process | Step 02 rewritten: was "See the whole market" (we do the mapping). Now **"See your offer before you take the call"** — recruiter-generated link, advisor enters profile, link surfaces real economics across 190+ firms. Step 01 reworded ("Start a real conversation"). |
| §2.9 Contact | H2 `Text the desk.` → **`Contact us.`** "Or text directly: 786-555-1234" → "Or call directly". |

### `advisor-recruiting.html` — Revolt Recruiting

| Section | Change |
|---|---|
| Title / OG / Twitter | `Advisor Recruiting · Revolt Financial` → **`Revolt Recruiting · The deepest contract network in the industry`**. |
| Page label | `02 Advisor Recruiting` → `02 Revolt Recruiting`. Nav comment updated. |
| §3.1 Hero | Eyebrow `Advisor Recruiting` → **`Revolt Recruiting`**. H1 unchanged. |
| §3.6 NEW — "See your offer before you take the call" (tan, between Rule of Three and Case Study) | New section per V2 §3.6. Explains the recruiter-generated link, "we are not a platform / firm with tools sharper than yours" framing. Ghost CTA links to `/platform.html`. |
| §3.7 Case Study | Renumbered from 3.6 (no copy change). |
| §3.8 What You Get | Renumbered from 3.7 (no copy change). |
| §3.9 NEW — Confidentiality block (cream) | New section per V2 §3.9. "You will not find named testimonials on this website." Three paragraphs explaining the discretion principle in place of testimonials. |
| §3.10 FAQ | Renumbered from 3.8 (no copy change). |
| §3.11 Contact CTA | Renumbered from 3.9. H2 `Ready? Text the desk. Not ready? Text the desk anyway.` → **`Ready? Contact us. Not ready? Contact us anyway.`** Primary CTA `Text the Desk` (sms:) → `Contact Us` (mailto:). Added `id="contact"` for nav anchor target. |

### `team-recruiting.html` — Revolt Team Recruiting

| Section | Change |
|---|---|
| Title / OG / Twitter | `Team Recruiting · Revolt Financial · The seats that free the principal` → **`Revolt Team Recruiting · The salary-side bench that frees the principal`**. |
| Page label | `02 Team Recruiting` → `02 Revolt Team Recruiting`. |
| §4.1 Hero | Eyebrow `Team recruiting` → **`Revolt Team Recruiting`**. H1 `The seats that free the principal.` → **`The salary-side bench that frees the principal.`** |
| §4.6 Integrated Engagement | Eyebrow `If you are already a Revolt advisor client` → **`If you are already a Revolt Recruiting client`**. |
| §4.7 Contact | H2 `Build your bench. Text the desk.` → **`Build your bench. Contact us.`** |

### `ma.html` — Revolt M&A

| Section | Change |
|---|---|
| Title / OG / Twitter | `M&A · Revolt Financial · ...` → **`Revolt M&A · The first licensed investment bank built for the independent advisor space`**. OG site_name + image alt updated. |
| §5.1 Hero | Eyebrow `M&A` → **`Revolt M&A`**. H1 unchanged (already locked to V2 spec). New ghost CTA: **"See the two tracks ↓"** (anchor to §5.3). |
| §5.3 Two Tracks | Added `id="tracks"` to support the new hero anchor. |
| §5.7 RESTORED — JP block (black, between Confidentiality and CTA) | Per V2 §5.7. JP photo placeholder (CSS-styled, 280×280 black tile with caption "Final headshot pending"). Bio is intentionally placeholder pending Eric/JP final approval; this is flagged in the §9 open items. |

### `platform.html` — Revolt Platform

| Section | Change |
|---|---|
| Title / OG / Twitter | `Platform · Revolt Financial · The deal data every advisor should see` → **`Revolt Platform · The deal data every advisor should see before they commit to anything`**. |
| Page label | `04 Platform` → `04 Revolt Platform`. |
| §6.1 Hero | Eyebrow `The platform` → **`Revolt Platform`**. H1 unchanged (locked). Lead rewritten per V2 §6.1: opens with **"We are not a platform company. We are a firm with the deepest contract network in the industry, and we built the tools to put that network on a screen."** |
| §6.2 We Are Not a Platform (cream) — REPLACES Coming 2026 | New framing per V2 §6.2. H2: **"We are not a platform. We are a firm with tools sharper than yours."** Two-paragraph explainer (relationships first, tool second). Counter (`247` advisors on early-access list) preserved at the foot of the section. |
| §6.3 Three Pillars | No change. |
| §6.4 We Built the Data Because We Did the Deals (black) — REPLACES "Why It Exists" | New copy per V2 §6.4. H2: **"We built the data because we did the deals."** Two-paragraph explainer establishing relationships-then-code provenance. |
| §6.5 What Makes the Data Different | No change (already aligned). |
| §6.6 Privacy | No change. |
| §6.7 How to Get Access | Path 01 card: `Text the desk` (sms:) → **`Contact Us`** (mailto:). Body copy reflects "Contact us" verb. Path 02 (early-access form) unchanged. Hard rule preserved: no Sign Up, no Try the Platform button. |

---

## Files NOT changed

- `assets/css/revolt.css` — no token changes required for V2; all changes are markup/copy
- `assets/js/revolt.js` — counter, scroll, mobile-menu logic unchanged
- `components/nav.html`, `components/footer.html` — already updated to V2 architecture in earlier passes (these are reference fragments; the canonical nav/footer is inlined per page)
- `sitemap.xml` — no URL slug changes (advisor-recruiting.html stays at that path; PRD does not require a /recruiting redirect)
- `robots.txt`, favicon, OG image — unchanged
- `QA_REPORT.md` — pre-V2 QA; will be regenerated against V2 after Eric signs off on open items

---

## Open items still gating launch (PRD §9 — unchanged from V1)

These are content / compliance / ops blockers, not engineering blockers. Build is V2-complete pending:

1. Final advisor-stat: `190+` firm contracts (Eric to approve specific number for hero + footer use)
2. `$84M` example (homepage §2.7) — Eric to approve publish-safe figure or directional language
3. `40 negotiation points` (advisor §3.7) — Eric to confirm wording
4. `#1 nationally` claim (homepage §2.7) — compliance review
5. `$50M Maryland team` case study (advisor §3.7) — Eric to confirm publish-safe figures
6. Real `+1 786-555-1234` desk number (currently placeholder)
7. Real `desk@` and `enterprise@` mailboxes
8. Compliance signoff on "first licensed investment bank built for the independent advisor space" (M&A §5.1)
9. JP Aubry final bio + credentials + headshot (M&A §5.7)
10. Form `action=` endpoint for the four contact forms + the early-access list (`platform-early-access`)
11. `247` early-access counter — approve real number before launch (platform §6.2)
12. Domain decision: `revoltfinancial.com` vs `revolt.com` (footer + canonical + sitemap)

---

## Hard rules verified post-V2

- ✅ Zero `sms:` links remain on the site (`btn-sms` class still defined in CSS but unused — kept for future use, no token cost)
- ✅ Zero `Text the Desk` strings in user-visible copy across all 5 pages
- ✅ Zero `Sign Up` / `Try the Platform` buttons on platform.html (only Contact Us + email-only early-access form)
- ✅ Single brand voice — "Revolt" everywhere except footer disclosure (where legal entity name will be added pre-launch)
- ✅ Three business lines visible in nav, footer, and homepage §2.4
- ✅ Platform demoted from primary nav, retained as a real page (linked from recruiting §3.6 and footer Resources)
