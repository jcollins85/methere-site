# Psych Verdict — Post-Cuts Verification (methere.app v2)

**Author:** user-psychologist (Era One)
**Date:** 2026-04-27 (T-7 to launch)
**Method:** Live page in Chrome DevTools MCP at 1440×900 desktop and 375×812 mobile, reveal-on-scroll forced visible, consent banner hidden. Screenshots at `docs/panel-review/psych-postcuts-{desktop,mobile}.png`.
**Cap:** 1 page.

---

## 1. Recommendation Status (each one, specific)

| # | Recommendation | Status | Evidence (live DOM) |
|---|---|---|---|
| 1 | DROP Section 2 (3-second demo strip) | **VERIFIED LANDED** | Section count = 8 (was 9). IDs in order: `hero, the-moment, how-it-works, proximity, what-else, privacy, plans, final-cta`. The demo-strip `id` no longer exists. |
| 2 | Section 9 H2 → "Open it. Start where you are." | **VERIFIED LANDED** | `#final-cta h2.innerText === "Open it. Start where you are."` Mint accent on `Start` confirmed in screenshot. |
| 3 | Hero phone caption-strip drop (also S4 step 3 + S5) | **VERIFIED LANDED** | All 3 phones use `.phone-shot--proximity-cropped` with `overflow:hidden`, `object-fit:cover`, `object-position: 50% 100%`. Container aspect 0.589 > image aspect 0.462 — math forces a top-anchored crop with the bottom (alert) preserved. The "Walk in / Remember everyone" caption strip at the top of the PNG is genuinely clipped, not just visually obscured. |
| 4 | Section 7 card 1 → "No sign-in." (+ body rewrite) | **VERIFIED LANDED** | First privacy card H3 = "No sign-in.", body = "No email. No password. Open the app and start." H2/H3 echo eliminated. |
| 5 | Trust microline 4× → 2× | **VERIFIED LANDED** | "On your device. No account." appears twice in body text — once in hero, once in `#final-cta` ("On your device. No account."). Removed from S4 close (`#how-it-works` tail ends on "That's the whole thing.") and S8 close (`#plans` tail ends on price block, no microline). |
| 6 | S5 lead rewrite (kill "next time you walk past" duplication) | **VERIFIED LANDED** | `#proximity` lead = "That's the alert. You set it once and your phone takes it from there." No collision with hero subhead. |
| 7 | S6 card 3 body rewrite (kill "Whatever helps you remember") | **VERIFIED LANDED** | `#what-else` voice/photo card = "Talk to it. Snap a face. Beats typing it later when the moment's already past." No collision with S4. |

**7 / 7 landed. Zero damage. Zero failed-to-land.**

---

## 2. New Issues Introduced By the Cuts

**One small thing, one observation, no blockers.**

**a. "Walk in. Remember everyone." now appears exactly once on the page (hero H1 only).**
This is the right call psychologically — but be aware that the hero H1 is now carrying the brand line entirely alone. If a visitor's eye skips it (mobile fold, fast scroll), they exit the page never having seen the tagline. Mitigation: it's still in the page `<title>`, the OG meta, and the App Store badge metadata. Not a blocker. Just naming the trade.

**b. The trust microline distribution (hero + final-cta only) is psychologically optimal.**
First impression = trust. Final invitation = trust restated as permission. The two repetitions in S4/S8 we removed were doing nothing but echoing. The new placement is the textbook "primacy + recency" arrangement for trust signals.

**c. No orphaned beats. No pacing dead-zones.** Section 1 → Section 3 (after dropping S2) does NOT feel jumpy. The hero closes with "See how it works ↓" and "the-moment" opens with "You've seen them before." The empathy section is the natural emotional next step after the brand promise — it always was. Section 2 was the speed-bump in between, not the bridge.

**d. New thought at the close lands.** "Open it. Start where you are." is genuinely fresh against everything above it. The button-press impulse is now stronger than the "Walk in. Remember everyone." restatement was — confirmed by reading the page top-to-bottom in one pass and feeling the close as an invitation rather than a brand reminder.

