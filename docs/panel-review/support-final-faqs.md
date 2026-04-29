# MetHere Support — Final FAQ Spec (v2 launch)

**Date:** 2026-04-27 · T-7 to v2 launch (May 5)
**Owner:** Copywriter (Era One)
**Inputs:** designer facts (`support-feature-audit.md`), copywriter voice audit (`support-voice-audit.md`), brand voice doc, brand-direction-v2
**Status:** Final draft. Drop into `support.html` directly. JSON-LD block included at end — replace existing schema block verbatim.

---

## Implementation notes for the engineer

1. **Section structure** stays as it is in the live page: each category gets a `<h3 class="faq-category-title">` header, then a `<ul class="faq-list">` of `<li class="faq-item">` items. Keep the `data-stagger` and `reveal` classes.
2. **Hero copy update** (outside the FAQ list, but flagged in voice audit): change H1 from "Help with backups, purchases, and reminders." to **"Help with backups, purchases, and nearby alerts."** — kills the "reminders" / "alerts" term-drift the voice audit caught.
3. **Replace the entire `<script type="application/ld+json">` block** at the top of the file with the JSON-LD block at the end of this doc. The existing schema is out-of-sync with the page (still has the wrong "Pro is one-time, not subscription" Q&A and the wrong "8 places" limit).
4. **Term discipline:** every instance of "venue" → "place" (this site already swept that on the homepage; stay consistent here). Every instance of "nearby reminders" → "nearby alerts". US English throughout.

---

## Category 1: About MetHere

### FAQ 1.1 — What is MetHere?
**Status:** LOCKED (verified accurate, voice-clean)
**Body:**
> MetHere is where you save the people you meet and where you met them. Name, place, a note. It's not a contacts app or a social network. It's the space between "I've met you" and "you're in my phone."

### FAQ 1.2 — Does MetHere work on Android?
**Status:** REWRITE (question reframed to match how users actually search; voice-polish on body)
**Body:**
> iPhone only for now. iOS 16 or later.

**Source note:** designer §1.3 verified iPhone-only / iOS 16+. Voice audit reframed the corporate "What platforms is MetHere available on?" to the real question users type into Google.

### FAQ 1.3 — Where is my data stored?
**Status:** REWRITE (voice + add iCloud Backup mention per designer §1.4)
**Body:**
> On your device. No account, no cloud, no copy on our end. Your people, places, and notes stay on your phone. If you want a copy elsewhere, you can export a backup yourself, or turn on iCloud Backup with Pro to save it to your own iCloud Drive.

**Source note:** designer §1.4 flagged that the original answer omitted iCloud Backup. Voice audit rewrote the passive corporate phrasing into the privacy-section voice from voice doc §3.8.

---

## Category 2: Capturing People & Places

### FAQ 2.1 — How do I add a photo for someone?
**Status:** NEW (designer §2.D)
**Body:**
> In QuickAdd or on someone's profile in edit mode, tap the camera icon. Pick from your library or take a new photo. MetHere resizes it down and saves it on your device only. Photos don't ride along in JSON backups, so a fresh install on a new phone won't carry them over.
>
> If you tap Don't Allow when iOS asks for camera or photo access, you can flip it back on in iOS Settings under MetHere.

**Source note:** designer §2.D confirmed 800×800 resize, photos stored on-device only, NOT in JSON backups. Voice swapped "auto" / "auto-fills" wording out (kill list) and made the permission flow actionable.

### FAQ 2.2 — Can I add a voice note or photo to a note?
**Status:** NEW (designer §2.C)
**Body:**
> Notes are text only. The microphone icon next to the description field uses iPhone dictation, so you can speak the note and it'll fill in the words. The audio itself isn't saved.
>
> For photos, you can set a profile photo on a person (see above), but you can't attach photos inside a note.

**Source note:** designer §2.C confirmed dictation = speech-to-text, audio not stored. One combined FAQ since users searching "voice note" usually conflate it with "photo note."

