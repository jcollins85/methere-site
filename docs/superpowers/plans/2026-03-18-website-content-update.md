# MetHere Website Content Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the MetHere homepage for better conversion, expand the support/FAQ page, and add build infrastructure for shared header/footer partials.

**Architecture:** Static HTML site with a zero-dependency Node build script that injects shared partials (`_partials/header.html`, `_partials/footer.html`) into page templates in `src/`. Output goes to `dist/`, which Firebase deploys. No frameworks, no npm dependencies.

**Tech Stack:** HTML, CSS, vanilla JS, Node.js (fs module only), Firebase Hosting

**Spec:** `docs/superpowers/specs/2026-03-18-website-content-update-design.md`

**Brand Voice Guide:** Notion Marketing Hub > Brand & Voice Guide (v2.0). Key rules: no "venue", no "connections", no "helps you", no "Built to/for", no "networking", no em dash overuse. Use "places" and "people". Imperative voice. Scenario-first.

**Locked copy (do not change):**
- Hero headline: "Remember the people you meet, and where you met them."
- Closing line: "MetHere lives in the middle ground between 'I've met you' and 'you're in my phone.'"
- Contact: support@methere.app

---

## File Map

### New files to create

| File | Responsibility |
|------|---------------|
| `build.js` | Build script: reads `src/*.html`, injects `_partials/*`, copies static assets to `dist/` |
| `_partials/header.html` | Shared site header (nav, logo, Smart App Banner meta tag) |
| `_partials/footer.html` | Shared site footer (links, copyright, year script) |
| `src/index.html` | Homepage template (7-section redesign) |
| `src/support.html` | Support/FAQ template (categorized FAQs) |
| `src/privacy.html` | Privacy page template (existing content + placeholders) |
| `src/terms.html` | Terms page template (existing content + placeholders) |
| `src/404.html` | 404 page template (existing content + placeholders) |
| `src/s/index.html` | Share landing page (copied as-is, no placeholders) |

### Files to modify

| File | Change |
|------|--------|
| `firebase.json` | Change `"public": "."` to `"public": "dist"`, simplify ignore list |
| `styles.css` | Add CSS for new sections: `.moment-grid`, `.feature-grid`, `.feature-card`, `.sticky-mobile-cta`, `.faq-category`, `.faq-category-title` |
| `.gitignore` | Add `dist/` and `.superpowers/` |
| `assets/app-flow-venue-list.png` | Rename to `assets/app-flow-place-list.png` |

### Screenshot assets to copy from `~/Desktop/MetHere-Screenshots/`

These get copied into `assets/` during Task 7:
- `01-venues-list-collapsed.png` → `assets/app-hero-places.png` (hero)
- `03-add-person-collapsed.png` → `assets/app-flow-add-person-new.png` (How It Works step 1)
- `02-venue-expanded-people.png` → `assets/app-flow-place-people.png` (How It Works step 2)
- `notifscreen.png` → `assets/app-flow-nearby-alert.png` (How It Works step 3)

---

## Task 1: Build Script & Project Restructure

**Files:**
- Create: `build.js`
- Create: `src/` directory structure
- Create: `.gitignore` entry
- Modify: `firebase.json`

- [ ] **Step 1: Create `.gitignore` additions**

Add to `.gitignore` (create if not exists):
```
dist/
.superpowers/
```

- [ ] **Step 2: Write `build.js`**

Create `build.js` at project root. The script:
1. Reads `_partials/header.html` and `_partials/footer.html`
2. Finds all `.html` files in `src/` (recursively)
3. For each file: replaces `<!-- HEADER -->` with header content and `<!-- FOOTER -->` with footer content
4. Files without placeholders (like `src/s/index.html`) are copied as-is
5. Copies static assets to `dist/`: `assets/`, `styles.css`, `site.js`, `robots.txt`, `sitemap.xml`, `CNAME`
6. Preserves directory structure (e.g., `src/s/index.html` → `dist/s/index.html`)

