import { createFileRoute } from "@tanstack/react-router";
import {
  Library,
  FlaskConical,
  Dumbbell,
  Wifi,
  BedDouble,
  Cpu,
  Leaf,
  Utensils,
} from "lucide-react";
import infra from "@/assets/infrastructure.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "Explore St. Peter's Institute of Pharmaceutical Sciences's world-class infrastructure: smart classrooms, advanced laboratories, a soaring central library, sports arenas, and green residential campuses.",
      },
      { property: "og:title", content: "Infrastructure \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      { property: "og:description", content: "World-class, future-ready campus facilities." },
      { property: "og:url", content: "/infrastructure" },
      { property: "og:image", content: infra },
    ],
    links: [{ rel: "canonical", href: "/infrastructure" }],
  }),
  component: InfraPage,
});
const facilities = [
  {
    icon: Library,
    title: "Central Library",
    desc: "A 5-floor knowledge hub with 500,000+ titles and 24/7 digital access.",
    span: "lg:col-span-2",
  },
  {
    icon: FlaskConical,
    title: "Advanced Labs",
    desc: "60+ specialized research and teaching laboratories.",
  },
  {
    icon: Cpu,
    title: "Innovation Studios",
    desc: "Maker spaces, robotics bays and high-performance computing.",
  },
  {
    icon: BedDouble,
    title: "Smart Residences",
    desc: "Modern hostels with wellness and study lounges.",
    span: "lg:col-span-2",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    desc: "Olympic pool, indoor arenas and athletics track.",
  },
  {
    icon: Utensils,
    title: "Dining & Caf\xE9s",
    desc: "Diverse, healthy dining across campus venues.",
  },
  {
    icon: Wifi,
    title: "Smart Campus",
    desc: "Campus-wide gigabit Wi-Fi and IoT-enabled classrooms.",
  },
  { icon: Leaf, title: "Green Spaces", desc: "LEED-certified, solar-powered, sustainable design." },
];
function InfraPage() {
  return (
    <div>
      <PageHero
        eyebrow="Infrastructure"
        title="A campus engineered for excellence"
        subtitle="State-of-the-art facilities, sustainable design, and immersive learning environments that inspire discovery at every turn."
        image={infra}
        crumbs={[{ label: "Infrastructure" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="The St. Peter's Campus"
          title="Spaces designed to elevate every experience"
          description="Spread across 200 acres, our campus blends architectural elegance with cutting-edge technology and a deep commitment to sustainability."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <StaggerItem key={f.title} className={f.span ?? ""}>
              <div className="card-hover flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-navy text-navy-foreground">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-gradient-navy py-20 text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-8">
          {[
            { n: 200, s: "", l: "Acre campus" },
            { n: 500, s: "K+", l: "Library volumes" },
            { n: 60, s: "+", l: "Laboratories" },
            { n: 100, s: "%", l: "Renewable energy" },
          ].map((x) => (
            <Reveal key={x.l}>
              <p className="font-display text-4xl font-semibold sm:text-5xl">
                <AnimatedCounter to={x.n} suffix={x.s} />
              </p>
              <p className="mt-2 text-sm text-white/70">{x.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src={infra}
            alt="Soaring atrium of the St. Peter's Institute of Pharmaceutical Sciences central library"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elev"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Sustainability First"
            title="A greener, smarter campus"
            description="Every building at St. Peter's is designed with the planet in mind — from solar arrays and rainwater harvesting to intelligent energy systems that cut consumption by 40%."
          />
          <ul className="mt-8 space-y-4">
            {[
              "LEED Platinum certified academic blocks",
              "Carbon-neutral operations by 2030",
              "Smart sensors optimizing energy across campus",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                  <Leaf className="h-3.5 w-3.5" />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Experience the campus in person"
        primaryLabel="Book a Campus Tour"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
export { Route };
