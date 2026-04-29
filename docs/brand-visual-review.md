# methere.app v2 — Brand Visual Review

**Reviewer:** brand-strategist (Gigi)
**Date:** 2026-04-27 · T-8 to launch
**Reviewing:** `design-spec-v2.md` + `render-hero.html` + `render-privacy.html` + `render-plans.html`
**Floor:** `brand-direction-v2.md` (Phase 1 brand direction).
**Method:** Chrome DevTools rendering at 1440×900 desktop and 390×844 iPhone, full-page screenshots, computed-style mint audit on plans render, hero patched with the real `screen-01-proximity.png` to evaluate the frame-within-frame echo in actual pixels.

---

## 1. Top-line verdict

**GREEN-LIGHT engineering with three small revisions.** The designer held the brand floor with discipline, the renders look like the inside of the app (which is the test), and nothing in the spec triggers a do-over. The three revise notes below are surgical — none block engineering from starting Foundation Layer + the easy sections immediately. Designer can dispatch copywriter Phase 3 in parallel.

If engineering wants a single one-line gate: **build sections 0, 3, 6, 7, 8, 10 today. Pause sections 1, 2, 4, 5, 9 until I sign off the three revises below.** That's the cleanest split.

---

## 2. Per-question verdicts (designer's 5 open items)

### Q1 — Hero composed-screen redundancy: **KEEP, with one tweak.**

I need to walk through what I actually saw, because this is the one I was prepared to kill.

When you read the render with the broken image, your eye does the H1 first and the device second — they live in different visual registers (page-level type vs. small caption baked into the screenshot strip). With the actual screenshot patched in at desktop and at 390px, the echo doesn't read as duplication, it reads as **the page saying the line, then the product proving it.** The H1 is the thesis, the device is the receipt. That's a brand-positive move — it mirrors how an App Store visitor sees it (badge tap → screenshot caption shows the same line). Same psych logic as the receipts-not-metrics Stats hero.

**Three things that have to be true for it to keep working** (these are the conditions of the keep):

1. **The hero device must be Mode A (composed S1 with caption strip on top), full size — not a phone-only crop.** If engineer reaches for a Mode B crop here for any reason, the echo collapses into a single-line redundancy and we lose the move. Mode A is load-bearing.
2. **No mint glow, no halo, no tilt on the device frame.** Confirmed already in spec C5. Don't let any future polish revisit this.
3. **The H1 word that goes mint is `everyone` — not `Remember`.** The render has this right. Reason: the screenshot caption already mints `Remember`. If the H1 also minted `Remember`, we'd have two mint hits in the same vertical scan, both painting the same word. By minting `everyone` in the H1 and letting the device caption mint `Remember`, we get the echo without the doubled mint hit. Designer noted this in §C3 mint distribution (`everyone` for hero, `Remember` for final CTA reprise) — the move is correct, just naming why it works so a future iterator doesn't "fix" it.

**The tweak:** add 4–8px of optical breathing room between the H1 and the device on tablet (768–1023). At desktop the 48px gap reads fine. On the 390px mobile capture I just shot, the device sits comfortably below the CTA cluster with plenty of air. The middle range (iPad portrait) is the spot that'll feel cramped if engineer doesn't catch it. Spec already says align-items: center with `var(--space-7)` gap — verify visually at 800–900px width before signing off.

**Verdict:** Keep the composed S1. Engineer ships as spec'd. No alternative needed.

---

### Q2 — Privacy `×` mark: **KEEP, with the opacity tightened.**

I was 60/40 toward dropping it before I saw the render. After seeing it at desktop and mobile, I'm 75/25 toward keeping it.

What the × actually does in the render: it acts as a typographic punctuation mark that visually rhymes with the "No" in each headline. It's not iconography in the System icon-set sense — there's no icon library, no svg, no rendered glyph trying to "represent" anything. It's a literal × character set in the same display family as the rest of the page. That reads as type, not chrome.

What it earns: scanability. Without the ×, the four cards become four near-identical text blocks ("No account / No sync / No cloud / No profile") and your eye loses rhythm. The × gives each card a visual hit-point above the headline, so the reader's eye snaps to the refusal pattern.

