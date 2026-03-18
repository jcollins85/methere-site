# MetHere Website Content Update — Design Spec

**Date:** 2026-03-18
**Status:** Draft
**Scope:** Homepage rewrite, support page expansion, build infrastructure, copy/voice alignment

## Context

The MetHere app has shipped 97 commits since its App Store launch (Feb 14, 2026). The website has had some copy fixes applied but has not been updated to reflect new features or restructured for better conversion. The brand voice guide v2.0 flagged the website at 6.8/10 for voice alignment.

### Remaining Issues on the Live Site

Some issues from the original copy audit have been fixed (venue→place in HTML copy, pricing model corrected to one-time purchase, subscription FAQ updated). The following issues remain:

- **Hero sub says "real-world connections"** (line 108) — "connections" is banned per brand voice guide (LinkedIn/CRM language). Should use "people."
- **Final CTA heading says "Keep every connection in context"** (line 249) — also uses banned "connection" term. Will be replaced with the brand guide's closing line.
- **"Built for memory and context, not feeds"** (line 193) — uses "Built for" construction, which is banned-adjacent per brand voice guide.
- **One image filename still uses "venue"**: `app-flow-venue-list.png` (line 172) — HTML copy is correct ("Place detail list") but the asset filename should be updated.
- **Free tier card is vague**: "Core people-and-place memory, with local storage and backup options" — implies backup is free. Should clarify limits and that backup/export is Pro.
- **"Export and backup controls" chip** in privacy section (line 243) — not tier-specific, could imply free access.
- **No Smart App Banner meta tag** — missing free conversion opportunity.
- **Homepage structure is outdated** — 4-step walkthrough doesn't cover new features (themes, insights, milestones, tags, search).
- **Support page** is functional but needs expansion for new features and better organization.

### What's Missing (Features Not Mentioned)

- Themes (5 themes, all free)
- Achievements/milestones (21 total)
- Usage insights and profile panel
- Shareable insights card
- Tags, search, sorting
- Smart App Banner meta tag

## Decisions Made

- **No separate Features page.** Research on indie app landing pages (Bear, Things 3, Halide, Carrot Weather, Raycast) showed single long-scroll pages outperform multi-page sites for conversion. Splitting content creates exit paths before the download CTA.
- **No Use Cases page.** Brand voice guide bans "networking" framing, and use case pages drift toward that positioning. Scenarios are woven into the homepage instead.
- **Shared header/footer via build script.** Firebase Hosting is static-only (no server-side templating). A zero-dependency Node build script handles partial injection. This does not affect analytics — output is identical static HTML.
- **Homepage follows the Hybrid approach.** Scenario-driven hero and opener (emotional hook), then a compact visual walkthrough (comprehension), then feature highlights and conversion sections.

## Site Structure

| Page | Status | Notes |
|------|--------|-------|
| `index.html` | Rewrite | Full homepage restructure and copy rewrite |
| `support.html` | Major update | Expand FAQs, group by category, fix factual errors |
| `privacy.html` | Carry over | No changes (legal, separate concern) |
| `terms.html` | Carry over | No changes |
| `404.html` | Carry over | Update to use shared header/footer partials |
| `s/index.html` | Minor update | Fix App Store link (currently uses wrong ID `6742044392`, should be `6757836312`). Add App Store badge below existing "Don't have the app?" text. Keep existing deep link as primary action. This page stays standalone (no shared header/footer) since it's a minimal share-card landing page by design. |

## Infrastructure: Build Script

### Problem

Header and footer markup is duplicated across 6 HTML files. One nav link change requires editing every file. With content updates touching most pages, this duplication becomes a maintenance risk.

### Solution

A simple Node script (`build.js`, ~30 lines, zero npm dependencies) that injects shared partials into page templates.

### Project Structure

```
methere-site/
  src/                  ← page templates (authored files)
    index.html
    support.html
    privacy.html
    terms.html
    404.html
    s/index.html
  _partials/            ← shared markup
    header.html
    footer.html
  dist/                 ← build output (Firebase deploys from here)
  assets/               ← copied to dist/ as-is
  styles.css            ← copied to dist/ as-is
  site.js               ← copied to dist/ as-is
  build.js              ← build script
  firebase.json         ← update "public" to "dist"
```

### How It Works

1. Each `src/*.html` file contains `<!-- HEADER -->` and `<!-- FOOTER -->` placeholder comments
2. `build.js` reads each source file, replaces placeholders with partial content, writes to `dist/`
3. Static assets (`assets/`, `styles.css`, `site.js`, `robots.txt`, `sitemap.xml`, `CNAME`) are copied to `dist/` as-is. The `CNAME` file exists and contains `methere.app`.
4. Firebase config updated: `"public": "dist"`. The current `firebase.json` ignore list can be simplified since `dist/` will only contain build output.