```js
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
const PARTIALS = path.join(__dirname, '_partials');

// Clean dist
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
fs.mkdirSync(DIST, { recursive: true });

// Read partials
const header = fs.readFileSync(path.join(PARTIALS, 'header.html'), 'utf8');
const footer = fs.readFileSync(path.join(PARTIALS, 'footer.html'), 'utf8');

// Process HTML files in src/
function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const srcPath = path.join(dir, entry.name);
    const relPath = path.relative(SRC, srcPath);
    const distPath = path.join(DIST, relPath);
    if (entry.isDirectory()) {
      fs.mkdirSync(distPath, { recursive: true });
      processDir(srcPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(srcPath, 'utf8');
      content = content.replace('<!-- HEADER -->', header);
      content = content.replace('<!-- FOOTER -->', footer);
      fs.mkdirSync(path.dirname(distPath), { recursive: true });
      fs.writeFileSync(distPath, content);
      console.log('  html:', relPath);
    }
  }
}
processDir(SRC);

// Copy static assets
const STATIC = ['assets', 'styles.css', 'site.js', 'robots.txt', 'sitemap.xml', 'CNAME'];
function copyRecursive(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}
for (const name of STATIC) {
  const src = path.join(__dirname, name);
  if (fs.existsSync(src)) {
    copyRecursive(src, path.join(DIST, name));
    console.log('  copy:', name);
  }
}
console.log('Build complete.');
```

- [ ] **Step 3: Update `firebase.json`**

