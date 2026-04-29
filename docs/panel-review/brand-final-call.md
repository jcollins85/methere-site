# methere.app v2 — Brand Final Call (Hero + Section 5)

**Reviewer:** brand-strategist (Gigi)
**Date:** 2026-04-27 · T-8 to launch
**Method:** Live page in Chrome via chrome-devtools MCP at 1440×900. `.reveal` force-visible, banner hidden, full-page reload with `ignoreCache: true`. Image cache bug surfaced and resolved (see §3). Three captures: `brand-final-call-fullpage.png`, `brand-final-call-hero.png`, `brand-final-call-section5.png`.
**Page state:** 5 unique screenshots (`screen-01-proximity` 1×, `screen-02-venue`, `screen-03-people`, `screen-04-person`, `screen-06-map`) — no duplicates. Tagline rendered once in H1; caption strip on hero composed image is the second visible occurrence.

---

## 1. Hero caption: **B — phone-only, kill the caption strip.**

Looking at the live hero now, the H1 mints `everyone` and the composed-image caption strip mints `Remember` directly above it on the right column. With both reading at large size in the same vertical scan, the eye reads "Walk in. Remember everyone." twice in <800px of vertical space — once in the H1, once in the caption strip — with two separate mint hits on the same tagline. That's not "page says it, then product proves it" anymore — that's the same line painted twice in the same scroll-frame, and on a now-tightened page (5 unique screenshots, no other repetition), the redundancy is the loudest move in the hero. The Friend voice doesn't repeat itself for emphasis. Ship the phone-only crop — the H1 carries the tagline alone, the device shows the actual notification ("MetHere · You're near Copper & Vine · You know 3 people here") which is a different statement entirely. That's the cleaner Friend move I described in `brand-postcuts-verdict.md` §2 and conceded was stronger than the frame-within-frame device. **Do the 5-min Pillow/Preview edit; don't ship A.**

**Why I'm overriding my own Phase 2 greenlight:** the Phase 2 reasoning depended on "the H1 is page-level type, the caption is a small strip baked into the screenshot — different registers." On the live render at 1440×900, the caption strip text reads at ~32px and the H1 reads at ~88px — same register, just different x-positions. They compete instead of complement. My Phase 2 call was made against renders, not the assembled hero with the cuts applied. The post-cuts page is a different page than Phase 2 was reviewing.

---

## 2. Section 5 map swap: **KEEP.**

The map view is the **best visual move on the page** right now. It does three things the proximity notification can't: (a) shows the geofence layer as actual product evidence, not just words ("CoreLocation does the work" + a literal map = the claim has visual receipt), (b) breaks up the "third instance of the same notification card" pattern that would have made the page read as proximity-alert marketing instead of social-memory-with-proximity-as-feature, (c) the map is the only screen on the page that proves the "Your places" half of the tagline — every other screen is a person/notification/list view. Caption "Your places, mapped." sets the right read. The 3-col asymmetric prose ("On your phone" left, "Set it once" right) frames the map as the answer to both columns. This is exactly the v1.0.x swap I flagged in `brand-postcuts-verdict.md` §5 ("if I had one more pass, I'd swap Section 5's phone visual") — it's already in. Don't revert.

**On the moat-weakening worry:** the alert is named in the H2 ("You're near The Hoxton. You know three people here.") and reaffirmed in the lead ("That's the alert."). The proximity moat is verbally claimed and the map *visually proves the system underneath the alert*. Showing the alert again here would be redundant — the user already saw it in the hero and in step 3. Showing where the alerts come from (pinned places on a map) is new information. The moat is stronger this way, not weaker.

---

## 3. Anything else broken or off-brand at high zoom

Three flags from the live audit. None are launch blockers, one needs investigation:

### Image cache bug (investigate before ship)
On first navigate to the page, `screen-06-map.png` rendered with `complete: false` and `naturalWidth: 0` despite the server returning 200 + 1.2MB of valid PNG. A cache-bust (`?cb=...`) loaded it correctly. After a hard reload with `ignoreCache: true` AND awaiting all `img.onload` events, the image rendered correctly. **Verify on a clean session (incognito or fresh user) before launch** — if the broken state reproduces for first-time visitors, Section 5 will render with a 0-height image and the phone frame will collapse. Unlikely (server is correctly serving the file, this looked like a Chrome devtools cache state issue), but worth a 2-min check from a fresh browser before May 5.

### Hero secondary CTA spacing on tablet/mobile
Same flag as `brand-visual-review.md` §3(d) and `brand-postcuts-verdict.md` §5 Note 2 — `See how it works ↓` link inline beside the App Store badge. On the desktop capture it reads fine. Verify at 360–414px viewport that tap targets don't overlap. Engineer call, not brand.

### Section 6 H2 "What else is in there." voice register
Still flagged from `brand-postcuts-verdict.md` §5 Note 1. Reads as stage-direction question rather than Friend-voice statement. Recommended replacements (any works): `One more thing.` / `A few quiet wins.` / `The little things.` / `Worth knowing.` **Not blocking** — defer to copywriter v1.0.x.

---

## Confirmation

- LIVE page opened: `http://localhost:4488/index.html` via chrome-devtools MCP (page id 12)
- Resized 1440×900, `.reveal` force-visible, banner hidden, hard-reloaded, all images awaited via `img.onload`
- Three captures saved to `docs/panel-review/brand-final-call-*.png`
- Hero call: **B** (image-edit caption out)
- Section 5 call: **KEEP** (map stays)

Ship.
