export type CaseArtifact = {
  src: string;
  alt: string;
  caption: string;
};

export type CaseMetric = {
  value: string;
  label: string;
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
  thumbAlt?: string;
  metrics?: CaseMetric[];
  artifacts?: CaseArtifact[];
  pullQuote?: string;
  outcomes: string[];
  context: string;
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
    title: "Platform Design & Migration MVP",
    client: "War Department (DOW)",
    sector: "Federal",
    role: "UX / platform design & requirements (delivery team)",
    dates: "2025–2026",
    featured: true,
    order: 1,
    proof: "$820M · 5-year contract",
    clearance: "sterilized",
    platforms: ["Platform migration", "MVP delivery"],
    tags: ["platform", "federal", "DOW", "migration"],
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
    ],
    pullQuote:
      "The win wasn’t a launch screenshot—it was a contract-shaped outcome built under constraint.",
    outcomes: [
      "Design and requirements contributed to an MVP that supported an $820M, 5-year award",
      "Platform migration framing clarified scope under delivery pressure",
      "Sterilized public narrative—deeper walkthrough available on request",
    ],
    context:
      "A high-stakes War Department platform modernization effort required a credible MVP path—design and requirements tight enough to de-risk migration, clear enough for executive decision-making.",
    approach: [
      "Partnered inside the delivery team on platform design and requirements",
      "Framed migration MVP outcomes for leadership and engineering alignment",
      "Kept artifacts clearance-safe for public storytelling",
    ],
    reflection:
      "The win wasn’t a launch screenshot—it was a contract-shaped outcome built from disciplined platform design under constraint. Full narrative expanding as sterilized details are cleared.",
  },
  {
    slug: "intel-portal-audit",
    title: "Heuristic Audit of a Classified Self-Service Portal",
    client: "U.S. Government (cleared engagement)",
    sector: "Federal / Intelligence",
    role: "UX lead — heuristic audit",
    dates: "Two-month engagement",
    featured: true,
    order: 2,
    proof: "8-week audit → 2-year modernization roadmap",
    clearance: "sterilized",
    platforms: ["Self-service portal"],
    tags: ["audit", "adoption", "federal"],
    thumb: "/images/cases/intel-portal-audit.jpg",
    thumbAlt: "Sterilized heuristic audit findings board",
    teaser:
      "Eight-week heuristic audit of a classified self-service portal—quick wins for adoption plus a two-year modernization roadmap.",
    summary:
      "Eight-week heuristic audit of a classified self-service portal—quick wins for adoption plus a two-year modernization roadmap.",
    metrics: [
      { value: "8 weeks", label: "Heuristic audit engagement" },
      { value: "2 years", label: "Modernization roadmap horizon" },
      { value: "Adoption", label: "Quick wins sequenced first" },
    ],
    artifacts: [
      {
        src: "/images/cases/intel-portal-audit.jpg",
        alt: "Sterilized heuristic audit findings board",
        caption: "Findings synthesis — severity without exposing the system",
      },
      {
        src: "/images/cases/intel-portal-audit-2.jpg",
        alt: "Sterilized quick-wins to multi-year roadmap timeline",
        caption: "Quick wins now, structural bets across a two-year arc",
      },
    ],
    pullQuote:
      "Great UX isn’t about perfect freedom—it’s about strategic influence.",
    outcomes: [
      "Quick-win recommendations to improve adoption across the agency",
      "Two-year modernization roadmap grounded in observed UX debt",
      "Clear separation of near-term fixes vs structural platform work",
    ],
    context:
      "A deployed self-service portal needed an honest read on usability and adoption—without theater, and within clearance constraints.",
    approach: [
      "Heuristic evaluation against real task flows",
      "Prioritized findings into quick wins and multi-year bets",
      "Briefed stakeholders on adoption risks and sequencing",
    ],
    reflection:
      "Great UX isn’t about perfect freedom—it’s about strategic influence. An eight-week lens can still shape years of modernization.",
  },
  {
    slug: "doi-platform-constraints",
    title: "Designing Within Constraints",
    client: "Department of the Interior",
    sector: "Federal",
    role: "UX Design Lead",
    dates: "2024–2025",
    featured: true,
    order: 3,
    proof: "Policy → platform-aligned UX; assets reused; contract extended",
    clearance: "sterilized",
    platforms: ["Power Platform", "USWDS"],
    tags: ["platform", "federal", "mentorship"],
    thumb: "/images/cases/doi-platform-constraints.jpg",
    thumbAlt: "Sterilized federal constraint wireframe sheets",
    teaser:
      "Translated federal policy into design constraints—aligning bureaus, mentoring juniors, and leaving assets that got reused.",
    summary:
      "Enabled platform alignment across federal bureaus through research, mentoring, and wireframe-based strategy—translating federal policy into actionable design constraints.",
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
    ],
    pullQuote:
      "Constraint isn’t the enemy of craft—it’s the brief.",
    outcomes: [
      "Wireframe strategy reused across DOI efforts",
      "Junior designers mentored into constraint-fluent practice",
      "Contract extended on the strength of platform alignment work",
    ],
    context:
      "Multiple bureaus, shared platforms, and policy constraints that make “UX theater” expensive. The job was unification without pretending freedom that didn’t exist.",
    approach: [
      "Translated policy into design constraints teams could use",
      "Wireframe-led strategy for cross-bureau alignment",
      "Mentored designers through ambiguous federal delivery",
    ],
    reflection:
      "Constraint isn’t the enemy of craft—it’s the brief. Influence shows up in what gets reused after you leave.",
  },
  {
    slug: "state-total-experience",
    title: "Total Experience — Department of State",
    client: "U.S. Department of State",
    sector: "Federal",
    role: "UX strategy lead / team lead",
    dates: "2024",
    featured: true,
    order: 4,
    proof: "Quiet impact: research & framework left behind when launch wasn’t ready",
    clearance: "sterilized",
    platforms: ["Total Experience", "Multi-platform evaluation"],
    tags: ["strategy", "federal", "leadership"],
    thumb: "/images/cases/state-total-experience.jpg",
    thumbAlt: "Sterilized Total Experience ecosystem map",
    teaser:
      "Led Total Experience through fog and election clocks—quiet impact when launch wasn’t ready.",
    summary:
      "Led Total Experience through fog, election clocks, and no chosen platform—quiet impact: research and framework left behind when launch wasn’t ready.",
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
    ],
    pullQuote:
      "This wasn’t just designing screens—it was designing ecosystems.",
    outcomes: [
      "Unifying vision across HR, admin, and service delivery",
      "Reusable framework influencing later platform decisions",
      "Mentored a team of three through ambiguous client leadership",
    ],
    context:
      "No pre-selected tech stack, shifting client leadership, and an inauguration clock. Ambiguity wasn’t a phase—it was the operating environment.",
    approach: [
      "Weekly trust-building with the primary stakeholder",
      "Close mentorship for junior designers",
      "Outcomes over deliverables—value leadership could carry forward",
    ],
    reflection:
      "This wasn’t just designing screens—it was designing ecosystems. Success can be quiet impact when launch isn’t ready.",
  },
  {
    slug: "dow-platform-modernization",
    title: "Mission-Critical Platform Modernization",
    client: "War Department (DOW)",
    sector: "Federal",
    role: "UX research & design",
    dates: "Prior engagement",
    featured: true,
    order: 5,
    proof: "+65% satisfaction · 500+ engineering hours saved",
    clearance: "sterilized",
    platforms: ["Intelligence / mission platform"],
    tags: ["platform", "federal", "DOW", "research"],
    dowAccent: true,
    thumb: "/images/cases/dow-platform-modernization.jpg",
    thumbAlt: "Sterilized dual-path journey modernization diagram",
    teaser:
      "Field research and dual-path UX that raised satisfaction and recovered 500+ engineering hours.",
    summary:
      "Modernized a fragmented mission platform through field research, journey mapping, and dual-path UX strategy—raising satisfaction and recovering engineering time.",
    metrics: [
      { value: "+65%", label: "User satisfaction lift" },
      { value: "500+", label: "Engineering hours saved" },
      { value: "Dual-path", label: "Experts and modern flows" },
    ],
    artifacts: [
      {
        src: "/images/cases/dow-platform-modernization.jpg",
        alt: "Sterilized dual-path journey modernization diagram",
        caption: "Dual-path UX — power users and modern journeys together",
      },
      {
        src: "/images/cases/dow-platform-modernization-2.jpg",
        alt: "Sterilized dual-path journey merge map",
        caption: "Field pins that earned the right to change the workflow",
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
    approach: [
      "Field research and journey mapping in context",
      "Reframed tools into a unified ecosystem narrative",
      "Dual-path UX to land change without stranding experts",
    ],
    reflection:
      "Modernization sticks when research earns the right to change workflows—not when a redesign is declared.",
  },
  {
    slug: "star-ccm-az-workflow",
    title: "Simcenter STAR-CCM+ A–Z Workflow",
    client: "Siemens",
    sector: "Enterprise engineering software",
    role: "UX research & analysis",
    dates: "Siemens tenure",
    featured: true,
    order: 6,
    proof: "First clear A–Z workflow map where none had been defined",
    clearance: "public",
    platforms: ["Simcenter STAR-CCM+"],
    tags: ["workflow", "research", "enterprise"],
    thumb: "/images/cases/star-ccm-az-workflow.jpg",
    thumbAlt: "Sterilized A-to-Z engineering workflow map",
    teaser:
      "Mapped the first clear A–Z workflow in STAR-CCM+—where none had ever been defined.",
    summary:
      "Initial analysis to understand the most robust end-to-end workflow in the application—because no workflows had ever been clearly defined.",
    metrics: [
      { value: "A→Z", label: "First end-to-end workflow map" },
      { value: "Gaps", label: "Friction feature teams shipped around" },
      { value: "Shared", label: "Language for product integrity" },
    ],
    artifacts: [
      {
        src: "/images/cases/star-ccm-az-workflow.jpg",
        alt: "Sterilized A-to-Z engineering workflow map",
        caption: "The robust path made visible for the first time",
      },
      {
        src: "/images/cases/star-ccm-az-workflow-2.jpg",
        alt: "Sterilized A-to-Z workflow discovery board with gap markers",
        caption: "Gap markers where siloed feature work had normalized friction",
      },
    ],
    pullQuote:
      "If the workflow was never defined, every feature is a guess.",
    outcomes: [
      "Documented A–Z workflow as a shared product reference",
      "Surfaced gaps that feature teams had been shipping around",
      "Foundation for later modernization and inclusive research",
    ],
    context:
      "A deep engineering product with powerful capabilities and implicit workflows living only in expert heads.",
    approach: [
      "Mapped the robust path from start to finish",
      "Named friction that siloed feature work had normalized",
      "Gave teams a shared language for workflow integrity",
    ],
    reflection:
      "If the workflow was never defined, every feature is a guess. Naming the path is strategy.",
  },
  {
    slug: "espn-x-games-apps",
    title: "ESPN X Games — Facebook Audience Apps",
    client: "ESPN",
    sector: "Media",
    role: "UX / interactive",
    dates: "2013",
    featured: false,
    order: 99,
    proof: "Multi-language social apps from Tignes to Foz do Iguaçu",
    clearance: "public",
    platforms: ["Facebook apps"],
    tags: ["media", "social", "localization"],
    summary:
      "Built multi-language social apps for ESPN’s global X Games—live content, fan interaction, and platform-native UX.",
    metrics: [
      { value: "Global", label: "Multi-language event apps" },
      { value: "Live", label: "Immovable event deadlines" },
      { value: "Social", label: "Platform-native fan UX" },
    ],
    pullQuote:
      "Live events teach ruthless prioritization—the audience doesn’t wait.",
    outcomes: [
      "Localized engagement across international event sites",
      "Platform-native patterns for fan interaction",
      "Cross-team delivery under live-event pressure",
    ],
    context:
      "Global sports events needed local-language social experiences tied to live content.",
    approach: [
      "Designed for Facebook-native interaction models",
      "Localized content and UX for each host city",
      "Shipped under immovable event deadlines",
    ],
    reflection:
      "Live events teach ruthless prioritization—the audience doesn’t wait for a perfect backlog.",
  },
];

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
