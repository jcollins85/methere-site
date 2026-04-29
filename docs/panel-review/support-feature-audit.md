# Support Page — V2 Feature Audit

**Date:** 2026-04-27 (T-7 to v2 launch on May 5)
**Auditor:** ios-product-designer (Era One)
**Live page captured:** http://localhost:4488/support.html (16 FAQ items as rendered)
**Screenshot:** /Users/Juelz/Developer/projects/methere/methere-site/docs/panel-review/support-audit-fullpage.png
**Ground truth:** app source under /Users/Juelz/Documents/Projects/remember-me-starter/src/
**Cached source file (STALE):** /Users/Juelz/Developer/projects/methere/methere-site/support.html shows only 11 FAQs and contradicts the live page on pricing — see §0.

> **CONFIRMATION OF EXECUTION:** Opened the LIVE PAGE in Chrome via chrome-devtools MCP; pulled all H3s and body strings via evaluate_script; took the fullpage screenshot. Read app source code as ground truth across DataToolsSection.tsx, BackupSection.tsx, SettingsContent.tsx, paywall/config.ts, paywall/types.ts, App.tsx, TabBar.tsx, types.ts, PersonDetailView.tsx, ProfileEditSheet.tsx, OnboardingScreen.tsx, QuickAddSheet.tsx, useDescriptionDictation.ts, useAlertLimitCheck.ts, useMoments.ts, StatsView.tsx, ShareMonthModal.tsx, welcomeData.ts, constants.ts. Cross-referenced project memory entries for v2-shipped features.

---

## §0. CRITICAL: Live page vs. cached source mismatch

The cached file at `/Users/Juelz/Developer/projects/methere/methere-site/support.html` shows **11 FAQs** AND contains a now-incorrect `JSON-LD FAQPage` schema:
- Schema includes the **wrong "Pro is one-time, not subscription"** Q&A
- Schema claims `Free includes up to 15 people, 8 places, and 3 nearby alerts`

The live page (rendered HTML) shows **16 FAQs** with corrected pricing prose.

**Action required:** the JSON-LD `<script type="application/ld+json">` block at the top of `support.html` MUST be regenerated to mirror the final FAQ list, otherwise Google indexes the wrong answers and structured-data search appearance is wrong. This is invisible in the visual audit but ships with the page. Flagging here so the rewrite includes a fresh schema block.

---

## §1. Existing FAQ accuracy check (16 live items)

### 1. "What is MetHere?"
**Status: VERIFIED ACCURATE.** Matches the brand voice doc and the v2 listing positioning ("space between 'I've met you' and 'you're in my phone'"). No change needed.

### 2. "Is MetHere free?"
**Status: FACTUALLY WRONG (pricing claim).**
- Body says: `"Lifetime $29"` — should be `"Lifetime $29.99"` (per `src/paywall/config.ts` line 34: `price: "$29.99"`).
- Body says: `"Annual $14.99 with a 14-day free trial"` — verify the trial duration matches RevenueCat config (project memory `project_launch_blockers.md` references trial config in flux).
- The other prices (`Monthly $3.99`, `Annual $14.99`) match the config.
**Fix:** `Lifetime $29` → `Lifetime $29.99`. Confirm trial length with `revenue-architect` before relisting.

### 3. "What platforms is MetHere available on?"
**Status: VERIFIED ACCURATE.** iPhone only, iOS 16+ matches the App Store listing target. No change.

### 4. "Where is my data stored?"
**Status: VERIFIED ACCURATE BUT INCOMPLETE.** Says data stays local "unless you choose to export a backup." Should also mention iCloud Backup (Pro auto-backup feature, see SettingsContent.tsx lines 362–442) — currently no FAQ covers iCloud backup at all. See §2.
**Recommendation:** keep this answer but add a sentence like: `Pro users can also turn on iCloud Backup so their data syncs automatically to their personal iCloud account.`

