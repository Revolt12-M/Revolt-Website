# Revolt Financial — Design Tokens v2

Single source of truth for the marketing site rebuild. Every page Claude Code produces references this file. If a value isn't here, the answer is "ask before adding it."

Locked: 2026-04-28. Source: Dillon Agency brand identity PDF, Brand Strategy Guide (Apr 2026), Marketing Strategy (Apr 2026), prior delivered homepage/services HTML.

---

## 1. Color System

Seven colors. Yellow is reserved for headlines and CTAs only. Section backgrounds rotate through the other six (black is the primary dark, slate is a secondary dark for contrast, plus the four warm/cool tones).

```css
:root {
  /* Brand */
  --black:   #0B0E13;  /* PRIMARY dark section bg. The dominant dark of the site. */
  --slate:   #3C4555;  /* SECONDARY dark. Cards on black, occasional dark section
                          when two dark sections need to sit close together. */
  --mustard: #E5A100;  /* H1, primary CTA, accent details — NEVER a section background */
  --tan:     #B0A68E;  /* warm-neutral section bg, muted contrast against black */
  --olive:   #9E9474;  /* warm-tertiary section bg, balances tan */
  --cream:   #DDDAD2;  /* primary light section bg, default page bg */
  --teal:    #5B8A8A;  /* accent section bg, used sparingly (1 section per page max) */

  /* Neutrals (for text + ui) */
  --ink:     #1A1F28;  /* body text on cream/tan/olive */
  --slate-60: rgba(60, 69, 85, 0.6);
  --slate-30: rgba(60, 69, 85, 0.3);
  --cream-80: rgba(221, 218, 210, 0.8);
  --cream-60: rgba(221, 218, 210, 0.6);
  --cream-20: rgba(221, 218, 210, 0.2);
  --white-30: rgba(255, 255, 255, 0.3);  /* hairline borders on black */
  --white:   #FFFFFF;  /* used only for text on dark, never as a bg */
}
```

**Why near-black, not pure `#000`.** `#0B0E13` is a hair off true black with a very slight blue undertone. It reads premium — the way Aston Martin reads premium — where pure `#000` reads flat and cheap on screens. The brand strategy guide and Dillon system both avoid pure black for this reason. Do not change to `#000` without a deliberate review.

**Black vs. slate decision rule.** Use `--black` as the dark section background by default. Use `--slate` when:
- A card sits on a black section and needs to lift off it (slate card on black bg)
- Two consecutive dark sections need a tonal step (rare — try harder to reorder rotation first)
- A photo overlay needs slightly lighter dark to keep photo legibility

### Yellow Discipline (non-negotiable)

Per Eric and the brand strategy: **mustard is a signal color, not a section color**. It earns its weight by being scarce.

- ✅ All H1 headlines (every page)
- ✅ Primary buttons (`Text the Desk`, `Generate My Comparison`)
- ✅ Active nav link underline
- ✅ Section number labels (01 / 02 / 03)
- ✅ Stat figures (the `$84M`, `190+`)
- ✅ Eyebrow keywords for emphasis (1 word per eyebrow max)
- ❌ Never a full section background
- ❌ Never a card background
- ❌ Never used for body copy
- ❌ Never used for borders longer than 48px (the divider-line pattern only)

### Section Background Rotation Rules

Each page must use at least 4 of the 7 backgrounds and never repeat the same background in consecutive sections. Black is the dominant dark; the rotation creates the editorial rhythm Dillon called for.

Recommended rotations per page (specified in PRD):

```
Homepage:      cream → black → tan → cream → olive → black → teal → cream
Advisor Rec:   black → cream → black → tan → cream → olive → black → cream
Team Rec:      cream → black → olive → cream → tan → black → cream
M&A:           black → cream → black → tan → cream → teal → black → cream
Platform:      black → cream → tan → black → olive → cream → black
```

Slate is reserved for cards and photo overlays, not section backgrounds, except in rare cases noted in the PRD per page.

### Text-on-Background Mapping

