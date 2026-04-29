# Support Page — Final Live Copy Verdict

**Live URL verified:** http://localhost:4488/support.html
**Viewport:** 1440 × 900
**Date:** 2026-04-27
**Reviewer:** copywriter (live page, not spec doc)
**Screenshot:** `docs/panel-review/support-final-copy.png`
**Method:** strings pulled from rendered DOM via `evaluate_script`, full-page screenshot reviewed visually, voice-floor sweep run via regex on rendered text

---

## Verdict: SHIP

Voice floor is clean. Spec integrated faithfully. Page reads top-to-bottom as intended. No blockers.

---

## 1. Spec-to-Page Integration Drift

**Result: zero drift.**

Counted: 7 category labels (eyebrow style, 12px uppercase, 0.8px letter-spacing) + 28 FAQ questions = 35 H3 elements rendered. Matches the brief.

Categories rendered in spec order:
1. ABOUT METHERE (3 FAQs)
2. CAPTURING PEOPLE & PLACES (6 FAQs)
3. MAP, REGULARS & RECEIPTS (4 FAQs)
4. PRO, PRICING & BACKUPS (7 FAQs)
5. PURCHASES & ACCOUNT (2 FAQs)
6. NEARBY ALERTS & TROUBLESHOOTING (4 FAQs)
7. PERSONALIZATION (2 FAQs)

Total: 28 FAQs. Confirmed.

H1 renders as: "Help with backups, purchases, and nearby alerts." Eyebrow "SUPPORT" above. Sub-line "If you run into an issue, send us the details and we'll work through it with you." Contact line "Contact: support@methere.app". All match the spec.

No markdown that landed weird. No missing punctuation. No truncation. No broken bullets. The bullet list inside "What exactly does Pro unlock?" rendered correctly. The bullet list inside "Nearby alerts aren't firing. What should I check?" rendered correctly.

---

## 2. Voice-Floor Sweep Results

**Total violations: zero on every kill-list item that matters in context.**

| Pattern | Count | Status |
|---|---|---|
| `magic` | 0 | clean |
| `discover` (any form) | 0 | clean |
| `watches` | 0 | clean |
| "tells you who's there" | 0 | clean |
| "the person you're about to" | 0 | clean |
| "auto-fills" | 0 | clean |
| "location monitoring" | 0 | clean |
| "smart [feature]" | 0 | clean |
| `unlock` | **1** | **acceptable in context** — see note below |

**The single `unlock` hit:** appears in the FAQ question "What exactly does Pro unlock?" This is the literal user-facing question users ask of paid tiers across every App Store paywall on iOS. The kill-list intent was about marketing fluff like "discover the magic" or "unlock a new world." A direct question about what Pro turns on is the right word for the surface and matches user mental model. Keep.

**Em-dash density:**
- Em-dashes (`—`) in entire page: **0**
- En-dashes (`–`) in entire page: **0**

Page uses periods, commas, colons, and parentheses for pacing. Matches Julian's stated preference (em-dash minimization). Clean.

**Term consistency:**

| Term | Count | Notes |
|---|---|---|
| `nearby alert(s)` | 10 | canonical term, used everywhere |
| `nearby reminder(s)` | 0 | no drift |
| `proximity alert(s)` | 0 | no drift |
| `place(s)` | 26 | user-facing noun (correct) |
| `venue(s)` | 0 | no drift |
| `Spots` (proper noun) | 5 | only used as the tab name (correct) |
| `spot` (lowercase) | 1 | "any spot you want to label your own way" — natural language usage, fine |

Place vs. Spots is handled cleanly: "place" is the user-facing noun in body copy, "Spots" is only used when referring to the tab UI element. That's the right pattern.

**Spelling:**
- `favorites` (US): 2 uses
- `favourites` (UK): 0 uses
- `cancel(led)` / `organi(s/z)`: not used

US English consistent. No drift.

**Other voice tells:**
- Exclamation marks: **0** (matches "calm, dry" tone)
- Question marks: **28** (one per FAQ heading — matches spec)
- "you" / "your" / "you'll" / "you're" / "you've" / "you'd": **82** instances across ~9,270 chars — direct, conversational, talking to one person
- Marketing-speak audit (`seamless`, `effortless`, `powerful`, `revolutionary`, `delight`, `simply`, `easily`, `just tap`, `powered by`, `AI-powered`, `intelligent`): **all zero**

Voice floor is the cleanest I've seen on any MetHere surface to date.

---

## 3. Top-to-Bottom Reading Verdict

Read the page as a visitor who just hit a problem. Notes from the live read:

- **Hero lands.** "Help with backups, purchases, and nearby alerts." tells the visitor exactly what kinds of problems this page solves. The sub-line is warm without being saccharine. Contact line at the top is the right move — frustrated users don't want to hunt for it.
- **First answer pulls weight.** "What is MetHere?" opening with "the space between 'I've met you' and 'you're in my phone'" is a strong first impression even on the support page.
- **The Regulars/Moments answers carry brand voice well.** "social memory in receipt form. Not a dashboard. Not a stats page. A mirror." — this is the right place for that line, anyone reading FAQs is invested enough to absorb it.
- **The bullet list in "What exactly does Pro unlock?" works** because the items are scannable single phrases. Doesn't fight the conversational tone of the rest.
- **The troubleshooting checklist ("Nearby alerts aren't firing")** is the highest-utility moment on the page and reads exactly right — practical, specific, no fluff. The "don't force-quit MetHere" addition at the bottom is the kind of thing real users actually need.
- **"How do I reset everything?" closes with appropriate weight.** "There's no undo" is a real warning without being alarmist. Good.
- **Footer and brand presence consistent** with the rest of methere.app.

**One micro-observation, not a blocker:** The contact email shows in the hero ("Contact: support@methere.app") and again in the footer ("hello@methere.app"). Two different addresses. Not a copy issue per se but worth flagging — if `support@` and `hello@` both route to Julian, fine. If only one is monitored, this is a deliverability risk.

---

## 4. Lines I'd Still Revise

**None as blockers.** Two soft observations if a polish pass happens later:

1. **"Both themes are Mint Social: same brand, different surface tones."** — "surface tones" is slightly designer-speak. A v1.0.x pass might consider "Same brand, different mood" or "Same look, lighter or darker." Not worth blocking ship.
2. **"the suggestions learn what you tend to use at each place"** under "How do tags work?" — the verb "learn" can read as ML/algorithmic to some readers. Could phrase as "the suggestions remember what you tend to use at each place." Marginal. Optional.

Neither one is a voice violation. Both are taste calls a future copy pass could touch.

---

## Confirmation

- Live page opened: **YES** (http://localhost:4488/support.html, viewport 1440×900)
- Strings pulled from rendered DOM (not from spec doc): **YES**
- Voice-floor sweep run on rendered text: **YES**
- Screenshot saved: **YES** (`docs/panel-review/support-final-copy.png`)
- Read top-to-bottom as a visitor: **YES**

**Ship it.**