What I'd change: **drop the opacity from 0.6 to 0.4 (or shift to `--mint-tint-20` solid color).** At 0.6 in mint at 28px, the × is louder than I'd like — your eye lands on the × before the headline on first scan. The × is supporting the headline, not competing with it. At 0.4 it recedes into the background of the card and lets the H3 carry. The render shows this is a small but real issue: each refuse-mark is a mint hit, and four mint hits stacked vertically (two per row, two rows) starts to read minty-grid rather than typographic-spec. Lower the opacity, regain the discipline.

Engineer change: `.refuse-mark { opacity: 0.4; }` (was 0.6).

**Verdict:** Keep × marks. Drop opacity 0.6 → 0.4. No A/B test needed — ship the lower value.

---

### Q3 — Header `backdrop-filter: blur(12px)` carve-out: **DENY. Use solid `#111014`.**

I'm holding the floor here.

The brand-direction §1.1 explicit ban list reads "glassmorphism / `backdrop-filter`" — not "glassmorphic panels." The rule was written knowing exactly the carve-out the designer is now requesting. The reason it's banned isn't aesthetic preference, it's category positioning: every Notion-template, Arc-clone, Linear-clone landing page in the iOS-app SaaS tier uses sticky-blur-header. The moment we introduce it, we move from "this looks like the inside of a quiet app" to "this looks like a 2024 iOS-launch landing-page template." That's the exact category we're refusing to be in.

Designer's argument is that the blur is narrowly scoped — no panel chrome, no glow. That's true and I respect the precision of the ask. It's still no. The carve-out logic ("it's not really glassmorphism if X") is how brand floors quietly erode into the next round's spec. Once we have one blur use, the next designer says "well there's already one, what's one more on the plans tile hover state" and so on. The cleanest ruling is the categorical one: zero `backdrop-filter` on this page.

**The fix is fine.** Solid `rgba(17, 16, 20, 0.95)` (95% opacity, NOT blur) on the sticky header lets a hairline of the page show through under the nav as you scroll, which gives just enough visual cue that there's content moving behind it. No blur, no flat-look complaint.

```css
nav {
  position: sticky;
  top: 0;
  background: rgba(17, 16, 20, 0.95);
  border-bottom: 1px solid var(--border-subtle);
}
```

The 1px hairline border at the bottom of the nav is the second small move that solves the "header reads flat" worry without invoking blur. Together, the slight transparency + hairline gives the nav presence without category-bleed.

**Verdict:** Reject blur. Ship solid `rgba(17,16,20,0.95)` + 1px `--border-subtle` hairline.

---

### Q4 — Section 7: 4 vs 5 refusal cards: **4 cards approved. Hold the line.**

Designer is right and the recommendation is correct. The reasoning matters enough to log here so a future copy edit doesn't reopen it:

- **ASC privacy nutrition label** has room only for declarative rows ("Data Not Collected" / "Data Linked to You" etc.). No footnote space. The 5th "No tracking" card on screen 5 of the App Store screenshot strip is fine because it sits inside an Apple-native UX where users understand the tradeoffs of nutrition-label simplification.
- **The website is the asymmetric-info surface.** Visitors arriving cold from a tweet will read "No tracking" as "no analytics whatsoever." We ship Firebase Analytics. The nuance — anonymous events, no PII, drift-checked, production-verified — does not survive compression to a card headline. So a website "No tracking" card is either misleading or footnoted-into-meaninglessness.
- **The fix is exactly what designer spec'd.** 4 cards on the home page, full Firebase Analytics disclosure on `/privacy.html`, and a `Privacy details →` link below the grid that anyone who cares about "but what about analytics" can tap to. That deflection IS the conversion goal #2 per growth funnel — the nuance-seeker becomes a privacy-page reader, which is the right outcome.

The ASC↔website asymmetry is not a brand inconsistency. It's a surface-appropriate level of detail. ASC is the elevator pitch, the website is the brochure. Different rooms, different volumes.

There's a memory rule on this exact class of mistake — `feedback_privacy_copy_fact_check` from earlier this week. I'm not letting us regress.

