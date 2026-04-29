# Cold-Read Psych — methere.app v2

**Author:** user-psychologist (Era One)
**Date:** 2026-04-27 (T-8 to launch)
**Scope:** Phase 1 human-arrival lens only. Brand visuals, IA, and pixel design owned by other specialists.
**Source under review:** `methere-site/src/index.html` (current production)
**Cap:** 1 page, opinionated.

---

## 1. Emotional Arc on Arrival

### 0–3 seconds — first read
Default emotional arrival state for this category is **mildly defensive curiosity**. Visitors come from an App Store badge, a PH/HN/IH post, or a friend's "you should check this out." None of those primes them for a NEW category — they're pattern-matching to the closest thing they know (contacts app, personal CRM, social network). Their brain is already running a "have I seen this before?" filter.

The dominant 0–3s feeling we want: **recognition of a real moment, not a product**. NOT "what does this app do" — that's the wrong opening. They need to feel *seen* before they care what the thing is. The current site's hero almost gets there with "You've seen them before. You know the face. The name's gone." That second line is the strongest line on the entire page. It bypasses the category problem entirely because it's a behavioral mirror, not a feature pitch.

### 3–10 seconds — trust or bounce
This is where the App Store visitor and the press visitor diverge psychologically.
- **App Store visitor** — light scrutiny. They've already decided to look. The trust-buy is "is this a real product or an indie demo." Triggered by: clean page, App Store badge above the fold, a single screenshot that looks finished.
- **Press visitor (PH/HN/IH)** — sharp scrutiny. They are looking for the tell that this is hype-vapor. The trust-buy here is "does this person know what they built." Triggered by: specific moments (the gym, the bartender) and the absence of buzzwords. The current "Just your memory, organized by place" is doing real work here.
- **Word-of-mouth visitor** — looking to confirm their friend isn't selling them something embarrassing. Trust-buy: privacy line above the fold, no account, no signup wall.

If trust doesn't clear in this window, no feature in section 2 will save it.

### 10–30 seconds — the resonance moment
This is the "I want this" trigger and it has a specific shape: the visitor pictures themselves in one of the moment cards. The "bartender who starts your order before you sit down" line is doing more conversion work than any feature description on the page. This is because the visitor stops evaluating the product and starts evaluating their own memory. *"Wait, that did happen to me last week."* That moment is the conversion event. Everything after section 2 is downhill.

### 30+ seconds — tap or close
Tap triggers, in priority order: (1) confirmed it's free to try, (2) confirmed no account needed, (3) saw a notification screenshot that looks plausible (the proximity alert), (4) saw a price they trust. Close triggers: more than 4 sections of explanation, pricing that feels work-coded ($X/seat, "for teams"), any phrase that sounds like a launch deck.

---

## 2. The Category Problem

"Social memory" doesn't live in the visitor's head. They have models for contacts (utility, dull), CRM (work, cold), and social networks (saturated, exhausted). If we lead with category-defining language, we sound like a manifesto and they bounce.

**The one move that installs the model fast:** open with the *behavioral moment*, not the *category name*. The current site does this correctly with "You've seen them before. You know the face. The name's gone." Keep that instinct. Lead with the behavioral mirror. Let the category name show up later and quietly — by section 5 or so, never as the first impression.

**The single specific moment to evoke first:** the second-encounter awkwardness. Not the meeting itself — the *return* to the place where you met them. "You walked into the bar. You knew them. You waved. You couldn't say their name." That's the moment that makes the proximity-alert feature self-explanatory two paragraphs later. The visitor has already lived the problem the app solves before they read what the app does.

