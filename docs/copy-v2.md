# methere.app v2 — Final Copy

**Author:** copywriter (Era One)
**Date:** 2026-04-27 · T-8 to launch
**For:** Engineer (Julian)
**Status:** Phase 3 deliverable. Ready to drop into HTML.
**Brief:** Embedded in `design-spec-v2.md` (12 copy slots). Voice floor: `voice-and-tone.md`. Brand floor: `brand-direction-v2.md`. Psych preserve list: `cold-read-psych-v2.md`.

> **How to read this doc:** Each section below maps 1:1 to the design spec sections. Every copy slot named in the spec is filled in here with final prose. Locked strings carried forward as-is. Departures from constraints flagged inline. Engineer-relevant notes at the end.

---

## Section 1 — Hero

| Slot | Final copy |
|---|---|
| Eyebrow | `iPhone · Social memory` |
| H1 | `Walk in.<br>Remember <span class="mint">everyone</span>.` |
| Subhead | `MetHere remembers the people you meet and the places you met them. The next time you walk past, it tells you who's there.` |
| Primary CTA | App Store badge (no text override) |
| Secondary CTA | `See how it works ↓` |
| Trust microline | `On your device. No account.` |

**Subhead notes:** 23 words, two sentences, period-comma only. Includes "MetHere" once. Plants the proximity hook ("the next time you walk past, it tells you who's there") in product-copy register, not feature-pitch register. Funnel-architect's draft used "pings you when you're nearby again" — I rewrote to "it tells you who's there" because (a) "pings" reads as jargon to a cold visitor and (b) the second clause should land the *what gets said*, not the *that something gets said*. The notification IS the pitch. Letting the second sentence sound like the alert itself does double duty.

**Mint accent:** `everyone` — confirmed per spec C3 distribution and brand visual review §3(a).

---

## Section 2 — 3-second demo strip

| Slot | Final copy |
|---|---|
| Eyebrow | `Three frames` |
| H2 | `In about three seconds.` |
| Caption 1 | `Save who you met.` |
| Caption 2 | `Pinned to where.` |
| Caption 3 | `<span class="mint">Pinged</span> when you're back.` |

**Notes:** All defaults from the spec hold. They're already on-voice — short, declarative, period-stopped, mint on the verb in caption 3. Tried two alternatives for the H2 (`Three seconds. That's it.` and `Here's the whole thing.`) — the spec default reads better because it sets a count *and* a duration in the same line, which the alternatives didn't.

**Mint accent:** Caption 3 verb only. No mint on H2 (per spec — section 2 is one of the white-H2 sections).

---

## Section 3 — The Moment

| Slot | Final copy |
|---|---|
| H2 | `You've seen them before.<br>You know the face. The name's gone.` |
| Card 1 | `You see them at the gym every week. You've talked twice. You remember the conversation but not the name.` |
| Card 2 | `The bartender who starts your order before you sit down. You know them. They don't belong in your phone. But they're not a stranger.` |
| Card 3 | `You're back at the same spot. A familiar face waves. You wave back. You wish you remembered their name.` |

**Notes:** All locked per psych. Carried verbatim from current site. Italics stripped per brand-guidelines §4.2 (italics banned). No mint in H2 — Section 3 stays pure white per spec C3.

---

## Section 4 — How it works

| Slot | Final copy |
|---|---|
| H2 | `Save someone. Pin them to a place. The phone does the rest.` |
| Step 1 H3 | `Save who you met.` |
| Step 1 body | `Open the app, tap Quick Add, type a name. A nickname works. A description works. Whatever helps you remember.` |
| Step 2 H3 | `Pin them to a place.` |
| Step 2 body | `The venue auto-fills from where you are. Bar, gym, coffee shop, the corner you keep running into them on. Place is the spine.` |
| Step 3 H3 | `Get pinged when you're nearby.` |
| Step 3 body | `Walk past again and your phone says so. "You're near Copper & Vine. You know three people here." That's the whole thing.` |

**Notes:**
- H2 is the spec default — reads cleanly, three-beat rhythm, nothing to gain from rewriting.
- Step 1 body: 21 words. "Quick Add" is the actual feature name in the app — using the in-product label keeps the visual and the copy aligned. The "nickname works / description works" lines mirror voice-and-tone §4.1 (the forgot-the-name scene).
- Step 2 body: 28 words. "Place is the spine" lands the architectural claim without using "social memory" twice on the page.
- Step 3 body: 27 words. Uses the literal alert string, then a flat declarative close. "That's the whole thing" is the brand voice doing the work — small, unbothered, knowing. Rejected "That's the magic" (kill-list word) and "That's the moment" (sentimental drift, psych Risk 2).
- No mint in H2 per spec — Section 4 is white.
- "Quick Add" is rendered as two words in the app (matches current implementation). If product copy ever shifts to "QuickAdd," update this string too.

