# Revolt Financial — Marketing Site v2 PRD

**Status:** Ready to build · **Owner:** Max Lettau · **Date:** 2026-04-28
**Build target:** Five pages, Webflow or static HTML on Vercel/Render
**Companion docs:** `DESIGN_TOKENS.md` (canonical design system), `PROMPT_PACK.md` (Claude Code prompts)

---

## 0. Build Brief (read first)

This document specifies the rebuild of the Revolt Financial marketing site. Five pages. The site sits at `revoltfinancial.com` (or `revolt.com` if Eric finalizes the domain swap; copy adapts either way).

The site has one job: get the right advisor into a conversation with Eric or one of his recruiters. Every page ends in either a Text-the-Desk CTA, a request for a recruiter-generated platform link, or a direct contact CTA. There are no other primary conversion paths.

The site does **not** include:
- Any prospect-facing platform functionality. The Revolt platform is a separate Next.js app described in the Revolt v2 PRD; this marketing site only positions the platform and points prospects to the recruiter who can give them a tokenized link.
- Public registration. Prospects enter the platform via a recruiter-generated link, not a self-serve signup.
- A Marketing service line page. Marketing is internal to Revolt, not sold as a service.
- A Services hub page. The four service pages live independently in the nav.
- An About page. Deferred to phase 2.
- A Contact page. Replaced by per-page contact sections + persistent nav CTA.

**Voice and copy rules are in `DESIGN_TOKENS.md` Section 12.** Apply on every block.

---

## 1. Site Architecture

```
/                       Homepage
/advisor-recruiting     Service detail (highest-priority funnel page)
/team-recruiting        Service detail
/ma                     Service detail (highest-differentiation page)
/platform               Coming-2026 positioning + recruiter-handoff
/privacy, /terms        Legal (placeholder, real copy from compliance pre-launch)
```

**Persistent nav** (per `DESIGN_TOKENS.md` Section 7): Advisor Recruiting · Team Recruiting · M&A · Platform · Text the Desk (primary CTA, mustard).

**Persistent footer** (per `DESIGN_TOKENS.md` Section 8).

---

## 2. Homepage (`/`)

**Purpose.** Establish boutique-excellence positioning in 3 seconds. Surface the four service lines. Drive a $1M+ producer into a conversation.

**Background rotation:** `cream → black → tan → cream → olive → black → teal → cream`

**Hero asset:** brand photo `assets/images/brand/Two_People_Blue.jpg` (full-bleed, 65% black gradient overlay).

### Section 2.1 — Hero (black over photo)

- **Eyebrow:** `BOUTIQUE EXCELLENCE`
- **H1 (mustard, ~120px desktop):** `You have more options than you think.`
- **Lead:** `190+ firm contracts. A principal in every meeting. Every deal structured for you, not for whoever is writing the check.`
- **Primary CTA:** `Text the Desk →` (sms link)
- **Secondary CTA (ghost):** `See the four service lines ↓` (scrolls to section 2.4)
- **Backdrop numeral:** "190" at 22vw, opacity 0.04, behind text on the right third.
- **Animation:** Hero entrance cascade per tokens (200ms staggered fades up). Background photo ambient drift.

### Section 2.2 — Trust Bar (black, solid, no photo)

Four-column row of stats, all in mustard, centered.

| Figure | Label |
|---|---|
| `$84M` | Recruited assets, 2024 |
| `190+` | Firm contracts |
| `40` | Negotiation points per deal |
| `#1` | Nationally, last 24 months |

- **Note:** All four numbers must be Eric-verified before launch. Footnote anchor for any contested figure.
- **Animation:** Numbers count up from 0 on scroll into view (over 1.2s, ease-out).

### Section 2.3 — Positioning (tan, solid)

- **Eyebrow:** `BUILT BOUTIQUE. RUN DEEP.`
- **H2 (ink):** `Most advisors are shown three firms. We work with one hundred and ninety.`
- **Body:** `The recruiting industry built itself on volume. Generic outreach. Three or four firm partners. Junior associates running the call. We built Revolt because the people making the most consequential financial decisions of their careers deserve someone who has been in every room before. Discreet by default. Relentless on your behalf.`
- **Backdrop numeral:** "01" mustard, top-right corner, 18vw.

### Section 2.4 — Four Pillars Grid (cream)

- **Eyebrow:** `WHAT WE DO`
- **H2 (ink):** `Four service lines. One operating principle.`

Four tiles in a 2×2 grid (4-column on wide desktop). Each tile uses the `.tile` component from tokens.