### Workflows

- **Build:** `node build.js`
- **Dev:** `node build.js && python3 -m http.server 4173 -d dist`
- **Deploy:** `node build.js && firebase deploy --only hosting`

## Infrastructure: New Additions (All Pages)

### Smart App Banner

```html
<meta name="apple-itunes-app" content="app-id=6757836312">
```

Added to every page's `<head>` (via header partial). Shows native iOS "Open in App Store" banner. Free, high-converting.

### Sticky Mobile CTA

Fixed-position bottom bar on mobile viewports (below `768px` breakpoint) with App Store download button. Height ~56px, sits above the page content with a subtle top border or shadow. Hidden on desktop where the hero CTA is always visible. Must not conflict with the Smart App Banner on iOS Safari — the Smart App Banner appears at the top of the viewport, so the sticky CTA at the bottom is safe. Uses `z-index` above page content but below any modals.

### Navigation

Same links as current: Home | Support | Privacy | Terms + X/Twitter link. Managed via `_partials/header.html`.

## Homepage Design

### Page Flow

The homepage follows a deliberate emotional arc:

| # | Section | Visitor Reaction | Content |
|---|---------|-----------------|---------|
| 1 | Hero | "I feel that" | Headline + scenario sub + iPhone mockup + App Store badge |
| 2 | The Moment | "That's my situation" | 2-3 relatable scenario cards (pure copy) |
| 3 | How It Works | "It's that simple" | 3-step visual walkthrough with screenshots |
| 4 | More To Explore | "It does all that?" | 2x2 feature highlights grid |
| 5 | Why MetHere | "I trust this" | Differentiators + privacy signal |
| 6 | Plans | "What does it cost" | Free vs Pro comparison |
| 7 | Final CTA | "I'm downloading this" | Closing line + App Store badge |

### Section 1: Hero

- **Headline (locked):** "Remember the people you meet, and where you met them."
- **Sub (scenario-driven):** Pulls from App Store v3.0 voice. Puts visitor in the moment before explaining the product. Example direction: "You've seen them before. You know the face. The name's gone. MetHere is where you write it down."
- **Visual:** iPhone mockup showing places list (screenshot 01 — collapsed place list with distances)
- **CTAs:** App Store badge (primary) + "Learn more" anchor scroll
- **Privacy note:** One-liner below CTAs: "Your data stays on your device. No account needed."

### Section 2: The Moment

- **Purpose:** Paint 2-3 relatable scenarios. Visitor should see themselves.
- **Format:** Short scenario cards. Each is a situation, not a feature description.
- **Example directions (final copy TBD):**
  - The gym regular whose name you can't remember
  - The bartender who knows your order but isn't in your phone
  - The familiar face at your usual spot
- **No screenshots.** Pure copy. Let the words land.

### Section 3: How It Works

- **Purpose:** Now that they feel the problem, show the solution.
- **Format:** Alternating image/text layout (Bear pattern). 3 steps instead of the current 4. The current steps 2 ("Link them to a place") and 3 ("See everyone you met there") are merged into a single "Organize by place" step, since linking and viewing are part of the same organizational concept.
- **Steps:**
  1. **Save who you met** — Name, place, a note if you want. Takes a few seconds. (Screenshot: Add Person form)
  2. **Organize by place** — People grouped by where you met them. Search, tag, sort. (Screenshot: venue expanded with people, or search results)
  3. **Get reminded when you're nearby** — Walk past a saved place and the right names come back. (Screenshot: notification banner)

### Section 4: More To Explore

- **Purpose:** Show the app has depth beyond the core loop. Replaces the need for a separate Features page.
- **Format:** 2x2 grid of feature highlight cards. Each has an icon, title, and one-liner.
- **Features highlighted:**
  - **5 Themes** — Pick a palette that suits your vibe.
  - **Insights & Stats** — See where you meet most, your top tags. Share a snapshot.
  - **Milestones** — Unlock achievements as you remember more people and places.
  - **Search & Tags** — Find anyone by name, note, place, or tag.

### Section 5: Why MetHere

- **Purpose:** Position against alternatives. Differentiators + trust.
- **Keep:** No feed / No social network / No ads (three pillars)
- **Merge privacy in:** "Your data stays on your device" becomes a 4th signal alongside the three differentiators. The current standalone `#privacy-trust` section (lines 235-246) is removed as redundant — privacy works stronger as a differentiator than a disclaimer.
- **Update headline:** Replace "Built for memory and context, not feeds" with something like "Not a contacts app. Not a social network. Just your memory, organized by place."

### Section 6: Plans

