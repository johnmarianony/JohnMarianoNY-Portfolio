export type CaseArtifact = {
  src: string;
  alt: string;
  caption: string;
  /** Portrait screenshots (e.g. Facebook tab captures) */
  portrait?: boolean;
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
  /** Role attribution for pullQuote, shown under the quote. */
  pullQuoteCite?: string;
  /** Lead-in above the outcomes list, when the locked copy has one. */
  outcomesIntro?: string;
  /** Engagement team. Shown under the case hero when set. */
  team?: string;
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
    title: "Platform Migration MVP",
    client: "Federal defense organization",
    sector: "Federal",
    role: "Lead Designer & Lead Business Analyst",
    dates: "2025–2026",
    featured: true,
    order: 1,
    proof: "$800M · five-plus-year contract",
    clearance: "sterilized",
    platforms: ["Platform migration", "MVP delivery"],
    tags: ["platform", "federal", "migration"],
    dowAccent: true,
    thumb: "/images/cases/dow-platform-migration-mvp/artifact-3.jpg",
    thumbAlt: "Dark-mode ITSM employee portal homepage for a mission service center",
    team:
      "Me, alongside solution architects, engineers, and program leads",
    teaser:
      "Lead designer and lead BA for a migration MVP that started three months behind and led to an $800 million, five-plus-year contract.",
    summary:
      "A high-stakes federal defense modernization needed a credible path off its legacy systems. I joined as both the lead designer and the lead BA for the migration MVP. When I started, the project was three months behind schedule.",
    metrics: [
      { value: "$800M", label: "Five-plus-year contract to continue development" },
      { value: "3 months", label: "Schedule deficit recovered on the MVP" },
      { value: "MVP", label: "Overdelivered, then carried onto the main contract" },
    ],
    artifacts: [
      {
        src: "/images/cases/dow-platform-migration-mvp/artifact-3.jpg",
        alt: "Dark-mode ITSM employee portal homepage for a mission service center",
        caption:
          "Day-one employee portal — search, catalog, requests, and status on the migrated platform",
      },
      {
        src: "/images/cases/dow-platform-migration-mvp/artifact-1.jpg",
        alt: "Dark-mode MVP traceability board with mission-value and migration-risk chips",
        caption:
          "Need → requirement → MVP feature, with the numbers leadership used to say yes",
      },
      {
        src: "/images/cases/dow-platform-migration-mvp/artifact-2.jpg",
        alt: "Dark-mode day-one flow screens next to an MVP one-pager",
        caption:
          "Four day-one screens beside the Scope / Sequence / Risk one-pager — including what we deliberately left out",
      },
    ],
    pullQuote:
      "John was critical in supporting our delivery and led efforts in team cohesiveness and collaboration. He also led our BAs and mentored them to bring back requirements efficiently when the client was difficult to engage.",
    pullQuoteCite: "Packaged Application Development Manager",
    outcomes: [
      "Recovered from a three-month deficit and overdelivered on the MVP.",
      "The MVP led to an $800 million, five-plus-year contract to continue development on the platform.",
      "I was the key team member carried over to the main contract, sharing knowledge with the onboarding team and continuing the customer relationship.",
    ],
    context:
      "Migration risk was the real customer. Moving legacy workflows to a new platform without disrupting mission operations meant every design choice was also a risk decision. We also had to make up three months. Decision-makers weren’t going to be won over by polished screens. They needed scope, sequence, and requirements they could trust, all within security and accreditation requirements and the target platform’s standard capabilities.",
    approach: [
      "As lead designer and lead BA, I owned both the experience and the requirements behind it.",
      "Framed the target architecture and mapped how tangled legacy workflows would consolidate into a clearer platform.",
      "Ranked workflows by mission value and migration risk to decide what moved first, and just as clearly, what didn’t move yet.",
      "Built requirements traceability from user needs to requirements to MVP features.",
      "Designed low-fidelity day-one flows so leadership could see what users would experience at launch.",
      "Summarized scope, sequence, and risk on a single page for executives.",
    ],
    reflection:
      "At this scale, clear scoping is design work. The most persuasive artifact wasn’t a screen. It was a plain account of what we would do first and what we were deliberately leaving for later. Saying “not yet” clearly is how a team that started behind ended up ahead.",
  },
  {
    slug: "intel-portal-audit",
    title: "Heuristic Audit of a Mission Self-Service Portal",
    client: "U.S. Government (cleared engagement)",
    sector: "Federal",
    role: "UX Lead, Heuristic Audit",
    dates: "8 weeks",
    featured: true,
    order: 2,
    proof: "8 weeks → 2-year roadmap",
    clearance: "sterilized",
    platforms: ["Mission self-service portal"],
    tags: ["audit", "adoption", "federal"],
    thumb: "/images/cases/intel-portal-audit/artifact-1.jpg",
    thumbAlt:
      "Handwritten field notebook with redacted workflow notes and an on-prem clearance stamp",
    team:
      "Me and my director (a fellow designer), working with the government’s team and the subcontracting team on the portal",
    teaser:
      "An eight-week independent read on a mission self-service portal people weren’t using—usability, adoption, and clearance constraints.",
    summary:
      "A government organization had already launched a mission self-service portal, but people weren’t using it the way leadership expected. My director and I were brought in for an independent read on usability and adoption. We worked alongside the government’s team and the subcontracting team that was building and maintaining the portal. We had eight weeks, and the work had to stay within clearance constraints.",
    metrics: [
      { value: "8 weeks", label: "Audit delivered" },
      { value: "2 years", label: "Modernization roadmap from observed UX debt" },
      { value: "Quick wins", label: "Adoption work sequenced ahead of structural change" },
    ],
    artifacts: [
      {
        src: "/images/cases/intel-portal-audit/artifact-1.jpg",
        alt: "Handwritten field notebook with redacted workflow notes and an on-prem clearance stamp",
        caption:
          "Field notebook from the on-prem audit — redacted workflows, severity marks, VIP call-line tally",
      },
      {
        src: "/images/cases/intel-portal-audit/artifact-2.jpg",
        alt: "Compiled executive readout board with adoption, quick wins, and roadmap pieces",
        caption:
          "Executive readout: adoption pattern, quick wins vs structural bets, and a two-year roadmap",
      },
    ],
    pullQuote:
      "John took our discussions and turned them into actions. I relied on him for the readout content and Executive Readout slides. There was a sense of relief working with him—he’d try new things, get feedback, iterate, and succeed. It was great working with someone who takes ownership.",
    pullQuoteCite: "Platform Design Director",
    outcomes: [
      "Delivered the audit in 8 weeks.",
      "Built a two-year modernization roadmap grounded in observed UX debt.",
      "Put the adoption-focused quick wins first, so the organization could start rebuilding user trust and shifting volume off the call center.",
      "Recommended a rebranding initiative: next to the VIP call-center path, the portal had gained a reputation as a bottleneck.",
    ],
    context:
      "The portal technically worked. That was part of the problem. Users circumvented it and called the call center instead, which had a directive to respond within hours, so everyone was treated like a VIP. Nobody was tracking that pattern as a UX issue, even though the real goal was to get more people onto self-service and take volume off the call center. We also couldn’t redesign the system in two months, and nothing could leave the environment as a screenshot. Anything we delivered had to make sense to people who would never see the live system, and it had to hold up after we left.",
    approach: [
      "Worked in tandem with my director on the audit. Because I held the clearance, I was the one who could audit the platform and its workflows on premises.",
      "Audited the portal on site, walking through the most important user tasks end to end so every finding was tied to real work rather than isolated screens.",
      "Took notes by hand and made rough drawings that redacted any cleared information but still showed my team the current platform configuration and where the workflows had pain points and bottlenecks.",
      "Ran heuristic evaluations against those flows and scored each issue by severity and frequency.",
      "Split the findings into two tracks: quick wins (labels, wayfinding, error recovery, status feedback) and structural work (content, information architecture, platform, governance).",
      "Shared findings with the government’s team and the subcontracting team in plain language, and wrote each recommendation as a decision they could own and sequence without us.",
    ],
    reflection:
      "This project reminded me that great UX isn’t about having perfect freedom. It’s about strategic influence. My most useful tools were a notebook and a pencil—and the same ownership showed up in the executive readout and slides. Redacted sketches gave a team that couldn’t see the system a clear picture of it. An eight-week engagement can still shape years of modernization.",
  },
  {
    slug: "doi-platform-constraints",
    title: "Designing Within Constraints",
    client: "Federal agency (cleared platform)",
    sector: "Federal",
    role: "UX Design Lead",
    dates: "2024–2025",
    featured: true,
    order: 3,
    proof: "Style guide made actionable · contract extended",
    clearance: "sterilized",
    platforms: ["Low-code platform", "Federal design system"],
    tags: ["platform", "federal", "mentorship"],
    thumb: "/images/cases/doi-platform-constraints/artifact-1.jpg",
    thumbAlt:
      "Side-by-side bureau back-office and portal screens reflecting two unnamed platform looks",
    team:
      "Me, a group of junior designers I mentored, plus platform engineers, compliance reviewers, and product owners",
    teaser:
      "Turned federal policy and an updated style guide into design direction shared-platform teams could use, and mentored the agency’s designers along the way.",
    summary:
      "Several offices within a federal agency were building on the same low-code platform, which required a clearance to work on, and all of them were working under the same federal policy. Each team was solving its problems separately. My job was to turn policy and the recently updated federal style guide into design direction teams could actually use, and to help the agency’s designers grow while we did it.",
    metrics: [
      { value: "Policy", label: "Style guide and requirements made actionable" },
      { value: "Reused", label: "Wireframes across efforts in the program" },
      { value: "Extended", label: "Contract on the strength of the alignment work" },
    ],
    artifacts: [
      {
        src: "/images/cases/doi-platform-constraints/artifact-1.jpg",
        alt: "Side-by-side bureau back-office and portal screens reflecting two unnamed platform looks",
        caption:
          "Two related bureau projects on one shared platform — back-office workflows beside a public-facing portal",
      },
      {
        src: "/images/cases/doi-platform-constraints/artifact-2.jpg",
        alt: "Compilation board showing four constraint sources flowing into Must, Should, and Can’t",
        caption:
          "Four sources feeding Must / Should / Can’t — customer requirements, platform limits, the federal style guide, and bureau branding",
      },
    ],
    pullQuote:
      "John is a great asset—always responsive, takes ownership of his work, strong client engagement, and a great team contributor. He was extended on the project to finalize details on the site, completed that with no delay, then helped the team with testing. I would recommend him to any team.",
    pullQuoteCite: "Delivery Manager",
    outcomes: [
      "Made policy and the updated style guide actionable as design constraints.",
      "My wireframes were reused across efforts in the program.",
      "Junior designers grew into confident, constraint-aware practitioners.",
      "The contract was extended on the strength of the alignment work.",
    ],
    context:
      "Accessibility, records, and security requirements were real and non-negotiable, but they were written for compliance, not for design. Teams usually discovered a constraint late in review, when changes were expensive. Because everyone was on a shared platform without a shared approach to UX, screens looked and behaved differently from one team to the next. Polished mockups often promised things the platform couldn’t deliver.",
    approach: [
      "Interpreted the recently updated federal style guide, decided how it should apply inside the platform, and showed teams how to use it.",
      "Translated policy into designable rules, sorting each requirement into “must,” “should,” or “the platform can’t do this.”",
      "Mapped what the low-code platform supported natively, what needed a workaround, and what was off-limits.",
      "Built a reusable, annotated wireframe kit on the federal design system. The margin notes explained why each pattern worked the way it did.",
      "Ran workshops where designers practiced reading policy as a design brief.",
      "Mentored junior designers who were new to federal work, using a simple review checklist they also used to critique each other’s work.",
      "Kept patterns simple, since citizen developers would maintain many of these screens after launch.",
    ],
    reflection:
      "Constraint isn’t the enemy of craft. It’s the brief. My role wasn’t to pretend we had freedom we didn’t have. It was to surface the real limits early enough that designers could be creative inside them. I measure my influence here by what teams kept using after I stepped away.",
  },
  {
    slug: "state-total-experience",
    title: "Designing Through Ambiguity — Total Experience",
    client: "Federal agency (cleared engagement)",
    sector: "Federal",
    role: "UX Strategy Lead / Team Lead",
    dates: "2024",
    featured: true,
    order: 4,
    proof: "15 → 2 platforms · 2+ year roadmap",
    clearance: "sterilized",
    platforms: ["Total Experience", "Platform evaluation"],
    tags: ["strategy", "federal", "leadership"],
    thumb: "/images/cases/state-total-experience/artifact-1.jpg",
    thumbAlt: "Anonymized ITSM platform comparison matrix with Suites A–F",
    team: "A delivery lead and two designers, with me leading UX strategy",
    teaser:
      "Led Total Experience strategy across HR, admin, and service delivery on a timeline shaped by an election and an inauguration.",
    summary:
      "A federal agency wanted a Total Experience vision: one connected way of thinking about employee and customer experience across HR, administrative services, and service delivery. I led the UX strategy and the design team on a timeline shaped by an election and an inauguration.",
    metrics: [
      { value: "15 → 2", label: "Platforms researched against government requirements" },
      { value: "2+ years", label: "Roadmap leadership could carry forward" },
      { value: "TX", label: "Vision across HR, admin, and service delivery" },
    ],
    artifacts: [
      {
        src: "/images/cases/state-total-experience/artifact-1.jpg",
        alt: "Anonymized ITSM platform comparison matrix with Suites A–F",
        caption:
          "Buyers’ guide: Suites A–F scored against FedRAMP, cost, licenses, AI chatbots, and key features",
      },
      {
        src: "/images/cases/state-total-experience/artifact-2.jpg",
        alt: "Energetic two-year Total Experience modernization roadmap infographic",
        caption:
          "Two-year modernization roadmap — platform decision in three weeks, then discovery through scale",
      },
    ],
    pullQuote:
      "John built and strengthened his relationship with the primary Total Experience client. On numerous occasions the client turned to him for expertise on how to move an initiative forward, and said John made it easier to get things done. He raises concerns early, and he operates well within ambiguity—driving the work forward when client direction is thin.",
    pullQuoteCite: "Delivery Manager",
    outcomesIntro:
      "Partway through, it became clear the launch wouldn’t happen on our timeline. Instead of treating that as a failure, we focused on what leadership could carry forward:",
    outcomes: [
      "A roadmap covering more than two years.",
      "A platform matrix and recommendation grounded in the government’s requirements.",
      "A unifying Total Experience vision across HR, admin, and service delivery.",
      "A client point of contact who was better prepared for his expanded role.",
      "A team that grew through a genuinely ambiguous engagement.",
    ],
    context:
      "We had no pre-selected technology stack, so there was no platform to design screens for. Client leadership also changed during the engagement. When our main contact’s lead was elevated to a new position, he became our primary point of contact, and decisions started to bottleneck. Ambiguity wasn’t a phase we had to get through. It was the environment we worked in for the whole project, and my team still needed steady direction.",
    approach: [
      "Mapped HR, administrative services, and service delivery as one ecosystem instead of three separate functions.",
      "Collected requirements from the government and synthesized stakeholder interviews into shared themes, tracing where the employee experience broke down at handoffs.",
      "Researched each candidate platform in depth against those requirements, narrowing 15 options to 2 without designing for any single vendor.",
      "Built a platform matrix and a recommendation for which platform best suited the project going forward.",
      "Mentored the client’s new primary point of contact weekly, which helped clear the communication bottleneck and keep decisions moving.",
      "Mentored my designers closely, helping them do good work when the brief kept moving.",
    ],
    reflection:
      "This wasn’t just designing screens. It was designing ecosystems, and sometimes the relationship itself. I’m proud of this work not because of what we launched, but because of what we learned and what we left behind. When a launch isn’t ready, the most valuable thing you can leave is clear thinking that someone else can build on.",
  },
  {
    slug: "dow-platform-modernization",
    title: "Mission-Critical Defense Platform Suite",
    client: "Federal defense organization",
    sector: "Federal",
    role: "UX Research & Design",
    dates: "2 years",
    featured: true,
    order: 5,
    proof: "+65% satisfaction · 500+ engineering hours saved",
    clearance: "sterilized",
    platforms: ["Mission-critical platform suite"],
    tags: ["platform", "federal", "research"],
    dowAccent: true,
    thumb: "/images/cases/dow-platform-modernization/artifact-3.jpg",
    thumbAlt:
      "Map-first suite shell with terrain map, app switcher, drive flyout, and messenger chats",
    team:
      "Me, working with engineering and product leads and the development teams for applications across the suite",
    teaser:
      "Two years of field research and design to streamline a mission-critical defense platform suite without slowing the experts who use it.",
    summary:
      "For two years I worked with engineering and product leads and development teams across the applications in a Mission-Critical Defense Platform Suite. I was tasked with helping the team develop a plan to streamline the suite, grounded in field research with the people who use it.",
    metrics: [
      { value: "+65%", label: "User satisfaction" },
      { value: "500+", label: "Engineering hours saved by reducing rework" },
      { value: "2 years", label: "Field research and design across the suite" },
    ],
    artifacts: [
      {
        src: "/images/cases/dow-platform-modernization/artifact-3.jpg",
        alt: "Map-first suite shell with terrain map, app switcher, drive flyout, and messenger chats",
        caption:
          "Mission Coordination Suite — map-first shell with shared chat, drive, and maps across Deployments, Medical, Personnel, Assets, and Strategy",
      },
      {
        src: "/images/cases/dow-platform-modernization/artifact-1.jpg",
        alt: "Dark navy collision map of four suite apps with handoffs and re-entry markers",
        caption:
          "One mission task across four apps — handoffs, re-entry heat, and the conflicts operators carried in their heads",
      },
      {
        src: "/images/cases/dow-platform-modernization/artifact-2.jpg",
        alt: "Dual-path briefing board where expert and guided rails converge on one data model",
        caption:
          "Dual path over one data model — dense expert grid and guided steps that write the same record",
      },
    ],
    pullQuote:
      "John has been our biggest champion for UX best practices. He always goes above and beyond. His ideas and effort are always appreciated by the design team and leadership.",
    pullQuoteCite: "Creative Team Manager",
    outcomes: [
      "+65% user satisfaction.",
      "500+ engineering hours saved by reducing rework.",
      "A shared plan for streamlining the suite across development teams.",
    ],
    context:
      "The applications were used together as a suite, but they shared no common development. Some services offered redundant or conflicting functions. To finish one job, users moved between applications, re-entered data, and held the workflow together in their heads. The most experienced users had built muscle memory around the existing tools, so any streamlining that slowed them down would be rejected, and fairly so. Operations couldn’t stop, so changes had to land incrementally.",
    approach: [
      "Ran field research and in-context journey mapping, documenting every handoff and re-entry point in a single task.",
      "Mapped where applications overlapped or conflicted, giving the teams a shared view of the suite as one ecosystem.",
      "Worked with engineering and product leads to shape a streamlining plan the development teams could act on incrementally.",
      "Designed a dual-path experience: a dense, efficient path for experts and a guided path for newer users.",
      "Treated expert speed as a hard requirement and protected shortcuts, density, and bulk actions.",
    ],
    reflection:
      "Streamlining sticks when research earns the right to change workflows. It doesn’t stick when it’s simply declared. The experts weren’t resisting change. They were protecting the mission. Designing a path for them is what made the streamlined path possible.",
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
    thumbAlt: "Siemens STAR-CCM+ portfolio collage — labeled product UI examples",
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
        alt: "Siemens STAR-CCM+ portfolio collage — labeled product UI examples",
        caption: "STAR-CCM+ portfolio collage — labeled product UI examples",
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
