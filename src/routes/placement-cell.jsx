import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Handshake, GraduationCap, Target, Award } from "lucide-react";
import placement from "@/assets/placement.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/placement-cell")({
  head: () => ({
    meta: [
      { title: "Placement Cell \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "98% placement rate, 240+ recruiters and record-breaking offers. The St. Peter's Placement Cell connects students to elite global careers through training, mentorship and partnerships.",
      },
      { property: "og:title", content: "Placement Cell \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      { property: "og:description", content: "Careers, recruiters and outstanding outcomes." },
      { property: "og:url", content: "/placement-cell" },
      { property: "og:image", content: placement },
    ],
    links: [{ rel: "canonical", href: "/placement-cell" }],
  }),
  component: PlacementPage,
});
const recruiters = [
  "Google",
  "Microsoft",
  "Amazon",
  "Goldman Sachs",
  "McKinsey",
  "Tesla",
  "Deloitte",
  "IBM",
  "Nvidia",
  "Meta",
  "JP Morgan",
  "Accenture",
];
const process = [
  {
    icon: Target,
    title: "Skill Readiness",
    desc: "Aptitude, coding and domain bootcamps from year two.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    desc: "1:1 mentoring, mock interviews and resume clinics.",
  },
  {
    icon: Handshake,
    title: "Industry Connect",
    desc: "Drives, internships and live projects with partners.",
  },
  { icon: Award, title: "Placement", desc: "Dedicated support until every student is placed." },
];
function PlacementPage() {
  return (
    <div>
      <PageHero
        eyebrow="Placement Cell"
        title="Careers without limits"
        subtitle="A world-class placement ecosystem connecting ambitious students to the most sought-after employers across the globe."
        image={placement}
        crumbs={[{ label: "Placement Cell" }]}
      />

      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass shadow-elev lg:grid-cols-4">
            {[
              { n: 98, s: "%", l: "Placement rate" },
              { n: 240, s: "+", l: "Recruiters" },
              { n: 42, s: " LPA", l: "Highest package" },
              { n: 14, s: " LPA", l: "Average package" },
            ].map((x) => (
              <div key={x.l} className="bg-card/40 px-6 py-8 text-center">
                <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  <AnimatedCounter to={x.n} suffix={x.s} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{x.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="From campus to career, every step supported"
          description="A structured, four-stage journey that prepares students to excel in competitive global recruitment."
          align="center"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="card-hover relative h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                <span className="absolute right-6 top-6 font-display text-4xl font-semibold text-accent">
                  0{i + 1}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-navy text-navy-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Top Recruiters"
            title="Trusted by the world's best"
            align="center"
          />
          <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {recruiters.map((r) => (
              <StaggerItem key={r}>
                <div className="card-hover grid h-20 place-items-center rounded-2xl border border-border bg-card font-display text-lg font-semibold text-foreground/80 shadow-sm">
                  {r}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src={placement}
            alt="Students at a St. Peter's Institute of Pharmaceutical Sciences campus recruitment drive"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elev"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Why Recruiters Choose St. Peter's"
            title="Job-ready, industry-aligned graduates"
            description="Our students arrive with the technical depth, communication skills and professional maturity that top employers demand."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Industry-designed curriculum and live capstone projects",
              "Mandatory internships with leading organizations",
              "Strong global alumni network opening doors worldwide",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                  <TrendingUp className="h-3.5 w-3.5" />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Recruit from St. Peter's"
        description="Partner with us to access a talent pool of driven, future-ready graduates."
        primaryLabel="Become a Recruiter"
        secondaryLabel="Download Brochure"
      />
    </div>
  );
}
export { Route };
