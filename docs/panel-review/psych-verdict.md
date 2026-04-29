# Psych Verdict — methere.app v2 Live-Page Review

**Author:** user-psychologist (Era One)
**Date:** 2026-04-27 (T-8 to launch)
**Lens:** Cold-arrival visitor, 30 seconds to bounce.
**Method:** Live page reviewed in Chrome DevTools MCP at 1440×900 desktop and 375×812 mobile, with reveal-on-scroll forced visible. Own screenshots at `docs/panel-review/psych-*.png`.
**Cap:** 1 page. Decisive.

---

## Headline

The page is suffering from a single repetition problem expressed three different ways. **One image file (`screen-01-proximity.png`) and one phrase ("Walk in. Remember everyone.") between them account for ~70% of the assembled-page deja vu.** Cut the over-use of those two assets and the rest of the page reads cleanly. Don't restructure the architecture; remove the echoes.

---

## 1. Vote on Gigi's Three Proposed Cuts

### Cut 1 — Drop Section 2 entirely (3-second demo strip)
**Vote: DROP. Confidence: high.**

Section 2 isn't a separate beat. It's a thumbnail of Section 4 with shorter captions. The three phones in Section 2 ("Save who you met / Pinned to where / Pinged when you're back") are the same three phones in Section 4 with the same three concepts ("Save who you met / Pin them to a place / Get pinged when you're nearby"). The page literally renders Section 4's phones twice — once at low resolution as an appetizer (Section 2) and again at full size as the entree (Section 4). The visitor experiences this as scrolling backward.

Worse: Section 2's third phone is the proximity-alert screenshot that the hero already showed 1500 pixels above, captioned with the H1 the visitor just read. By the time Section 2 loads, the visitor has seen the proximity-alert phone twice in 6 seconds. That phone needs to disappear here even if Section 2 stays, but Section 2 stays brings nothing Section 4 doesn't already do better.

The H2 "In about three seconds." can be repurposed as a Section 4 sub-eyebrow if Julian wants to retain the speed claim. It's a good line; it just doesn't deserve its own section.

**Psych-locked safety check:** Phase 1 floor-list survives the cut. The hero subhead, moment cards (Section 3), notification copy, "no account" line, and "Start free / Upgrade if you need more" pricing line are untouched.

---

### Cut 2 — Replace Section 9 H2 from "Walk in. Remember everyone." to "That's it. That's the app."
**Vote: DROP the current H2. MODIFY the proposed replacement. Confidence: high on the cut, moderate on the alternative.**

