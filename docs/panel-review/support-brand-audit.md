# `methere.app/support.html` — Brand-Floor Audit

**Reviewer:** brand-strategist (Gigi)
**Date:** 2026-04-27 · T-8 to launch
**Lane:** meta + chrome + brand-floor compliance (parallel to ios-product-designer for factual + feature coverage, copywriter for voice)
**Method:** live page in Chrome via chrome-devtools MCP at `http://localhost:4488/support.html`, viewport 1440×900, full-page screenshot at `support-brand-audit.png`, computed-style + DOM + stylesheet probe, JSON-LD parse, head meta enumeration. Compared against `brand-direction-v2.md`, `brand-visual-review.md`, and the v2 home `src/index.html` head as the canonical chrome reference.
**Floor:** `brand-direction-v2.md` (Phase 1 brand direction). The home page just shipped to that floor — the support page must match it within reason as a sub-page of the same site.

---

## 0. Top-line verdict

**FAIL the brand floor on chrome and meta. PASS on dark surface + type face + body color.**

Hero composition, FAQ visual treatment, and (partly) the CSS classes are within tolerance — `.utility-hero` is actually styled and is doing real work. The serious problems are concentrated in the `<head>`: stale v1 OG image, stale v1 favicon, missing canonical favicon set, missing OG dimensions, missing Twitter handle parity issues, plus a v1 HEAD-element pattern that doesn't match the home page chrome contract.

**Eight brand violations counted.** Highest-priority fix is the stale OG/Twitter image still pointing at `app-hero-remember.png` (a v1 era asset from the blue/white site). Second-priority is the favicon — same v1 PNG that brand-direction §3.2 explicitly listed as REPLACE.

The page can ship to v2 launch with **a 30-minute head rewrite + one CSS rule trim**. No content edits required from this audit (copywriter owns voice; ios-product-designer owns the page-level info architecture).

---

## 1. Meta tag audit

### 1.1 What I inspected
Pulled every `<meta>`, `<link>`, and JSON-LD block from the live `<head>` via DOM evaluation. Cross-referenced each against the home page's head (which is the canonical v2 chrome reference per spec).

### 1.2 Per-tag verdict

| Tag | Current value | Verdict | Why |
|---|---|---|---|
| `<title>` | `MetHere Support \| Backups, Purchases, and Reminders` | **OK with note** | Title-case violation per brand-direction §1.2 ("never Title Case"). But this is a sub-page utility title, where SEO conventions reasonably override brand sentence-case rules for the `Word \| Word, Word, Word` pattern. **Allow as-is.** Flag for copywriter only. |
| `<meta description>` | `Get MetHere support for backups, restore, purchase recovery, and nearby reminder troubleshooting on iOS.` | **OK** | On-voice, no kill-list words, period-comma-only, no em-dash. 99 chars — under 155 cap. |
| `<link canonical>` | `https://methere.app/support.html` | **OK** | Correct absolute URL. |
| `og:type` | `website` | **OK** | Same as home. |
| `og:site_name` | `MetHere` | **OK** | Same as home. |
| `og:title` | `MetHere Support \| Backups, Purchases, and Reminders` | **OK** | Mirrors `<title>`. Same note as `<title>`. |
| `og:description` | `Get help with MetHere backups, purchase restore, permissions, and nearby reminder troubleshooting.` | **OK** | On-voice. Slight redundancy with `<meta description>` (different copy for the same intent — pick one or align). |
| `og:url` | `https://methere.app/support.html` | **OK** | |
| **`og:image`** | **`https://methere.app/assets/app-hero-remember.png`** | **STALE — V1 ASSET** | This is the **exact** asset the home page replaced. Brand-direction §3.2 lists it explicitly: *"the current site references `app-hero-remember.png` which is v1 era"*. Must point to `/og-image.png` (the v2 brand-canonical 1200×630 asset shipping with the home page). |
| `og:image:width` | **MISSING** | **FAIL** | Home page provides `1200`. Sub-page must match for OG renderer parity (Slack/Discord/iMessage all favor explicit dims to avoid layout-shift bug). |
| `og:image:height` | **MISSING** | **FAIL** | Home page provides `630`. Same reason. |
| `twitter:card` | `summary_large_image` | **OK** | |
| `twitter:site` | `@MetHereApp` | **OK** | Matches home. |
| `twitter:title` | `MetHere Support \| Backups, Purchases, and Reminders` | **OK** | Same note as `<title>`. |
| `twitter:description` | `Get help with MetHere backups, purchases, permissions, and troubleshooting.` | **OK** | Third variant of essentially the same line — see redundancy note. |
| **`twitter:image`** | **`https://methere.app/assets/app-hero-remember.png`** | **STALE — V1 ASSET** | Same problem, same fix as `og:image`. |
| **`<link rel="icon">`** | **`./assets/MetHere-ios-appLogo-Current.png`** | **FAIL — V1 FAVICON** | Brand-direction §3.2 explicitly: *"replace the current `MetHere-ios-appLogo-Current.png` with the proper canonical files"*. Home page now uses the proper 5-asset favicon set from `brand-assets/web/`. Support page is shipping the v1 favicon the home explicitly retired. |
| `<link rel="icon" sizes="32x32">` | **MISSING** | **FAIL** | Home has it. Supports retina favicon rendering on Chrome/Safari tabs. |
| `<link rel="icon" sizes="192x192">` | **MISSING** | **FAIL** | Home has it. Android home-screen install. |
| `<link rel="icon" sizes="512x512">` | **MISSING** | **FAIL** | Home has it. PWA install. |
| **`<link rel="apple-touch-icon">`** | **`./assets/MetHere-ios-appLogo-Current.png`** (no `sizes`) | **FAIL** | Home has `sizes="180x180"` and points to canonical `apple-touch-icon.png`. iOS home screen icon will use the v1 PNG when added via Safari "Add to Home Screen." |
| `apple-itunes-app` | `app-id=6757836312` | **OK** | Matches home. |
| `<link rel="stylesheet">` | `./styles.v2.css` | **OK** | Same v2 stylesheet as home. |
| Google Fonts hotlink | none | **OK** | No `fonts.googleapis.com`. Self-hosted Plus Jakarta Sans (per spec) loads via `styles.v2.css`. Brand-direction §1.2 ban honored. |
| Hero image preload (`<link rel="preload">`) | none | **N/A** | Home preloads `screen-01-proximity.png` as LCP. Support has no hero image, so the preload is correctly absent. |
| `google-site-verification` | none | **N/A** | Home has it. Support sub-page does not need GSC verification (same domain — verification is domain-level). |

