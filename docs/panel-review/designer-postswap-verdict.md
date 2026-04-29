# Designer Post-Swap Verdict — methere.app v2 Hero + How-It-Works + Section 5

**Reviewer:** ios-product-designer
**Date:** 2026-04-27
**Method:** Live browser inspection via chrome-devtools MCP at `http://localhost:4488/index.html`, viewport 1440x900, reveal animations forced visible, analytics banner suppressed. All five phone instances measured for computed-style frame properties (border, border-radius, background, padding, box-shadow), and visually inspected at 1x and 2x browser zoom. Capture set saved to `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/captures/`.

---

## 1. Phone visual quality at every cropped instance — RESOLVED

**Verdict: RESOLVED for both cropped phones (hero + Section 5 deep dive).**

The frame-inside-frame defect from Julian's 11:08/11:09 PM screenshots is killed. Forensic data:

### Hero phone — `screen-01-proximity.png`, idx 0
- `<img>` computed: `border-radius: 0px`, `border: 0px none`, `background: rgba(0,0,0,0)`, `padding: 0px`, `box-shadow: none`
- Wrapping `<div class="phone-shot--proximity-cropped">` computed: `border-radius: 0px`, `border: 0px none`, `background: rgba(0,0,0,0)`, `padding: 0px`, `box-shadow: none`, `overflow: hidden`
- Rendered: 560 x 950 px at top:157, left:720
- Visual at 1x and 2x zoom: ONE rounded bezel corner at the top edge (the natural iPhone bezel rendered in the source PNG itself). No nested second corner. No outer card frame. Wrapper is invisible.

Compare to `Screenshot 2026-04-27 at 11.08.50 PM.png`: that capture showed a second visible flat-top rounded card OUTSIDE the bezel, creating two distinct rounded corners stacked. Current state shows only the bezel's own corner. Defect is gone.

### Section 5 "On your phone" deep dive — `screen-01-proximity.png`, idx 4
- `<img>` computed: same all-zero frame state as hero
- Wrapping `<figure class="phone-shot proximity-device phone-shot--proximity-cropped reveal is-visible">` computed: same all-zero frame state
- Rendered: 280 x 475 px at top:4980, left:580
- Visual at 1x and 2x zoom: ONE rounded bezel corner. No card behind. CLEAN.

Compare to `Screenshot 2026-04-27 at 11.09.31 PM.png`: that capture showed an outer dark rounded card around the bezel. Current state shows the bezel sitting directly on the section background. Defect is gone.

### How-it-works step 3 — now uses `screen-04-person.png`, idx 3
- Source PNG is a flat in-app screen (Sarah Chen person-detail), NOT a lockscreen with a baked-in iPhone bezel.
- Wrapping `<div class="phone-shot phone-shot--howit">` computed: `border-radius: 24px`, `border: 1px solid rgb(36, 34, 40)`, `background: rgb(26, 24, 30)`, `overflow: hidden`. This is the wrapper-as-frame card treatment used consistently across all three how-it-works steps.
- Visual at 1x zoom: a single soft-cornered card containing the flat UI screen. No competing iPhone bezel because the source PNG does not contain one. The card IS the frame, intentionally.
- Compare to `Screenshot 2026-04-27 at 11.09.43 PM.png`: that capture showed `screen-01-proximity.png` (the lockscreen with embedded bezel) inside the same card wrapper, producing the double-frame defect. The image swap removes the conflict — the new source PNG has no embedded bezel, so the wrapper card no longer competes. Defect is gone via a different mechanism than hero/Section 5: instead of stripping the wrapper, the source asset was changed to one that doesn't carry its own bezel. Both approaches resolve the double-frame.

**No remaining frame defects across any of the three previously broken instances.**

---

## 2. Screenshot variety verdict — RESOLVED

**Page now reads as having different content per section.** No image-repetition gravity.

Inventory of phone screenshots on the page (top-to-bottom):
| # | Section | Source PNG | Treatment |
|---|---------|------------|-----------|
| 1 | Hero (right column) | `screen-01-proximity.png` | Cropped, bezel only, no wrapper |
| 2 | How-it-works step 1 | `screen-03-people.png` | Flat-screen-in-card |
| 3 | How-it-works step 2 | `screen-02-venue.png` | Flat-screen-in-card |
| 4 | How-it-works step 3 | `screen-04-person.png` | Flat-screen-in-card |
| 5 | Section 5 deep dive ("On your phone") | `screen-01-proximity.png` | Cropped, bezel only, no wrapper |

Four unique source PNGs across five instances. The two `screen-01-proximity.png` reuses are intentional and earned: hero opens the page with the proximity alert (the product's headline moment), and Section 5 returns to it as the deep dive that explains the alert in detail. That repetition tells a narrative — "this is what we promised" → "and here's how it works" — rather than reading as filler. The middle three steps now show three different in-app screens (people list, venue detail, person detail), which is what the psych panel asked for: the eye doesn't see the same image three times in a row.

The rewritten step 3 copy "Tap the alert. See who's here." narratively bridges the proximity ping into opening the person card. That makes the flow proximity → save → pin → open-card → why-it's-private read as a coherent arc, not a slideshow with a stuck frame.

---

## 3. Overall ship verdict

**SHIP.**

Both reported defects are resolved. The hero, Section 5 deep dive, and how-it-works step 3 now render cleanly at every zoom level inspected. Screenshot variety reads as intentional content per section, not repetition. No remaining technical issues — `<img>` and wrapper computed styles confirm no residual frame artifacts on the cropped instances, and the swap-not-strip approach for step 3 is structurally sound (different source asset, no bezel conflict possible).

One small observation, not blocking: step 3 wrapper still uses the same `phone-shot phone-shot--howit` class as steps 1 and 2 — visually consistent, that's correct. If at some point the design wants to differentiate "this is the resolution moment" from "these are setup steps," step 3 could earn a subtle visual treatment (slightly heavier shadow, mint accent border, etc.), but that's a separate creative decision, not a defect.

---

## Confirmation

- LIVE PAGE opened: `http://localhost:4488/index.html` via chrome-devtools MCP `new_page`. Confirmed page id 10 selected, 1440x900 viewport, reveal classes forced visible, banner hidden.
- All five phone instances forensically measured AND visually inspected at 1x + 2x zoom on rendered pixels, not from source HTML alone.
- Cross-referenced against Julian's 11:08/11:09 PM broken-state screenshots to confirm the specific defects are now absent.
