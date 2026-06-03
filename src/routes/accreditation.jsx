import { createFileRoute } from "@tanstack/react-router";
import { Award, BadgeCheck, Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import accreditation from "@/assets/accreditation.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/accreditation")({
  head: () => ({
    meta: [
      { title: "Accreditation & Rankings \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "St. Peter's Institute of Pharmaceutical Sciences holds the highest accreditations \u2014 NAAC A++, NBA, and global recognition \u2014 and ranks among the world's leading institutions for teaching and research.",
      },
      { property: "og:title", content: "Accreditation & Rankings \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      {
        property: "og:description",
        content: "Recognized for quality, trust and global standards.",
      },
      { property: "og:url", content: "/accreditation" },
      { property: "og:image", content: accreditation },
    ],
    links: [{ rel: "canonical", href: "/accreditation" }],
  }),
  component: AccreditationPage,
});
const badges = [
  {
    icon: Award,
    title: "NAAC A++",
    desc: "Highest grade for institutional quality and excellence.",
  },
  {
    icon: BadgeCheck,
    title: "NBA Accredited",
    desc: "Engineering and management programs accredited nationally.",
  },
  {
    icon: Globe2,
    title: "Globally Recognized",
    desc: "Degrees accepted by universities and employers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "UGC Recognized",
    desc: "Approved and recognized by the regulatory authority.",
  },
];
const rankings = [
  { rank: "#12", body: "National Institute of Pharmaceutical Sciences Ranking" },
  { rank: "Top 1%", body: "Global Research Impact" },
  { rank: "#5", body: "Graduate Employability" },
  { rank: "5 Star", body: "Teaching & Facilities Rating" },
];
function AccreditationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Accreditation & Rankings"
        title="Recognized for excellence, trusted worldwide"
        subtitle="Our accreditations and rankings reflect an unwavering commitment to quality, integrity and global standards."
        image={accreditation}
        crumbs={[{ label: "Accreditation" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Our Accreditations"
          title="Quality, verified and assured"
          description="Independent bodies have validated the rigor and impact of a St. Peter's education at the highest levels."
          align="center"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <StaggerItem key={b.title}>
              <div className="card-hover h-full rounded-3xl border border-border bg-card p-7 text-center shadow-sm">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-gold">
                  <b.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-gradient-navy py-20 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow text-center text-gold">Rankings & Recognition</p>
            <h2 className="mt-3 text-center text-3xl font-semibold sm:text-4xl">
              Among the world's best
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {rankings.map((r) => (
              <Reveal key={r.body}>
                <p className="font-display text-4xl font-semibold text-gold sm:text-5xl">
                  {r.rank}
                </p>
                <p className="mt-2 text-sm text-white/70">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src={accreditation}
            alt="St. Peter's Institute of Pharmaceutical Sciences graduation ceremony"
            loading="lazy"
            width={1280}
            height={768}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elev"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="A Legacy of Trust"
            title="Standards that stand the test of time"
            description="For accreditation bodies, parents and recruiters alike, the St. Peter's name is a mark of assured quality and continuous improvement."
          />
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { n: 100, s: "%", l: "Programs accredited" },
              { n: 6, s: "", l: "Decades of quality" },
              { n: 40, s: "+", l: "Global partners" },
            ].map((x) => (
              <div key={x.l}>
                <p className="font-display text-3xl font-semibold text-gradient-gold">
                  <AnimatedCounter to={x.n} suffix={x.s} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{x.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-gold" />
            Consistently improving across every assessment cycle
          </div>
        </div>
      </section>

      <CTABand
        title="Join an institution you can trust"
        primaryLabel="Apply Now"
        secondaryLabel="Verify Credentials"
      />
    </div>
  );
}
export { Route };