**Verdict:** Ship 4 cards. Add `Privacy details →` link as spec'd. Update `/privacy.html` body to honestly explain the analytics setup before May 5 (analytics-specialist + copywriter joint task — this is on my radar for the Phase 3 brief, see §7 below).

---

### Q5 — Section 5 (Proximity) 3-col layout (left-prose | phone | right-prose): **GREEN-LIGHT THE 3-COL, with engineer authority to fall back to 2-col if it doesn't land in 30 minutes.**

Section 5 is the moat. The proximity alert is the feature nobody else has — Section 5 is where we sell that, and the whole IA is built around "this section is the deepest pause on the page." The 3-column phone-center-prose-flanking layout earns more visual weight than a standard alternating row, and weight is exactly what this section needs.

Spec'd correctly: option A is the ambition, option B is the safety net, designer already gave engineer permission to fall back. That's the right shape of the call — designer didn't lock us into a layout we can't escape from.

**My addition:** put a 30-minute timer on it. If at minute 30 of building Section 5, engineer's option A doesn't have the H2 + lead reading clean above the row and the phone+flanking-prose row balancing in the eye, fall to option B (single phone-right alternating row, slightly larger phone). Don't burn an hour iterating. Section 5 prose is the pitch — the layout is the frame. We can ship the pitch in either frame.

**One pre-emptive note for engineer:** the flanking prose columns at desktop should NOT be equal-width. Spec doesn't specify. My read: left-column should be the "what it is" (~3 paragraphs of moderate density) and right-column should be the "why it works" (3 short bullets, more whitespace). If engineer makes them equal width with equal content density, the eye gets lost between two prose blocks of identical visual weight on either side of a phone. Asymmetry in the prose creates a reading direction (eye lands on phone → reads left detail → moves to right summary). I'd spec it as `2fr 1.5fr 1fr` — phone center, denser prose left, lighter prose right.

**Verdict:** Approve 3-col. Engineer has 30-min iteration budget. Fall to 2-col without escalating if the time runs out. If 3-col ships, prose columns are asymmetric (denser left, lighter right) — this isn't a brand floor, it's a strong recommendation.

---

## 3. Mint discipline audit

I painted four specific mint instances flagged in the brief. Computed-style audit on the plans render confirmed each. Here's the call on each:

### (a) Hero "everyone" word colored mint — **ON. Correct.**
Renders sharp at 1440 and 390. The mint sits on the payoff word per brand-direction §1.3. The mint hue at #2DD4A8 against the warm off-white H1 reads as the neon sign — exactly the brand's load-bearing color move. No change.

### (b) Plans Annual highlight + "14-DAY FREE TRIAL" badges — **ON, with one trim.**
Computed-style audit found 4 mint hits on the plans render at desktop:
1. Monthly tile `14-DAY FREE TRIAL` pill (mint text + mint-tint bg + mint border via the pill)
2. Annual tile mint border
3. Annual tile `Save 69%` text + mint border
4. Annual tile `14-DAY FREE TRIAL` pill (same compound hit as Monthly)

That's three separate mint moves stacked vertically inside one tile (Annual: border + Save 69% + trial pill). On the desktop render it reads as "this is the highlighted tile, here's why" — acceptable. On the **mobile render at 390px** the three mint hits compress into a tighter vertical column and the tile starts to read busier than the brand wants. You can see this in the rendered capture — Annual is the loudest visual element on the page at mobile.

**The trim:** drop the second `14-DAY FREE TRIAL` pill from Annual. Keep it only on Monthly. Reason: Monthly is the spec-default trial entry point (lower commit, more reasonable trial framing). Annual doesn't need the trial pill because the value framing on Annual is the savings, not the trial. The two pills doubling the trial messaging across two tiles dilutes the move.

After the trim:
- Monthly: 1 mint hit (trial pill)
- Annual: 2 mint hits (border + Save 69%)
- Total page: 3 mint elements on plans, distributed across 2 tiles. Cleaner.

This is a Tier-2 call but designer flagged it themselves in the render note ("3 mint elements is borderline busy"). I'm calling it.