Change `"public": "."` to `"public": "dist"`. Simplify ignore list since `dist/` only contains build output:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", ".firebaserc"],
    "rewrites": [
      {
        "source": "/s/**",
        "destination": "/s/index.html"
      }
    ],
    "headers": [
      {
        "source": "/.well-known/**",
        "headers": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ]
      }
    ]
  }
}
```

- [ ] **Step 4: Create `src/` directory and `_partials/` directory**

```bash
mkdir -p src/s _partials
```

- [ ] **Step 5: Commit**

```bash
git add build.js firebase.json .gitignore
git commit -m "infra: add build script and update firebase config for dist/ output"
```

---

## Task 2: Extract Shared Header & Footer Partials

**Files:**
- Create: `_partials/header.html`
- Create: `_partials/footer.html`

Extract from current `index.html`. The header partial goes from `<header>` through `</header>`. The footer goes from `<footer>` through the closing scripts. Add Smart App Banner meta tag to the head section note (it goes in each page's `<head>`, not the header partial — see note below).

**Important:** The Smart App Banner `<meta>` tag must go in each page's `<head>`, not inside `<header>`. The header partial is the visual nav bar. Each `src/*.html` page template will include the meta tag directly in its `<head>`.

- [ ] **Step 1: Create `_partials/header.html`**

Extract the `<header>` block from current `index.html` (lines 82-99). Remove the `class="active"` from the Home link — each page template will set its own active state. Use a data attribute `data-page="home"` etc. that page templates can target with a small inline script, OR keep the `active` class management in each page template.

Simpler approach: each page's `<!-- HEADER -->` placeholder gets replaced with the same header HTML. The active nav state is handled by a tiny inline script in the partial that reads `document.body.className` (already has `page-home`, `page-support`, etc.) and sets the matching nav link to active.

```html
<header class="site-header panel reveal" data-delay="30ms">
  <a class="site-brand" href="./index.html" aria-label="MetHere home">
    <img src="./assets/MetHere-inline-clean-white-tight.png" alt="MetHere" />
  </a>
  <nav class="site-nav" aria-label="Primary">
    <a href="./index.html" data-analytics-event="nav_home_click" data-analytics-placement="header" data-nav="home">Home</a>
    <a href="./support.html" data-analytics-event="nav_support_click" data-analytics-placement="header" data-nav="support">Support</a>
    <a href="./privacy.html" data-analytics-event="nav_privacy_click" data-analytics-placement="header" data-nav="privacy">Privacy</a>
    <a href="./terms.html" data-analytics-event="nav_terms_click" data-analytics-placement="header" data-nav="terms">Terms</a>
    <a href="https://x.com/MetHereApp" target="_blank" rel="noopener noreferrer" data-analytics-event="x_click" data-analytics-placement="header" class="social-link-x" aria-label="MetHere on X (Twitter)">
      <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M18.901 1.153h3.68l-8.039 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.598-9.828L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.49h2.04L6.486 3.24H4.298l13.312 17.403Z" />
      </svg>
      <span class="sr-only">X (Twitter)</span>
    </a>
  </nav>
</header>
<script>
(function(){
  var page = document.body.className.match(/page-(\w+)/);
  if (page) {
    var link = document.querySelector('[data-nav="' + page[1] + '"]');
    if (link) link.classList.add('active');
  }
})();
</script>
```

- [ ] **Step 2: Create `_partials/footer.html`**

Extract footer from current `index.html` (lines 262-277) plus the year script and site.js tag:

```html
<footer class="site-footer panel reveal" data-delay="180ms">
  <p>&copy; <span id="year"></span> MetHere</p>
  <nav class="footer-links" aria-label="Footer">
    <a href="./index.html" data-analytics-event="nav_home_click" data-analytics-placement="footer">Home</a>
    <a href="./support.html" data-analytics-event="nav_support_click" data-analytics-placement="footer">Support</a>
    <a href="./privacy.html" data-analytics-event="nav_privacy_click" data-analytics-placement="footer">Privacy</a>
    <a href="./terms.html" data-analytics-event="nav_terms_click" data-analytics-placement="footer">Terms</a>
    <a href="mailto:support@methere.app" data-analytics-event="support_email_click" data-analytics-placement="footer">Email</a>
    <a href="https://x.com/MetHereApp" target="_blank" rel="noopener noreferrer" data-analytics-event="x_click" data-analytics-placement="footer" class="social-link-x" aria-label="MetHere on X (Twitter)">
      <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M18.901 1.153h3.68l-8.039 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.598-9.828L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.49h2.04L6.486 3.24H4.298l13.312 17.403Z" />
      </svg>
      <span class="sr-only">X (Twitter)</span>
    </a>
  </nav>
</footer>

<script src="./site.js"></script>
<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>
```

- [ ] **Step 3: Commit**

```bash
git add _partials/
git commit -m "infra: extract shared header and footer partials"
```

---

## Task 3: Migrate Existing Pages to `src/`

**Files:**
- Create: `src/privacy.html`, `src/terms.html`, `src/404.html`, `src/s/index.html`

Take each existing page, strip out the duplicated header/footer, replace with `<!-- HEADER -->` and `<!-- FOOTER -->` placeholders. Add Smart App Banner meta tag to each `<head>`. The `s/index.html` is copied as-is (no placeholders).

- [ ] **Step 1: Create `src/privacy.html`**

Read current `privacy.html`. Keep the full `<head>` section (add Smart App Banner meta tag). Replace the `<header>...</header>` block with `<!-- HEADER -->`. Replace `<footer>...</footer>` through closing scripts with `<!-- FOOTER -->`. Keep the `<main>` content as-is.

Add this line inside `<head>`, after the apple-touch-icon link:
```html
<meta name="apple-itunes-app" content="app-id=6757836312">
```

- [ ] **Step 2: Create `src/terms.html`**

Same process as privacy.html.

- [ ] **Step 3: Create `src/404.html`**

Same process as 404.html.

- [ ] **Step 4: Copy `s/index.html` to `src/s/index.html`**

Copy as-is but apply three fixes:
- Line 83: Change `id6742044392` to `id6757836312`
- Line 94: Change `id6742044392` to `id6757836312`
- Add Smart App Banner meta tag to `<head>`: `<meta name="apple-itunes-app" content="app-id=6757836312">`
- Add App Store badge below the existing "Don't have the app?" text:

```html
<a href="https://apps.apple.com/app/methere/id6757836312" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" style="width: 140px; margin-top: 8px;" />
</a>
```

This file has no `<!-- HEADER -->` / `<!-- FOOTER -->` placeholders. The build script copies it through unchanged (the placeholder replacement just won't match anything).

- [ ] **Step 5: Test the build**

```bash
node build.js
```

Expected: `dist/` directory created with privacy.html, terms.html, 404.html, s/index.html, plus all static assets. Open `dist/privacy.html` in browser to verify header/footer render correctly.

- [ ] **Step 6: Commit**

```bash
git add src/
git commit -m "infra: migrate privacy, terms, 404, and share pages to src/ with partials"
```

---

## Task 4: Homepage Rewrite (`src/index.html`)

**Files:**
- Create: `src/index.html`

This is the main content task. Build the new 7-section homepage from the spec. Keep all existing `<head>` content (SEO meta, OG tags, JSON-LD schema, analytics). Replace `<header>` and `<footer>` with placeholders. Rewrite `<main>` with the new section structure.

- [ ] **Step 1: Create `src/index.html` with `<head>` and page shell**

Keep the full `<head>` from current `index.html`. Add Smart App Banner meta tag. Use `<!-- HEADER -->` and `<!-- FOOTER -->` placeholders. The body class stays `page-home`.

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Keep all existing meta tags, OG tags, JSON-LD, etc. from current index.html -->
    <!-- Add after apple-touch-icon: -->
    <meta name="apple-itunes-app" content="app-id=6757836312">
  </head>
  <body class="page-home">
    <div class="site-shell">
      <!-- HEADER -->
      <main>
        <!-- Sections go here (Steps 2-8) -->
      </main>
      <!-- FOOTER -->
    </div>
  </body>
</html>
```

- [ ] **Step 2: Write Section 1 — Hero**

```html
<section id="hero" class="section panel reveal" data-delay="90ms">
  <div class="hero-grid">
    <div>
      <p class="eyebrow">iOS app</p>
      <h1 class="section-title">Remember the people you meet, and where you met them.</h1>
      <p class="section-lead">
        You've seen them before. You know the face. The name's gone.
        MetHere is where you write it down.
      </p>
      <div class="btn-row">
        <a class="app-store-badge-link" href="https://apps.apple.com/app/methere/id6757836312" target="_blank" rel="noopener noreferrer" data-analytics-event="app_store_click_hero" data-analytics-placement="hero" aria-label="Download on the App Store">
          <img class="app-store-badge" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" />
        </a>
        <a class="btn btn-secondary" href="#how-it-works" data-analytics-event="learn_more_click" data-analytics-placement="hero">Learn more</a>
      </div>
      <p class="hero-note">Your data stays on your device. No account needed.</p>
    </div>
    <figure class="hero-media">
      <img src="./assets/app-hero-places.png" alt="MetHere place list showing saved places with people counts and distances" />
      <figcaption>People organized by where you met them.</figcaption>
    </figure>
  </div>
</section>
```

**Voice check:** No "helps you", no "connections", no em dashes. Scenario-first sub copy. Privacy woven in naturally. Passes person test.

- [ ] **Step 3: Write Section 2 — The Moment**

```html
<section id="the-moment" class="section panel reveal" data-delay="100ms">
  <div class="moment-grid" data-stagger data-stagger-step="70">
    <article class="moment-card reveal">
      <p>You see them at the gym every week. You've talked twice. You remember the conversation but not the name.</p>
    </article>
    <article class="moment-card reveal">
      <p>The bartender who starts your order before you sit down. You know them. They don't belong in your phone. But they're not a stranger.</p>
    </article>
    <article class="moment-card reveal">
      <p>You're back at the same spot. A familiar face waves. You wave back. You wish you remembered their name.</p>
    </article>
  </div>
</section>
```

**Voice check:** Pure scenarios. No features. No product name. No "helps you". Passes person test.

- [ ] **Step 4: Write Section 3 — How It Works**

3 steps instead of current 4. Steps 2+3 merged into "Organize by place."

```html
<section id="how-it-works" class="section panel reveal" data-delay="120ms">
  <h2 class="section-subtitle">How it works</h2>
  <p class="section-lead">From meeting someone to remembering their name at the right time.</p>
  <div class="how-flow" data-stagger data-stagger-step="70">
    <article class="proof-card reveal">
      <div class="proof-copy">
        <p class="proof-step">Step 1</p>
        <h3>Save who you met</h3>
        <p>Name, place, a note if you want. Takes a few seconds.</p>
      </div>
      <figure class="proof-shot">
        <img src="./assets/app-flow-add-person-new.png" alt="Add Person form with name, place, and additional details" />
      </figure>
    </article>
    <article class="proof-card reverse reveal">
      <div class="proof-copy">
        <p class="proof-step">Step 2</p>
        <h3>Organize by place</h3>
        <p>People are grouped by where you met them. Search by name, note, or tag.</p>
      </div>
      <figure class="proof-shot">
        <img src="./assets/app-flow-place-people.png" alt="Place expanded showing people with tags, roles, and notes" />
      </figure>
    </article>
    <article class="proof-card reveal">
      <div class="proof-copy">
        <p class="proof-step">Step 3</p>
        <h3>Get reminded when you're nearby</h3>
        <p>Walk past a saved place and the right names come back before the moment gets awkward.</p>
      </div>
      <figure class="proof-shot">
        <img src="./assets/app-flow-nearby-alert.png" alt="iOS notification: You're near Harborline Fitness. You know 3 people here." />
      </figure>
    </article>
  </div>
</section>
```

- [ ] **Step 5: Write Section 4 — More To Explore**

New section. 2x2 feature grid.

```html
<section id="features" class="section panel reveal" data-delay="130ms">
  <h2 class="section-subtitle">More to explore</h2>
  <p class="section-lead">Beyond the basics.</p>
  <div class="feature-grid" data-stagger data-stagger-step="65">
    <article class="feature-card reveal">
      <h3>5 Themes</h3>
      <p>Pick the palette that suits your vibe. Light, Coral, Pink Pop, Emerald, or Midnight.</p>
    </article>
    <article class="feature-card reveal">
      <h3>Insights and stats</h3>
      <p>See where you meet most, your top tags, and how your social memory grows. Share a snapshot.</p>
    </article>
    <article class="feature-card reveal">
      <h3>Milestones</h3>
      <p>Unlock achievements as you remember more people and places.</p>
    </article>
    <article class="feature-card reveal">
      <h3>Search and tags</h3>
      <p>Find anyone by name, note, place, or tag. Sort and filter however you want.</p>
    </article>
  </div>
</section>
```

- [ ] **Step 6: Write Section 5 — Why MetHere**

Updated differentiators with privacy merged in as 4th card.

```html
<section id="why-methere" class="section panel reveal" data-delay="140ms">
  <h2 class="section-subtitle">Why MetHere</h2>
  <p class="section-lead">Not a contacts app. Not a social network. Just your memory, organized by place.</p>
  <div class="trust-grid" data-stagger data-stagger-step="65">
    <article class="trust-card reveal">
      <h3>No feed</h3>
      <p>No algorithm-driven timelines. Just people and places.</p>
    </article>
    <article class="trust-card reveal">
      <h3>No social network</h3>
      <p>No profile chasing. No social performance.</p>
    </article>
    <article class="trust-card reveal">
      <h3>No ads</h3>
      <p>No ads. No ad targeting.</p>
    </article>
    <article class="trust-card reveal">
      <h3>Your data stays on your device</h3>
      <p>No account needed. No cloud required. <a href="./privacy.html" data-analytics-event="privacy_policy_click_home" data-analytics-placement="why-methere">Privacy details</a>.</p>
    </article>
  </div>
</section>
```

**Note:** The `.trust-grid` CSS currently uses `grid-template-columns: repeat(3, ...)`. This needs updating to `repeat(4, ...)` for desktop, `repeat(2, ...)` for tablet, `1fr` for mobile. Handle in Task 6 (CSS).

- [ ] **Step 7: Write Section 6 — Plans**

Updated with explicit limits and feature lists.

```html
<section id="plans" class="section panel reveal" data-delay="150ms">
  <h2 class="section-subtitle">Plans</h2>
  <p class="section-lead">Start free. Upgrade if you need more.</p>
  <div class="plan-grid" data-stagger data-stagger-step="70">
    <article class="plan-card reveal">
      <h3>Free</h3>
      <ul>
        <li>Up to 15 people</li>
        <li>Up to 8 places</li>
        <li>Up to 3 nearby alerts</li>
        <li>Themes, search, tags, insights</li>
      </ul>
    </article>
    <article class="plan-card reveal">
      <h3>Pro</h3>
      <p class="plan-label">One-time purchase</p>
      <ul>
        <li>Unlimited people</li>
        <li>Unlimited places</li>
        <li>Unlimited nearby alerts</li>
        <li>Backup and restore</li>
        <li>CSV export</li>
      </ul>
    </article>
  </div>
  <p class="plans-note">
    Purchases handled by Apple. Restore available in-app.
  </p>
</section>
```

- [ ] **Step 8: Write Section 7 — Final CTA**

```html
<section id="final-cta" class="section panel cta-center reveal" data-delay="160ms">
  <h2 class="section-subtitle">MetHere lives in the middle ground between "I've met you" and "you're in my phone."</h2>
  <p>Remember names and places without joining another social network.</p>
  <div class="btn-row" style="justify-content: center;">
    <a class="app-store-badge-link" href="https://apps.apple.com/app/methere/id6757836312" target="_blank" rel="noopener noreferrer" data-analytics-event="app_store_click_final" data-analytics-placement="final-cta" aria-label="Download on the App Store">
      <img class="app-store-badge" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" />
    </a>
    <a class="btn btn-secondary" href="./support.html" data-analytics-event="support_click_final" data-analytics-placement="final-cta">Get support</a>
  </div>
</section>
```

- [ ] **Step 9: Verify build and visual check**

```bash
node build.js && python3 -m http.server 4173 -d dist
```

Open http://localhost:4173 in browser. Verify:
- All 7 sections render in order
- No "connections", "venue", "helps you", "Built for" in any copy
- Hero headline matches locked copy exactly
- Final CTA headline matches locked copy exactly
- App Store badges link to correct app ID
- Images load (will be placeholder until Task 7)
- Header nav works, active state on Home
- Footer links work

- [ ] **Step 10: Commit**

```bash
git add src/index.html
git commit -m "feat: rewrite homepage with 7-section conversion flow"
```

---

## Task 5: Support Page Rewrite (`src/support.html`)

**Files:**
- Create: `src/support.html`

Expand FAQs into 5 categories. Add new questions for themes, milestones, insights, nearby alerts. Keep existing questions. Update JSON-LD schema.

- [ ] **Step 1: Create `src/support.html` with categorized FAQs**

Keep existing `<head>` content. Add Smart App Banner. Replace header/footer with placeholders. Restructure FAQ section with category headings. Add 7 new questions across Getting Started, Data & Backups, Nearby Alerts, and Features categories.

The full FAQ structure (16 questions across 5 categories):

**Getting Started** (3 new):
- What is MetHere? → "MetHere is where you save the people you meet and where you met them. Name, place, a note. It's not a contacts app or a social network. It's the space between 'I've met you' and 'you're in my phone.'"
- Is MetHere free? → "Yes. Core features are free: save up to 15 people, 8 places, and 3 nearby alerts. Pro is a one-time purchase that removes those limits and unlocks backup and export."
- What platforms is MetHere available on? → "MetHere is available on iPhone. Requires iOS 16 or later."

**Data & Backups** (5 total: 1 new, 4 existing):
- Where is my data stored? (new) → "On your device. MetHere does not require an account or cloud storage. Your people, places, and notes stay local unless you choose to export a backup."
- Keep existing 4 questions as-is

**Purchases** (3 existing, keep as-is)

**Nearby Alerts** (2 total: 1 new, 1 updated):
- How do nearby alerts work? (new) → "Save a place and turn on nearby alerts for it. When you're within range, MetHere sends a notification with the place name and people you know there. Requires location permission set to Always."
- Keep existing 1 question (updated wording)

**Features** (3 new):
- Can I customize how the app looks? → "Yes. MetHere has 5 themes: Light, Coral, Pink Pop, Emerald, and Midnight. All themes are free. Go to Settings to pick one."
- What are milestones? → "Milestones are achievements you unlock as you use MetHere. Remember more people, save more places, apply more tags. Your progress is tracked in your profile."
- What are insights? → "Your profile shows stats about your social memory: where you meet most, your most-used tags, recent activity. You can create a shareable snapshot card from your insights."

- [ ] **Step 2: Update JSON-LD FAQPage schema**

Update the `<script type="application/ld+json">` in the `<head>` to include all 16 questions. Follow the existing format (Question + acceptedAnswer pattern).

- [ ] **Step 3: Verify build and visual check**

```bash
node build.js && python3 -m http.server 4173 -d dist
```

Open http://localhost:4173/support.html. Verify:
- All 5 categories render with headings
- All 16 questions are present
- No "venue" or "subscription" in any copy
- Contact email is correct
- Header active state is on Support
- All links work

- [ ] **Step 4: Commit**

```bash
git add src/support.html
git commit -m "feat: expand support page with categorized FAQs and new feature questions"
```

---

## Task 6: CSS Updates

**Files:**
- Modify: `styles.css`

Add styles for new homepage sections and the sticky mobile CTA. Follow existing design system patterns (variables, border radius, colors).

- [ ] **Step 1: Add `.moment-card` styles (The Moment section)**

```css
.moment-grid {
  margin-top: var(--space-16);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-12);
}

.moment-card {
  border: 1px solid #d4dff5;
  border-radius: var(--radius-18);
  background: #f5f9ff;
  padding: var(--space-24);
}

.moment-card p {
  margin: 0;
  color: var(--ink-700);
  font-size: 17px;
  line-height: 1.5;
  font-style: italic;
}
```

- [ ] **Step 2: Add `.feature-grid` and `.feature-card` styles**

```css
.feature-grid {
  margin-top: var(--space-16);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-12);
}

.feature-card {
  border: 1px solid #d4dff5;
  border-radius: var(--radius-18);
  background: #f5f9ff;
  padding: var(--space-16);
}

.feature-card h3 {
  margin: 0;
  font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  font-size: 20px;
  line-height: 1.2;
}

.feature-card p {
  margin: var(--space-8) 0 0;
  color: var(--ink-600);
}
```

- [ ] **Step 3: Update `.trust-grid` for 4 columns**

```css
/* Replace the existing .trust-grid rule */
.trust-grid {
  margin-top: var(--space-16);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-12);
}
```

- [ ] **Step 4: Add `.plan-card ul`, `.plan-label`, `.plans-note`, and `.hero-note` styles**

```css
.plan-card ul {
  margin: var(--space-8) 0 0;
  padding-left: 1.25rem;
  color: var(--ink-600);
}