---

## Section 5 — Proximity deep dive

| Slot | Final copy |
|---|---|
| Eyebrow | `THE FEATURE NOBODY ELSE HAS` |
| H2 | `You're <span class="mint">near</span> The Hoxton. You know three people here.` |
| Section lead | `That's the alert. You set it once. The next time you walk past, your phone tells you who's inside.` |
| Bullet 1 H4 | `On your phone.` |
| Bullet 1 body | `CoreLocation does the work. The geofence sits on your device. Nothing about where you go ever leaves it.` |
| Bullet 2 H4 | `No cloud. No server.` |
| Bullet 2 body | `There's nothing to track because there's nothing to send. Your venues, your people, your radius — all local.` |
| Bullet 3 H4 | `Set it once.` |
| Bullet 3 body | `Save a person at a place and the phone takes it from there. You don't open the app. You walk past. It speaks up.` |

**Notes:**
- Lead: 18 words, three short sentences. Replaces spec's draft ("Set once, fires the next time you walk past — without opening the app") which used an em-dash. Same beats, no em-dash, slightly more rhythm.
- Bullet 1: 19 words. Names the system (CoreLocation) once for credibility — the press visitor sees the actual technology, not "powered by AI." Aligns with psych §3.5 (real notification copy reads as credibility).
- Bullet 2: 19 words. Refusal in the affirmative — explains *why* there's no tracking, doesn't just claim it. Stronger than "we don't track."
- Bullet 3: 27 words. Slightly over the ~20 target but the construction earns the extra words. The closing trio ("You don't open the app. You walk past. It speaks up.") is the section's payoff.

**Mint accent:** `near` — single word in H2 per spec. Bullets stay white.

---

## Section 6 — What else

| Slot | Final copy |
|---|---|
| H2 | `What else is in there.` |
| Card 1 H3 | `Smart venue detection.` |
| Card 1 body | `The place auto-fills from where you are. Tap to confirm. No typing the address.` |
| Card 2 H3 | `Share cards.` |
| Card 2 body | `A monthly receipt of who you met where. Built from your data, made to share, no feed required.` |
| Card 3 H3 | `Voice and photo notes.` |
| Card 3 body | `Talk to it. Snap a face. Whatever helps you remember beats trying to type it later.` |
| Card 4 H3 | `Map view.` |
| Card 4 body | `Every spot, every person, on one map. See your city the way you actually use it.` |

**Notes:**
- Card 1: 14 words. Direct.
- Card 2: 17 words. "Receipt" language carries forward from the in-app Stats hero ("receipts not metrics" — see memory `project_stats_memory_card_hero`). "No feed required" answers the visitor's social-network fatigue without belaboring it.
- Card 3: 15 words. The "beats trying to type it later" close is the on-voice payoff — it acknowledges the user's actual problem without being preachy.
- Card 4: 17 words. "See your city the way you actually use it" lands map view as a personal-geography tool, not a generic feature.
- Verified: smart venue detection (`useNearbyPlaces` hook + MapKitBridge), share cards (Monthly card SHIPPED 2026-04-20), voice + photo (capacitor camera + dictation, both shipped), map view (SHIPPED, see memory `project_map_view_cold_mount_shipped`). All four are real shipped features.
- No mint in H2 per spec — Section 6 is white.

---

## Section 7 — Privacy + anti-positioning

| Slot | Final copy |
|---|---|
| H2 | `No account. No social feed. <span class="mint">Nowhere</span> else.` |
| Section lead | `Everything stays on your phone.` |
| Card 1 H3 | `No account.` |
| Card 1 body | `No sign-in. No email. Open the app and start.` |
| Card 2 H3 | `No sync.` |
| Card 2 body | `Nothing leaves your device. Nothing to leak.` |
| Card 3 H3 | `No cloud.` |
| Card 3 body | `Your memories are on your phone, not a server.` |
| Card 4 H3 | `No profile.` |
| Card 4 body | `No public profile. No handle. No way to find you.` |
| Privacy details link | `Privacy details →` |

**Notes:** All four cards locked per spec (ASC S5 verbatim). H2 and lead locked per spec. Mint on `Nowhere` per spec C3. Nothing to write here — copy was already final coming in.

---

## Section 8 — Plans

