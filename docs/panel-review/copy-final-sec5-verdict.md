# Section 5 Copy Verdict — Map Swap

**Reviewer:** copywriter
**Date:** 2026-04-27
**Method:** Live DOM read via chrome-devtools MCP at http://localhost:4488/index.html (1440x900, reveals forced).
**Screenshot:** `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/copy-final-sec5.png` (and `-top.png`, `-bottom.png` for context)

---

## What's currently rendered

**Eyebrow:** THE FEATURE NOBODY ELSE HAS
**H2:** You're near The Hoxton. You know three people here.
**Lead:** That's the alert. You set it once and your phone takes it from there.

**Phone caption (above device):** Your places, mapped.
**Phone visual:** `screen-06-map.png` — Spots map with pinned venues, a pinned tile ("Copper & Vine") snippet at the bottom.

**Left column:**
- **On your phone.** — CoreLocation does the work. The geofence sits on your device. Nothing about where you go ever leaves it.
- **No cloud. No server.** — There's nothing to track because there's nothing to send. Your venues, your people, your radius, all local.

**Right column:**
- **Set it once.** — Save a person at a place. That's the whole setup. You don't open the app. You walk past. It speaks up.

---

## Verdict — Does the copy still work with the map visual?

**NO. The copy and the visual are talking past each other.**

The H2 narrates an alert event ("You're near The Hoxton. You know three people here.") and the lead explicitly labels it ("That's the alert."). The user's eye then drops to the visual expecting to see *that alert* — a notification, a banner, a tap target. Instead they see a static map of pins. The narrative beat the copy sets up is never paid off by the visual.

The phone caption "Your places, mapped." makes it worse — it's a second, competing headline for the visual that has nothing to do with the alert story the H2 is telling. Two different stories occupying the same panel.

There's also a structural redundancy issue: Section 3 (How It Works) Step 3 already says "Tap the alert. See who's here." So if Section 5 stays alert-themed but loses the alert visual, we have two sections describing the same beat with worse evidence the second time.

The bullets actually survive the swap — they're about *the system* (CoreLocation, on-device, set-once), not the alert moment. Those work fine over a map. It's the H2 + lead doing the damage.

---

## Recommendation: keep the map, repoint the copy

The map is a stronger visual for what Section 5 actually proves: **MetHere knows where your people are without sending that data anywhere.** The map literally renders the on-device geofence index. It's the right artifact for a "no cloud, on-device, set-once" argument. Don't swap it back.

Repoint the H2 and lead to match.

### Proposed copy

**Eyebrow (keep):** THE FEATURE NOBODY ELSE HAS

**H2 — Option A (recommended):**
Your places, your people, your phone. Nothing leaves.

**H2 — Option B:**
The map lives on your phone. So does everything on it.

**H2 — Option C (closest to original cadence):**
Pinned to your places. Stored on your phone.

**Lead — Option A (pairs with H2 A):**
Save who, save where. Your phone watches the rest. Nothing goes out.

**Lead — Option B (pairs with H2 B):**
Save a person at a place. Walk past it. Your phone speaks up. No one else hears a thing.

**Lead — Option C (pairs with H2 C):**
Set it once. Walk past. Your phone tells you who's here. Without telling anyone else where you are.

**Phone caption — change to:**
"On-device. Always." OR drop the caption entirely and let the H2 carry the visual. Current "Your places, mapped." is descriptive filler that competes with the H2.

### Bullets — minor tightening

The three column blocks still mostly work. One small swap to remove the now-orphaned alert framing:

- **"Set it once."** body currently ends "It speaks up." — that's the alert beat from a section that no longer leads with the alert. Tighten to: *"Save a person at a place. That's the whole setup. You don't open it again. Your phone does the watching."*

(Removes "speaks up" so the alert language doesn't contradict the new map-led framing. Keeps the set-once promise intact.)

### My pick

**H2 A + Lead A + caption "On-device. Always."**

Reasoning: H2 A is the cleanest three-beat parallelism (your / your / your → nothing leaves). It mirrors the visual: the map shows your places, the pin shows your people, the device shows it's on your phone. Lead A finishes the proof in one beat without requiring the reader to look at a notification that isn't there. This composition lets the map do the work the alert visual used to do — and arguably does it better, because a map of pins reads as "real data on a real device" faster than a notification screenshot does.

---

## Word collisions I can see in the live DOM

Spot-checked against the other sections rendered on the page:

- **"alert"** — Section 3 Step 3 already owns this word ("Tap the alert. See who's here."). If we keep alert-led copy in Section 5 with no alert visual, we burn the word twice with weaker evidence the second time. New copy drops it. Clean.
- **"phone"** — appears in Section 3 Step 3 ("your phone says so"), Section 6 privacy lead ("Everything stays on your phone."), and proposed new Section 5 H2/lead. This is fine — "phone" is a load-bearing brand word that should repeat. Not a collision, a refrain.
- **"set it once"** — used in current lead AND in the right-column bullet H3. Proposed new lead drops the duplication. Bullet keeps it as the concept owner.
- **"places"** — Section 7 final-CTA mentions "the bar, the gym, the coffee shop." Section 5 phone caption "Your places, mapped." Proposed H2 A keeps "your places" once. No collision; it's the right word for the section.
- **"local" / "on your phone" / "on-device"** — three near-synonyms currently in Section 5. Proposed caption "On-device. Always." plus existing bullet "On your phone." plus body "all local." That's intentional layering of the same point in three registers. Reads as emphasis, not redundancy. Keep.

No new collisions introduced by the proposed changes that aren't already serving the section.

---

## Confirmation

- Live page opened: YES — `http://localhost:4488/index.html`, 1440x900 viewport, reveals forced via evaluate_script.
- Strings pulled from live DOM, not copy-v2.md: YES — see DOM read above.
- Visual + copy reviewed as composition: YES — screenshot at `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/copy-final-sec5.png`.

**Confidence:** HIGH on the verdict (copy doesn't land), MODERATE-HIGH on H2 A + Lead A as the recommended replacement. If Julian wants to hold the map visual but keep the H2 alert-themed for narrative continuity, the alternative is to swap the visual back to the proximity alert phone — but the map is the more honest artifact for a privacy-led section, so the recommendation is to repoint the copy.