| # | Title | Description | Link |
|---|-------|-------------|------|
| 01 | Advisor Recruiting | The deepest contract network in the industry. 190+ firm relationships. Principal in every meeting. | `/advisor-recruiting` |
| 02 | Team Recruiting | The seats that free the principal to do what only the principal can do. Associate, paraplanner, ops, compliance. | `/team-recruiting` |
| 03 | M&A | The first licensed investment bank built for the independent advisor space. Sell-side advisory, succession, complex deals. | `/ma` |
| 04 | Platform | Coming 2026. Upload once. See what 190 firms would actually offer. The market, in minutes. | `/platform` |

- **Tile hover:** translateY(-4px), border to mustard, full tile clickable.
- **Animation:** Stagger reveal, 100ms offsets.

### Section 2.5 — Differentiators (olive, solid)

- **Eyebrow:** `WHAT THE OTHERS STRUCTURALLY CANNOT DO`
- **H2 (white):** `Five things every other recruiter has to say no to.`

Five numbered rows, large numerals on the left, claim + 1-line proof on the right. Comparison table styling per tokens.

| # | Claim | Proof |
|---|-------|-------|
| 01 | Show you the full market | We hold 190+ firm contracts. The next firm down holds 3 to 5. |
| 02 | Put a principal in every meeting | Every deal Revolt runs has a principal in every conversation, from intake through onboarding day one. |
| 03 | Custom-structure your deal | We have negotiated 40-point deal structures. Most recruiters submit a name and wait for an offer. |
| 04 | Lead M&A with a license | We are the first licensed investment bank built for the independent advisor space. Consultants are not bankers. |
| 05 | Stay out of the press | We have never publicized a team we have moved. We do not need credit. |

### Section 2.6 — How It Works (cream)

- **Eyebrow:** `THE PROCESS`
- **H2 (ink):** `Three steps from quiet curiosity to signed deal.`

Three large cards, numbered, with mustard top border (3px) and slate icons.

| # | Title | Body |
|---|-------|------|
| 01 | Start a conversation | Text the desk. Thirty minutes. Confidential. We listen first, talk second. No pressure, no pitch. |
| 02 | See the whole market | We map your practice across the relevant firm structures. You see what your business is worth at every firm that fits your shape. |
| 03 | Structure the move | When you decide to move, we negotiate every line. Forty points. Real numbers. Principals only. From signature to onboarding day one. |

### Section 2.7 — Founder Credibility (black over Guy_Standing_Green photo)

Split layout. Left half: photo panel of Eric (or atmospheric brand photo as placeholder). Right half: pull quote + three metrics.

- **Pull quote (Trade Gothic Light, 32px, cream):** `"These are not transactions. These are family legacies. When the stakes are generational, the advisor deserves someone who fights for them like it is personal."`
- **Attribution:** `ERIC GRINBERG · FOUNDER · REVOLT`
- **Metric strip below (3 columns):**
  - `10 deals`. Over $1M commission, 24 months.
  - `$84M`. Recruited 2024.
  - `0 names`. Publicized.

### Section 2.8 — For Firms & Custodians (teal, solid)

Subtle B2B hook. Half-width container, left-aligned.

- **Eyebrow:** `FOR FIRMS AND CUSTODIANS`
- **H3 (white):** `If you want to understand where the market is moving, talk to us.`
- **Body:** `Revolt sees deal flow across 190+ firms in real time. We do not sell advisor data. We do, occasionally, sit down with firm leadership and custodians who want a true read on how the market is pricing talent.`
- **CTA (ghost, white):** `Inquire →` (mailto link)

### Section 2.9 — Contact (cream, anchor `#contact`)

Two-column. Left: copy. Right: form.

- **H2 (ink):** `Text the desk.`
- **Lead:** `Confidential. Thirty minutes. The first ten minutes are free of anyone trying to move you anywhere.`

**Form fields** (underlined per tokens):
- Name
- Firm (current)
- Mobile (for the click-to-text follow-up)
- "What is on your mind?" (textarea)

**Submit copy:** `Send to the desk →`

**Beneath form:** `Or text directly: 786-555-1234. Or email: desk@revoltfinancial.com.` (placeholders — replace pre-launch.)

**Form backend:** Resend, Formspree, or a route to Zoho. CTO to confirm.

---

## 3. Advisor Recruiting (`/advisor-recruiting`)

**Purpose.** The deepest, most credentialed page on the site. Where Eric sends the $50M+ producer who got the text. The Four Structural Buckets framework lives here.

**Background rotation:** `black → cream → black → tan → cream → olive → black → cream`

