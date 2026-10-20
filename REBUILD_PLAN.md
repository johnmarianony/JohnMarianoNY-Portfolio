# Custom rebuild plan — johnmarianony.com

**Goal:** Replace Wix with a custom, code-owned portfolio that converts Platform Experience / senior UX strategy interviews. Deploy on modern static hosting you control.

**Target scores (from audit):** Hiring ~86 · Peers ~84 · Craft ~88 · Content ~85 · A11y ~92 · Tech ~90

**Non-goals:** CMS platform lock-in, auth-heavy app, blog-first personal brand, 14-project dump, Wix migration of broken templates.

---

## 1. Product principles (locked from audit)

1. **Public skim wins in 30 seconds** — brand, thesis, 3 proof metrics, one CTA, ≤6 featured cases.
2. **Deep layer for clearance** — sterilized artifacts public; fuller walkthrough on request (invite or calendar), patterned after Kobs `#john` / Khoury / Seufer.
3. **Site is a work sample** — craft, a11y, and performance must match the federal 508 / platform story.
4. **Outcome-first cases** — every card and case opens with proof, not agency fluff.
5. **One composition hero** — no card collage, no floating badges, no Wix gallery chrome.
6. **Voice** — first-person strategist; ban “top-notch / exemplifies our commitment”; AI tools are footnote, not brand.
7. **Digital identity is a system** — portfolio converts; LinkedIn proofs employment; Substack carries POV/AI craft. Don’t make the site a blog clone.
8. **Voice follows the channel** — portfolio = “strategist on the record”; Substack = “human in the loop.” Don’t paste Substack fluff onto the homepage.

---

## 1a. Voice guide (site vs blog)

### What your voices are today

| Channel | Dominant register | Strengths | Weaknesses |
| --- | --- | --- | --- |
| **Homepage / teasers** | Mixed: slogan poetry + grateful intro + agency marketing | Clearance honesty; “Wall Street to Washington” is sticky | “Designing with Purpose Driven By Users”; “top-notch”; third-person “recent project by John Mariano”; over-thanks |
| **Strong case pages (DOI, DOW)** | First-person strategist | Constraint language (“UX theater”), mentorship, outcomes, systems thinking | Dense; light on punchy openers |
| **Substack — professional** (e.g. *Designing Through Ambiguity*) | Narrative leadership | Stakes, fog, mentorship, honest “quiet impact” without a launch | Long; needs a metric pull-quote for portfolio |
| **Substack — AI craft** (*People/Prompts*, *Carbon and Code*) | Ethical practitioner | Clear do/don’t lines; T³ Loop; trust-as-transaction | Framework-heavy; “magic” closers |
| **Substack — personal** (Sketchbook, recipes, fluff tagline) | Storyteller / dad / artist | Memorable, human | Wrong altitude for portfolio hero |

**Best sentence you already wrote (portfolio):**  
> Great UX isn’t about perfect freedom—it’s about strategic influence.

**Best sentence you already wrote (blog):**  
> This wasn’t just designing screens—it was designing ecosystems.

**Worst patterns to retire on the site:**  
“top-notch solutions,” “exemplifies our commitment,” “Thank you so much for taking the time…,” third-person project intros, “click above and search Mariano,” Midjourney/Wix AI as About headline.

### Recommended voice split

| Surface | Voice name | Rules |
| --- | --- | --- |
| Hero, meta, nav CTAs | **On the record** | One claim. No thanks. No slogans with broken grammar. Credentials as proof, not apology. |
| Case studies | **Strategist narrative** | Lead with outcome. Name constraint. First person. Specific platforms/acts. End with influence left behind. Borrow Substack’s honesty (fog, election clocks, quiet impact)—compress to scannable sections. |
| Approach page | **Methods** | Named frameworks (microjourneys, dual-path UX, T³ if you want AI)—short, teachable, like Kobs Methods. |
| About | **Human, still senior** | 1 short personal beat max (storyteller/mentor). AI = one sentence pointing to Substack ethics posts—not a toolkit name-drop list. |
| Substack | **Neural Graffiti** | Keep fluff, recipes, Inktober, dad essays. That’s the brand of the blog—not the portfolio. |

