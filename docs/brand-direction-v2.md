# methere.app v2 — Brand Direction

**Owner:** Brand strategist (Gigi)
**Date:** 2026-04-27 · T-8 to launch
**Status:** Phase 1 direction. Designer guardrails for Phase 2.
**Source of truth:** `~/Documents/Projects/remember-me-starter/docs/brand/brand-guidelines.md` and `voice-and-tone.md`. This document does not invent — it translates locked v2 brand into the web register.

---

## TL;DR for the designer

The site is one page. It is dark, mint-accented, type-led, and quiet. It looks like a poster for the app, not a SaaS landing page. If at any point it could be mistaken for a Notion template, an Arc landing page clone, or a typical Y Combinator launch site, it's wrong. It should feel like the inside of the app, not a brochure for it.

**One-line vibe:** the back wall of a dim bar with a single mint neon sign that says the tagline.

---

## 1. Visual direction

### 1.1 Color application

**Default state is dark.** Primary background `#111014` (`bg-primary` in the app system). No exceptions, no gradients, no light hero, no "we'll do dark in the second fold." Dark from first pixel to footer. The brand guidelines call this out explicitly: "External surfaces — icon, App Store screenshots, share cards, website, marketing — STAY locked to canonical dark."

**Mint is the neon sign. Everything else is the room.**
- Mint `#2DD4A8` is reserved for: primary CTA, the tagline word that carries the moment (typically "Remember"), the App Store badge if it stays default-black it actually carries the page, hover/focus states, link underlines, single hairline accents at section transitions if needed. That's the list.
- The light-theme mint `#0F9D7A` is **not** for web. It exists only inside the running app. The site uses canonical `#2DD4A8`.
- If you find yourself reaching for mint for "atmosphere," stop. Use `#1A181E` elevated surface or `#242228` border instead.

**Surface hierarchy (in order):**
1. `#111014` — page background
2. `#1A181E` — feature panels, screenshot frames, plan cards
3. `#242228` — hairline borders, dividers
4. `rgba(45,212,168,0.10)` — only for the seen-badge style highlight if it shows up. Not for hero glow.

**Text:**
- Headlines: `#FFFFFF` pure white
- Body: `#E8E4DF` warm off-white (deliberate warmth — do not use pure white for body)
- Secondary/meta: `#8A858F`
- Labels (uppercase 11px): `#555060`

**Never on this site:** gradients of any kind, glassmorphism / `backdrop-filter`, drop shadows for elevation (the current site has all three — kill them all), blue links, white backgrounds, pure white body text, more than one mint element on screen at the same scale.

### 1.2 Typography register