### 1.3 JSON-LD audit

The page ships a `FAQPage` schema with all 16 Q&A pairs. **This is correct and brand-positive** — it's the right schema for a support page, it's well-structured, and it accurately mirrors the visible FAQ content. Google rich-result eligibility intact.

**Two notes:**
- The Q1 answer (`What is MetHere?`) ends with the line *"It's the space between 'I've met you' and 'you're in my phone.'"* — beautifully on-voice. Same line appears as visible body copy. ✓
- The schema does **not** repeat the home page's `SoftwareApplication` + `Organization` `@graph` block, which is correct — that schema lives on the home page and shouldn't be duplicated across sub-pages. Sub-page cross-linking via canonical is sufficient.

**JSON-LD verdict: PASS. No changes.**

---

## 2. Hero composition

### 2.1 Render description (from screenshot)

Hero is: small uppercase mint-tinted-tertiary-color "Support" eyebrow → 56px ExtraBold white H1 (`Help with backups, purchases, and reminders.`) → 17px warm off-white body line → contact line with mint underlined `support@methere.app` → black App Store badge.

### 2.2 Brand-floor checks

| Check | Pass/Fail | Notes |
|---|---|---|
| Dark background `#111014` | **PASS** | `rgb(17, 16, 20)` confirmed via computed style on `<body>`. |
| Plus Jakarta Sans only | **PASS** | Computed `font-family` on `<body>` and `<h1>` is `"Plus Jakarta Sans", -apple-system, ...`. No Space Grotesk, no Inter. |
| H1 ExtraBold (800), tight tracking | **PASS** | 56px / weight 800 / letter-spacing -0.6px. Matches brand-direction §1.2 type scale for sub-page hero (the home H1 hits 88px; support, as a utility hero, scales to 56px which is the section-H2 register — appropriate for utility surface). |
| Eyebrow style (12px / 600 / uppercase / `#555060`) | **PASS** | All four properties match the brand-direction spec exactly. |
| Body color `#E8E4DF` warm off-white | **PASS** | `rgb(232, 228, 223)` confirmed. Not pure white. |
| Sentence case headline | **PASS** | `Help with backups, purchases, and reminders.` — sentence case. ✓ |
| No gradient, no blur, no shadow on hero | **PASS** | Computed background `rgba(0,0,0,0)`, no `box-shadow`, no `backdrop-filter`. Hero sits flat on the page bg. |
| App Store badge (Apple black variant) | **PASS** | Same `tools.applemediaservices.com/.../black/en-us` URL as home page. |
| Mint discipline | **PASS** | One mint hit in hero (the `support@methere.app` link color). Header lockup mint also visible at top. The contact email being mint is the right call — it's the primary action of the hero. Single mint hit, load-bearing. |

