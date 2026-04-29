# Copy Verdict — Live-Page Prose-Collision Review

**Reviewer:** copywriter (Era One)
**Date:** 2026-04-27 · T-8 to launch
**Method:** chrome-devtools MCP, live page at `http://localhost:4488/index.html`, viewport 1440×900, all `.reveal` forced visible
**Screens captured:**
- `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/copy-fullpage.png` (full page)
- `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/copy-zone-hero.png`
- `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/copy-zone-section2-demo.png`
- `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/copy-zone-section4-howitworks.png`
- `/Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/copy-zone-section9-finalcta.png`

DOM strings pulled directly from rendered page, not from spec or source HTML.

---

## Ground-truth corrections to the brief's premises

Before voting, two of the brief's setup claims need correction so we vote against reality, not memory:

1. **"Walk in. Remember everyone." repeats 3-4×.** Live DOM count: **2×**. Hero H1 and final-CTA H2. The footer mark says "MetHere" (the wordmark, not the tagline). The hero phone caption is the *proximity alert string* ("You're near Copper & Vine. You know 3 people here."), not the tagline. So the chant problem is real but smaller than briefed: 2 placements within one scroll, not 4.
2. **"On your device. No account." repeats 4×.** Confirmed by DOM: hero / how-it-works / plans / final-cta. Brief is correct.

This changes the math on Cut #3 (hero phone caption) — it's not actually a tagline echo; it's the proximity-alert mock. Vote below.

---

## 1. Verdict on Gigi's three proposed cuts

### Cut 1 — Drop Section 2 (3-second demo strip) entirely → **DROP IT** (vote: cut Section 2)

Confidence: **high**.

Reasoning. Section 2's job in the spec was "show the loop in three frames before we explain it." Section 4 (How it works) does the same job with more space, real product mocks, and step-numbered scaffolding. With both present, Section 4 reads as a plagiarized expansion of Section 2 — exact-match collisions:

| Section 2 caption | Section 4 H3 | Distance |
|---|---|---|
| "Save who you met." | "Save who you met." | EXACT match, two sections apart |
| "Pinned to where." | "Pin them to a place." | Near-identical (verb form change) |
| "Pinged when you're back." | "Get pinged when you're nearby." | Near-identical |

Three-of-three caption-to-headline collisions. This isn't a rhyme; it's the same sentence twice with one rephrase. A cold reader's eye will register the second time as filler — and Section 4 is the section we *need* them to read, because it has the proximity payoff in step 3.

The Section 2 H2 "In about three seconds." is good copy in isolation but does a job Section 4 H2 already does ("Save someone. Pin them to a place. The phone does the rest." — itself a three-beat). Two three-beats back to back is a cadence collision on top of the word collision.

**What you lose by cutting Section 2:** a quick scannable visual moment between hero and the longer storytelling sections. That's a layout/pacing concern, not a copy concern. If the designer needs a beat, the demo phone graphics from Section 2 can be folded into Section 4 as inline supporting visuals next to each step — the words don't survive the merge, the visuals do.

**Recommendation:** Drop Section 2. Adjust Section 4 H2 minimally (see Cut 4 below).

---

### Cut 2 — Replace Section 9 H2 with "That's it. That's the app." → **MODIFY** (vote: don't take that line, but DO change the H2)

Confidence: **high on changing it. Moderate on the alternative.**

Reasoning. Two things are true at once:

1. The hero echo IS doing damage at assembly. Hero H1 says "Walk in. Remember everyone." in 96px mint-accented type. Final CTA H2 says the exact same thing in 56-72px mint-accented type, two scroll-thirds later. On the page assembled, this reads as the page restating itself — exactly what Gigi flagged. The repeat reads as "we couldn't think of a better closer," not as "page-architecture closure."
2. **But "That's it. That's the app."** is wrong for the close. I had this in my reject pile for Section 4 H2 alternatives, and the reasoning still applies: it's an *unbothered shrug* line. Unbothered works mid-funnel where the brand is comfortable. At the close, where the visitor is being asked to act, the shrug undercuts the ask. "That's it" tells them there's nothing more — fine. "That's the app" tells them the page is over — fine. But neither one tells them what to do or why now. Final-CTA copy needs forward motion, not a sign-off.

**My replacement recommendation for Section 9 H2:**

> **`The next time you walk past, you'll know.`**

