import { createFileRoute } from "@tanstack/react-router";
import { Brain, Leaf, Dna, Atom, Cpu, HeartPulse, ArrowUpRight } from "lucide-react";
import research from "@/assets/research.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "St. Peter's Institute of Pharmaceutical Sciences leads frontier research across AI, sustainability, biotechnology, quantum science and healthcare \u2014 with 30+ centers and global recognition.",
      },
      { property: "og:title", content: "Research \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      { property: "og:description", content: "Discovery and innovation that shape tomorrow." },
      { property: "og:url", content: "/research" },
      { property: "og:image", content: research },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});
const centers = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Machine learning, NLP and responsible AI for real-world impact.",
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    desc: "Clean energy, carbon capture and resilient ecosystems.",
  },
  {
    icon: Dna,
    title: "Biotechnology",
    desc: "Genomics, synthetic biology and precision medicine.",
  },
  {
    icon: Atom,
    title: "Quantum Science",
    desc: "Quantum computing, materials and next-gen photonics.",
  },
  {
    icon: Cpu,
    title: "Advanced Engineering",
    desc: "Robotics, semiconductors and smart manufacturing.",
  },
  {
    icon: HeartPulse,
    title: "Public Health",
    desc: "Epidemiology, digital health and global wellbeing.",
  },
];
const highlights = [
  "Breakthrough in low-cost carbon-capture catalysts",
  "AI model for early cancer detection licensed globally",
  "Quantum error-correction milestone published in Nature",
];
function ResearchPage() {
  return (
    <div>
      <PageHero
        eyebrow="Research & Innovation"
        title="Discovery that changes the world"
        subtitle="From laboratories to launchpads, St. Peter's researchers turn bold ideas into breakthroughs that define the future."
        image={research}
        crumbs={[{ label: "Research" }]}
      />

      <section className="bg-gradient-navy py-20 text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-8">
          {[
            { n: 30, s: "+", l: "Research centers" },
            { n: 1200, s: "+", l: "Papers / year" },
            { n: 350, s: "₹M", l: "Annual funding", prefix: "₹" },
            { n: 480, s: "+", l: "Patents filed" },
          ].map((x) => (
            <Reveal key={x.l}>
              <p className="font-display text-4xl font-semibold sm:text-5xl">
                <AnimatedCounter
                  to={x.prefix ? x.n : x.n}
                  suffix={x.prefix ? "M" : x.s}
                  prefix={x.prefix ?? ""}
                />
              </p>
              <p className="mt-2 text-sm text-white/70">{x.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Research Centers"
          title="Six frontiers, one shared ambition"
          description="Our interdisciplinary centers bring together brilliant minds to solve the challenges that matter most."
          align="center"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {centers.map((c) => (
            <StaggerItem key={c.title}>
              <div className="card-hover group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-gold" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Recent Breakthroughs"
              title="Impact you can measure"
              description="Our research doesn't stay in journals — it reaches industries, governments and communities worldwide."
            />
            <ul className="mt-8 space-y-4">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                    <Atom className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <img
              src={research}
              alt="Advanced research laboratory at St. Peter's Institute of Pharmaceutical Sciences"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elev"
            />
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Join the next breakthrough"
        primaryLabel="Explore Programs"
        secondaryLabel="Partner With Us"
      />
    </div>
  );
}
export { Route };
