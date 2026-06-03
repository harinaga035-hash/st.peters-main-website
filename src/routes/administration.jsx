import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Scale, ClipboardList, Landmark, FileText, Building } from "lucide-react";
import aboutAerial from "@/assets/about-aerial.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { CTABand } from "@/components/site/CTABand";
const Route = createFileRoute("/administration")({
  head: () => ({
    meta: [
      { title: "Administration \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "Meet the leadership and governance of St. Peter's Institute of Pharmaceutical Sciences \u2014 a transparent, accountable administration committed to academic integrity and institutional excellence.",
      },
      { property: "og:title", content: "Administration \u2014 St. Peter's Institute of Pharmaceutical Sciences" },
      { property: "og:description", content: "Leadership, governance and transparency." },
      { property: "og:url", content: "/administration" },
      { property: "og:image", content: aboutAerial },
    ],
    links: [{ rel: "canonical", href: "/administration" }],
  }),
  component: AdminPage,
});
const leaders = [
  { name: "Dr. Eleanor Whitfield", role: "Vice-Chancellor", initials: "EW" },
  { name: "Prof. Rajiv Menon", role: "Pro Vice-Chancellor", initials: "RM" },
  { name: "Dr. Sofia Alvarez", role: "Dean of Academics", initials: "SA" },
  { name: "Mr. Daniel Osei", role: "Registrar", initials: "DO" },
  { name: "Dr. Hana Kim", role: "Dean of Research", initials: "HK" },
  { name: "Ms. Priya Sharma", role: "Director of Student Affairs", initials: "PS" },
];
const bodies = [
  {
    icon: Landmark,
    title: "Board of Governors",
    desc: "Strategic oversight and institutional direction.",
  },
  { icon: Scale, title: "Academic Council", desc: "Curriculum, standards and academic policy." },
  {
    icon: ClipboardList,
    title: "Examination Board",
    desc: "Fair, transparent assessment and evaluation.",
  },
  {
    icon: ShieldCheck,
    title: "Grievance Cell",
    desc: "Confidential support and timely resolution.",
  },
];
function AdminPage() {
  return (
    <div>
      <PageHero
        eyebrow="Administration"
        title="Leadership rooted in trust"
        subtitle="A transparent, accountable and student-first administration that upholds the highest standards of governance and academic integrity."
        image={aboutAerial}
        crumbs={[{ label: "Administration" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Institute of Pharmaceutical Sciences Leadership"
          title="The team guiding St. Peter's forward"
          description="Distinguished academics and administrators dedicated to advancing our mission and serving our community."
          align="center"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l) => (
            <StaggerItem key={l.name}>
              <div className="card-hover flex h-full items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-navy font-display text-xl font-semibold text-navy-foreground">
                  {l.initials}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{l.name}</h3>
                  <p className="text-sm text-gold">{l.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Governance"
            title="Structures that safeguard excellence"
            description="Our governance framework ensures every decision is fair, informed and aligned with the interests of students and society."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bodies.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card-hover h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Transparency"
          title="Policies & public disclosures"
          description="We believe accountability builds trust. Key institutional documents are available to all stakeholders."
        />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: FileText, t: "Statutes & Regulations" },
            { icon: Building, t: "Annual Reports" },
            { icon: ShieldCheck, t: "Anti-Ragging Policy" },
            { icon: Scale, t: "Academic Integrity Code" },
            { icon: ClipboardList, t: "Audited Financials" },
            { icon: Landmark, t: "Mandatory Disclosures" },
          ].map((d) => (
            <StaggerItem key={d.t}>
              <a
                href="#"
                className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <d.icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-foreground">{d.t}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTABand
        title="Questions about governance?"
        primaryLabel="Contact the Office"
        secondaryLabel="View Policies"
      />
    </div>
  );
}
export { Route };