12 words. Locks the proximity payoff in the closer (same beat as the hero subhead's "the next time you walk past, it tells you who's there" — but where the hero promises, the closer affirms). Mint accent on `know` (single mint word, matches the spec's mint-accent-per-section discipline). It's the brand voice landing the *result* of using the app, which is what a closer should do.

If the team rejects that and wants the hero echo gone with no new line, fall back to:
- `Place is the spine.` (3 words, lifted from Section 4 step 2 — too cryptic for a cold close, but a good test variant if you want a brand-y minimalist play)
- `One face. One place. Pinged.` (5 words, three-beat that mirrors the brand structure without re-using hero language)

But my strongest recommendation is **"The next time you walk past, you'll know."** Keeps the mint discipline, lands the hook, doesn't echo the hero, doesn't shrug at the close.

If shipping pressure forces a one-line decision: **change the H2, the line is up to Julian, but do not ship the hero-echo as the closer.**

---

### Cut 3 — Switch hero phone to phone-only crop (no caption strip) → **KEEP** (no change needed)

Confidence: **high**.

Reasoning. The brief assumed the hero phone has a caption strip saying "Walk in. Remember everyone." That's not what the live page renders. The hero phone is a single device mock showing the **proximity alert** notification ("You're near Copper & Vine. You know 3 people here.") on a lockscreen. That's not a tagline echo — it's the product demo. The visitor sees the headline once on the left, then sees what the headline becomes inside the app on the right. That's not a chant; that's a payoff loop, which is exactly what a hero should do.

If the brief was actually concerned about the visual *adjacency* of the H1 and the phone (rather than caption text), my read is the same — the H1 anchors the value prop, the phone shows the result. The phone needs to stay because it's the only place on the entire page where a visitor sees the literal proximity-alert UI in context. Cropping it to a phone-only frame loses the alert mockup — the most important screenshot on the page.

**Verdict: do not crop. Hero phone with the proximity-alert notification mock stays.**

---

## 2. Word-collision audit — every duplication within 2 sections

Compiled directly from rendered DOM. Format: phrase / where / distance / verdict.

| # | Phrase | Locations | Distance | Verdict |
|---|---|---|---|---|
| C1 | **"Save who you met."** | Section 2 caption + Section 4 step 1 H3 | 2 sections | **CUT Section 2 entirely** (covered by Cut 1) — exact match is the worst kind. |
| C2 | **"Pinned to where." / "Pin them to a place."** | Section 2 caption + Section 4 step 2 H3 | 2 sections | **CUT Section 2 entirely** — same beat, same concept, near-rhyme. |
| C3 | **"Pinged when you're back." / "Get pinged when you're nearby."** | Section 2 caption + Section 4 step 3 H3 | 2 sections | **CUT Section 2 entirely** — third near-rhyme in a row. |
| C4 | **"the next time you walk past"** | Hero subhead + Section 5 lead | 4 sections | **REWRITE Section 5 lead.** Same construction, same idiom. Section 5 is the proximity deep-dive — it should *expand* on the hero promise, not paraphrase it. New lead: `That's the alert. You set it once. Walk back into the venue and it speaks up.` (replaces "the next time you walk past, your phone tells you who's inside.") Same beats, no hero-echo, swaps in `speaks up` which echoes Section 5 bullet 3's payoff line for internal cohesion instead of cross-section repetition. |
| C5 | **"You're near {Venue}. You know {N} people here."** | Section 4 step 3 body (Copper & Vine) + Section 5 H2 (The Hoxton) + hero phone notification (Copper & Vine) | 3 hits across hero-S4-S5 | **KEEP all three** but read carefully — the hero phone shows it as a UI screenshot (visual), Section 4 step 3 body shows it as a quote inside flowing prose, Section 5 H2 shows it as a giant headline. Three different presentations of the same locked product string is the design pattern, not a collision — same string in three registers reinforces "this is the actual notification you'll get." Don't touch. |
| C6 | **"On your device. No account."** | Hero trust microline + Section 4 trust microline + Section 8 trust microline + Section 9 trust microline | 4× across the page | **REDUCE to 2× max.** See locked-string audit below. |
| C7 | **"Walk in. Remember everyone."** | Hero H1 + Section 9 H2 | 2 sections, 8+ scroll-screens apart | **CHANGE Section 9 H2** (covered by Cut 2). |
| C8 | **"Whatever helps you remember"** | Section 4 step 1 body + Section 6 card 3 body | 2 sections | **REWRITE Section 6 card 3 body.** Currently: `"Talk to it. Snap a face. Whatever helps you remember beats trying to type it later."` Replace with: `"Talk to it. Snap a face. Beats typing it in later when half of it's already gone."` Same payoff, no idiom collision, picks up the "name's gone" beat from Section 3 instead. |
| C9 | **"That's the alert." / "That's the whole thing." / "That's it. That's the app." (proposed)** | Section 4 step 3 body + Section 5 lead + (Cut 2 proposal) | adjacent | The "That's the X" construction is on-brand but it's getting used as a default unbothered closer and starting to sound like a tic. Once is brand voice, twice is a tic. Already 2× on the page. Reject any third "That's the …" line. (This is part of why "That's it. That's the app." for Cut 2 doesn't land.) |
| C10 | **"You don't open the app."** (S5 bullet 3) + **"Open the app, tap Quick Add"** (S4 step 1) | 1 section | The two "open the app" beats are doing opposite jobs (one says do, one says don't) — that's intentional contrast and works. **No change.** |

**Net cuts from collision audit:**
- Drop Section 2 entirely (C1, C2, C3 all resolve)
- Rewrite Section 5 lead (C4)
- Change Section 9 H2 (C7)
- Rewrite Section 6 card 3 body (C8)
- Reduce trust microline density (C6)

That's four copy edits + one section drop. All edits stay within the brand voice and existing locked-string envelope.

---

## 3. Locked-string audit at assembly density

### `On your device. No account.` (4× confirmed in DOM)

Verdict: **becomes a chant. Reduce to 2×.**

The psych argument for repetition is "highest-trust 5-word phrase, consistency is the point." That's true at 2×. At 4× it stops being reassurance and becomes a recurring jingle — every visit to a CTA gets the same five words underneath, which trains the eye to skip them. The trust-as-floor pattern works when the line surprises you; here it just keeps showing up.

**Recommended placements after reduction:**
- **KEEP** under Hero CTA — first time the visitor sees an ask, the floor matters.
- **DROP** under Section 4 close CTA — the surrounding copy ("Step 3 body" already says "your venues, your people, your radius — all local" via Section 5; the section close doesn't need to re-promise.)
- **DROP** under Section 8 (Plans) close — the entire plans section is about pricing, not privacy. Adding the privacy microline here muddles what the plans section is doing. If a trust line is needed under Plans, use the existing `Purchases through Apple. Restore in-app any time.` which IS the right trust line for that surface.
- **KEEP** under Section 9 (Final CTA) — last ask, last chance to land the floor before they leave or tap.

**Net: 2× placements (hero + final CTA).** Halves the density. Keeps the trust line at the two highest-stakes ask moments. Removes the chant.

### `Walk in. Remember everyone.` (2× confirmed in DOM)

Verdict: **becomes a chant at this scale of type. Cut the second.**

Both placements use the largest type on the page (H1 hero, H2 final-CTA). Two large-type tagline drops in one scroll *with the same mint accent treatment* reads as repetition, not bookend. Cut the Section 9 H2 (covered above). Locked tagline stays brand-floor, lives in the hero where it lands once, big.

### Proximity alert text (`You're near {venue}. You know {N} people here.`) — 3× across hero phone visual + Section 4 step 3 body + Section 5 H2

Verdict: **keep all three. This is intentional product-string anchoring.** The whole page is selling the moment when this notification fires. Showing it as a phone mock in the hero, quoting it in flowing prose in Section 4, and rendering it as a headline in Section 5 is the pattern that makes the visitor recognize the string. By the time they hit Section 5 they know that string IS the product. Three placements is the right number. Four would tip into chant.

---

## 4. Section 4 H2 adjustment if Cut 1 lands (Section 2 dropped)

If Section 2 is dropped, Section 4 inherits the "fast loop" job that Section 2 was doing. Section 4 currently has:

> **H2:** `Save someone. Pin them to a place. The phone does the rest.`

That's already a three-beat that does the demo-strip work. **No H2 change needed.** It does double duty cleanly — sets up the three steps as a sentence and as a structure.

The one place Section 4 *might* gain something from Section 2's death: the rhythm of "In about three seconds." was a tempo signal. If Julian wants to retain the speed framing without retaining the duplicated captions, the cheapest move is to add an eyebrow to Section 4:

> **Eyebrow:** `Three steps. Three seconds.`

Optional, not required. The Section 4 H2 alone carries the section. The eyebrow is a nice-to-have if the designer wants a small framing line above the H2 to signal "this is the fast loop." If shipping under pressure, ship without the eyebrow.

---

## 5. Additional copy duplication NOT called out in the brief

Two more I caught reading the assembly:

### Extra finding A — "What else" framing collision

Section 6 H2: `What else is in there.` The phrase "what else" implies the previous section showed the main thing. But Section 5 (Proximity) was the deep-dive and Section 6 jumps to four unrelated features. The section reads as a feature dump after a thesis statement. Brand-voice-wise it works, but watch the assembly — the visitor going hero → moment → how → proximity → "what else" reads "we're done with the important stuff now, here's some other features," which slightly undercuts the strength of the four cards. Not urgent, not a duplication, but flagging because it's an assembly issue the spec wouldn't have caught.

**Optional rewrite:** `Plus what else you can do.` (frames the cards as additive, not residual). Or leave as-is — this is voice judgment, not a collision.

### Extra finding B — "your phone" / "your device" / "your data" inflation

The word `your` is doing heavy lifting across the page in trust contexts:

- "On your device. No account." (4× currently, 2× recommended)
- "Your venues, your people, your radius — all local." (Section 5 bullet 2)
- "Your memories are on your phone, not a server." (Section 7 card 3)
- "Built from your data, made to share, no feed required." (Section 6 card 2)
- "Whatever helps you remember." (Section 4 step 1 body)
- "your phone says so" (Section 4 step 3 body)
- "Nothing leaves your device." (Section 7 card 2)

That's 7+ "your X" possessive trust beats across 5 sections. Individually fine, in aggregate it can read as defensive ("we keep telling you it's yours"). Not asking for cuts — flagging as a watch-item. After implementing the C6 trust-microline reduction (4× → 2×), the density drops to ~5 "your X" beats which is fine.

---

## Summary of all recommended changes

| Surface | Current | Recommended |
|---|---|---|
| Section 2 (entire) | demo strip with 3 captions + H2 | **DROP** |
| Section 4 H2 | `Save someone. Pin them to a place. The phone does the rest.` | unchanged |
| Section 4 (optional eyebrow) | none | `Three steps. Three seconds.` (only if designer wants the speed framing back) |
| Section 4 close trust microline | `On your device. No account.` | **REMOVE** (one of the 2 cuts to fix C6) |
| Section 5 lead | `That's the alert. You set it once. The next time you walk past, your phone tells you who's inside.` | `That's the alert. You set it once. Walk back into the venue and it speaks up.` |
| Section 6 card 3 body | `Talk to it. Snap a face. Whatever helps you remember beats trying to type it later.` | `Talk to it. Snap a face. Beats typing it in later when half of it's already gone.` |
| Section 8 close trust microline | `On your device. No account.` | **REMOVE** (the other of the 2 cuts to fix C6) |
| Section 9 H2 | `Walk in. Remember everyone.` (echo) | `The next time you walk past, you'll know.` (mint on `know`) |

**Sections affected:** 2 (drop), 4 (microline cut, optional eyebrow add), 5 (lead rewrite), 6 (card 3 rewrite), 8 (microline cut), 9 (H2 rewrite).

**No edit needed:** Hero, Section 3, Section 5 H2/bullets, Section 6 H2/cards 1-2-4, Section 7, Section 8 plan cards, Footer.

---

## Risk flags

1. **If Section 2 drops, the page loses one "fast pacing" beat.** Mitigated by the optional Section 4 eyebrow `Three steps. Three seconds.` Without it, the page goes hero → 3-card moment → 3-step how-it-works, which is fine but slightly longer scroll before the proximity section. Acceptable.
2. **If Section 9 H2 changes from the locked tagline, the brand-strategist's "echo wins for May 5 launch" call from `brand-visual-review.md` §7 item 5 is being overridden.** The override is justified — that call was made on the spec, not on the assembly. The assembled page shows the echo doesn't read as architecture, it reads as repetition. Brand-strategist would likely agree on seeing the live render. If this needs another vote, escalate.
3. **The trust-microline reduction (4×→2×) is a Tier-2 copy decision** because it touches user-facing trust language at conversion surfaces. My read: high-confidence on cutting Section 4 and Section 8 placements (those don't earn the line), keeping Hero and Section 9 (those do). Not asking for escalation — confidence high.

---

*Verdict prepared in 35 min. Method: live-page DOM extraction via chrome-devtools MCP, four viewport screenshots captured, all collisions verified against rendered output not spec. Ready for Julian's call.*