---

## 3. Reading-Experience Verdict

**Continuous arrival.** The page now reads as one motion: brand promise → empathy → mechanism → the unique feature → catalogue → trust → pricing → invitation. Every beat is doing different work. The proximity-alert phone still appears 3× (hero, S4 step 3, S5) but with the caption strip cropped, the eye reads it as "the alert" three different times in three different contexts rather than "the same screenshot" three times. Caption removal was the highest-leverage cut of the seven.

The remaining repetition (the proximity screenshot) now functions as a **motif** instead of a **loop** — visitors will recognize the alert UI as "that's what the feature looks like" rather than "wait, didn't I just see this?" That is a significant psychological shift from one-hour-ago me.

---

## 4. Mobile (375px) — Vertical Rhythm Check

**Page total height: 8,382px.** Section heights at 375 wide:
- hero 1142px
- the-moment 542px
- how-it-works 2741px (correctly the heaviest — it's the demo)
- proximity 931px
- what-else 548px
- privacy 752px
- plans 801px
- final-cta 552px

Drops 1, 2, 3 all read cleanly stacked. The `the-moment` section at 542px is short enough to feel like a single beat the visitor digests in one screen-and-a-half, then `how-it-works` opens with its own Step 1 headline — no awkward gap where Section 2 used to sit. **Mobile actually reads better than desktop now**, because the vertical-stack of three identical proximity-alert phones (the original problem we feared) was the worst on mobile, and dropping the caption strip means even when those phones do stack within thumb-reach distance, the eye doesn't pattern-match "same image, same image, same image."

The drop of the demo strip on mobile saved roughly 600–700px of fold real estate by my eye. That's roughly two thumb-swipes the visitor doesn't have to spend before reaching the moment cards. On a launch where mobile traffic is going to dominate (App Store badge clicks, Twitter referrals), that is meaningful.

**No vertical-rhythm issue. Mobile holds.**

---

## 5. Remaining Repetition I'd Cut With One More Pass

One small thing only. **"On your phone." appears as a card heading in `#proximity` AND the trust microline below the hero says "On your device. No account."** Two near-synonyms ("phone" / "device") doing the same trust work within the same scroll session. Not blocking — but if I had a 60-second window, I'd change the proximity card from "On your phone." to **"CoreLocation does the work."** That moves the heading from a trust restate to a credibility claim (specific iOS API name = engineer wrote this), and the body copy that follows ("CoreLocation does the work. The geofence sits on your device.") already supports it perfectly. Small swap, modest upside.

Everything else reads cleanly. This is shippable as-is.

---

## Vote

**SHIP.**

All seven recommendations landed exactly as intended. Zero damage. Zero new psychological issues introduced. The page now reads as continuous arrival on both desktop and mobile. Mobile (the higher-stakes viewport) is where the cuts paid the largest dividend.

Confidence: **high**.

The "On your phone." → "CoreLocation does the work." swap is a polish item, not a blocker. If shipped today as-is, the page does its conversion job cleanly. Launch ready.

---

**(a) File:** `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/psych-postcuts-verdict.md`
**(b) Vote:** **SHIP**
**(c) New issues from cuts:** None of consequence. One naming-of-tradeoff item (brand line now appears only once on page), one minor optional polish (one remaining "phone/device" near-synonym I'd swap if there's time).
**(d) Confirmation:** YES. Opened `http://localhost:4488/index.html` LIVE in Chrome via `mcp__plugin_chrome-devtools-mcp_chrome-devtools__new_page`. Resized to both 1440×900 (desktop) and 375×812 (mobile). Forced reveal-on-scroll. Hid the analytics consent banner. Captured `psych-postcuts-desktop.png` and `psych-postcuts-mobile.png`. Verified each cut both visually (screenshots) AND programmatically via DOM evaluation (section count, H2 text, H3 text, image aspect-ratio crop math, section heights, and full-text body extraction of every section).