**One typeface: Plus Jakarta Sans.** Self-host the woff2 files (do not hotlink Google Fonts — the current site does this and it's a brand violation per `brand-guidelines.md` §4.2). The font lives in `~/Documents/Projects/remember-me-starter/src/assets/fonts/`.

Weights actually used: 500, 700, 800. Cut everything else.

**Type scale on web (a refit of the app scale, not a reinvention):**

| Role | Size | Weight | Spec note |
|---|---|---|---|
| Hero H1 | 64–88px (clamp, fluid) | 800 | Negative tracking ~-1.5px. Two lines max. |
| Section H2 | 36–48px | 800 | Negative tracking ~-0.6px. |
| Subhead / lead | 18–22px | 500 | Sits in `#8A858F`. One sentence. |
| Body | 17–18px | 500 | `#E8E4DF`. Line-height 1.55. |
| Eyebrow / label | 12px | 600 | UPPERCASE, 0.8px tracking, `#555060`. Use sparingly. |
| CTA / button | 16–17px | 700 | Mint button text is `#111014`, not white. |

**Web-specific shifts from the app scale:** body text steps up to 17–18px (web reads at greater distance than phone), hero gets meaningfully larger because there's room for it. The negative letter-spacing on display sizes is non-negotiable — that tightness is the brand's voice in type form.

**No Space Grotesk.** The current site imports it as a secondary face. Plus Jakarta Sans only.

**Capitalization:** sentence case for headlines and body. UPPERCASE only for the tiny labels. Never Title Case anywhere. Lowercase is okay for one specific moment if Julian wants it (the launch tweet voice — "i made a thing" energy), but default is sentence case.

### 1.3 Asset language — how the app shows up

The app **is** the imagery. There are no stock photos, no people-with-phones, no isometric illustrations of "data flowing," no abstract gradient blobs.

**Allowed primary visuals (in order of preference):**
1. **Real iOS sim captures of v2 screens.** The 7 App Store screenshots in `docs/launch/asc-screenshots/` are the canonical art. Reuse them. Do not re-shoot, do not invent new screens. The hero uses screen 1 (proximity alert composed hero) or screen 2 (Copper & Vine venue detail). The "how it works" section can use screens 2/3/4. The privacy section can echo screen 5. Do not generate new fake app UI for the site — there's a memory rule on this (`feedback_dont_invent_real_app_assets.md`).
2. **The brand pin glyph alone** (`brand-assets/masters/pin.svg` or `pin-on-dark.svg`) — for any moment that needs a brand stamp without the full lockup. The pin is the most flexible mark.
3. **Pure typography.** A whole section can be just big ExtraBold text on `#111014`. The app does this — the site can too. It's the strongest visual the brand owns.
4. **The horizontal lockup** (`brand-assets/masters/lockup-horizontal-mint-on-dark.svg`) for header/footer chrome. **The vertical lockup** for one signature moment max — likely the final CTA above the App Store badge. Do not stack vertical lockups throughout the page.

**Screenshot presentation:**
- Frame iPhone shots inside a soft squircle device mock (matching the App Store screenshot treatment). Border `#242228`, no drop shadow, no perspective tilt, no floating-in-3D space.
- One screenshot per moment. Do not pile three into a marketing collage.
- Captions sit *underneath* the device, in mint accent treatment (mint on the payoff word only — same mint discipline as the App Store screenshots, see brand-guidelines §6.3).

**Forbidden visuals:**
- Stock photography of any kind (people in suits, coworking spaces, hands holding phones, all of it)
- Isometric or 3D illustrations
- Animated SVG illustrations of "the magic happening"
- Lottie decorations
- Gradient mesh backgrounds
- Floating UI fragments without device frames
- Video loops of generic city/bar/gym B-roll
- Anything that looks AI-generated. If a designer asks "should we generate a hero image," the answer is no.

### 1.4 Motion register

**Web gets motion. Sparingly.** The brand has a motion system (`src/theme/motion.ts`) and the app's signature is the spring `cubic-bezier(0.34, 1.56, 0.64, 1)`. Echo it on web for two things only:

1. **Reveal-on-scroll** — sections fade up 16px on entry, ~250ms, the brand spring. Already in the existing site (`data-stagger`, `reveal` classes) — keep that pattern. Don't add more types of motion.
2. **The hero proximity-alert moment** — if the hero visual is the iOS notification firing, that one element can animate in (slide from top-of-frame, settle with the spring, brief subtle pulse on the mint accent, then rest). One time. On page load. Not on scroll back up.

**Hard motion rules:**
- Honor `prefers-reduced-motion` — kill all motion in that branch, including the hero notification animation. Already the project standard.
- No parallax. No scroll-jacking. No mouse-trailing effects. No magnetic buttons.
- No marquee logos, no infinite-scrolling testimonial bands, no animated counters.
- Total motion budget per page: under 1 second of actual movement. The site is a poster, not a music video.

---

## 2. Voice register for web

### 2.1 The shift from in-app voice to web voice

The brand voice doc was written for in-app micro-copy where the user has already chosen us. The web is colder — visitors arrived from a tweet, an App Store sidebar, a Show HN link. They don't yet know what the app is or why it exists. Voice stays the same; tone shifts ~5% warmer and slightly more *scene-setting*. Per `voice-and-tone.md` §3.9 — this is exactly the marketing-surface tone shift the doc already specifies.

**What stays:**
- Warm, sharp, unbothered, knowing — all four traits, every line
- Short sentences. 8–14 words average.
- Specific over clever
- Period-comma-colon — not em-dashes (Julian preference, multiple memories on this)
- Forbidden phrase list applies in full

**What shifts for cold arrivals:**
- We can take an extra sentence to set the scene. The "Moment" cards on the existing site are the model — *"You see them at the gym every week. You've talked twice. You remember the conversation but not the name."* That's the voice on web. Short scenes that the visitor recognizes themselves in.
- We name the category once, plainly: *"It's a social memory app."* (Per brand-guidelines §1 — "social memory" is the category we're planting.)
- The proximity-alert moment gets to be the pitch, in product copy form: *"You're near The Hoxton. You know three people here."* That sentence appears verbatim — it is the marketing copy and it is the actual push.

### 2.2 Headline pattern recommendations (patterns, not copy — copywriter writes the lines)

**Hero pattern:** Two-line imperative + period-stop pacing. Model: *"Walk in. Remember everyone."* This is the only tagline that goes in the hero. Don't pair it with anything. Don't write a longer alternative.

**Section H2 patterns that work for this brand:**
- **The plain category statement** — "A social memory app." / "Not a contacts app."
- **The before/after sentence** — "You met them in November. The name's gone. This is where you write it down."
- **The product-copy-as-headline** — "You're near The Hoxton. You know three people here." (using the actual notification copy as a section title)
- **The refusal** — "No account. No feed. Nobody else in here."

**Patterns to avoid:**
- "How it works" / "Why MetHere" / "Plans" — generic SaaS section titles. The brand uses conversational titles in-app ("Recent faces," "Your spots," "The story so far"). The site should follow that convention. Section titles are statements, not directory labels.
- "Built for people who…" — opens a benefit list. The brand sells moments, not benefit lists.
- Any rhetorical question headline ("Tired of forgetting names?") — instant SaaS smell.

### 2.3 Web-register-specific kill words (additions to the existing forbidden phrase list)

Beyond the AI-tell list (`magic`, `unlock`, `discover`, `got the X it needed`) and the brand's existing forbidden list:

- "Made for the modern …" / "Built for the way you …"
- "Powerful," "powerful yet simple," any sentence containing "yet"
- "The all-in-one …"
- "Take control of your …"
- "Beautifully designed" (let the design speak)
- "Privacy-first" as a marketing claim — instead say what we don't do, in plain English (per voice doc §3.8)
- "Remember names" as the category claim — the category is "social memory," we keep the keyword in keywords field, not in headlines
- "Contact" / "contacts" — already in forbidden list, but flagging because the current site violates this multiple times ("contact memory app" in meta description)
- "Themes" plural with a count — the current site claims "5 themes." False. Ship copy that doesn't reference theme picker at all (the app has Mint Social only; the user-toggleable Light variant is an in-app preference, not a marketing feature).

---

## 3. On-brand vs. off-brand boundary

### 3.1 What CANNOT appear on this site

- The current blue-and-white look (every color, the gradient backgrounds, the glassmorphic panels, the `box-shadow` elevation, the Space Grotesk secondary font, the Google Fonts hotlink — all of it)
- Stock photography
- Any chart, graph, or analytics visualization. We don't sell metrics.
- Testimonial cards with avatar + name + role + quote
- "Trusted by" logo grids
- Pricing comparison tables with checkmarks. The pricing section uses prose, not feature matrices.
- Generic SaaS section labels ("Features," "How It Works," "Pricing," "FAQ" — replace each with a brand-voice statement)
- Hashtags or social proof badges in the layout
- "Made by" attribution that reads like a footer afterthought — Julian's name and one line about the build belongs in a real moment (per brand-guidelines §6.4 footer + Q4 in §9 about founder presence)
- Any reference to "5 themes," "themes you can pick from," or theme switching as a feature. The current site lies about this. The redesign cannot inherit that lie.
- Confusing or out-of-date pricing claims. The IAP is locked: $3.99/mo, $14.99/yr, $29.99 lifetime. Free tier 15 people / 5 alerts (verify exact alert count with `src/paywall/config.ts` before copy ships — current site says "3 alerts" and "8 places" which may be wrong).
- "Remember Names" anywhere — that was the v1 subtitle and the v2 listing has explicitly moved off it.

### 3.2 What MUST appear

- Tagline exactly: **"Walk in. Remember everyone."** as the hero H1.
- Category plant exactly once: **"It's a social memory app."** (in-page, somewhere prominent — the second-fold equivalent.)
- App Store badge (Apple-provided black variant, not the white one) in the hero CTA position. Use Apple's badge service URL pattern as the existing site does — that one detail can stay.
- Brand favicon set from `brand-assets/web/` — replace the current `MetHere-ios-appLogo-Current.png` with the proper canonical files (`favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `android-chrome-192.png`, `android-chrome-512.png`).
- OG image from `brand-assets/web/og-image.png` (1200×630) — the current site references `app-hero-remember.png` which is v1 era.
- Header lockup using `brand-assets/masters/lockup-horizontal-mint-on-dark.svg`.
- Final-CTA signature moment using `brand-assets/masters/lockup-vertical-mint-on-dark.svg` (this is the one signature use of the vertical lockup on the page — see brand-assets README for the rule).
- Footer credit: "Made solo by Julian Collins." (per brand-guidelines §6.4) — copy is locked, designer just places it.
- Privacy and terms links in the footer. Privacy URL must work (it's an ASC submission requirement — see `asc-v2-submission-playbook.md` Phase 0.5d).

### 3.3 Edge cases the designer needs to call

These are the ones I'd surface for Julian rather than decide in Phase 2:

1. **Hero motion: yes or no for v1 of the redesign?** I'm leaning toward shipping the static hero on May 5 and adding the proximity-alert micro-animation as a v2.0.x site update. Reason: launch is T-8, motion polish is the kind of thing that consumes a day and rarely ships clean first try. Designer should propose both and let Julian call.
2. **Founder presence — quiet credit vs. real moment?** The brand-guidelines Q4 explicitly leaves this open. The launch is the moment to decide. My take: a quiet "made solo by Julian Collins" line in the footer for v1 of the site, plus a small "about / press" page linkable for press kit needs. Not a hero photo of Julian. Not a sidebar with his face. Defer "founder story" treatment to a post-launch update if it earns its way in.
3. **Light theme acknowledgment on the website.** The app has a user-pickable Light variant (shipped Apr 26). The site itself stays dark, but should the screenshot tour show ONLY dark captures? My call: yes, dark only on the site. Light theme is an in-app preference, not a marketing feature, and showing both creates noise. If we ever do a "look at the new light theme" moment, that's a tweet, not a website section.
4. **The "Moment" scenarios.** The current site has three scenario cards that are actually on-brand (the gym/bartender/wave scenarios). They're the best copy on the existing site. Keep them, refresh the styling, move them to the second fold. Designer should not throw out these strings.

---

## 4. Top 3 things I'm most worried the designer might get wrong

1. **Going too far with mint.** It's the page's only color note and it's very easy to start splashing it everywhere — mint headlines, mint borders, mint icons, mint backgrounds. The brand rule is "mint is the neon sign, everything else is the room." If the page reads as "minty," it's wrong. It should read as *dark* with mint as a single, load-bearing accent. The right amount of mint is uncomfortable for a designer used to filling color quotas.

2. **Overproducing the screenshot showcase.** The 7 ASC screenshots are already art-directed. The temptation will be to "elevate" them — add halos, rotate them, stack them in 3D, build a swiping carousel. Don't. Frame each in a clean device squircle, set them on `#1A181E`, write a caption underneath, move on. The screenshots earn their own attention; the designer's job is to *not interfere* with them.

3. **Drift toward generic SaaS landing-page IA.** Even with this direction, the muscle memory is strong: hero, "How it works" with three steps, "Features" grid with icons, "Pricing" with two cards, "Final CTA." That structure already exists in the current site and it's not wrong — but the *visual treatment* of each section needs to feel like a brand moment, not a template slot. The "Why MetHere" section with three trust cards in a grid? That can absolutely work, but only if the cards feel like they belong inside the app — not like Bootstrap reboot. (IA itself is the growth-strategist's call, not mine. I'm flagging the visual-template trap.)

---

## 5. Questions for Julian I couldn't resolve from source

1. **The free-tier limit numbers.** The current site claims 15 people / 8 places / 3 alerts. The brand-guidelines and ASC playbook both reference "15 people / 5 alerts" but I didn't open `src/paywall/config.ts` to verify. Designer + copywriter need the exact numbers from the source-of-truth config before any pricing copy ships. (10 minutes for whoever is in code to confirm.)

2. **Site-level launch banner during launch week — yes or no?** The "Same app underneath. Every screen, redrawn." promo line is locked for launch-window only. Should the website carry a small banner with that line for the first ~14 days, or is that an App Store / promo-text-only treatment? My instinct: skip the banner, let the redesigned site itself be the message. But this is your call.

3. **About / press page in scope for May 5?** Or is the single-page redesign the entire site v2 deliverable, with `/privacy` + `/support` + `/press` left as separate static pages with their own (later) brand pass? Need scope confirmation before designer plans the navigation.

---

*This document is the brand floor. Designer can solve everything above the floor however they want. If the designer wants to push back on something specific, route through Gigi — she's holding the brand line.*