.plan-card ul li + li {
  margin-top: 4px;
}

.plan-label {
  margin: var(--space-4) 0 0;
  color: var(--ink-500);
  font-size: 13px;
  font-weight: 600;
}

.plans-note {
  margin-top: var(--space-16);
  text-align: center;
  color: var(--ink-500);
  font-size: 14px;
}

.hero-note {
  margin-top: var(--space-12);
  color: var(--ink-500);
  font-size: 14px;
}
```

- [ ] **Step 5: Add `.faq-category` and `.faq-category-title` styles**

```css
.faq-category {
  margin-top: var(--space-24);
}

.faq-category:first-child {
  margin-top: var(--space-16);
}

.faq-category-title {
  margin: 0 0 var(--space-12);
  font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  font-size: 20px;
  line-height: 1.2;
  color: var(--ink-950);
}
```

- [ ] **Step 6: Add sticky mobile CTA styles**

```css
.sticky-mobile-cta {
  display: none;
}

@media (max-width: 768px) {
  .sticky-mobile-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-top: 1px solid var(--stroke-1);
    z-index: 40;
    padding: 0 var(--space-16);
  }

  .sticky-mobile-cta .app-store-badge {
    width: 140px;
  }

  /* Add bottom padding to body so footer isn't hidden behind sticky CTA */
  body {
    padding-bottom: 56px;
  }
}
```

- [ ] **Step 7: Update responsive breakpoints**

Add to the `@media (max-width: 980px)` block:

```css
.moment-grid,
.trust-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