### 2.3 The composition itself

The hero is a quiet utility hero. It's not trying to be the home page hero — there's no composed device frame, no "Walk in. Remember everyone." tagline echo, no signature lockup moment. **That's correct for a support sub-page.** The utility-hero pattern is doing brand work: it announces the page's job (`Support` eyebrow → headline of what the page is for → body of how to engage → contact + badge), then gets out of the way to let the FAQ carry the page.

**One small omission worth flagging (not a fail):** the hero doesn't include the trust microline `On your device. No account.` that appears in the home page hero. For a support page, the trust microline is arguably more useful than on the home page (a visitor on `/support` is debugging an issue; "on your device" is information they'd actually use). Adding it as a fourth line under the contact email would be on-brand without bloating the hero. **Designer call, not a brand revise.**

### 2.4 Hero verdict: **PASS**

The hero is brand-aligned. No changes required.

---

## 3. FAQ visual treatment

### 3.1 What's there

- Section H2 `Frequently Asked Questions` at 25.5px / weight 700 / letter-spacing normal / `#E8E4DF`.
- Five FAQ category groups (`Getting Started`, `Data & Backups`, `Purchases`, `Nearby Alerts`, `Features`).
- Each category title `.faq-category-title` at 12px / weight 700 / uppercase / 0.8px tracking / `#555060` — **identical to the eyebrow spec**, which is correct for category labels.
- 16 FAQ items styled as `<li class="faq-item">` with bg `#1A181E` (the `bg-elevated` token), 1px `#242228` border, 24px×32px padding.

### 3.2 Brand-floor checks

| Check | Pass/Fail | Notes |
|---|---|---|
| Section bg matches surface hierarchy | **PASS** | `#1A181E` for FAQ cards = `bg-elevated` per brand-direction §1.1 surface hierarchy step 2. ✓ |
| Border color | **PASS** | `#242228` = `border-subtle` per brand-direction §1.1 step 3. ✓ |
| No gradients, no shadows, no glassmorphism | **PASS** | Card bg is solid color. No `box-shadow`, no `backdrop-filter`. |
| FAQ category-title style consistency with eyebrow | **PASS** | Reusing the eyebrow type recipe for category labels is the right architectural move — keeps the type system tight. |
| Type scale on FAQ Q (h3) and A (p) | **OK with note** | Q renders as bold 18-19px, A as 17px / line-height 1.55 / `#E8E4DF`. Within tolerance. Slightly under the 17–18px body floor, but readable. |
| Mint discipline at section level | **PASS** | Zero mint hits inside the FAQ list. The whole 16-item block is type-on-elevated-surface only. That's correct — mint is the load-bearing accent and the FAQ is content density, not chrome. |
| **`<h2>` weight + size** | **MARGINAL FAIL** | Section H2 renders at 25.5px / weight 700 / no tracking. Brand-direction §1.2 spec for Section H2 is **36–48px / weight 800 / -0.6px tracking**. The current `Frequently Asked Questions` reads as "subtitle" not "section H2." The class on the element is `.section-subtitle` (per source line 190) — it's literally tagged subtitle, but it's the page's only H2 and should carry the brand H2 register. |
| Title Case in FAQ category labels | **OK** | `Getting Started`, `Data & Backups`, etc. — these are uppercase via CSS `text-transform`, so the underlying source casing doesn't render. Not a brand issue. Source casing is fine. |
| Italic / decorative type | **PASS** | None spotted. |

### 3.3 FAQ visual verdict: **PASS with one revise**

Bump the `Frequently Asked Questions` H2 to the brand's Section H2 register (36–48px / 800 / -0.6px tracking) — currently it's rendering as a small subtitle when it's structurally the page's primary section title. Or: keep the small treatment but rename it `<h2 class="utility-section-title">` and add a CSS rule that's deliberately quieter (which is what's effectively happening already — the issue is that there's no styled rule, it's just inheriting defaults).

**Recommended fix:** the simpler path is to align the H2 to the brand spec. If support page intentionally wants a quieter section title (which is a defensible design call — utility surface, FAQ is content not chrome), document it explicitly in the spec rather than letting it look like an oversight.

---

## 4. Dead v1 classes — `.panel`, `.utility-hero`

### 4.1 What I found via stylesheet probe

