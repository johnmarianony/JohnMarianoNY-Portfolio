export type CaseArtifact = {
  src: string;
  alt: string;
  caption: string;
  /** Portrait screenshots (e.g. Facebook tab captures) */
  portrait?: boolean;
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
    thumb: "/images/cases/espn-x-games-apps.jpg",
    thumbAlt: "ESPN applications admin dashboard showing X Games city apps",
    teaser:
      "Multi-language Facebook audience apps for ESPN’s global X Games—from Tignes to Foz do Iguaçu.",
    summary:
      "Built multi-language social apps for ESPN’s global X Games—live content, fan interaction, and platform-native UX.",
    metrics: [
      { value: "4 cities", label: "Tignes · Munich · Barcelona · Foz" },
      { value: "Localized", label: "FR · DE · ES · PT event UIs" },
      { value: "Live", label: "Immovable event deadlines" },
    ],
    artifacts: [
      {
        src: "/images/cases/espn-x-games-apps.jpg",
        alt: "ESPN applications admin dashboard showing X Games city apps",
        caption: "ESPN Apps admin — X Games city apps in the publish console",
      },
      {
        src: "/images/cases/espn/espn-xgames-munich-localization-de-en.jpg",
        alt: "Side-by-side German and English ESPN X Games Munich Facebook apps",
        caption: "Labeled: Munich localization — DE / EN side-by-side",
      },
      {
        src: "/images/cases/espn/espn-xgames-barcelona-app-ui.jpg",
        alt: "ESPN X Games Barcelona Facebook app UI",
        caption: "Labeled: Barcelona — video, headlines, gallery, social bar",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-tignes-app-ui.jpg",
        alt: "ESPN X Games Tignes Facebook app UI in French",
        caption: "Labeled: Tignes — French-localized winter event app",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-foz-do-iguacu-app-ui.jpg",
        alt: "ESPN X Games Foz do Iguaçu Facebook app UI in Portuguese",
        caption: "Labeled: Foz do Iguaçu — Portuguese-localized event app",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-munich-app-ui-de.jpg",
        alt: "ESPN X Games Munich Facebook app UI in German",
        caption: "Labeled: Munich — German-localized summer event app",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-barcelona-facebook-tab.jpg",
        alt: "ESPN X Games Barcelona Facebook tab with live video and headlines",
        caption: "Labeled: Barcelona Facebook tab — live event hub in-platform",
      },
      {
        src: "/images/cases/espn/espn-xgames-tignes-facebook-tab.jpg",
        alt: "ESPN X Games Tignes Facebook tab in French",
        caption: "Labeled: Tignes Facebook tab — French winter event experience",
        portrait: true,
      },
      {
        src: "/images/cases/espn/espn-xgames-foz-do-iguacu-facebook-tab.jpg",
        alt: "ESPN X Games Foz do Iguaçu Facebook tab in Portuguese",
        caption: "Labeled: Foz Facebook tab — Portuguese event experience",
        portrait: true,
      },
    ],
    pullQuote:
      "Live events teach ruthless prioritization—the audience doesn’t wait.",
    outcomes: [
      "Localized engagement across international event sites",
      "Platform-native patterns for fan interaction",
      "Cross-team delivery under immovable event deadlines",
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