Add to the `@media (max-width: 760px)` block:

```css
.moment-grid,
.feature-grid,
.trust-grid {
  grid-template-columns: 1fr;
}
```

- [ ] **Step 8: Rebuild and verify**

```bash
node build.js && python3 -m http.server 4173 -d dist
```

Check homepage at desktop, tablet (~980px), and mobile (~375px) widths. Verify all grids collapse properly. (Sticky CTA HTML is added in Task 8 — verify its CSS renders correctly after that task.)

- [ ] **Step 9: Commit**

```bash
git add styles.css
git commit -m "style: add CSS for new homepage sections, feature grid, FAQ categories, sticky mobile CTA"
```

---

## Task 7: Screenshot Assets

**Files:**
- Copy screenshots from `~/Desktop/MetHere-Screenshots/` to `assets/`
- Rename `assets/app-flow-venue-list.png` to `assets/app-flow-place-list.png`

- [ ] **Step 1: Copy and rename screenshots**

```bash
cp ~/Desktop/MetHere-Screenshots/01-venues-list-collapsed.png assets/app-hero-places.png
cp ~/Desktop/MetHere-Screenshots/03-add-person-collapsed.png assets/app-flow-add-person-new.png
cp ~/Desktop/MetHere-Screenshots/02-venue-expanded-people.png assets/app-flow-place-people.png
cp ~/Desktop/MetHere-Screenshots/notifscreen.png assets/app-flow-nearby-alert.png
mv assets/app-flow-venue-list.png assets/app-flow-place-list.png
```