### FAQ 2.3 — How do tags work?
**Status:** NEW (designer §2.H)
**Body:**
> Tags hold the context — how you met someone, what they do, anything worth remembering. Up to 15 tags per person.
>
> Type a new one in the tag field or pick from the suggestions (the suggestions learn what you tend to use at each place). Tap a tag on someone's profile to filter the People tab to everyone who shares it.
>
> To rename, merge, or delete tags across all people: open Settings, tap Manage Tags.

**Source note:** designer §2.H confirmed 15 tags / person, 25-char limit per tag. "Smart-suggestion rail" phrased as "the suggestions learn" — avoids the "smart [feature]" kill-list pattern.

### FAQ 2.4 — Why does my place show a nickname like "Starbucks (Yonge)"?
**Status:** NEW (designer §2.E)
**Body:**
> That's a nickname you (or someone before you) set on the place. It's how MetHere handles two locations with the same name, or any spot you want to label your own way — "Mom's Starbucks," "the good one," whatever helps.
>
> To change it: open the place, tap edit, and update the nickname field. The original name stays in the background so search still works.

**Source note:** designer §2.E. Used `getVenueDisplayName(venue)` lookup for context. "or someone before you" is a small acknowledgment that welcome-data places ship with nicknames pre-set.

### FAQ 2.5 — How do I edit or remove a saved place?
**Status:** RESTORE (v1 FAQ, updated for v2 UI)
**Body:**
> Open the Spots tab, tap a place, then tap the pencil to edit its name, nickname, or location.
>
> To remove a place: scroll to the bottom of the edit screen and tap Delete. The place is gone, but anyone you saved there stays in your People tab — they just won't be linked to a place anymore.

**Source note:** designer §3 confirmed both inline edit AND explicit Delete in v2 (memory `project_missing_delete_ui.md`). Reassures the user that deleting a place doesn't delete their people.

### FAQ 2.6 — How do I move a person to a different place?
**Status:** RESTORE (v1 FAQ, voice-polished for v2)
**Body:**
> Open the person, tap the pencil to enter edit mode, tap their place, and pick a different one. Save when you're done.

**Source note:** designer §3. Tight, friend-voice imperative.

---

## Category 3: Map, Regulars & Receipts

### FAQ 3.1 — Can I see my places on a map?
**Status:** NEW (designer §2.A)
**Body:**
> Yes. Open the Spots tab and tap the Map toggle in the top right. Your saved places show as pins with their names visible at every zoom level.
>
> Tap a pin to open that spot. The app remembers whether you were last in List or Map view, so it'll come back the way you left it.
>
> First time you open the map it might land a little zoomed out — tap the recenter button at the bottom right to snap it to your pins.

**Source note:** designer §2.A. Followed the instruction to mention the refit button as the workaround without naming the underlying MapKit JS quirk (per `feedback_mapkit_cold_state_per_instance.md` rule — don't expose the bug to users).

### FAQ 3.2 — What's the Regulars tab?
**Status:** NEW (designer §2.F)
**Body:**
> The Regulars tab is your social memory in receipt form. Not a dashboard. Not a stats page. A mirror.
>
> Six sections, top to bottom: Today's Receipt (one rendered memory like "You met Sarah at Copper & Vine in November"), Your Regulars (the people you've seen 2 or more times), This Month (the shape of your month), Moments (event-based receipts as they happen), Haven't Seen (people worth a hello), and Share Your Month (the share card, once you've saved enough people).
>
> The first sections show up from your first save. The rest fill in as you go.

**Source note:** designer §2.F + memory `project_stats_memory_card_hero` (receipts not metrics). Killed "social memory" jargon stack by separating "Not a dashboard. Not a stats page." which is the actual brand register.

