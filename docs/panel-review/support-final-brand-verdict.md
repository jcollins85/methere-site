# Support Page — Final Brand-Floor Verdict

**Date:** 2026-04-27
**Reviewer:** brand-strategist (Era One)
**URL inspected (live):** http://localhost:4488/support.html
**Viewport:** 1440 × 900
**Method:** chrome-devtools MCP — head meta inspection, computed styles, HEAD requests for asset existence, full-page + viewport screenshots, cross-page cohesion check against homepage
**Confirmation:** YES — opened the live page (not the static file). Pages 15–21 on localhost:4488/support.html, page 22 homepage for cohesion ref.

**Screenshots:**
- `docs/panel-review/support-final-brand.png` (full page)
- `docs/panel-review/support-final-brand-top.png` (above-the-fold)
- `docs/panel-review/homepage-cohesion-ref.png` (homepage hero for cohesion comparison)

---

## 1. Eight Brand Violations — RESOLVED COUNT: **8 / 8**

| # | Violation | Status | Evidence |
|---|---|---|---|
| 1 | Missing `<meta name="description">` | RESOLVED | `"Help with MetHere on iPhone — backups, purchases, nearby alerts, map view, share cards, voice notes, and more."` |
| 2 | Missing OG meta (og:title, og:description, og:image, og:url, og:type, og:site_name) | RESOLVED | All 6 OG tags present + `og:image:width=1200`, `og:image:height=630` |
| 3 | Missing Twitter Card meta | RESOLVED | `twitter:card=summary_large_image`, `twitter:site=@MetHereApp`, `twitter:title`, `twitter:description`, `twitter:image` all present |
| 4 | OG image asset broken / missing | RESOLVED | `https://methere.app/og-image.png` → HEAD 200 OK, `image/png`, 41,571 bytes |
| 5 | Favicons missing (favicon.ico, favicon-32, apple-touch-icon, android-chrome-192/512) | RESOLVED | All 5 favicon assets HEAD 200 OK |
| 6 | `apple-itunes-app` missing | RESOLVED | `apple-itunes-app="app-id=6757836312"` present |
| 7 | Dead `.panel` class wrapping FAQ region | RESOLVED | 0 elements with `.panel` class, 0 orphan `.panel` CSS rules in stylesheet |
| 8 | H2 size yellow-flag (was 28+ px feeling like Zendesk knowledge-base header) | RESOLVED | Single H2 "Frequently Asked Questions" computes to **25.5px / weight 700 / cream `#E8E4DF`** — proportionate to a supporting page, not shouting |

All eight resolved. Phase 1 chrome is clean.

---

## 2. Brand-Rhythm at Assembly — **GOOD**

**The 28-FAQ scroll holds brand chrome. It does not tip into Zendesk register.**

Evidence:
- **Type scale is disciplined.** Three tiers cleanly separated:
  - H1 hero: 56px / 800 / -0.6px tracking — page-anchor weight, not landing-page weight (88px on home)
  - H2 single-use "Frequently Asked Questions": 25.5px / 700 / cream — gentle section anchor, not a Zendesk shout
  - Category eyebrows (7 total): 12px / 700 / 0.8px tracking / uppercase / dim `#555060` — matches the "SUPPORT" eyebrow above H1, matches "IPHONE · SOCIAL MEMORY" on home. Same eyebrow language across the page-set.
  - Question titles (28 total): 20px / 700 / sentence-case / cream — reads as conversational, not bullhorn

- **Mint discipline holds.** Only **4 elements** in the entire DOM tree use mint as text color, and **0 elements** use mint as background. Mint appears as: nav pin, contact email, brand wordmark accent, one inline link. No mint cards, no mint chips, no mint backgrounds. This is exactly the "mint is a signature, not a coat of paint" rule from `feedback_conversion_surfaces_are_chrome.md` applied to a content surface.

- **Card language matches v2.** Each FAQ item: 24px border-radius, 24/32 padding, `#1A181E` elevation on `#111014` body, hairline border `#242228`. These are the same tokens as in-app surfaces. No Zendesk-style accordion chevrons, no white cards, no "Was this helpful? thumbs up/down."

- **Asset language is brand-correct.** Plus Jakarta Sans 800 for the H1, Plus Jakarta 700 for question titles, body cream `#E8E4DF` on warm dark `#111014`, App Store badge as the only credibility chrome — all matching the homepage and the in-app brand.

**One soft note (not a violation, not a SHIP blocker):** The category eyebrows at `#555060` may render too faint as the user scrolls — they're working but quiet. If a user's eyes glaze on the long scroll, the 7 category breaks may not register as orientation. Tracking-only fix post-launch: bump category eyebrow color from `#555060` to roughly `#8A858F` (the same dim-text token already used elsewhere on the page) to give them more visual rhythm without breaking discipline. Optional. Not a SHIP blocker.

---

## 3. Cross-Page Cohesion (Homepage ↔ Support) — **GOOD**

**Support reads as the same brand. It does not drift to a sub-page.**

Evidence comparing homepage and support side-by-side:

| Token | Homepage | Support | Match |
|---|---|---|---|
| Body bg | `rgb(17, 16, 20)` (`#111014`) | `rgb(17, 16, 20)` | YES |
| Body text | `rgb(232, 228, 223)` (`#E8E4DF`) | `rgb(232, 228, 223)` | YES |
| Body family | Plus Jakarta Sans | Plus Jakarta Sans | YES |
| Brand mint var | `#2DD4A8` | `#2DD4A8` | YES |
| Nav lockup | Mint pin + white wordmark, Home / Support / Privacy / Terms / X | Identical | YES |
| Eyebrow style | "IPHONE · SOCIAL MEMORY" (12px uppercase, 0.8px tracking) | "SUPPORT" + 7 category eyebrows (same spec) | YES |
| H1 family / weight | Plus Jakarta 800 | Plus Jakarta 800 | YES |
| H1 size differentiation | 88px (headline-grade) | 56px (page-anchor-grade) | INTENTIONAL — correct hierarchy. Marketing surface ≠ utility surface. |
| Mint use as accent | "everyone" word in poetic H1 | `support@methere.app` link | DIFFERENT but CORRECT — support is functional, not poetic; mint shouldn't decorate a functional page H1 |
| App Store badge | Present in hero | Present in hero | YES |

The support page reads unmistakably as the same product. The differentiation in H1 size and the absence of mint H1-accent on support is the right call: it signals "this is the help page, not the marketing page" without breaking the brand floor.

---

## 4. Ship Verdict: **SHIP**

Phase 1 chrome is fully resolved (8/8). Phase 2 content (28 FAQs in 7 categories) holds brand rhythm at the assembled scale — cards match v2 in-app language, mint discipline survives a long content scroll, eyebrow + heading hierarchy reads as brand chrome not Zendesk register. Cohesion against the homepage is tight; nav, type, color tokens, and asset language all align. The page-set reads as one product.

**One post-launch tracking note** (not blocking): consider lifting the 7 category eyebrows from `#555060` → `#8A858F` so they orient the eye on the long scroll. Cosmetic only.

**Confirmation of live-page execution:** Yes — opened `http://localhost:4488/support.html` via chrome-devtools MCP `new_page`, resized to 1440×900, ran reveal script, fetched HEAD on all 5 favicons + OG image, inspected computed styles on H1/H2/H3/body, captured both viewport and full-page PNG, and opened the homepage in a separate tab to verify token cohesion. Not a static file inspection.

---

## Remaining Brand Violations: **None.**
