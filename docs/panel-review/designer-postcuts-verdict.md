# methere.app v2 — Post-Cuts Designer Verdict

**Reviewer:** ios-product-designer
**Date:** 2026-04-27 · T-7 to launch
**Source of truth:** live page at `http://localhost:4488/index.html`
**Breakpoints reviewed:** 1440 (desktop), 768 (tablet), 500 (effective mobile — Chrome devtools min-width clamp)
**Reveal motion tested:** both forced (for full-page audit) and organic (cold reload, scroll-to-top trigger)
**Files of evidence:** `panel-review/designer-postcuts-{desktop,tablet,mobile}.png` + 12 viewport zone captures (`zone-*.png`)

---

## Verdict: **SHIP-WITH-NOTES**

The desktop assembly is the strongest version of this page so far. Cuts landed cleanly. Mint discipline is intact. The work is launch-ready at 1024+. **Three items below 1024 need fixing before deploy** — the sub-1024 phone-size defect is the single biggest issue.

---

## 1. Per-Section Audit

### Header (C1)
- **VERIFIED LANDED.** Solid `rgba(17,16,20,0.95)` background per cut #3, hairline border, 28px lockup, nav links `13px / 600 / secondary` with white active state, no background pills. No drift.

### Hero (Section 1)
- **VERIFIED LANDED at desktop.** H1 88px / 800 / -1.5px tracking / line-height 0.95 — exact spec. Mint on `everyone`. Two-col grid 1.1fr/0.9fr.
- **Drift (acceptable):** H1 wraps to 3 lines at 1440 instead of the spec's 2-line `<br>` (Walk in. / Remember / everyone.). The natural wrap is actually a stronger neon-sign rhythm — the mint word lands on its own axis. **Ship as-is.**
- **Phone crop:** Mode B clip via `object-fit: cover; object-position: 50% 100%; aspect-ratio: 1242/2108` — works. Caption strip cleanly hidden. Notification chip renders inside the bezel. iPhone bezel preserved on all 4 corners. No drop shadow (correct).
- CTA cluster: 200px badge + inline mint "See how it works ↓" + trust microline. Spec-compliant.

### The Moment (Section 3)
- **VERIFIED LANDED.** H2 in 2 lines, 3 cards in a row at desktop, italics correctly stripped (the v1 italic violation is gone), psych-locked card text intact.
- **Drift at tablet 768:** cards stack to 1 column at 768 instead of staying 3-up per spec. Acceptable — 3-up at 240px each would be cramped for the 22-32 word body. The implementation is more readable than the spec would have been.

### How it works (Section 4)
- **VERIFIED LANDED at desktop.** Alternating layout (text-left / phone-right / text-right / phone-left / text-left / phone-right) reads cleanly. Body copy hits the slot, ties back to "spine" voice, no banned words. Phone screenshots authentic and rich.
- **DRIFT (visual + spec):** "STEP 1 / STEP 2 / STEP 3" eyebrows render in `--text-tertiary` grey, not `--mint`. Spec was explicit (`color: var(--mint)`). Class name diverged from `.how-step` to `.howit-step-number` and the mint color was lost in the rename. Costs us 3 planned mint hits and weakens the step-indicator rhythm. **Fix: change `.howit-step-number` color to `var(--mint)`.**
- **VISUAL DEFECT at <1024 (SHIP-BLOCKING):** `.phone-shot--howit` has no max-width constraint. At tablet 768, each phone renders at **736×1591**. At mobile 500, each phone renders at **500×1083**. The phone bezel container becomes the size of the entire viewport, the in-app screen content (e.g. People list section header "The ones who keep showing up.") renders at ~70px font size, and the phone stops reading like a phone — it reads like a giant display panel. **Fix: cap `.phone-shot--howit { max-width: 360px; margin-inline: auto; }` at <1024.** The proximity deep-dive phone (which already constrains to 280px) shows the correct pattern.
- **CTA #2 placement:** App Store badge present, no trust microline (per cut #9). Conversion-as-chrome rule honored.

