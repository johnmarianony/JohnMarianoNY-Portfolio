# Portfolio Audit — johnmarianony.com

**Date:** Oct 19, 2026  
**Audience assumption:** Hiring managers / design directors screening Platform Experience or senior UX strategy candidates  
**Verdict:** Strong federal story. Weak interview machine. Packaging—not experience—is the gap.

## Scores (0–100 judgment)

| Pillar | Score |
| --- | ---: |
| Hiring conversion | 46 |
| Competitive peer set | 44 |
| UX / design craft | 58 |
| Content / voice | 52 |
| Accessibility | 62 |
| Perf / SEO / tech | 68 |

## P0 blockers

1. Case pages still show Wix placeholder: **“Create Your First Project / Manage Projects.”**
2. `/accessibility-statement` still has bracket placeholders for accessibility coordinator name/phone/email—high credibility risk for a 508-aware federal UX lead.
3. Homepage lists ~14 equal-weight projects (feature-level Siemens + 2013 ESPN next to DoD/State/DOI).
4. Resume metrics ($1M+, 40% faster delivery, 6 mo → 2 wk) are buried; hero is generic UX poetry.
5. Soft CTA; `/contact-2` is essentially a Jim Henson quote + thank you.

## Pillar notes

### 1. Hiring conversion

**Works:** Clearance + NN/g + Accenture Federal Services; DOI / State / Defense / TS audit cases have real substance; Kobs testimonial is the right altitude.

**Breaks:** Generic hero; weak contact path; “search Mariano” certification friction; testimonial typos (“ona”).

### 2. Competitive benchmark

| Portfolio | Pattern | Vs John |
| --- | --- | --- |
| [Teresa Phan](https://www.teresaphan.com/) | 6 curated projects with metrics on cards | Leads with outcomes |
| [Ellie Krysl — Defense ISR](https://www.elliekrysl.net/portfolio/defense-isr) | Artifact-forward single deep case | Stronger visual evidence |
| [Michael Seufer](https://www.michaelseufer.com/portfolio) | Sterilized artifacts; cleared screens on request | Clearer clearance storytelling |
| [Ronald Schnier](https://ronaldschnier.com/) | Sharp positioning sentence | Stronger POV |
| **John Mariano** | Volume over curation | Best raw federal depth; weakest packaging |

### 3. UX / design craft

- IA: hero → about → flat gallery → about again → soft CTA.
- Keep 4–6 flagships: TS portal audit, DOI, State Total Experience, Defense modernization, one Adobe narrative, one Siemens modernization (not five splinters).
- Archive/collapse: Road Loans, ESPN 2013, Stop Button / Tabular Editor as solo cases.
- DOI and Defense writing are strong once opened; homepage teasers often slip into agency marketing voice.

### 4. Content / positioning / brand voice

- Right lane (“Platform Experience Strategist”), weak hero.
- Voice splits between sharp first-person cases and AI/template fluff (“top-notch solutions”).
- About foregrounding Midjourney + Wix AI can read as taste risk on a design portfolio.
- Brand test: without the nav name, first viewport could belong to many UX sites.

**Draft positioning:** Platform experience lead for mission-critical federal systems—TS/SCI cleared, NN/g certified—turning ambiguous multi-app ecosystems into measurable modernization outcomes.

### 5. Accessibility

Lighthouse a11y **84**, but:

- Statement placeholders contradict claimed WCAG 2.1 AA commitment
- Contrast fail on “View Projects”
- Heading order skips (H1 → H4)
- Gallery `item-link-wrapper` links fail discernible name
- Undersized testimonial avatar targets

### 6. Performance / SEO / technical health

| Signal | Result |
| --- | --- |
| Performance | 70 |
| SEO | 92 (missing meta description) |
| Best practices | 100 |
| LCP | 7.1 s |
| FCP | 1.8 s |
| TTI | 8.3 s |
| Homepage HTML | ~991 KB |
| Title | `Portfolio \| John Mariano` (generic) |
| HTTPS / HSTS / apex→www | Good |
| Platform | Wix Thunderbolt |

## Roadmap

| Priority | Change | Effort |
| --- | --- | --- |
| P0 | Remove “Create Your First Project” blocks on every case | Low |
| P0 | Rewrite accessibility statement; remove bracket placeholders | Low |
| P0 | Curate homepage to 4–6 flagship cases | Medium |
| P1 | Hero = brand + role thesis + 3 proof metrics + one CTA | Medium |
| P1 | Put outcomes on project cards | Medium |
| P1 | Real contact path (email / LinkedIn / calendar); fix testimonial typos | Low |
| P2 | Meta description + title; contrast; headings; gallery names; image weight | Medium |

## Limits

No analytics, no Wix editor access, no full screen-reader pass beyond Lighthouse.