### Section 3.1 — Hero (black over Two_People_Blue)

- **Eyebrow:** `ADVISOR RECRUITING`
- **H1 (mustard):** `You are being shown three firms. There are one hundred and ninety.`
  - Apply strikethrough pattern: "three firms" gets the mustard line-through per tokens.
- **Lead:** `The last recruiter call you ever make. 190 firm contracts. 40 negotiation points per deal. A principal in every meeting until your first onboarding day.`
- **Primary CTA:** `Start a private conversation →`
- **Backdrop numeral:** "190" at 25vw, opacity 0.04.

### Section 3.2 — The Industry Is Structurally Broken (cream)

- **Eyebrow:** `THE PROBLEM`
- **H2 (ink):** `Most advisors get sold. We get hired.`

Six-row comparison table. Use `.compare__row` from tokens.

| The standard | Revolt |
|---|---|
| 3 to 5 firm contracts | 190+ firm contracts, audited annually |
| Phone calls and email blasts | Principal-led intake, in person where it matters |
| Submit a name, wait for an offer | Custom 40-point deal structures |
| Junior associate runs the call | Principal in every meeting through onboarding day one |
| 10% commission, paid by the firm | Contingent on you staying. We win when you stay. |
| Press release at signature | Never publicized. Discreet by default. |

### Section 3.3 — The Four Structural Buckets (black over photo)

This is the signature framework on the page. Four tile cards in a 2×2 grid. Backdrop numeral "04".

- **Eyebrow:** `THE FRAMEWORK`
- **H2 (mustard):** `Most advisors get pitched from inside one bucket without knowing the other three exist.`
- **Lead:** `Before the firm question, there is a structure question. The right move is the right structure first, the right firm second. Here are the four.`

Four cards. Each card shows:
- Bucket number (mustard, top-left)
- Bucket name (display, white)
- 4-row mini-spec (label/value)

| # | Bucket | Economics | Autonomy | Equity | Best fit |
|---|--------|-----------|----------|--------|----------|
| 01 | W-2 at a major firm | Salary + production grid | Low. Compliance dictates. | None in firm. | Advisors who want infrastructure and scale and accept the cap. |
| 02 | Independent BD / Insurance BD | 80–95% payout grid | Medium. Platform dictates. | None in firm; book is yours. | Advisors who want grid economics and moderate freedom. |
| 03 | Hybrid RIA | RIA fees + BD commissions | High. You set the platform. | Build practice equity. | Advisors with both fee + commission books who want optionality. |
| 04 | RIA | 100% of revenue, fee-only | Highest. You are the platform. | Full practice equity. | Advisors building a generational firm. |

**Note to Claude Code:** This grid is the page's most visited section per the prior architecture doc. Make it readable. Comparison-grid layout is non-negotiable; do not collapse to a list.

### Section 3.4 — The Process (tan)

- **Eyebrow:** `WHAT A REVOLT ENGAGEMENT LOOKS LIKE`
- **H2 (ink):** `Seven stages. Ninety days, typically.`

Vertical numbered steps. Mustard rule between each. Each step has a title, 2-line description, and time estimate on the right.

| # | Stage | Description | Typical |
|---|-------|-------------|---------|
| 01 | Intake | Thirty minutes. We listen. You decide whether to keep talking. | 30 min |
| 02 | Practice mapping | We document what you have actually built: production, AUM, client mix, team, real estate. | 1 week |
| 03 | Bucket selection | The structural question first. Right structure, then right firm. | Week 2 |
| 04 | Firm shortlist | Three firms, never more. Each one a real fit, not filler. | Week 3 |
| 05 | Term sheet review | Apples-to-apples comparison. Net-of-cost economics, not headline grids. | Week 4 |
| 06 | Negotiation | Up to 40 points per deal. Valuation, transition, platform, model fees, real estate. | Weeks 5–10 |
| 07 | Onboarding | Principal stays in the room through your first day at the new firm. | Days 1–90 |

### Section 3.5 — Rule of Three (cream)

- **Eyebrow:** `THE PRINCIPLE`
- **H2 (ink):** `We will never put more than three firms in front of you.`
- **Body:** `Volume is what recruiters do when they cannot pick. Five firms, eight firms, ten firms. The generosity is a tell. By the time we sit down with you, the work of narrowing has already been done. What you see is the short list. The reasons are ours to defend.`
- **Visual:** Backdrop numeral "3" at 30vw, mustard, opacity 0.06.

### Section 3.6 — Anonymized Case Study (olive)

Two-column. Left: narrative. Right: 2×2 data grid.