### Proximity deep dive (Section 5)
- **VERIFIED LANDED at desktop.** Layout Option A (phone center, prose flanking) executed. Cropped proximity phone at 280×475 — correct, proportional to the centerpiece treatment.
- **Drift (polish):** H2 "You're near The Hoxton. You know three people here." wraps awkwardly at 1440 with "here." orphaned on line 2. Lead has the same orphan. **Fix:** add `text-wrap: balance` to `.section-h2` and `.section-lead`, or insert `<br>` after "Hoxton." (recommend `text-wrap: balance` — single rule covers all sections).
- **Composition note (polish):** the 3 supporting paragraphs land 2-on-left + 1-on-right around the phone. Asymmetric. Reads fine but right column feels light. Optional rebalance: 1L + 2R, or center the third paragraph below the phone. Not blocking.
- Mint discipline: only `near` is mint, sub-bullets stay white. ✓

### What else (Section 6)
- **VERIFIED LANDED.** Engineer chose 4-up row at desktop (vs spec's 2x2 default — 4-up is cleaner at 1440 and is explicitly allowed by the spec). All four bodies hit the 14-22 word slot, factually accurate, no fake features. No mint per discipline. ✓

### Privacy + anti-positioning (Section 7)
- **VERIFIED LANDED.** H2 with mint on `Nowhere`. 4 refuse cards in 2x2. Card 1 H3 correctly changed to `No sign-in.` per cut #8. Card 1 body correctly updated to "No email. No password. Open the app and start." (avoids duplicating the H3 word). × glyphs at 0.4 opacity per cut #4 — visibly more subtle, no longer competing with H3. Strong upgrade. Privacy details → link present in mint.

### Plans (Section 8)
- **VERIFIED LANDED.** 4 tiles in equal-width row at desktop. Annual highlighted with mint border + "SAVE 69%" label. Monthly only carries the `14-DAY FREE TRIAL` pill per cut #5 — verified, no duplicate on Annual. Period text (`/mo`, `/yr`, `once`) at 16px per cut #6 — legible. CTA #3 + microline cut + "Purchases through Apple. Restore in-app any time." all spec-compliant.
- **Drift at tablet 768:** Plans stack to 1 column instead of 2x2 per spec. Engineer's breakpoint sits between 768 and 820 (verified — at 820 it's 2-col). At iPad portrait this loses the receipt density. **Fix (polish):** push the 1-col breakpoint down to `(max-width: 600px)` per spec.

### Final CTA (Section 9)
- **VERIFIED LANDED.** H2 "Open it. **Start** where you are." — cut #7 implemented, mint on `Start`, signature reprise still hits even with the new word. Lead "The bar. The gym. The coffee shop. The face you keep almost placing. Now you can." — period-staccato pacing, evocative, ties to copy DNA. App Store badge 220px (closer variant — biggest on page). Trust microline kept here per cut #9. Support link present.

### Footer (C2)
- **VERIFIED LANDED.** Vertical lockup signature 120px tall, centered. Link row with `·` separators. Credit "Made solo by Julian Collins." Sticky-mobile-cta correctly killed. The signature lockup moment of the page lands here as designed.

---

## 2. Phone-Only Crop Quality (Cut #2)

**Verdict: INTENTIONAL, not workaround.** The Mode B crop via `object-fit: cover; object-position: 50% 100%; aspect-ratio: 1242/2108` reads as deliberate framing across all three placements (Hero, How it works step 3, Proximity deep dive).

- **Hero phone (1440):** 558×948, bezel preserved on all four corners, notification chip centered inside, bar interior bleeds to bottom edge. Sharp at 2x density. Aspect ratio holds across breakpoints. **High quality.**
- **How it works step 3 phone (1440):** 534×908 with same crop pattern. Reads consistent with hero. **High quality.**
- **Proximity deep dive phone (1440):** 278×473 — smaller variant of the same crop pattern (proximity-cropped class). Notification chip still readable at this size. Centerpiece composition lands. **High quality.**

