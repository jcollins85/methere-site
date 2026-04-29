# methere.app v2 — Funnel + IA Blueprint

**Owner:** Growth (Gigi) | **For:** Designer (Phase 2) | **Date:** 2026-04-27 (T-8) | **Status:** Phase 1 deliverable, opinionated, hand-off ready

> **Scope:** Section list, top-to-bottom, doing what work for which visitor. Not visuals (brand-strategist parallel), not psychology copy (user-psychologist parallel), not pixels (designer Phase 2).
>
> **Goal stack:** (1) App Store badge click, (2) support deflection, (3) "social memory" category plant. Everything below ladders to these.

---

## 1. Page IA — Sections, top to bottom

| # | Section | Goal (1 sentence) | Proof element | Action | Hits hardest |
|---|---|---|---|---|---|
| 1 | **Hero** | Land the "social memory + proximity alert" promise in 3 seconds and present the App Store badge before scroll. | One real-device shot of the proximity alert notification on a lockscreen (sim capture, NOT composed). | App Store badge (primary) + "How it works" anchor (secondary). | All four traffic types — this is the universal landing. |
| 2 | **The 3-second demo strip** | Show the magic in three frames before they scroll past. | 3 short captioned shots side-by-side: (a) save someone in QuickAdd, (b) walk past venue, (c) phone fires alert. | None — visual conviction only. | App Store click-throughs (low intent, want fast confirm) and direct/word-of-mouth (validation). |
| 3 | **The Moment** | Plant the empathy hook — make the visitor recognize themselves. | 3 scenario cards (gym regular, bartender, familiar face waving). Existing site nailed this; carry forward. | None. | Press/PR landings reading the page in narrative order. |
| 4 | **How it works** | Convert empathy into product comprehension in 3 steps. | Save → Auto-detected venue → Proximity alert. Real-sim screenshots, NOT mockups. | None. | All four. |
| 5 | **Proximity alerts (deep dive)** | Sell the differentiator nobody else owns; this is the moat. | Big real-sim shot of the alert + supporting copy: on-device geofencing, no cloud, set-and-forget. | None. | Press/PR (this is the headline-able feature) and search (long-tail "proximity reminder app"). |
| 6 | **What else is in there** | Round out the value picture without making proximity feel like the only feature. | 4 cards: smart venue detection, share cards, voice/photo notes, map view. **Not 5 themes (factual error in v1 site).** | None. | Direct/word-of-mouth visitors evaluating depth. |
| 7 | **Built by one person, in public** | Founder/rebuild story. Indie credibility + "the rebuild" narrative the launch campaign is leaning on. | Short paragraph from Julian + link to a tweet/PH post + maybe a v1→v2 before/after thumbnail strip. | Optional secondary: link to Julian's X. | Press/PR (HN/IH/PH visitors WANT this story) and indie-curious direct traffic. |
| 8 | **Privacy + what we don't do** | Trust signal block — explicit anti-positioning vs. category competitors. | 4 trust cards: no account, on-device, no feed, no ads. Carry the spirit of v1's section but reframe with "anti-positioning" copy. | "Privacy details" link to /privacy.html (deflection). | All four — privacy is universally read on launch traffic. |
| 9 | **Plans** | Show pricing transparently so price isn't a paywall surprise. | 4-tier visual: Free / Monthly $3.99 / Annual $14.99 / Lifetime $29.99. **14-day trial badge on subs. Free = 15 people + 5 alerts. NO place limit.** | App Store badge under pricing. | Direct/word-of-mouth + search. Press/PR less so (they don't make purchase decisions). |
| 10 | **Final CTA** | Last App Store badge, large and centered, with the rebuild tagline. | None — pure conversion surface. | App Store badge (primary) + Support link (secondary, deflection). | All four. |
| 11 | **Footer** | Utility nav + brand sign-off. | Standard. | Support / Privacy / Terms / X / hello@. | All four. |

### Sections that DISAPPEAR vs. current site

- **"5 Themes" feature card** — REMOVED. Factual lie (Mint Social is the only theme, locked). Replacing with truthful capability cards.
- **"Insights and stats" / "Milestones" feature cards** — DEMOTED into the rounded-out "What else" section. Standalone framing oversold them.
- **"Why MetHere" header** — REPHRASED. The "no feed / no social network / no ads" anti-positioning belongs adjacent to the privacy block, not as its own header. Both are about "we are not the thing you fear."

### Sections that ARE NEW vs. current site