- **Eyebrow:** `RECENT WORK`
- **H2 (white):** `$50M Maryland team. Stuck for two years. Ninety days to signed.`
- **Body:** `The team had been in conversation with two retained recruiters for over a year before they reached us. Both recruiters held the same handful of firm relationships. The deal economics on the table were a 110% transition with a five-year retention. Standard. We ran a 40-point negotiation. The final structure included a higher transition, a shorter retention, real-estate concessions, and a custom equity ramp the firm had never offered before. Materially higher economic value. Materially less risk on the back end. Six months from intake to signature.`

Right grid:

| Production | $50M |
|---|---|
| Negotiation points | 40 |
| Custom terms unlocked | 4 |
| Time to close | 6 months |

**Note:** Numbers and structure are directional. Eric to confirm publish-safe before launch.

### Section 3.7 — What You Get (black)

- **Eyebrow:** `WHAT YOU GET`
- **H2 (mustard):** `Five things you cannot get from a retained recruiter.`

Five rows, mustard left border, slate-30 bottom border between.

1. **The full firm market.** 190+ contracts vs. 3–5.
2. **A principal, not an associate.** Every meeting, intake to onboarding.
3. **Custom deal terms.** 40 negotiation points. Standard recruiters submit a name.
4. **Skin in the game.** Our fee is contingent on you staying through retention.
5. **Confidentiality.** No press release. No leaks. Your team finds out when you decide.

### Section 3.8 — FAQ (cream)

Native `<details>` accordion. Eight questions.

1. **How long does a move take?** Typically 90 days from intake to signed deal, but the timeline runs on your readiness, not ours. Some teams take 12 months. Some take 30 days.
2. **What does Revolt actually cost me?** Nothing direct. We are paid by the firm you join, contingent on you staying through the retention period. We win when you stay.
3. **How do you avoid conflicts of interest with 190 firms?** We do not have favorites. We are not paid more by one firm than another. The 190-contract network exists so we never have to push a firm that does not fit you.
4. **Can I talk to you without committing?** Yes. The first conversation is thirty minutes. No commitment. No follow-up unless you ask for it.
5. **What if I am not ready to move for two years?** That is the right time to start the conversation. The advisors who get the best deals plan the move years out.
6. **What size practice do you work with?** Sweet spot is $1M+ in production, $10M+ in AUM. We have done deals from $500K to $50M.
7. **What happens to my team and clients?** Your team can move with you. Your clients move with you. We map both before the offer goes out.
8. **Will my current firm find out?** No. We have never publicized a team we have moved. Discretion is operational, not aspirational.

### Section 3.9 — Contact CTA (black over Building_Green)

Same `.contact` pattern as homepage section 2.9. Headline copy:

- **H2 (mustard):** `Ready? Text the desk. Not ready? Text the desk anyway.`

---

## 4. Team Recruiting (`/team-recruiting`)

**Purpose.** Position staff recruiting as the back-half of a complete practice operation. Cross-sell the advisor-recruiting client who just moved and now needs a team.

**Background rotation:** `cream → black → olive → cream → tan → black → cream`

### Section 4.1 — Hero (black over Two_People_Green photo)

- **Eyebrow:** `TEAM RECRUITING`
- **H1 (mustard):** `The seats that free the principal.`
- **Lead:** `Associate advisors. Paraplanners. Operations. Client service. Compliance. Recruited to the shape of your practice, not the shape of a resume.`
- **Primary CTA:** `Build your bench →`

### Section 4.2 — Why Most Firms Staff Wrong (cream)

- **Eyebrow:** `THE PROBLEM`
- **H2 (ink):** `The cost of one wrong hire is bigger than the cost of staying short.`
- **Body:** `Most firms hire for the resume on the page. The associate who looks right on paper, the paraplanner with the right designations, the ops lead with the right tenure. Then the practice changes shape and the hire does not. Our work starts with the practice, not the role. We map what you actually need before we open the search.`

Three small stat callouts beneath:
- `35%`. First-year turnover for advisor-team hires industry-wide.
- `9 mo.` Typical time-to-fill on a senior advisor hire run by a non-specialist.
- `1.5x`. Annual salary cost of a mis-hire in a $10M+ practice.

### Section 4.3 — Six Roles We Recruit (olive)

Six tiles, 3-column grid (1-column mobile). Each tile:

| # | Role | What it does | When you need it | Comp range |
|---|------|--------------|------------------|------------|
| 01 | Associate Advisor | Carries client meetings, builds the next layer of the practice. | $5M+ in production, no ramp underneath. | $80K–$180K + bonus |
| 02 | Paraplanner | Owns the financial plan. Frees the principal from analyst work. | Plan-heavy book, more than 50 plans active. | $65K–$110K |
| 03 | Client Service Associate | First voice the client hears. Operations + relationship. | More than 80 households per advisor. | $55K–$85K |
| 04 | Operations Lead | Runs the trade desk, billing, vendor management, onboarding. | More than $250M AUM, multi-advisor. | $90K–$160K |
| 05 | Compliance Officer | Owns the 24/7 compliance burden. Required at scale. | Hybrid RIA / RIA at $500M+ AUM. | $120K–$220K |
| 06 | Marketing / Growth | Owns lead generation, referrals, content, brand. | Practice ready to scale, principal-bottlenecked. | $80K–$160K |

### Section 4.4 — Vetting Framework (cream)

Three-stage horizontal flow.

- **Eyebrow:** `HOW WE VET`
- **H2 (ink):** `Three stages. Practice fit before resume fit.`

| 01 | Practice-fit interview | We screen against your specific operation, not a generic profile. |
| 02 | Structured behavioral | Fixed-question interview, multiple Revolt principals scoring independently. |
| 03 | Paid trial | One-week paid trial assignment. The candidate works on a real (de-risked) deliverable before any offer. |

### Section 4.5 — 90-Day Onboarding (tan)

- **Eyebrow:** `WHAT YOU GET ON DAY ONE`
- **H2 (ink):** `A scorecard, three check-ins, and a fallback plan.`

Four cards in a row:
- **Day 1:** Onboarding plan, role scorecard, 30/60/90 milestone targets.
- **Day 30:** Structured check-in. Adjust scope. Flag friction.
- **Day 60:** Mid-cycle review. Manager + Revolt principal + new hire, three-way.
- **Day 90:** Performance review against scorecard. Decision point: extend, refine, or replace at no additional fee.

### Section 4.6 — Integrated Engagement Advantage (black)

Two-column. Left: copy. Right: visual diagram (numbered timeline).

- **Eyebrow:** `IF YOU ARE ALREADY A REVOLT ADVISOR CLIENT`
- **H2 (mustard):** `We sequence the team move with the advisor move. Zero downtime.`
- **Body:** `When an advisor signs a transition deal with us, the next bottleneck is the team. Most firms move and then start hiring, which means a 60-to-90-day capacity gap right when client retention matters most. We run the team search in parallel. By the time you walk into the new platform on day one, the team you need is already cleared and ready to start.`

Visual on the right (no fancy animation needed — clean numbered diagram):
- Week -8: Advisor deal under negotiation. Team search starts.
- Week -4: Top candidates cleared. Offers structured.
- Week 0: Advisor day one. Team ready to onboard.
- Week +1: Team day one. Practice operates at full capacity from week one.

### Section 4.7 — CTA (cream)

- **H2 (ink):** `Build your bench. Text the desk.`
- Standard contact pattern.

---

## 5. M&A (`/ma`)

**Purpose.** Own "the first licensed investment bank built for the independent advisor space" as positioning. Convert sell-side-curious advisors into confidential intake calls.

**Background rotation:** `black → cream → black → tan → cream → teal → black → cream`

This is the most serious page on the site. Tone is denser, more institutional. JP Aubry is the credibility figure here.

### Section 5.1 — Hero (black over atmospheric photo, no people)

- **Eyebrow:** `M&A`
- **H1 (mustard):** `When the transaction is generational, the process has to match.`
- **Lead:** `The first and only licensed investment bank built for the independent advisor space. Sell-side advisory, succession planning, complex multi-party deals.`
- **Primary CTA:** `Start a confidential intake →`
- **Backdrop:** "M&A" in massive Degular Bold, opacity 0.04.

### Section 5.2 — The Banker vs. The Consultant (cream)

This page's signature comparison. Two-column, 8 rows.

- **Eyebrow:** `WHY THIS MATTERS`
- **H2 (ink):** `Most advisor M&A is run by consultants. We are not consultants.`

| The consultant standard | A licensed investment bank |
|---|---|
| Rule-of-thumb valuations (2x revenue, 7x EBITDA) | Institutional valuation methodology, three-lens model |
| Buyer universe of 5 to 15 known names | Curated bid process across the relevant strategic and financial buyer universe |
| No fiduciary duty | Fiduciary duty under FINRA / SEC oversight |
| Solo-operator deal team | Staffed deal team: principal, analyst, legal coordinator |
| Press release at close | Never publicized. Confidentiality is operational. |
| Deal priced to the consultant's quarter | Deal priced to your generational outcome |
| Negotiation by phone | Negotiation by structured competing bids |
| No regulatory recourse | Registered representatives, audit trail, regulatory backstop |