### (c) Privacy "Nowhere" word colored mint — **ON. Correct.**
Single mint hit in the H2, payoff word. Then 4 × marks in mint (subordinate hits at lower opacity per Q2 above). Manifesto reads as designed.

### (d) "See how it works" secondary CTA in mint — **ON, with one structural note.**
The secondary CTA (`See how it works ↓`) sitting inline beside the App Store badge in mint reads correctly at desktop — the badge is the primary action (high contrast black), the mint text link is the secondary "tell me more" deflection. Brand-aligned.

**Structural note for engineer (NOT a brand call, flagging for awareness):** at very narrow widths (<400px) the badge + secondary link both fit in the row but the secondary link is very close to the badge — risk of mistapped tap targets on small phones. Either: (a) confirm there's enough horizontal padding to keep them visually distinct, or (b) stack them vertically on mobile (badge above, link below). Engineer to verify in sim or DevTools at 360px. This is a tap-target call, not a brand call.

### Net mint discipline call

- **Hero:** 1 mint instance (`everyone`) ✓
- **Plans (after trim):** 3 mint instances across 2 tiles ✓
- **Privacy:** 1 mint instance H2 (`Nowhere`) + 4 subordinate × marks at 0.4 opacity ✓
- **Across the page:** mint stays load-bearing, never decorative. The four mint H2 words across 10 sections (hero/proximity/privacy/final-CTA per spec C3 distribution) is the right count and the right placement.

**Mint discipline overall: PASS.** Designer held the floor. The two trims above (× opacity, second trial pill) are tightening, not redirecting.

---

## 4. Type scale audit

I evaluated rendered type at 1440px and 390px viewports.

### Hero H1 weight + tracking
Rendering at clamp(48px, 8vw, 88px) at desktop hits ~88px ExtraBold with -1.5px tracking. At 390px mobile, it scales to ~48px. **Both renders are correct and correct-feeling.** The negative tracking is doing the brand's voice work in type — that tightness is the difference between MetHere's voice and a generic SaaS hero. ExtraBold (800) at this size is the right weight; Bold (700) would have read as not-quite-confident.

One thing I want flagged for engineer: at the desktop scale, the `everyone` mint word is the largest mint hit on the page. That's intentional and correct. If engineer ever needs to scale the hero down for a specific viewport experiment, **don't disproportionately shrink the mint word** — keep it at the same size as the surrounding type. The mint earns its weight from being read at the same scale as the headline, not from being highlighted in a smaller font.

### Section H2 hierarchy
Privacy and Plans H2s render at clamp(32px, 4.6vw, 48px) ExtraBold with -0.6px tracking. Both read as authoritative-but-quieter than the H1, which is the correct hierarchy. The "Start free. Upgrade if you need more." H2 in the plans render reads with strong period-stop pacing — the brand's voice is coming through the type, not just the words.

**Verdict:** Section H2 scale is correct. Don't let it creep larger — the H1 has to clearly outscale every H2 below it for the page hierarchy to feel right.

### Body text legibility on dark
17px body / `#E8E4DF` warm off-white / line-height 1.55: legibility is solid at both viewport sizes. The warm off-white over `#111014` is the right contrast — pure white body would have been too sharp; this reads like the inside of the app at rest. No change needed.

### Plans tile micro-type
Plan-name (18px ExtraBold), price (32px ExtraBold), feature list items (15px Medium), plan-note (13px Medium). Hierarchy reads cleanly at desktop. At 390px the plan-name vs price relationship still reads — the price out-scales the name by ~78% which keeps the price as the primary read.

**One micro-type concern:** the `<span class="period">` ("/ mo", "/ yr", "once") at 14px Medium next to the 32px price reads slightly underweight. At 14/32 the period text becomes a hint rather than punctuation. Bump to 16px Medium or 14px Bold (700). I'd go 16/Medium — keeps the weight but adds presence. **Engineer change: `.plan-price .period { font-size: 16px; }`** (was 14px).

**Verdict:** Type scale renders correctly. One micro-tweak (period span 14→16px). The bigger-picture call is that the type is doing the brand's voice work on this page, which is exactly what was asked for.

---