| Background | H1 | H2/H3 | Body | Eyebrow |
|---|---|---|---|---|
| `--black`   | mustard | white   | cream-80 | mustard |
| `--slate`   | mustard | white   | cream-80 | mustard |
| `--cream`   | mustard | ink     | ink      | slate-60 |
| `--tan`     | mustard | ink     | ink      | slate |
| `--olive`   | mustard | white   | cream    | mustard |
| `--teal`    | mustard | white   | cream-80 | mustard |
| `--white`   | mustard | ink     | ink      | slate-60 |

Note: H2 on cream uses `--ink`, not `--slate`. The earlier draft used slate; ink reads warmer and prevents the H2 from blending into the slate cards on the same section.

---

## 2. Typography

Two families. Both must be self-hosted for performance and to avoid FOIT.

```css
:root {
  --display: 'Degular Display', 'Inter Tight', 'Helvetica Neue', sans-serif;
  --body:    'Trade Gothic Next LT Pro', 'Inter', system-ui, -apple-system, sans-serif;
}
```

**Loading.** Degular Display Bold (.otf) is in `assets/fonts/`. Convert to .woff2 on build (saves ~110KB per page over base64 embedding). Trade Gothic Next LT Pro: ship Light (300) and Bold (700) weights as .woff2. If Trade Gothic Next is unlicensed for web use at deploy time, fall back to Inter — the metrics are close enough that the visual rhythm survives.

```css
@font-face {
  font-family: 'Degular Display';
  src: url('/assets/fonts/DegularDisplay-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Trade Gothic Next LT Pro';
  src: url('/assets/fonts/TradeGothicNext-Light.woff2') format('woff2');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'Trade Gothic Next LT Pro';
  src: url('/assets/fonts/TradeGothicNext-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

### Type Scale

| Token        | Family   | Size (desktop) | Size (mobile) | Weight | Line-height | Letter-spacing |
|--------------|----------|----------------|---------------|--------|-------------|----------------|
| `--h1`       | display  | clamp(56px, 8vw, 120px) | 44px | 700 | 0.92 | -0.02em |
| `--h2`       | display  | clamp(40px, 5vw, 72px)  | 32px | 700 | 0.95 | -0.015em |
| `--h3`       | body     | clamp(20px, 2vw, 26px)  | 18px | 700 | 1.2  | -0.005em |
| `--lead`     | body     | clamp(18px, 1.4vw, 22px)| 17px | 300 | 1.5  | 0 |
| `--body`     | body     | 16px           | 15px          | 300    | 1.6  | 0 |
| `--small`    | body     | 14px           | 13px          | 400    | 1.5  | 0 |
| `--eyebrow`  | body     | 12px           | 11px          | 500    | 1.2  | 0.18em (uppercase) |
| `--label`    | body     | 11px           | 10px          | 500    | 1.2  | 0.2em (uppercase) |

### Display Behaviors

- **H1** is the only place mustard appears in type. Sets the visual hierarchy on every page.
- **Backdrop numerals** (the giant ghosted "190" / "04" pattern from the prior site): use `--display`, weight 700, size `clamp(200px, 25vw, 480px)`, color `currentColor`, opacity `0.04`–`0.06` depending on background. Position absolute, behind content, never readable as data.
- **Strikethrough headline pattern** (e.g. "You are being shown ~~three firms~~. There are one hundred and ninety."): the struck word uses `text-decoration: line-through; text-decoration-color: var(--mustard); text-decoration-thickness: 0.08em;`. Used sparingly — once per page max.
- **Eyebrows** are always uppercase, tracked, and prefixed with a 24px mustard rule (`--`) when paired with an H2.

---

## 3. Spacing & Layout

```css
:root {
  --max-page:     1440px;
  --max-content:  1200px;
  --max-prose:    760px;

  --pad-side:     clamp(24px, 5vw, 72px);
  --pad-section:  clamp(96px, 12vw, 180px);  /* top + bottom of every section */
  --pad-tight:    clamp(64px, 8vw, 120px);   /* trust bars, dividers */

  --gap-xs:  8px;
  --gap-sm:  16px;
  --gap-md:  24px;
  --gap-lg:  40px;
  --gap-xl:  64px;
  --gap-2xl: 96px;
}
```

**Page frame.** Body has `--cream` background, a 24px padding ring on the page, and a max-width container at 1440px. Inside the container, sections run edge-to-edge with `--pad-side` horizontal padding. This gives the editorial "framed page" feel without being precious.

**Square corners everywhere.** `border-radius: 0` is the default. Cards, buttons, inputs, images. The only exception is circular avatars (32px nav, 64px–80px on team blocks if used).

**No box shadows on cards.** Depth comes from background contrast and 1px hairline borders in `slate-30`, never from drop shadows. The exception is button hover lift, defined below.

### Grid System

12-column grid, 24px gutter, expressed via CSS Grid. No frameworks. Common patterns:

```css
.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--gap-md); }
.grid-2  { display: grid; grid-template-columns: 1fr 1fr; gap: var(--gap-lg); }
.grid-3  { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap-md); }
.grid-4  { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--gap-md); }

