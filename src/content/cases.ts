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
   * Mid-story slot. Index 0 is always the hero.
   * Unset artifacts after the hero stay in the end gallery.
   */
  slot?: "challenge" | "approach";
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
  /** Optional splash poster (taller / right-weighted) for FeaturedCase */
  posterThumb?: string;
  thumbAlt?: string;
  metrics?: CaseMetric[];
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
          "Legacy to Mission Service Center — eight channels become three paths on one record",
        slot: "challenge",
      },
      {
        src: "/images/cases/dow-platform-migration-mvp-4.jpg",
        alt: "Value by migration-risk board marking what shipped in the MVP and what was deferred with a trigger",
        caption:
          "Value × risk — what moved first, and a not-yet list with a trigger on each deferral",
        slot: "approach",
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
      "The win wasn’t a launch screenshot—it was a contract-shaped outcome built from disciplined platform design under constraint. Full narrative expanding as sterilized details are cleared.",
  },
  {
    slug: "intel-portal-audit",
    title: "Heuristic Audit: Federal Mission Portal",
    client: "U.S. Government (cleared engagement)",
    sector: "Federal / Intelligence",
    role: "UX lead — heuristic audit",
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
      {
        src: "/images/cases/intel-portal-audit-3.jpg",
        alt: "Six-step task walkthrough with severity tags, showing critical steps that end in a phone call",
        caption:
          "Severity-tagged walkthrough — the critical steps fail, and people finish by phone",
        slot: "challenge",
      },
      {
        src: "/images/cases/intel-portal-audit-4.jpg",
        alt: "Decision board splitting quick wins from structural bets against call-center volume",
        caption:
          "VIP call-center workaround — two tracks, one goal: move volume off the phones",
        slot: "approach",
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
      "Great UX isn’t about perfect freedom—it’s about strategic influence. An eight-week lens can still shape years of modernization.",
  },
  {
    slug: "doi-platform-constraints",
    title: "Constrained Platform Design: Federal Agency",
    client: "Department of the Interior",
    sector: "Federal",
    role: "UX Design Lead",
    dates: "2024–2025",
    featured: true,
    order: 3,
    proof: "Policy → platform-aligned UX; assets reused; contract extended",
    clearance: "sterilized",
    platforms: ["Power Platform", "USWDS"],
    tags: ["Platform", "Mentorship"],
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
      {
        src: "/images/cases/doi-platform-constraints-4.jpg",
        alt: "Dark capability catalog sorting features into native, workaround, and off-limits",
        caption:
          "Capability catalog — native, workaround, and off-limits before any polish",
        slot: "challenge",
      },
      {
        src: "/images/cases/doi-platform-constraints-3.jpg",
        alt: "Dark annotated wire catalog of three shared flows, each marked policy, platform, and pattern",
        caption:
          "Annotated wire catalog — every screen traces a policy line and a platform limit",
        slot: "approach",
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
      "Constraint isn’t the enemy of craft—it’s the brief. Influence shows up in what gets reused after you leave.",
  },
  {
    slug: "state-total-experience",
    title: "Total Experience Strategy: Federal Agency",
    client: "U.S. Department of State",
    sector: "Federal",
    role: "UX strategy lead / team lead",
    dates: "2024",
    featured: true,
    order: 4,
    proof: "Quiet impact: research & framework left behind when launch wasn’t ready",
    clearance: "sterilized",
    platforms: ["Total Experience", "Multi-platform evaluation"],
    tags: ["Strategy", "Leadership"],
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
      {
        src: "/images/cases/state-total-experience-3.jpg",
        alt: "Ecosystem map of one employee journey across people, workplace, and service desks, with handoff breaks",
        caption:
          "Ecosystem handoff map — one journey, and the breaks are in the handoffs",
        slot: "challenge",
      },
      {
        src: "/images/cases/state-total-experience-4.jpg",
        alt: "Non-launch board showing a frozen go-live and the criteria, roadmap, and owner left for the next team",
        caption:
          "Non-launch pivot — go-live left the table; the handoff is what the next team can carry",
        slot: "approach",
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
    problem:
      "The client had not picked a platform, leadership kept changing, and a hard political deadline was coming. Nobody could design the \"real\" product yet, but the work still had to move.",
    opportunity:
      "When go-live left the table, redefine the win: leave-behinds the next team can decide from. Buyers guide, fog-to-frame roadmap, mentored judgment that outlasts a frozen launch.",
    constraint:
      "No stack selected. Platform choice stayed open while Total Experience framing still had to move.",
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
    title: "Mission Platform Suite: Federal Defense Organization",
    client: "War Department (DOW)",
    sector: "Federal",
    role: "UX research & design",
    dates: "Prior engagement",
    featured: true,
    order: 5,
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
      {
        src: "/images/cases/dow-platform-modernization-4.jpg",
        alt: "Field journey of one task crossing five apps, marking handoffs and re-entry points",
        caption:
          "Field journey — one task, five apps, and where experts lose their place",
        slot: "challenge",
      },
      {
        src: "/images/cases/dow-platform-modernization-5.jpg",
        alt: "Heat matrix of five apps against shared services, with overlap turning into conflict",
        caption:
          "Heated overlap matrix — five apps rebuilding the same services, and where they collide",
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
      "Modernization sticks when research earns the right to change workflows—not when a redesign is declared.",
  },
  {
    slug: "star-ccm-az-workflow",
    title: "End-to-End Workflow Mapping: Siemens STAR-CCM+",
    client: "Siemens",
    sector: "Enterprise engineering software",
    role: "UX research & analysis",
    dates: "Siemens tenure",
    featured: true,
    order: 6,
    proof: "First clear A–Z workflow map where none had been defined",
    clearance: "public",
    platforms: ["Simcenter STAR-CCM+"],
    tags: ["UX research", "Process"],
    thumb: "/images/cases/star-ccm-az-workflow-panel.jpg",
    thumbAlt: "Sterilized Simcenter STAR-CCM+ A–Z workflow splash panel",
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
        src: "/images/cases/star-ccm-az-workflow-panel.jpg",
        alt: "Sterilized Simcenter STAR-CCM+ A–Z workflow splash panel",
        caption: "Sterilized splash — undefined path mapped A→Z",
      },
      {
        src: "/images/cases/star-ccm-az-workflow-panel-2.jpg",
        alt: "Sterilized overgrowth versus consolidation comparison panel",
        caption: "Sterilized comparison — overgrowth versus consolidation",
      },
      {
        src: "/images/cases/siemens/siemens-mid-challenge-workshop-guidance.jpg",
        alt: "Workshop whiteboard with handwritten Guidance, Automation, and Templating notes from a STAR-CCM+ session",
        caption:
          "Workshop wall - Guidance, Automation, and Templating before the path had a name",
        slot: "challenge",
      },
      {
        src: "/images/cases/siemens/siemens-mid-challenge-right-click.jpg",
        alt: "Legacy STAR-CCM+ Java client with a directory tree and a scalar field dialog triggered by right click",
        caption:
          "Directory-era client - deep tree navigation and right-click to trigger work",
        slot: "challenge",
      },
      {
        src: "/images/cases/siemens/siemens-mid-approach-templates.jpg",
        alt: "Simcenter STAR-CCM+ Views screen showing a drag monitor plot as a Simulation Templates concept",
        caption:
          "Simulation Templates - shared workflow best practices you can reuse",
        slot: "approach",
      },
      {
        src: "/images/cases/siemens/siemens-mid-approach-az-walls.jpg",
        alt: "Custom tree console of parent and child nodes beside a boundary-condition map of a duct assembly",
        caption:
          "A to Z walls - the mapped path from geometry through reporting",
        slot: "approach",
      },
      {
        src: "/images/cases/siemens/siemens-star-ccm-user-journey-splash.png",
        alt: "Siemens Simcenter STAR-CCM+ User Journey splash and login",
        caption: "Labeled: STAR-CCM+ User Journey — product entry experience",
      },
      {
        src: "/images/cases/siemens/siemens-star-ccm-az-workflow-board.png",
        alt: "Siemens STAR-CCM+ A-to-Z workflow analysis board",
        caption: "Labeled: A–Z workflow analysis — mapping the undefined path",
      },
      {
        src: "/images/cases/siemens/siemens-star-ccm-az-detail.png",
        alt: "Siemens STAR-CCM+ A-to-Z workflow detail close-up",
        caption: "Labeled: A–Z workflow detail — steps made visible",
      },
      {
        src: "/images/cases/siemens/siemens-web-monitoring-client.png",
        alt: "Siemens STAR-CCM+ Web Monitoring Client prototype",
        caption: "Labeled: Web Monitoring Client — clickable prototype work",
      },
      {
        src: "/images/cases/siemens/siemens-job-manager-stop-button.jpg",
        alt: "Siemens STAR-CCM+ Job Manager stop button research finding",
        caption: "Labeled: Job Manager Stop Button — research-driven workflow fix",
      },
      {
        src: "/images/cases/siemens/siemens-tabular-editor.png",
        alt: "Siemens STAR-CCM+ tabular editor concept exploration",
        caption: "Labeled: Tabular Editor — next-gen UI exploration",
      },
      {
        src: "/images/cases/siemens/siemens-modernization-diagram.png",
        alt: "Siemens STAR-CCM+ modernization diagram",
        caption: "Labeled: Modernization diagram — from legacy to next-gen UI",
      },
      {
        src: "/images/cases/siemens/siemens-ux-influence-timeline.png",
        alt: "Siemens UX influence timeline from direct work to continued use",
        caption: "Labeled: UX Influence Timeline — impact after departure",
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
    problem:
      "Nobody had ever mapped how people actually ran STAR-CCM+ from start to finish. Engineers kept a library of notebooks for workflow directions, and something like a rolodex to remember which notebook and which page held the next step.\n\nThe UI itself was a folder directory that leaned on right-click actions and deep folder navigation to trigger work. Repetitive steps meant climbing up and down the tree, sometimes deep into nested folders, just to do the same action again.\n\nThe product was as deep as a Photoshop-class tool, so the real path lived on paper, in expert heads, and inside that directory model, and every feature team shipped against a different mental model. The culture assumed PhD users could absorb the complexity. Research kept showing that the complexity was the tax, not the badge.",
    opportunity:
      "Walk a real model A to Z (geometry, meshing, physics, simulation, reporting), make the robust path visible in the product instead of across notebooks and folder trees, and give product and engineering a shared language for what “complete” meant before next-gen and cloud work started. Once the path was named, the gaps feature teams had been shipping around finally had somewhere to land.\n\nWe also saw that we could land some of those improvements in the new cloud offering first, because desktop adoption moved slowly. Users did not update often. They expected newer releases to be less stable than older ones, and their models were most compatible with older builds. That same research made the case for stronger backwards compatibility so newer software could earn trust instead of waiting years for people to leave a known-good version.\n\nProduct management drove Simulation Templates as a way to carry shared workflow best practices; I worked on that effort with the team, alongside Web Viewer, so people could reuse a protected path and share results without another trip through paper notes or the directory tree.",
    constraint:
      "Legacy Java client built around directory-era information architecture and right-click driven actions, plus a first-HCI-lead seat inside a PhD-heavy shop that treated UX as an outsider. Research had to earn trust with data and collaboration, not with a redesign pitch. Cloud and next-gen migration was already on the horizon, so the map had to hold for the product people used today and the one they were about to build.",
    approach: [
      "Mapped the robust path from start to finish",
      "Named friction that siloed feature work had normalized",
      "Gave teams a shared language for workflow integrity",
    ],
    reflection:
      "If the workflow was never defined, every feature is a guess. Naming the path is strategy.",
  },
  {
    slug: "adobe-social-onboarding",
    title: "Enterprise Onboarding Redesign: Adobe Social",
    client: "Adobe",
    sector: "Social",
    role: "Business Consultant, Adobe Social, and the lead of three onshore consultants. The team had a manager, the three of us onshore, and eight offshore technical consultants who set up the configurations from the requirements we gathered. I was aligned with the offshore lead. I mentored the other onshore consultants, ran standups, and assigned work. I took the most complicated setups, the largest customers, and the at-risk contracts, and I stepped in when other engagements started to go sideways. When the manager left the position, I stepped into that gap. I was not the product owner.",
    dates: "Dec 2012 to Jan 2015",
    featured: true,
    order: 7,
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
    featured: true,
    order: 8,
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
    order: 9,
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
    order: 10,
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
