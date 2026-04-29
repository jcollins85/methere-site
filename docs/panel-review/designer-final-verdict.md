# Designer Final Verdict — methere.app v2 Hero & Section 5

**Reviewer:** ios-product-designer (Era One)
**Date:** 2026-04-27
**Verification method:** Live page (http://localhost:4488/index.html) opened in Chrome via chrome-devtools MCP, screenshots captured at 1440×900, 768×1024, and 375×812 (mobile/touch). Reveal classes force-applied, consent banner suppressed. Source DOM + computed styles inspected via evaluate_script. All findings verified from rendered pixels, not source.

**Verdict: BLOCK** — one critical visual defect in the hero. Section 5 ships clean.

---

## 1. Hero phone visual (full uncropped `screen-01-proximity.png`)

**VISUAL DEFECT — DUPLICATE HEADLINE**

Removing the CSS crop wrapper exposes a caption strip baked into the screenshot itself. That caption strip says:

> Walk in.
> **Remember**
> everyone.

Three lines, white type, mint highlight on "Remember" — visually indistinguishable from a hero H1 in style and weight.

The page already has an H1 in the left column that reads:

> Walk in.
> Remember **everyone**.

Same words, same break pattern, same color treatment (just a different word highlighted in mint). The result is two near-identical headlines on the same fold, side-by-side at desktop and stacked on tablet/mobile.

### Severity by viewport

- **1440 desktop (designer-final-hero-1440.png, designer-final-hero-1440-full.png):** Two H1-weight headlines reading the same words sit side-by-side at the top of the page. The eye doesn't know which one is "the" headline. The mirror effect is the first thing you see.
- **768 tablet (designer-final-hero-768.png):** Worse. Hero stacks single-column; H1 sits directly above the second headline. Two large "Walk in. Remember everyone." blocks vertically, separated only by the App Store badge and trust line.
- **375 mobile (designer-final-hero-375.png):** Same as tablet but more compressed. User reads the H1, scrolls past the CTA, and immediately reads the same sentence again at near-H1 size before the iPhone shows. Reads as a layout bug or a duplicated-content rendering glitch.

### Why this happens

The composed source PNG (`screenshots/screen-01-proximity.png`, 1242×2688 intrinsic) was authored as a self-contained App Store-style "marketing screen" with caption + iPhone in one image. That makes sense in isolation (e.g., on the App Store itself). It does NOT make sense embedded in a marketing page that already has an H1 making the exact same statement. The previous CSS crop hid the caption strip — that's why this wasn't visible before. Removing the crop fixes the bezel-clip problem but exposes the duplication.

### Fix options (pick one)

**Option A — Use a clean iPhone-only PNG in the hero (recommended).**
Replace the hero image with a version of `screen-01-proximity.png` that has the caption strip removed at the source. The hero already supplies the caption text via H1 — the iPhone alone is what the hero needs. Re-export from whatever pipeline built the composed PNG (likely Figma/Sketch + ASC bundle export); save as `screen-01-proximity-bare.png` or similar.

**Option B — Crop the caption strip out via CSS without clipping the bezel.**
The previous crop chopped the top of the iPhone. Replacement crop should hide ONLY the caption strip (the top ~20% of the PNG above the iPhone bezel) by using `object-fit: cover; object-position: center bottom` on the img with a constrained `aspect-ratio` matching just the iPhone region, OR by using `clip-path: inset(20% 0 0 0)` and a negative margin compensation. This keeps one source PNG but requires careful measurement.

**Option C — Keep the current full-PNG render but rewrite the H1.**
Make the H1 a different sentence so the duplication isn't verbatim. This is the weakest fix — the visual mirror (two large white-on-dark text blocks with a mint accent word) is still jarring even if the words differ.

**Recommendation: Option A.** Cleanest, no CSS gymnastics, no clip-path browser gotchas, and treats the hero PNG as "the iPhone" rather than "the iPhone-plus-marketing-caption." Engineer time to swap a file is 5 minutes.

---

## 2. Section 5 map visual (`screen-06-map.png` at 280px proximity-device width)

**GOOD — SHIP**

- 1440 desktop (designer-final-sec5-1440.png, designer-final-sec5-1440-mid.png, designer-final-sec5-1440-bot.png): 3-column layout (prose | phone | prose) reads beautifully. Phone container is 280×604, image renders at 278×602, aspect ratio (0.462) matches intrinsic exactly — no warping, no cropping. Map is legible at this scale: pins visible (mint dots + coral pins), street labels readable, "Spots" header bar with toggle clear, list rows below identify venues by name + neighborhood, tab bar at bottom intact. The baked-in caption "Your places, mapped." sits above the iPhone — does NOT duplicate the H2 ("You're near The Hoxton…"), so it adds context rather than repeating.
- 768 tablet (designer-final-sec5-768.png): Collapses to single column gracefully. Prose stacks above phone. Map still legible. No defect.
- 375 mobile (designer-final-sec5-375.png): Header reads cleanly, prose stacks vertically, phone sits at proximity-device width. Map remains readable. No defect.

**No fix needed.** The Section 5 swap from `screen-01` to `screen-06` works exactly as intended — five unique screens on the page now, each one carrying its own distinct caption that pairs with (rather than repeats) the section copy.

---

## 3. Other visual regressions from removing `.phone-shot--proximity-cropped`

**None detected.** Audited via DOM scan + computed style inspection across all viewports.

- The cropped class has zero applied instances on the live page. CSS rules remain in styles.v2.css but are inactive (dead code — safe to ship; can be cleaned up post-launch).
- All 5 phone-shot figures across the page render at exact aspect ratio match (0.462 intrinsic = 0.462 rendered). No squeeze, no skew, no clipping anywhere.
- Hero figure has `overflow: visible` (full PNG renders), other phone-shots use `overflow: hidden` but their images fit cleanly within container so the property is moot.
- All 5 source images are unique (`screen-01-proximity.png`, `screen-02-venue.png`, `screen-03-people.png`, `screen-04-person.png`, `screen-06-map.png`). No duplicates anywhere on the page.
- Sections 2/3/4 (`#how-it-works` triptych) all show full uncropped images with their own caption strips that match each section's micro-headline — works as designed.
- Section 5 layout: prose | phone | prose stays balanced at desktop, gracefully collapses at narrower breakpoints.
- Header, footer, navigation, App Store badges, plans grid, privacy block, final CTA — all unchanged and unaffected.

---

## Ship verdict

**BLOCK** until hero PNG is replaced with an iPhone-only version (Option A above). The Section 5 swap and the cropped-class removal are both safe — only the hero image carries the duplicate-headline defect. The fix is a single file swap; once shipped, re-verify hero at all 3 viewports and this becomes SHIP.

If the file swap is impractical in the next session, fall back to Option B (CSS clip targeting only the caption strip). Do NOT ship as-is — the duplicated headline is the first thing every desktop and mobile visitor sees, and at mobile it reads as broken layout, not intentional design.

---

## Artifacts

- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-hero-1440.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-hero-1440-full.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-hero-768.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-hero-375.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-sec5-1440.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-sec5-1440-mid.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-sec5-1440-bot.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-sec5-768.png
- /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-final-sec5-375.png
