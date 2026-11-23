import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.positioning,
};

const principles = [
  {
    title: "Step in and keep the work moving",
    body: "When the manager took a leave of absence, I stepped in as acting manager of the STAR-CCM+ HCI practice for 18+ months, reporting to the director and senior management. I kept a small team focused on research, and I made the work visible on the existing Java client so engineering could treat it as actionable. I was promoted in 2020 for embedding UX in the product lifecycle.",
    href: "/work/star-ccm-design-practice",
    link: "Building a Design Practice: Siemens STAR-CCM+",
  },
  {
    title: "Get the room aligned before the work spreads",
    body: "In my first month as HCI lead, I designed and facilitated a three-day discovery workshop with more than 30 departmental leaders and program managers. We worked 120+ ideas down to four actionable steps for next-gen UI wireframes. The session earned 90% positive stakeholder feedback, and those four steps became the approach we followed for the next three years.",
    href: "/work/star-ccm-discovery-workshop",
    link: "Discovery Workshop: Siemens STAR-CCM+",
  },
  {
    title: "Let a short diagnostic set a long plan",
    body: "I led an eight-week heuristic audit of a classified self-service portal. The work sequenced quick wins for adoption and a two-year modernization roadmap.",
    href: "/work/intel-portal-audit",
    link: "Heuristic Audit: Federal Mission Portal",
  },
  {
    title: "Ship the first win so the larger contract can follow",
    body: "On a War Department platform migration that was already about three months behind, I partnered inside the delivery team on design and requirements for an MVP. That path helped win an $820M, five-year contract.",
    href: "/work/dow-platform-migration-mvp",
    link: "Platform Migration MVP: Federal Defense Organization",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>About</h1>
        <p>{site.positioning}</p>
      </header>

      <div className="about-intro">
        <div className="stack">
          <p>
            I’m John Mariano, a platform experience strategist and designer with
            20+ years turning ambiguous multi-app ecosystems into clearer
            delivery. At Accenture Federal Services I lead UX on large-scale
            government platforms where content strategy, service design, and
            cross-functional alignment have to hold under regulation and
            clearance.
          </p>
          <p>
            From 2011 to 2018 I worked at Context Optional and Adobe, building
            Facebook marketing apps, cutting Social onboarding from six months to
            two weeks, designing the interactive sales toolkit for Adobe Summit,
            and advising Darden on online ordering accessibility.
          </p>
          <p>
            From March 2019 to January 2022 I was the first HCI design lead for
            Simcenter STAR-CCM+. I stood up a design practice I later ran as
            acting manager, facilitated a three-day discovery workshop that set
            our three-year approach, mapped the first A to Z workflow, and helped
            shape the cloud pay-as-you-go path.
          </p>
          <p>
            I’m a storyteller and mentor as much as a strategist, most proud when
            junior designers leave a project more fluent in constraint than when
            they arrived.
          </p>
          <p>
            I use AI as a craft amplifier with a published ethical line, human-led,
            purpose-driven. I write about that practice on{" "}
            <a
              href={site.social.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              My Neural Graffiti
              <span className="sr-only"> (opens in new tab)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
            .
          </p>
          <p>
            NN/g certified in UX Management (UXC# 1081321). Cleared to support
            sensitive federal projects. Public case studies are sterilized; deeper
            walkthroughs available on request.
          </p>
          <div className="about-creds">
            <a
              href="https://www.nngroup.com/ux-certification/verify/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-badge"
            >
              <Image
                src="/images/about/nng-uxc-badge.png"
                alt="Nielsen Norman Group UX Certified badge"
                width={706}
                height={616}
                sizes="140px"
              />
              <span className="sr-only"> (opens in new tab)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
          <p className="stack__cta">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
            {" · "}
            <Link href="/contact" className="text-accent">
              Contact
            </Link>
          </p>
        </div>
        <figure className="about-portrait">
          <Image
            src="/images/about/john-mariano-headshot.jpg"
            alt="Portrait of John Mariano"
            width={1024}
            height={1536}
            sizes="(max-width: 900px) 360px, 420px"
            preload
          />
        </figure>
      </div>

      <section className="about-lead" aria-labelledby="how-i-lead-title">
        <p className="section__eyebrow">Leadership</p>
        <h2 id="how-i-lead-title" className="section__title">
          How I lead
        </h2>
        <p className="about-lead__intro">
          I lead with transparency. I listen first to understand what the
          department requires, how we can support other efforts, and what my team
          needs to prevent blockers so they can deliver efficiently while pushing
          innovation. I keep leadership in the loop on decisions, with a
          high-level view of the work being accomplished and the roadmap ahead,
          and I support project management in planning and documentation so
          communication stays clear.
        </p>
        <ol className="about-principles">
          {principles.map((principle) => (
            <li key={principle.href}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
              <Link href={principle.href} className="text-accent">
                {principle.link}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
