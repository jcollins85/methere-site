# Step 2 Body — Final Copy Call

**Date:** 2026-04-27
**Surface:** methere.app v2 — Section 4 "How it works" — Step 2 body
**H3 (locked):** "Pin them to a place."

---

## Final Pick

**Option A:**

> "You'll see the places nearby. Pick the one you're at. Bar, gym, coffee shop, the corner you keep running into them on."

---

## Reasoning (one sentence)

A leads with what the user sees, then the verb action they take — mirroring Step 1's two-beat opening and Step 3's "this happens, now you do this" cadence — while killing "venue" / "auto-fills" jargon and accurately describing the MapKit-suggestions-then-tap UX.

---

## Why not B or C

- **B** ("Pick the place from the list nearby...") compresses to one beat but "from the list nearby" reads like instruction-manual phrasing — slightly clinical against the warmer Friend voice in steps 1 and 3.
- **C** leads with the example list, which is a punchy beat but disconnects from the H3 promise ("Pin them to a place.") — the body should immediately answer *how* you pin, not detour through scenery first.

---

## Live Page Verification

Opened `http://localhost:4488/index.html` via Chrome DevTools MCP at 1440×900, revealed all sections, scrolled to step 2. Confirmed current live body matches the flagged line:

> "The venue auto-fills from where you are. Bar, gym, coffee shop, the corner you keep running into them on."

Context screenshot saved to `docs/panel-review/copy-step2-context.png`.

Read step 2 in flow with surrounding steps:
- Step 1 opens with action: "Open the app, tap Quick Add..."
- Step 3 opens with action: "Walk past again..."
- Step 2 (Option A) opens with state-then-action: "You'll see the places nearby. Pick the one you're at." — flows.

---

## Implementation

In `index.html`, replace the current step 2 `<p>` body with Option A. No other changes needed — H3, kicker, and surrounding steps stay as-is.
