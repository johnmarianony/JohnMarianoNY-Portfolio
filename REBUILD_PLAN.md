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

**Substack positioning:** Tagline — “Where complex systems, human-centered design, and real life collide.” Use it as *voice channel*, not the homepage hero. Feature posts that reinforce platform/AI-ethics craft (e.g. People/Prompts/Purpose, Carbon and Code) — skip recipe/Inktober as homepage features unless you explicitly want personality beats below the fold.

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

1. TS / intel portal heuristic audit  
2. DOI — designing within constraints  
3. State — Total Experience  
4. Defense platform modernization  
5. Adobe — onboarding **or** Summit (pick one)  
6. Siemens STAR-CCM+ modernization (**one** narrative)

Archive or invite-only: ESPN 2013, Road Loans, Stop Button / Tabular Editor as solos.

---

## 5. Design system (brand direction)

Define in CSS variables before pages:

| Token | Intent |
| --- | --- |
| `--color-bg`, `--color-fg`, `--color-accent`, `--color-muted` | Avoid purple-AI / cream-serif / broadsheet clichés |
| `--font-display`, `--font-body` | Expressive display + readable body (not Inter/Roboto/Arial) |
| `--space-*`, `--radius-*` | Tight system; cards only where interaction needs them |
| Motion | Hero entrance, case hover, page transition — max 3 |

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
- DOI, State, Defense, TS audit (minimum)  
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
| `/portfolio-collections/my-portfolio/mission-critical-defense-platform-…` | `/work/defense-platform` |
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

## 11. What I need from you before scaffolding

**Locked**

- LinkedIn: https://www.linkedin.com/in/john-mariano  
- Blog: https://johnmarianony.substack.com/ (*My Neural Graffiti*)

**Still confirm**

1. Confirm **positioning sentence** (or approve draft from audit)  
2. Confirm **3 proof metrics** you’ll put in the hero  
3. Confirm **featured 6** (and which Adobe / Siemens variants)  
4. Preferred **host** (default Vercel) and whether domain DNS is under your control  
5. Contact preference: email only vs calendar link  
6. Whether v1 should include **invite deep layer** or wait for G5  
7. Brand direction: any must-keep colors/logo/fonts from current site  
8. Optional: **2–3 Substack posts** to feature on the homepage Writing strip (or skip strip in v1 and link Writing only in nav)  

---

## 12. Immediate next step

Once you confirm §11, scaffold the Next.js app in this repo (or a clean root), implement G1–G2, and put a preview URL online—while you finish case MDX and sterilized assets in parallel.