- [ ] **Step 2: Rebuild and verify images load**

```bash
node build.js && python3 -m http.server 4173 -d dist
```

Open homepage. Verify all 4 images load in their correct sections (hero, step 1, step 2, step 3).

- [ ] **Step 3: Commit**

```bash
git add assets/
git commit -m "assets: add updated screenshots and rename venue to place"
```

---

## Task 8: Sticky Mobile CTA HTML

**Files:**
- Modify: `_partials/footer.html`

Add the sticky mobile CTA markup to the footer partial so it appears on all pages.

- [ ] **Step 1: Add sticky CTA markup to footer partial**

Add this before the `<footer>` tag in `_partials/footer.html`:

```html
<div class="sticky-mobile-cta" aria-label="Download MetHere">
  <a class="app-store-badge-link" href="https://apps.apple.com/app/methere/id6757836312" target="_blank" rel="noopener noreferrer" data-analytics-event="app_store_click_sticky" data-analytics-placement="sticky-mobile" aria-label="Download on the App Store">
    <img class="app-store-badge" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" />
  </a>
</div>
```

- [ ] **Step 2: Rebuild and test on mobile viewport**

```bash
node build.js && python3 -m http.server 4173 -d dist
```

Open browser, resize to mobile width (<768px). Verify sticky CTA appears at bottom. Verify it doesn't appear on desktop width.

