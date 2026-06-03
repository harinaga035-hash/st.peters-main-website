import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Globe2,
  Sparkles,
  FlaskConical,
  Users,
  Briefcase,
  Star,
  Quote,
  PlayCircle,
  MapPin,
  ScanSearch,
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.png";
import research from "@/assets/research.jpg";
import studentLife from "@/assets/student-life.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Masters Degree & PG College Institute of Pharmaceutical Sciences \u2014 Where Excellence Meets Innovation" },
      {
        name: "description",
        content:
          "A globally ranked Institute of Pharmaceutical Sciences shaping future-ready leaders through academic excellence, world-class research, modern infrastructure, and outstanding placements.",
      },
      {
        property: "og:title",
        content: "Masters Degree & PG College Institute of Pharmaceutical Sciences \u2014 Where Excellence Meets Innovation",
      },
      {
        property: "og:description",
        content: "Academic excellence, research leadership, and student success.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroCampus },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});
const stats = [
  { to: 98, suffix: "%", label: "Placement Rate" },
  { to: 240, suffix: "+", label: "Industry Partners" },
  { to: 1200, suffix: "+", label: "Research Papers / yr" },
  { to: 65, suffix: "+", label: "Countries Represented" },
];
const pillars = [
  {
    icon: Award,
    title: "Academic Excellence",
    desc: "Rigorous, future-oriented curricula taught by world-class faculty and industry leaders.",
  },
  {
    icon: FlaskConical,
    title: "Research Leadership",
    desc: "Frontier discovery across AI, biotech, sustainability and advanced engineering.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    desc: "International accreditations, exchange programs and a diverse, inclusive community.",
  },
  {
    icon: Briefcase,
    title: "Career Success",
    desc: "A dedicated placement cell connecting students to elite global recruiters.",
  },
];
const programs = [
  { icon: FlaskConical, name: "Engineering & Technology", count: "24 programs" },
  { icon: BookOpen, name: "Business & Management", count: "18 programs" },
  { icon: Sparkles, name: "Sciences & Research", count: "21 programs" },
  { icon: Users, name: "Liberal Arts & Design", count: "16 programs" },
];
function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <motion.img
          src={heroCampus}
          alt="Masters Degree & PG College Institute of Pharmaceutical Sciences campus at golden hour"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 hero-focus-overlay" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 animate-float rounded-full bg-gold/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-sm font-semibold text-white">
              <Star className="h-4 w-4 text-gold" />
              Ranked among the world's top universities
            </span>
            <h1 className="hero-title-shadow mt-6 text-[2.75rem] font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Where Excellence Meets <span className="hero-accent-shadow text-[#FFD166]">Innovation</span>
            </h1>
            <p className="hero-copy-shadow mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Masters Degree & PG College Institute of Pharmaceutical Sciences empowers the next generation of leaders, researchers and
              innovators with a world-class education designed for a future without limits.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/about-us"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                Discover Masters Degree & PG College
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/placement-cell"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full glass-dark px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Outcomes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass shadow-elev md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card/40 px-6 py-8 text-center">
                <p className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
                  <AnimatedCounter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PILLARS / BENTO */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Why Masters Degree & PG College"
          title="A foundation built on four pillars of distinction"
          description="Every part of the Masters Degree & PG College experience is engineered to help you achieve more - academically, professionally and personally."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="card-hover h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-navy text-navy-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* RESEARCH FEATURE */}
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <img
                src={research}
                alt="Researchers working in a Masters Degree & PG College Institute of Pharmaceutical Sciences laboratory"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[5/4] w-full rounded-3xl object-cover shadow-elev"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass px-6 py-5 shadow-lg sm:block">
                <p className="font-display text-3xl font-semibold text-foreground">
                  <AnimatedCounter to={350} prefix="₹" suffix="M" />
                </p>
                <p className="text-xs font-medium text-muted-foreground">Annual research funding</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Research & Innovation"
              title="Pioneering discoveries that shape tomorrow"
              description="From artificial intelligence to climate science, our research centers tackle the world's most pressing challenges - and our students are at the heart of every breakthrough."
            />
            <ul className="mt-8 space-y-4">
              {[
                "30+ dedicated research centers & innovation labs",
                "Patents and publications recognized globally",
                "Undergraduate research opportunities from year one",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/research"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-foreground link-underline"
            >
              Explore our research{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Academics"
          title="Programs designed for the future"
          description="Choose from a broad portfolio of internationally accredited undergraduate and graduate programs."
          align="center"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <StaggerItem key={p.name}>
              <div className="card-hover group h-full overflow-hidden rounded-3xl border border-border bg-card p-7">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.count}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CAMPUS LIFE SPLIT */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex items-center">
            <div className="py-12 lg:pr-16">
              <SectionHeading
                eyebrow="Campus Life"
                title="A community where you belong"
                description="From cultural festivals to leadership societies, 150+ student clubs and a thriving residential community make every day at Masters Degree & PG College unforgettable."
              />
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { n: 150, s: "+", l: "Clubs" },
                  { n: 40, s: "+", l: "Annual events" },
                  { n: 12, s: "", l: "Sports arenas" },
                ].map((x) => (
                  <div key={x.l}>
                    <p className="font-display text-3xl font-semibold text-gradient-gold">
                      <AnimatedCounter to={x.n} suffix={x.s} />
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{x.l}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/student-activity-cell"
                className="group mt-8 inline-flex items-center gap-2 font-bold text-foreground link-underline"
              >
                Explore student life{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={studentLife}
              alt="Students celebrating at a Masters Degree & PG College Institute of Pharmaceutical Sciences campus festival"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full min-h-[360px] w-full rounded-3xl object-cover shadow-elev"
            />
          </Reveal>
        </div>
      </section>

      {/* VIRTUAL TOUR */}
      <section id="virtual-tour" className="bg-gradient-soft py-24 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Virtual Tour"
                title="Step inside Masters Degree & PG College from wherever you are"
                description="Explore signature learning spaces, residential life, research labs and student hubs through an immersive campus preview designed for future Masters Degree & PG College students and families."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: MapPin, label: "Campus Landmarks" },
                  { icon: ScanSearch, label: "360° Preview" },
                  { icon: Users, label: "Student Spaces" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact-us"
                className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Book a Guided Tour
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elev">
              <div className="relative aspect-video min-h-[320px] overflow-hidden max-[430px]:min-h-[360px]">
                <img
                  src={heroCampus}
                  alt="Virtual tour preview of Masters Degree & PG College Institute of Pharmaceutical Sciences campus"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <button
                  type="button"
                  aria-label="Preview virtual tour"
                  className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full glass-dark text-white shadow-elev transition-transform hover:scale-105"
                >
                  <PlayCircle className="h-9 w-9 text-gold" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="eyebrow text-gold">Interactive Preview</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Masters Degree & PG College Campus Walkthrough
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                    A polished tour area ready for your 360° embed, hosted video, or campus
                    walkthrough iframe.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
        <Reveal>
          <figure className="relative rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-14">
            <Quote className="mx-auto h-10 w-10 text-gold" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
              "Masters Degree & PG College didn't just give me a degree - it gave me a global network, a research
              career, and the confidence to lead. It's an institution that genuinely believes in its
              students."
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-semibold text-foreground">Dr. Ananya Rao</p>
              <p className="text-sm text-muted-foreground">
                Class of 2018 · Research Scientist, DeepMind
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CTABand />
    </div>
  );
}
export { Route };