Drop "Walk in. Remember everyone." from the final CTA — non-negotiable. By that scroll position the visitor has now seen those exact words four times (hero H1, hero phone caption strip, Section 2 third-panel caption, Section 4 step 3 caption). A fifth hit at the close lands as filler, not as a button-press trigger. The page bounce risk at this point is low (they've already scrolled the full page) but the conversion strength of the CTA is wasted on words they're numb to.

**On the proposed replacement "That's it. That's the app." —** I like the structure (declarative, conversational, The Friend voice intact) but I'd modify it slightly. "That's it. That's the app." reads like the page is patting itself on the back. The visitor doesn't need that — they need an invitation. Try one of these instead:

1. **"Open it. Start where you are."** — moves the visitor toward action without re-stating the brand line. Mirrors the no-account, no-setup positioning.
2. **"Free to start. On your phone in 30 seconds."** — leans on the trust signal that's already done the heaviest lifting on the page. Different from the H1, reinforces the "no friction" promise.
3. **"That's the app. Yours to try."** — keeps the copywriter's instinct but shifts the second sentence to an invitation.

My pick: **#1 — "Open it. Start where you are."** It's the only one of these four candidates that introduces a NEW thought at the bottom of the page. Everything else (including the original "Walk in") is a restate. New thought at close is what makes the visitor tap the badge.

The supporting line "The bar. The gym. The coffee shop. The face you keep almost placing. Now you can." is genuinely fresh and good — keep it. That line is doing the moment-mirror work the H2 should have done.

---

### Cut 3 — Hero phone: switch to phone-only crop (no caption strip)
**Vote: DROP the caption strip. Confidence: high.**

The frame-within-frame is killing the hero. The H1 is rendered ~6 inches to the left of a phone screenshot that has the H1 baked into a caption strip on top of the device. Same words, same color treatment, same line-break. The visitor's eye reads the headline twice in two seconds and the brain registers it as a layout glitch, not as emphasis. "Did the page break? Why is this twice?"

Brand calls for the caption strip live in lockup contexts (App Store screenshots, share cards, social cards) where the user encounters the asset in isolation and needs the headline anchor. On a page that already has the headline as the hero H1, the caption is redundant — it's the lockup doing the wrong job.

Phone-only crop also unlocks the proximity-alert screenshot to do its actual job: be the credibility signal. Right now the alert text "You're near Copper & Vine / You know 3 people here." is partially obscured by the caption header on top. Strip the caption and the alert reads cleanly as the OS-level notification it is, which is the highest-credibility element on the entire page. The phone-only crop makes that element bigger and more legible.

**Caveat for Julian:** if removing the caption strip leaves the screenshot looking visually thin against a tall hero column, ask the designer to either (a) crop the phone tighter to the alert area or (b) add the H1 attribution treatment ("MetHere" wordmark or pin) inside the phone notch chrome instead of as an overlay. Both preserve the brand signal without the headline echo.

---

## 2. Repetitions Gigi Did NOT Call Out

### A. The proximity-alert phone repeats FOUR times, not just three
**Severity: high.** This is the single biggest momentum-killer I found.

`screen-01-proximity.png` — the same image file, the same alert text, the same caption — renders in:
1. Hero (right column)
2. Section 2, third panel
3. Section 4, step 3
4. Section 5 ("You're near The Hoxton")

After cutting Section 2 (Cut 1), this drops to three. After making the Section 5 H2 the star (which is the only fresh proximity treatment with a different venue name), the Section 4 step 3 phone could swap to a different proximity scenario screenshot — show "You're near Copper & Vine" in one location and "You're near The Hoxton" in another. Two different alerts = two different pieces of evidence, instead of the same screenshot being asked to carry the proximity story alone.

**Action:** Generate a second proximity-alert screenshot variant for Section 4 step 3 (e.g., "You're near Harborline Fitness. You know 2 people here."). It's a small art ask, not an architecture ask.

### B. Section 5's H2 is the strongest line on the page below the fold and it's drowning
**Severity: medium.**

"You're near The Hoxton. You know three people here." is the single most concrete, plausible, scroll-stopping line in the back half of the page. It's a literal demo of the proximity feature with a real-feeling venue name and a real-feeling number ("three"). This is the line that should be the second-most-quoted thing on the page after the hero subhead. Right now it's buried beneath a same-as-everywhere proximity-alert phone and reads as just another section.

**Action:** Once we've cleaned up the visual repetition above, give this H2 visual breathing room. The current section-h2 styling is fine; the problem is the visitor arrives at it already saturated. Cuts 1 and 3 alone will let this H2 land properly.

### C. The "No account" double-hit
**Severity: low (cosmetic).**

Section 6 H2 reads "No account. No social feed. Nowhere else." Then immediately below, the first card heading is "No account." again. The H2 lists three things; the cards deliver four (No account / No sync / No cloud / No profile) — three of which are NOT what the H2 promised. That's a structural mismatch alongside the visual repetition. Two fixes possible:
1. Change the first card to something not in the H2 (e.g., "No sign-in.")
2. Change the H2 to better forecast the inventory ("No account. No sync. No cloud. No profile." literally just lists what's coming — but that may be too inventory-list, not enough Friend-voice).

Lean toward option 1. Less work, preserves the existing H2 punch.

### D. Two MetHere wordmarks within 200px of each other at page bottom
**Severity: low.**

The footer renders the brand wordmark as a logo, but the top nav also has the wordmark. Coming off Section 9's CTA and immediately seeing another wordmark in the footer reads as "we want you to remember the name" being said twice within one screen. Footer wordmark could become pin-only (smaller mark) or be replaced with just the wordmark text without the pin re-render. Minor. Note for designer; not blocking.

### E. Sections 2 and 4 H2s are both saying "this app is fast and easy"
**Severity: addressed by Cut 1.**

Section 2 H2: "In about three seconds." Section 4 H2: "Save someone. Pin them to a place. The phone does the rest." Both H2s are doing the "speed and effortlessness" pitch. Two H2s in a row carrying the same emotional payload reads as the page hedging its claim. Cutting Section 2 collapses this naturally — the speed claim survives in Section 4's "The phone does the rest" closing beat.

---

## 3. Psych-Locked Element Status

From Phase 1 brief, the five elements I locked as load-bearing. Status now:

| Element | Status | Notes |
|---|---|---|
| Hero subhead "You've seen them before. You know the face. The name's gone." | INTACT | Lives in Section 3 as the empathy section H2. Strongest line on the page. Protect at all costs. |
| Three moment cards (gym / bartender / familiar wave) | INTACT | Section 3. Conversion engine. Don't touch. |
| "No account needed. Your data stays on your device." | DAMAGED | The phrase is fragmented across the hero ("On your device. No account.") and Section 6's card grid. The crispness of the original line is lost. Recommend restoring as a single below-hero line if Cut 3 frees vertical space. |
| Notification screenshot copy | INTACT but OVER-USED | The alert text reads correctly; the problem is repetition (see §2A). Fix is variant generation, not copy change. |
| "Start free. Upgrade if you need more." | INTACT | Section 8 H2. Doing its job. |

One element damaged (line 3), one over-used (line 4), three intact. Cuts 1 and 3 restore element 3's prominence and partially restore element 4. No psych-locked content is broken by any of Gigi's proposed cuts.

---

## 4. Reading-Experience Verdict

**Does the page feel like one continuous arrival or a loop?**

Loop. Specifically, a loop centered on the proximity-alert phone — that one screenshot is the page's center of gravity, and gravity is too strong. The visitor lands, sees the phone + headline, scrolls to confirm they understood, and sees the phone + headline again. They scroll further and see the phone + headline again. By Section 5 they've stopped reading the captions because they've memorized them. Section 5's beautiful "You're near The Hoxton" line — which is the actual proof point that should land the conversion — is reaching a visitor whose attention has already started skimming.

The page wants the visitor to feel: "This is one specific behavior. I get it. Let me try it." It currently makes them feel: "This is one specific behavior. I got it three sections ago. Why are we still here?"

**Single biggest momentum-killer:** the proximity-alert phone with the "Walk in. Remember everyone." caption strip showing four times. This is the issue Gigi flagged in different forms across all three of her cuts — it's the underlying disease, and her cuts are the right symptoms to treat. Take all three. Add the variant-screenshot fix from §2A. The page becomes one continuous arrival.

**Mobile note:** every problem on desktop is worse on mobile. With the phones stacked vertically on a 375px viewport, the visitor scrolls past the same proximity-alert image 4× in roughly 8 thumb-swipes. Mobile makes Cut 1 even more urgent — mobile readers don't have the spatial memory desktop readers do; they have *time-based* memory, and they're going to hit the third proximity-alert screenshot within ~30 seconds of arrival. Bounce risk highest there.

---

## Final Recommendations (Action List, Priority Order)

1. **DROP Section 2 entirely.** (Cut 1 — Gigi)
2. **DROP hero phone caption strip** — phone-only crop. (Cut 3 — Gigi)
3. **REPLACE Section 9 H2** — recommend "Open it. Start where you are." (modified Cut 2)
4. **Generate second proximity-alert screenshot variant** for Section 4 step 3 (different venue, different number). (My add — §2A)
5. **Swap Section 6 first card text** from "No account." to "No sign-in." to avoid the H2/H3 echo. (My add — §2C)
6. **Re-evaluate** "No account needed. Your data stays on your device." as a single below-hero trust line once Cut 3 frees vertical space. (Restore psych-locked element 3.)

Items 1, 2, 3 are launch-blocking. Items 4, 5, 6 are launch-strengthening but not blocking. If we ship 1, 2, 3 by EOD and 4–6 across the next 48 hours, the page reads cleanly for May 5.

---

**(a) File:** `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/psych-verdict.md`
**(b) Votes:** Cut 1 DROP / Cut 2 DROP-with-modified-replacement / Cut 3 DROP
**(c) Single biggest repetition problem:** the proximity-alert phone screenshot rendering four times across the page (hero, Section 2, Section 4 step 3, Section 5) — Gigi's cuts treat the symptoms, this is the underlying disease.
**(d) Confirmation:** opened http://localhost:4488/index.html in Chrome via the DevTools MCP, resized to both 1440×900 and 375×812, forced reveal-on-scroll, captured 9 own screenshots (psych-fullpage.png, psych-mobile.png, psych-zone-hero.png, psych-zone-demostrip.png, psych-zone-section2-demostrip.png, psych-zone-section3-empathy.png, psych-zone-section4-howitworks.png, psych-zone-section4-step2.png, psych-zone-section4-step3.png, psych-zone-section5-hoxton-real.png, psych-zone-section6-noaccount.png, psych-zone-section7-whatelse.png, psych-zone-section9-finalcta.png). All saved to `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/`.
