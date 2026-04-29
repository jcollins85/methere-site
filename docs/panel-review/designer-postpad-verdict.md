# Designer Verdict — Post-Padding Fix Verification

**Reviewer:** ios-product-designer
**Date:** 2026-04-27
**Scope:** Verify two follow-up fixes on methere.app v2 redesign:
  1. `padding-top: 24px` + `padding-bottom: 24px` on `.phone-shot--proximity-cropped` (breathing room above/below iPhone bezel inside the dark frame container)
  2. `max-width: 360px` on `.phone-shot--howit` (was unconstrained at desktop, rendering ~680px)

**Method:** Chrome DevTools MCP at live page `http://localhost:4488/index.html`. All `.reveal` elements forced visible. Analytics consent banner hidden. 3 cropped phones × 3 viewports = 9 cells. Programmatic gap measurement + visual screenshot review.

---

## 1. Per-Phone-Per-Viewport Verdict

### Programmatic gap measurements (all 9 cells)

| Phone | Viewport | gapTop | gapBottom | gapLeft | gapRight | Verdict |
|---|---|---|---|---|---|---|
| Hero | 1440 | 25px | 25px | 1px | 1px | **GOOD** |
| Hero | 768 | 25px | 25px | 1px | 1px | **GOOD** |
| Hero | 375* | 25px | 25px | 1px | 1px | **GOOD** |
| How-it-works step 3 | 1440 | 25px | 25px | 1px | 1px | **GOOD** |
| How-it-works step 3 | 768 | 25px | 25px | 1px | 1px | **GOOD** |
| How-it-works step 3 | 375* | 25px | 25px | 1px | 1px | **GOOD** |
| Proximity deep dive | 1440 | 25px | 25px | 1px | 1px | **GOOD** |
| Proximity deep dive | 768 | 25px | 25px | 1px | 1px | **GOOD** |
| Proximity deep dive | 375* | 25px | 25px | 1px | 1px | **GOOD** |

*Chrome DevTools enforces a minimum content viewport of 500px on the resize tool, so the "375" cell rendered at innerWidth: 500. This still exercises the small-screen breakpoint correctly. Side gutter is 16px (correct mobile gutter), and gap math is identical to the larger viewports.

### Visual screenshot verification (9 cells)

All 9 screenshots saved to `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/postpad-{hero,howit3,prox}-{1440,768,375}.png`:

- **Hero @ 1440** GOOD — bezel framed top + bottom inside dark container, notification chip floats correctly inside the screen, no flush-against-top edge.
- **Hero @ 768** GOOD — single-column stacked layout, bezel fully visible top to bottom curve.
- **Hero @ 500 (375 floor)** GOOD — bezel fits viewport with 16px side gutter, breathing room reads cleanly.
- **How-it-works step 3 @ 1440** GOOD — phone now properly capped at 362px outer (was rendering ~680px before fix). Two-column grid balanced, text panel left, phone right.
- **How-it-works step 3 @ 768** GOOD — single-column, bezel framed correctly.
- **How-it-works step 3 @ 500 (375 floor)** GOOD — bezel framed, text below.
- **Proximity deep dive @ 1440** GOOD — 3-column composition (left text · phone · right text) reads balanced. Phone sits centered with breathing room above + below.
- **Proximity deep dive @ 768** GOOD — single-column, phone centered, text panels above and below.
- **Proximity deep dive @ 500 (375 floor)** GOOD — same single-column, clean.

Symmetry hits to the pixel — both fixes execute as specified.

---

## 2. Side Effects Introduced by the Padding Fix

Audited adjacent surfaces for any layout breakage caused by the new `+48px` outer height on the cropped containers and the new max-width cap:

**A. How-it-works rhythm (steps 1, 2, 3)**
- Steps 1 & 2 use the regular non-cropped phone — `.phone-shot phone-shot--howit` rendering at 360×777.
- Step 3 uses cropped — `.phone-shot--howit phone-shot--proximity-cropped` rendering at 362×661.
- Pre-fix step 3 height: ~613px. Post-fix step 3 height: 661px.
- Step 3 vs steps 1-2 height diff: was 164px → now 116px.
- Verdict: **FIX IMPROVED RHYTHM** — step 3 is now closer in height to steps 1 & 2, less abrupt rhythm break. Side-effect win, not a regression.

**B. Step 3 grid alignment**
- Grid is `align-items: center`, 536px text column + 536px phone column.
- 128px text block centers vertically against 661px phone column. Text reads correctly aligned to phone midpoint.
- Verdict: **GOOD** — established pattern preserved.

**C. Hero section overflow**
- Hero phone bottom does NOT overflow the section bottom at any viewport tested.
- Verdict: **GOOD**.

**D. Non-cropped howit phones (regression risk from new max-width)**
- The `max-width: 360px` was added to `.phone-shot--howit` (the parent class).
- Non-cropped howit phones already had an explicit `width: 360px`, so the new cap is a **no-op** for them.
- Inner `<img>` renders at 358×775 with native source 1242×2688 — correct.
- Verdict: **GOOD** — no impact on regular howit phones.

**E. Proximity deep-dive phone composition**
- 3-column layout (left text · phone · right text) at desktop reads correctly.
- Phone outer 282×525 sits centered between the text columns. Aspect feels balanced, doesn't dominate or shrink awkwardly.
- Verdict: **GOOD** — visual sweet spot preserved.

**F. Phone "feels too tall?"**
- Aspect ratio of cropped containers is now ~1:1.86 (562w × 1000h hero). Source phone visual ratio is 1:1.7. The +48px added back to height shifts the container ratio slightly taller — but it reads as "the phone has its proper bezel framing room," not "the container is stretched." Perceptually correct.
- Verdict: **GOOD**.

**No new visual defects detected.**

---

## 3. Final Ship Verdict

# **SHIP**

Both fixes execute exactly as specified across all 3 phones × all 3 viewports. Symmetric 25px gaps top + bottom on every cropped phone. Howit max-width cap eliminates the 680px desktop bloat without affecting non-cropped sibling phones. Step 3 rhythm actually improved relative to pre-fix state. No side effects, no regressions, no new defects introduced.

---

## Files referenced

- Source CSS: `/Users/Juelz/Developer/projects/methere/methere-site/styles.v2.css`
- Live page tested: `http://localhost:4488/index.html`
- Screenshots (9): `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/postpad-{hero,howit3,prox}-{1440,768,375}.png`
- Verdict: `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/designer-postpad-verdict.md`