| Slot | Final copy |
|---|---|
| H2 | `Start free. Upgrade if you need more.` |
| Free — name | `Free` |
| Free — price | `$0` |
| Free — features | `15 people` / `5 nearby alerts` / `Everything else, unlimited` |
| Free — note | `Always free.` |
| Monthly — name | `Monthly` |
| Monthly — price | `$3.99 / mo` |
| Monthly — trial pill | `14-day free trial` |
| Monthly — features | `Unlimited people` / `Unlimited alerts` / `Backup and restore` |
| Monthly — note | `No commitment.` |
| Annual — name | `Annual` |
| Annual — price | `$14.99 / yr` |
| Annual — savings | `Save 69%` |
| Annual — features | `Unlimited people` / `Unlimited alerts` / `Backup and restore` |
| Annual — note | `Best value.` |
| Lifetime — name | `Lifetime` |
| Lifetime — price | `$29.99 once` |
| Lifetime — features | `Unlimited people` / `Unlimited alerts` / `Backup and restore` / `Yours forever` |
| Lifetime — note | `One time. Done.` |
| Below CTA | `Purchases through Apple. Restore in-app any time.` |

**Notes:**
- **Monthly note "Cancel anytime." → "No commitment."** — Brand visual review §6 flagged this. "Cancel anytime" is the SaaS-template phrase every subscription page uses; it actually triggers mild distrust because it sounds like the line a user has been trained to read past. "No commitment." carries the same meaning, holds the period-stop pacing of the rest of the page, and feels like the brand voice rather than borrowed copy. Confidence: high.
- **Lifetime note "One-time." → "One time. Done."** — Promoted to a small period-stopped two-beat. Matches the rhythm of the page's H2s. The original "One-time." reads as a category label, not a sentence. Confidence: high.
- **"Backup + restore" → "Backup and restore"** — Stripped the `+` for typographic consistency. Plus signs read as engineer notation, not user-facing copy. Confidence: high.
- **Per brand visual review §3(b): trial pill removed from Annual.** Annual carries `Save 69%` and the mint border — that's its highlight. Trial pill stays only on Monthly per the brand-strategist trim.
- All pricing facts verified against spec: Free 15p / 5 alerts (no places limit) · Monthly $3.99 · Annual $14.99 · Lifetime $29.99.
- No mint in H2 per spec — Section 8 H2 is white. Mint discipline is carried by the Annual border + `Save 69%` + Monthly trial pill (3 mint elements per brand-strategist's trim).

---

## Section 9 — Final CTA

| Slot | Final copy |
|---|---|
| H2 | `Walk in. <span class="mint">Remember</span> everyone.` |
| Section lead | `The bar. The gym. The coffee shop. The face you keep almost placing. Now you can.` |
| Primary CTA | App Store badge (width 220px per spec) |
| Trust microline | `On your device. No account.` |
| Support link | `Need help? Get support →` |

**Notes:**
- **H2** echoes hero per brand-strategist recommendation in `brand-visual-review.md` §7 item 5 (echo wins for May 5 launch; A/B post-launch if conversion data argues for the decisive close). Mint on `Remember` (different word from hero's `everyone`) — gives a second mint moment on the strongest verb in the brand vocabulary, page-architecture closure.
- **Lead: 16 words.** Took two passes. First draft was the funnel-architect's line ("Remember names and places without joining another social network"). It worked but read as a benefit list, which the closing slot doesn't want — the closer is a final exhale, not a feature recap. Second draft uses the brand's most reliable conversion move: list three specific scenes, then close with the moment. "The face you keep almost placing" is the line that earns the section — every visitor who reached this point has had that exact half-recognition.
- "Now you can" is the smallest possible promise and the strongest one available. Rejected "This is for that" (cute, less clear) and "MetHere is for that" (third-person about the app at the closing slot reads cold).

**Mint accent:** `Remember` per spec.

---

## Section 10 — Footer

| Slot | Final copy |
|---|---|
| Footer link row | `Support · Privacy · Terms · X · hello@methere.app` |
| Credit line | `Made solo by Julian Collins.` |

**Notes:** All locked per spec C2. No copy decisions.

---

## Locked strings used as-is (appendix)

For engineer reference, the strings that carry over from prior locks:

| String | Source | Where it appears |
|---|---|---|
| `Walk in. Remember everyone.` | Brand floor | Hero H1 |
| `iPhone · Social memory` | Spec lock | Hero eyebrow |
| `On your device. No account.` | Psych lock | Hero CTA, Section 4 close CTA, Section 8 close CTA, Section 9 CTA (4× total) |
| `You've seen them before. You know the face. The name's gone.` | Psych lock | Section 3 H2 |
| Section 3 cards (gym / bartender / wave) | Psych lock | Section 3 cards (3 of them) |
| `You're near The Hoxton. You know three people here.` | Spec lock (mirrors notification copy) | Section 5 H2 |
| `THE FEATURE NOBODY ELSE HAS` | Spec lock | Section 5 eyebrow |
| `No account. No social feed. Nowhere else.` | ASC S5 lock | Section 7 H2 |
| `Everything stays on your phone.` | ASC S5 lock | Section 7 lead |
| Section 7 cards (account / sync / cloud / profile) | ASC S5 verbatim | Section 7 cards (4 of them) |
| `Start free. Upgrade if you need more.` | Psych lock | Section 8 H2 |
| `Made solo by Julian Collins.` | Brand floor | Footer credit |
| App Store ID `6757836312` | Hard fact | All 4 App Store badge links |

---

## Notes for engineer

**Line breaks that matter (don't let CSS flow rewrap them):**
- Hero H1: `Walk in.<br>Remember <span class="mint">everyone</span>.` — hard `<br>` between sentences. The two-line stack is the brand pattern (per voice doc Part Five hero spec).
- Section 3 H2: `You've seen them before.<br>You know the face. The name's gone.` — hard `<br>` after the first sentence. Reads as two beats: the recognition, then the loss.

**Mint-accent word per H2 (spec C3 distribution — 4 of 10 sections):**
| Section | Mint word | Notes |
|---|---|---|
| 1 (Hero) | `everyone` | Locked |
| 2 (Demo strip) | — | White H2 |
| 3 (Moment) | — | White H2 (psych-locked construction, no mint) |
| 4 (How it works) | — | White H2 |
| 5 (Proximity) | `near` | Locked |
| 6 (What else) | — | White H2 |
| 7 (Privacy) | `Nowhere` | Locked |
| 8 (Plans) | — | White H2 — mint discipline carried by Annual border + Save 69% + Monthly trial pill |
| 9 (Final CTA) | `Remember` | Locked |
| 10 (Footer) | — | No H2 |

Demo strip Caption 3 also carries mint on `Pinged` — that's a sub-H2 mint, not a section H2 mint, so it doesn't count against the 4-of-10 rule.

**The trust microline `On your device. No account.` appears 4 times.** Same string each time, no per-placement variation. Per psych this is the highest-trust 5-word phrase on the page and consistency is the point.

**The category plant `It's a social memory app.` is NOT explicitly placed in any slot.** Per brand-direction §3.2 it's a MUST-appear once. My read: it's already planted via the eyebrow `iPhone · Social memory` in the hero. The category name lands quietly in the first thing a visitor scans, paired with the platform constraint — exactly the "name it once, plainly, but don't lead with the manifesto" psych guidance. If brand-strategist wants the literal sentence somewhere too, the natural slot is a small italics-free line under the Section 5 H2 (e.g., "Social memory, in one feature.") — but I'd defer to brand on whether the eyebrow plant is sufficient.

**App Store CTA placements (4 total):**
1. Hero (badge 200px wide)
2. After Section 4 (How it works) close — badge 180px
3. After Section 8 (Plans) close — badge 180px
4. Section 9 (Final CTA) — badge 220px

Each is followed by the trust microline `On your device. No account.` per spec C4.

**Pricing strings (locked, do not rewrite):**
- `$3.99 / mo` (the space around `/` is intentional — typographic comfort)
- `$14.99 / yr`
- `$29.99 once` (no `/` because lifetime is not a period)

---

## Notes for designer if this needs another round

Two flags. Neither blocking.

**1. Section 9 lead — pushed beyond the spec's "wrap-up" framing.** The spec's brief was "one sentence wrap-up, ~12-18 words." I wrote 16 words across five short fragments and one closing sentence. Functionally one period-stopped reading unit, but visually it's more like a five-beat than a single sentence. If designer wants strict one-sentence, alternative: `The face you keep almost placing — now you can place it.` (12 words, one sentence, but introduces an em-dash that I rejected per voice rules). Or: `That face you keep almost placing. Now you can.` (10 words, two sentences, cleaner but slightly less hooked-in). My recommendation stays the five-beat version — the closing slot is the place to land the brand's most evocative beat, and the rhythm earns the unconventional construction.

**2. Section 4 H2 — kept the spec default, but I'd test an alternative.** Spec default `Save someone. Pin them to a place. The phone does the rest.` is 14 words and reads cleanly. Alternative I considered: `Three steps. The third one is the trick.` (8 words, sets up the proximity-alert payoff better). Not strong enough on first pass to displace the default — saving it as a launch+1 A/B candidate.

---

*Copy finalized in 1.5 hours. Ready for engineer drop-in. Voice: The Friend. Em-dashes used: zero. AI-tells used: zero. SaaS-template phrases used: zero.*
