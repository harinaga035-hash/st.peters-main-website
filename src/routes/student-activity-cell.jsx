import { createFileRoute } from "@tanstack/react-router";
import { Music, Palette, Trophy, Code2, Globe2, Mic, Calendar, Users } from "lucide-react";
import studentLife from "@/assets/student-life.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/student-activity-cell")({
  head: () => ({
    meta: [
      { title: "Student Activity Cell \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "150+ clubs, cultural festivals, sports, hackathons and leadership programs \u2014 the St. Peter's Student Activity Cell makes campus life vibrant, inclusive and unforgettable.",
      },
      { property: "og:title", content: "Student Activity Cell \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      { property: "og:description", content: "Clubs, culture, sports and a thriving community." },
      { property: "og:url", content: "/student-activity-cell" },
      { property: "og:image", content: studentLife },
    ],
    links: [{ rel: "canonical", href: "/student-activity-cell" }],
  }),
  component: SACPage,
});
const clubs = [
  { icon: Code2, title: "Tech & Coding", desc: "Hackathons, robotics and developer communities." },
  { icon: Palette, title: "Arts & Design", desc: "Fine arts, photography and creative studios." },
  { icon: Music, title: "Music & Dance", desc: "Bands, choirs and performance troupes." },
  { icon: Trophy, title: "Sports & Athletics", desc: "Competitive teams across 20+ disciplines." },
  { icon: Mic, title: "Debate & Literary", desc: "Public speaking, MUN and literary circles." },
  { icon: Globe2, title: "Social Impact", desc: "Volunteering, sustainability and outreach." },
];
const events = [
  {
    name: "Aurora",
    tag: "Annual Cultural Fest",
    desc: "Three days of music, art and celebration with 20,000+ attendees.",
  },
  {
    name: "HackSt. Peter's",
    tag: "Global Hackathon",
    desc: "48 hours of innovation with international student teams.",
  },
  {
    name: "Ignite Summit",
    tag: "Leadership Conclave",
    desc: "Industry leaders mentoring the changemakers of tomorrow.",
  },
];
function SACPage() {
  return (
    <div>
      <PageHero
        eyebrow="Student Activity Cell"
        title="Where campus life comes alive"
        subtitle="Beyond the classroom, St. Peter's is a stage for passion, creativity and leadership — with a club, a team or a cause for everyone."
        image={studentLife}
        crumbs={[{ label: "Student Activity Cell" }]}
      />

      <section className="bg-gradient-navy py-20 text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-8">
          {[
            { n: 150, s: "+", l: "Active clubs" },
            { n: 40, s: "+", l: "Annual events" },
            { n: 20, s: "K+", l: "Festival footfall" },
            { n: 95, s: "%", l: "Students engaged" },
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

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Clubs & Societies"
          title="Find your people, follow your passion"
          description="From code to canvas, the Student Activity Cell nurtures every interest with dedicated mentorship, spaces and funding."
          align="center"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((c) => (
            <StaggerItem key={c.title}>
              <div className="card-hover h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Signature Events"
            title="Moments that define the St. Peter's experience"
          />
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {events.map((e) => (
              <StaggerItem key={e.name}>
                <div className="card-hover flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {e.tag}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-gradient-gold">
                    {e.name}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{e.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src={studentLife}
            alt="Students celebrating at a St. Peter's Institute of Pharmaceutical Sciences festival"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elev"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Leadership & Growth"
            title="Lead, organize, and make an impact"
            description="The Student Activity Cell empowers students to run their own initiatives — building real-world skills in leadership, teamwork and event management."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Student-led councils and elected representatives",
              "Dedicated budgets and mentorship for every club",
              "Recognition, awards and credit for participation",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                  <Users className="h-3.5 w-3.5" />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Your campus story starts here"
        primaryLabel="Apply Now"
        secondaryLabel="Explore Clubs"
      />
    </div>
  );
}
export { Route };