@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}
```

---

## 4. Components

### Button: Primary

```css
.btn-primary {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: none;
  background: var(--mustard);
  color: var(--slate);
  padding: 18px 32px;
  border: 1.5px solid var(--mustard);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(229, 161, 0, 0.25);
}
.btn-primary::after {
  content: '→';
  font-size: 18px;
  transition: transform 0.3s var(--ease);
}
.btn-primary:hover::after { transform: translateX(4px); }
```

### Button: Ghost (secondary)

```css
.btn-ghost {
  font-family: var(--display);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: transparent;
  color: currentColor;
  padding: 17px 28px;
  border: 1.5px solid currentColor;
  opacity: 0.7;
  transition: opacity 0.25s var(--ease), border-color 0.25s var(--ease);
}
.btn-ghost:hover {
  opacity: 1;
  border-color: var(--mustard);
  color: var(--mustard);
}
```

### Button: Click-to-text (used in nav and footer)

```html
<a class="btn-sms" href="sms:+17865551234">Text the Desk</a>
```

Visual: same as `.btn-primary` but icon is a paper plane glyph (`✉` is a placeholder; use SVG inline). Always live SMS link.

### Eyebrow + Divider Line

```html
<span class="eyebrow"><span class="rule"></span>SECTION LABEL</span>
```

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font: 500 12px/1.2 var(--body);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--mustard);
}
.eyebrow .rule {
  display: inline-block;
  width: 32px;
  height: 1.5px;
  background: var(--mustard);
}
```

### Card: Service Tile (homepage four-pillars)

```css
.tile {
  background: transparent;
  border: 1px solid var(--slate-30);
  padding: var(--gap-lg);
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  position: relative;
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}
.tile:hover {
  border-color: var(--mustard);
  transform: translateY(-4px);
}
.tile__num {
  font: 700 14px/1 var(--display);
  color: var(--mustard);
  letter-spacing: 0.04em;
}
.tile__title { font: 700 28px/1 var(--display); color: inherit; }
.tile__desc  { font: 300 16px/1.6 var(--body); }
```

### Comparison Table (advisor-recruiting / M&A signature pattern)

Two-column row pattern. Left column = "How the industry does it." Right column = "How Revolt does it." Six rows minimum, each row a single concept.

```css
.compare__row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--slate-30); padding: var(--gap-md) 0; }
.compare__row .industry { color: var(--slate-60); padding-right: var(--gap-lg); }
.compare__row .revolt   { color: var(--slate); border-left: 2px solid var(--mustard); padding-left: var(--gap-md); }
```

### FAQ Accordion (no JS required)

```html
<details class="faq">
  <summary>Question goes here</summary>
  <p>Answer goes here.</p>
</details>
```

Use native `<details>`. Style summary with a custom plus/minus indicator. Keeps it lightweight.

---

## 5. Imagery & Photography

**Treatment.** All photos run grayscale by default with a slight contrast stretch. Apply duotone overlays in slate or mustard only when a section needs more atmosphere — never in the hero (the hero is the hero, the photo serves the headline).