### Section 5.3 — The Two Tracks (black)

Two cards, side by side.

- **Eyebrow:** `TWO TRACKS`
- **H2 (mustard):** `Knowing which track you are on is the first decision.`

**Track A — Succession Planning** (3-7 years out)
- **Best fit:** $1M–$25M annual revenue, internal successor possible
- **What we run:** Internal successor identification, equity ramp design, phased transition, tax-efficient exit structure
- **Value created:** Maximizes after-tax net to the seller, protects practice continuity, retains key clients
- **Timeline:** 12–36 months

**Track B — Complex / Multi-Party Deal** (sell-side now)
- **Best fit:** Multi-partner cap tables, carve-outs, strategic roll-ups, sell-side advisory
- **What we run:** Competing bid process, valuation modeling, negotiation across multiple parties, regulatory close
- **Value created:** Strategic premium over headline multiple, structure that survives diligence, clean close
- **Timeline:** 6–18 months

### Section 5.4 — The Seven-Stage Process (tan)

- **Eyebrow:** `HOW WE RUN A DEAL`
- **H2 (ink):** `Seven stages. Each one a discipline, not a checklist.`

Vertical numbered list:

| # | Stage | What happens |
|---|-------|--------------|
| 01 | Engagement | Confidential intake. Scope, fees, deal team agreed. |
| 02 | Valuation | Three-lens model. Cash flow, strategic, succession. Each lens is its own analysis. |
| 03 | Positioning | Practice prepared for buyer view. Materials, financials, narrative. |
| 04 | Buyer curation | Strategic + financial buyer universe mapped. Curated, not blasted. If your name shows up in an industry newsletter, we failed at stage four. |
| 05 | Bidding | Structured competing bid process. Apples-to-apples terms, not just headline price. |
| 06 | Negotiation | Multi-round. Price, structure, earnouts, retention, regulatory close conditions. |
| 07 | Close & integration | Regulatory close. 90-day post-close integration support. |

### Section 5.5 — Three-Lens Valuation (cream)

Three cards, equal weight.

- **Eyebrow:** `VALUATION METHODOLOGY`
- **H2 (ink):** `Three lenses. Whichever produces the highest defensible number wins.`

| Lens | What it measures | Inputs |
|------|------------------|--------|
| Cash flow | What the practice earns, in the buyer's hands | Revenue, EBITDA, run-rate adjustments, normalization, DCF |
| Strategic | What the practice enables for the buyer | Geographic fit, client segment fit, capability gap, cross-sell unlocked |
| Succession | What the practice risks losing if the deal does not happen | Key-person concentration, attrition risk, retention dependency |

### Section 5.6 — Confidentiality (teal)

Full section. This is hero-sized on this page.

- **Eyebrow:** `THE OPERATING PRINCIPLE`
- **H2 (white):** `Discreet by default. Relentless on your behalf.`
- **Body:** `On every other page on this site, confidentiality is a value. On this page, it is the product. Three rules:`

Three columns:

1. **We never publicize.** No press release. No case study with your name. No mention to industry press. Ever.
2. **The buyer universe is curated.** Your practice is not shopped. Buyers are approached one at a time, under NDA, with a defined process.
3. **Your team finds out when you decide.** Not before. The deal team is one principal, one analyst, one legal coordinator. That is the entire room.

### Section 5.7 — Who Runs It (black, JP block)

Two-column. Left: photo panel (placeholder until JP headshot). Right: bio.

- **Eyebrow:** `WHO RUNS THIS`
- **H3 (mustard):** `JP Aubry · Head of Investment Banking`
- **Body:** `JP runs Revolt's M&A practice. Licensed under [registration to be filled by compliance]. He has run sell-side advisory and succession transactions in the advisor space for [X years, fill]. The discipline he brings, institutional valuation, structured bid processes, regulatory close, is the difference between a transaction that closes and a transaction that closes well.`

**Note to Claude Code:** Bio is placeholder. Eric/JP to provide final bio + credentials + headshot before launch.

### Section 5.8 — CTA (cream)

- **H2 (ink):** `Start a confidential intake.`
- **Body:** `A strategy session is two hours. The first ten minutes are spent making sure we are the right room for the conversation. The rest is the conversation.`
- Contact form per pattern.

---

## 6. Platform (`/platform`)

**Purpose.** Position the platform as the most credible deal-comparison product in the industry. Convert curious advisors into "ask my recruiter for a link" requests. Build a small early-access list as a hedge.