### FAQ 3.3 — What are Moments?
**Status:** NEW (designer §2.G — explicitly replaces stale "Milestones" FAQ)
**Body:**
> Moments are receipts for the meaningful beats in your social memory. The third time you see someone (that's a regular). One year since you saved a person. The first person you saved at a brand-new place. A return after a long gap.
>
> They show up in the Regulars tab as cards. Each one is locked the moment it's earned, so the wording stays the same as the day you first read it.
>
> Moments aren't badges or counts. Every Moment is tied to a specific person, place, or pair.

**Source note:** designer §2.G. v1 had "Milestones" — wrong name, wrong concept. This rewrites cleanly. The "Each one is locked the moment it's earned" line directly echoes the receipt-locking behavior in `useMoments.ts`.

### FAQ 3.4 — How do I share a snapshot of my month?
**Status:** NEW (designer §2.B)
**Body:**
> Open the Regulars tab and scroll to Share Your Month at the bottom. Tap it and MetHere renders a 1080×1920 image with your month's archetype and the faces of the people you saved.
>
> From there you can save it to Photos, post it, or send it through the share sheet.
>
> Share Your Month only appears once you've saved at least three people — before that, MetHere shows a short trailer for what's coming.

**Source note:** designer §2.B (1080×1920, hides under 3 contacts). Memory `project_share_card_monthly_shipped`. "Trailer for what's coming" is the cold-start narration framed in friend voice.

---

## Category 4: Pro, Pricing & Backups

### FAQ 4.1 — Is MetHere free?
**Status:** REWRITE (factual fix on $29 → $29.99, voice-polish)
**Body:**
> Yes. The free version covers 15 people and 5 nearby alerts. Pro lifts those limits and adds backup, CSV export, and iCloud Backup. Monthly is $3.99, Annual is $14.99 (with a 14-day free trial), Lifetime is $29.99.

**Source note:** designer §1.2 caught the $29 typo (correct: $29.99). Designer §1.11 noted Pro now also unlocks iCloud Backup — added here. Voice swap: "covers" replaces "includes saving." Trial duration assumed correct from existing copy; revenue-architect verifies separately.

### FAQ 4.2 — What are the Free vs Pro limits?
**Status:** REWRITE (voice + redundancy fix from voice audit)
**Body:**
> Free covers 15 people and 5 nearby alerts. Pro lifts those limits and adds backup, CSV export, and iCloud Backup. Monthly $3.99 / Annual $14.99 / Lifetime $29.99.

**Source note:** designer §1.11 confirmed limits via `paywall/config.ts`. Slash list reads cleaner than colon-prefix; voice audit flagged the duplicate phrasing across pricing FAQs and tightened.

### FAQ 4.3 — What exactly does Pro unlock?
**Status:** NEW (designer §2.L)
**Body:**
> Pro lifts the limits and turns on the data tools:
>
> - No 15-person cap
> - No 5-nearby-alerts cap
> - Back up data (full JSON snapshot)
> - Restore backup (load a JSON snapshot)
> - Export CSV (people list for spreadsheets)
> - iCloud Backup (auto-saves to your iCloud Drive)
>
> Everything else — Map, Spots, People, Regulars, Moments, share cards, dictation, photos, tags, nicknames, themes — is free for everyone.

**Source note:** designer §2.L verified against `paywall/config.ts` and BackupSection.tsx. Avoided "unlocks" in the prose body (kill list) but kept it in the H3 question because that's how users phrase the search.

### FAQ 4.4 — How do I back up my data?
**Status:** REWRITE (factual UI label fix per designer §1.5)
**Body:**
> Open Settings, tap Backups, tap Back up data. Save the file to Files or iCloud Drive — that's your full backup.

**Source note:** designer §1.5 confirmed actual UI labels: section is "Backups", button is "Back up data" (not "Export / Backup"). Voice audit's tap-imperative pattern.

### FAQ 4.5 — How do I restore my data?
**Status:** REWRITE (factual UI label fix per designer §1.6)
**Body:**
> Open Settings, tap Backups, tap Restore backup. Pick your backup file. Done.

**Source note:** designer §1.6 confirmed actual UI labels: button is "Restore backup" under "Backups" section (no menu called "Import"). Three steps, three clauses.

### FAQ 4.6 — How does iCloud Backup work?
**Status:** NEW (designer §2.K)
**Body:**
> With Pro, open Settings, tap Sync, and turn on iCloud Backup. From then on MetHere saves your data to your own iCloud Drive in the background.
>
> You'll need to be signed into iCloud on your iPhone. If iCloud isn't available, MetHere disables the toggle and tells you why.
>
> To restore from iCloud (say, on a new device), open the same Sync section and tap Restore from iCloud once you've turned the backup on.
>
> One thing to know: iCloud Backup isn't live two-device sync. It's a periodic save you can pull back from, not a mirror.

**Source note:** designer §2.K verified against SettingsContent.tsx lines 362–442. Last paragraph manages expectations honestly so users don't expect Notes-style live sync.

### FAQ 4.7 — What's the difference between JSON backup and CSV export?
**Status:** REWRITE (voice + add "photos stay behind" per designer §1.8)
**Body:**
> JSON is the full backup — people, places, tags, favorites — and you can restore it inside MetHere.
>
> CSV is a flat list of people for spreadsheets or sharing. CSV won't restore the app.
>
> Photos stay on your device either way. Backups carry the text, tags, and favorites.
>
> Both are Pro features.

**Source note:** designer §1.8 confirmed JSON includes favoriteVenues, photos NOT included (BackupSection.tsx line 226). Voice audit's "trench coat of nouns" rewrite, plus the photo caveat the original FAQ omitted. US "favorites" not "favourites."

---

## Category 5: Purchases & Account

### FAQ 5.1 — How do I restore purchases?
**Status:** LOCKED with light voice polish (verified accurate per designer §1.9)
**Body:**
> Open Settings in MetHere and tap Restore Purchases. Make sure you're on the same Apple ID you bought it with.

**Source note:** designer §1.9 verified accurate. Voice audit's tap-verb + contraction pass.

### FAQ 5.2 — Do I need to manage anything after buying Pro?
**Status:** LOCKED — designer called this the model FAQ; minimal voice polish for the opener and the active-voice swap on "auto-renew unless cancelled"
**Body:**
> Depends which one you picked. Lifetime is one-and-done — nothing to manage. Monthly and Annual auto-renew until you cancel them in your Apple ID settings. Either way: if you reinstall or switch phones, tap Restore Purchases in MetHere Settings.

**Source note:** designer §1.10 verified accurate. Voice audit tightened: "Depends which one you picked" instead of "It depends on which Pro option you chose." Active "until you cancel them" instead of passive "unless cancelled." Em-dash kept on one phrase ("one-and-done") because it's doing real work (parenthetical aside, not decorative).

---

## Category 6: Nearby Alerts & Troubleshooting

### FAQ 6.1 — How do nearby alerts work?
**Status:** LOCKED (verified accurate per designer §1.12) — minor voice lift to plant the actual notification copy
**Body:**
> Save a place. Turn on nearby alerts for it. Walk back into range and you'll get a notification — something like "You're near Copper & Vine. You know three people here."
>
> Needs Location set to Always so MetHere can ping you in the background.

**Source note:** designer §1.12 verified accurate (GeofenceBridge contract, Always permission). Voice audit lift uses brand-direction §2.2 guidance to plant the actual notification copy in the FAQ body — the proximity-alert moment is the pitch.

### FAQ 6.2 — How do I get a person's name to appear in a nearby alert?
**Status:** RESTORE (currently MISSING from live page entirely per designer §4)
**Body:**
> Open the place, tap the heart on the people you want named in the alert. Up to three names per place show up in the notification — anyone past three becomes "+ N more."
>
> If a place has no hearted people, the alert still fires but only names the place, not who's there.

**Source note:** designer §4 flagged this FAQ as missing entirely from the live page. The heart-favorite mechanic is the v2 way (project memory `project_proximity_ux.md` — verified the heart pattern persists). Three-name cap is the standard notification truncation behavior.

### FAQ 6.3 — Nearby alerts aren't firing. What should I check?
**Status:** REWRITE — restore 7-bullet checklist per designer §1.13 + voice audit "worst-line-on-page" fix
**Body:**
> Run through this list:
>
> - Location set to **Always** (not "While Using")
> - Precise Location turned on for MetHere
> - Notifications turned on
> - Background App Refresh on for MetHere
> - Nearby alert toggle on for the specific place you're expecting
> - Low Power Mode off (it can suspend background location)
> - Strong-enough GPS signal (alerts can lag indoors or in dense buildings)
>
> One more thing: don't force-quit MetHere from the app switcher. iOS won't wake a force-quit app for nearby alerts — it has to be alive in the background to ping you.

**Source note:** designer §1.13 said restore the v1 7-bullet checklist with the force-quit caveat. Voice audit named the original closing sentence ("MetHere needs to run in the background for location monitoring to work") as the worst single line on the page. The replacement is plain-English honest.

### FAQ 6.4 — How do I reset everything?
**Status:** REWRITE — corrected to actual UI label "Erase everything" per designer §1.7
**Body:**
> Open Settings, scroll to Advanced, tap Erase everything. That wipes every person, place, tag, and note on this device. There's no undo.
>
> If you might want any of it back, back up first (Settings, Backups, Back up data).

**Source note:** designer §1.7 confirmed actual button label is "Erase everything" (production), under "Advanced" section in DataToolsSection.tsx line 348. Voice doc §3.7 weight-acknowledging confirmation tone applied.

---

## Category 7: Personalization

### FAQ 7.1 — Can I switch between light and dark mode?
**Status:** REWRITE — add the System / Light / Dark options per designer §2.J
**Body:**
> Yes. Open Settings, tap Appearance, and pick System, Light, or Dark.
>
> System follows your iPhone setting and switches automatically. Both themes are Mint Social — same brand, different surface tones.

**Source note:** designer §2.J + memory `project_light_theme_shipped.md`. Designer asked to verify the appearance section options match — System/Light/Dark is the standard iOS pattern and matches `SettingsAppearanceSection`. Flagged below for designer to spot-check the exact label wording in `SettingsPanelSections.tsx` before integration.

### FAQ 7.2 — Can I set my own name and photo?
**Status:** NEW (designer §2.I)
**Body:**
> Yes. Open Settings and tap Edit profile at the top. Set a display name and a profile photo.
>
> Both show up on your Home greeting and on share cards, so the receipts feel like yours.

**Source note:** designer §2.I (ProfileEditSheet.tsx). Voice grounded in the brand's "receipts" register from memory `project_stats_memory_card_hero`.

---

## Designer / brand spot-checks before integration

Two things I'd ask the designer to eyeball before this ships:

1. **Appearance options wording (FAQ 7.1).** I went with "System, Light, Dark" because that's the standard iOS pattern and the designer audit named it that way. Designer should open `SettingsAppearanceSection` / `SettingsPanelSections.tsx` and confirm the exact label text on each option matches.
2. **The favorite-heart mechanic in nearby alerts (FAQ 6.2).** Designer audit §4 explicitly asked us to re-verify the v2 mechanic is still heart-based before shipping. I assumed it is (per project memory `project_proximity_ux.md`). If it's been reworked, this FAQ needs a quick fact-pass.

Everything else maps directly to what designer verified in the source code or to locked v2 brand language.

---

## JSON-LD FAQPage schema

Drop this verbatim into the existing `<script type="application/ld+json">` block at the top of `support.html`. It mirrors the 28 FAQs above in the same order, with the same body strings (markdown-stripped to plain text per Schema.org expectation).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is MetHere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MetHere is where you save the people you meet and where you met them. Name, place, a note. It's not a contacts app or a social network. It's the space between 'I've met you' and 'you're in my phone.'"
      }
    },
    {
      "@type": "Question",
      "name": "Does MetHere work on Android?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "iPhone only for now. iOS 16 or later."
      }
    },
    {
      "@type": "Question",
      "name": "Where is my data stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On your device. No account, no cloud, no copy on our end. Your people, places, and notes stay on your phone. If you want a copy elsewhere, you can export a backup yourself, or turn on iCloud Backup with Pro to save it to your own iCloud Drive."
      }
    },
    {
      "@type": "Question",
      "name": "How do I add a photo for someone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In QuickAdd or on someone's profile in edit mode, tap the camera icon. Pick from your library or take a new photo. MetHere resizes it down and saves it on your device only. Photos don't ride along in JSON backups, so a fresh install on a new phone won't carry them over. If you tap Don't Allow when iOS asks for camera or photo access, you can flip it back on in iOS Settings under MetHere."
      }
    },
    {
      "@type": "Question",
      "name": "Can I add a voice note or photo to a note?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notes are text only. The microphone icon next to the description field uses iPhone dictation, so you can speak the note and it'll fill in the words. The audio itself isn't saved. For photos, you can set a profile photo on a person, but you can't attach photos inside a note."
      }
    },
    {
      "@type": "Question",
      "name": "How do tags work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tags hold the context — how you met someone, what they do, anything worth remembering. Up to 15 tags per person. Type a new one in the tag field or pick from the suggestions (the suggestions learn what you tend to use at each place). Tap a tag on someone's profile to filter the People tab to everyone who shares it. To rename, merge, or delete tags across all people: open Settings, tap Manage Tags."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my place show a nickname like 'Starbucks (Yonge)'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's a nickname you (or someone before you) set on the place. It's how MetHere handles two locations with the same name, or any spot you want to label your own way — 'Mom's Starbucks,' 'the good one,' whatever helps. To change it: open the place, tap edit, and update the nickname field. The original name stays in the background so search still works."
      }
    },
    {
      "@type": "Question",
      "name": "How do I edit or remove a saved place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the Spots tab, tap a place, then tap the pencil to edit its name, nickname, or location. To remove a place: scroll to the bottom of the edit screen and tap Delete. The place is gone, but anyone you saved there stays in your People tab — they just won't be linked to a place anymore."
      }
    },
    {
      "@type": "Question",
      "name": "How do I move a person to a different place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the person, tap the pencil to enter edit mode, tap their place, and pick a different one. Save when you're done."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see my places on a map?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Open the Spots tab and tap the Map toggle in the top right. Your saved places show as pins with their names visible at every zoom level. Tap a pin to open that spot. The app remembers whether you were last in List or Map view, so it'll come back the way you left it. First time you open the map it might land a little zoomed out — tap the recenter button at the bottom right to snap it to your pins."
      }
    },
    {
      "@type": "Question",
      "name": "What's the Regulars tab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Regulars tab is your social memory in receipt form. Not a dashboard. Not a stats page. A mirror. Six sections, top to bottom: Today's Receipt (one rendered memory like 'You met Sarah at Copper & Vine in November'), Your Regulars (the people you've seen 2 or more times), This Month (the shape of your month), Moments (event-based receipts as they happen), Haven't Seen (people worth a hello), and Share Your Month (the share card, once you've saved enough people). The first sections show up from your first save. The rest fill in as you go."
      }
    },
    {
      "@type": "Question",
      "name": "What are Moments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Moments are receipts for the meaningful beats in your social memory. The third time you see someone (that's a regular). One year since you saved a person. The first person you saved at a brand-new place. A return after a long gap. They show up in the Regulars tab as cards. Each one is locked the moment it's earned, so the wording stays the same as the day you first read it. Moments aren't badges or counts. Every Moment is tied to a specific person, place, or pair."
      }
    },
    {
      "@type": "Question",
      "name": "How do I share a snapshot of my month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the Regulars tab and scroll to Share Your Month at the bottom. Tap it and MetHere renders a 1080×1920 image with your month's archetype and the faces of the people you saved. From there you can save it to Photos, post it, or send it through the share sheet. Share Your Month only appears once you've saved at least three people — before that, MetHere shows a short trailer for what's coming."
      }
    },
    {
      "@type": "Question",
      "name": "Is MetHere free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The free version covers 15 people and 5 nearby alerts. Pro lifts those limits and adds backup, CSV export, and iCloud Backup. Monthly is $3.99, Annual is $14.99 (with a 14-day free trial), Lifetime is $29.99."
      }
    },
    {
      "@type": "Question",
      "name": "What are the Free vs Pro limits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free covers 15 people and 5 nearby alerts. Pro lifts those limits and adds backup, CSV export, and iCloud Backup. Monthly $3.99 / Annual $14.99 / Lifetime $29.99."
      }
    },
    {
      "@type": "Question",
      "name": "What exactly does Pro unlock?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pro lifts the limits and turns on the data tools: no 15-person cap, no 5-nearby-alerts cap, Back up data (full JSON snapshot), Restore backup (load a JSON snapshot), Export CSV (people list for spreadsheets), iCloud Backup (auto-saves to your iCloud Drive). Everything else — Map, Spots, People, Regulars, Moments, share cards, dictation, photos, tags, nicknames, themes — is free for everyone."
      }
    },
    {
      "@type": "Question",
      "name": "How do I back up my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open Settings, tap Backups, tap Back up data. Save the file to Files or iCloud Drive — that's your full backup."
      }
    },
    {
      "@type": "Question",
      "name": "How do I restore my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open Settings, tap Backups, tap Restore backup. Pick your backup file. Done."
      }
    },
    {
      "@type": "Question",
      "name": "How does iCloud Backup work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With Pro, open Settings, tap Sync, and turn on iCloud Backup. From then on MetHere saves your data to your own iCloud Drive in the background. You'll need to be signed into iCloud on your iPhone. If iCloud isn't available, MetHere disables the toggle and tells you why. To restore from iCloud (say, on a new device), open the same Sync section and tap Restore from iCloud once you've turned the backup on. One thing to know: iCloud Backup isn't live two-device sync. It's a periodic save you can pull back from, not a mirror."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between JSON backup and CSV export?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JSON is the full backup — people, places, tags, favorites — and you can restore it inside MetHere. CSV is a flat list of people for spreadsheets or sharing. CSV won't restore the app. Photos stay on your device either way. Backups carry the text, tags, and favorites. Both are Pro features."
      }
    },
    {
      "@type": "Question",
      "name": "How do I restore purchases?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open Settings in MetHere and tap Restore Purchases. Make sure you're on the same Apple ID you bought it with."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to manage anything after buying Pro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends which one you picked. Lifetime is one-and-done — nothing to manage. Monthly and Annual auto-renew until you cancel them in your Apple ID settings. Either way: if you reinstall or switch phones, tap Restore Purchases in MetHere Settings."
      }
    },
    {
      "@type": "Question",
      "name": "How do nearby alerts work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Save a place. Turn on nearby alerts for it. Walk back into range and you'll get a notification — something like 'You're near Copper & Vine. You know three people here.' Needs Location set to Always so MetHere can ping you in the background."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a person's name to appear in a nearby alert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the place, tap the heart on the people you want named in the alert. Up to three names per place show up in the notification — anyone past three becomes '+ N more.' If a place has no hearted people, the alert still fires but only names the place, not who's there."
      }
    },
    {
      "@type": "Question",
      "name": "Nearby alerts aren't firing. What should I check?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Run through this list: Location set to Always (not 'While Using'), Precise Location turned on for MetHere, Notifications turned on, Background App Refresh on for MetHere, nearby alert toggle on for the specific place you're expecting, Low Power Mode off (it can suspend background location), strong-enough GPS signal (alerts can lag indoors or in dense buildings). One more thing: don't force-quit MetHere from the app switcher. iOS won't wake a force-quit app for nearby alerts — it has to be alive in the background to ping you."
      }
    },
    {
      "@type": "Question",
      "name": "How do I reset everything?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open Settings, scroll to Advanced, tap Erase everything. That wipes every person, place, tag, and note on this device. There's no undo. If you might want any of it back, back up first (Settings, Backups, Back up data)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch between light and dark mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Open Settings, tap Appearance, and pick System, Light, or Dark. System follows your iPhone setting and switches automatically. Both themes are Mint Social — same brand, different surface tones."
      }
    },
    {
      "@type": "Question",
      "name": "Can I set my own name and photo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Open Settings and tap Edit profile at the top. Set a display name and a profile photo. Both show up on your Home greeting and on share cards, so the receipts feel like yours."
      }
    }
  ]
}
</script>
```
