import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Compass, Award, Users, Quote, BadgeCheck, ArrowRight, BookOpen, FlaskConical, Briefcase, GraduationCap } from "lucide-react";
import aboutAerial from "@/assets/about-aerial.jpg";
import chairmanPortrait from "@/assets/chairman-portrait.svg";
import secretaryPortrait from "@/assets/secretary-portrait.svg";
import principalPortrait from "@/assets/principal-portrait.svg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us \u2014 Masters Degree & PG College Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "Discover Masters Degree & PG College Institute of Pharmaceutical Sciences's legacy of academic excellence, our vision and mission, founding values, and the milestones that made us a globally trusted institution.",
      },
      { property: "og:title", content: "About Us \u2014 Masters Degree & PG College Institute of Pharmaceutical Sciences" },
      { property: "og:description", content: "Our legacy, vision, mission and values." },
      { property: "og:url", content: "/about-us" },
      { property: "og:image", content: aboutAerial },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutPage,
});
const values = [
  {
    icon: Compass,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty and ethics in all we do.",
  },
  {
    icon: Heart,
    title: "Inclusion",
    desc: "A diverse, welcoming community where every voice matters.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "An uncompromising pursuit of quality in teaching and research.",
  },
  {
    icon: Users,
    title: "Impact",
    desc: "Knowledge in service of society, industry and the planet.",
  },
];
const leadership = [
  {
    image: chairmanPortrait,
    name: "Chairman Name",
    designation: "Chairman",
    quote: "Education transforms most deeply when knowledge, character, and service move forward together.",
    message:
      "We are committed to an academic culture where learners think rigorously, act ethically, and contribute meaningfully to healthcare and society.",
  },
  {
    image: secretaryPortrait,
    name: "Secretary Name",
    designation: "Secretary",
    quote: "Strong institutions are built through clarity, care, and a constant respect for student potential.",
    message:
      "Our focus is to strengthen every support system that helps students thrive inside classrooms, laboratories, and professional practice.",
  },
  {
    image: principalPortrait,
    name: "Principal Name",
    designation: "Principal",
    quote: "Excellence is a daily discipline shaped by teaching, research, mentorship, and purpose.",
    message:
      "We prepare students with scientific depth, professional confidence, and the values required to serve a changing pharmaceutical world.",
  },
];

const differentiators = [
  {
    icon: FlaskConical,
    title: "Research-led learning",
    desc: "Laboratory practice, inquiry, and applied problem-solving are built into the academic experience.",
  },
  {
    icon: BookOpen,
    title: "Rigorous academics",
    desc: "A disciplined curriculum balances foundations, emerging fields, and professional readiness.",
  },
  {
    icon: Briefcase,
    title: "Career preparation",
    desc: "Placement guidance, industry exposure, and mentoring help students move confidently into practice.",
  },
  {
    icon: GraduationCap,
    title: "Mentored growth",
    desc: "Faculty support and campus systems help students build character, skill, and direction.",
  },
];