- [ ] **Step 3: Commit**

```bash
git add _partials/footer.html
git commit -m "feat: add sticky mobile CTA to footer partial"
```

---

## Task 9: Final Verification & Cleanup

- [ ] **Step 1: Full build**

```bash
node build.js
```

Verify no errors. Check `dist/` contains: `index.html`, `support.html`, `privacy.html`, `terms.html`, `404.html`, `s/index.html`, `assets/`, `styles.css`, `site.js`, `robots.txt`, `sitemap.xml`, `CNAME`.

- [ ] **Step 2: Run link check**

```bash
grep -rn 'href=' dist/*.html dist/s/index.html | grep -v 'http' | grep -v 'mailto' | grep -v '#'
```

Verify all relative links point to files that exist in `dist/`.

- [ ] **Step 3: Check for banned terms and em dash overuse**

```bash
grep -rni 'venue\|helps you\|connections\|networking\|built for\|built to\|subscription' dist/index.html dist/support.html
```

Expected: zero matches (except possibly inside JSON-LD schema descriptions which should also be clean).

```bash
grep -c '—' dist/index.html dist/support.html
```

Expected: max 1 em dash per file (brand voice rule: one per page max).

- [ ] **Step 4: Verify `s/index.html` app ID fix**

```bash
grep '6742044392' dist/s/index.html
```

