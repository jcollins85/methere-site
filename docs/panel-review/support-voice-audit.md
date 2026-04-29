# Support Page Voice Audit — methere.app/support.html

**Auditor:** Copywriter (lane: voice register, prose, AI-tells, jargon, awkward constructions)
**Date:** 2026-04-27
**Method:** Live page read via chrome-devtools MCP at `http://localhost:4488/support.html`, viewport 1440×900, reveal classes pre-resolved
**Reference:** `docs/brand/voice-and-tone.md` v1.0 + `docs/brand-direction-v2.md` (web register §2)
**Out of scope:** factual accuracy, feature coverage (designer's lane)

---

## Headline verdict

**Page reads as support-desk-formal, not The Friend.** The hero is fine. The FAQ body copy is where the voice flattens — every other answer opens with "Go to Settings…" or "MetHere does not…" or "Confirm Location is set to…" That's tech support voice, not the warm/sharp/unbothered/knowing voice the homepage and app speak in. A visitor landing here from the homepage will feel a register snap.

**Count flagged for rewrite: 8 of 12 substantive FAQs.** (4 are voice-clean, 8 need work — ranging from one-word fixes to full rewrites.)

**Worst single line on the page:** *"MetHere needs to run in the background for location monitoring to work."* — robot speak from `voice-and-tone.md` §3.3 off-brand column. Generic phrasing ("location monitoring"), zero warmth, treats the user like an L1 support ticket. **Fix below.**

---

## 1. Hero copy

### "SUPPORT" eyebrow + H1 "Help with backups, purchases, and reminders."

**Verdict:** VOICE-CLEAN (with one note).

The H1 is the right move — direct, specific, three concrete nouns, no fluff. Sounds like a friend telling you what's in the room. Tracks with the homepage register.

**One micro-flag:** the trailing period is correct per brand pattern, but "reminders" is the term used here while the FAQ section calls them "nearby alerts" (and the support page never uses "reminders" again — except in the question "Nearby reminders are not triggering"). Pick one term. The app, the App Store listing, and the rest of this page all use "nearby alerts." Recommend H1 → **"Help with backups, purchases, and nearby alerts."** Keeps the voice, kills the term-drift.

### Subhead "If you run into an issue, send us the details and we'll work through it with you."

**Verdict:** VOICE-CLEAN. This one earns its space. Warm, calm, no apology, no "our team" corporate framing. "Work through it with you" is exactly the friend tone. Keep.

### "Contact: support@methere.app"

**Verdict:** VOICE-CLEAN. Appropriately functional. The footer also exposes `hello@methere.app` — flag for designer to reconcile, but voice-wise both are fine.

---

## 2. Per-FAQ voice verdict

### GETTING STARTED

#### Q: "What is MetHere?"
> "MetHere is where you save the people you meet and where you met them. Name, place, a note. It's not a contacts app or a social network. It's the space between 'I've met you' and 'you're in my phone.'"

**Verdict:** VOICE-CLEAN. This is the strongest copy on the page. "Name, place, a note." is rhythm-perfect. The "space between" line is the brand at its best — specific, knowing, not selling. Keep verbatim.

#### Q: "Is MetHere free?"
> "Yes. Free includes saving up to 15 people and 5 nearby alerts. Pro removes those limits and adds backup and export. Pro options: Monthly $3.99, Annual $14.99 with a 14-day free trial, or Lifetime $29.99."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "Free includes saving up to 15 people" — "includes saving" is awkward gerund. Real people don't say "the free version includes saving."
- "Pro removes those limits and adds backup and export" — flat, mechanical. Reads like a feature matrix translated into a sentence.
- "Pro options:" — colon-list-of-prices is fine here (functional context), but the structure feels lifted from a pricing table rather than written.

**Proposed rewrite:**
> "Yes. The free version covers 15 people and 5 nearby alerts. Pro lifts those limits and adds backup and export. Monthly is $3.99, Annual is $14.99 (14-day free trial), Lifetime is $29.99."

Why: "Covers" is warmer than "includes saving." "Lifts those limits" sounds like a person, not a release note. Price line restructured as three sentences-in-one — reads cleaner aloud.

#### Q: "What platforms is MetHere available on?"
> "MetHere is available on iPhone. Requires iOS 16 or later."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "What platforms is MetHere available on?" — the question itself is corporate-FAQ phrasing. "Available on" is filler.
- The answer reads like a press-release boilerplate.

**Proposed rewrite (Q + A):**
> **Q: Does MetHere work on Android?**
> A: iPhone only for now. iOS 16 or later.

Why: rephrases the actual question users ask (people search "does it work on Android," not "what platforms"). Answer is two phrases, not two sentences. "For now" is unbothered and honest without overpromising.

---

### DATA & BACKUPS

#### Q: "Where is my data stored?"
> "On your device. MetHere does not require an account or cloud storage. Your people, places, and notes stay local unless you choose to export a backup."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "MetHere does not require an account or cloud storage" — passive corporate phrasing. Voice-and-tone §3.8 wants "We don't sync. We don't track. We don't know who you are." kind of energy here.
- "stay local unless you choose to export a backup" — "unless you choose to" is filler.

**Proposed rewrite:**
> "On your device. No account, no cloud, no copy on our end. Your people, places, and notes stay on your phone — until you export a backup yourself."

Why: matches the privacy register from voice-and-tone §3.8 ("Your memories live on your phone. Not ours. Not anyone else's."). Three "no" beats land harder than one passive sentence. (Note: I used one em-dash here — Julian's preference is to limit them. Acceptable swap: "stay on your phone. Until you export a backup yourself.")

#### Q: "How do I back up my data?"
> "Go to Settings and use Export / Backup to create a JSON backup file. You can save it to Files or iCloud Drive."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "Go to Settings and use Export / Backup" — robotic instructional voice. Reads like a Zendesk article.
- "to create a JSON backup file" — over-explained.

**Proposed rewrite:**
> "Open Settings, tap Export / Backup. Save the file to Files or iCloud Drive — that's your full backup."

Why: imperative + tap verb is more app-native. "That's your full backup" closes the loop without saying "JSON file" twice (the file format question has its own FAQ already).

#### Q: "How do I restore my data?"
> "Go to Settings and choose Import, then select a previously exported backup file."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "Go to Settings and choose Import" — same robot-instruction pattern as above.
- "previously exported backup file" — corporate stack of modifiers. "Previously" is filler.

**Proposed rewrite:**
> "Open Settings, tap Import, pick your backup file. Done."

Why: three steps, three commas, one closer. "Done" is the friend voice. Cuts the bureaucracy.

#### Q: "How do I reset app data?"
> "Use the reset option in Settings to clear local data. Export a backup first if you may need to recover data."

**Verdict:** NEEDS REWRITE.

Issues:
- "Use the reset option in Settings to clear local data" — "the reset option" + "clear local data" is double-formal. Real friends say "reset."
- "Export a backup first if you may need to recover data" — "if you may need to recover data" is conditional knot. Hard to parse aloud.
- The whole answer feels weightless given that it describes a destructive action. Voice-and-tone §3.7 confirmation example: *"Delete Sarah? This one's gone for good."* — there's an acknowledgment of weight here.

**Proposed rewrite:**
> "Settings has a reset option that wipes everything on this device. Export a backup first if you might want any of it back."

Why: "wipes everything" is honest about what reset does. "If you might want any of it back" is plain-English warning, not corporate hedging.

#### Q: "What is the difference between JSON backup and CSV export?"
> "JSON backup is a full snapshot (people, places, tags, and favourites) that you can restore in MetHere. CSV export is a people list for spreadsheets and sharing, and it is not a full in-app restore format. Both are available with Pro."

**Verdict:** NEEDS REWRITE.

Issues:
- "JSON backup is a full snapshot" — fine technical framing, but the parenthetical ("people, places, tags, and favourites") interrupts the rhythm.
- "and it is not a full in-app restore format" — formal, awkward, double-negative-adjacent. "Format" is jargon.
- "Both are available with Pro" — reads like a parenthetical asterisk. Bury or cut.
- Using "favourites" (UK spelling) — verify intentional. Most of the page is US English.

**Proposed rewrite:**
> "JSON is the full backup — people, places, tags, favorites — and you can restore it inside MetHere. CSV is a people list for spreadsheets or sharing. CSV won't restore the app. Both are Pro features."

Why: shorter sentences. "CSV won't restore the app" is plain-English where the original had "is not a full in-app restore format." Each sentence does one job. (Spelling: switched "favourites" → "favorites" for consistency; flag for Julian.)

---

### PURCHASES

#### Q: "How do I restore purchases?"
> "Open Settings in MetHere and use Restore Purchases. Make sure you are signed into the same Apple ID used for purchase."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "Open Settings in MetHere and use Restore Purchases" — "use" is the wrong verb. People tap buttons.
- "Make sure you are signed into the same Apple ID used for purchase" — passive construction ("used for purchase"). Wordy.

**Proposed rewrite:**
> "Open Settings in MetHere, tap Restore Purchases. Make sure you're on the same Apple ID you bought it with."

Why: tap verb. Contraction ("you're"). "Bought it with" is conversational. Drops "used for purchase" jargon.

#### Q: "Do I need to manage anything after buying Pro?"
> "It depends on which Pro option you chose. Lifetime is yours forever, nothing to manage. Monthly and Annual are subscriptions that auto-renew unless cancelled. Manage subscriptions in your Apple ID Account Settings. For any option, use Restore Purchases in MetHere Settings if you reinstall or move devices."

**Verdict:** NEEDS REWRITE.

Issues:
- "It depends on which Pro option you chose" — soft opener. Voice-and-tone §3.5 paywall wants direct, not hedged.
- "auto-renew unless cancelled" — passive. Friend voice would say "unless you cancel."
- "Manage subscriptions in your Apple ID Account Settings" — this sentence floats on its own with no transition. Feels like a footnote.
- "For any option, use Restore Purchases" — "For any option" is a clunky bridge.
- Whole answer has 4 sentences pulling in 3 directions.

**Proposed rewrite:**
> "Depends which one you picked. Lifetime is one-and-done — nothing to manage. Monthly and Annual auto-renew until you cancel them in your Apple ID settings. Either way: if you reinstall or switch phones, hit Restore Purchases in Settings."

Why: opens decisive, not hedged. "One-and-done" is the friend voice. "Until you cancel them" is active. Last sentence uses "Either way:" as a clean bridge for the post-script. Cuts redundant "Pro option" repetitions.

#### Q: "What are the Free vs Pro limits?"
> "Free includes up to 15 people and 5 nearby alerts. Pro removes those limits and adds backup and export tools. Pro pricing: Monthly $3.99, Annual $14.99, or Lifetime $29.99."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "Free includes up to 15 people" — same "includes saving" pattern from earlier.
- "Pro removes those limits and adds backup and export tools" — exactly duplicates the line from "Is MetHere free?" Reads like the FAQ wasn't checked for redundancy.
- "Pro pricing:" — colon-list, third time on the page.

**Proposed rewrite:**
> "Free covers 15 people and 5 nearby alerts. Pro lifts the limits and unlocks backup and export. Monthly $3.99 / Annual $14.99 / Lifetime $29.99."

Wait — "unlocks" is on the AI-tell kill list. Revise:
> "Free covers 15 people and 5 nearby alerts. Pro lifts the limits and adds backup and export. Monthly $3.99 / Annual $14.99 / Lifetime $29.99."

Why: tightens the duplicate phrasing across the two pricing FAQs. Slash list reads cleaner than "Pro pricing:" colon-prefix.

---

### NEARBY ALERTS

#### Q: "How do nearby alerts work?"
> "Save a place and turn on nearby alerts for it. When you're within range, MetHere sends a notification with the place name and people you know there. Requires location permission set to Always."

**Verdict:** NEEDS REWRITE.

Issues:
- "Save a place and turn on nearby alerts for it" — "for it" is dangling.
- "MetHere sends a notification with the place name and people you know there" — mechanical. Misses the chance to plant the actual notification copy here. The brand-direction §2.2 explicitly says: *"the proximity-alert moment gets to be the pitch, in product copy form: 'You're near The Hoxton. You know three people here.'"* This FAQ should show the user what the notification actually looks like.
- "Requires location permission set to Always" — robot speak. Voice-and-tone §3.1 wants *"Heads up — we need location to make this work."*

**Proposed rewrite:**
> "Save a place. Turn on nearby alerts for it. Walk back into range and you'll get a notification — something like *'You're near The Hoxton. You know three people here.'* Needs Location set to Always so we can ping you in the background."

Why: shows the actual notification copy (per brand-direction guidance). "Walk back into range" is scene-setting friend-voice. "Needs Location set to Always so we can ping you" warms up the permission ask.

#### Q: "Nearby reminders are not triggering. What should I check?"
> "Confirm Location is set to Always, Notifications are enabled, nearby alert toggles are on for the places you want monitored, and the app has not been force-quit. MetHere needs to run in the background for location monitoring to work."

**Verdict:** NEEDS REWRITE. **Worst-on-page line.**

Issues:
- Question uses "reminders" — page elsewhere says "alerts." Term-drift.
- "Confirm Location is set to Always" — "Confirm" is the wrong verb for a friend (it's auditor-voice).
- "places you want monitored" — surveillance language. The app monitors *places*, not the user, but "monitored" still reads cold.
- "the app has not been force-quit" — passive, double negative. Real-talk: "you haven't force-quit the app."
- "MetHere needs to run in the background for location monitoring to work" — full robot speak. Voice-and-tone §3.3 off-brand column quote-equivalent.

**Proposed rewrite (full):**
> **Q: Nearby alerts aren't firing. What now?**
>
> A: Run through this list:
> - Location set to **Always** (not "While Using")
> - Notifications turned on
> - Alert toggle on for the place you're expecting
> - You haven't force-quit MetHere recently
>
> The app has to be alive in the background for nearby alerts to work. iOS doesn't let it ping you otherwise.

Why: question rephrased to "aren't firing" (active, real user language). Answer becomes a checklist, which is what users want when troubleshooting. "Alive in the background" is plain-English where "run in the background for location monitoring to work" was robot. Final sentence acknowledges the iOS constraint honestly — that's the brand at its knowing-but-unbothered best.

---

### FEATURES

#### Q: "Can I customize how the app looks?"
> "Yes. MetHere has light and dark variants of the Mint Social theme. Tap the theme toggle in Settings to switch."

**Verdict:** VOICE-CLEAN (with one micro-fix).

Mostly fine. "Light and dark variants of the Mint Social theme" is accurate and on-brand (the brand-direction §3.1 says theme switching is acceptable as in-app preference). The one nit: "the theme toggle" — there's only one toggle, so just say "the toggle" or "Light / Dark in Settings."

**Optional polish:**
> "Yes. Mint Social comes in light and dark. Switch in Settings."

Why: tighter. "Comes in" is friendlier than "has variants of." Three sentences → two.

#### Q: "What are milestones?"
> "Milestones are achievements you hit as you use MetHere. Remember more people, save more places, apply more tags. Your progress is tracked in your profile."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "Milestones are achievements you hit as you use MetHere" — circular definition + "as you use MetHere" is filler.
- "Your progress is tracked in your profile" — passive. Tracked by whom?

**Proposed rewrite:**
> "Small wins as you go — first save, fifth person at one place, tenth tag. Check your profile to see where you're at."

Why: shows three concrete examples (specific over clever, voice rule 3). "Small wins" sets the tone — these are nudges, not corporate KPIs. Active voice in the closer.

#### Q: "What are insights?"
> "Your profile shows stats about your social memory: where you meet most, your most-used tags, recent activity. You can create a shareable snapshot card from your insights."

**Verdict:** NEEDS REWRITE (light).

Issues:
- "stats about your social memory" — "stats" is the right word, but pairing it with "social memory" makes the sentence top-heavy.
- "You can create a shareable snapshot card from your insights" — "shareable snapshot card" is feature-language; "from your insights" is circular.

**Proposed rewrite:**
> "Your profile keeps the receipts: where you meet people most, your top tags, recent activity. You can pull a snapshot card from it to share."

Why: "Keeps the receipts" lands the brand metaphor (per memory `project_stats_memory_card_hero` — the brand pivot is "receipts not metrics"). "Pull a snapshot card from it to share" is plain-English where "create a shareable snapshot card from your insights" was three nouns in a trench coat.

---

## 3. AI-tells / kill-list violations on the page

Cross-checked against the kill list (`magic`, `unlock`, `discover`, `watches`, `tells you who's there`, `the person you're about to`) and the broader forbidden list in `voice-and-tone.md` Part Six.

**Hits:**
- ZERO direct AI-tell hits in current copy. (Good.)
- BUT — my draft rewrite for "What are the Free vs Pro limits?" originally used "unlocks." Caught and removed before final. Flagging because "unlocks" is the kind of word that creeps in when paraphrasing a paywall question. Keep watch.

**Adjacent watches (not violations, but smell):**
- "Pro removes those limits" appears twice on the page. Not a kill-word, but the repetition signals the answers were drafted independently and not voiced together.
- "manage" appears 4 times (including "manage subscriptions," "manage your data preferences"-adjacent). Voice-and-tone bans "manage + anything human" but allows it in functional contexts like Apple ID Account Settings. Current usage is acceptable; flag if it spreads.

---

## 4. Awkward constructions

The "Pick the place from the list nearby" pattern Julian caught on the homepage shows up here in similar shapes:

1. **"places you want monitored"** (Nearby alerts troubleshooting) — passive past-participle hanging off a noun. Fix: "places you've turned on alerts for."
2. **"a previously exported backup file"** (How do I restore my data?) — adjective stack. Fix: "your backup file."
3. **"the same Apple ID used for purchase"** (How do I restore purchases?) — passive participial phrase. Fix: "the Apple ID you bought it with."
4. **"unless you choose to export a backup"** (Where is my data stored?) — "choose to" is filler. Fix: "unless you export one."
5. **"Save a place and turn on nearby alerts for it"** (How do nearby alerts work?) — dangling "for it." Fix: "Save a place. Turn on nearby alerts for it." (period split fixes the dangle.)
6. **"if you may need to recover data"** (How do I reset app data?) — "if you may" is conditional knot. Fix: "if you might want it back."
7. **"the app has not been force-quit"** (Nearby reminders troubleshooting) — passive double-negative. Fix: "you haven't force-quit the app."
8. **"MetHere needs to run in the background for location monitoring to work"** — gerund stack ("for X to work"). Fix above.

Pattern: the page leans on **passive constructions and adjective-stacks** to sound formal. The homepage and app voice both prefer **active verbs and short clauses**. This is the single biggest tonal lever to pull.

---

## 5. Tone register: where the page sits vs. where the brand sits

**Current register:** support-desk-formal with brand-clean bookends. The hero, the H1, and the "What is MetHere?" answer all hit voice. Then the FAQ body slides into Zendesk-knowledge-base voice for ~10 of 12 answers. The footer comes back to brand ("Made by Julian Collins").

**Why it happens:** FAQ copy almost always reverts to instructional voice because the writer is solving for "user finds answer fast." That's a real concern, but the brand voice doesn't require sacrificing scanability — short active sentences are *more* scannable than long passive ones.

**Three changes that warm the page without losing function:**

1. **Switch every imperative from "Go to Settings and use X" → "Open Settings, tap X."** Tap is the verb users actually do. Reads instantly more app-native.
2. **Kill the passive constructions** (full list in §4 above). Every "is set to," "has been force-quit," "is tracked in" is a candidate. Replace with active verb + you-as-subject.
3. **Rephrase 2-3 FAQ questions to match how users actually search**, not how a docs writer would title them. Specifically:
   - "What platforms is MetHere available on?" → "Does MetHere work on Android?"
   - "Nearby reminders are not triggering. What should I check?" → "Nearby alerts aren't firing. What now?"
   - "Do I need to manage anything after buying Pro?" → fine as-is, or: "What happens after I buy Pro?"

**One structural note for the designer (not voice, but adjacent):** the section headers (`GETTING STARTED`, `DATA & BACKUPS`, `PURCHASES`, `NEARBY ALERTS`, `FEATURES`) are rendered as `<h3>` tags in the same hierarchy as the question H3s — that's why my evaluate_script returned them as FAQ entries. This is an a11y/HTML structure issue more than a voice one, but it does mean a screen reader user hears "GETTING STARTED" as an FAQ question. Flag for designer.

---

## Summary

- **FAQs flagged for rewrite:** 8 of 12 substantive answers
- **VOICE-CLEAN as written:** 4 (What is MetHere?, hero H1, hero subhead, Can I customize how the app looks? — minor polish only)
- **Worst single line:** *"MetHere needs to run in the background for location monitoring to work."*
- **Strongest single line:** *"It's the space between 'I've met you' and 'you're in my phone.'"* (What is MetHere?)
- **Pattern to fix systematically:** passive constructions and adjective-stacks throughout the FAQ body. The hero and the "What is MetHere?" answer are the model — match that register everywhere.

The page doesn't need a voice transplant. It needs an editorial pass with the friend-voice dial turned up about 30%. The good copy is already on the page (hero + first FAQ). The rest of the FAQs need to be rewritten in the same key.
