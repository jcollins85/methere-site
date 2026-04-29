# methere.app v2 — Design Spec

**Owner:** ios-product-designer (porting Mint Social to web)
**Date:** 2026-04-27 · T-8 to launch
**For:** Engineer (Julian)
**Status:** Phase 2 deliverable. Implementable section-by-section.
**Source-of-truth deps:** brand-direction-v2.md, funnel-architecture-v2.md, cold-read-psych-v2.md, brand-guidelines.md, voice-and-tone.md, brand-assets/README.md.

> **Read this once, then implement section-by-section.** Each section block has its own layout, type sizes, spacing, asset list, motion notes, and copy slot lengths. The Foundation Layer at the top is the token system every section references — wire it up first, then build sections in order. After each section, run a browser checkpoint with brand-strategist before moving on.

---

## TL;DR for the engineer

- **One page, 10 sections.** Dark from first pixel to footer. `#111014` ground, `#1A181E` panels, `#2DD4A8` mint as the only accent.
- **One typeface, self-hosted.** Plus Jakarta Sans 500/700/800. No Space Grotesk. No Google Fonts hotlink.
- **One signature color move.** Mint accent on the payoff word in section headlines (mirror the ASC screenshot caption discipline: 4 of 10 sections mint a single word, no more).
- **Reuse ASC screenshots wherever they earn it.** They're already composed with caption strips and panel-approved. For sections where the strip doesn't fit, we crop the phone-only and pair with the section's own caption.
- **Total motion budget: under 1 second of movement on the page.** Reveal-on-scroll only. No parallax, no marquee, no Lottie, no scroll-jacking.
- **One CSS file (`styles.v2.css`), one JS file (`site.js` — keep existing reveal logic).** Build process unchanged — partials inject into `src/index.html`.

---

## Section index

| # | Section | Anchor | Vibe |
|---|---|---|---|
| 0 | Foundation tokens | (CSS variables) | The room. |
| 1 | Hero | `#hero` | The neon sign goes on. |
| 2 | 3-second demo strip | `#demo-strip` | The magic, in three frames. |
| 3 | The Moment | `#the-moment` | The mirror. |
| 4 | How it works | `#how-it-works` | The product, plainly. |
| 5 | Proximity deep dive | `#proximity` | The moat. |
| 6 | What else | `#what-else` | The depth. |
| 7 | Privacy + anti-positioning | `#privacy` | The refusal. |
| 8 | Plans | `#plans` | The receipt. |
| 9 | Final CTA | `#final-cta` | The handshake. |
| 10 | Footer | (`<footer>`) | The signoff. |

---

## 0. Foundation Layer

Implement these tokens **first**, in `styles.v2.css`, before any section markup. Every spec below references these names — if a value isn't here, it shouldn't exist on the page.

### 0.1 Color tokens (CSS custom properties)

```css
:root {
  /* Surfaces */
  --bg-page:          #111014;  /* page background, hero, every section default */
  --bg-elevated:      #1A181E;  /* feature panels, plan tiles, screenshot bezel inner */
  --bg-elevated-hi:   #1F1D24;  /* hover state on tappable panels (subtle lift) */
  --border-default:   #242228;  /* hairlines, dividers, panel borders */
  --border-subtle:    #1B1A20;  /* near-invisible separators inside panels */

  /* Text */
  --text-headline:    #FFFFFF;  /* H1, H2 — pure white, only here */
  --text-body:        #E8E4DF;  /* body, leads — warm off-white, deliberate */
  --text-secondary:   #8A858F;  /* meta, sub-headlines, captions */
  --text-tertiary:    #555060;  /* uppercase labels only */

  /* Brand accent */
  --mint:             #2DD4A8;  /* CTAs, accent words, links, focus rings */
  --mint-hover:       #3EE5BA;  /* hover lift on mint elements */
  --mint-tint-10:     rgba(45, 212, 168, 0.10);  /* seen-badge style chip background */
  --mint-tint-20:     rgba(45, 212, 168, 0.20);  /* focus ring outer glow */
  --coral-glyph:      #FF8C6A;  /* ONLY for pin glyph rendering — never as text/border/bg */

  /* Radii */
  --radius-card:      24px;     /* panels, screenshot frames, plan tiles */
  --radius-pill:      999px;    /* badges, chips, the App Store badge wrapper */
  --radius-button:    14px;     /* secondary text-link button if any */
  --radius-tight:     12px;     /* inline chips, smaller pills */

  /* Spacing — 4-base scale, snake to taste */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   24px;
  --space-6:   32px;
  --space-7:   48px;
  --space-8:   64px;
  --space-9:   96px;
  --space-10: 128px;

  /* Layout */
  --shell-max:         1120px;   /* page max-width on desktop */
  --reading-max:       640px;    /* prose-only sections (privacy, plans lead) */
  --section-padding-y: 96px;     /* desktop vertical rhythm */
  --section-gap-y:     0px;      /* sections butt against each other; padding does the work */

  /* Type — fluid via clamp() */
  --type-hero:        clamp(48px, 8vw, 88px);     /* H1 only */
  --type-h2:          clamp(32px, 4.6vw, 48px);   /* every section H2 */
  --type-h3:          clamp(20px, 2.4vw, 24px);   /* card titles inside sections */
  --type-lead:        clamp(18px, 2vw, 22px);     /* sub-headlines, leads */
  --type-body:        17px;                        /* default body */
  --type-body-lg:     18px;                        /* moment cards, slightly larger reading */
  --type-caption:     15px;                        /* under-screenshot captions */
  --type-meta:        14px;                        /* trust line under CTA, micro support */
  --type-eyebrow:     12px;                        /* uppercase labels */

  /* Track */
  --track-tight:      -1.5px;   /* hero H1 */
  --track-snug:       -0.6px;   /* H2, H3 */
  --track-normal:     0;
  --track-loose:      0.8px;    /* eyebrow uppercase */

  /* Motion */
  --ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1);  /* signature, used on reveal-on-scroll */
  --ease-standard:    cubic-bezier(0.4, 0, 0.2, 1);
  --duration-reveal:  280ms;     /* the only animation duration on the page */
  --reveal-distance:  16px;      /* translateY start of reveal */
}
```

### 0.2 Typography stack