```bash
# ImageMagick conversion pipeline (run on every brand photo before deploy)
convert input.jpg \
  -colorspace sRGB \
  -colorspace Gray \
  -contrast-stretch 2%x1% \
  -quality 85 \
  -resize 2000x \
  output.jpg
```

**Hero backgrounds.** Always darkened with a gradient overlay so the H1 has 4.5:1 minimum contrast:

```css
.hero {
  background:
    linear-gradient(180deg, rgba(11,14,19,0.55) 0%, rgba(11,14,19,0.85) 100%),
    url('/assets/images/hero.jpg') center/cover no-repeat;
}
```

**Ambient drift animation.** Hero backgrounds slow-zoom over 25s on infinite alternate loop:

```css
@keyframes ambientDrift {
  0%   { transform: scale(1.0)  translate(0, 0); }
  100% { transform: scale(1.08) translate(-1%, -1%); }
}
.hero__photo { animation: ambientDrift 25s ease-in-out infinite alternate; }
```

**Asset list.** Brand photo set lives in `assets/images/brand/`. Recommended assignments per page in the PRD.

---

## 6. Motion & Animation

```css
:root {
  --ease:       cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-swift: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Hero entrance (page load)

Stagger headline → subtitle → buttons with 200ms offsets:

```css
.hero h1   { animation: fadeUp 0.9s var(--ease-out) 0.2s both; }
.hero p    { animation: fadeUp 0.9s var(--ease-out) 0.4s both; }
.hero .cta { animation: fadeUp 0.9s var(--ease-out) 0.6s both; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Scroll reveal (Intersection Observer)

Single observer instance, threshold 0.15, attaches `.is-visible` to elements with `[data-reveal]`:

```javascript
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
```

```css
[data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.9s var(--ease-out), transform 0.9s var(--ease-out); }
[data-reveal].is-visible { opacity: 1; transform: translateY(0); }

[data-reveal][data-stagger="1"].is-visible { transition-delay: 0.1s; }
[data-reveal][data-stagger="2"].is-visible { transition-delay: 0.2s; }
[data-reveal][data-stagger="3"].is-visible { transition-delay: 0.3s; }
[data-reveal][data-stagger="4"].is-visible { transition-delay: 0.4s; }
```

### Hover Library

| Element       | Effect |
|---------------|--------|
| Primary CTA   | translateY(-2px) + mustard glow shadow + arrow shifts right 4px |
| Ghost CTA     | opacity 0.7 → 1, border + text shift to mustard |
| Service tile  | translateY(-4px), border-color → mustard |
| Nav link      | underline grows from 0 to full width over 0.3s |
| FAQ summary   | rotate plus indicator 45° to become close icon |

### Respect Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Nav

Persistent across all pages. Transparent over hero on dark sections, solid `--cream` with bottom border once scrolled past 80px.

```html
<nav class="nav" data-scroll-state="top">
  <a class="nav__logo" href="/">
    <span class="mark">Revolt</span>
    <span class="tagline">Boutique excellence</span>
  </a>
  <ul class="nav__links">
    <li><a href="/advisor-recruiting">Advisor Recruiting</a></li>
    <li><a href="/team-recruiting">Team Recruiting</a></li>
    <li><a href="/ma">M&amp;A</a></li>
    <li><a href="/platform">Platform</a></li>
  </ul>
  <a class="btn-primary btn-sms" href="sms:+17865551234">Text the Desk</a>
</nav>
```

Logo: "Revolt" in Degular Display Bold 22px. Tagline "Boutique excellence" in Trade Gothic Light 11px, 0.15em tracked, uppercase, opacity 0.6. Mustard mark (4px square dot) sits to the right of "Revolt" with 8px gap.

Scroll behavior: JS toggles `data-scroll-state="scrolled"` past 80px scroll, swapping background + adding 1px slate-30 bottom border.

Mobile (<900px): hamburger reveals a full-screen takeover with the same five links stacked, slate background, mustard headlines, large 32px tappable links.

---

## 8. Footer

Slate background, three columns on desktop, stacked on mobile.

- **Column 1:** Revolt mark + tagline + 2-line description
- **Column 2:** Site map (the four service pages + platform)
- **Column 3:** Contact (Text the Desk button + email + LinkedIn link)
- **Bottom rule:** 1px mustard line, full width
- **Bottom row:** copyright + legal disclosure (placeholder — confirm with compliance)

Spacing: `--pad-section` top, `--pad-tight` bottom. Full container width.

---

## 9. Forms (Email Capture, Contact)

```css
.field {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
}
.field label {
  font: 500 11px/1.2 var(--body);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--slate-60);
}
.field input, .field textarea {
  font: 300 16px/1.5 var(--body);
  background: transparent;
  border: 0;
  border-bottom: 1.5px solid var(--slate-30);
  padding: 12px 0;
  color: inherit;
  transition: border-color 0.3s var(--ease);
}
.field input:focus, .field textarea:focus {
  outline: none;
  border-color: var(--mustard);
}
```

Underlined-only inputs. No boxed fields. Square corners (per the rule). Submit button is `.btn-primary`.

---

## 10. Page Frame Template

Every page in the build uses this skeleton. Claude Code: do not deviate.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[Page-specific title] · Revolt Financial</title>
  <meta name="description" content="[Page-specific description, 140–160 chars]">
  <link rel="stylesheet" href="/assets/css/revolt.css">
  <link rel="preload" href="/assets/fonts/DegularDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
</head>
<body>
  <nav class="nav">...</nav>
  <main class="page">
    <!-- Sections per the PRD -->
  </main>
  <footer class="footer">...</footer>
  <script src="/assets/js/revolt.js" defer></script>
</body>
</html>
```

Shared CSS at `/assets/css/revolt.css`. Shared JS (Intersection Observer + nav scroll state) at `/assets/js/revolt.js`. Per-page styles inline only when truly page-specific (e.g. the bucket grid on `/advisor-recruiting`).

---

## 11. Performance Targets

- **LCP:** under 2.0s on 4G
- **CLS:** under 0.05
- **First load JS:** under 30KB (it's just the IO + nav, no framework)
- **Total page weight:** under 600KB (excluding hero photo, which is preloaded)
- **Lighthouse:** 95+ on Performance, Accessibility, Best Practices

---

## 12. Voice & Copy Rules (carried forward to every page)

- **American spelling.** Behavioral, recognized, color, personalized.
- **No em dashes.** Use commas, semicolons, colons, periods. Em dashes read as AI.
- **No emojis** in public-facing copy.
- **Short sentences.** One idea per sentence, one idea per paragraph.
- **Numbers as figures, not words,** when stating proof: `$84M`, `190+`, `40 negotiation points`.
- **"Revolt" only** in copy. Not "Revolt Financial" except in the footer + legal.
- **Click-to-text is the primary CTA** on every page.
- **Loss-aversion framing:** lead with what the advisor stands to lose by trusting the wrong process, not what they stand to gain by switching firms.
- **Archetype filter (apply before publishing every block of copy):** "Would a confident, dominant, slightly dangerous dealmaker who happens to be the best in the world at what he does, and who genuinely does not care whether you like him, say this? Would he say it this way?"
- **2% warmer:** show the fight for the client, let results carry the confidence, use the advisor's voice wherever possible.

---

## 13. What's NOT in this token system (and why)

- **No design framework** (Tailwind, Bootstrap, etc.). Plain CSS, custom properties, vanilla JS. Performance + control.
- **No CSS-in-JS.** Static HTML output, served from the file system.
- **No client-side router.** Each page is a real HTML file at `/page-name.html` (or `/page-name/index.html` for clean URLs).
- **No analytics in v1.** Add Plausible or similar after launch when there's a measurement plan.
- **No A/B test framework.** Premature.
- **No CMS.** All copy lives in the HTML files. The marketing team edits HTML directly or through a workflow we add later.

---

End of tokens. Update this file before changing any value referenced above. If a new value is needed, add it here first, then propagate.
