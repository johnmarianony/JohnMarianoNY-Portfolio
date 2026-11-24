export type CasePostcard = {
  src: string;
  alt: string;
  caption: string;
  /**
   * Section the postcard should appear in, or immediately after.
   * "problem"  = after Context + CaseBeats
   * "approach" = inside Approach, after the bullets
   * "outcome"  = immediately before the Outcomes list
   * "context"  = after the Context paragraph, before CaseBeats
   */
  anchor: "context" | "problem" | "approach" | "outcome";
  width?: number;
  height?: number;
  /** Optional explicit tilt in degrees, e.g. -1.6 or 1.8. Alternate if omitted. */
  tilt?: number;
};

export type CaseArtifact = {
  src: string;
  alt: string;
  caption: string;
  /** Portrait screenshots (e.g. Facebook tab captures) */
  portrait?: boolean;
  /** Full board, so a 16:9 crop cannot cut the caption or the diagram. */
  board?: boolean;
  width?: number;
  height?: number;
  /**
   * Mid-story slot. Index 0 is the hero, unless the case uses an outcome
   * postcard and skips the in-page hero figure.
   * Unset artifacts after the hero stay in the end gallery.
   */
  slot?: "challenge" | "approach" | "outcome";
};

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseStat = {
  /** Numeric target for the count-up. */
  value: number;
  prefix?: string;
  suffix?: string;
  /**
   * If set, this is the final visible numeral (for ranges such as 20–25%).
   * Count up only when `display` is omitted.
   */
  display?: string;
  label: string;
  /** Optional 0–1 fill for a subtle progress ring or bar. Omit when it would be meaningless. */
  progress?: number;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  role: string;
  dates: string;
  featured: boolean;
  order: number;
  proof: string;
  clearance: "public" | "sterilized" | "invite-only";
  platforms: string[];
  tags: string[];
  summary: string;
  /** Short card blurb (Wix-style 1–2 lines). Falls back to summary. */
  teaser?: string;
  dowAccent?: boolean;
  /** Sterilized artifact thumb under /images/cases/ */
  thumb?: string;
  /** Optional splash poster (taller / right-weighted) for FeaturedCase */
  posterThumb?: string;
  thumbAlt?: string;
  metrics?: CaseMetric[];
  /**
   * Animated mid-story results. When present, omit `metrics` so the same
   * numbers are not repeated in the static hero band.
   */
  stats?: CaseStat[];
  /** Story-beat postcards. Different chrome from `artifacts`. */
  postcards?: CasePostcard[];
  artifacts?: CaseArtifact[];
  pullQuote?: string;
  outcomes: string[];
  context: string;
  /** Labeled beats under Context. Omit when a case does not use this frame. */
  problem?: string;
  opportunity?: string;
  constraint?: string;
  approach: string[];
  reflection: string;
};

export const processSteps = [
  { label: "Discover", detail: "Pressure, users, and real constraints" },
  { label: "Align", detail: "Shared frames leadership can decide on" },
  { label: "Leave influence", detail: "Assets and judgment that outlast the sprint" },
] as const;