The crop hides the spec's intended hero caption strip ("Walk in. Remember everyone." baked into the source PNG) cleanly — the H1 in the content column does the work alone, no echo redundancy. The frame-within-a-frame echo from the original spec was nice in theory; the cropped version is honestly cleaner. Brand-strategist's earlier nudge toward Mode B was right.

**No corner clipping. No alignment drift. Bezel feels intact. Image sharpness preserved. Ship.**

---

## 3. Type Scale at Each Breakpoint

- **1440:** H1 = 88px / lh 83.6px / track -1.5px (clamp ceiling). H2 = 48px (clamp ceiling). All hit spec values exactly.
- **768:** H1 = 61.44px (clamp interpolation at 8vw). Reads strong, "Walk in." + "Remember everyone." in 2 lines per spec.
- **500 (effective mobile):** H1 = 48px (clamp floor). 3 lines: "Walk in. / Remember / everyone." — readable, mint word lands on own line. No tightness.
- **Body legibility on dark:** `--text-body: #E8E4DF` against `--bg-page: #111014` — strong contrast, easy read. Subhead at `--text-secondary: #8A858F` is on the edge for body but acceptable for lead/secondary.

**Wrap problem at 1440 (Section 5 H2):** "You're near The Hoxton. You know three people here." wraps with "here." dangling on line 2. Same issue on Section 5 lead. **Fix: `text-wrap: balance` on `.section-h2, .section-lead` — single CSS rule, covers it.**

---

## 4. Mint Discipline at Assembly

**Headline mint count: 4 of 8 sections** — exactly per spec ratio (spec said 4 of 10, but with Section 2 cut, the ratio is now 4 of 8 = 50%, slightly more concentrated. Acceptable — the page is shorter).