**Do NOT do:**
- "Imagine if you could remember everyone you meet." (hypothetical, salesy, AI-tell)
- "MetHere is a new kind of app that..." (category definition language reads as overreach when the category is unproven)
- Abstract feature lists in the hero (people, places, alerts, tags, themes) — features without a felt problem read as software brochure
- "Unlock," "discover," "magic" (kill-list, AI-tell, Julian's voice doc Rule 8)
- Any phrasing that frames the user as *bad at* remembering names. The visitor already feels mildly bad about this. The app must sit beside them, not point at them.

---

## 3. Trust Friction Map

In strict order — each must clear before the next matters:

1. **"Is this another social network?"** (clears in ~2 seconds via copy or bounces). The current "No feed / No social network / No ads" trust block is doing critical work but it's buried in section 5. The new site needs at least one anti-social-network signal in or directly under the hero. *Fatigue is the dominant emotion in this category right now.*
2. **"Will this cost me before I can try it?"** (clears via App Store badge + free tier mention). "Start free. Upgrade if you need more." in the current site is correct. Keep that exact construction.
3. **"Will I have to make an account?"** (clears via the existing line "No account needed. Your data stays on your device" — currently in the hero note. This is the highest-trust signal on the page. It must stay above the fold.)
4. **"Where's my data going?"** (privacy claim. Clears via on-device language. The current "No cloud required" reads as confident without being preachy. Keep it.)
5. **"Is this real, or vibe-coded?"** (clears via finished-looking screenshots, plausible notification text, named developer in the schema/footer). The current site mostly clears this. The notification screenshot — "You're near Harborline Fitness. You know 3 people here." — is one of the most credibility-building elements on the page because the wording sounds like a real iOS notification, not a marketing approximation.
6. **"Is this another forgettable indie app?"** (clears LAST, via tone, specificity, and confidence. This is where The Friend voice does the heaviest lift.)

**What the current site does well that must be preserved:**
- The hero subhead structure: short declarative sentences, mirror-the-moment phrasing
- The three moment cards (gym/bartender/familiar face) — these are the conversion engine
- Notification screenshot copy reading like a real iOS notification, not marketing copy
- "No account needed" above the fold
- Plain-language pricing without tier-comparison tables

**What the current site fails at:**
- Trust signals (no social network, no ads, on-device) buried in section 5 — needs at least one earlier
- "Why MetHere" headline is defensive ("Not a contacts app. Not a social network."). Defining yourself by negation is psychologically weak — it puts the competing model in the visitor's head. The new site should make the negation *implicit* through the moment cards, not state it as a category disclaimer.
- "5 Themes" as a feature card is a category error — themes don't belong in the same hierarchy as proximity alerts. This signals "feature checklist" energy and reduces credibility.
- The final CTA headline ("MetHere lives in the middle ground...") is abstract and conceptual. Visitors who reached the bottom want a concrete invitation, not a positioning statement.

---

## 4. The 1–2 Emotional Risks the New Site Must Not Commit

**Risk 1 — The Category Manifesto trap.**
Because "social memory" is genuinely a new category, there is a strong temptation in v2 to *teach* the category up front — explain what it is, why it exists, why the visitor needs it. This is the single biggest psychological failure mode and I want it called out explicitly. The moment a visitor reads two paragraphs of "we believe..." or "MetHere is a new way to think about..." they exit. New categories are installed by *behavior*, not by *exposition*. Make them feel the moment, then name the moment, then offer the tool. If the new site opens with anything that sounds like a TED talk, it will lose the press visitor in 8 seconds and the App Store visitor in 4.

**Risk 2 — The "for the moments that matter" sentimentality drift.**
The Friend voice is warm, but warm has a failure mode: it slides into Hallmark. If section 2 reads like "MetHere helps you cherish the connections that make life beautiful," it triggers the same dismissal as the manifesto trap, just from the other direction. The current site avoids this by being concrete: gym, bartender, wave. The new site must hold that concreteness. Specific beats sentimental every time. If a copy line could appear in a greeting card or a wellness app, cut it.

A visitor would bounce on either of these failure modes within 5 seconds. Both are easy traps for a "brand-led" v2 redesign to fall into and the brand-strategist deck should be pressure-tested against both before pixels are drawn.

---

## Report-back Summary

**(a) File:** `/Users/Juelz/Developer/projects/methere/methere-site/docs/cold-read-psych-v2.md`

**(b) Single biggest psychological risk in shipping a redesign:**
Over-explaining the category. The visitor doesn't need to be taught what "social memory" is — they need to feel a specific moment from their own week that matches what the app does. The current site stumbles into this correctly with the moment cards. A v2 redesign that "elevates" by adding category-defining headlines, manifesto copy, or "we believe" framing will perform *worse* than the current site, even with better pixels. The moment-mirror has to come before the category name. Always.

**(c) What's psychologically strong on the current site and must be preserved:**
1. **Hero subhead** — "You've seen them before. You know the face. The name's gone. MetHere is where you write it down." This is the highest-converting copy on the page. Move it, restyle it, but do not rewrite it.
2. **Three moment cards** (gym/bartender/familiar wave) — the conversion engine. They turn the visitor from product-evaluator into self-evaluator, which is the actual conversion event. Keep all three. Resist the temptation to "tighten to two" or "expand to five."
3. **"No account needed. Your data stays on your device."** above the fold — the highest-trust phrase on the page. Non-negotiable.
4. **Notification screenshot copy** — the alert text reads like a real iOS notification, which is a massive credibility signal. Whatever screenshot the new site uses, the notification text must sound like the OS wrote it, not marketing.
5. **"Start free. Upgrade if you need more."** — a model construction. Clears the cost-friction in 7 words without a pricing table fight.