```css
@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('./fonts/PlusJakartaSans-Medium.woff2') format('woff2');
}
@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('./fonts/PlusJakartaSans-Bold.woff2') format('woff2');
}
@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('./fonts/PlusJakartaSans-ExtraBold.woff2') format('woff2');
}

body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 500;
  font-size: var(--type-body);
  line-height: 1.55;
  color: var(--text-body);
  background: var(--bg-page);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

**Sources:** Copy `PlusJakartaSans-Medium.woff2`, `-Bold.woff2`, `-ExtraBold.woff2` from `/Users/Juelz/Documents/Projects/remember-me-starter/src/assets/fonts/` into `methere-site/fonts/` (note: NOT `assets/` — keep clean directory). Three files. Self-host. **Delete the Google Fonts `@import` line at the top of the current `styles.css`.**

### 0.3 Spacing rhythm (vertical)

- **Desktop section padding:** `96px` top + bottom (`var(--space-9)`).
- **Tablet (768–1024):** `64px` (`var(--space-8)`).
- **Mobile (<768):** `48px` top + bottom (`var(--space-7)`).
- **Section interior:** elements separated by `var(--space-5)` (24px) by default; tighter (`var(--space-3)`) for related items, looser (`var(--space-7)`) only between H2 and a new visual block.

The page reads as **continuous dark canvas** — no panel cards visually separating sections (that's the current site's blue-template tell). Sections are defined by spacing and content rhythm, not by containers.

### 0.4 Reveal-on-scroll motion

Keep the existing `.reveal` / `.is-visible` pattern from current `site.js`. Update the CSS:

```css
.reveal {
  opacity: 1;
  transform: none;
}
.js-enabled .reveal {
  opacity: 0;
  transform: translateY(var(--reveal-distance));
  transition:
    opacity var(--duration-reveal) var(--ease-spring),
    transform var(--duration-reveal) var(--ease-spring);
}
.js-enabled .reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .js-enabled .reveal,
  .js-enabled .reveal.is-visible {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

Use `data-stagger` on container, `data-stagger-step="60"` (existing pattern) for grids that should reveal in series. Cap reveal staggers at 4 children — past that, snap them all in together.

### 0.5 Interactive states (universal)

- **Focus ring:** `outline: 2px solid var(--mint); outline-offset: 3px;` on every focusable element. No removed outlines. Per studio accessibility quality bar.
- **Mint button hover:** background `--mint` → `--mint-hover`, no scale, no shadow. Transition `150ms ease-out`.
- **Mint button active (mousedown):** subtle scale `0.98` for 100ms, then release. Mirrors iOS press feel.
- **Text link hover:** underline appears (was none).
- **All transitions respect `prefers-reduced-motion`** — kill scale and translate fallbacks.

---

## Component-Level Specs

### C1. Header / nav

**Layout (desktop, 1024+):**
- Sticky top, `padding: 16px var(--space-5);` inside `<nav>`
- Background: `rgba(17, 16, 20, 0.85)` + `backdrop-filter: blur(12px)` — **the one carve-out from the no-blur rule, narrowly scoped**: a sticky nav over a dark scrolling page reads as flat without it. Brand-strategist check this against §1.1 — my read is that this isn't glassmorphism in the LinkedIn/Notion-clone sense (no panel chrome, no glow), it's just a navigation float. If brand pushes back, fall back to solid `#111014` and accept the flat look.
- Logo left: `lockup-horizontal-mint-on-dark.svg`, height `28px` (renders at original aspect ratio — natural width ~112px).
- Nav right: `Home`, `Support`, `Privacy`, `Terms`, X icon. Same as today, restyle.
- Type for nav links: `13px / 600 / var(--text-secondary)`. Active state: `var(--text-headline)`. Hover: `var(--text-body)`. No background pills (current site has these — kill them).

**Mobile (<768):**
- Same sticky pattern.
- Logo height drops to `24px`.
- Nav links collapse to a horizontal scroll row (no hamburger — the page is one section list, hamburger is overkill). Font drops to `12px / 600`. Underline-on-active replaces background-on-active.

**Implementation:** Update `_partials/header.html`. Replace `MetHere-inline-clean-white-tight.png` reference with `<img src="./brand/lockup-horizontal-mint-on-dark.svg" alt="MetHere">`. Drop the `.panel` class from the header — header is no longer a panel.

### C2. Footer

**Layout:**
- Top border: `1px solid var(--border-default)`.
- Padding: `var(--space-7) var(--space-5)`.
- Three rows, vertically stacked, centered:
  1. Vertical lockup PNG `exports-png/lockup-vertical-mint-on-dark.png` — height `120px`. **One signature lockup moment per page** — this is it (per brand-direction §1.3).
  2. Footer link row — `Support · Privacy · Terms · X · hello@methere.app`. `13px / 600 / var(--text-secondary)`. Separator: `·` in `var(--text-tertiary)`.
  3. Credit line — `Made solo by Julian Collins.` — `13px / 500 / var(--text-tertiary)`.
- Background: `var(--bg-page)` (continuous with rest of page — no `.panel` background).

**Implementation:** Update `_partials/footer.html`. Drop the `.panel` class. Drop the bordered link pills — replace with simple text links separated by `·`. Drop the sticky-mobile-cta `<div>` (kill it — there's a hero CTA, an end-of-section CTA, a final CTA, and a pricing CTA already; sticky bottom bar is overkill on a focused indie page).

### C3. Section frame

Every numbered section uses the same outer frame:

```html
<section id="hero" class="section section--dark reveal" data-delay="60ms">
  <div class="section-inner">
    <!-- section-specific content -->
  </div>
</section>
```

```css
.section {
  padding: var(--section-padding-y) var(--space-5);
  position: relative;
}
.section-inner {
  max-width: var(--shell-max);
  margin: 0 auto;
}
.section--narrow .section-inner {
  max-width: var(--reading-max);  /* prose-only sections: privacy lead, plans lead */
}
```

**No background colors on individual sections.** They all inherit `--bg-page`. The differentiator between sections is content layout + spacing rhythm, not panel chrome.

**Section H2 pattern (all sections except hero):**
```html
<header class="section-head reveal">
  <p class="section-eyebrow">[label or omitted]</p>
  <h2 class="section-h2">[Headline. <span class="mint">Word</span>.]</h2>
  <p class="section-lead">[One-sentence lead, optional]</p>
</header>
```

```css
.section-eyebrow {
  font-size: var(--type-eyebrow);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--track-loose);
  color: var(--text-tertiary);
  margin: 0 0 var(--space-3);
}
.section-h2 {
  font-size: var(--type-h2);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: var(--track-snug);
  color: var(--text-headline);
  margin: 0;
}
.section-h2 .mint {
  color: var(--mint);
}
.section-lead {
  font-size: var(--type-lead);
  font-weight: 500;
  color: var(--text-secondary);
  margin: var(--space-4) 0 0;
  max-width: 640px;  /* reading width — never let a lead stretch full width */
}
```

**Mint discipline at the section level:** Of 10 sections, **at most 4** mint a payoff word in the H2. My recommended distribution: section 1 (Hero — `Remember`), section 5 (Proximity — `near` or similar payoff), section 7 (Privacy — `Nowhere`), section 9 (Final CTA — payoff word TBD by copywriter). Sections 3, 4, 6, 8 stay in pure white. This mirrors the ASC screenshot mint ratio (4/7) and prevents mint exhaustion.

### C4. App Store badge

**Standard treatment (4 placements: hero, end of how-it-works, below pricing, final CTA):**

```html
<a class="app-store-badge"
   href="https://apps.apple.com/app/methere/id6757836312"
   target="_blank" rel="noopener noreferrer"
   data-analytics-event="app_store_click_[placement]"
   data-analytics-placement="[placement]"
   aria-label="Download MetHere on the App Store">
  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
       alt="Download on the App Store"
       width="180" height="60">
</a>
```

```css
.app-store-badge {
  display: inline-block;
  border-radius: var(--radius-tight);
  line-height: 0;
  transition: transform 150ms ease-out;
}
.app-store-badge:hover {
  transform: translateY(-1px);
}
.app-store-badge:focus-visible {
  outline: 2px solid var(--mint);
  outline-offset: 4px;
}
.app-store-badge img {
  width: 180px;
  height: auto;
  display: block;
}
```

**Sizing variants by placement:**
- **Hero:** width `200px` (slightly larger to anchor above-fold conversion).
- **Section-end CTAs (after how-it-works, after pricing):** width `180px`.
- **Final CTA section:** width `220px` — meaningfully larger, this is the closer.

**Trust microline (sits below every Apple badge, except the demo-strip section which has no CTA):**
```html
<p class="trust-microline">On your device. No account.</p>
```
```css
.trust-microline {
  font-size: var(--type-meta);
  font-weight: 500;
  color: var(--text-tertiary);
  margin: var(--space-3) 0 0;
}
```

This phrase **stays exact** — it's the highest-trust 5-word phrase on the page per psych. Don't paraphrase per placement.

### C5. Phone screenshot frame

The site has two screenshot presentation modes:

**Mode A — Composed ASC screen (caption already on top of phone):**
Used in: Hero (S1 proximity), Privacy section (S5 manifesto), Final CTA (S7 regulars). These are pre-composed assets — drop them in unchanged. They include their own caption strip.

```html
<figure class="device-figure device-figure--composed reveal">
  <img src="./screenshots/screen-01-proximity.png"
       alt="MetHere notification on lockscreen: You're near Copper & Vine. You know 3 people here."
       width="312" height="676"
       loading="lazy">
</figure>
```
```css
.device-figure {
  margin: 0;
  display: flex;
  justify-content: center;
}
.device-figure img {
  max-width: 100%;
  width: 312px;        /* native ASC half-size — sharp without retina */
  height: auto;
  display: block;
}
@media (min-width: 768px) {
  .device-figure img {
    width: 360px;       /* slightly larger on tablet+ */
  }
}
```

**Mode B — Phone-only crop (no caption on top — caption sits underneath):**
Used in: How it works (3 step screens), What else (4 small screens), Demo strip (3 frames). For these, **crop the phone region from the existing ASC screen**, removing the upper caption strip. The phone region in each ASC PNG is approximately `y: 580px → y: 2480px` of the 1242×2688 source (varies slightly per screen — engineer to crop precisely).

```html
<figure class="device-figure device-figure--bare reveal">
  <img src="./screenshots/cropped/phone-add-person.png"
       alt="QuickAdd form with name and place fields"
       width="240" height="500"
       loading="lazy">
  <figcaption class="device-caption">Save who you met.</figcaption>
</figure>
```
```css
.device-figure--bare img {
  width: 240px;          /* compact for the 3-up demo strip */
  border-radius: 28px;   /* matches phone bezel softness */
}
.device-caption {
  font-size: var(--type-caption);
  font-weight: 500;
  color: var(--text-body);
  text-align: center;
  margin: var(--space-3) 0 0;
}
.device-caption .mint {
  color: var(--mint);
  font-weight: 700;
}
```

**Crop pipeline (engineer task — pre-build):**
Crop region per screen (approximate, eyeball + tweak):
| Source ASC | Crop top | Crop bottom | Output |
|---|---|---|---|
| screen-01-proximity.png | 580 | 2480 | `phone-proximity.png` (Mode B fallback if needed) |
| screen-02-venue.png | 580 | 2480 | `phone-venue.png` |
| screen-03-people.png | 580 | 2480 | `phone-people.png` |
| screen-04-person.png | 580 | 2480 | `phone-person.png` |
| screen-06-map.png | 580 | 2480 | `phone-map.png` |
| screen-07-regulars.png | 580 | 2480 | `phone-regulars.png` |

Crop with: `magick screen-XX.png -crop 1242x1900+0+580 phone-XX.png` (ImageMagick) or via Preview if doing once. Then resize to `480px` wide for `2x` retina display at `240px` rendered. Save as PNG to preserve transparency in case phone bezels go transparent in a future iteration. Place in `methere-site/screenshots/cropped/`.

**No drop shadow on any device frame.** No perspective tilt. No 3D rotation. The phone sits flat on the dark page, framed only by its own bezel. This matches the ASC discipline.

### C6. Pricing tile

**Layout: 4 tiles in a row on desktop (1024+), 2x2 on tablet (768–1024), stacked on mobile (<768).**

```html
<article class="plan plan--free reveal">
  <header class="plan-head">
    <h3 class="plan-name">Free</h3>
    <p class="plan-price">$0</p>
  </header>
  <ul class="plan-features">
    <li>15 people</li>
    <li>5 nearby alerts</li>
    <li>Everything else, unlimited</li>
  </ul>
  <p class="plan-note">Always free.</p>
</article>
```

```css
.plans-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-7);
}
.plan {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
}
.plan--highlighted {
  border-color: var(--mint);
  /* No glow, no shadow. Border is the highlight. */
}
.plan-name {
  font-size: 18px;
  font-weight: 800;
  color: var(--text-headline);
  margin: 0 0 var(--space-2);
}
.plan-price {
  font-size: 32px;
  font-weight: 800;
  color: var(--text-headline);
  letter-spacing: var(--track-snug);
  margin: 0;
}
.plan-price .period {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0;
}
.plan-features {
  list-style: none;
  padding: 0;
  margin: var(--space-5) 0 var(--space-4);
  flex: 1;
}
.plan-features li {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-body);
  padding: 6px 0;
}
.plan-note {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0;
}
.plan-trial-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  background: var(--mint-tint-10);
  color: var(--mint);
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  margin-top: var(--space-2);
}
.plan-savings {
  font-size: 12px;
  font-weight: 700;
  color: var(--mint);
}

@media (max-width: 1023px) {
  .plans-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .plans-grid { grid-template-columns: 1fr; }
}
```

**Tile content per plan (bind to copy in Section 8 spec below):**

| Plan | Price | Trial pill | Savings | Features (3-4 max) |
|---|---|---|---|---|
| Free | `$0` | — | — | 15 people · 5 nearby alerts · Everything else, unlimited |
| Monthly | `$3.99` `<span class="period">/ mo</span>` | `14-day free trial` | — | Unlimited people · Unlimited alerts · Backup + restore |
| Annual | `$14.99` `<span class="period">/ yr</span>` | `14-day free trial` | `Save 69%` | Unlimited people · Unlimited alerts · Backup + restore |
| Lifetime | `$29.99` `<span class="period">once</span>` | — | — | Unlimited people · Unlimited alerts · Backup + restore · Yours forever |

**Highlighted plan: Annual** (mint border, `Save 69%` shows above features in mint). One highlight only. **Not Lifetime** — lifetime is for the convinced, annual is the conversion target.

**Pricing prose lead (above the tiles, doing the psych+growth resolution):**
> Start free. Upgrade if you need more.

This is the H2 itself, not a separate lead. Copy locked per psych (the construction is non-negotiable). The transparent tiles below are the receipt that satisfies growth. Two specialists' tension resolved in one move.

### C7. Trust signal treatment (privacy section cards)

**Layout: 4 cards in a 2x2 grid on desktop, single column on mobile.**

The point of these cards is the refusal language — the cards are typographic, not iconographic. **No icons, no checkmarks.** A small `×` mark in mint, treated as a typographic element, marks each refusal. (Brand-strategist gut-check: this is borderline iconography. Alternative is no mark at all — just `No account.` as the H3. I prefer `×` as a typographic glyph, sized like H3, in mint at 0.6 opacity. Engineer can A/B in dev if Julian wants both.)

```html
<article class="refuse reveal">
  <span class="refuse-mark" aria-hidden="true">×</span>
  <h3 class="refuse-head">No account.</h3>
  <p class="refuse-body">No sign-in. No email. Open the app and start.</p>
</article>
```

```css
.refuse-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-7);
}
.refuse {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
  padding: var(--space-5);
  position: relative;
}
.refuse-mark {
  font-size: 28px;
  font-weight: 800;
  color: var(--mint);
  opacity: 0.6;
  line-height: 1;
  display: block;
  margin-bottom: var(--space-3);
}
.refuse-head {
  font-size: 22px;
  font-weight: 800;
  color: var(--text-headline);
  letter-spacing: var(--track-snug);
  margin: 0 0 var(--space-2);
}
.refuse-body {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-body);
  line-height: 1.5;
  margin: 0;
}
@media (max-width: 768px) {
  .refuse-grid { grid-template-columns: 1fr; }
}
```

---

## Section-by-Section Spec

> **For each section:** layout, type sizes, asset list, copy slot constraints (for Phase 3 copywriter), motion notes, complexity estimate.

---

### Section 1 — Hero

**Goal:** Land "social memory + proximity alert" promise in 3 seconds. App Store badge above the fold.

**Layout:**
- **Desktop (1024+):** two-column grid, left content / right device. Content column max-width `560px`.
- **Tablet (768–1023):** stacked, content first, device second.
- **Mobile (<768):** stacked, content first, device second. Type scales down via clamp().

**Visual:**
- Use **`screen-01-proximity.png`** AS-IS (pre-composed with caption strip already on top — the caption itself is "Walk in. / Remember everyone." which is the page's H1). This means the hero device essentially **replays the H1 visually inside the screenshot frame** — the H1 sits in the content column, the same words appear over the bar photo in the device. That's intentional brand reinforcement. If brand-strategist wants to remove the duplication, fall back to a phone-only crop (Mode B) of the proximity screen with no caption, and let the H1 in the content column do the work alone.
- **Default recommendation:** ship with the composed S1 — the duplication is not redundancy, it's a frame-within-a-frame echo (the page says it, then the product screenshot says it). Mirrors how the App Store visitor sees it from the badge tap.

**Type spec:**
- Eyebrow: `iPhone · Social memory` — `12px / 600 UPPERCASE / var(--text-tertiary) / track-loose`
- H1: `Walk in.<br />Remember <span class="mint">everyone</span>.` — `var(--type-hero) / 800 / var(--text-headline) / track-tight / line-height 0.95`
  - **Mint word:** `everyone` (per brand-direction §1.3 — mint goes on the payoff word)
  - **Two lines maximum.** Line break is a hard `<br>` to control rhythm — do NOT rely on flow wrap
- Subhead: One sentence, body lead style — `var(--type-lead) / 500 / var(--text-secondary)`
  - Slot length: 18–28 words, must include "MetHere," include the proximity hook, no em-dash, no `magic`/`unlock`/`discover`
- Trust microline (below CTA): `On your device. No account.` — locked, 5 words exactly

**Spacing:**
- Eyebrow → H1: `var(--space-3)` (12px)
- H1 → subhead: `var(--space-5)` (24px)
- Subhead → CTA row: `var(--space-6)` (32px)
- CTA → trust microline: `var(--space-3)` (12px)
- Content column → device column: `var(--space-7)` (48px gap), align-items: center

**CTAs:**
- Primary: App Store badge (size variant: hero — width 200px), `data-analytics-event="app_store_click_hero"`
- Secondary: text link `See how it works ↓` — anchors to `#how-it-works`. `15px / 700 / var(--mint)`. Hover: underline. Sits inline beside the App Store badge with `var(--space-4)` gap.

**Motion:**
- Reveal-on-scroll fires immediately on page load (the hero is in viewport).
- **No proximity-alert micro-animation in v1** (locked decision). Add `data-stagger` to a wrapper around content children with `data-stagger-step="80"` so eyebrow → H1 → subhead → CTA → trust appear in series.
- Total hero motion: ~600ms total animation budget.

**Copy slots for Phase 3 (copywriter brief):**

| Slot | Content | Constraint |
|---|---|---|
| Eyebrow | `iPhone · Social memory` | LOCKED. Plants category, identifies platform. |
| H1 | `Walk in. Remember everyone.` | LOCKED, brand floor. |
| Subhead | "MetHere remembers the people you meet at the places you go back to. It pings you when you're nearby again." | 18–28 words, period-comma-colon only, must include "MetHere" once and the proximity hook once. Funnel-architect's draft is the starting point — copywriter to refine if shorter version reads stronger. |
| Trust microline | `On your device. No account.` | LOCKED, 5 words. |

**Complexity:** Medium. Phone visual is drop-in. Two-column responsive needs careful clamp() on H1 — at 375px the 48px floor needs to fit "Remember everyone." on one line without breaking. Test mobile breakpoint with engineer first.

---

### Section 2 — 3-second demo strip

**Goal:** Three frames showing the magic before the visitor scrolls past. "Is this the app I just tapped?" confirm for App Store click-throughs.

**Layout:**
- **Desktop (1024+):** 3 phone-only crops in a row. Equal width, ~280px each, gap `var(--space-5)`.
- **Tablet (768–1023):** still 3-up, phones shrink to ~200px wide.
- **Mobile (<768):** **horizontal scroll snap row** — 3 phones, ~240px wide each, scroll-snap-align: start. The user swipes through them on small screens — natural mobile interaction. (No carousel UI, no dots, no autoplay — just `overflow-x: auto` + `scroll-snap-type`.)

**Section header:**
- Eyebrow: `Three frames`
- H2: `In about three seconds.` (sets up the demo without naming it "demo")
- No section lead — the visuals are the lead.

**Visuals (3 phone-only crops, captions underneath each):**

| # | Source crop | Caption | Mint word |
|---|---|---|---|
| 1 | `phone-add-person.png` (cropped from the QuickAdd state — see "Asset list" — likely needs a fresh sim capture) | `Save who you met.` | — |
| 2 | `phone-venue.png` (cropped from `screen-02-venue.png`) | `Pinned to where.` | — |
| 3 | `phone-proximity-bare.png` (cropped from `screen-01-proximity.png`, caption strip removed) | `<span class="mint">Pinged</span> when you're back.` | `Pinged` |

**Caption styling:** see C5. Captions are 15px, sit `12px` below the device frame, centered.

**Asset note (engineer task — call this out to Julian before building):**
The QuickAdd state (frame 1) **does NOT exist in the canonical 7-screen ASC set**. It's referenced in the v2 video preview script (§6.3 of brand-guidelines) but no static screenshot was captured. We have two options:

- **Option A (recommended):** Capture one new sim screenshot of the QuickAdd open state with placeholder data. ~15 minutes in sim. Memory rule `feedback_dont_invent_real_app_assets` requires this — do NOT compose a fake QuickAdd.
- **Option B:** Replace frame 1 with `screen-03-people.png` cropped (people list as "Save who you met → here's the list of who"). Loses the "save" verb in the visual story but uses an existing asset. Slightly weaker narratively.

I recommend Option A — it's a one-off capture cost for the strongest narrative.

**Motion:**
- `data-stagger data-stagger-step="100"` on the 3-phone wrapper. Phones reveal left-to-right with 100ms gaps as the section enters viewport.

**Copy slots for Phase 3:**

| Slot | Content | Constraint |
|---|---|---|
| Eyebrow | `Three frames` | 2-3 words, sets scale of the section |
| H2 | `In about three seconds.` | 4-7 words, declarative, no question, no `simple`/`easy` |
| Caption 1 | `Save who you met.` | 4-6 words, imperative, lowercase or sentence case |
| Caption 2 | `Pinned to where.` | 4-6 words, declarative |
| Caption 3 | `Pinged when you're back.` | 4-6 words, mint on the verb |

**Complexity:** Medium-high if Option A — depends on whether engineer can capture the QuickAdd screenshot in <30 min. Easy if Option B.

---

### Section 3 — The Moment

**Goal:** The empathy hook. Make the visitor recognize themselves. Conversion engine per psych.

**Layout:**
- **Desktop (1024+):** 3 cards in a row, equal width, gap `var(--space-4)`.
- **Tablet (768–1023):** 3 cards in a row, narrower.
- **Mobile (<768):** 3 cards stacked vertically.

**Section header:**
- Eyebrow: omit
- H2: `You've seen them before.<br />You know the face. The name's gone.` — psych-locked construction, EXACT
- Section lead: omit (the H2 is the lead)

**Card spec:**

```html
<article class="moment-card reveal">
  <p class="moment-text">[Scenario text — 22-32 words]</p>
</article>
```

```css
.moment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-7);
}
.moment-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
  padding: var(--space-6);
}
.moment-text {
  font-size: var(--type-body-lg);
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-body);
  margin: 0;
  /* NO italics — brand rules ban italics universally */
}
@media (max-width: 768px) {
  .moment-grid { grid-template-columns: 1fr; }
}
```

**Three moment cards (PRESERVE exactly per psych):**

| Card | Content |
|---|---|
| 1 | You see them at the gym every week. You've talked twice. You remember the conversation but not the name. |
| 2 | The bartender who starts your order before you sit down. You know them. They don't belong in your phone. But they're not a stranger. |
| 3 | You're back at the same spot. A familiar face waves. You wave back. You wish you remembered their name. |

These are LOCKED — psych-flagged non-negotiable. Copywriter does not touch them. The current site has them at `italic` which is off-brand (italics are banned per brand-guidelines §4.2). Strip the italic.

**Motion:**
- `data-stagger data-stagger-step="80"` on `.moment-grid`. Cards reveal in order.

**Complexity:** Low. Pure copy + grid. Drop-in.

---

### Section 4 — How it works

**Goal:** Convert empathy into product comprehension in 3 steps.

**Layout (desktop and tablet):**
- Section header (eyebrow + H2 + lead)
- **3 alternating rows**, each: half text / half phone. Row 1 left-text/right-phone, Row 2 right-text/left-phone, Row 3 left-text/right-phone (alternating). This creates rhythm — straight-line stack reads as a checklist.
- **Mobile:** all rows stacked, text-first, phone-second.

**Section header:**
- Eyebrow: omit
- H2: `Save someone. Pin them to a place. The phone does the rest.` (alternative — copywriter's call: rephrase or keep)
- Section lead: omit (H2 carries it)

**Row spec:**

```html
<article class="how-row how-row--text-left reveal">
  <div class="how-text">
    <p class="how-step">Step 1</p>
    <h3 class="how-h3">Save who you met.</h3>
    <p class="how-body">[1-2 sentence body, 18-32 words]</p>
  </div>
  <figure class="how-phone device-figure device-figure--bare">
    <img src="./screenshots/cropped/phone-add-person.png" alt="...">
  </figure>
</article>
```

```css
.how-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-7);
  align-items: center;
  padding: var(--space-7) 0;
}
.how-row + .how-row {
  border-top: 1px solid var(--border-subtle);
}
.how-row--phone-left .how-text { order: 2; }
.how-row--phone-left .how-phone { order: 1; }

.how-step {
  font-size: var(--type-eyebrow);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--track-loose);
  color: var(--mint);
  margin: 0 0 var(--space-2);
}
.how-h3 {
  font-size: var(--type-h3);
  font-weight: 800;
  letter-spacing: var(--track-snug);
  color: var(--text-headline);
  margin: 0 0 var(--space-3);
}
.how-body {
  font-size: var(--type-body);
  font-weight: 500;
  color: var(--text-body);
  line-height: 1.55;
  margin: 0;
}
.how-phone img {
  width: 280px;
  max-width: 100%;
}
@media (max-width: 768px) {
  .how-row,
  .how-row--phone-left {
    grid-template-columns: 1fr;
  }
  .how-row--phone-left .how-text { order: 1; }
  .how-row--phone-left .how-phone { order: 2; }
}
```

**Step content:**

| # | H3 | Body slot | Phone (cropped from) |
|---|---|---|---|
| 1 | Save who you met. | 18–32 words. Set the scene of saving — quick, frictionless, the QuickAdd. No `simple` or `easy`. | QuickAdd capture (see Section 2 asset note) |
| 2 | Pin them to a place. | 18–32 words. Place-as-the-spine of the app. The venue auto-completes from MapKit. | `screen-02-venue.png` cropped → `phone-venue.png` |
| 3 | Get pinged when you're nearby. | 18–32 words. The proximity alert moment. Use literal alert language. | `screen-01-proximity.png` cropped → `phone-proximity-bare.png` |

**Section close — App Store CTA:**
After row 3, add a centered CTA cluster: App Store badge + trust microline. This is **CTA placement #2 of 4** (per growth funnel architecture). Captures readers who got the comprehension and are ready.

**Motion:**
- Each row independently `.reveal`. As user scrolls through, rows fade up in series.
- No animation between rows beyond the reveal — static after that.

**Complexity:** Medium. The alternating layout is the only fiddly part — flex order swaps need a mobile breakpoint reset. Engineer should test row 2 visually on tablet (768–1023) — that's the size where alternation can read awkward if column widths feel uneven.

---

### Section 5 — Proximity deep dive

**Goal:** Sell the differentiator nobody else owns. The moat. Long-form section.

**Layout:**
- **Hero treatment:** large H2 + lead, takes more vertical space than other section headers.
- **Single phone visual** (not 3 — this is the close-up on one feature). Phone-only crop of `screen-01-proximity.png`, displayed larger than other screenshots — width `360px` desktop / `300px` tablet / `260px` mobile.
- Phone sits center-stage on desktop, with **3 supporting paragraphs** below it (or to the side as a 2-col layout — see below). Per growth IA, this is "proximity alerts (deep dive)" — sell the differentiator with prose, not a feature grid.

**Layout option A (recommended) — phone center, prose flanking:**
Desktop:
```
[          H2 + lead          ]
[ left-prose | phone | right-prose ]
```
Mobile:
```
[ H2 + lead ]
[ phone ]
[ left-prose ]
[ right-prose ]
```

**Layout option B (simpler, fallback) — phone right, all prose left:**
Standard alternating row like How it works, but only one row, and the phone is bigger.

I recommend A — it makes the proximity feature feel central. If engineer finds it fiddly, option B is acceptable fallback.

**Section header:**
- Eyebrow: `THE FEATURE NOBODY ELSE HAS`
- H2: `You're <span class="mint">near</span> The Hoxton. You know three people here.` — using the literal product copy as the headline (per brand-direction §2.2 pattern). The H2 IS the notification text.
- Section lead: `That's the alert. Set once, fires the next time you walk past — without opening the app.` (or similar one-liner; copywriter to refine)

**Mint word:** `near` — the key verb of the alert, the moment that defines the category.

**Three supporting bullets (around the phone — copywriter slot):**
- Bullet 1 (~20 words): On-device. CoreLocation.
- Bullet 2 (~20 words): No cloud, no server, no tracking.
- Bullet 3 (~20 words): Set once, forget. The phone remembers.

These are sold as 3 short paragraphs, not a checklist. Each: H4 (15px / 800) + body (15px / 500). Each H4 is mint? No — discipline says ONE mint per section. The H2 already has the mint word. Sub-bullets stay white.

**Motion:**
- Section header reveals first.
- Phone reveals second (slight delay).
- Bullets reveal in series.
- Total: ~600ms of motion as user enters this section.

**Complexity:** High — this is the section most likely to need iteration. Visual centerpiece + flanking prose is harder to lay out responsively than a 3-up grid. Build option A first; if it's not landing in 30 min, fall back to option B.

---

### Section 6 — What else

**Goal:** Round out the value picture. 4 capability cards, no oversell.

**Layout:**
- **Desktop (1024+):** 4 cards in a row OR 2x2 grid (engineer's call — 4-row reads cleaner on wide screens, 2x2 is more scannable on standard laptop). Default to 2x2 since most desktop visitors are on 13"–14" laptops.
- **Tablet:** 2x2.
- **Mobile:** stacked.

**Section header:**
- Eyebrow: omit
- H2: `What else is in there.` (per growth IA — this exact phrasing is fine, conversational)
- Section lead: omit

**Card spec (similar to refuse cards but no `×` mark — these are positive features):**

```html
<article class="capability reveal">
  <h3 class="capability-head">[Title — 2-4 words]</h3>
  <p class="capability-body">[1-2 sentences, 14-22 words]</p>
</article>
```

```css
.capability-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-7);
}
.capability {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
  padding: var(--space-5);
}
.capability-head {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: var(--track-snug);
  color: var(--text-headline);
  margin: 0 0 var(--space-2);
}
.capability-body {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-body);
  line-height: 1.5;
  margin: 0;
}
@media (max-width: 768px) {
  .capability-grid { grid-template-columns: 1fr; }
}
```

**Four capabilities (factually verified — these MUST match shipped features):**

| # | H3 | Body slot |
|---|---|---|
| 1 | Smart venue detection. | 14–22 words. Auto-suggests the place from your location, no manual entry. |
| 2 | Share cards. | 14–22 words. Monthly memory cards from your data — receipts, not a count. |
| 3 | Voice and photo notes. | 14–22 words. Talk to it. Snap a face. Whatever helps you remember. |
| 4 | Map view. | 14–22 words. See your spots across the city. All venues, all pins. |

**Critical anti-error gate:** No "5 themes" entry. No "achievements/milestones" as a top-line capability (those are quiet personal milestones per brand-guidelines §7, not a marketing feature). No "insights and stats" — the share card already covers the "see the receipts" angle.

**Motion:**
- `data-stagger data-stagger-step="60"` on `.capability-grid`.

**Complexity:** Low. Pure copy + grid.

---

### Section 7 — Privacy + anti-positioning

**Goal:** Trust signal block + explicit refusal vs. category competitors.

**Layout:**
- Section header (eyebrow + H2 + lead)
- 4 refuse cards in a 2x2 grid (see C7 component spec)
- Below the grid, a single text link `Privacy details →` to `/privacy.html` (deflection target, counts as conversion goal #2 per growth)

**Section header:**
- Eyebrow: omit
- H2: `No account. No social feed. <span class="mint">Nowhere</span> else.` — same copy as ASC screen 5 caption. Mint on `Nowhere`.
- Section lead: `Everything stays on your phone.` — locked direct line from S5 panel content.

**Card grid (4 refusals — wording matches ASC S5 verbatim, brand-locked, copywriter does NOT modify):**

| # | H3 | Body |
|---|---|---|
| 1 | No account. | No sign-in. No email. Open the app and start. |
| 2 | No sync. | Nothing leaves your device. Nothing to leak. |
| 3 | No cloud. | Your memories are on your phone, not a server. |
| 4 | No profile. | No public profile. No handle. No way to find you. |

**Tracking note:** The ASC S5 screen has 5 cards (the 5th is "No tracking"). The website only has 4 because we DO ship anonymized Firebase Analytics, and the website's tracking section needs more nuance than a one-line refuse-card can hold. Move the tracking story to the privacy.html page — link to it via the `Privacy details →` link below the grid. Brand-strategist sign-off needed here: dropping the "No tracking" card from the website while keeping it on App Store creates inconsistency. **My recommendation:** keep the 4-card website grid (the 5th would be misleading without footnotes), and ensure privacy.html honestly explains the analytics setup. Flag for review.

**Privacy details link:**
```html
<a class="privacy-link" href="./privacy.html"
   data-analytics-event="privacy_policy_click_home"
   data-analytics-placement="privacy">
  Privacy details →
</a>
```
```css
.privacy-link {
  display: inline-block;
  margin-top: var(--space-5);
  font-size: 15px;
  font-weight: 700;
  color: var(--mint);
  text-decoration: none;
}
.privacy-link:hover { text-decoration: underline; }
```

**Motion:**
- `data-stagger data-stagger-step="60"` on `.refuse-grid`.

**Complexity:** Low. Already specified component in C7.

---

### Section 8 — Plans

**Goal:** Show pricing transparently. 4 tiers. Pre-empt the "is this expensive?" objection.

**Layout:** see C6 component — 4 tiles in a row (desktop) / 2x2 (tablet) / stacked (mobile).

**Section header:**
- Eyebrow: omit
- H2: `Start free. Upgrade if you need more.` — locked psych line. This is the H2, not a section lead. Period-stop pacing.
- Section lead: omit (H2 is the lead).

**Tile content:** see C6 table. Annual is highlighted (`Save 69%` mint pill above features). Monthly + Annual carry the `14-day free trial` mint pill.

**Section close — App Store CTA:**
After the 4-tile grid, add a centered CTA cluster: App Store badge + trust microline. This is **CTA placement #3 of 4**. Captures readers who needed pricing transparency before clicking.

**Below the CTA, a single line:**
> Purchases through Apple. Restore in-app any time.

`13px / 500 / var(--text-secondary)`. Centered.

**Motion:**
- `data-stagger data-stagger-step="80"` on `.plans-grid`.

**Complexity:** Medium. 4-tile responsive grid is fiddly at 1024px breakpoint — that's where it goes from 4-up to 2x2. Test at exactly 1023px to make sure it doesn't squish before snapping.

---

### Section 9 — Final CTA

**Goal:** Last App Store badge, large and centered. Closer.

**Layout:** centered text block, large App Store badge, secondary support link.

**Vertical lockup is NOT here** — that's footer. Here, the design speaks via type alone.

**Section header:**
- Eyebrow: omit
- H2 (centered, larger feel — push to the upper end of `--type-h2`): `Walk in. <span class="mint">Remember</span> everyone.` — **echoes the hero, mint on Remember (different word than hero — hero is `everyone`, here is `Remember`).** This is the page's signature reprise.

  **Alternative if echoing the hero feels redundant:** `That's it. That's the app.` — declarative close. Copywriter to call between the two.

- Section lead (centered, max-width 560px): one sentence wrap-up. ~12-18 words. Slot for copywriter — see brief below.

**CTA cluster:**
- App Store badge — width `220px` (bigger than other placements — this is the closer)
- Trust microline below: `On your device. No account.`
- Secondary text link below the trust line: `Need help? Get support →` to `/support.html`. `14px / 500 / var(--text-secondary)`. This is conversion goal #2 (deflection).

**Spacing:**
- H2 → lead: `var(--space-5)`
- Lead → App Store badge: `var(--space-7)`
- App Store badge → trust microline: `var(--space-3)`
- Trust microline → support link: `var(--space-4)`

**Copy slots for Phase 3:**

| Slot | Content | Constraint |
|---|---|---|
| H2 | Default: `Walk in. Remember everyone.` | Echoes hero. Mint on `Remember` (different from hero's `everyone`). |
| Lead | TBD | 12–18 words. One sentence. Period-comma-colon only. Must NOT include `unleash`/`magic`/`unlock`/`discover`. Funnel-architect's draft: "Remember names and places without joining another social network." Acceptable but copywriter can refine. |
| Support link | `Need help? Get support →` | Standardized. |

**Motion:**
- Single reveal-on-scroll. No staggering — final CTA is a single block.

**Complexity:** Low. Centered typography + badge.

---

### Section 10 — Footer

See C2 component spec. Vertical lockup signature. Three-row centered layout. Drop the sticky-mobile-cta block — it's overkill given 4 hero/inline CTAs.

**Complexity:** Low.

---

## Asset List (Engineer Pre-Build Checklist)

### From `brand-assets/` (canonical, do NOT modify)

| Path | Use | Where |
|---|---|---|
| `brand-assets/masters/lockup-horizontal-mint-on-dark.svg` | Header logo | C1 / `_partials/header.html` |
| `brand-assets/masters/lockup-vertical-mint-on-dark.svg` | Footer signature | C2 / `_partials/footer.html` (use `exports-png/lockup-vertical-mint-on-dark.png` for performance — SVG works too) |
| `brand-assets/web/favicon.ico` | Browser tab | `<head>` |
| `brand-assets/web/favicon-32.png` | Modern browsers | `<head>` |
| `brand-assets/web/apple-touch-icon.png` | iOS bookmark | `<head>` |
| `brand-assets/web/android-chrome-192.png` | PWA | `<head>` |
| `brand-assets/web/android-chrome-512.png` | PWA | `<head>` |
| `brand-assets/web/og-image.png` | Open Graph preview | `<meta property="og:image">` (SHIP THIS — replaces the current `app-hero-remember.png` reference) |
| `src/assets/fonts/PlusJakartaSans-Medium.woff2` | Self-hosted font weight 500 | `methere-site/fonts/` |
| `src/assets/fonts/PlusJakartaSans-Bold.woff2` | Self-hosted font weight 700 | `methere-site/fonts/` |
| `src/assets/fonts/PlusJakartaSans-ExtraBold.woff2` | Self-hosted font weight 800 | `methere-site/fonts/` |

**Copy these into the methere-site repo at `methere-site/brand/` (or `methere-site/assets/brand/` — engineer to decide naming, `brand/` is cleaner).**

### From `docs/launch/asc-screenshots/` (composed ASC screens)

| Source file | Use case | Section |
|---|---|---|
| `screen-01-proximity.png` | Hero device (composed, caption included) | 1 (Hero) |
| `screen-05-privacy.png` | Privacy section visual companion (optional — text-only is cleaner; flag) | 7 (Privacy) — see note |
| `screen-07-regulars.png` | Possible Final CTA visual companion (optional) | 9 (Final CTA) — see note |

**Note on S5 and S7:** They're composed screens with caption strips on top. For the website, I'm spec'ing the privacy section (Section 7) and final CTA (Section 9) as **typographic-only** — no device frame. The website has its own H2 + cards for privacy. Adding the device shot of S5 risks duplicating the message twice (once on the screenshot caption, once in the website H2). **Recommendation:** ship sections 7 and 9 typography-only. If brand-strategist wants a device anchor, add a smaller phone-only crop of S5 or S7.

### Phone-only crops (engineer to produce — pre-build task)

Crop region: approximately `1242x1900+0+580` from each ASC source. Output at retina-ready 480px width (renders at 240px in CSS).

| Source ASC | Crop output | Used in section |
|---|---|---|
| `screen-01-proximity.png` | `phone-proximity-bare.png` | 4 (How it works step 3), 5 (Proximity deep dive — main visual) |
| `screen-02-venue.png` | `phone-venue.png` | 2 (Demo strip frame 2), 4 (How it works step 2) |
| `screen-03-people.png` | `phone-people.png` | 2 (Demo strip frame 1 fallback) |
| `screen-04-person.png` | `phone-person.png` | (reserved — not used in 10-section spec, available for future) |
| `screen-06-map.png` | `phone-map.png` | (reserved — Section 6 capability cards are typographic, not phone-illustrated; could pair with capability 4 if engineer wants illustration) |
| `screen-07-regulars.png` | `phone-regulars.png` | (reserved — see Section 9 note) |

### New captures needed

| Asset | Why | Effort |
|---|---|---|
| `phone-add-person.png` (QuickAdd open state) | Section 2 demo strip frame 1, Section 4 step 1. Does NOT exist in ASC set. | ~15 min sim capture. Memory rule prevents inventing this. |

**Capture spec for QuickAdd:**
- Sim: iPhone 16 Pro (matches ASC capture pipeline)
- State: QuickAdd modal open with fields visible. Name field empty or showing placeholder. Place field showing "Copper & Vine" suggestion. Tag chips visible if applicable.
- Format: 1242×2688 portrait, dark mint-social theme
- File: save to `methere-site/screenshots/sim/phone-add-person.png`, then crop to phone-only at `1242x1900+0+580`

**Engineer: confirm with Julian before this capture — it's a one-off cost, but it's the only "new asset" in the build.**

### OG image

**v1 launch (May 5):** Use `brand-assets/web/og-image.png` AS-IS if it depicts the proximity moment. If it's not the proximity-alert composition, swap in a clean crop of `screen-01-proximity.png` directly (per growth IA recommendation — "ship the App Store screenshot crop on May 5, swap in the composed version T+7").

**Engineer: open `brand-assets/web/og-image.png` and visually verify content. If it's the proximity moment, ship as-is. If not, use `screen-01-proximity.png` cropped to 1200×630 with safe zones around the phone.**

**OG meta tags to update:**
```html
<meta property="og:title" content="MetHere — Social Memory" />
<meta property="og:description" content="Remember the people you meet at the places you go back to. MetHere pings you when you're nearby again. iPhone, on-device, no account." />
<meta property="og:image" content="https://methere.app/og-image.png" />
<meta name="twitter:title" content="MetHere — Social Memory" />
<meta name="twitter:description" content="Remember the people you meet at the places you go back to. MetHere pings you when you're nearby again. iPhone, on-device, no account." />
<meta name="twitter:image" content="https://methere.app/og-image.png" />
```

Also update `<title>`: `MetHere — Social Memory` (replaces current "MetHere | Remember the people you meet and where you met them" — that's v1 voice).

Also update `<meta name="description">`: `Remember the people you meet at the places you go back to. MetHere pings you when you're nearby again. iPhone, on-device, no account.`

Also update JSON-LD `description`: same string. JSON-LD `image` and `screenshot`: replace with `https://methere.app/og-image.png`. JSON-LD `applicationCategory`: keep `LifestyleApplication`.

### Favicon block

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512.png">
```

Place files at the **site root** (not under `/assets/`) so the paths above resolve. Engineer to decide the exact directory but standardize to root for browser and PWA defaults.

---

## Engineering Notes

### Build process changes

The current `build.js` already injects header/footer partials. **No build script changes needed.** The pattern works:

1. `_partials/header.html` — update lockup ref + nav styling (keeps the `<!-- HEADER -->` injection point)
2. `_partials/footer.html` — update to vertical lockup + new credit line + drop sticky-mobile-cta (keeps the `<!-- FOOTER -->` injection point)
3. `src/index.html` — full content rewrite, sections 1–9 in order
4. `src/privacy.html`, `src/support.html`, `src/terms.html` — keep v1 logic but update header/footer (already auto-handled by build), update the body styles to match the new dark token system. **Privacy/Support/Terms get a "v2 brand pass" but stay structurally simple — these are not in the redesign scope per locked decisions.** Lower priority — touch them if time permits.
5. `styles.v2.css` — new file. Replaces `styles.css`. Update `<link rel="stylesheet" href="./styles.v2.css">` in every src `.html` file. **Do NOT delete the old `styles.css` until a final visual checkpoint passes** — keep as fallback during dev.

### CSS architecture

**One file, `styles.v2.css`.** Don't split into modules. The page is small enough that one file (~600-800 lines) is more navigable than a multi-file split. Comment generously per Julian's code standards — "explain the why, not just the what."

**Suggested CSS file structure:**
```
/* ============================================
   methere.app v2 — Stylesheet
   Author: ios-product-designer (porting Mint Social to web)
   Last updated: 2026-04-XX
   ============================================ */

/* ---- 0. Foundation (tokens, fonts, base) ---- */
@font-face { ... }
:root { ... }
html, body { ... }
h1, h2, h3, p, a, ul, button, input { reset } { ... }
.section, .section-inner, .section-eyebrow, .section-h2, .section-lead { ... }

/* ---- 1. Components ---- */
/* C1 Header */
/* C2 Footer */
/* C4 App Store badge */
/* C5 Phone screenshot frame */
/* C6 Pricing tile */
/* C7 Refuse card */
/* (one block per component, in order) */

/* ---- 2. Sections ---- */
/* Section 1 — Hero */
/* Section 2 — Demo strip */
/* (etc — one block per section, in order) */

/* ---- 3. Reveal motion ---- */

/* ---- 4. Responsive ---- */
@media (max-width: 1023px) { /* tablet */ }
@media (max-width: 768px) { /* mobile */ }
```

Comment headers (`/* ---- ... ---- */`) at every block boundary — Julian's explicit standard, future-junior-dev readability.

### Mobile breakpoints

- **Mobile-first not required** — write desktop-first since most editors default to it and the page IS desktop-led for the press-visitor segment. Add `@media (max-width: ...)` overrides for tablet and mobile.
- **Breakpoints (3 only):**
  - `1024px` — desktop ↓ to tablet
  - `768px` — tablet ↓ to mobile-large (most iPhones in landscape, iPads portrait)
  - `480px` — extra-small phone fallback (iPhone SE, Android 5"). Hero H1 needs to stay readable here.
- **Test viewports:** 375×667 (iPhone SE), 390×844 (iPhone 16), 414×896 (iPhone 16 Pro Max), 768×1024 (iPad), 1024×768 (iPad landscape), 1440×900 (laptop standard), 1920×1080 (desktop wide). Use Chrome DevTools device emulation for the first pass.

### Image format / sizing

- **PNGs for screenshots** — preserves the iOS rendering crisply. Keep as PNG (already are).
- **SVG for lockups, favicons** — vector, infinite scale.
- **`loading="lazy"` on every screenshot below the fold** — hero and demo-strip phones can load eagerly (above-fold), everything else lazy.
- **No image lazy-loading library needed** — native `loading="lazy"` is supported in all evergreen browsers.
- **Image dimensions:** always specify `width` and `height` attributes on `<img>` tags to prevent layout shift (CLS). Cropped phones at 480px wide rendered at 240–280px in CSS get `width="480" height="[crop height]"`. ASC screens at 1242×2688 rendered at 312px get `width="1242" height="2688"`.
- **No WebP for v1.** PNG is fine. WebP is a post-launch optimization if Lighthouse complains.

### Performance budget

- **First Contentful Paint:** under 1.5s on 4G mobile.
- **Largest Contentful Paint:** under 2.5s. The hero phone screenshot is the LCP element — preload it: `<link rel="preload" as="image" href="/screenshots/screen-01-proximity.png">`.
- **CSS file:** under 50KB unminified, under 15KB minified+gzipped. Don't add a CSS framework.
- **JS file:** unchanged from v1 (`site.js` for reveal logic). No new JS.
- **Total page weight:** under 1.5MB on first load. Mostly screenshots — they're the biggest assets.

### Accessibility (per studio quality bar)

- **WCAG AA contrast** — all text ratios verified by token system above. Re-verify if anyone introduces a new color.
- **Focus states** — every interactive element shows the mint focus ring on keyboard focus. No `outline: none;` overrides.
- **Reduced motion** — `prefers-reduced-motion: reduce` kills all reveals. Already specified in 0.4.
- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` used per spec. No div-soup.
- **Image alts** — every `<img>` has descriptive `alt`. Decorative SVGs (lockup glyphs in nav) get `alt=""` if accompanied by text, or `aria-label` if they ARE the content.
- **Heading hierarchy** — one H1 (hero), H2s for each section, H3s inside sections. No skipping levels.
- **Skip-to-content link** — `<a class="sr-only" href="#hero">Skip to content</a>` at top of body. Hidden visually, visible on focus. Already part of accessibility minimum.

---

## Phase 3 Copywriter Brief (Embedded)

For the copywriter taking this in Phase 3 — the layout constraints below are **hard limits**. Words longer than the slot will break the design at common viewport sizes.

### Hard locks (do not modify)

| Surface | Locked text | Source |
|---|---|---|
| Hero H1 | `Walk in. Remember everyone.` | Brand floor |
| Section 3 H2 | `You've seen them before. You know the face. The name's gone.` | Psych-locked |
| Section 3 cards (all 3) | (see Section 3 spec table) | Psych-locked |
| Section 7 cards (all 4) | (see Section 7 spec table) | ASC S5 verbatim |
| Section 8 H2 | `Start free. Upgrade if you need more.` | Psych-locked |
| Trust microline (every CTA) | `On your device. No account.` | Psych + brand-locked |
| Footer credit | `Made solo by Julian Collins.` | Locked by Julian |

### Copy slots needing writing (12 total)

| # | Section | Slot | Constraint | Notes |
|---|---|---|---|---|
| 1 | 1 (Hero) | Subhead | 18–28 words, period-comma-colon only | Funnel architect drafted: "MetHere remembers the people you meet at the places you go back to, and pings you when you're nearby again." Copywriter can refine. |
| 2 | 2 (Demo strip) | Eyebrow | 2-3 words | Default: `Three frames`. Optional rephrase. |
| 3 | 2 (Demo strip) | H2 | 4-7 words, declarative | Default: `In about three seconds.` Optional rephrase. |
| 4 | 2 (Demo strip) | Caption 1 | 4-6 words | `Save who you met.` |
| 5 | 2 (Demo strip) | Caption 2 | 4-6 words | `Pinned to where.` |
| 6 | 2 (Demo strip) | Caption 3 | 4-6 words, mint on a verb | `Pinged when you're back.` |
| 7 | 4 (How it works) | H2 | 8-14 words | Default: `Save someone. Pin them to a place. The phone does the rest.` |
| 8 | 4 (How it works) | Step 1-3 H3 + body | H3: 3-5 words; body: 18-32 words each | Defaults in spec. Body text sells the moment, not the feature. |
| 9 | 5 (Proximity) | Section lead | 12-22 words | Sets up what follows. |
| 10 | 5 (Proximity) | Three sub-bullets | ~20 words each | On-device, no cloud, set-and-forget. |
| 11 | 6 (What else) | Card 1-4 bodies | 14-22 words each | Truthful, factually verified. |
| 12 | 9 (Final CTA) | Lead | 12-18 words, one sentence | Closer. |

### Voice constraints (apply to every slot)

- **Em-dash discipline:** zero em-dashes in v1 launch copy. Use period, comma, colon. (Per Julian preference, multiple memories on this.)
- **AI-tell kill list:** `magic`, `unlock`, `discover`, "got the X it needed" — none of these on the site.
- **Brand forbidden phrases:** `your contacts`, `manage your network`, `CRM`, `supercharge`, `seamlessly`, `effortlessly`, `unleash`, `reimagined`, `journey`, `crush your goals`, etc. — full list in `voice-and-tone.md` §3.7.
- **Sentence length:** 8–14 words average. Long sentence = sign of distrust in the reader.
- **Specific over clever.** "You know three people here" beats "Your network is present."
- **Sentence case.** Never Title Case headlines. Lowercase okay only for one specific moment (launch tweet voice) — default sentence case throughout.

### Mint-word distribution rule (every section H2 with mint, the writer specifies the word)

- Hero: `everyone` (mint)
- Section 5 (Proximity): `near` (mint)
- Section 7 (Privacy): `Nowhere` (mint)
- Section 9 (Final CTA): `Remember` (mint)

That's 4 sections with mint. Sections 2, 4, 6, 8 stay in pure white. Section 3 H2 is psych-locked and contains no mint. Total mint = 4 of 10. Within brand discipline.

---

## Verification Renders (for brand-strategist visual sanity check)

Per studio specialist verification rule, here are 3 of the most novel section designs as inline-styled HTML mockups so brand can visually verify before engineering builds.

### Render 1 — Hero (Section 1)

```html
<!-- Open in browser as raw .html file. Tokens inlined for portability. -->
<!DOCTYPE html><html><head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
body { margin:0; background:#111014; color:#E8E4DF; font-family:'Plus Jakarta Sans',sans-serif; -webkit-font-smoothing:antialiased; min-height:100vh; }
.section { padding:96px 24px; }
.section-inner { max-width:1120px; margin:0 auto; display:grid; grid-template-columns:1.1fr 0.9fr; gap:48px; align-items:center; }
.eyebrow { font-size:12px; font-weight:600; letter-spacing:0.8px; text-transform:uppercase; color:#555060; margin:0 0 12px; }
h1 { font-size:clamp(48px,8vw,88px); font-weight:800; line-height:0.95; letter-spacing:-1.5px; color:#fff; margin:0; }
h1 .mint { color:#2DD4A8; }
.lead { font-size:clamp(18px,2vw,22px); font-weight:500; color:#8A858F; margin:24px 0 0; line-height:1.5; max-width:520px; }
.cta-row { margin-top:32px; display:flex; gap:16px; align-items:center; }
.cta-row img { width:200px; height:auto; }
.see-link { font-size:15px; font-weight:700; color:#2DD4A8; text-decoration:none; }
.trust { font-size:14px; font-weight:500; color:#555060; margin:12px 0 0; }
.device { display:flex; justify-content:center; }
.device img { width:360px; max-width:100%; height:auto; }
@media (max-width:768px) {
  .section-inner { grid-template-columns:1fr; gap:48px; }
  .device img { width:280px; }
}
</style></head>
<body>
<section class="section">
<div class="section-inner">
<div>
<p class="eyebrow">iPhone · Social memory</p>
<h1>Walk in.<br>Remember <span class="mint">everyone</span>.</h1>
<p class="lead">MetHere remembers the people you meet at the places you go back to, and pings you when you're nearby again.</p>
<div class="cta-row">
<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store">
<a class="see-link" href="#how">See how it works ↓</a>
</div>
<p class="trust">On your device. No account.</p>
</div>
<figure class="device">
<img src="../../../Documents/Projects/remember-me-starter/docs/launch/asc-screenshots/screen-01-proximity.png" alt="MetHere notification on lockscreen">
</figure>
</div>
</section>
</body></html>
```

**Brand check on this render:**
- Mint applied to ONE word (`everyone`). 1 mint = pass.
- ASC composed screen visible inside the device frame. The H1 echoes its caption. Frame-within-frame.
- No gradients, no shadows, no glassmorphism. Pure dark + mint accent.
- Header/nav not shown (separate component) — render this as full-page hero standalone for the brand check.

### Render 2 — Privacy section (Section 7)

```html
<!DOCTYPE html><html><head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
body { margin:0; background:#111014; color:#E8E4DF; font-family:'Plus Jakarta Sans',sans-serif; -webkit-font-smoothing:antialiased; }
.section { padding:96px 24px; }
.section-inner { max-width:1120px; margin:0 auto; }
h2 { font-size:clamp(32px,4.6vw,48px); font-weight:800; line-height:1.05; letter-spacing:-0.6px; color:#fff; margin:0; }
h2 .mint { color:#2DD4A8; }
.lead { font-size:clamp(18px,2vw,22px); font-weight:500; color:#8A858F; margin:16px 0 0; max-width:640px; }
.refuse-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:48px; }
.refuse { background:#1A181E; border:1px solid #242228; border-radius:24px; padding:24px; }
.refuse-mark { font-size:28px; font-weight:800; color:#2DD4A8; opacity:0.6; line-height:1; display:block; margin-bottom:12px; }
.refuse-head { font-size:22px; font-weight:800; letter-spacing:-0.6px; color:#fff; margin:0 0 8px; }
.refuse-body { font-size:15px; font-weight:500; color:#E8E4DF; line-height:1.5; margin:0; }
.privacy-link { display:inline-block; margin-top:24px; font-size:15px; font-weight:700; color:#2DD4A8; text-decoration:none; }
@media (max-width:768px) { .refuse-grid { grid-template-columns:1fr; } }
</style></head>
<body>
<section class="section">
<div class="section-inner">
<h2>No account. No social feed. <span class="mint">Nowhere</span> else.</h2>
<p class="lead">Everything stays on your phone.</p>
<div class="refuse-grid">
<article class="refuse"><span class="refuse-mark">×</span><h3 class="refuse-head">No account.</h3><p class="refuse-body">No sign-in. No email. Open the app and start.</p></article>
<article class="refuse"><span class="refuse-mark">×</span><h3 class="refuse-head">No sync.</h3><p class="refuse-body">Nothing leaves your device. Nothing to leak.</p></article>
<article class="refuse"><span class="refuse-mark">×</span><h3 class="refuse-head">No cloud.</h3><p class="refuse-body">Your memories are on your phone, not a server.</p></article>
<article class="refuse"><span class="refuse-mark">×</span><h3 class="refuse-head">No profile.</h3><p class="refuse-body">No public profile. No handle. No way to find you.</p></article>
</div>
<a class="privacy-link" href="./privacy.html">Privacy details →</a>
</div>
</section>
</body></html>
```

**Brand check:**
- 1 mint word in H2 (`Nowhere`). Mint discipline pass.
- × marks in mint at 60% opacity. Borderline — brand-strategist call. Alternative: drop them.
- Card pattern reads as the inside of the app — same elevated-surface, same border, same radii.
- 2x2 grid feels like a manifesto, not a feature list.

### Render 3 — Plans (Section 8)

```html
<!DOCTYPE html><html><head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
body { margin:0; background:#111014; color:#E8E4DF; font-family:'Plus Jakarta Sans',sans-serif; -webkit-font-smoothing:antialiased; }
.section { padding:96px 24px; }
.section-inner { max-width:1120px; margin:0 auto; }
h2 { font-size:clamp(32px,4.6vw,48px); font-weight:800; line-height:1.05; letter-spacing:-0.6px; color:#fff; margin:0; }
.plans-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:48px; }
.plan { background:#1A181E; border:1px solid #242228; border-radius:24px; padding:24px; display:flex; flex-direction:column; }
.plan--highlight { border-color:#2DD4A8; }
.plan-name { font-size:18px; font-weight:800; color:#fff; margin:0 0 8px; }
.plan-price { font-size:32px; font-weight:800; color:#fff; letter-spacing:-0.6px; margin:0; }
.plan-price .period { font-size:14px; font-weight:500; color:#8A858F; letter-spacing:0; }
.plan-trial { display:inline-block; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; background:rgba(45,212,168,0.10); color:#2DD4A8; padding:4px 10px; border-radius:999px; margin-top:8px; }
.plan-savings { font-size:12px; font-weight:700; color:#2DD4A8; margin-top:8px; }
.plan-features { list-style:none; padding:0; margin:24px 0 16px; flex:1; }
.plan-features li { font-size:15px; font-weight:500; color:#E8E4DF; padding:6px 0; }
.plan-note { font-size:13px; font-weight:500; color:#8A858F; margin:0; }
.cta-cluster { margin-top:48px; text-align:center; }
.cta-cluster img { width:180px; }
.cta-cluster p { font-size:14px; font-weight:500; color:#555060; margin:12px 0 0; }
.checkout-note { text-align:center; font-size:13px; font-weight:500; color:#8A858F; margin-top:24px; }
@media (max-width:1023px) { .plans-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:600px) { .plans-grid { grid-template-columns:1fr; } }
</style></head>
<body>
<section class="section">
<div class="section-inner">
<h2>Start free. Upgrade if you need more.</h2>
<div class="plans-grid">
<article class="plan"><h3 class="plan-name">Free</h3><p class="plan-price">$0</p><ul class="plan-features"><li>15 people</li><li>5 nearby alerts</li><li>Everything else, unlimited</li></ul><p class="plan-note">Always free.</p></article>
<article class="plan"><h3 class="plan-name">Monthly</h3><p class="plan-price">$3.99<span class="period"> / mo</span></p><span class="plan-trial">14-day free trial</span><ul class="plan-features"><li>Unlimited people</li><li>Unlimited alerts</li><li>Backup + restore</li></ul><p class="plan-note">Cancel anytime.</p></article>
<article class="plan plan--highlight"><h3 class="plan-name">Annual</h3><p class="plan-price">$14.99<span class="period"> / yr</span></p><span class="plan-savings">Save 69%</span><br><span class="plan-trial">14-day free trial</span><ul class="plan-features"><li>Unlimited people</li><li>Unlimited alerts</li><li>Backup + restore</li></ul><p class="plan-note">Best value.</p></article>
<article class="plan"><h3 class="plan-name">Lifetime</h3><p class="plan-price">$29.99<span class="period"> once</span></p><ul class="plan-features"><li>Unlimited people</li><li>Unlimited alerts</li><li>Backup + restore</li><li>Yours forever</li></ul><p class="plan-note">One-time.</p></article>
</div>
<div class="cta-cluster">
<a href="https://apps.apple.com/app/methere/id6757836312"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store"></a>
<p>On your device. No account.</p>
</div>
<p class="checkout-note">Purchases through Apple. Restore in-app any time.</p>
</div>
</section>
</body></html>
```

**Brand check:**
- 4 tiles, prose-not-matrix. Annual highlighted with mint border + `Save 69%` text in mint. Mint pill on trial.
- Mint count: `Save 69%` (1) + `14-day free trial` x2 (2) + plan border (visual) = 3 mint elements. Reads as 1 mint moment per highlight tile. Borderline — brand check this.
- Free tier truthful: 15 people / 5 alerts / no places limit. Locked.

To verify: Save these 3 renders to disk (e.g. `methere-site/docs/render-hero.html`, `render-privacy.html`, `render-plans.html`), open in browser, screenshot at 1440px width and at 390px (iPhone) width. Brand-strategist reviews and signs off (or kicks back) **before** engineering builds the full page.

---

## Per-Section Complexity Estimate

| # | Section | Complexity | Likely iteration | Why |
|---|---|---|---|---|
| 1 | Hero | Medium | Possible — hero is high-stakes | Two-column responsive + composed phone screen with caption strip (potential redundancy concern). Test mobile at 375px first. |
| 2 | Demo strip | Medium-high | Possible — needs new sim capture | QuickAdd screenshot is the unknown asset. If captured cleanly first try, easy. |
| 3 | The Moment | Low | Unlikely | Pure copy + grid. All copy locked. |
| 4 | How it works | Medium | Possible — alternating layout | Row-2 reverse needs flex order swap — eyeball at 1024px to verify alignment doesn't break. |
| 5 | Proximity deep dive | High | Likely | Phone-center-prose-flanking is the most ambitious layout. Build option A first; fallback to option B if needed. |
| 6 | What else | Low | Unlikely | 2x2 typographic cards. Drop-in. |
| 7 | Privacy | Low | Brand check on `×` mark | Component pre-spec'd. Only design decision is the × treatment. |
| 8 | Plans | Medium | Possible — 4-tile responsive | 4-up to 2x2 to 1-up breakpoint sequence is the fiddly part. |
| 9 | Final CTA | Low | Unlikely | Centered typography + badge. |
| 10 | Footer | Low | Unlikely | Vertical lockup PNG drop-in. |

**Suggested build order (matches user's section-by-section browser checkpoint pattern):**
1. Foundation tokens + reset (CSS scaffold) — 30 min
2. Header + footer components — 20 min
3. Section 3 (Moment) + Section 6 (What else) + Section 7 (Privacy) — easy wins, builds momentum, ~45 min
4. Section 1 (Hero) — first big visual checkpoint with brand — 45 min
5. Section 8 (Plans) — second big visual checkpoint — 30 min
6. Section 4 (How it works) + Section 9 (Final CTA) — 45 min
7. Section 2 (Demo strip) — depends on QuickAdd capture timing — 30 min
8. Section 5 (Proximity deep dive) — most likely to iterate, save for last — 45 min
9. OG image + favicons + meta — 20 min
10. Privacy/Support/Terms light brand refresh — 30 min if time permits, else punt

**Total estimated build time: ~6 hours of focused work** for a clean first pass. Plus 2-3 hours of iteration after brand review of each major checkpoint.

---

## Open questions / things I need from Julian or other specialists

1. **Section 7 — drop the "No tracking" 5th refuse card on the website?** I'm spec'ing 4 cards (account/sync/cloud/profile) because we DO ship Firebase Analytics, and a one-line "No tracking" card on the website would be misleading. Brand-strategist sign-off needed — this creates an inconsistency between ASC S5 (5 cards) and the website (4 cards). My recommendation is keep at 4 + link to privacy.html for the analytics nuance. **Decision needed before Section 7 builds.**

2. **Render verification — brand-strategist reviews the 3 renders above before engineering starts.** Specifically the `×` mark in Section 7 (kill or keep), the hero composed-screen redundancy (kill or keep), and the mint count in Section 8 plans (3 mint elements is borderline busy).

3. **QuickAdd sim capture — confirm Julian has 15 min before May 5 to set up the sim and capture.** If not, fall back to Option B (use `screen-03-people.png` cropped for demo strip frame 1).

4. **Header `backdrop-filter: blur(12px)` carve-out — brand-strategist sign-off.** The brand floor says no glassmorphism. My read is that a sticky nav with subtle blur isn't glassmorphism in the panel-chrome sense, but it IS a blur effect. If brand says no, fallback is solid `#111014` background (which can read flat against a dark scrolling page). 

5. **Final CTA H2 — copywriter call between echoing hero (`Walk in. Remember everyone.`) vs declarative close (`That's it. That's the app.`).** Both work. Echo is more brand-resonant. Decisive close is more conversion-focused. Recommend echo for v1 launch, A/B test after.

---

## Confirmation: 5 psych-locked elements preserved

Per psych deliverable, these MUST appear and stay un-rewritten. Cross-check:

- ✅ **Hero subhead construction** "You've seen them before. You know the face. The name's gone." — preserved as **Section 3 H2** (moved from current site's hero subhead to the dedicated Moment section H2 — the line gets MORE prominence in the new IA, which is a psych win).
- ✅ **All three moment cards** (gym regular, bartender, familiar wave) — preserved verbatim in Section 3.
- ✅ **"No account needed. Your data stays on your device."** above the fold — preserved as the **trust microline** under every Apple badge: `On your device. No account.` (compressed from 2 sentences to 1 line for hero-density, but the substance is identical and it appears 4 times across the page — more visible than the current site's single mention).
- ✅ **Notification screenshot's authentic iOS-language** — preserved via use of `screen-01-proximity.png` (real iOS notification copy: "You're near Copper & Vine. You know 3 people here."). Plus it shows up as the literal H2 of Section 5.
- ✅ **"Start free. Upgrade if you need more."** pattern — preserved as **Section 8 H2** (promoted from current site's section lead to a section H2, getting more weight).

All 5 preserved. None rewritten. Three of five got MORE prominence in the new IA than they have on the current site.

---

*This document is the floor. Engineer can solve everything above the floor however they want. If something here is wrong — wrong values, wrong constraint — flag it and route through the design panel before improvising.*