- **Section 2 (3-second demo strip)** — gives App Store click-throughs the "is this the app I just tapped?" confirm without forcing them to read.
- **Section 5 (Proximity deep dive)** — current site buries proximity as Step 3 of "How it works." The competitive landscape proves this is THE moat (Beanotes tried it, killed it, Bename dormant, Remember App dead). Give it its own room.
- **Section 7 (Built by one person)** — entirely missing from v1 site. The launch campaign's #1 narrative bet is the rebuild story; the site needs to receive press visitors arriving from PH/HN/IH posts that promise that story.
- **Section 9 expansion** — current "Free / Pro" two-card with wrong limits replaced with truthful 4-tier.

---

## 2. Hero positioning

**3-second above-the-fold message:**

- **Eyebrow:** `iPhone · Social memory` (plants the category term Apple Search is going to index)
- **H1:** `Walk in. Remember everyone.` (locked subtitle, doing double duty — already proven in screenshots, App Store, and brand)
- **Subhead (one sentence, no em-dash):** `MetHere remembers the people you meet at the places you go back to, and pings you when you're nearby again.`
- **Trust microline below CTA:** `On your device. No account.`

**Primary CTA:** App Store badge. Standard Apple "Download on the App Store" black badge. Above the fold, right side or under headline depending on layout. Tracked as `app_store_click_hero`.

**Secondary CTA:** `See how it works` — anchor to Section 4. Text link, not a button. Don't compete with the App Store badge visually.

**Proof element next to headline:** A real-device sim capture of the lockscreen proximity alert ("You're near The Hoxton. You know 3 people here."). Hero media should be a **single phone**, lockscreen, alert visible. Not the v1 site's "places list" screenshot — that's the second-best moment, not the headline. The proximity alert IS the pitch in one image. (Brand-strategist will own the staging/framing decision; my IA call is the SHOT, not the styling.)

---

## 3. Conversion architecture

**App Store CTA placements: 4 total.**

1. **Hero** — primary, above the fold, immediate.
2. **End of "How it works" (Section 4)** — captures readers who got the comprehension and are ready.
3. **Below pricing (Section 9)** — captures readers who needed pricing transparency before clicking.
4. **Final CTA section (Section 10)** — captures readers who scrolled the whole page and want one more chance.

Rationale: 4 is the indie-iOS sweet spot. Two is too thin for a page with 11 sections; six gets pushy and reads as desperate. Each placement maps to a different reader-state (curious, comprehending, evaluating, decided).

**Pricing presentation: SHOW prices on the landing page.** Do not gate to App Store.

Rationale: hiding pricing is a SaaS pattern, not an indie iOS pattern. App Store visitors will see the price at click anyway — surprising them on the App Store after burying it on the site is a worse experience than showing it upfront. Showing $3.99/mo also kills the "is this expensive?" objection before they even click. The competitive landscape proves we're priced cheaper than 80% of the category — show the receipt.

Display all four tiers: Free / Monthly $3.99 / Annual $14.99 (highlighted, "Save 69%") / Lifetime $29.99. **14-day free trial called out on Monthly + Annual.** Free tier limits stated honestly: `15 people, 5 nearby alerts`. **Do not list a "places limit"** — there isn't one. Current site shows "Up to 8 places" which is fabricated.

