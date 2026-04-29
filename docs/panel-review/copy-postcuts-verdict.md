# Post-Cuts Verdict — Copywriter

**Date:** 2026-04-27
**Reviewer:** Era One copywriter (post-cuts pass)
**Source of truth:** live page http://localhost:4488/index.html (chrome-devtools MCP, viewport 1440x900, reveals forced visible)
**Screenshots:**
- `copy-postcuts-fullpage.png` (full page)
- `copy-postcuts-hero.png` (hero region)
- `copy-postcuts-final.png` (Section 9 final CTA)

**Verdict: SHIP-WITH-NOTES**

One small new collision inside Section 3 worth a 30-second fix. Everything else from the pre-cuts audit is resolved. Voice held through Gigi's three quick rewrites.

---

## 1. Pre-cuts collisions — line-by-line

All strings below pulled from the LIVE DOM via `evaluate_script`, not from `copy-v2.md`.

### a. "The next time you walk past" duplication
**Pre-cuts state:** appeared in hero subhead AND in Section 5 lead — verbatim repeat across the assembled page.
**Post-cuts state:** appears exactly **1×** in the body, in the hero subhead only:
> "MetHere remembers the people you meet and the places you met them. The next time you walk past, it tells you who's there."

Section 5 lead now reads:
> "That's the alert. You set it once and your phone takes it from there."

**VERIFIED FIXED.**

### b. "Whatever helps you remember" duplication
**Pre-cuts state:** in Section 3 step 1 ("A nickname works. A description works. Whatever helps you remember.") AND in Section 6 card 3 body.
**Post-cuts state:** appears exactly **1×**, in Section 3 step 1 (the original/canonical use). Section 6 card 3 now reads:
> "Talk to it. Snap a face. Beats typing it later when the moment's already past."

**VERIFIED FIXED.**

### c. Trust microline overuse (4×)
**Pre-cuts state:** "On your device. No account." appeared in hero, Section 4 (`what-else`), Section 8 (privacy), and Section 9 (`final-cta`) — 4× in scroll, microline became wallpaper.
**Post-cuts state:** appears **2×** total (hero idx 0 + final-cta idx 7). Section 4 and Section 8 no longer carry it.

**VERIFIED FIXED.**

### d. Section 2 (3-second demo strip) cut
**Pre-cuts state:** demo strip duplicated the same "Walk in / Remember everyone" gesture as hero, immediately under hero — felt like a hiccup.
**Post-cuts state:** section count = **8** (was 9). DOM section IDs in order: `hero, the-moment, how-it-works, proximity, what-else, privacy, plans, final-cta`. No demo strip. Flow goes hero → "you've seen them before" → how it works.

**VERIFIED FIXED.**

### e. Hero phone caption strip (the one I misread)
**Pre-cuts state:** I voted KEEP on the wrong element. The composed `screen-01-proximity.png` carries a caption strip ON TOP of the device frame. Brand and psych voted DROP. Re-checking the live page now:
- Image src is `./screenshots/screen-01-proximity.png` at native 1242×2688
- Wrapped by `phone-shot--proximity-cropped` (overflow:hidden, 950px tall)
- `object-fit: cover` + `object-position: 50% 100%` — anchors the BOTTOM, pushing the top caption strip out of view
- Hero screenshot shows: lockscreen background + the proximity alert pill ("MetHere — You're near Copper & Vine. You know 3 people here."). NO caption strip on top.

The crop reads correctly. Phone tells the proximity story without a competing strip. Brand + psych were right; I misread the layer. **VERIFIED FIXED — no second copy of "Walk in. Remember everyone." appears in the hero region.**

### f. Section 7 card 1 — "No account." → "No sign-in."
**Old card 1:** H3 "No account." / Body "No email. No password. Open the app and start."
**New card 1 (live DOM):**
> H3: "No sign-in."
> Body: "No email. No password. Open the app and start."

The previous heading collided with the trust microline in hero/footer. New heading is sharper — "sign-in" is the verb a user actually associates with the friction (typing email + password into a new app), so the H3 maps directly to the body's "No email. No password." Stronger now than before. **GOOD.**

Note on "Open the app and start" — same phrase appears nowhere else in the page (search returned 1 occurrence). Originally on old card 1 body, kept as-is on new card 1 body. No collision risk.

