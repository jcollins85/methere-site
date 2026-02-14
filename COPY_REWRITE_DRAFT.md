# COPY_REWRITE_DRAFT.md

Use this file to propose copy edits before implementation.

How to use:
- Add one row per requested change.
- Keep `Current` text exact so it is easy to find in source.
- Use `Notes` for intent (tone, legal, clarity, conversion, etc.).
- Leave rows in `Pending` until you approve implementation.

Status values:
- `Pending`
- `Approved`
- `Implemented`

---

## Global / Shared Copy

| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Nav label | X / Twitter |  |  |
| Implemented | Footer line | Copyright [year] MetHere |  |  |

## Homepage (`index.html`)

### SEO
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Title | MetHere \| Remember who you met and where |  |  |
| Implemented | Meta description | MetHere is a local-first iOS app to remember who you met and where. Organize people by venue, get nearby reminders, and keep context when it matters. |  |  |

### Hero
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Eyebrow | iOS app |  |  |
| Implemented | H1 | Remember who you met and where. |  |  |
| Implemented | Lead | MetHere helps you save real-world connections with context. Add people, link them to venues, and recall details later when they matter. |  |  |
| Implemented | Primary CTA | Download on the App Store |  |  |
| Implemented | Secondary CTA | Support |  |  |
| Implemented | Trust line | Local-first storage by default, with optional backups and service-provider processing for analytics, crash reporting, and purchases. Read privacy details. |  |  |
| Implemented | Hero caption | Group people by venue so context stays tied to place. |  |  |

### How It Works
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Section title | How MetHere works |  |  |
| Implemented | Section lead | A practical flow from first meeting to timely recall. |  |  |
| Implemented | Step 1 title | Capture who you met |  |  |
| Implemented | Step 1 body | Add a person with notes, tags, date met, and role details while everything is still fresh. |  |  |
| Implemented | Step 2 title | Link the connection to a place |  |  |
| Implemented | Step 2 body | Attach a venue, pin location context, and control nearby alerts for the places that matter. |  |  |
| Implemented | Step 3 title | See everyone met at each venue |  |  |
| Implemented | Step 3 body | Open one place and instantly review all related people, details, and tags in one list. |  |  |
| Implemented | Step 4 title | Get reminded at the right moment |  |  |
| Implemented | Step 4 body | Nearby reminders help surface relevant people when you return to saved venues. |  |  |

### Why MetHere
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Section title | Why MetHere |  |  |
| Implemented | Section lead | Built for memory and context, not attention loops. |  |  |
| Implemented | Card 1 | No feed |  |  |
| Implemented | Card 1 body | Focus on people and places without algorithm-driven timelines. |  |  |
| Implemented | Card 2 | No social network |  |  |
| Implemented | Card 2 body | No profile chasing or social performance layers around your contacts. |  |  |
| Implemented | Card 3 | No ads |  |  |
| Implemented | Card 3 body | Your relationship memory stays utility-first, with no ad targeting surface. |  |  |

### Plans
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Section title | Plans |  |  |
| Implemented | Section lead | Start free. Upgrade when your network and workflows grow. |  |  |
| Implemented | Free title | Free |  |  |
| Implemented | Free body | Core people-and-venue memory flow with local-first storage, plus export/import and CSV support. |  |  |
| Implemented | Pro title | Pro |  |  |
| Implemented | Pro body | Higher limits and full feature access. Available as monthly, yearly, or lifetime plans. |  |  |
| Implemented | Plans note | Billing and subscription management are handled by Apple. Purchase restore is available in-app. |  |  |

### Privacy Trust
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Section title | Privacy and control |  |  |
| Implemented | Section body | Your core data stays on-device by default. Processor usage and policy details are documented in the Privacy Policy. |  |  |
| Implemented | Chip 1 | Local-first by default |  |  |
| Implemented | Chip 2 | Export and backup controls |  |  |
| Implemented | Chip 3 | No ad data sales |  |  |

### Final CTA
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | H2 | Keep every connection in context |  |  |
| Implemented | Body | Remember names, places, and details that matter without joining another social network. |  |  |
| Implemented | Primary CTA | Download on the App Store |  |  |
| Implemented | Secondary CTA | Get support |  |  |

## Support (`support.html`)

### SEO
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Title | MetHere \| Support |  |  |
| Implemented | Meta description | MetHere support for backup and restore, subscriptions, purchases, permissions, and troubleshooting. |  |  |

### Support Hero
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Eyebrow | Support |  |  |
| Implemented | H1 | Help with backups, purchases, and reminders. |  |  |
| Implemented | Lead | If you run into an issue, send us details and we will work through it with you. Support is best-effort. |  |  |
| Implemented | Contact line | Contact: metherecontact@gmail.com |  |  |
| Implemented | CTA | Download on the App Store |  |  |

### FAQ
| Status | Section | Current | Proposed | Notes |
|---|---|---|---|---|
| Implemented | Section title | Frequently Asked Questions |  |  |
| Implemented | Q1 | How do I back up my data? |  |  |
| Implemented | A1 | Go to Settings and use Export / Backup to create a JSON backup file. You can save it to Files or iCloud Drive. |  |  |
| Implemented | Q2 | How do I restore my data? |  |  |
| Implemented | A2 | Go to Settings and choose Import, then select a previously exported backup file. |  |  |
| Implemented | Q3 | How do I restore purchases? |  |  |
| Implemented | A3 | Open Settings in MetHere and use Restore Purchases. Make sure you are signed into the same Apple ID used for purchase. |  |  |
| Implemented | Q4 | How do I manage or cancel my subscription? |  |  |
| Implemented | A4 | Subscriptions are managed by Apple. Open iOS Settings, tap your Apple ID, then Subscriptions. |  |  |
| Implemented | Q5 | Nearby reminders are not triggering. What should I check? |  |  |
| Implemented | A5 | Confirm Location is allowed (including background), Notifications are enabled, and nearby alert toggles are on for the venues you want monitored. |  |  |
| Implemented | Q6 | How do I reset app data? |  |  |
| Implemented | A6 | Use the reset option in Settings to clear local data. Export a backup first if you may need to recover data. |  |  |

---

## Notes / Decisions
- Use this section for larger direction choices that affect multiple lines.
- Example: \"Use shorter sentence style across all CTA blocks.\"
- Applied status reflects live site updates completed on 2026-02-14.
- Four lines intentionally use earlier approved variants from review:
- `index.html` title: `MetHere | Remember the people you meet`
- Hero/privacy trust language uses: `optional backups and limited service providers`
- `No ads` body uses: `No ads. No ad targeting.`