## 5. Asset language audit

Audited the spec's asset list (§"Asset List Engineer Pre-Build Checklist") against the brand floor (§1.3 forbidden visuals, memory rule `feedback_dont_invent_real_app_assets`).

### Compliant assets (all spec'd correctly)
- `lockup-horizontal-mint-on-dark.svg` for header — canonical brand mark, correct surface. ✓
- `lockup-vertical-mint-on-dark.png` for footer — one signature use of vertical lockup per page, consistent with brand-assets README. ✓
- `screen-01-proximity.png` for hero — real ASC composed screen, no fabrication. ✓
- Phone-only crops from `screen-02`, `screen-03`, `screen-06`, `screen-07` for demo strip / how-it-works / what-else — real sim captures, cropped not composed. ✓
- Favicon set from `brand-assets/web/` — replaces v1 `MetHere-ios-appLogo-Current.png`. ✓
- OG image from `brand-assets/web/og-image.png` — replaces v1 `app-hero-remember.png`. ✓
- Plus Jakarta Sans self-hosted from app font directory — fixes the v1 Google Fonts hotlink violation. ✓

### One asset call that needs Julian's go-ahead before engineer ships
- **`phone-add-person.png` (QuickAdd open state) — does NOT exist.** Designer flagged this. Memory rule `feedback_dont_invent_real_app_assets` prevents fabrication. Two paths:
  - **Path A (designer recommends, I agree):** capture one new sim screenshot of the QuickAdd open state. ~15 minutes in sim.
  - **Path B (fallback):** use `screen-03-people.png` cropped for demo strip frame 1. Loses the "save" verb in visuals, weaker narratively, but uses an existing canonical asset.
- **My call:** Path A. The 15-minute capture cost is real but small, and the QuickAdd is the highest-leverage frame in the demo strip — it's the "huh, that's the actual UI" moment that confirms App Store visitors. Don't lose it to a fallback.
- **Engineer task before building Section 2:** confirm with Julian that he has 15 min before May 5 to set up the sim and capture the QuickAdd state per spec at lines 1192–1199.

### Asset language compliance: PASS
No stock photos, no isometrics, no fabricated UI in the spec. The only "new asset" is a real sim capture of an existing app state. Designer respected the floor.

---

## 6. Voice/copy compliance in the rendered prose

Most copy is placeholder for Phase 3, but several locked strings already appear in the renders. Audited those.