**Background rotation:** `black → cream → tan → black → olive → cream → black`

**Critical scope clarification (from PRD):** The platform is NOT a public signup. Prospects enter via a recruiter-generated tokenized link. This page positions the platform and tells the visitor how to get a link. There is no "Sign Up" button.

### Section 6.1 — Hero (black, dark, no photo — tech-forward, atmospheric)

- **Eyebrow:** `THE PLATFORM`
- **H1 (mustard):** `The deal data every advisor should see before they commit to anything.`
- **Lead:** `Upload once. See what 190 firms would actually offer. The market, in minutes. No phone call required to start.`
- **Primary CTA:** `Ask your recruiter for a link →` (anchors to section 6.7)
- **Secondary CTA (ghost):** `Get the early-access brief ↓` (anchors to section 6.8)
- **Backdrop:** A subtle grid pattern (1px slate-30 lines, 60px grid) overlaid on the black section. No photo.

### Section 6.2 — Coming 2026 + Live Counter (cream)

- **Eyebrow:** `COMING 2026`
- **H2 (ink):** `In private beta with select Revolt advisor prospects.`
- **Body:** `The platform is currently live for advisors in active conversation with a Revolt recruiter. Public access is rolling out through 2026 as we expand the dataset.`
- **Counter (large, mustard, animated count-up):** `[ N ] advisors on the early access list.`
  - `N` is a static placeholder until a real counter is wired. Default to a credible number (e.g. 247) and update manually pre-launch.

### Section 6.3 — What It Does (tan)

Three-column feature grid. Each pillar gets a card with: pillar name, 1-paragraph description, mini visual placeholder.

- **Eyebrow:** `THREE PILLARS`
- **H2 (ink):** `Self-service valuation. Full-network offer modeling. Practice intelligence.`

| Pillar | Description |
|--------|-------------|
| **Self-service valuation** | Enter your practice profile. The platform returns a valuation across three lenses, cash flow, strategic, succession, with the inputs visible. The same model we run on M&A deals. |
| **Full-network offer modeling** | The 190-firm contract network fed directly into the model. Every offer priced to your specific practice, within 10 basis points. Updated quarterly. |
| **Practice intelligence** | Once you have a baseline, the platform tracks the levers, production mix, fee model, client concentration, equity structure, that move your number. The same 27 levers Eric uses on every advisor call. |

Each card has a placeholder image area (slate background, subtle grid, "Preview coming" label) where product screenshots will go pre-launch.

### Section 6.4 — Why It Exists (black)

- **Eyebrow:** `WHY WE BUILT IT`
- **H2 (mustard):** `Most advisors get five hours of expert recruiter time in their entire career. They spend it all on one firm.`
- **Body:** `The platform exists because the recruiting industry built itself on scarcity. Most advisors talk to a recruiter once or twice in a career, usually under pressure, usually after they have already half-decided. By the time they have data, they have committed. We flipped it. The platform gives every advisor the equivalent of 200 hours of recruiter analysis on the first visit. The data is real. The model is the same one we run on closed deals. Your recruiter walks you through it.`

### Section 6.5 — What Makes the Data Different (olive)

Three small claims, equal weight, large numerals.

| `190` | Firm contracts feeding the model. The next platform down has 5 to 15. |
| `±10 bps` | Accuracy target on every offer in the model. Verified against closed deals. |
| `Quarterly` | Refresh cadence. Deal terms move; the model moves with them. |

### Section 6.6 — Privacy & Data Handling (cream)

- **Eyebrow:** `WHAT WE DO WITH YOUR DATA`
- **H2 (ink):** `Your data is yours. We never sell it. We never share it without your explicit request.`
- **Body:** `The platform stores your practice profile only for as long as you are in conversation with a Revolt recruiter. Aggregate, anonymized data: what segments of the market are looking, where, how often. That is used internally to improve the model. We do not sell that data to firms. We do not share it with anyone outside Revolt without your written request.`

### Section 6.7 — How to Get Access (black, anchor `#how-to-access`)

- **Eyebrow:** `HOW TO GET ACCESS`
- **H2 (mustard):** `Two ways in.`

Two cards.

**Card 1 — Talk to a recruiter (primary).**
- Body: The fastest way is the same way every Revolt engagement starts. Text the desk. Thirty minutes. If we are the right fit for the conversation, your recruiter generates a private link. You enter your practice profile and the platform opens.
- CTA: `Text the desk →`