const successSteps = [
  "Discover strengths through guided academic mentoring",
  "Build discipline through laboratories and research practice",
  "Engage industry through projects, internships, and placement preparation",
  "Graduate ready to serve healthcare, research, and society",
];
const timeline = [
  {
    year: "1962",
    title: "Founded",
    desc: "Established with a vision to democratize world-class education.",
  },
  {
    year: "1988",
    title: "Research Charter",
    desc: "Recognized as a research-intensive institution.",
  },
  {
    year: "2005",
    title: "Global Campus",
    desc: "International partnerships across 30+ countries.",
  },
  { year: "2024", title: "Top Rankings", desc: "Ranked among the world's leading universities." },
];
function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Masters Degree & PG College"
        title="Six decades of shaping brilliant minds"
        subtitle="A legacy of academic excellence, innovation and trust - built by visionaries, sustained by community, and committed to the future."
        image={aboutAerial}
        crumbs={[{ label: "About Us" }]}
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our Story"
            title="An institution built on purpose and possibility"
          />
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Since 1962, Masters Degree & PG College Institute of Pharmaceutical Sciences has been a place where ambition meets opportunity.
              What began as a bold experiment in accessible, high-quality education has grown into a
              globally ranked institution spanning sciences, engineering, business, and the arts.
              Today, more than 25,000 students from 65+ countries call Masters Degree & PG College home - united by
              curiosity and a drive to make a difference.
            </p>
          </Reveal>
        </div>
        <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border lg:grid-cols-4">
          {[
            { n: 1962, s: "", l: "Founded" },
            { n: 25, s: "K+", l: "Students" },
            { n: 1800, s: "+", l: "Faculty" },
            { n: 180, s: "K+", l: "Alumni worldwide" },
          ].map((x) => (
            <StaggerItem key={x.l} className="bg-card px-6 py-8 text-center">
              <p className="font-display text-4xl font-semibold text-foreground">
                <AnimatedCounter to={x.n} suffix={x.s} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{x.l}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>


      {/* Leadership Team */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Leadership guiding Masters Degree & PG College forward"
            description="A compact view of the institution's leadership team and the values shaping our academic direction."
            align="center"
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {leadership.map((person) => (
              <StaggerItem key={person.designation}>
                <article className="card-hover h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <img
                      src={person.image}
                      alt={`${person.name}, ${person.designation}`}
                      loading="lazy"
                      width={160}
                      height={200}
                      className="h-32 w-28 shrink-0 rounded-2xl border border-border object-cover shadow-sm sm:h-36 sm:w-32"
                    />
                    <div className="min-w-0 pt-1">
                      <p className="font-display text-2xl font-semibold leading-tight text-foreground">
                        {person.name}
                      </p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                        {person.designation}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-5 border-l-2 border-gold/70 pl-4 font-display text-xl font-semibold leading-snug text-foreground">
                    "{person.quote}"
                  </blockquote>
                  <details className="group mt-5 rounded-2xl bg-secondary/70 p-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-foreground">
                      View Message
                      <ArrowRight className="h-4 w-4 text-gold transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {person.message}
                    </p>
                  </details>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Masters Degree & PG College"
          title="A focused environment for pharmaceutical excellence"
          description="Students learn in a culture that connects academic depth with research, mentorship, and professional confidence."
          align="center"
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-hover h-full rounded-3xl border border-border bg-card p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Student Success Journey */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Student Success Journey"
              title="From aspiration to professional readiness"
              description="A clear progression helps students move from academic foundations into confident, service-minded careers."
            />
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {successSteps.map((step, index) => (
                <StaggerItem key={step}>
                  <div className="h-full rounded-3xl border border-border bg-card p-5 shadow-sm">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold font-display text-lg font-bold text-gold-foreground shadow-gold">
                      {index + 1}
                    </span>
                    <p className="mt-4 text-sm font-semibold leading-relaxed text-foreground">{step}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="card-hover h-full rounded-3xl bg-gradient-navy p-10 text-navy-foreground shadow-elev">
              <Eye className="h-10 w-10 text-gold" />
              <h3 className="mt-6 text-2xl font-semibold">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-white/75">
                To be a globally pre-eminent Institute of Pharmaceutical Sciences - advancing knowledge, nurturing leaders,
                and creating solutions that transform lives and societies.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-hover h-full rounded-3xl border border-border bg-card p-10 shadow-soft">
              <Target className="h-10 w-10 text-gold" />
              <h3 className="mt-6 text-2xl font-semibold text-foreground">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To deliver transformative education and pioneering research in an inclusive
                environment, empowering students to lead with integrity, creativity and purpose.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="What We Stand For"
          title="The values that guide everything we do"
          align="center"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="card-hover h-full rounded-3xl border border-border bg-card p-7 text-center shadow-sm">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones across the decades"
            align="center"
          />
          <div className="mt-14 space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-gold font-display text-sm font-bold text-gold-foreground shadow-gold">
                      {t.year}
                    </span>
                    {i < timeline.length - 1 && <span className="mt-2 w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-xl font-semibold text-foreground">{t.title}</h3>
                    <p className="mt-1.5 text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Become part of our story" />
    </div>
  );
}
export { Route };