- **`.panel`** — **0 CSS rules in `styles.v2.css`.** The class is on the page (2 elements: hero `<section class="section panel utility-hero">` and FAQ `<section class="section panel">`) but has **no styling whatsoever**. It's a dead class — pure orphan from v1. Removing it would cause zero visual change.
- **`.utility-hero`** — **4 CSS rules in `styles.v2.css`.** This class is **alive and doing work**:
  1. `.utility-hero { padding-top: var(--space-9); padding-bottom: var(--space-7); }`
  2. `.utility-hero .section-inner { max-width: 760px; }`
  3. `.utility-hero .eyebrow { ... }` (12px / 600 / uppercase / 0.8px tracking / `#555060`)
  4. `.utility-hero h1 { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.05; letter-spacing: -0.5px; color: white; margin: 0 0 var(--space-5); }`

### 4.2 Verdict

- **`.panel` — REMOVE.** It's dead in CSS, doing nothing visually, and the name is a category-cliché holdover from v1's panel-and-card SaaS aesthetic that the v2 brand explicitly walked away from. Keeping it is a class-name lie. **Engineer change: strip `.panel` from both `<section>` elements in `support.html` source.** Two edits, zero visual diff.
- **`.utility-hero` — KEEP.** It's actively doing the work of the support hero's typography and width constraint. The name describes the architecture (utility-page hero, smaller and quieter than the home hero) and isn't a v1 holdover — it's a v2 sub-page convention. The CSS rules it controls are also the brand-correct values per §1.2 spec. Leave it.

### 4.3 Bonus class to flag

The hero `<h1>` has **no CSS class** of its own (`h1Class: ""` per DOM probe). The `.utility-hero h1` selector is what styles it. That's fine for now, but future support sub-page additions risk losing the cascade if anyone refactors. **Optional:** add `class="utility-hero-title"` to the `<h1>` to make the styling intent explicit. Not a brand call — engineering hygiene only.

---

## 5. What MUST be added/changed at the brand-chrome level

In priority order, with the smallest possible change for each:

### 5.1 (HIGHEST) Replace stale OG + Twitter image

**Change two lines in `<head>`:**

```html
<!-- BEFORE -->
<meta property="og:image" content="https://methere.app/assets/app-hero-remember.png" />
<meta name="twitter:image" content="https://methere.app/assets/app-hero-remember.png" />

<!-- AFTER -->
<meta property="og:image" content="https://methere.app/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://methere.app/og-image.png" />
```

**Why this is highest priority:** every link share (Slack, Discord, iMessage, Twitter, Telegram) of a support URL right now will render the v1 blue-and-white hero image. That's the **exact** brand drift the home page redesign was meant to kill. Sub-pages of the v2 site cannot ship link-share previews that look v1.

**Implicit dependency:** confirm `/og-image.png` (v2 canonical from `brand-assets/web/`) is actually deployed at site root, not just in the `brand-assets/` directory. If engineer hasn't moved it to deploy root yet, that's the actual blocker — the meta tag fix is then a 1-minute follow-up.

### 5.2 (HIGH) Replace v1 favicon with canonical 5-asset set

**Change favicon block in `<head>`:**

```html
<!-- BEFORE -->
<link rel="icon" type="image/png" href="./assets/MetHere-ios-appLogo-Current.png" />
<link rel="apple-touch-icon" href="./assets/MetHere-ios-appLogo-Current.png" />

<!-- AFTER (mirror the home page's favicon block exactly) -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512.png" />
```

**Why high priority:** the browser tab favicon for the support page renders the v1 mark. A user with both home and support open in adjacent tabs sees two different brand marks. Same fix as 5.1 — it's the kind of v1 inheritance the redesign explicitly retired.

### 5.3 (MEDIUM) Promote `Frequently Asked Questions` H2 to brand Section H2 register

**Either (a)** restyle the existing `<h2 class="section-subtitle">` to match brand-direction §1.2 H2 spec (36–48px / 800 / -0.6px tracking), **or (b)** rename + restyle to `<h2 class="utility-section-title">` with a deliberately quieter scale (24–28px / 700 / -0.4px tracking) and document the deliberate choice.

I recommend path (b) — the support page is a utility surface and a 48px section title would feel disproportionate given the FAQ content density underneath. The current 25.5px is structurally close to right; just give it a real CSS rule with intentional values rather than letting it inherit defaults, and add tracking + a slightly stronger weight (700 → 800 to hit brand display register).

### 5.4 (MEDIUM) Strip dead `.panel` class

Two `<section>` elements in `support.html` have `class="section panel utility-hero..."` and `class="section panel..."`. The `.panel` class is dead in CSS. Remove it. **Net result:** zero visual diff, cleaner markup, kills a v1 class-name relic.