Expected: zero matches. The old app ID should be gone.

- [ ] **Step 5: Serve and do full visual walkthrough**

```bash
python3 -m http.server 4173 -d dist
```

Walk through every page:
- Homepage: all 7 sections, images, links, App Store badges
- Support: all 5 FAQ categories, all 16 questions
- Privacy: header/footer renders, content intact
- Terms: header/footer renders, content intact
- 404: header/footer renders
- Mobile viewport: sticky CTA visible, grids stack correctly

- [ ] **Step 6: Update `PROJECT_CONTEXT.md`**

Update the homepage section anchors list:
```
- `#hero`
- `#the-moment`
- `#how-it-works`
- `#features`
- `#why-methere`
- `#plans`
- `#final-cta`
```

Add note about build script: "Site now uses `build.js` to inject shared header/footer partials. Source files in `src/`, output in `dist/`. Deploy: `node build.js && firebase deploy --only hosting`."

Update screenshot asset list to reflect new filenames.

- [ ] **Step 7: Update `TASK_LOG.md`**

Add entry:
```
## 2026-03-18 — Website Content Update

### Summary
- Rewrote homepage with 7-section conversion flow (scenario-driven hero, 3-step walkthrough, feature grid, updated differentiators, corrected plans, brand guide closing line)
- Expanded support page: 16 FAQs across 5 categories (added themes, milestones, insights, nearby alerts, getting started)
- Added build infrastructure: shared header/footer partials via build.js, Smart App Banner, sticky mobile CTA
- Fixed s/index.html wrong App Store app ID
- Renamed app-flow-venue-list.png to app-flow-place-list.png
- Updated firebase.json to deploy from dist/

### Files touched
- Created: build.js, _partials/header.html, _partials/footer.html, src/*.html
- Modified: styles.css, firebase.json, .gitignore, PROJECT_CONTEXT.md
- Assets: 4 new screenshots, 1 renamed

### Checks run
- node build.js (clean build)
- Local preview at localhost:4173
- Link verification, banned term check, app ID verification
```

- [ ] **Step 8: Commit**

```bash
git add PROJECT_CONTEXT.md TASK_LOG.md
git commit -m "docs: update project context and task log for website content update"
```

---

## Deployment (Manual — Do Not Auto-Execute)

After all tasks complete and the user approves:

```bash
node build.js && firebase deploy --only hosting
```

Verify at https://methere.app that the live site matches the local preview.