| Section | Mint word | Status |
|---|---|---|
| 1 Hero | `everyone` | ✓ |
| 3 Moment | (none) | ✓ correct |
| 4 How it works | (none in H2) | ✓ correct, **but lost 3 STEP eyebrow mints — drift** |
| 5 Proximity | `near` | ✓ |
| 6 What else | (none) | ✓ correct |
| 7 Privacy | `Nowhere` | ✓ |
| 8 Plans | (none) | ✓ correct |
| 9 Final CTA | `Start` | ✓ (swapped from `Remember` per cut #7 — still works as signature reprise) |

**Functional mint hits (correct):** brand wordmark (header + footer), 2 text links (See how it works, Privacy details), Monthly trial pill, Annual SAVE 69% + mint border highlight, 4× refuse-marks at 0.4 opacity, support link.

**Mint exhaustion risk: NONE.** The page reads as a neon sign, not a mint flood. Distribution holds.

**Single drift to fix:** `STEP 1/2/3` eyebrows in How it works should be mint per spec, currently grey. Restore = +3 mint hits as planned indicators.

---

## 5. Spacing Rhythm

- **Desktop 1440:** all 8 sections at 96px y-padding, 24px x-padding, 0 margin between. Continuous dark canvas. **Perfect.**
- **Tablet 768:** all sections at 48px y-padding. **DRIFT** — spec said 64px at tablet. 96 → 48 across one breakpoint is too aggressive a compression. Should be 96 → 64 → 48 gradient.
- **Mobile 500:** all sections at 48px y-padding. ✓ correct.

**Polish-tier fix:** add `@media (max-width: 1023px) and (min-width: 768px) { .section { padding-y: 64px; } }` — restores the spec gradient.

No section feels cramped at desktop. Tablet feels slightly tight (would breathe more at 64px).

---

## 6. Interaction States

- **Focus rings:** 2px solid `--mint` outline at 3-4px offset on every interactive element tested (App Store badge, nav links, See how it works link, Privacy details link, Support link). **Perfect spec compliance.** Studio accessibility quality bar met.
- **Hover on App Store badge:** `transform: translateY(-1px)` per spec — verified via CSS read.
- **Reveal-on-scroll (cold load, organic):** confirmed working. After page reload + scroll-to-top, 7 reveals fire (hero-content, hero-eyebrow, hero-h1, hero-subhead, hero-device, plus 2 how-it-works rows in viewport). Hero phone goes from `opacity: 0` to `opacity: 1` correctly. IntersectionObserver healthy.
- **Console:** clean. No JS errors, no warnings.
- **Reveal staggers:** spec said `data-stagger-step="60"` cap at 4 children — implementation appears to honor this (didn't measure exact timing, but motion budget feels under 1s on reload).
- **Mobile horizontal scroll-snap:** N/A (Section 2 cut removed the only scroll-snap surface).

---

## 7. Drift-from-Spec Audit (Beyond the 10 Panel Cuts)

| # | Spec | Implemented | Severity |
|---|---|---|---|
| 1 | `.how-step` eyebrow color = `var(--mint)` | `.howit-step-number` color = `var(--text-tertiary)` grey | **Polish-blocking** — costs planned mint discipline |
| 2 | `.phone-shot--howit` — implicit max-width per spec layout | No max-width at <1024; phones balloon to viewport width (736px at tablet, 500px at mobile) | **SHIP-BLOCKING at <1024** — phone reads as giant display panel |
| 3 | Section padding-y at tablet (768–1024) = 64px | 48px (mobile value applied at tablet) | Polish |
| 4 | Plans grid 2x2 at tablet (768–1023) | 1-col at 768; 2-col only above ~770px | Polish |
| 5 | Moment cards 3-up at tablet (768–1023) | 1-col at 768 | Acceptable (3-up at 240px would be cramped) |
| 6 | H1 `<br>` after "Walk in." → 2 lines | Natural wrap → 3 lines at 1440 | Acceptable (3-line creates better neon-sign rhythm) |
| 7 | Section 5 H2 + lead — no orphan | Both wrap with terminal word + period orphaned on new line | Polish — fix with `text-wrap: balance` |

---

## 8. Final Verdict

**SHIP-WITH-NOTES.**

### Must-fix before deploy (SHIP-BLOCKING)
1. **Cap `.phone-shot--howit` to ~360px max-width at <1024.** Single biggest visual issue across all breakpoints. Without this fix, the page is broken at tablet and mobile.

### Strongly recommended polish (do these too — small effort, big lift)
2. Restore mint on STEP 1/2/3 eyebrows (`.howit-step-number { color: var(--mint); }`).
3. Add `text-wrap: balance` to `.section-h2, .section-lead` — fixes Section 5 H2/lead orphan and improves wrap quality across the page.

### Nice-to-have polish (defer if T-7 is tight)
4. Restore tablet section padding-y to 64px (`@media (768–1023) { .section { padding-y: 64px; } }`).
5. Push Plans 1-col breakpoint down to `(max-width: 600px)` so iPad portrait gets 2x2.
6. Consider rebalancing Section 5's 2L+1R supporting paragraphs to 1L+2R or center the third below the phone.

### Confidence
- **High** on items 1 and 2 (clear spec violations, clear fixes).
- **High** on item 3 (CSS one-liner, broad benefit).
- **Moderate** on items 4-5 (subjective polish, T-7 tradeoff).
- **Low** on item 6 (subjective composition call, ship-as-is also fine).

The desktop page is launch-ready. The cuts hold. Mint discipline holds. Brand DNA holds. Once the phone-shot constraint lands, the page is ready to deploy at all viewports.

---

**Verification confirmation per studio rule:**
- Live page opened at all three breakpoints (1440, 768, 500-effective-mobile)
- Reveal motion tested both forced (`is-visible` injected for full-page audit) AND organic (cold reload + scroll-to-top — confirmed IntersectionObserver fires correctly)
- 14 viewport zone screenshots captured for evidence
- Console clean (no JS errors)
- DOM-level spec compliance audited (focus rings, mint inventory, type scale, spacing tokens, breakpoint behavior)
- Cuts compliance audited against the 10-item panel list — all 10 implemented as described