export const cases: CaseStudy[] = [
  {
    slug: "dow-platform-migration-mvp",
    title: "Platform Migration MVP: Federal Defense Organization",
    client: "War Department (DOW)",
    sector: "Federal",
    role: "UX / platform design & requirements (delivery team)",
    dates: "2025–2026",
    featured: true,
    order: 1,
    proof: "$820M · 5-year contract",
    clearance: "sterilized",
    platforms: ["Platform migration", "MVP delivery"],
    tags: ["Requirements", "Delivery"],
    dowAccent: true,
    thumb: "/images/cases/dow-platform-migration-mvp.jpg",
    thumbAlt: "Sterilized platform migration architecture diagram",
    teaser:
      "Design and requirements for a platform migration MVP that helped win an $820M, five-year contract.",
    summary:
      "Integral to a delivery team shaping design and requirements for a platform design and migration MVP that helped win an $820M, five-year contract.",
    metrics: [
      { value: "$820M", label: "5-year contract the MVP helped win" },
      { value: "MVP", label: "Platform design & migration path" },
      { value: "DOW", label: "War Department delivery team" },
    ],
    artifacts: [
      {
        src: "/images/cases/dow-platform-migration-mvp.jpg",
        alt: "Sterilized platform migration architecture diagram",
        caption: "Target architecture framing for the migration MVP",
      },
      {
        src: "/images/cases/dow-platform-migration-mvp-2.jpg",
        alt: "Sterilized before-to-after platform consolidation diagram",
        caption: "From tangled legacy nodes to a clearer target platform",
      },
      {
        src: "/images/cases/dow-platform-migration-mvp-5.jpg",
        alt: "Consolidation sketch of tangled legacy channels becoming request, approval, and knowledge paths on one record",
        caption:
          "Legacy to Mission Service Center, eight channels become three paths on one record",
        slot: "challenge",
      },
      {
        src: "/images/cases/dow-platform-migration-mvp-4.jpg",
        alt: "Value by migration-risk board marking what shipped in the MVP and what was deferred with a trigger",
        caption:
          "Value × risk, what moved first, and a not-yet list with a trigger on each deferral",
        slot: "approach",
      },
    ],
    pullQuote:
      "The win wasn’t a launch screenshot, it was a contract-shaped outcome built under constraint.",
    outcomes: [
      "Design and requirements contributed to an MVP that supported an $820M, 5-year award",
      "Platform migration framing clarified scope under delivery pressure",
      "Sterilized public narrative, deeper walkthrough available on request",
    ],
    context:
      "A high-stakes War Department platform modernization effort required a credible MVP path, design and requirements tight enough to de-risk migration, clear enough for executive decision-making.",
    problem:
      "The migration was already about three months behind. Legacy workflows were tangled, and the customer risk was not a pretty homepage. It was picking the wrong work first and burning the follow-on.",
    opportunity:
      "Rank what to move by mission value and migration risk, put a clear Not yet list on the table, and ship an MVP path into a Mission Service Center that helped win the multi-year follow-on (~$800M class).",
    constraint:
      "We were moving into a standard ITSM-class platform, not a custom build. That meant using what the platform already offered for tickets, catalogs, and day-one service paths. Design stayed dark and 508-friendly so it would clear a federal review, not win an awards deck.",
    approach: [
      "Partnered inside the delivery team on platform design and requirements",
      "Framed migration MVP outcomes for leadership and engineering alignment",
      "Kept artifacts clearance-safe for public storytelling",
    ],
    reflection:
      "The win wasn’t a launch screenshot, it was a contract-shaped outcome built from disciplined platform design under constraint. Full narrative expanding as sterilized details are cleared.",
  },
  {
    slug: "intel-portal-audit",
    title: "Heuristic Audit: Federal Mission Portal",
    client: "U.S. Government (cleared engagement)",
    sector: "Federal / Intelligence",
    role: "UX lead · heuristic audit",
    dates: "Two-month engagement",
    featured: true,
    order: 2,
    proof: "8-week audit → 2-year modernization roadmap",
    clearance: "sterilized",
    platforms: ["Self-service portal"],
    tags: ["Research", "Service design"],
    thumb: "/images/cases/intel-portal-audit.jpg",
    thumbAlt: "Sterilized heuristic audit findings board",
    teaser:
      "Eight-week heuristic audit of a classified self-service portal, quick wins for adoption plus a two-year modernization roadmap.",
    summary:
      "Eight-week heuristic audit of a classified self-service portal, quick wins for adoption plus a two-year modernization roadmap.",
    metrics: [
      { value: "8 weeks", label: "Heuristic audit engagement" },
      { value: "2 years", label: "Modernization roadmap horizon" },
      { value: "Adoption", label: "Quick wins sequenced first" },
    ],
    artifacts: [
      {
        src: "/images/cases/intel-portal-audit.jpg",
        alt: "Sterilized heuristic audit findings board",
        caption: "Findings synthesis, severity without exposing the system",
      },
      {
        src: "/images/cases/intel-portal-audit-2.jpg",
        alt: "Sterilized quick-wins to multi-year roadmap timeline",
        caption: "Quick wins now, structural bets across a two-year arc",
      },
      {
        src: "/images/cases/intel-portal-audit-3.jpg",
        alt: "Six-step task walkthrough with severity tags, showing critical steps that end in a phone call",
        caption:
          "Severity-tagged walkthrough, the critical steps fail, and people finish by phone",
        slot: "challenge",
      },
      {
        src: "/images/cases/intel-portal-audit-4.jpg",
        alt: "Decision board splitting quick wins from structural bets against call-center volume",
        caption:
          "VIP call-center workaround, two tracks, one goal: move volume off the phones",
        slot: "approach",
      },
    ],
    pullQuote:
      "Great UX isn’t about perfect freedom, it’s about strategic influence.",
    outcomes: [
      "Quick-win recommendations to improve adoption across the agency",
      "Two-year modernization roadmap grounded in observed UX debt",
      "Clear separation of near-term fixes vs structural platform work",
    ],
    context:
      "A deployed self-service portal needed an honest read on usability and adoption, without theater, and within clearance constraints.",
    problem:
      "Everyone finished critical and noncritical work by phone. The call center was so easy and so efficient that the portal looked like the bottleneck and picked up unflattering nicknames, even though that phone path carried a steep cost.",
    opportunity:
      "Show that the bottleneck was partly a competing channel. Then surface the highest leverage portal content (common forms, knowledge articles, catalog items) so leadership could move volume off an expensive call center without pretending the portal was fine.",
    constraint:
      "A cleared on-prem self-service portal competing with a high-SLA call center. Severity and nicknames stay composite. No system or vendor names.",
    approach: [
      "Heuristic evaluation against real task flows",
      "Prioritized findings into quick wins and multi-year bets",
      "Briefed stakeholders on adoption risks and sequencing",
    ],
    reflection:
      "Great UX isn’t about perfect freedom, it’s about strategic influence. An eight-week lens can still shape years of modernization.",
  },
  {
    slug: "doi-platform-constraints",
    title: "Constrained Platform Design: Federal Agency",
    client: "Department of the Interior",
    sector: "Federal",
    role: "UX Design Lead",
    dates: "2024–2025",
    featured: false,
    order: 7,
    proof: "Policy → platform-aligned UX; assets reused; contract extended",
    clearance: "sterilized",
    platforms: ["Power Platform", "USWDS"],
    tags: ["Platform", "Mentorship"],
    thumb: "/images/cases/doi-platform-constraints.jpg",
    thumbAlt: "Sterilized federal constraint wireframe sheets",
    teaser:
      "Translated federal policy into design constraints, aligning bureaus, mentoring juniors, and leaving assets that got reused.",
    summary:
      "Enabled platform alignment across federal bureaus through research, mentoring, and wireframe-based strategy, translating federal policy into actionable design constraints.",
    metrics: [
      { value: "Policy → UX", label: "Constraints made actionable" },
      { value: "Reused", label: "Wireframes across DOI efforts" },
      { value: "Extended", label: "Contract on alignment strength" },
    ],
    artifacts: [
      {
        src: "/images/cases/doi-platform-constraints.jpg",
        alt: "Sterilized federal constraint wireframe sheets",
        caption: "Wireframe strategy under shared platform rules",
      },
      {
        src: "/images/cases/doi-platform-constraints-2.jpg",
        alt: "Sterilized mentorship and constraint workshop board",
        caption: "Workshop boards that made policy legible for designers",
      },
      {
        src: "/images/cases/doi-platform-constraints-4.jpg",
        alt: "Dark capability catalog sorting features into native, workaround, and off-limits",
        caption:
          "Capability catalog, native, workaround, and off-limits before any polish",
        slot: "challenge",
      },
      {
        src: "/images/cases/doi-platform-constraints-3.jpg",
        alt: "Dark annotated wire catalog of three shared flows, each marked policy, platform, and pattern",
        caption:
          "Annotated wire catalog, every screen traces a policy line and a platform limit",
        slot: "approach",
      },
    ],
    pullQuote:
      "Constraint isn’t the enemy of craft, it’s the brief.",
    outcomes: [
      "Wireframe strategy reused across DOI efforts",
      "Junior designers mentored into constraint-fluent practice",
      "Contract extended on the strength of platform alignment work",
    ],
    context:
      "Multiple bureaus, shared platforms, and policy constraints that make “UX theater” expensive. The job was unification without pretending freedom that didn’t exist.",
    problem:
      "Two related bureau programs sat on shared low-code backends. Policy made custom polish expensive, but teams kept designing as if the stack were open, and burned time on work the platform would never ship.",
    opportunity:
      "Make the hard edges legible first. What was native, what was a workaround, and what was off-limits. Then align both programs on a wireframe strategy juniors could reuse after I left.",
    constraint:
      "Shared low-code backends for internal users only. One program also needed a public-facing front end on a separate portal class, so what could ship native differed by audience, not just by bureau. Catalog first: Native / Workaround / Off-limits.",
    approach: [
      "Translated policy into design constraints teams could use",
      "Wireframe-led strategy for cross-bureau alignment",
      "Mentored designers through ambiguous federal delivery",
    ],
    reflection:
      "Constraint isn’t the enemy of craft, it’s the brief. Influence shows up in what gets reused after you leave.",
  },
  {
    slug: "state-total-experience",
    title: "Total Experience Strategy: Federal Agency",
    client: "U.S. Department of State",
    sector: "Federal",
    role: "UX strategy lead / team lead",
    dates: "2024",
    featured: false,
    order: 8,
    proof: "Quiet impact: research & framework left behind when launch wasn’t ready",
    clearance: "sterilized",
    platforms: ["Total Experience", "Multi-platform evaluation"],
    tags: ["Strategy", "Leadership"],
    thumb: "/images/cases/state-total-experience.jpg",
    thumbAlt: "Sterilized Total Experience ecosystem map",
    teaser:
      "Led Total Experience through fog and election clocks, quiet impact when launch wasn’t ready.",
    summary:
      "Led Total Experience through fog, election clocks, and no chosen platform, quiet impact: research and framework left behind when launch wasn’t ready.",
    metrics: [
      { value: "TX", label: "Total Experience vision" },
      { value: "Fog", label: "No stack; shifting leadership" },
      { value: "Quiet", label: "Impact without a launch" },
    ],
    artifacts: [
      {
        src: "/images/cases/state-total-experience.jpg",
        alt: "Sterilized Total Experience ecosystem map",
        caption: "HR, admin, and service delivery as one ecosystem",
      },
      {
        src: "/images/cases/state-total-experience-2.jpg",
        alt: "Sterilized ambiguity-to-clarity strategy board",
        caption: "From ambiguity fog to a reusable decision framework",
      },
      {
        src: "/images/cases/state-total-experience-3.jpg",
        alt: "Ecosystem map of one employee journey across people, workplace, and service desks, with handoff breaks",
        caption:
          "Ecosystem handoff map, one journey, and the breaks are in the handoffs",
        slot: "challenge",
      },
      {
        src: "/images/cases/state-total-experience-4.jpg",
        alt: "Non-launch board showing a frozen go-live and the criteria, roadmap, and owner left for the next team",
        caption:
          "Non-launch pivot, go-live left the table; the handoff is what the next team can carry",
        slot: "approach",
      },
    ],
    pullQuote:
      "This wasn’t just designing screens, it was designing ecosystems.",
    outcomes: [
      "Unifying vision across HR, admin, and service delivery",
      "Reusable framework influencing later platform decisions",
      "Mentored a team of three through ambiguous client leadership",
    ],
    context:
      "No pre-selected tech stack, shifting client leadership, and an inauguration clock. Ambiguity wasn’t a phase, it was the operating environment.",
    problem:
      "The client had not picked a platform, leadership kept changing, and a hard political deadline was coming. Nobody could design the \"real\" product yet, but the work still had to move.",
    opportunity:
      "When go-live left the table, redefine the win: leave-behinds the next team can decide from. Buyers guide, fog-to-frame roadmap, mentored judgment that outlasts a frozen launch.",
    constraint:
      "No stack selected. Platform choice stayed open while Total Experience framing still had to move.",
    approach: [
      "Weekly trust-building with the primary stakeholder",
      "Close mentorship for junior designers",
      "Outcomes over deliverables, value leadership could carry forward",
    ],
    reflection:
      "This wasn’t just designing screens, it was designing ecosystems. Success can be quiet impact when launch isn’t ready.",
  },
  {
    slug: "dow-platform-modernization",
    title: "Mission Platform Suite: Federal Defense Organization",
    client: "War Department (DOW)",
    sector: "Federal",
    role: "UX research & design",
    dates: "Prior engagement",
    featured: true,
    order: 3,
    proof: "+65% satisfaction · 500+ engineering hours saved",
    clearance: "sterilized",
    platforms: ["Intelligence / mission platform"],
    tags: ["Platform", "Research"],
    dowAccent: true,
    thumb: "/images/cases/dow-platform-modernization.jpg",
    thumbAlt: "Sterilized dual-path journey modernization diagram",
    teaser:
      "Field research and dual-path UX that raised satisfaction and recovered 500+ engineering hours.",
    summary:
      "Modernized a fragmented mission platform through field research, journey mapping, and dual-path UX strategy, raising satisfaction and recovering engineering time.",
    metrics: [
      { value: "+65%", label: "User satisfaction lift" },
      { value: "500+", label: "Engineering hours saved" },
      { value: "Dual-path", label: "Experts and modern flows" },
    ],
    artifacts: [
      {
        src: "/images/cases/dow-platform-modernization.jpg",
        alt: "Sterilized dual-path journey modernization diagram",
        caption: "Dual-path UX, power users and modern journeys together",
      },
      {
        src: "/images/cases/dow-platform-modernization-2.jpg",
        alt: "Sterilized dual-path journey merge map",
        caption: "Field pins that earned the right to change the workflow",
      },
      {
        src: "/images/cases/dow-platform-modernization-4.jpg",
        alt: "Field journey of one task crossing five apps, marking handoffs and re-entry points",
        caption:
          "Field journey, one task, five apps, and where experts lose their place",
        slot: "challenge",
      },
      {
        src: "/images/cases/dow-platform-modernization-5.jpg",
        alt: "Heat matrix of five apps against shared services, with overlap turning into conflict",
        caption:
          "Heated overlap matrix, five apps rebuilding the same services, and where they collide",
        slot: "approach",
      },
    ],
    pullQuote:
      "Modernization sticks when research earns the right to change workflows.",
    outcomes: [
      "+65% user satisfaction",
      "500+ engineering hours saved",
      "Dual-path UX that respected power users and modern workflows",
    ],
    context:
      "Disconnected tools, operational pressure, and modernization mandates that couldn’t wait for a greenfield fantasy.",
    problem:
      "Several mission apps overlapped on the same services, but they did not share one product organization. People doing the work lived in the gaps between those apps. A single streamlined path that slowed long-time operators or subject matter experts would get rejected as soon as it hit the field.",
    opportunity:
      "Map the collisions, then earn the right to change workflows with a dual path: dense expert tools beside guided novice flows, converging into a map-first Mission Coordination Suite.",
    constraint:
      "A suite of mission apps without a shared development line. Overlap had to be designed around. No product or vendor names on the public story.",
    approach: [
      "Field research and journey mapping in context",
      "Reframed tools into a unified ecosystem narrative",
      "Dual-path UX to land change without stranding experts",
    ],
    reflection:
      "Modernization sticks when research earns the right to change workflows, not when a redesign is declared.",
  },
  {
    slug: "star-ccm-design-practice",
    title: "Building a Design Practice: Siemens STAR-CCM+",
    client: "Siemens",
    sector: "Enterprise engineering software",
    role: "First HCI design lead for STAR-CCM+, then acting manager of the department for 18+ months. I reported directly to senior management and the director. I led a small HCI team, kept the research moving, and I was promoted in 2020.",
    dates: "March 2019 to January 2022",
    featured: true,
    order: 4,
    proof: "Direct customer access, a monumental cultural shift",
    clearance: "public",
    platforms: ["Simcenter STAR-CCM+"],
    tags: ["Leadership", "Design ops"],
    thumb:
      "/images/cases/star-ccm-design-practice/practice-influence-culture-timeline.jpg",
    thumbAlt:
      "Timeline of the STAR-CCM+ design practice, from a customer guardrail to direct HCI access.",
    summary:
      "Within a few months of standing up a new HCI department, I was acting manager of a small team, reporting to the director and senior management. The work that defined the practice was winning direct customer access for research, observation, and interviews.",
    teaser:
      "Within a few months of standing up a new HCI department, I was acting manager of a small team, reporting to the director and senior management. The work that defined the practice was winning direct customer access for research, observation, and interviews.",
    stats: [
      { value: 30, suffix: "%", label: "Scope cut per sprint", progress: 0.3 },
      { value: 12, label: "Lunch-and-learns across 4 cohorts" },
      { value: 4, label: "Weekly research meetings" },
      { value: 33, suffix: "%", label: "Higher retention", progress: 0.33 },
      { value: 2, suffix: "x", label: "On-time delivery" },
      {
        value: 20,
        display: "20–25%",
        suffix: "%",
        label: "QA churn down",
      },
    ],
    artifacts: [
      {
        src: "/images/cases/star-ccm-design-practice/practice-influence-culture-timeline.jpg",
        alt: "Timeline of the STAR-CCM+ HCI practice, from a developer-era customer guardrail through support and new-hire research to direct customer access.",
        caption:
          "From a developer-era customer guardrail to direct HCI access, a shift the company treated as monumental.",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-design-practice/practice-maturity-before-after.jpg",
        alt: "Before-and-after contact-path diagram comparing PM-only customer contact with HCI customer research after access was granted.",
        caption:
          "Before, Product Management were the only customer touch points. After, HCI won direct access for research, observation, and interviews.",
        slot: "challenge",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-design-practice/practice-feature-overgrowth-vs-consolidation.jpg",
        alt: "Comparison of feature overgrowth against a consolidated workflow, with a compact Java client Simulation tree as evidence.",
        caption:
          "Feature overgrowth versus consolidation. The dense tree we inherited, and the simpler path we were aiming for.",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
    ],
    pullQuote:
      "A small team won direct customer access for research, observation, and interviews, a change the company treated as a monumental cultural shift.",
    outcomes: [
      "A small team won direct customer access for research, observation, and interviews, a change the company treated as a monumental cultural shift.",
      "With that access, we boosted user retention by 33%, reduced QA churn by 20 to 25% and new feature bugs by 8 to 12%, and doubled on-time feature delivery.",
      "When I left, the director told me the research and design systems would keep guiding the product, and Simcenter STAR-CCM+ 2022.1 was the first release built on that research backbone.",
    ],
    context:
      "Within a few months of standing up a new HCI department, I was acting manager of a small team, reporting to the director and senior management. The work that defined the practice was winning direct customer access for research, observation, and interviews.",
    problem:
      "The HCI design department launched when I joined, branching off from the UX development team. I was the first HCI lead hire on a newly formed team that also included a designer, a front-end developer, and a project manager.\n\nThe STAR-CCM+ interface was powerful and notoriously dense, buried under tree directories, and it had not evolved much in nearly 20 years. Engineering was skeptical of human-centered methods, particularly those from the Nielsen Norman Group. The culture assumed PhD users could absorb the complexity, and I was an outsider in a first HCI-lead seat. Teams worked in silos, with limited cross-functional collaboration.\n\nThe HCI team sat under the development banner. Years earlier, a guardrail had been put up that barred developers from speaking to customers, to prevent scope creep and feature bloat. Product Management were the only customer touch points. Direct research, observation, and interviews were off limits.\n\nWhen the manager took a leave of absence a few months in, there was no one else clearly carrying the practice. The research and the Next Gen work still had to move.",
    opportunity:
      "I stepped in as acting manager for 18+ months, reporting to the director and senior management. I worked with the project manager and the director to solidify a plan, and I kept a small team focused on research.\n\nI moved us from abstract concepts to visual overlays on the existing Java client, so engineering could see the work as actionable, not theoretical. That is how trust with engineering started to stick.\n\nWe kept the research moving with the support team and with new hires, often by shoulder-surfing expert users who were new to the company, the same approach I used when a cultural barrier kept me from reaching actual customers on the A to Z workflow. That progress showed leadership how we would approach customers, and it gave them the confidence to grant HCI direct access for research, observation, and interviews.\n\nI ran 12 weekly lunch-and-learns with four software developer cohorts, and I directed a research program with four weekly customer research meetings, which cut product scope by 30% per sprint. Nielsen Norman methods, feedback loops, and collaboration were how I kept building that trust. Over time, engineers started pulling me into technical discussions, not just design reviews. I was promoted in 2020 for embedding UX in the product lifecycle and improving cross-team collaboration.",
    constraint:
      "The HCI team sat under the development banner. Years earlier, a guardrail had been put up that barred developers from speaking to customers, to prevent scope creep and feature bloat. Product Management were the only customer touch points.\n\nI was a first HCI lead in a PhD-heavy shop that treated UX as an outsider, then an acting manager of a small team, reporting above the original manager seat, without a long runway to pause the work. Research had to earn trust with data and a disciplined approach, not with a redesign pitch. Until leadership granted access, we could not go directly to customers.",
    approach: [
      "Stepped in as acting manager of a small team and kept the research moving with support and new hires.",
      "Used Java-client visual overlays, lunch-and-learns, and weekly research meetings to earn trust and cut scope.",
      "Won direct customer access for research, observation, and interviews.",
    ],
    reflection:
      "A small team won direct customer access, a change the company treated as a monumental cultural shift, and Simcenter STAR-CCM+ 2022.1 was the first release built on that research backbone.",
  },
  {
    slug: "star-ccm-discovery-workshop",
    title: "Discovery Workshop: Siemens STAR-CCM+",
    client: "Siemens",
    sector: "Enterprise engineering software",
    role: "I designed and facilitated the workshop as the new HCI lead, in a room of more than 30 departmental leaders and program managers from the major development teams and project management.",
    dates: "3 days",
    featured: true,
    order: 5,
    proof: "90% positive feedback, and a three-year approach",
    clearance: "public",
    platforms: ["Simcenter STAR-CCM+"],
    tags: ["Facilitation", "Strategy"],
    thumb:
      "/images/cases/star-ccm-discovery-workshop/workshop-comic-four-phases.jpg",
    posterThumb:
      "/images/cases/star-ccm-discovery-workshop/workshop-comic-four-phases.jpg",
    thumbAlt:
      "Illustrated four-panel of the STAR-CCM+ discovery workshop, from department presentations through breakouts and discussion to the A to Z workflow on a toy-car model.",
    summary:
      "I had to invent our discovery workshop in my first month, in a room with the major development teams and project management, and that session set the approach we followed for the next three years.",
    teaser:
      "I had to invent our discovery workshop in my first month, in a room with the major development teams and project management, and that session set the approach we followed for the next three years.",
    stats: [
      { value: 3, suffix: " days", label: "Workshop" },
      { value: 30, suffix: "+", label: "Leaders" },
      { value: 120, suffix: "+", label: "Ideas" },
      { value: 4, label: "Actionable steps" },
      {
        value: 90,
        suffix: "%",
        label: "Positive feedback",
        progress: 0.9,
      },
    ],
    postcards: [
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-comic-panel-a-presents-needs.jpg",
        alt: "Illustration of two HCI leads taking notes in the foreground while department leaders present needs and pain points at a workshop whiteboard.",
        caption:
          "Department leaders presented their needs and pain points for a next-gen GUI. I watched and took notes.",
        anchor: "problem",
        width: 1280,
        height: 720,
        tilt: -1.6,
      },
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-comic-panel-b-breakouts.jpg",
        alt: "Illustration of cross-functional breakout teams presenting ideal next-gen solutions at a whiteboard, with two HCI leads observing and taking notes.",
        caption:
          "Cross-functional breakouts put their ideal next-gen solutions on the wall. I moved between the groups and kept taking notes.",
        anchor: "approach",
        width: 1280,
        height: 720,
        tilt: 1.8,
      },
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-comic-panel-c-discussion.jpg",
        alt: "Illustration of the full workshop group discussing breakout ideas, with two HCI leads standing at the front taking notes.",
        caption: "The room came back together to talk through the breakout ideas.",
        anchor: "approach",
        width: 1280,
        height: 720,
        tilt: -1.75,
      },
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-comic-panel-d-finale-az.jpg",
        alt: "Illustration of two HCI leads presenting next steps at a whiteboard that shows a toy-car model and an A to Z workflow.",
        caption:
          "We shared next steps at the end. That is where the A to Z workflow on the toy-car model was born.",
        anchor: "outcome",
        width: 1280,
        height: 720,
        tilt: 1.5,
      },
    ],
    artifacts: [
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-C7-guidance-automation-wall.jpg",
        alt: "Workshop whiteboard with handwritten Guidance, Automation, and Templating notes from a STAR-CCM+ session.",
        caption:
          "Workshop wall: Guidance, Automation, and Templating, before the path had a name.",
        slot: "challenge",
        width: 2400,
        height: 1800,
      },
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-output-ideas-to-az.jpg",
        alt: "Diagram from more than 120 workshop ideas through three design iterations to four actionable steps and the A to Z workflow on a toy-car model.",
        caption:
          "From more than 120 ideas to four actionable steps, and the A to Z path on the toy-car model.",
        slot: "outcome",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-W5-filtered-view-approach.jpg",
        alt: "Upright workshop sheet titled Filtered View approach.",
        caption: "Filtered View approach, captured from the workshop wall.",
        portrait: true,
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/cases/star-ccm-discovery-workshop/workshop-W6-major-concepts.jpg",
        alt: "Workshop wall covered in major-concept notes from the STAR-CCM+ discovery session.",
        caption: "Workshop wall: major concepts the room aligned on.",
        width: 2400,
        height: 1800,
      },
    ],
    pullQuote:
      "That session set the approach we followed for the next three years.",
    outcomes: [
      "The workshop earned 90% positive stakeholder feedback.",
      "The four steps from those 120+ ideas became the backbone of our next-gen UI wireframes and the approach we followed for the next three years.",
    ],
    context:
      "I had to invent our discovery workshop in my first month, in a room with the major development teams and project management, and that session set the approach we followed for the next three years.",
    problem:
      "STAR-CCM+ was a sprawling, feature-bloated platform, and the major development teams and project management did not share a language for how people actually used it, or for what Next Gen should become.\n\nEngineering was skeptical of human-centered methods. UX had little standing, and I had to get buy-in in my first month, before we had a three-year plan we could all stand on.",
    opportunity:
      "I designed a three-day in-person discovery workshop and ran it with the major development teams and the project management team, more than 30 departmental leaders and program managers.\n\nWe surfaced pain points, workshopped solutions, and pushed 120+ ideas through three design iterations, down to four actionable steps for next-gen UI wireframes. That session gave us the approach we followed for the next three years.",
    constraint:
      "I had to invent and run the workshop in my first month, in a culture that was still unconvinced UX belonged in engineering planning. The room had to include all the major development teams and project management, and the output had to be a plan we could actually execute, not a stack of notes we would leave behind.",
    approach: [
      "Designed and facilitated a three-day in-person discovery workshop in the first month.",
      "Brought the major development teams and project management into one room, more than 30 leaders.",
      "Worked 120+ ideas down to four actionable steps for next-gen UI wireframes.",
    ],
    reflection:
      "The workshop earned 90% positive stakeholder feedback, and those four steps became the approach we followed for the next three years.",
  },
  {
    slug: "star-ccm-az-workflow",
    title: "End-to-End Workflow Mapping: Siemens STAR-CCM+",
    client: "Siemens",
    sector: "Enterprise engineering software",
    role: "Lead UX research, strategy, and design. I walked the A to Z path on a real model, often by shoulder-surfing expert users who were new to the company, and I turned that path into a shared language for product and engineering.",
    dates: "March 2019 to January 2020",
    featured: false,
    order: 9,
    proof: "First clear A to Z workflow map where none had been defined",
    clearance: "public",
    platforms: ["Simcenter STAR-CCM+"],
    tags: ["UX research", "Process"],
    thumb: "/images/cases/star-ccm-az-workflow-panel.jpg",
    thumbAlt: "Sterilized Simcenter STAR-CCM+ A to Z workflow splash panel.",
    summary:
      "Nobody had mapped how people actually ran STAR-CCM+ from start to finish, so I walked a real model A to Z, often by shoulder-surfing expert users who were new to the company, because a cultural barrier kept me from reaching actual customers.",
    teaser:
      "Nobody had mapped how people actually ran STAR-CCM+ from start to finish, so I walked a real model A to Z, often by shoulder-surfing expert users who were new to the company, because a cultural barrier kept me from reaching actual customers.",
    artifacts: [
      {
        src: "/images/cases/star-ccm-az-workflow-panel.jpg",
        alt: "Sterilized Simcenter STAR-CCM+ A to Z workflow splash panel.",
        caption: "Sterilized splash, the undefined path mapped A to Z.",
        width: 1280,
        height: 720,
      },
      {
        src: "/images/cases/star-ccm-az-workflow/az-before-java-tree.jpg",
        alt: "Before-and-after board showing the Java client Simulation tree and volume mesh of the toy-car model beside the Next Gen custom tree and guidance menu.",
        caption:
          "The Java client Simulation tree on the toy-car model, and the Next Gen direction we took.",
        slot: "challenge",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-az-workflow/az-C11-triggered-by-right-click.jpg",
        alt: "Legacy STAR-CCM+ Java client with a directory tree and a scalar field dialog triggered by right click.",
        caption:
          "Directory-era client: deep tree navigation and right-click to trigger work.",
        slot: "challenge",
        width: 1270,
        height: 699,
      },
      {
        src: "/images/cases/star-ccm-az-workflow/az-templates-reusable-views.jpg",
        alt: "Simulation Templates rail of reusable plots, layouts, and scenes, applied to the toy-car model.",
        caption:
          "Templates, reusable views you can apply to a model instead of rebuilding them by hand.",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-az-workflow/az-A4-custom-tree-walls.jpg",
        alt: "Custom tree console of parent and child nodes beside a boundary-condition map of a duct assembly.",
        caption: "A to Z walls, the mapped path from geometry through reporting.",
        slot: "approach",
        width: 1920,
        height: 1080,
      },
    ],
    pullQuote: "If the workflow was never defined, every feature is a guess.",
    outcomes: [
      "The A to Z map became the shared reference for what complete meant, and the gaps feature teams had been shipping around finally had somewhere to land.",
      "That work was a foundation for later Java-client improvements and for the Next Gen path.",
    ],
    context:
      "Nobody had mapped how people actually ran STAR-CCM+ from start to finish, so I walked a real model A to Z, often by shoulder-surfing expert users who were new to the company, because a cultural barrier kept me from reaching actual customers.",
    problem:
      "Nobody had ever mapped how people actually ran STAR-CCM+ from start to finish. Engineers kept a library of notebooks for workflow directions, and something like a rolodex to remember which notebook and which page held the next step.\n\nThe UI itself was a folder directory that leaned on right-click actions and deep folder navigation to trigger work. Repetitive steps meant climbing up and down the tree, sometimes deep into nested folders, just to do the same action again.\n\nThe product was as deep as a Photoshop-class tool, so the real path lived on paper, in expert heads, and inside that directory model, and every feature team shipped against a different mental model. The culture assumed PhD users could absorb the complexity. Research kept showing that the complexity was the tax, not the badge.",
    opportunity:
      "Walk a real model A to Z (geometry, meshing, physics, simulation, reporting), make the robust path visible in the product instead of across notebooks and folder trees, and give product and engineering a shared language for what \"complete\" meant before next-gen work started. Once the path was named, the gaps feature teams had been shipping around finally had somewhere to land.\n\nI often did that by shoulder-surfing expert users, preferably people who were new to the company, because a cultural barrier kept me from reaching actual customers at the start.\n\nProduct management drove Simulation Templates as a way to carry shared workflow best practices. I worked on that effort with the team, so people could reuse a protected path without another trip through paper notes or the directory tree.",
    constraint:
      "Legacy Java client built around directory-era information architecture and right-click driven actions, plus a first-HCI-lead seat inside a PhD-heavy shop that treated UX as an outsider. Research had to earn trust with data and collaboration, not with a redesign pitch. Next-gen migration was already on the horizon, so the map had to hold for the product people used today and the one they were about to build.",
    approach: [
      "Walked a real model A to Z, often by shoulder-surfing expert users who were new to the company.",
      "Made the robust path visible and gave product and engineering a shared language for what complete meant.",
      "Worked with the team on Simulation Templates so people could reuse a protected path.",
    ],
    reflection:
      "If the workflow was never defined, every feature is a guess. Naming the path is strategy.",
  },
  {
    slug: "star-ccm-cloud-payg",
    title: "Cloud Pay-as-you-go Research: Siemens STAR-CCM+",
    client: "Siemens",
    sector: "Enterprise engineering software",
    role: "Lead UX research, strategy, and design. My research was integral to developing the cloud pay-as-you-go project, including Web Monitoring concepts that landed in our Power On Cloud offering, and a Job Manager stop path for runs that were already in flight.",
    dates: "2019 to 2022",
    featured: false,
    order: 10,
    proof: "50% faster time-to-market",
    clearance: "public",
    platforms: ["Simcenter STAR-CCM+"],
    tags: ["Research", "Product strategy"],
    thumb: "/images/cases/star-ccm-cloud-payg/cloud-credits-time.jpg",
    thumbAlt:
      "Diagram of prepaid cloud credits allocated over a time window.",
    summary:
      "Users did not trust new desktop releases, and a weekend cloud run could go wrong with no way to stop it. The research I was already doing became the case for a pay-as-you-go cloud path, and for giving people control once a job was in flight.",
    teaser:
      "Users did not trust new desktop releases, and a weekend cloud run could go wrong with no way to stop it. The research I was already doing became the case for a pay-as-you-go cloud path, and for giving people control once a job was in flight.",
    stats: [
      {
        value: 50,
        suffix: "%",
        label: "Faster time-to-market",
        progress: 0.5,
      },
      { value: 12, suffix: "-month", label: "Credit window" },
    ],
    artifacts: [
      {
        src: "/images/cases/star-ccm-cloud-payg/cloud-credits-time.jpg",
        alt: "Diagram of prepaid cloud credits allocated to users and a team, then burned on the job over a time window.",
        caption:
          "Prepaid credits, often on a 12-month window, allocated to users and teams from an account pool.",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-cloud-payg/cloud-job-manager-stop-button.jpg",
        alt: "Designed illustration of a STAR-CCM+ Job Manager stop path, with halt, inspect, and reset, using generic job names.",
        caption:
          "Job Manager stop path, so a run already in flight could be halted.",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-cloud-payg/cloud-poc-monitor-credits.jpg",
        alt: "Designed board of a STAR-CCM+ Power On Cloud job monitor, with user credit balance beside mid-run progress plots.",
        caption:
          "Monitoring a run, with remaining credits next to the plots that show whether there are enough to reach convergence.",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/star-ccm-cloud-payg/cloud-web-monitoring-client.jpg",
        alt: "STAR-CCM+ Web Monitoring Client prototype.",
        caption:
          "Web Monitoring Client prototype. The concepts landed in the Power On Cloud offering.",
        width: 1920,
        height: 1080,
      },
    ],
    pullQuote: "A weekend cloud run could go wrong with no way to stop it.",
    outcomes: [
      "Formal UX research and design accelerated time-to-market by 50% for the cloud portal initiative.",
      "The stop-button work drew immediate positive feedback from product management, service support, and clients on a workflow that touched the whole platform.",
    ],
    context:
      "Users did not trust new desktop releases, and a weekend cloud run could go wrong with no way to stop it. The research I was already doing became the case for a pay-as-you-go cloud path, and for giving people control once a job was in flight.",
    problem:
      "Desktop adoption moved slowly. Users did not update often. They expected newer releases to be less stable than older ones, and their models were most compatible with older builds, so people stayed on known-good versions for years.\n\nThe cloud path had its own friction. Users were reluctant to adopt a cloud-based solution because of security concerns. Renders on a cloud server farm could run for days, often over the weekend. People would come back to corrupted, incomplete, or \"trending bad\" data, and they had no way to stop the job once it was engaged. I also watched users rotate through screens just to keep an eye on a calculation as it ran.",
    opportunity:
      "The research I was already doing made the case for a pay-as-you-go cloud path, and for landing some improvements in the new cloud offering first, instead of waiting on desktop adoption. That same research argued for stronger backwards compatibility, so newer software could earn trust instead of waiting years for people to leave a known-good version.\n\nWith the Job Manager team, we iterated a stop path and expedited a hotfix, so people could halt a run, inspect the data, and reset the model when they needed to. I also designed a clickable Web Monitoring Client prototype, based on those over-the-shoulder observations, so users could watch a render and its plots without flipping through screens. That prototype did not ship as its own application. Its concepts were incorporated into our Power On Cloud offering, embedded in the Java client. Web Viewer later let people share results without another trip through a licensed desktop session.\n\nThe pay-as-you-go model used prepaid credits, often set to expire 12 months from purchase, and allocated to users and groups from an account pool. While a job ran, people needed to see their balance and burn rate, and to judge whether they had enough credits to reach convergence. Research sessions walked users through submitting jobs, watching that burn rate, and adding credits if they ran short.",
    constraint:
      "We were asking people to trust a cloud path while they still did not fully trust new desktop builds, and while security concerns were real. The Job Manager and monitoring work had to fit a legacy Java client and an engineering team that needed a feasible path, not a separate product we did not have the standing to force. Web Monitoring was a prototype. It had to be useful even if it never shipped under its own name.",
    approach: [
      "Made the case for a pay-as-you-go cloud path and for landing some improvements in the cloud offering first.",
      "Iterated a Job Manager stop path and a Web Monitoring prototype whose concepts landed in Power On Cloud.",
      "Designed the credit experience: prepaid balances, a 12-month window, burn rate, and enough credits to reach convergence.",
    ],
    reflection:
      "Formal UX research and design accelerated time-to-market by 50% for the cloud portal initiative, and the stop path gave people control once a job was in flight.",
  },
  {
    slug: "adobe-social-onboarding",
    title: "Enterprise Onboarding Redesign: Adobe Social",
    client: "Adobe",
    sector: "Social",
    role: "Business Consultant, Adobe Social, and the lead of three onshore consultants. The team had a manager, the three of us onshore, and eight offshore technical consultants who set up the configurations from the requirements we gathered. I was aligned with the offshore lead. I mentored the other onshore consultants, ran standups, and assigned work. I took the most complicated setups, the largest customers, and the at-risk contracts, and I stepped in when other engagements started to go sideways. When the manager left the position, I stepped into that gap. I was not the product owner.",
    dates: "Dec 2012 to Jan 2015",
    featured: true,
    order: 6,
    proof: "6 months to 2 weeks, and 25% higher adoption",
    clearance: "public",
    platforms: ["Adobe Social"],
    tags: ["Service design", "Process"],
    thumb: "/images/cases/adobe-social/01-hero-adobe-social-lockup.jpg",
    thumbAlt: "Adobe Social logo over a dimmed onboarding workspace",
    teaser:
      "I was given the most complicated setups, the largest customers, and the at-risk contracts, including a global customer sales had sold onto a single regional server.",
    summary:
      "I was given the most complicated setups, the largest customers, and the at-risk contracts, including a global customer sales had sold onto a single regional server.",
    metrics: [
      { value: "2 weeks", label: "Go-live, down from six months" },
      { value: "10 days", label: "Business days to go live" },
      { value: "+25%", label: "User adoption" },
    ],
    artifacts: [
      {
        src: "/images/cases/adobe-social/01-hero-adobe-social-lockup.jpg",
        alt: "Adobe Social logo over a dimmed onboarding workspace",
        caption: "Adobe Social, over the onboarding work",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/cases/adobe-social/regional-server-permissions.jpg",
        alt: "Before and after board of one Adobe Social regional server versus shared groups and permissions across regions",
        caption:
          "One regional server, then shared groups and permissions across regions",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
    ],
    outcomes: [
      "Cut Adobe Social go-live from six months to two weeks (10 business days), and boosted user adoption by 25%.",
    ],
    context:
      "I was given the most complicated setups, the largest customers, and the at-risk contracts, including a global customer sales had sold onto a single regional server.",
    problem:
      "After Context Optional and Efficient Frontier joined Adobe, enterprise customers were waiting six months to go live. Early on, communications and timing with the offshore team frequently broke.\n\nSales did not always align with the technical requirements. In one case, sales sold a large global customer onto an instance on a single regional server. We learned that regional server proximity affected performance, and that regional analytics, segmented audiences, and the grouping of roles and permissions also needed to live at a regional level.",
    opportunity:
      "Templatizing the onboarding requirements did not resolve those technical problems. It did make sure every consultant retrieved the same requirements, in the same vernacular, so the offshore technical consultants could configure the work more efficiently.\n\nAs the consultants' advocate and requirements voice, I worked with the technical team on some of the identified restrictions, so groups and permissions could be shared across regional servers for enterprise clients. The onboarding model had to get customers live in two weeks, not six months, and actually adopted once they were standing.",
    constraint:
      "Regional server proximity, regional analytics, segmented audiences, and regional roles and permissions were real technical limits. A template could not erase them, and sales could still sell ahead of them. I could bring those restrictions to the technical team as a consultant. I did not own the product, so I could not change those limits on my own.",
    approach: [
      "Templatized onboarding requirements so every consultant retrieved the same requirements, in the same vernacular.",
      "Worked with the technical team so groups and permissions could be shared across regional servers for enterprise clients.",
      "Took the most complicated setups, the largest customers, and the at-risk contracts.",
    ],
    reflection:
      "A template could not erase regional limits. It could make every consultant ask for the same requirements, so customers could go live in two weeks and actually get adopted.",
  },
  {
    slug: "adobe-summit-sales-toolkit",
    title: "Cross-Device Sales Experience: Adobe Summit",
    client: "Adobe",
    sector: "Summit",
    role: "Experience Designer, Cross-Device Event Applications. I designed the Screens and mobile applications, and coordinated development for the engineers by leading front-end dev efforts. I worked with three sales leads and two developers.",
    dates: "Jan to Mar 2017",
    featured: false,
    order: 11,
    proof: "+20% lead conversions, 250+ interactions, 45+ leads",
    clearance: "public",
    platforms: ["AEM Mobile", "AEM Screens"],
    tags: ["Interaction design", "Prototyping"],
    thumb: "/images/cases/adobe-summit/06-approach-summit-modal.jpg",
    thumbAlt:
      "Experience Driven Commerce modal from the Adobe Summit sales toolkit",
    teaser:
      "Sales were there for lead conversion, so I built an iPad and touchscreen experience that could show, in real time, how those two surfaces worked together for point-of-sale conversions.",
    summary:
      "Sales were there for lead conversion, so I built an iPad and touchscreen experience that could show, in real time, how those two surfaces worked together for point-of-sale conversions.",
    metrics: [
      { value: "+20%", label: "Lead conversions" },
      { value: "250+", label: "Customer interactions" },
      { value: "45+", label: "Sales leads during Summit" },
    ],
    artifacts: [
      {
        src: "/images/cases/adobe-summit/06-approach-summit-modal.jpg",
        alt: "Experience Driven Commerce modal from the Adobe Summit sales toolkit",
        caption: "Commerce modal Sales could open on the booth floor",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/cases/adobe-summit/01-hero-better-digital-foundation.jpg",
        alt: "Sales path slide reading I want to build a better digital foundation",
        caption: "Opening card on the iPad sales path",
        slot: "challenge",
        width: 1600,
        height: 889,
      },
      {
        src: "/images/cases/adobe-summit/ipad-screens-interaction.jpg",
        alt: "Three-step board of an iPad sales path driving a touchscreen, then a point-of-sale offer",
        caption: "iPad and Screens in sync, from the sales path to point of sale",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/adobe-summit/05-approach-management-building-blocks.jpg",
        alt: "Mobile experience management building blocks slide shown on the Screens monitor",
        caption: "Building blocks card shown on the Screens monitor",
        board: true,
        width: 1025,
        height: 772,
      },
      {
        src: "/images/cases/adobe-summit/07-lockup-aem-screens.jpg",
        alt: "Adobe logo over an iPad and printed cards for AEM Screens",
        caption: "AEM Screens, the touchscreen half of the toolkit",
        width: 1600,
        height: 900,
      },
    ],
    outcomes: [
      "The toolkit contributed to a 20% increase in lead conversions, and to 250+ customer interactions and 45+ sales leads during the Summit program. After the show, the same instance onboarded 20+ new reps and traveled to regional demos.",
    ],
    context:
      "Sales were there for lead conversion, so I built an iPad and touchscreen experience that could show, in real time, how those two surfaces worked together for point-of-sale conversions.",
    problem:
      "At Adobe Summit, Sales' focus was lead conversion. They needed a way, on the booth floor, to show the value of AEM Mobile and AEM Screens for point-of-sale conversions, not just to talk through a product list.\n\nIf the two surfaces could not be seen working together, the pitch stayed abstract, and a lead-conversion conversation had nothing live to stand on.",
    opportunity:
      "For the Summit booth I designed an integrated mobile (iPad) and Screens (touchscreen monitor) experience. I designed the Screens and mobile applications, and I coordinated development for the engineers by leading front-end dev efforts.\n\nSales could show customers, in real time, how those two experiences interacted with each other, and how the technology supported point-of-sale conversions. The same instance was reused after the show for sales onboarding and regional demos, including 20+ new reps in one instance.",
    constraint:
      "The work had to hold up in a booth conversation, across an iPad and a touchscreen monitor, in the January to March 2017 window. I designed the applications and led the front-end development effort with two developers, alongside three sales leads. It was an Adobe internal sales tool, built to help Sales convert leads by making the product value visible in the moment.",
    approach: [
      "Designed an integrated iPad and Screens experience so Sales could show the two surfaces working together in real time.",
      "Led front-end development with two developers, alongside three sales leads.",
      "Reused the same instance after the show for sales onboarding and regional demos, including 20+ new reps.",
    ],
    reflection:
      "If the two surfaces could not be seen working together, the pitch stayed abstract, and a lead-conversion conversation had nothing live to stand on.",
  },
  {
    slug: "facebook-apps-adobe-social",
    title: "Localized Campaign Apps: ESPN X Games on Facebook",
    client: "Adobe",
    sector: "ESPN X Games",
    role: "Front-end / App Builder, Context Optional and Adobe Social. I documented template builds, trained others to ship them, and worked the first Audience apps for ESPN X Games.",
    dates: "2011 to 2013",
    featured: false,
    order: 12,
    proof: "+30% engagement across four cities, eight apps",
    clearance: "public",
    platforms: ["Facebook apps", "Adobe Social"],
    tags: ["Front-end", "Product delivery"],
    thumb: "/images/cases/facebook-apps/xgames-language-switcher.jpg",
    thumbAlt:
      "Four ESPN X Games city apps, each with a native language and an English version",
    teaser:
      "Audience detection failed on launch day, so we shipped eight apps instead of four.",
    summary:
      "Audience detection failed on launch day, so we shipped eight apps instead of four.",
    metrics: [
      { value: "+30%", label: "Engagement on the Audience apps" },
      {
        value: "4 cities",
        label: "Tignes, Foz do Iguaçu, Barcelona, Munich",
      },
      { value: "8 apps", label: "Native language and English in each city" },
    ],
    artifacts: [
      {
        src: "/images/cases/facebook-apps/01-hero-adobe-espn-x-games-lockup.jpg",
        alt: "Adobe, ESPN, and X Games logos over a dimmed Facebook app",
        caption: "Adobe, ESPN, and X Games",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/cases/facebook-apps/xgames-language-switcher.jpg",
        alt: "Four ESPN X Games city apps, each with a native language and an English version",
        caption:
          "Four city apps became eight, with a manual switch between native language and English",
        slot: "challenge",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/facebook-apps/photo-contest-builder-clean.jpg",
        alt: "Five-step photo contest template from setup through a declared winner",
        caption: "Photo Contest Builder template, from setup to a declared winner",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/facebook-apps/04-approach-facebook-application-gallery.jpg",
        alt: "Adobe Social Facebook application solutions gallery",
        caption: "Application gallery for contests, sweepstakes, quizzes, and the rest",
        portrait: true,
        width: 810,
        height: 1233,
      },
      {
        src: "/images/cases/espn/espn-xgames-munich-localization-de-en.jpg",
        alt: "Side-by-side German and English ESPN X Games Munich Facebook apps",
        caption: "Munich, German and English side by side",
      },
      {
        src: "/images/cases/espn/espn-xgames-tignes-app-ui.jpg",
        alt: "ESPN X Games Tignes Facebook app UI in French",
        caption: "Tignes, French winter event app",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-barcelona-app-ui.jpg",
        alt: "ESPN X Games Barcelona Facebook app UI",
        caption: "Barcelona, video, headlines, and gallery",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-foz-do-iguacu-app-ui.jpg",
        alt: "ESPN X Games Foz do Iguaçu Facebook app UI in Portuguese",
        caption: "Foz do Iguaçu, Portuguese event app",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-munich-app-ui-de.jpg",
        alt: "ESPN X Games Munich Facebook app UI in German",
        caption: "Munich, German summer event app",
        portrait: true,
      },
      {
        src: "/images/cases/facebook-apps/10-xgames-enablement-training.jpg",
        alt: "Title slide for X Games international event Facebook application training",
        caption: "Training materials for the X Games Facebook applications",
        board: true,
        width: 1600,
        height: 1200,
      },
    ],
    outcomes: [
      "ESPN X Games Audience apps increased engagement by 30%, across four cities (Tignes, Foz do Iguaçu, Barcelona, Munich), with a manual switch between native language and English in each one.",
    ],
    context:
      "Audience detection failed on launch day, so we shipped eight apps instead of four.",
    problem:
      "Audience detection failed on launch day. The new Audience technology for Adobe Social was meant to display a user's language or native country on its own, but it had only been tested over VPN, never at global scale. At launch it did not detect as expected, and ESPN X Games still had four cities with immovable dates.",
    opportunity:
      "Instead of four apps, we made eight. For each of the four locations, people could manually switch between the native-language experience and English. The launch fix had to be something a fan could use in the moment, not a promise that detection would catch up.\n\nThe Social App Builder templates and the application gallery were how the wider catalog of Facebook campaign apps (contests, sweepstakes, quizzes, and the rest) got stood up. ESPN was the flagship. That catalog is the secondary story.",
    constraint:
      "Audience had never been proven at global scale, only over VPN. When detection failed at launch, we still had to give people a way to see each city in a native language or in English. The event windows were fixed. The original wireframe had already assumed the user would be served a native language, or English if the language was not detected. That assumption did not hold on the day.",
    approach: [
      "Shipped eight apps instead of four, with a manual switch between the native language and English for each city.",
      "Documented Social App Builder templates and trained others to ship them.",
      "Treated ESPN X Games as the flagship, and the application gallery as the secondary story.",
    ],
    reflection:
      "The launch fix had to be something a fan could use in the moment, not a promise that detection would catch up.",
  },
  {
    slug: "darden-olive-garden-ordering",
    title: "A/B Testing with Adobe Target: Olive Garden Online Ordering",
    client: "Darden",
    sector: "Olive Garden",
    role: "UX Designer, Adobe consulting. Presales heuristic review and live testing for Darden / Olive Garden.",
    dates: "September 2017",
    featured: false,
    order: 13,
    proof: "Darden shipped the winner. Order Now back on top.",
    clearance: "public",
    platforms: ["Adobe Target", "Olive Garden ordering"],
    tags: ["Experimentation", "Conversion UX"],
    thumb: "/images/cases/darden/01-hero-online-ordering-accessibility.jpg",
    thumbAlt:
      "Olive Garden phone showing a gift-card campaign above the ordering menu",
    teaser:
      "A summer gift-card campaign was outranking Order Now, so we live-tested the designs in Adobe Target, and Darden's own audience rules decided which one to use.",
    summary:
      "A summer gift-card campaign was outranking Order Now, so we live-tested the designs in Adobe Target, and Darden's own audience rules decided which one to use.",
    metrics: [
      { value: "Target", label: "Live test with audience rules from Darden" },
      { value: "Shipped", label: "Darden used the winning design" },
      { value: "Order Now", label: "Regained the primary spot" },
    ],
    artifacts: [
      {
        src: "/images/cases/darden/01-hero-online-ordering-accessibility.jpg",
        alt: "Olive Garden phone showing a gift-card campaign above the ordering menu",
        caption: "Gift-card campaign above the menu, before Order Now was restored",
        width: 720,
        height: 405,
      },
      {
        src: "/images/cases/darden/02-challenge-presales-heuristic-review.jpg",
        alt: "Presales heuristic review of Olive Garden mobile navigation, with the gift-card campaign above Order Now",
        caption: "Presales review: the summer campaign pushed Order Now down the menu",
        slot: "challenge",
        width: 720,
        height: 405,
      },
      {
        src: "/images/cases/darden/target-ab-test-illustrative.jpg",
        alt: "Illustrative Adobe Target A/B test of Olive Garden ordering. Gift-card campaign first versus Order Now first. Actual client results are confidential.",
        caption: "Illustrative data. Actual client results are confidential.",
        slot: "approach",
        board: true,
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/cases/darden/04-approach-high-resolution-compositions.jpg",
        alt: "Olive Garden mobile compositions comparing gift-card and Order Now hierarchy",
        caption:
          "Same visual weight on both variations. Only the hierarchy changes.",
        width: 720,
        height: 405,
      },
    ],
    outcomes: [
      "Darden shipped the winning design. In that variation, Order Now regained the primary spot over the gift-card campaign.",
    ],
    context:
      "A summer gift-card campaign was outranking Order Now, so we live-tested the designs in Adobe Target, and Darden's own audience rules decided which one to use.",
    problem:
      "Olive Garden's mobile site was spending its best screen on a summer gift-card campaign, and Order Now was losing the hierarchy fight.\n\nGuests who came to order were being asked to hunt for the thing the site existed to do.",
    opportunity:
      "We used Adobe Target, then called Test and Target, to live-test the experiences with different demographics at the same time. Darden provided the audience constraints (geography, individual criteria, and other elements) that defined the test groups.\n\nThe test results decided which design to use. Darden shipped the winning design. In that variation, Order Now regained the primary spot over the gift-card campaign.",
    constraint:
      "The audience rules were Darden's, not ours. We were testing inside an existing campaign system, not starting from a blank site. Geography, individual criteria, and the other elements they gave us were what defined the test groups, and those results, not a preferred comp on its own, decided the design that shipped.\n\nThe test variations were deliberately given the same visual weight so the results would not be skewed. We wanted to gain customer preference without tipping the scales by changing the visual weight of the components.\n\nThe actual test results are confidential. This case does not include specific figures.",
    approach: [
      "Live-tested the experiences in Adobe Target, with audience rules Darden provided.",
      "Gave the variations the same visual weight so the results would not be skewed.",
      "Shipped the variation the results selected, with Order Now in the primary spot.",
    ],
    reflection:
      "The test results decided which design to use. Darden shipped the winning design.",
  },
];

/** Old public slugs that should resolve to the current case. */
export const caseRedirects: Record<string, string> = {
  "espn-x-games-apps": "facebook-apps-adobe-social",
};

export function getFeaturedCases() {
  return cases
    .filter((c) => c.featured)
    .sort((a, b) => a.order - b.order);
}

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function getAllCases() {
  return [...cases].sort((a, b) => a.order - b.order);
}

export function getCaseNeighbors(slug: string) {
  const ordered = getAllCases();
  const index = ordered.findIndex((item) => item.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}