### Em-dash count
Across all three renders: **zero em-dashes in user-facing copy.** ✓ (The spec doc itself uses em-dashes liberally as designer's internal punctuation — that's fine, the spec isn't shipped copy. The locked strings inside the renders are all period/comma/colon.)

### AI-tell vocabulary
Scanned all locked strings for the kill list (`magic`, `unlock`, `discover`, `got the X it needed`, `unleash`, `seamlessly`, etc.):
- Hero subhead (placeholder): "MetHere remembers the people you meet at the places you go back to, and pings you when you're nearby again." — no AI-tell vocabulary. Period-comma usage correct. 21 words, within slot constraint.
- Plans H2: "Start free. Upgrade if you need more." — psych-locked, brand-clean.
- Privacy H2: "No account. No social feed. Nowhere else." — brand-clean.
- All four refuse cards: brand-clean.
- All four trust microlines / plan notes: brand-clean.

One small one to flag: the plans `Cancel anytime.` micro-note under Monthly. Not on any kill list, but it's one of those phrases that every SaaS landing page uses, and the brand voice doc has a pattern of avoiding category-cliché reassurances. Alternative would be either: (a) drop it and let the absence carry the message, since "Always free." under the Free tier is doing the work of "no commitment vibe," or (b) replace with `No commitment.` — same meaning, slightly less SaaS-stamped.

This is a Phase 3 copywriter call, not a brand-floor call. Adding to §7 below.

### "The Friend" voice register
Locked strings ARE on-voice. The trust microline `On your device. No account.` is the strongest 5-word phrase on the page — short, declarative, refusal-positive. The plans H2 "Start free. Upgrade if you need more." has the same register. The brand voice is intact.

### Already-locked-but-off-voice flags
**None.** Every locked string in the spec passes voice audit.

**Voice/copy compliance overall: PASS.**

---

## 7. What needs to land in the copywriter Phase 3 brief BEFORE dispatch

The spec already has a strong Phase 3 brief embedded (lines 1330–1380). I'm adding/elevating five items:

1. **Carry the em-dash ban as a hard constraint, not a preference.** Memory rule says "Julian's copy calls override specs." Once Julian rejects a phrase, it carries forward. Em-dashes in shipped copy are a known no — copywriter brief should state it as the first voice constraint, not buried in a list of "voice constraints."

2. **Tag the "Cancel anytime." micro-note as a refresh candidate.** Not blocking, but flag for copywriter to consider. Alternative: `No commitment.` or drop entirely.

3. **Pre-emptively kill these phrases from any drafts:** `Privacy-first` (already in voice doc kill list), `Made for the modern…`, `Powerful yet simple`, anything with `seamlessly` or `effortlessly`. Copywriter should have these pinned at the top of their workspace because they're the phrases that creep back in under deadline pressure.

4. **The category plant `It's a social memory app.` is required to appear once.** Brand-direction §3.2 lists this as a MUST. Spec doesn't have it explicitly placed — copywriter to find the right slot, my recommendation is the demo-strip section lead OR the Section 5 lead, NOT the hero (the hero has its own work to do). Flag this in the brief.

5. **The Section 9 final CTA H2 is a fork.** Designer offered two:
   - Echo: `Walk in. Remember everyone.` (mint on `Remember`, different from hero's `everyone`)
   - Decisive close: `That's it. That's the app.`
   - **My recommendation for the brief: ship the echo (`Walk in. Remember everyone.` mint on `Remember`).** The decisive close is brand-on but it lacks the page-architecture reward of the echo — when you reach the final CTA, hearing the same line you read at the top creates the "yes, that's the thing" closing beat. Echo also gives us a second mint moment on the strongest word in the brand vocabulary. Copywriter can A/B post-launch if metrics suggest the decisive close converts better, but for May 5 launch, ship the echo. Flag in brief.

6. **Brand-strategist + analytics-specialist joint task before May 5: rewrite `/privacy.html` to honestly explain the Firebase Analytics setup.** Currently the privacy page is v1 era. Per Q4 above, the 4-card website grid only works if `/privacy.html` carries the full nuance. This is its own work item — flag in brief that copywriter Phase 3 needs to know analytics-specialist is sourcing the truthful technical description, copywriter shapes it into voice. Don't let this slip.

---

## 8. Other items I'm flagging from the renders or spec

Things that don't fit the questions above but I'd be remiss not to call:

### Tap target on hero secondary link
Per §3(d) above — `See how it works ↓` text link inline beside the App Store badge at <400px viewport may have insufficient spacing. Engineer task: verify at 360px sim, either add horizontal padding or stack vertically on mobile. Tap-target accessibility, not brand.

### `period` span in plan price
Per §4 above — `.plan-price .period` at 14px Medium reads underweight against 32px ExtraBold price. Bump to 16px Medium. Engineer one-line CSS change.

### Plans tile mint-pill duplication
Per §3(b) above — drop the second `14-DAY FREE TRIAL` pill from Annual, keep only on Monthly. Brand discipline trim.

### `×` mark opacity
Per Q2 above — drop from 0.6 to 0.4. Tightens mint discipline on the privacy section.

### Header backdrop-filter
Per Q3 above — reject blur. Use solid `rgba(17,16,20,0.95)` + 1px `--border-subtle` hairline.

### Section 4 (How it works) alternating layout — no sign-off needed, but flag
Designer noted the alternating layout is the fiddly part of Section 4. Brand call: the alternating row is the right move — it creates rhythm and prevents the section from reading as a checklist. Engineer should test at the 1024px breakpoint where alternation can read awkward. Brand has no veto here, just confirming the call.

### Section 6 (What else) — 2x2 vs 4-row at desktop
Designer punted to engineer's call. **Brand recommendation: 2x2.** A 4-card row at desktop reads as a feature grid, which is the SaaS template trap. 2x2 reads as a manifesto block, same visual register as the 4-card refuse grid in Section 7. Repeating the 2x2 pattern across "what we do" (Section 6) and "what we don't do" (Section 7) creates page-level rhythm. Engineer: ship 2x2.

### OG image / meta tags
Per spec lines 1202–1223. The meta description string `Remember the people you meet at the places you go back to. MetHere pings you when you're nearby again. iPhone, on-device, no account.` is on-voice and well-constructed. Two flags:
- The `og:image` and `twitter:image` need to point to a real file at `/og-image.png` site-root. Engineer must verify `brand-assets/web/og-image.png` actually depicts the proximity moment before shipping. Spec already calls this out.
- JSON-LD `applicationCategory: LifestyleApplication` — keep as-is. Don't switch to "SocialNetworking" because we are explicitly not that.

### Footer credit line
`Made solo by Julian Collins.` — locked, no change. Rendering at 13px / 500 / `--text-tertiary` is the right register (quiet, not chest-thumping). Confirmed against brand-guidelines §6.4.

---

## 9. What goes back to the designer

Three small revises (no rewrites):

1. **Header treatment** — kill `backdrop-filter: blur(12px)`. Use solid `rgba(17,16,20,0.95)` + 1px `--border-subtle` bottom hairline. (Q3 above.)
2. **Privacy `×` opacity** — drop 0.6 → 0.4. (Q2 above.)
3. **Plans Annual tile** — remove the second `14-DAY FREE TRIAL` pill (keep only on Monthly). (§3(b) above.)

Plus three engineer-side micro-tweaks (not designer revises, just CSS notes):

4. `.plan-price .period { font-size: 16px; }` (was 14px) — readability on price.
5. Verify hero secondary CTA link tap-target spacing at 360px viewport.
6. Verify Section 1 hero device gap on tablet portrait (768–900px) — 4–8px more breathing room may be needed.

---

## 10. Per-section sign-off matrix for engineer

If engineer wants section-by-section authority to ship without re-checking with brand:

| § | Section | Status | Notes |
|---|---|---|---|
| 0 | Foundation tokens | GREEN | Build first. No changes from spec. |
| 1 | Hero | GREEN with note | Composed S1 keep. Mint on `everyone`. Verify tablet gap. |
| 2 | Demo strip | GREEN pending QuickAdd capture | Path A capture confirmed before build. |
| 3 | The Moment | GREEN | All copy locked. Strip italic from any inherited markup. |
| 4 | How it works | GREEN | Alternating layout approved. Test at 1024px. |
| 5 | Proximity deep dive | GREEN with budget | 30-min iteration on option A, fall to B if needed. |
| 6 | What else | GREEN | **Brand recommendation: 2x2 layout** (not 4-row). |
| 7 | Privacy | GREEN with revise | × opacity 0.6 → 0.4. 4 cards locked. |
| 8 | Plans | GREEN with revise | Drop second trial pill from Annual. Period span 14 → 16px. |
| 9 | Final CTA | GREEN | Echo recommended (`Walk in. Remember everyone.` mint on `Remember`). |
| 10 | Footer | GREEN | Vertical lockup signature use. As spec'd. |
| Header | C1 | REVISE | No `backdrop-filter`. Solid bg + 1px hairline. |
| Footer | C2 | GREEN | As spec'd. |

---

## 11. Phase 3 dispatch recommendation

**Designer can dispatch copywriter Phase 3 immediately.** The three revises above are CSS-level (not copy-level). Copywriter Phase 3 brief is unblocked. The only Phase 3 dependency I'm adding is the `/privacy.html` analytics rewrite (§7 item 6) — that's a parallel work item, not blocking the home page copy.

Engineer can begin Foundation Layer + Sections 3, 6, 7, 8, 10 today without waiting for any further sign-off. Sections 1, 2, 4, 5, 9 have brand notes above but no blocking revises — engineer judgment + the matrix above is sufficient.

**Net: GREEN-LIGHT engineering. Three small revises folded into the build, not blocking.**

---

*Review complete. Time spent: under 1 hour. If engineer or designer needs further calls during build, escalate via Gigi.*