**Card 2 — Join early access (secondary).**
- Body: Not ready for a recruiter conversation? The early-access list opens to public users in waves through 2026. Drop your email and we will send the public invite when your wave opens.
- Form: single email field, `Add me to the list →` button. Backend: same as homepage.

### Section 6.8 — For Firms & Custodians (cream, small)

Brief. Same B2B hook as homepage section 2.8 but pointed at the platform:

- **H3 (ink):** `For firms and custodians: there is a data product.`
- **Body:** `If you want to understand where the market is moving, which firms are gaining advisor mindshare, which deal structures are winning, where talent is concentrating, talk to us about the data product. Aggregate, anonymized, never advisor-identifiable. Email enterprise@revoltfinancial.com.`

---

## 7. Platform Integration Handoff (technical)

This section is for the developer building the marketing site, not for the Revolt platform CTO.

### What the marketing site does
- Hosts the public marketing pages described above.
- Captures contact form submissions (Resend or Formspree → Zoho or directly to Eric's inbox).
- Captures early-access emails on `/platform` (same backend, separate list).

### What the marketing site does NOT do
- It does not generate platform tokens. That happens inside the platform's recruiter dashboard.
- It does not authenticate users. There is no login on the marketing site.
- It does not host the deal-comparison flow. That is the platform app.

### How a prospect enters the platform
1. Prospect texts the desk or fills the contact form on the marketing site.
2. Eric or a recruiter calls them back through normal pipeline.
3. If the recruiter decides to send a link, the recruiter generates the token in the platform's recruiter dashboard.
4. The recruiter sends the prospect a tokenized URL like `app.revoltfinancial.com/d/[token]` (or whatever subdomain the platform CTO settles on).
5. The prospect clicks the link and lands on the platform app, completely outside the marketing site.

### Recommended subdomain split
- `revoltfinancial.com` (or `revolt.com` if domain swap completes) — marketing site
- `app.revoltfinancial.com` — platform app (Next.js, deployed to Render per platform PRD)

The marketing site links to `app.revoltfinancial.com` only in two places: the platform-page CTAs (which link to `#how-to-access`, not directly to the app) and any future "advisor login" link in the footer.

### Visual consistency
The platform app should consume `DESIGN_TOKENS.md` as the canonical design system. The platform app already has its own UI conventions per its PRD, but where the two products visually meet (logo, type, primary button, color palette), they should be identical. The platform CTO should review the tokens file and reconcile.

---

## 8. Phased Build Order

For a single developer working with Claude Code, in priority order:

1. **Shared chrome.** Tokens file → CSS file → nav component → footer component → page frame template. This unblocks everything.
2. **Homepage.** Highest traffic. Sets the rhythm for the other pages.
3. **Advisor Recruiting.** Highest-intent funnel page. Where Eric sends $50M+ producers.
4. **M&A.** Highest-differentiation page. The licensed-investment-bank claim is the moat.
5. **Platform.** Builds the early-access list. Unblocks the platform team's growth.
6. **Team Recruiting.** Rounds out the services set. Cross-sell to existing advisor clients.
7. **Phase 2 polish.** Image asset swap with real brand photos. Real form backend wiring. Deploy + DNS + analytics.

Each page is one prompt to Claude Code. Six prompts total (one for chrome + five for pages). Prompts are in `PROMPT_PACK.md`.

---

## 9. Open Items (do NOT ship until resolved)

- [ ] Eric verifies all stat figures: `$84M`, `190+`, `40 negotiation points`, `#1 nationally`, `10 deals over $1M commission`.
- [ ] Eric/JP provide JP Aubry final bio + credentials + headshot.
- [ ] Compliance provides registered-investment-bank disclosure language for footer.
- [ ] Compliance reviews "first licensed investment bank in the advisor space" claim. If contestable, soften to "the first licensed investment bank built for" or similar.
- [ ] Real phone number for `Text the Desk` link (currently placeholder `+1 786-555-1234`).
- [ ] Real email addresses (`desk@`, `enterprise@`).
- [ ] $50M Maryland team case study: Eric confirms publish-safe figures or approves directional language.
- [ ] Platform early-access counter: real number from the platform team or static placeholder Eric approves.
- [ ] Trade Gothic Next LT Pro web license confirmed, or fallback to Inter approved.
- [ ] Domain decision: stay on `revoltfinancial.com` or swap to `revolt.com`. Affects copy in two places (homepage hero, platform-page subdomain reference).
- [ ] Form backend wiring: Resend / Formspree / Zoho route confirmed.

---

End of PRD. Pair with `DESIGN_TOKENS.md` and `PROMPT_PACK.md` to build.