---

## 2. Section 5 lead rewrite — voice check

**New lead (live DOM, Section 3 `proximity` — note: I'm referencing what the brief calls "Section 5" which now lives at section index 3 after the demo-strip cut):**
> "You're near The Hoxton. You know three people here.
> That's the alert. You set it once and your phone takes it from there."

**Voice landing:** holds. "That's the alert" is a strong rhythm beat — names what you just heard in the H2. "You set it once and your phone takes it from there" is on-voice (terse, second-person, mechanical promise) and matches the same vibe as Section 6 card 3's "Beats typing it later when the moment's already past."

**One issue:** "phone takes it from there" appears **2× inside Section 3** — once in the new lead and once in feature card 3:
> Card 3: "Save a person at a place and the phone takes it from there. You don't open the app. You walk past. It speaks up."

This is a NEW collision Gigi's quick rewrite introduced. Same exact 6-word phrase, ~80 words apart, same section. Card 3 was already there pre-cuts; the new lead now mirrors it.

**Recommended fix (one line):** rewrite Section 3 card 3 first sentence to remove the duplicate phrase. Options:
- "Save a person at a place. That's the whole setup." → then keep "You don't open the app. You walk past. It speaks up."
- "One save per person. That's the setup." → keep rest as-is.

I'd ship A. It also picks up the "That's the…" cadence the new lead introduced, which is a nice micro-rhyme between H2-area and card.

**Status: SHIP-WITH-NOTES.** Lead itself is good. Card 3 needs one sentence trimmed.

---

## 3. Section 6 card 3 rewrite — voice check

**New body (live DOM, Section 4 `what-else`):**
> H3: "Voice and photo notes."
> Body: "Talk to it. Snap a face. Beats typing it later when the moment's already past."

**Voice landing:** lands clean. Three short sentences, declining length, ending on the consequence (you missed the moment). "Snap a face" is sharper than the old "Whatever helps you remember" — it tells you what the feature DOES, not just hedges around it. "Beats typing it later when the moment's already past" gives the WHY in one line. Better than the original.

**Status: GOOD.** No further work.

---

## 4. Section 7 card 1 rewrite — context check

**Section 5 (Privacy) live DOM:**
> H2: "No account. No social feed. Nowhere else."
> Lead: "Everything stays on your phone."
>
> Card 1: H3 "No sign-in." / Body "No email. No password. Open the app and start."
> Card 2: H3 "No sync." / Body "Nothing leaves your device. Nothing to leak."
> Card 3: H3 "No cloud." / Body "Your memories are on your phone, not a server."
> Card 4: H3 "No profile." / Body "No public profile. No handle. No way to find you."

**Card 1 in context:** works. Each H3 is now a "No X" pattern of equal weight (No sign-in / No sync / No cloud / No profile) — parallel structure that scans nicely. Pre-cuts card 1 was "No account" which awkwardly echoed both the section H2 ("No account. No social feed.") and the trust microline. New "No sign-in." breaks that echo cleanly while staying in the same family.

The H2 still uses "No account. No social feed." — that's the SECTION'S TOPIC line, not a card-level repeat, so the H2 use is appropriate even though the trust microline and card 1 H3 are both adjacent. Reads as: "the section is about no account / no social feed — and here are the four mechanical reasons that's true." Not a collision.

"Open the app and start" body line — checked across the full page, appears 1× total (here, in this card body). No collision.

**Status: GOOD.**

---

## 5. Section 9 H2 in context — "Open it. Start where you are."

**Live DOM:**
> H2: `Open it. <span class="mint">Start</span> where you are.` — mint accent on "Start" (rgb(45, 212, 168))
> Sub: "The bar. The gym. The coffee shop. The face you keep almost placing. Now you can."
> CTA: App Store badge
> Trust microline: "On your device. No account."
> Support link: "Need help? Get support →"

**Voice check:** psych's pick is on-voice. "Open it." is the call to action stripped to two words. "Start where you are" lands on the user's actual context (the bar, the gym, the coffee shop, the face you almost placed) without repeating the hero's "walk past" mechanic. This was the right call.

My initial proposal was "The next time you walk past, you'll know." I flagged in my own audit that "the next time you walk past" already lives in the hero subhead, so resurrecting it in the final CTA would have created the very collision I was trying to fix. Psych's line resolves cleanly.

**Mint accent symmetry check:** hero H1 has mint on "everyone" (also rgb(45, 212, 168)). Final CTA H2 has mint on "Start." Two mint accents bracketing the page — opening word and closing word. Reads as deliberate framing, not a tic. **GOOD.**

**Sub line check:** "The bar. The gym. The coffee shop. The face you keep almost placing. Now you can." — five short fragments, the last one ("Now you can.") completes the implicit promise from the H2. Strong close. The fragments echo the same "specific places" rhythm as Section 1's H2 ("the gym every week. The bartender who starts your order…") — that's a deliberate callback at the closing surface, not a collision.

**Competition check:** does this CTA H2 compete with anything else I wrote across the page?
- Hero H1: "Walk in. Remember everyone." — different verb pattern (Walk in / Remember vs. Open it / Start). No competition.
- Section 2 H2: "You've seen them before. You know the face. The name's gone." — descriptive, not call-to-action. Different register.
- Section 3 H2: "Save someone. Pin them to a place. The phone does the rest." — instructional. Different.

No competition. **GOOD.**

---

## 6. Remaining cross-section collisions or near-duplicates

Searched the live DOM for known risk phrases (`evaluate_script` regex hits):

| Phrase | Hits | Locations | Verdict |
|---|---|---|---|
| "the next time you walk past" | 1 | Hero subhead | Clean — single use |
| "walk in. remember everyone" | 1 | Hero H1 | Clean — single use |
| "whatever helps you remember" | 1 | Section 3 step 1 | Clean — single use |
| "on your device. no account" | 2 | Hero + final-cta | Clean — 2× by design |
| "no account" | 3 | Hero microline + Privacy H2 + final-cta microline | Privacy H2 is section topic, not a wallpaper repeat. Acceptable. |
| "no sign-in" | 1 | Privacy card 1 H3 | Clean — single use |
| "open the app and start" | 1 | Privacy card 1 body | Clean — single use |
| "open it. start where you are" | 1 | Final CTA H2 | Clean — single use |
| **"phone takes it from there"** | **2** | **Section 3 lead AND Section 3 card 3** | **NEW COLLISION — see Section 2 above** |
| "know three people" | 2 | Section 2 step 3 ("Copper & Vine") + Section 3 H2 ("The Hoxton") | Different venues, intentional refrain. Acceptable. |
| "three people here" | 2 | Same as above | Same — intentional refrain |
| "snap a face" | 1 | Section 4 card 3 | Clean — single use |
| "place is the spine" | 1 | Section 2 step 2 | Clean — single use |
| "corelocation" | 1 | Section 3 card 1 | Clean — single use |

**Two intentional refrains to flag (not collisions):**
1. "You know three people here." — Section 2 step 3 (Copper & Vine) and Section 3 H2 (The Hoxton). Same alert pattern, different venues. This is THE example refrain for the proximity feature; rewording either would weaken both. KEEP.
2. "On your device. No account." — Hero + final-cta. By design, 2× as bookends. KEEP.

---

## Final call

**SHIP-WITH-NOTES.**

- All 7 pre-cuts collisions I flagged are resolved on the live page.
- Section 5 lead rewrite holds voice.
- Section 6 card 3 rewrite is stronger than the original.
- Section 7 card 1 rewrite slots into the parallel "No X" structure.
- Section 9 H2 (psych's pick) is on-voice and avoids my misstep.
- Hero phone crop reads correctly — proximity alert visible, top caption strip hidden.

**One string still needs a 30-second rewrite** before launch:

**Section 3 (`#proximity`) feature card 3, first sentence — currently:**
> "Save a person at a place and the phone takes it from there. You don't open the app. You walk past. It speaks up."

**Recommended replacement:**
> "Save a person at a place. That's the whole setup. You don't open the app. You walk past. It speaks up."

Reason: Gigi's new Section 3 lead now uses "your phone takes it from there" — duplicating it inside card 3 of the same section is the only fresh collision the cuts introduced. The fix also picks up the "That's the…" cadence from the new lead, creating a nice micro-rhyme between H2 area and card.

If that one sentence is rewritten, page is fully clean for launch.