### Channel routing

- Portfolio homepage ← On the record + case chips  
- Portfolio cases ← Strategist narrative (tighten DOI/State/DOW; rewrite TS teaser entirely; **new** DOW migration MVP for $820M)  
- `/approach` ← Methods  
- Writing ↗ ← full Substack voice unchanged  
- Featured Writing strip (if used) ← only professional/AI-craft posts, never recipe/Inktober on the hiring skim  

### Rewrite examples (same fact, better voice)

**Hero (replace current)**  
Before: “Designing with Purpose Driven By Users”  
After: “I bring clarity to complexity on federal platforms—under constraint, clearance, and delivery pressure.”

**TS portal card (replace agency teaser)**  
Before: “This project exemplifies our commitment to delivering top-notch solutions…”  
After: “Eight-week heuristic audit of a classified self-service portal—quick wins for adoption plus a two-year modernization roadmap.”

**About AI beat (replace tool list flex)**  
Before: “ChatGPT, Midjourney, and WIX AI to build this site…”  
After: “I use AI as a craft amplifier with a published ethical line—human-led, purpose-driven. I write about that practice on *My Neural Graffiti*.”

**State Total Experience teaser (borrow Substack honesty)**  
Before: “Unraveled ambiguity to shape a unifying vision…”  
After: “Led Total Experience through fog, election clocks, and no chosen platform—quiet impact: research and framework left behind when launch wasn’t ready.”

**Substack lines to mine for portfolio pull-quotes**  
- “This wasn’t just designing screens—it was designing ecosystems.” (*Designing Through Ambiguity*)  
- “It’s a trust transaction.” (*Carbon and Code* Pt.4)  
- “Human-Led. AI-Enhanced. Purpose-Driven.” + T³ Loop — Talk, Think, Tweak (*People, Prompts, and Purpose*)

### Voice checklist (every portfolio page)

- [ ] First person (“I”), not “we/our” agency speak  
- [ ] No gratitude preamble on the homepage  
- [ ] Outcome or constraint in the first 2 sentences of every case  
- [ ] One concrete noun from the work (platform, agency, metric, artifact)  
- [ ] No “top-notch / delve / unique value it contributes”  
- [ ] AI mentioned only with ethics/context—or link out  

---

## 1b. Digital identity map (confirmed)

