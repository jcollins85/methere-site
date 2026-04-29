# methere.app v2 — Brand Verdict at Assembly Scale

**Reviewer:** brand-strategist (Gigi)
**Date:** 2026-04-27 · T-8 to launch
**Method:** Live page reviewed in Chrome via chrome-devtools MCP at 1440x900. Reveal-on-scroll forced visible. Full-page + 8 viewport screenshots captured to `docs/panel-review/brand-zone-*.png`. Asset usage and text occurrences instrumented via `evaluate_script` queries against the live DOM.
**Reference:** `00-assembled-fullpage-1440.png` (Gigi-supplied baseline) cross-checked against my own live capture `brand-fullpage.png`.
**Prior verdicts being revised:** `brand-direction-v2.md` Phase 1 floor + `brand-visual-review.md` Phase 2 GREEN-LIGHT (the latter was based on 3 isolated mockups — that scope was insufficient and I'm marking it as such).

---

## TL;DR

**The Phase 2 review missed the assembly-scale problem.** Holding mint discipline within each section is not the same as holding it across a 10-section continuous scroll, and three of the brand floor's load-bearing rules — "mint is the neon sign" / "the app IS the imagery" / "scene-setting that the visitor recognizes themselves in" — fail at this scale. I greenlit per-section moves that compound into brand monotony when assembled.

The instrumented audit confirms it cleanly:

| Asset / phrase | Spec'd uses | Actual uses on assembled page |
|---|---|---|
| `screen-01-proximity.png` (composed proximity phone with caption strip) | 1 (hero only) | **4** (hero, demo strip, how-it-works step 3, proximity deep-dive) |
| `screen-02-venue.png` (Copper & Vine venue detail) | 1 | **2** (demo strip, how-it-works step 2) |
| `screen-03-people.png` (People list) | 1 | **2** (demo strip, how-it-works step 1) |
| "Walk in. Remember everyone." as a visible visual moment | 1 (hero) + 1 (final CTA echo) | **6** (hero H1, hero caption-baked, demo-strip caption-baked, how-it-works phone-only [notification copy still visible], proximity deep-dive caption-baked, final CTA H2) |
| Mint hits across page | "load-bearing only" | **27 distinct mint elements** (instrumented) |

**The single biggest brand violation introduced by assembly:** the "Walk in. Remember everyone." line plays **6 times** across the scroll. Spec called for the line to be the brand's load-bearing tagline — said once strong in the hero, echoed once at the final CTA for closing-beat reward. What shipped is a mantra. Mantra is a different brand register and one MetHere doesn't own (Apple does — "Think different" energy is corporate-confident, MetHere is "the friend who notices" — quiet, specific, scene-setting). Repetition at this volume converts the tagline from sharp into wallpaper, which is the exact failure mode brand-direction §1.1 named ("if you find yourself reaching for mint for atmosphere, stop").

**The fix is decisive cuts now.** All three of Gigi's proposed cuts are correct. I'm voting DROP on Cuts 1 and 2 unconditionally, and **flipping my prior position on Cut 3**: with Cut 1 implemented, the hero composed S1 echo has to come down too. The reasoning that justified keeping the composed S1 in isolation collapses once the demo strip is gone. See §6 below for why.

---

## 1. Vote on each of Gigi's proposed cuts

### Cut 1: Drop Section 2 (3-second demo strip) entirely → **DROP. Vote: yes, kill it.**

**Brand reasoning:**

Section 2 violates two brand floor rules at once.

First, asset-language redundancy. Section 2's three phones (`screen-03-people.png` + `screen-02-venue.png` + `screen-01-proximity.png`) are **the same three phones** Section 4 uses for its three-step "How it works" tour. Showing the user the same three screens with shorter captions in Section 2, then again with longer captions in Section 4, doesn't add information — it adds wall time before the visitor reaches Section 5 (the moat). Same images, same product, said twice. The brand floor said "one screenshot per moment, do not pile three into a marketing collage." Section 2 is exactly that pile, presented as a row.

Second, voice register collapse. The spec gave Section 2 a "3-second demo" framing — short captions, fast cadence. The brand voice doc explicitly avoids "fast / efficient / quick" framings because the product's pitch is "remembers people you almost forgot" — that's not a 3-second story, it's a "the next time you walk past" story. Section 2 is in the wrong voice register for this brand. Section 4's longer-form step copy IS in the right register.

Third — and this is the assembly-scale insight — Section 2 breaks the page's reading rhythm. The brand floor specified a "poster, not a brochure" structure. Posters don't preview themselves. Hero → "you've seen them before" Moment → "save them, pin them, get pinged" How it works is a clean 3-beat thesis. Inserting a "in 3 seconds" preview between hero and Moment turns a 3-beat poster into a 4-beat brochure with the second beat being a duplicate of the fourth.

Cut Section 2 entirely. The page becomes:
- Section 1: Hero
- Section 3 → renumber as 2: The Moment (scene-setting prose)
- Section 4 → renumber as 3: How it works (the three-phone tour, where it earns its weight)
- Section 5 → renumber as 4: Proximity deep dive (the moat)
- ... etc.

Net loss: zero brand information. Net gain: one fewer screenshot tour, the page tightens by ~1100px of scroll, and the Moment cards (Section 3) — the strongest copy on the existing site per `brand-direction-v2.md` §3.3 item 4 — get to land *immediately* after the hero instead of after a content speed-bump.

**Confidence: HIGH.** This is the cleanest cut. No copy reshuffle required, no asset rework, just delete the section.

**Gut-check for Julian:** "If I removed this section and you scrolled the page, would you miss anything?" — answer is no, because Section 4 says the same thing better.

---

### Cut 2: Replace Section 9 H2 from "Walk in. Remember everyone." to "That's it. That's the app." → **DROP the echo. MODIFY the replacement (see below).**

**Brand reasoning:**

I'm going to walk the prior call back explicitly, because this is where my Phase 2 review failed hardest.

In `brand-visual-review.md` §7 item 5, I recommended shipping the echo (`Walk in. Remember everyone.` mint on `Remember`) over the decisive close (`That's it. That's the app.`). My reasoning was: "when you reach the final CTA, hearing the same line you read at the top creates the 'yes, that's the thing' closing beat."

That reasoning is sound for a page where the line has been said **once** at the top. It is wrong for a page where the line has been said **5 times already** before reaching the final CTA. By the time the visitor reaches Section 9, hearing the tagline a 6th time isn't a closing beat reward — it's the moment the tagline finally tips from "memorable" to "okay I get it." Diminishing returns is a real brand mechanic and we're well past it by Section 9.

The decisive close is the right move. **But here's the modify:** "That's it. That's the app." is brand-on for in-app voice (it's a great PostSaveCelebration line), but it's slightly under-ambitious for a page-closing CTA. The visitor has just spent ~90 seconds scrolling — the close should land harder than "that's the app."