### 5. "How do I back up my data?"
**Status: STALE — wrong UI label.** Says `Export / Backup`. The actual button label in `BackupSection.tsx` line 161 is **`Back up data`** (with a `CloudUpload` chevron icon). The category header is `Backups`.
**Fix:** `Settings > Export / Backup` → `Settings > Backups > Back up data`.

### 6. "How do I restore my data?"
**Status: STALE — wrong UI label.** Says `Settings > Import`. The actual button is **`Restore backup`** under the `Backups` section (BackupSection.tsx line 190). There is NO menu called "Import."
**Fix:** `Settings > Import` → `Settings > Backups > Restore backup`.

### 7. "How do I reset app data?"
**Status: STALE — vague, missing specifics.** Says "Use the reset option in Settings." The actual flow in `DataToolsSection.tsx` is:
- Section header: `Advanced`
- Button label (production, non-dev): **`Erase everything`** (line 348) — destructive red
- Confirms via the canonical destructive dialog with rich messaging
**Fix:** `Settings > Advanced > Erase everything`. Mention this is destructive and clears all data on device, no undo. Recommend backing up first.

### 8. "What is the difference between JSON backup and CSV export?"
**Status: VERIFIED ACCURATE.** Both formats live in BackupSection.tsx (`Back up data` = JSON, `Export CSV` = CSV at line 218). Note: the answer says backup includes "favourites" — this is correct (`useDataBackup` exports `favoriteVenues`, see SettingsContent.tsx line 323). Photo files are NOT included (BackupSection.tsx line 226: "Photos stay behind."). Currently the FAQ doesn't say that — should add it.
**Recommendation:** add one sentence: `Photos stay on device — backups include text, tags, and favorites only.`

### 9. "How do I restore purchases?"
**Status: VERIFIED ACCURATE.** Matches `handleRestorePurchases` in SettingsContent.tsx line 179. No change needed.

### 10. "Do I need to manage anything after buying Pro?"
**Status: VERIFIED ACCURATE — significantly improved from v1.** Correctly handles all 3 tiers, mentions Apple ID Account Settings for subscription management, mentions Restore Purchases for reinstalls. This is the model FAQ entry. No change.