| Property | Canonical URL | Role in system | v1 treatment |
| --- | --- | --- | --- |
| **Portfolio** | `johnmarianony.com` (new build) | Hiring conversion / work sample | Primary product |
| **LinkedIn** | [linkedin.com/in/john-mariano](https://www.linkedin.com/in/john-mariano) | Proof of role, network, recommendations | Header/footer + Contact secondary CTA; JSON-LD `sameAs` |
| **Blog** | [johnmarianony.substack.com](https://johnmarianony.substack.com/) — *My Neural Graffiti* | POV, AI practice, process essays | External “Writing” link; optional homepage strip of 2–3 featured posts (title + URL, curated in `site.ts`) |
| Resume PDF | Hosted on new site `/resume.pdf` | Recruiter download | Contact + nav |
| NN/g cert | Link out (search or direct if available) | Credential proof | About only |
| X / Instagram / merch / podcasts | Existing handles | Secondary / personal | Footer optional; **not** in primary nav |

**Substack positioning:** Tagline — “Where complex systems, human-centered design, and real life collide.” Use it as *voice channel*, not the homepage hero.

**Homepage Writing strip (locked candidates):**  
1. [Designing Through Ambiguity](https://johnmarianony.substack.com/p/designing-through-ambiguity-leading)  
2. [Carbon and Code Pt.4 — My Line in the Sand](https://johnmarianony.substack.com/p/carbon-and-code-part-4-my-line-in)  
3. [People, Prompts, and Purpose Pt.3](https://johnmarianony.substack.com/p/03-people-prompts-and-purpose-putting)  

Skip recipe/Inktober/Margin Doodles on the hiring skim.

**Cross-linking rules**

- Portfolio → LinkedIn + Substack (always)
- LinkedIn featured section → portfolio + 1–2 Substack essays (you update manually)
- Substack About → portfolio URL after cutover
- Do **not** embed full Substack feed (keeps LCP clean; avoids blog-first skim)

---

## 2. Recommended stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js** (App Router) + TypeScript | Static/SSG portfolio, excellent SEO, designer-friendly React |
| Styling | **Tailwind CSS** + CSS variables | Fast iteration; tokenized brand system |
| UI primitives | **shadcn/ui** (Button, Dialog, Input only as needed) | Accessible primitives without a second design system |
| Content | **MDX** in-repo (`content/cases/*.mdx`) | You own copy in git; no CMS required for v1 |
| Images | `next/image` + AVIF/WebP in `/public` or remote optimizer | Fix LCP vs Wix gallery weight |
| Motion | CSS + minimal Framer Motion (2–3 intentional motions) | Presence without noise |
| Analytics | Plausible or Vercel Analytics (optional) | Privacy-respecting hiring funnel metrics |
| Forms | Resend / Formspree / Route Handler mailto fallback | Contact without a backend database |
| Hosting | **Vercel** (primary) or Cloudflare Pages / Netlify | Git push → preview → production; custom domain + HTTPS |

**Repo layout (proposed)**

```text
app/
  (marketing)/page.tsx          # homepage
  work/page.tsx                 # optional archive
  work/[slug]/page.tsx         # case study
  approach/page.tsx             # methods / platform POV
  about/page.tsx
  contact/page.tsx
  accessibility/page.tsx
  invite/[token]/page.tsx      # optional gated deep CV (phase 2)
content/
  cases/*.mdx
  site.ts                       # nav, proofs, positioning, social (LinkedIn + Substack)
public/
  images/...
  resume.pdf
components/
  hero, case-card, case-layout, cta, site-header, site-footer
```

---

## 3. Information architecture

| Route | Job | Notes |
| --- | --- | --- |
| `/` | Hiring skim | Brand-level name, thesis, 3 proofs, CTA, 4–6 featured cases |
| `/work` | Optional archive | Only if needed; default hide older Siemens splinters |
| `/work/[slug]` | Case study | Shared template (below) |
| `/approach` | Methods / platform leadership | Kobs-inspired: how you lead under constraint |
| `/about` | Bio, clearance framing, NN/g, awards | Links to LinkedIn + Writing |
| `/contact` | Email · LinkedIn · calendar · resume | Full empty/loading/success/error |
| `/accessibility` | Honest statement matching shipped a11y | No placeholder brackets |
| `/invite/[token]` (later) | Permissioned deep CV / extra artifacts | Optional; mirrors `#john` pattern |
| Writing | External → Substack | Not a local `/blog` in v1 |

**Nav (desktop always visible ≥1024px):** Work · Approach · About · Writing ↗ · Contact · Resume  

(*Writing* opens Substack in a new tab with clear external affordance.)

---

## 4. Content model

### Site config (`content/site.ts`)

- `name`, `titleTag`, `metaDescription`
- `positioning` (one sentence)
- `proofs[]` — three homepage chips (metric + label)
- `cta` — primary + secondary
- `social` — LinkedIn, Substack, email
- `featuredPosts[]` — optional `{ title, url, date }` (2–3 Substack URLs)
- `featuredCaseSlugs[]` — max 6

### Case frontmatter (MDX)

```yaml
slug: doi-platform-constraints
title: Designing Within Constraints
client: Department of the Interior
sector: Federal
role: UX Design Lead
dates: 2024–2025
featured: true
order: 2
proof: "Contract extended; wireframes reused across DOI efforts"
clearance: sterilized   # public | sterilized | invite-only
platforms: [Power Platform, USWDS]
tags: [platform, federal, mentorship]
hero: /images/cases/doi/hero.webp
ogImage: /images/cases/doi/og.webp
```

### Case body sections (required order)

1. Outcomes (lead)
2. Context / constraint
3. Role & team
4. Approach
5. Artifacts (2–4 sterilized images/diagrams)
6. Reflection
7. CTA (contact / next case)

### v1 featured set (freeze before build)

1. **DOW — platform design & migration MVP** *(new case · owns $820M / 5-year proof)*  
2. TS / intel portal heuristic audit  
3. DOI — designing within constraints  
4. State — Total Experience  
5. **DOW — mission-critical platform modernization** *(was “Defense”; +65% / 500+ eng hrs)*  
6. Simcenter STAR-CCM+ A–Z Workflow  

**Homepage archive (linked from `/work`, not featured chips):** ESPN X Games apps, Adobe Summit/onboarding, Road Loans, Siemens feature splinters. *ESPN stays in the repo; swap with STAR-CCM on the homepage if you prefer.*

### War Department / DOW naming (site-wide)

Public portfolio copy follows current War Department public naming ([Brand Guide](https://www.war.gov/Brand-Guide/), EO 14347 secondary title):

| Do | Don’t |
| --- | --- |
| First reference: **War Department** (most copy) or **Department of War** (formal) | “Department of Defense” / “DoD” / “DOD” in new case copy |
| Second reference / chips: **DOW** (uppercase O — web/AP style per War.gov) | **DoW** on the portfolio (that form is for official department releases) |
| Client field in MDX: `War Department (DOW)` | Imply the legal statutory name changed (still DoD in statute until Congress acts—no need to footnote on a portfolio card) |
| Case accent tokens inspired by DOW palette (below) | Reproduce the **DOW logo or seal** — protected; unauthorized on a personal site |

**DOW case accent tokens** (case chrome only—not the whole personal brand):

- Primary Blue `#355e93` · Ocean `#254267` · Space `#15263b` · Steel `#aebfd4` · Hazy `#ebeff5` · Gray `#333333`

---

## 5. Design system (brand direction)

**Personal site brand:** start fresh (your decision). Separate from DOW case accents above.

Define in CSS variables before pages:

| Token | Intent |
| --- | --- |
| `--color-bg`, `--color-fg`, `--color-accent`, `--color-muted` | Avoid purple-AI / cream-serif / broadsheet clichés |
| `--font-display`, `--font-body` | Expressive display + readable body (not Inter/Roboto/Arial) |
| `--space-*`, `--radius-*` | Tight system; cards only where interaction needs them |
| Motion | Hero entrance, case hover, page transition — max 3 |
| `--dow-*` | Optional case-scoped accents for War Department work only |

**Hero budget:** brand name (hero-level) · one headline · one support line · CTA group · one full-bleed visual plane. No stats strip clutter beyond three proof chips tied to the composition.

**Visual reference mashup (not clones):** Jacob metric density · Kobs Methods · Khoury/Haines clearance depth · Phan card skim · Schnier thesis sharpness.

---

## 6. Feature scope

### v1 (ship to replace Wix)

- [ ] Static site with routes above  
- [ ] Featured homepage + 4–6 MDX cases  
- [ ] Approach + About + Contact + Accessibility  
- [ ] Resume PDF  
- [ ] SEO: title, meta, OG, JSON-LD `Person`  
- [ ] 301 map from old Wix URLs  
- [ ] Lighthouse mobile: Perf ≥90, A11y ≥95, SEO ≥95  
- [ ] Keyboard nav, skip link, focus-visible, contrast AA  

### v1.5 (post-cutover)

- [ ] Invite/token deep page (cleared ledger / extra artifacts)  
- [ ] Optional `/work` archive with filters (sector / platform)  
- [ ] Analytics on CTA + case opens  

### Out of scope for v1

- Headless CMS, auth accounts, e-commerce/merch, podcasts hub, blog  
- Pixel-perfect Wix clone  

---

## 7. Build phases

### Phase G0 — Content & brand freeze

**Exit:** Written lock on positioning, 3 proofs, featured 6 slugs, sterilized asset list, resume PDF, contact channels.

Deliverables:

- Positioning sentence (final)
- Proof chips (final numbers you will stand behind)
- Case outlines in MDX stubs (titles + frontmatter + outcomes bullets)
- Asset checklist (what exists / what to redraw)
- Redirect spreadsheet (old Wix URL → new path)

### Phase G1 — Foundation

**Exit:** App boots locally + on preview host; design tokens; header/footer; a11y baseline; contact page working.

- Scaffold Next.js + Tailwind + shadcn  
- Tokenized theme + typography  
- Layout shell, desktop horizontal nav  
- Contact form (or mailto + LinkedIn + calendar links)  
- Accessibility page (honest)  
- CI: typecheck + lint + build  

### Phase G2 — Homepage composition

**Exit:** Passes 30-second hiring-manager test on desktop and mobile.

- Brand-first hero + proofs + CTA  
- Featured case grid with outcome chips  
- 2–3 motions  
- Footer CTA repeat  

### Phase G3 — Case system + Approach

**Exit:** Shared case template live; ≥4 flagship cases complete; Approach page live.

- MDX pipeline + case layout  
- DOW migration MVP ($820M), DOI, State, DOW modernization, TS audit (minimum)  
- Approach (methods / platform leadership)  
- About  

### Phase G4 — Harden & cutover

**Exit:** Production domain on new host; Wix decommissioned or parked.

- Remaining featured cases  
- Redirects + Search Console sitemap  
- Lighthouse / axe pass  
- DNS cutover (apex + www)  
- Monitoring (uptime + analytics)  
- Wix: remove public broken pages or set temporary maintenance only until DNS flips  

### Phase G5 — Invite deep layer (optional)

- Tokenized `/invite/[token]` or signed links  
- Extended CV / extra artifacts  
- No index (`noindex`) on invite routes  

---

## 8. Hosting & deploy

| Step | Action |
| --- | --- |
| 1 | Create Git repo (this project or new) with Next app at root |
| 2 | Connect **Vercel** (or Cloudflare Pages) to repo |
| 3 | Preview deploys on every push |
| 4 | Add custom domain `johnmarianony.com` + `www` |
| 5 | Force HTTPS; set apex → www (or reverse) consistently |
| 6 | Env vars only if using form API keys (keep contact working without secrets via mailto fallback) |

**DNS cutover checklist**

1. Lower TTL beforehand  
2. Point domain to new host  
3. Verify HTTPS cert  
4. Hit critical redirects  
5. Submit new sitemap  
6. Cancel or pause Wix only after verification  

---

## 9. Redirect map (starter)

| Old (Wix) | New |
| --- | --- |
| `/` | `/` |
| `/contact-2` | `/contact` |
| `/accessibility-statement` | `/accessibility` |
| `/portfolio-collections/my-portfolio/user-experience-leadership-for-the-department-of-the-interior` | `/work/doi-platform-constraints` |
| `/portfolio-collections/my-portfolio/total-experience-project-for-the-department-of-state` | `/work/state-total-experience` |
| `/portfolio-collections/my-portfolio/mission-critical-defense-platform-…` | `/work/dow-platform-modernization` |
| *(new — no Wix URL)* | `/work/dow-platform-migration-mvp` |
| `/portfolio-collections/my-portfolio/heuristic-audit-of-top-secret-intelligence-portal` | `/work/intel-portal-audit` |
| Remaining Wix case URLs | Matching `/work/[slug]` or `/work` archive |

Export full list from Wix sitemaps during G0.

---

## 10. Acceptance criteria (definition of done)

- [ ] No template/placeholder copy anywhere  
- [ ] ≤6 featured homepage cases; each with a proof line  
- [ ] Desktop nav visible without hamburger ≥1024px  
- [ ] Contact has one primary action and works on mobile  
- [ ] Accessibility statement matches real implementation  
- [ ] Lighthouse mobile Perf ≥90, A11y ≥95, Best Practices ≥95, SEO ≥95  
- [ ] Old Wix URLs 301 to new paths (no soft 404s on top cases)  
- [ ] Hiring-manager 30s test: who / level / 2–3 outcomes / how to talk  

---

## 11. Decisions lock (from you · Oct 20, 2026)

### Locked

| # | Decision | Value |
| --- | --- | --- |
| 1 | **Positioning** | Approved — *Platform experience lead for mission-critical federal systems—TS/SCI cleared, NN/g certified—turning ambiguous multi-app ecosystems into measurable modernization outcomes.* |
| 2 | **Proof chips (all three)** | See table below — **confirmed** |
| 3 | **Featured 6** | (1) **DOW platform migration MVP** *(new · $820M)* · (2) TS intel portal · (3) DOI · (4) State TX · (5) **DOW platform modernization** *(+65%)* · (6) STAR-CCM+ A–Z · ESPN → `/work` archive (swappable) |
| 5 | **Brand** | **Start fresh** for personal site; DOW cases use War Department naming + accent palette (no official logo/seal) |
| — | LinkedIn | https://www.linkedin.com/in/john-mariano |
| — | Blog | https://johnmarianony.substack.com/ (*My Neural Graffiti*) |
| — | **Contact email** | `john.mariano.ny@gmail.com` |

### Proof metrics — locked

| Chip | Short label (hero) | Owns this |
| --- | --- | --- |
| **1** | **$820M · 5-year contract** | **New case:** DOW platform design & migration MVP (delivery team) |
| **2** | **+65% satisfaction · 500+ eng hrs saved** | DOW mission-critical platform modernization *(confirmed)* |
| **3** | **8-week audit → 2-year roadmap** | TS intel portal *(confirmed)* |

**Hero phrasing for #1:**  
“Design & requirements for a War Department platform migration MVP that helped win an **$820M, 5-year** contract.”

**New case stub (to create in G0/G3):**

```yaml
slug: dow-platform-migration-mvp
title: Platform Design & Migration MVP
client: War Department (DOW)
sector: Federal
role: UX / platform design & requirements (delivery team)
proof: "$820M · 5-year contract"
clearance: sterilized
featured: true
order: 1
```

Body TBD with you (sterilized outcomes, constraint, role)—public page must not claim official DOW endorsement or use seal/logo.

### Writing strip — most relevant Substack posts

For a **hiring** homepage, feature POV that reinforces platform leadership + AI ethics—not Margin Doodles / Inktober / recipes.

| Priority | Post | Why |
| --- | --- | --- |
| **1** | [*Designing Through Ambiguity*](https://johnmarianony.substack.com/p/designing-through-ambiguity-leading) | State TX leadership narrative—fog, election clocks, quiet impact. Closest match to federal hiring skim. |
| **2** | [*Carbon and Code Pt.4 — My Line in the Sand*](https://johnmarianony.substack.com/p/carbon-and-code-part-4-my-line-in) | AI ethics / “trust transaction”—backs the About AI beat without tool-name flex. |
| **3** | [*People, Prompts, and Purpose Pt.3*](https://johnmarianony.substack.com/p/03-people-prompts-and-purpose-putting) | Human-Led · AI-Enhanced · Purpose-Driven + T³ Loop—portable methods language for `/approach`. |

**Runner-up:** [*Human in the Loop Toolkit*](https://johnmarianony.substack.com/p/02-people-prompts-and-purpose-the) if you want HITL framing over the “putting it together” essay.  
**Skip for homepage strip:** Inktober / Margin Doodles / recipes (keep on Substack; optional personality below the fold later).

### Logistics — proposed defaults (handle together)

| Topic | Proposal for v1 | You can override anytime |
| --- | --- | --- |
| **Host** | **Vercel** | Cloudflare Pages / Netlify also fine |
| **DNS** | You own cutover of `johnmarianony.com` when preview is ready; we prepare redirects first | Confirm you control registrar when we reach G4 |
| **Contact** | **Email primary:** `john.mariano.ny@gmail.com` + LinkedIn secondary; mailto fallback | Add calendar link when you have a booking URL |
| **Invite deep layer** | **Wait for G5** — public sterilized cases first | Add `/invite/[token]` after flagship cases ship |

---

## 12. Immediate next step

**Ready to scaffold** on your go-ahead: Next.js G1–G2 preview with fresh personal brand, featured-6 stubs (DOW MVP first), DOW naming rules baked into case metadata, Writing strip, and proof chips locked above.

**In parallel from you (G0 content):** outline bullets for the new DOW migration MVP case (what you can say publicly); confirm ESPN vs STAR-CCM if you want to swap homepage slot 6.