- **Free:** Up to 15 people, 8 places, 3 nearby alerts. All core features included.
- **Pro (one-time purchase):** Unlimited people, places, and alerts. Backup & restore. CSV export.
- **Note:** "Purchases handled by Apple. Restore available in-app."
- **Changes from current:** The current Free card says "Core people-and-place memory, with local storage and backup options" which is vague. Replace with explicit limits. The current Pro card already says "One-time purchase" (previously fixed). Add explicit feature list to both tiers for clarity.

### Section 7: Final CTA

- **Headline:** "MetHere lives in the middle ground between 'I've met you' and 'you're in my phone.'"
- **CTAs:** App Store badge + Support link

## Support Page Design

### Structure Change

Group FAQs into categories instead of a flat list. Easier to scan as the question count grows.

### Categories and Questions

**Getting Started (3 new)**
- What is MetHere?
- Is MetHere free?
- What platforms is MetHere available on?

**Data & Backups (5 total: 1 new, 4 existing)**
- Where is my data stored? (new)
- How do I back up my data? (existing, already notes Pro)
- How do I restore my data? (existing)
- What is the difference between JSON backup and CSV export? (existing)
- How do I reset app data? (existing)

**Purchases (3 total: all existing, already correct)**
- How do I restore purchases? (existing)
- Do I need to manage anything after buying Pro? (existing, already states one-time purchase)
- What are the Free vs Pro limits? (existing, already has correct limits)

**Nearby Alerts (2 total: 1 new, 1 updated)**
- How do nearby alerts work? (new)
- Nearby alerts aren't working. What should I check? (updated: venue→place, simpler language)

**Features (3 new)**
- Can I customize how the app looks? (themes)
- What are milestones? (achievements)
- What are insights? (profile stats and share card)

### Other Changes

- Update FAQPage JSON-LD schema to match new questions
- Verify all copy uses "place" not "venue" (HTML copy already fixed; check alt text and any remaining references)

## Copy & Voice Rules

All new and rewritten copy must follow the Brand Voice Guide v2.0.

### Remaining Banned Language on Live Site

Most terminology fixes have been applied. These remain:

| Term | Location | Replacement |
|------|----------|-------------|
| "real-world connections" | Hero sub (line 108) | "people" — rewrite sub entirely for new design |
| "Keep every connection in context" | Final CTA heading (line 249) | Replace with brand guide closing line |
| "Built for memory and context" | Why MetHere lead (line 193) | Rewrite — "Built for" is banned-adjacent |
| `app-flow-venue-list.png` | Image filename (line 172) | Rename asset file |
| Em dash overuse | Check all new copy | Commas or periods. One per page max. |

### Voice Rules

**Do:**
- Lead with scenarios, not features
- Use imperative voice ("Remember them" not "helps you remember")
- Privacy as identity, not disclaimer
- Short sentences. Natural pauses.
- Pass the "person test": could a real person say this?

**Don't:**
- "Built to..." / "We help you..." / "Meaningful connections"
- "networking" anywhere
- "contacts" as positioning
- "seamless" / "empower" / "leverage"
- Feature stacking in a single sentence

### Website Tone Target

- Formality: Medium
- Energy: Low-Medium
- Key principle: Direct, no marketing wrapper

### Locked Copy (Do Not Change)

- Hero headline: "Remember the people you meet, and where you met them."
- Closing line: "MetHere lives in the middle ground between 'I've met you' and 'you're in my phone.'"
- Contact: support@methere.app

## Screenshots

Available updated screenshots from `~/Desktop/MetHere-Screenshots/`:

| File | Content | Potential Use |
|------|---------|---------------|
| 01-venues-list-collapsed.png | Places list with distances | Hero mockup |
| 02-venue-expanded-people.png | Place expanded showing people with tags | How It Works step 2 |
| 03-add-person-collapsed.png | Add Person form (compact) | How It Works step 1 |
| 04-add-person-expanded.png | Add Person form (expanded details) | How It Works step 1 alt |
| 09-settings-themes.png | Theme picker (5 themes) | More To Explore |
| 11-insights-stats.png | Insights panel with stats | More To Explore |
| 13-share-insights-card.png | Shareable stats card | More To Explore |
| 14-insights-milestones.png | Milestones section | More To Explore |
| 18-search-tattoo.png | Search results with tag highlight | How It Works step 2 alt |
| notifscreen.png | Nearby notification banner (iOS lock screen style, shows "You're near Harborline Fitness. You know 3 people here.") | How It Works step 3 |

Additional screenshots in `remember-me-starter/assets/appstore-screenshots/final/` (iPhone and iPad device frames).

## Out of Scope

- Privacy policy content changes (legal, separate concern)
- Terms of service content changes
- New CSS/design system overhaul (preserve current design language)
- App Store copy updates (managed separately in Notion)
- Social proof section (no assets available yet; design a clean slot for future addition)