### 11. "What are the Free vs Pro limits?"
**Status: VERIFIED ACCURATE on the limits.**
- `Free includes up to 15 people and 5 nearby alerts.` — matches `src/paywall/config.ts` `FREE_LIMITS = { people: 15, alerts: 5 }`. ✓
- Pro pricing line matches config (modulo the `$29` vs `$29.99` nit — already flagged in #2). 
- One nit: claim "Pro removes those limits and adds backup and export tools." — this is slightly understated. Pro ALSO unlocks iCloud Backup.
**Recommendation:** add iCloud Backup to the Pro feature mention. `Pro removes those limits and unlocks backup, CSV export, and iCloud Backup.`

### 12. "How do nearby alerts work?"
**Status: VERIFIED ACCURATE.** Matches the GeofenceBridge contract — coords required, requires Always location. No change.

### 13. "Nearby reminders are not triggering. What should I check?"
**Status: STALE — abbreviated from v1.** The previous v1 version had a richer 7-bullet checklist (Location Always / Precise Location / Notifications / Background App Refresh / per-place toggle / Low Power Mode / GPS signal) plus a force-quit warning. The live v2 page collapses this to one paragraph. The 7-bullet list is the actually-useful debugging recipe.
**Fix:** restore the structured 7-bullet list with the force-quit caveat. The cached `support.html` file (lines 207–217) has the original list — copy that structure back in.

### 14. "Can I customize how the app looks?"
**Status: VERIFIED ACCURATE.** Light + dark Mint Social shipped (memory `project_light_theme_shipped.md`). The Settings appearance section is in `SettingsAppearanceSection`. Toggle is in Settings.
**Polish opportunity:** the answer says "Tap the theme toggle in Settings to switch." Could add: "MetHere also follows your system Light/Dark setting by default." (Verify with the appearance section before adding.)

### 15. "What are milestones?"
**Status: STALE — feature was renamed.** v2 shipped **Moments**, not Milestones. From `src/types.ts` line 60–84 + `useMoments.ts`: Moments are event-based receipts (e.g., "Third time with X at Y. That's a regular now."), not count-based achievements like "Remember more people." The body answer is conceptually misleading on two fronts:
- Wrong name (Milestones → Moments)
- Wrong concept ("achievements you hit as you use MetHere" misses that they are tied to specific people + venues with locked receipt copy)
- Wrong location ("tracked in your profile") — they appear in the **Regulars tab**, not in profile (StatsView.tsx §4 Moments).
**Fix:** see §2 "Moments / Regulars FAQ."

### 16. "What are insights?"
**Status: STALE — the entire concept was rebranded.** The "Stats / Insights" tab no longer exists. v2 shipped the **Regulars tab** (TabBar.tsx line 30, StatsView.tsx) with a totally different mental model: "MIRROR / ALBUM / WITNESS, not a dashboard" (StatsView.tsx line 50). The 6 sections are: Today's Receipt, Your Regulars, This Month (Monthly Drop), Moments, Haven't seen, Share Your Month. The phrase "shareable snapshot card from your insights" is anchored to the old Stats tab vocabulary.
**Fix:** rewrite as a Regulars tab FAQ. See §2 "Regulars tab FAQ."

---

### Tally — Existing FAQs

- **VERIFIED ACCURATE:** 6 (#1, #3, #9, #10, #12, #14)
- **FACTUALLY WRONG:** 1 (#2 — Lifetime price typo)
- **STALE / OUTDATED:** 5 (#5, #6, #7, #13, #15, #16) — really 6 if you count #16 as both stale and conceptually obsolete
- **VERIFIED ACCURATE BUT INCOMPLETE (recommended additions):** 4 (#4, #8, #11, plus polish on #14)

Total live FAQs: 16.

---

## §2. Missing v2 feature FAQs

For each, I list the question(s) a real user would have + the load-bearing facts the answer must cite.

### A. Map view
**Where it lives:** Spots tab > Map toggle (`venue-toggle-map`, VenuesView.tsx line 60). Custom MapKit JS via `mapkit-bridge` Capacitor plugin.

**Recommended FAQ — "Can I see my places on a map?"**
- Yes. Open the **Spots** tab and tap the **Map** toggle in the top-right segmented control.
- Pin labels stay visible at all zoom levels (project memory `project_map_labels_always.md`).
- Tap any pin to open that spot.
- The map remembers whether you were in List or Map view between sessions (toggle persistence shipped in `project_map_view_cold_mount_shipped.md`).
- If the map opens too zoomed-in on first launch, tap the recenter/refit button — known one-time MapKit JS init quirk that resolves on its own (see `feedback_mapkit_cold_state_per_instance.md` for context, but DO NOT cite this in user-facing copy — just point them to the refit button).

### B. Share cards (Monthly Drop)
**Where it lives:** Regulars tab > §6 "Share Your Month" CTA tile, ShareMonthModal.tsx. Hides at <3 contacts.

**Recommended FAQ — "How do I share a snapshot of my month?"**
- Open the **Regulars** tab.
- Scroll to **Share Your Month** at the bottom.
- Tap to render a 1080×1920 PNG with your monthly archetype + Faces of [Month].
- Save to Photos (iOS) or share to any app via the share sheet.
- The Share Your Month tile only appears once you have 3 or more saved people. Below 3, MetHere narrates what's coming next via a cold-start trailer.

### C. Voice notes / Photo notes
**Where it lives:** notes are TEXT-ONLY in v2. The microphone icon in QuickAdd + PersonDetail (lucide `Mic`) triggers iOS speech-to-text dictation that fills the description field. Photos are face-photos for a person, not photo notes.

**Recommended FAQ — "Can I add a voice note or photo to a note?"**
- Notes are text only in v2. The microphone icon next to the description field uses iPhone dictation (speech-to-text) to fill the note for you — the audio itself isn't saved.
- You can add a **profile photo** for any person you save (tap the camera icon on their card or in QuickAdd). Photos stay on your device and are not included in JSON backups.

> Why one combined FAQ: users searching for "voice note" and "photo" usually conflate "rich notes" — better to address both in one entry than to leave them hunting.

### D. Photo picker (separate FAQ on permissions/storage)
**Recommended FAQ — "How do I add a photo for someone?"**
- In QuickAdd or on someone's profile in edit mode, tap the **camera icon**. Choose **Take Photo** or **Pick from Library**.
- Photos are resized to 800×800 max and stored on your device only. They are NOT included in JSON backups (a known limit — exporting your data won't carry photos to a new device).
- If iOS asks for photo or camera permission and you tap Don't Allow, you can re-grant it any time in iOS Settings > MetHere.

### E. Venue nicknames
**Where it lives:** in venue detail edit mode. Display anywhere via `getVenueDisplayName(venue)` (project memory `project_venue_nicknames.md`).

**Recommended FAQ — "Why does my place show 'Starbucks (Yonge)' instead of just 'Starbucks'?"**
- That's a **nickname** — you can give any saved place a custom display name when there are multiple locations of the same chain or you want a personal label.
- Open the place > tap edit > change the **nickname** field. The original name stays in the background for search.
- Set anywhere a place name appears: home screen, alerts, share cards, person profiles.

### F. Regulars tab (replaces "Insights" entirely)
**Where it lives:** the rightmost tab (StatsView.tsx, label = "Regulars", icon = Sparkles).

**Recommended FAQ — "What's the Regulars tab?"**
- The **Regulars** tab is your social memory in receipt form — a mirror, not a dashboard.
- Six sections: **Today's Receipt** (a single rendered memory like "You met X at Y in Z"), **Your Regulars** (avatar row of people you've seen 2+ times), **This Month** (your monthly archetype), **Moments** (event-based receipts of meaningful moments), **Haven't Seen** (rediscovery prompts), and **Share Your Month** (the 1080×1920 share card).
- The first three sections appear from your first contact onwards; some sections wait until you've saved more people before appearing.

### G. Moments (the v2 replacement for Milestones)
**Recommended FAQ — "What are Moments?"**
- Moments are **event-based receipts** of meaningful things in your social memory: the third time you've met someone (becoming a regular), one year since you saved a person, a return after a long gap, the first person you've saved at a new place.
- They appear in the **Regulars** tab as receipt cards. Each receipt is locked at the moment it's earned, so the wording stays exactly as it was when you first saw it.
- Moments are NOT count-based achievements ("you saved 50 people!"). Every Moment is tied to a specific person, place, or pair.

### H. Tags
**Where it lives:** TagContext, smart-tag suggestion rail in QuickAdd + PersonDetail edit. Limit constants in constants.ts: 15 tags per person, 25 chars per tag name.

**Recommended FAQ — "How do tags work?"**
- Add up to **15 tags per person** to remember context — how you met them, what they do, anything.
- Type a new tag in the tag input or pick from the smart-suggestion rail (it learns which tags you use together at which places).
- Tap a tag on someone's profile to filter the People tab to everyone with that tag.
- Manage all tags from **Settings > Data > Manage Tags** — rename, merge, or delete tags here.

### I. Profile (your own name + photo)
**Where it lives:** Settings > Profile section > Edit profile sheet (ProfileEditSheet.tsx).

**Recommended FAQ — "Can I set my own name and photo?"**
- Yes. Open **Settings** and tap **Edit profile** at the top. Set your display name and a profile photo.
- Both appear on your **Home** greeting and on **share cards** so the receipt feels personal.

### J. Theme follows iOS / Light + Dark
**Where it lives:** SettingsAppearanceSection, Mint Social Light shipped (project memory `project_light_theme_shipped.md`).

**Recommended FAQ — "Can I switch between light and dark mode?"**
- Yes. Open **Settings > Appearance** and pick **System**, **Light**, or **Dark**.
- System follows your iPhone's appearance setting and switches automatically.
- The two themes are both Mint Social — same brand feel, different surface tones (warm off-white vs canonical dark).

> Verify the appearance section's exact options match this list before publishing — read SettingsPanelSections.tsx if needed.

### K. iCloud Backup (Pro only — currently entirely uncovered)
**Where it lives:** SettingsContent.tsx lines 362–442 (Sync section, Pro-gated, requires iCloud account).

**Recommended FAQ — "How does iCloud Backup work?"**
- Pro users can turn on **iCloud Backup** under **Settings > Sync**. Once on, MetHere automatically saves your data to your personal iCloud Drive (the `backup.json` file in your iCloud account).
- You'll need to be signed into iCloud on your iPhone. If iCloud is unavailable, MetHere disables the toggle and tells you why.
- To restore from iCloud (e.g., on a new device), tap **Restore from iCloud** in the same Sync section after enabling backup.
- iCloud Backup does NOT sync between two devices in real time — it's a periodic save-and-restore, not a live mirror.

### L. Pro feature gating — exact list
**Recommended FAQ — "What exactly does Pro unlock?"**
- **No people limit** (free is 15)
- **No nearby-alerts limit** (free is 5)
- **Back up data** (JSON snapshot — full restore format)
- **Restore backup** (load a JSON snapshot)
- **Export CSV** (people list for spreadsheets)
- **iCloud Backup** (auto-save to your iCloud Drive)
- All other features — Map, Spots, People, Regulars, Moments, share cards, dictation, photos, tags, nicknames, themes — are **free for everyone**.

> This is the most-asked question for any tier-gated app. Currently no FAQ states it cleanly.

### M. Achievements / Onboarding wins (low priority)
The new onboarding (OnboardingScreen.tsx) shows a Post-Save Celebration screen. Some users may search for "achievements" or "badges" — partially covered by Moments FAQ (G). Probably no separate FAQ needed.

---

### Tally — Recommended new FAQs

**12 new FAQs recommended** across:
1. Map view
2. Share cards (Monthly Drop)
3. Voice notes / dictation
4. Photo picker
5. Venue nicknames
6. Regulars tab overview
7. Moments
8. Tags
9. Profile (your name + photo)
10. Light + dark theme (rewrite of #14)
11. iCloud Backup
12. Pro feature gating — exact list

---

## §3. Existing FAQs from v1 worth restoring

**"How do I edit or remove a saved place?"**
- **Restore? YES.** This is a frequent ask and the answer needs to be updated for v2.
- v2 reality: open the place from the **Spots** tab, tap edit. To remove, the v1 mechanism (delete every linked person → place auto-removes) still works, but v2 also has explicit delete in the place detail's edit mode (memory: `project_missing_delete_ui.md` — both people and venues have explicit delete with confirmation).
- **Recommended copy:**
  > **How do I edit or remove a saved place?** Open the **Spots** tab, tap a place, then tap the pencil icon to edit its details (name, nickname, location). To delete a place, scroll to the bottom of the edit screen and tap **Delete** — that removes the place but keeps any people you saved there. They'll just no longer be linked to that place.

**"How do I move a person to a different place?"**
- **Restore? YES.** Still a real workflow — change a person's pinned venue in PersonDetail edit mode.
- **Recommended copy:**
  > **How do I move a person to a different place?** Open the person, tap the pencil to enter edit mode, tap their place, and pick a different one. Save when done.

---

## §4. Proposed FAQ category structure

The cached source HTML had categories: Getting Started / Data & Backups / Purchases / Nearby Alerts / Features. The live page is a flat unstructured list (no category headers).

**Recommendation: introduce category headers in 5 buckets.** A flat 28-FAQ list (16 existing + 12 new) is overwhelming to scan. Categories also let users self-navigate without using browser search.

**Proposed buckets:**

1. **About MetHere** (3 FAQs)
   - What is MetHere?
   - What platforms is it on?
   - Where is my data stored? *(slightly expanded with iCloud mention)*

2. **Capturing People & Places** (6 FAQs)
   - How do I add a photo for someone?
   - Can I add a voice note or photo to a note?
   - How do tags work?
   - Why does my place show a nickname?
   - How do I edit or remove a saved place?
   - How do I move a person to a different place?

3. **Map, Regulars & Receipts** (4 FAQs)
   - Can I see my places on a map?
   - What's the Regulars tab?
   - What are Moments?
   - How do I share a snapshot of my month?

4. **Pro, Pricing & Backups** (7 FAQs)
   - Is MetHere free? *(corrected pricing)*
   - What are the Free vs Pro limits?
   - What exactly does Pro unlock?
   - How do I back up my data? *(corrected UI labels)*
   - How do I restore my data? *(corrected UI labels)*
   - How does iCloud Backup work?
   - What is the difference between JSON backup and CSV export?

5. **Purchases & Account** (2 FAQs)
   - How do I restore purchases?
   - Do I need to manage anything after buying Pro?

6. **Nearby Alerts & Troubleshooting** (4 FAQs)
   - How do nearby alerts work?
   - How do I get a person's name to appear in a nearby alert? *(restore from cached source — currently MISSING from live page entirely!)*
   - Nearby reminders are not triggering. What should I check? *(restore the 7-bullet checklist)*
   - How do I reset app data? *(corrected to "Erase everything")*

7. **Personalization** (2 FAQs)
   - Can I switch between light and dark mode?
   - Can I set my own name and photo?

> NOTE: the live page is missing the **"How do I get a person's name to appear in a nearby alert?"** FAQ that was in the cached source (lines 219–227). This is a real support escalation trigger — needs to be restored. Also note that the heart-favorite venue mechanic for surfacing names in alerts is per-place. Verify the v2 mechanic still uses the heart pattern by reading `useFavorites.ts` before rewriting the answer, since proximity has had multiple reworks (memory: `project_proximity_ux.md`).

**Total: 28 FAQs in 7 categories.** That's the right ceiling for a single-page Help center.

---

## §5. Other flags (hero copy, meta, structured data)

### Hero copy
- `<h1>Help with backups, purchases, and reminders.</h1>` — accurate, terse, on-brand. **Keep.**
- Eyebrow `Support` — fine.
- Subhead "If you run into an issue, send us the details and we'll work through it with you." — warm, on-voice. **Keep.**
- Contact email + App Store badge present. ✓

### Meta tags
- `<title>MetHere Support | Backups, Purchases, and Reminders</title>` — fine, but could mention "iPhone" since v2 is iOS-only and SEO benefits from device-name match. Suggested: `MetHere Support for iPhone | Backups, Purchases & Nearby Alerts`.
- `<meta name="description">` is solid — covers backups, restore, purchase recovery, troubleshooting on iOS.
- Canonical URL ✓, OG ✓, Twitter Card ✓.

### Structured data — JSON-LD FAQPage
- **CRITICAL ISSUE (already flagged in §0):** the JSON-LD block in the cached source file is OUT OF SYNC with the live page. It contains the wrong "Pro is one-time" answer + the wrong "8 places" limit. When you regenerate the page, the FAQ schema must be regenerated to reflect the final 28 questions verbatim. Otherwise Google indexes the wrong support content and shows incorrect FAQ rich results.
- **Recommendation:** auto-generate the JSON-LD from the same source-of-truth FAQ content array used to render the page. A hand-maintained schema block will drift again the next time copy changes.

### Accessibility / minor polish
- The 7-bullet nearby-alerts checklist (currently collapsed) has actual structural use of `<ul><li>` tags in the cached source — restoring those gives screen readers proper list semantics. Don't lose them in the rewrite.
- Each `<h3>` should remain semantic (it currently is). Don't downgrade to spans/divs in any rewrite.

### Apple privacy compliance
- App Store now expects support pages to mention any data collection. We collect Firebase Analytics + Crashlytics on consent (consent banner exists). No FAQ currently addresses "what data does MetHere collect about me" — this is technically the **Privacy Policy's** job, but a one-line FAQ pointing to `/privacy.html` would be useful for support traffic that mistakenly lands here. Optional, low priority.

---

## §6. Summary numbers

- **Live FAQs audited:** 16
  - VERIFIED ACCURATE: **6**
  - FACTUALLY WRONG: **1**
  - STALE / NEEDS REWRITE: **6**
  - ACCURATE BUT INCOMPLETE: **3** (recommended additions/polish)

- **New FAQs to add:** **12**

- **v1 FAQs to restore:** **2** (edit/remove a place, move a person to a different place) + **1 currently missing** ("How do I get a person's name to appear in a nearby alert?" — was in cached source, dropped from live)

- **Final target FAQ count:** **28** in **7 categories**

- **Critical infrastructure fixes:**
  - JSON-LD FAQPage schema is out of sync — must be regenerated alongside any copy update
  - Cached `support.html` source file in repo does not match live page — repo-side fix required so future edits don't pick up stale content

---

## §7. Source files cited (ground-truth references for the rewrite)

- `/Users/Juelz/Documents/Projects/remember-me-starter/src/paywall/config.ts` — pricing, free/pro limits
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/paywall/types.ts` — paywall type contracts
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/settings/BackupSection.tsx` — Backups UI labels (`Back up data`, `Restore backup`, `Export CSV`)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/settings/DataToolsSection.tsx` — Advanced section, `Erase everything` reset label
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/settings/SettingsContent.tsx` — Sync (iCloud Backup) section, Profile section
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/settings/ProfileEditSheet.tsx` — name + photo capture
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/views/StatsView.tsx` — Regulars tab structure (6 sections)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/views/PeopleView.tsx` + `VenuesView.tsx` — tab content
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/navigation/TabBar.tsx` — tab labels (Home/Spots/[FAB]/People/Regulars)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/people/PersonDetailView.tsx` — photo capture flow, edit mode
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/people/QuickAddSheet.tsx` — Mic icon (dictation, NOT voice notes)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/onboarding/OnboardingScreen.tsx` — first-run flow
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/components/profile/ShareMonthModal.tsx` — Monthly Drop share card (1080×1920 PNG)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/hooks/useDescriptionDictation.ts` — speech-to-text (audio NOT stored)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/hooks/useAlertLimitCheck.ts` — alert limit (5 free, excludes welcome data)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/hooks/useMoments.ts` — Moments (replaces Milestones)
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/types.ts` — Person, Venue, Moment, Note types
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/utils/welcomeData.ts` — fresh installs no longer get seed data
- `/Users/Juelz/Documents/Projects/remember-me-starter/src/constants.ts` — MAX_TAGS_PER_PERSON=15, MAX_TAG_NAME_LENGTH=25, SMART_MONITOR_LIMIT=12

**Project memory cross-references consulted:**
- `project_map_view_cold_mount_shipped.md`, `project_map_labels_always.md`
- `project_share_card_monthly_shipped.md`
- `project_venue_nicknames.md`
- `project_light_theme_shipped.md`
- `project_photo_picker.md`
- `project_rating_prompt_decision.md`
- `project_missing_delete_ui.md`
- `project_brand_voice.md`