### 5.5 (LOW) Resolve description redundancy

Three near-identical lines (`<meta description>`, `og:description`, `twitter:description`) describe the same support page intent with three slightly different copy variants. Pick one canonical line and use it across all three. Copywriter Phase 3 call, not a brand call. Flag and move on.

### 5.6 (LOW / OPTIONAL) Add trust microline to hero

Add `<p class="hero-trust">On your device. No account.</p>` (or equivalent) under the contact email line. Strengthens the support hero's brand-floor consistency with the home hero's trust microline pattern. Not required for May 5 launch; nice-to-have for sub-page chrome consistency.

### 5.7 (LOW / OPTIONAL) Add `google-site-verification` parity

Home has the GSC verification meta. Support doesn't strictly need it (verification is domain-level), but adding it for parity removes one source of "why does the home page have this and the sub-page doesn't" drift. Engineer call.

---

## 6. What I'm explicitly NOT calling out

These are out of my lane (other panelists own them) — flagging so they don't fall through:

- **FAQ content accuracy** (do the answers match current app behavior, are pricing numbers right, is "Light/Dark variants of Mint Social" correctly described, etc.) → **ios-product-designer** owns this. The brand floor doesn't speak to factual correctness of FAQ answers.
- **Voice tightening per question** (is each answer the right length, does each question read on-voice, are there kill-list words inside the FAQ body copy) → **copywriter** owns this. I scanned for em-dashes (none found in visible copy ✓) and AI-tell vocabulary (none in the JSON-LD which mirrors visible copy ✓), but voice tuning is copywriter's lane.
- **Header / footer chrome details** (lockup size, footer credit line, social links) → covered at the site-shell level by the home page chrome. The support page inherits the site-shell. If site-shell is brand-correct on home, it's brand-correct here. The probe confirmed `.site-header` and `.site-footer` exist with horizontal lockup at top (112px) and vertical lockup at footer (190px) — both are canonical brand-assets per the inventory.
- **Accessibility** (contrast ratios, focus states, keyboard nav of FAQ items) → not a brand-floor question for this audit. Brand-direction sets WCAG AA as the floor; the home page's audit handled that.

---

## 7. Sign-off matrix

| Area | Status | Action required |
|---|---|---|
| Dark surface + type face + body color + mint discipline | **GREEN** | None. |
| Hero composition + eyebrow + H1 + body + contact + badge | **GREEN** | None. (Optional: add trust microline.) |
| FAQ card visual treatment (bg, border, padding, type) | **GREEN** | None. |
| Mint discipline across page | **GREEN** | 1 hit in hero (contact email), 0 in FAQ body, lockups are mint-on-dark. Load-bearing only. |
| `<title>` + `<meta description>` voice | **GREEN** | None. |
| **`og:image` + `twitter:image`** | **RED** | Replace `app-hero-remember.png` with `og-image.png`. Add `og:image:width/height`. |
| **Favicon block** | **RED** | Replace v1 PNG with canonical 5-asset set from `brand-assets/web/`. |
| Section H2 register | **YELLOW** | Promote `Frequently Asked Questions` to brand H2 spec OR document the deliberate quieter treatment. |
| `.panel` dead class | **YELLOW** | Strip from both `<section>` elements. Cosmetic-only change. |
| `.utility-hero` class | **GREEN** | Keep — actively doing brand-correct work. |
| JSON-LD `FAQPage` schema | **GREEN** | None. |

---

## 8. The smallest possible v2 brand-floor passing change

If engineer wants the minimum diff to clear this audit for May 5 launch:

1. **Edit `src/support.html` `<head>`:** swap two image URLs + add image dims + replace 2-line favicon block with 5-line canonical block (5.1 + 5.2 above). ~3 minutes.
2. **Edit `src/support.html` body:** strip `panel` from the two `<section>` class lists (5.4). ~30 seconds.
3. **(Recommended) Edit `styles.v2.css`:** add a real rule for the FAQ section H2 (5.3) — either bump it to brand H2 register or rename the class and intentionally style it quieter. ~5 minutes.

**Total brand-floor delta: ~10 minutes of engineering. Zero copy changes. Zero designer work. Zero new assets needed (assumes `og-image.png` and the 5 favicon files are already in `brand-assets/web/` per the brand-assets ship — confirmed in memory `project_brand_assets_production_ready`).**

---

*Audit complete. Ship the head rewrite + class strip and the support page is brand-floor compliant for v2 launch. Voice + FAQ accuracy stays with copywriter and ios-product-designer per their parallel briefs.*