**Trust signals:**
- "On your device. No account." — sits below the hero CTA as a microline.
- Full privacy block — Section 8, anchored separately so search visitors landing via privacy queries can find it.
- Privacy nutrition link in footer.
- Privacy Policy link with text "Privacy details" near the trust block (deflection target — counts as conversion goal #2).

**What we explicitly DON'T do vs. category competitors:**
- No "personal CRM" framing (Dex, Mesh, Contacts Journal own that lane and it's a worse story).
- No "manage your network" / "build relationships" boilerplate — that's the SaaS-CRM voice.
- No testimonials carousel at launch — we don't have enough real ones, and fabricating quotes is the AI-tell death sentence. Re-evaluate at T+30.
- No newsletter capture — every form on the page that isn't the App Store badge dilutes the primary CTA. (Add later if there's a content-marketing reason.)
- No "feature parity vs. Beanotes/Bename/Remember Names" comparison table — those competitors don't have enough mind-share to drive comparison-shop traffic. Punching down hurts the brand.

---

## 4. OG / social share strategy

**Current state:** `og:image` points to `assets/app-hero-remember.png` (a places-list screenshot from Mar 10, predates v2 brand). All metadata uses v1 voice ("Remember the people you meet and where you met them"). All wrong.

**New OG image — what it should depict:**

A single composed image, 1200×630, depicting the proximity alert moment. Recommended composition (designer's call on execution):
- A phone (mocked-up or real device frame) showing the lockscreen alert: "You're near The Hoxton. You know 3 people here."
- Behind/around it: warm ambient venue context (blurred warm light — the same aesthetic as Screenshot 1 in the App Store carousel)
- Top-left or bottom-right: small MetHere wordmark + tagline `Walk in. Remember everyone.`
- Mint accent on the word "near" or "know" in the alert

**Why this composition:** OG cards are seen 99% in social feeds at thumbnail scale. The image has to read in 0.5 seconds. The phone-with-alert is the only image where someone scrolling by goes "wait, what app is THAT?" — which is the entire point of an OG card.

**Source asset path (for the designer):** Compose from `brand-assets/` lockup + screenshot pulled from the v2 ASC set (`docs/launch/asc-screenshots/screen-01-proximity.png`). Do NOT generate a new alert mockup from scratch — memory rule `feedback_dont_invent_real_app_assets` (capture real, never fabricate).

**OG/Twitter card title + description:**

| Field | Value | Rationale |
|---|---|---|
| `og:title` | `MetHere — Social Memory` | Matches App Store name verbatim. Category plant. |
| `og:description` | `Remember the people you meet at the places you go back to. MetHere pings you when you're nearby again. iPhone, on-device, no account.` | One sentence "what" + one fragment "trust." 156 chars. Reads at thumbnail scale. |
| `twitter:title` | Same as og:title | Consistency — no reason to diverge. |
| `twitter:description` | Same as og:description | Same. |
| `twitter:card` | `summary_large_image` | Already correct. Keep. |
| `twitter:site` | `@MetHereApp` | Already correct. Keep. |

**Per-page or consistent?** Consistent for v2 launch. Privacy/Support/Terms can keep generic OG (or page-specific titles if zero-cost), but don't customize OG image per page — the proximity-moment image is the brand right now and every share should reinforce it.

---

## 5. Risks

### Three things this redesign MUST NOT do

1. **MUST NOT fabricate features or pricing.** Current site claims "5 Themes" and "8 places limit" — both false. Every claim on the new site has to be checkable against `paywall/config.ts` and the live app. Memory rule `feedback_privacy_copy_fact_check` was triggered three times in one day on the App Store side; this site is the next attack surface and cannot ship with the same class of error.

2. **MUST NOT bury proximity below the fold.** Current site's "How it works" buries the killer feature as Step 3 of 3. Competitive landscape shows this is the only thing we own that nobody else does. If proximity is not visible without scrolling on a 13-inch laptop or a 6.7" phone, the redesign has failed regardless of how pretty it looks.

3. **MUST NOT add a contact form, newsletter signup, or "request demo" CTA.** Anything that isn't App Store / Support dilutes the primary conversion. We have one job: send qualified iPhone owners to App Store. The site is not a lead-gen funnel.

### The 1–2 highest-leverage decisions that could 2x conversion

1. **Hero image = proximity alert lockscreen, not places-list.** Current hero screenshot shows a list of places. That's a "what" image. The proximity alert is the "why you'd download this" image. Visitors arriving from "MetHere" search OR from PH/HN posts about "the rebuild" will scroll past a places-list within 2 seconds; an alert lockscreen makes them stop. **Confidence: high.** This is the single biggest IA-level lever.

2. **Show prices in-line, with the 14-day trial badge prominent.** The competitive landscape's biggest finding was that pricing is the conversion friction across this category. Showing $3.99/mo with "14-day free trial" eliminates the "what's the catch?" hesitation before the App Store click. Hiding it forces a worse trust calculation at exactly the moment we want zero friction. **Confidence: moderate-high** — could test post-launch but launch defaults to showing.

---

## Open calls Julian needs to make (3)

1. **Section 7 (Founder / rebuild story) — include or skip for launch?** It strengthens press-visitor conversion materially but adds copywriter scope and a personal-brand surface Julian may not want exposed on the marketing site (vs. keeping that energy on his X account). Recommendation: **include**, light touch — 2-paragraph max, no headshot required, link out to a tweet thread. If skipped, redirect that section to a "Press / PH coverage" badge strip if/when we have it.

2. **Pricing display: 4 tiers in one row, or Free + "See plans" disclosure?** I'm recommending all 4 visible. The trade is page length vs. transparency. If the designer comes back saying 4 tiers visually crowds the page, the fallback is a 2-card display (Free / Pro) with "Monthly · Annual · Lifetime" pricing strip underneath, expandable on click. Either is acceptable; I'd default to 4-visible.

3. **OG image: ship a placeholder for week-1 launch, or block on the final composed image?** The current og-share.png is wrong-version. If the final composed proximity-moment image isn't ready by May 5, we should still ship a corrected OG using a clean crop of `screen-01-proximity.png` directly (no compositing). Recommendation: **don't block launch on the perfect OG — ship the App Store screenshot crop on May 5, swap in the composed version T+7.**

---

*Cap: 1.5 hr. Done in 1 hr. Designer takes this as the structural blueprint for Phase 2.*