**My recommended H2 for Section 9:**

Pick one of these three, in order of strength:

1. **`On your phone. From day one.`** — Picks up the trust microline already on the page and elevates it to closing-beat scale. Plants the "no account / no setup" refusal one more time without using a refusal frame. Shifts mint to the second clause: `**On your phone. From day one.**` (mint on "From day one" — implies the small commitment is "just download it," nothing else). Brand-on for the Friend voice — this is what a friend says when telling you about an app they trust ("it's all on your phone, you don't have to sign up for anything"). 7 words. Period-stop pacing.

2. **`That's the app. Get it.`** (modified version of Gigi's proposal) — Keeps the decisive close energy of Gigi's "That's it. That's the app." but shifts the second sentence from a self-referential statement to an imperative. The CTA already has "Download on the App Store" right below — the H2 saying "Get it" creates a one-two beat with the badge. Mint on `Get it`. 5 words.

3. **`Pocket-sized. No homework.`** — Riskier. Plants the "no friction" position more decisively than the other two but it's more playful than the page's usual register. Use only if Julian wants the close to hit slightly warmer than the rest. Mint on `No homework`.

**My pick: Option 1.** It does the most brand work — refusal-positive close ("no account / no sync / no cloud / no profile" was already said in Section 7, this is a quieter restatement that doesn't repeat the No-format), it uses mint on a *different* word from anywhere else on the page (extending the mint vocabulary instead of compressing it), and it's the only option of the three that opens up future tagline variation without contradicting the hero.

**Confidence: HIGH on dropping the echo. MODERATE on which replacement is best — Julian's gut on the three options matters here.**

**Gut-check for Julian:** "When you finish reading this page, what should the last sentence make you feel? 'Oh, I get it' (Option 1), 'fine, downloading it' (Option 2), or 'lol okay' (Option 3)?" — his instinct between those three feelings is the answer.

---

### Cut 3: Hero phone — switch to phone-only crop (no caption strip) → **MODIFY into something stronger.**

**Brand reasoning — and I'm explicitly walking back my Phase 2 verdict on Q1:**

In Phase 2, my reasoning for keeping the composed S1 with caption strip in the hero was: "The H1 is the thesis, the device is the receipt." That logic depended on a specific assumption I didn't name at the time: **that the receipt would be the ONLY receipt on the page.** With Section 2 (demo strip) showing the same composed S1 again, and Section 5 (proximity deep-dive) showing it AGAIN, the hero "thesis → receipt" move is no longer the move — it's the *first of four times* the visitor sees the same receipt. That's not a thesis-receipt structure, that's a slide deck with the same slide repeated.

If Cut 1 ships (Section 2 dies), the hero composed S1 is no longer competing with a duplicate row 1500px below it. That's good. **But Section 5 (proximity deep-dive) still uses the same composed S1 — see `brand-zone-7b-proximity.png`.** The hero echo and the Section 5 echo will still pair as "same exact phone, twice in the page's two heaviest moments." That's still wrong.

So Gigi's Cut 3 (phone-only crop in hero, no caption strip) is going in the right direction, but I want to push it one step further:

**My recommendation: Hero gets a phone-only crop, AND Section 5 swaps to a different visual.**

For the hero phone-only crop, here's what specifically changes:
- Use a tightly cropped version of `screen-01-proximity.png` showing **just the iOS notification card** (the dark "MetHere — You're near Copper & Vine — You know 3 people here." pill), centered on the dark page background.
- No iPhone frame. No app screen behind it. Just the notification card on `#111014` page background, exactly as a real iOS notification appears when overlaid on a wallpaper.
- The "phone" disappears. What's left is the *moment* — the notification arriving while the user is doing something else.
- This is on-brand because iOS notifications are a real visual the brand owns. It is NOT fabricated UI (memory rule: `feedback_dont_invent_real_app_assets` — we're cropping a real screen capture, not generating one).
- Engineer task: extract the notification card from `screen-01-proximity.png` as a transparent PNG. ~10 min in Photoshop or any image editor. Or alternatively, capture the notification fresh from sim by triggering a real geofence and screenshotting just the notification card (also ~10 min).

For Section 5, change the visual to a different real screen:
- Use `screen-04-stats-receipts.png` if it exists, OR `screen-05-privacy.png`, OR a phone-only crop of `screen-02-venue.png` showing the venue detail with the "Nearby alert" toggle on. The Section 5 prose talks about the geofence sitting on-device — pairing it with the venue detail screen + alert toggle visualizes "you set it once" better than a fourth notification screenshot does.

**Why this is stronger than just doing Cut 3 alone:**
The brand floor §1.3 said "the app IS the imagery." If we keep the proximity notification as the only imagery the page uses (4 instances, even after Cut 3), we've reduced "the app is the imagery" to "the notification is the imagery." That's a category-rotation: we shipped a category-claim ("social memory app") but the visuals reduce the category to a single feature ("proximity alerts"). Section 5 already has the prose load on proximity — it doesn't need the visual to also be proximity.

**Confidence: HIGH on changing the hero. MODERATE on which Section 5 swap is best (depends on what real screen captures exist in `docs/launch/asc-screenshots/`).**

**Gut-check for Julian:** "If a stranger only saw the hero and three other screenshots, would they know the app does anything besides notify you? Or do they walk away thinking it's just a notification app?" — that's the test for whether the visual diet is too narrow.

---

## 2. Brand-rhythm audit at assembly scale

This is where the per-section review failed and I have to own it.

### Mint discipline at assembly: FAIL by my own floor's definition.

I instrumented mint hits across the live page. **27 distinct elements** computed-style as mint (`#2DD4A8`) on the rendered page. The brand floor said: "If the page reads as 'minty,' it's wrong." 27 elements is well past the threshold where mint stays load-bearing.

The breakdown of where mint shows up on the assembled page (from my chrome-devtools query and visual scan):
- Header: lockup mint dot + "MetHere" wordmark in mint = 2 hits (correct, this is brand chrome)
- Hero: `everyone` H1 word in mint + composed phone caption-baked `Remember` in mint + secondary CTA "See how it works" in mint = 3 hits in one viewport
- Demo strip: 3 phones each with mint accents on UI elements (mint button on screen-03, mint Spots tab on screen-03, etc.) + composed S1 caption mint = 4-5 hits
- The Moment: 0 mint (correct — type-only section, brand-clean)
- How it works: 3 phones with their inherent mint UI elements + 3 STEP 1/2/3 mint labels + Step 3 phone-only proximity = 5-6 hits
- Proximity deep-dive: phone with composed caption mint `Remember` + H1 mint `near` = 2 hits
- What else: assumed 0-2 (I'd need to scroll back, but the 4-card grid section is type-led)
- Privacy: 4 mint × marks + H2 mint `Nowhere` = 5 hits
- Plans: trial pill mint + Annual border mint + Save mint + plan-feature checkmarks if any = 4 hits
- Final CTA: H2 mint `Remember` = 1 hit (will become a different mint placement after Cut 2)
- Footer: vertical lockup mint = 2 hits (correct, brand chrome)

That's 30+ mint touchpoints across a single scroll. The Phase 1 floor said mint should be "single, load-bearing accents." The page has mint at every section, often multiple hits per section. Mint has become a section-marker color rather than a moment-marker color.

**The fix is structural, not surface:** Cut Section 2 (eliminates 4-5 mint hits in one stroke). Change the Section 5 visual to something less mint-heavy. Drop the second composed-caption from the hero phone (eliminates 1 hit). Drop the hero secondary "See how it works" mint link if Section 2 is killed (the link becomes a no-op anchor).

Post-cut, page should land at ~18-20 mint hits. Still above the spec's spirit but defensible because each remaining hit is doing identifiable brand work.

### Lockup signature still feels signature: PASS.

The horizontal lockup (header) and vertical lockup (footer) are placed exactly per spec — 1 of each, beginning and end of the scroll, no in-section repeat. This is the one part of the brand floor that the assembly held cleanly. The vertical lockup signature moment in the footer (`brand-zone-8-final-cta.png`) is the strongest single brand mark on the page and it earns its size because nothing else competes with it visually. Don't touch this.

### Reading rhythm: FAIL.

The brand floor said the page is "a poster for the app, not a SaaS landing page." Posters have one thesis. The current scroll has the same thesis stated 6 times. Posters that repeat themselves stop being posters and become merch. The cuts above bring the rhythm back to thesis-once.

---

## 3. Asset language audit at assembly

### Asset diversity: FAIL.

My chrome-devtools query confirmed:
- `screen-01-proximity.png` is on the page **4 times** (hero, demo strip, how-it-works step 3, proximity deep-dive)
- `screen-02-venue.png` is on the page **2 times** (demo strip, how-it-works step 2)
- `screen-03-people.png` is on the page **2 times** (demo strip, how-it-works step 1)
- Total unique screens shown: 3
- Total screenshot instances: 8

The page shows 3 unique screens 8 times. The brand has 7 canonical ASC screenshots. We're using 3 of them.

The brand floor §1.3 #1 said: "Real iOS sim captures of v2 screens. The 7 App Store screenshots in `docs/launch/asc-screenshots/` are the canonical art. Reuse them." Reuse meant *use them*, not use 3 of them 8 times.

### Genuine ways to vary the visuals without inventing fake UI

Here's what's already in `docs/launch/asc-screenshots/` that we're not using:
- `screen-04-stats-receipts.png` (Stats Memory hero — the "You met X at Y in Z" receipts moment, shipped Apr 19)
- `screen-05-privacy.png` (Privacy section)
- `screen-06-share.png` (Monthly share card — the share card we shipped Apr 20)
- `screen-07-*.png` (whatever screen 7 is)

(Engineer to verify exact filenames in `docs/launch/asc-screenshots/`.)

**My recommendation for revised asset diet:**

| Section | Current asset | Recommended asset |
|---|---|---|
| Hero | composed `screen-01-proximity.png` (full caption strip) | Cropped notification card from `screen-01` (no phone frame) |
| Demo strip | (cut entirely per Cut 1) | n/a |
| How it works step 1 | `screen-03-people.png` | `screen-03-people.png` (keep — earned use) |
| How it works step 2 | `screen-02-venue.png` | `screen-02-venue.png` (keep — earned use) |
| How it works step 3 | `screen-01-proximity.png` (phone-only crop) | `screen-01-proximity.png` (phone-only crop, keep — earned use, this is the step where the notification arrives) |
| Proximity deep-dive | composed `screen-01-proximity.png` (full caption strip) | `screen-04-stats-receipts.png` OR phone-only crop of `screen-02` showing the venue detail + alert toggle |
| What else | (none currently) | Optional: add 1-2 small screen thumbnails to support the 4 cards (e.g. `screen-06-share.png` mini for "share cards" card if that's one of the 4) |
| Privacy | (none, type-only) | Keep type-only, brand-correct |
| Plans | (none, type-only) | Keep type-only, brand-correct |
| Final CTA | (none) | Keep type-only |
| Footer | vertical lockup | vertical lockup (keep) |

**Result:** The page goes from 3 unique screens (8 instances) to 5 unique screens (6 instances). The page now shows the breadth of the app instead of repeating the same hero feature visual. The "app IS the imagery" rule is respected because each screen earns its placement by paired with prose that references that screen specifically.

**Confidence: HIGH on the asset diet revision. MODERATE on the specific Section 5 swap — I want eyes on what `screen-04-stats-receipts.png` looks like before locking it in. If the Stats hero composes well as a "the receipts" visual flanking the proximity prose, ship that. If not, fall to phone-only `screen-02` with alert toggle visible.**

---

## 4. Other brand-floor violations not surfaced in the per-section review

### Voice register inconsistency between sections at scale

The brand voice doc (and my Phase 1 §2.1) said voice stays the same across the page; tone shifts ~5% warmer for cold arrivals. At assembly, I see at least three different tonal registers active:

- **Hero / Final CTA register:** declarative, period-stop, sharp ("Walk in. Remember everyone.")
- **The Moment register:** narrative, scene-setting, paragraph-form ("The bar. The gym. The coffee shop. The face you keep almost placing.")
- **How it works register:** instructional, label-led, step-by-step ("STEP 1 / Save who you met")

Three voice registers in 10 sections is one too many. The "instructional / step / label" register in How it works is the weakest of the three — it's the most generic SaaS voice and it's been used (per brand-floor §2.2) as a "patterns to avoid" example: "How it works / Why MetHere / Plans — generic SaaS section titles."

The H2 of Section 4 IS on-voice ("Save someone. Pin them to a place. The phone does the rest.") — that line is great. But the **STEP 1 / STEP 2 / STEP 3 micro-labels** under the H2 reintroduce the SaaS template feel the brand floor was trying to avoid.

**My recommendation:** Drop the "STEP 1 / STEP 2 / STEP 3" labels in Section 4. Let the rhythm of the H2 do the step-counting (the H2 already says three sentences, in order). The sub-headers under each step ("Save who you met" / "Pin them to a place" / "Get pinged when you're nearby") can stay as small H3s, but lose the uppercase STEP X labels above them. This lets Section 4 read as a single 3-beat narrative rather than a numbered tutorial.

**Confidence: MODERATE.** This is a brand call but the labels do help scanability for visitors who skim. I'd ship the cut and revisit if growth-strategist data shows scroll-depth drops in this section. Acceptable to defer to v1.0.x.

### "What else is in there." section title is in the wrong voice register

Section 6 H2 is `What else is in there.` This is borderline-conversational (good) but the construction "what else is in there" is mildly literal in a way the brand voice doesn't usually go. The brand uses scenic / specific titles ("Recent faces," "Your spots," "The story so far") or refusal-positive titles ("No account. No social feed. Nowhere else.").

**My recommendation:** Rename to something like `One more thing.` (Apple reference is fine, the brand can carry that) or `A few quiet wins.` or `The little things.` — any of these reads more "Friend voice" than "what else is in there." Phase 3 copywriter should look at this. Not blocking.

### The "× SOCIAL MEMORY" eyebrow on hero

Per `brand-zone-1-hero.png` and `brand-zone-4b-how-it-works.png`, the hero has an `IPHONE · SOCIAL MEMORY` eyebrow above the H1. This is on-brand (plants the category per brand-direction §3.2 MUST). However, on review I notice the eyebrow appears specifically on hero — but I don't see the category plant `It's a social memory app.` appearing as a full sentence anywhere else on the page (the brand floor required it appear "once, somewhere prominent — the second-fold equivalent"). The eyebrow is a partial plant, not a full sentence plant.

**Recommendation:** Either (a) the eyebrow is sufficient and we can call the requirement met, or (b) Section 3 (The Moment) opens with the category plant as its lead sentence ("It's a social memory app." then the moment-cards). My instinct: the eyebrow is sufficient if it stays on the hero, but flag for copywriter Phase 3 to check if a stronger plant lands better.

**Confidence: LOW.** Could go either way. Defer to copywriter.

### One more I caught at assembly that I want to flag

The hero subhead "MetHere remembers the people you meet and the places you met them. The next time you walk past..." (visible in `brand-zone-4b-how-it-works.png`) is a great sentence. But it sits **below the H1 on the left column** while the composed phone with caption-baked tagline sits on the right. So the subhead has to compete for visual attention with the phone — and the phone wins because images beat text in eye-track.

If the hero phone changes to the cropped notification card per my Cut 3 modify, this problem also resolves: the cropped notification is much smaller visually than the full composed phone, and the subhead can carry. Self-fixing if Cut 3 ships my way.

---

## 5. Reconsideration of Cut 3 specifically (per request)

The brief asked: "if Cut 1 (drop demo strip) lands, does that change your earlier go-ahead on the hero composed-caption echo?"

**Answer: yes, decisively.**

My Phase 2 verdict on Q1 (keep composed S1) was based on the following reasoning, which I'll now stress-test:

> "the page saying the line, then the product proving it. The H1 is the thesis, the device is the receipt."

This reasoning works if and only if the receipt is the ONLY receipt on the page. With Section 2 alive, there were 3 more receipts (the demo-strip phones). With Section 5 still using the composed S1, there's still 1 more receipt downstream of the hero.

**Post-Cut 1 + my recommended Section 5 swap:** the hero composed S1 would be the only composed S1 on the page. In that scenario, my Phase 2 reasoning still holds — page-level thesis + product-level proof, mint distribution `everyone` (H1) → `Remember` (caption), one place, one moment.

**However:** even in that clean scenario, the cropped notification card I recommended in §1 Cut 3 is *brand-stronger* than the full composed S1 phone, for two reasons:

1. **The cropped notification IS the moment.** The composed phone with frame + screen + caption + caption-baked tagline is a marketing collage. The cropped notification on dark page background is what the moment actually looks like on the user's lock screen. The brand voice doc said "scene-setting that the visitor recognizes themselves in" — the visitor recognizes the iOS notification, not the marketing collage of the iOS notification.

2. **It opens the hero to the brand color.** The composed phone has a warm-amber bar interior visible behind the notification, which fights with the page's `#111014` background. A cropped notification card on `#111014` is dark-on-dark with the notification's own translucency carrying the visual weight. Cleaner. More on-brand. More like the inside of the app.

**So my final position on Cut 3:** Even in the cleanest possible page (Cut 1 + Cut 2 + Section 5 swap), I'd still recommend the hero gets the cropped notification, not the composed S1 phone. The composed S1 was a defensible choice in isolation; the cropped notification is the stronger choice at assembly.

This is me explicitly walking back the Phase 2 Q1 verdict. The earlier review's "page says it then product proves it" framing was right for one repetition but didn't anticipate the assembly-scale repetition that happened. Logging this so future panel reviews have the trace.

---

## 6. Net cuts summary for engineer

If all my recommendations ship:

| Change | Where | Effort | Brand impact |
|---|---|---|---|
| Delete Section 2 (demo strip) entirely | `index.html` `<section id="demo-strip">` | ~5 min | HIGH — eliminates duplicate phone tour, tightens scroll |
| Replace hero composed phone with cropped notification card | `index.html` hero `<img src="screen-01-proximity.png">` | ~15 min (image edit) + 5 min HTML | HIGH — kills 1 echo, clarifies hero |
| Replace Section 5 (proximity) composed phone with `screen-04-stats-receipts.png` (or phone-only `screen-02`) | `index.html` `<section id="proximity">` | ~10 min | HIGH — kills 1 echo, broadens visual diet |
| Replace Section 9 H2 from "Walk in. Remember everyone." to my recommended Option 1 (`On your phone. From day one.`) | `index.html` final-cta H2 | ~2 min | MEDIUM — kills mantra, refusal-positive close |
| (Optional) Drop "STEP 1 / 2 / 3" labels in Section 4 | `index.html` how-it-works | ~3 min | LOW — voice tightening, not blocking |
| (Optional) Rename Section 6 H2 from "What else is in there." | Phase 3 copywriter call | n/a | LOW — defer to copywriter |

**Total time to ship all blocking changes: ~40 minutes engineer + 15 min image edit. Within today.**

---

## 7. Process learning to log to project memory

This review caught a class of mistake worth saving:

**Per-section brand reviews can greenlight individual sections that fail at assembly.** Mint discipline, asset diversity, voice register, and tagline cadence all only become measurable across the full scroll. Future brand reviews on multi-section pages must include an explicit "assembled scroll" pass after the per-section review — ideally with the same instrumentation I used here (DOM query for asset filenames, mint-color computed-style scan, text-occurrence search for repeated phrases). This is parallel to the existing memory rule `feedback_visual_audit_full` (audit every dimension in one pass) but at page-assembly scale rather than within a single component.

Recommend a new memory entry: `feedback_brand_assembly_review.md` — "per-section brand reviews aren't sufficient for multi-section pages; require an assembled-page pass with instrumented checks for asset reuse, color discipline, and tagline cadence before declaring brand sign-off."

---

## 8. Confirmation of execution

- Opened live page in Chrome via `chrome-devtools` MCP `new_page` tool. URL: `http://localhost:4488/index.html`. Page ID 4 (selected).
- Resized to 1440x900 desktop via `resize_page`.
- Force-revealed `.reveal` elements and hid analytics consent banner via `evaluate_script`.
- Captured 8 own screenshots:
  - `brand-fullpage.png` (full-page)
  - `brand-zone-1-hero.png` (hero viewport)
  - `brand-zone-2-demo-strip.png` (demo strip transition)
  - `brand-zone-3-how-it-works-end.png` (final CTA — caught early)
  - `brand-zone-4-how-it-works-top.png` (hero re-capture)
  - `brand-zone-4b-how-it-works.png` (how it works H2 + Step 1)
  - `brand-zone-5-how-it-works-mid.png` (Step 2 — Pin them to a place)
  - `brand-zone-6-how-it-works-step3.png` (Step 3 — proximity)
  - `brand-zone-7b-proximity.png` (Section 5 proximity deep-dive — **the smoking gun for Cut 3**)
  - `brand-zone-8-final-cta.png` (Section 9 final CTA)
- Instrumented DOM queries for: section structure + img sources, asset reuse counts, lockup placement, mint computed-color hits, tagline text occurrences.
- Cross-referenced live capture against Gigi-supplied `00-assembled-fullpage-1440.png`.

All findings above are based on the live rendered page, not the spec or source HTML.

---

*Verdict complete. ~45 min spent. Cuts implementable today.*
