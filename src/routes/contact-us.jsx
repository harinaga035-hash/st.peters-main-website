import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import heroCampus from "@/assets/hero-campus.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us \u2014 ST.Peter's Institute of Pharmaceutical Sciences" },
      {
        name: "description",
        content:
          "Get in touch with Masters Degree & PG College Institute of Pharmaceutical Sciences. Reach admissions, request a campus tour, or send us your questions \u2014 we're here to help you take the next step.",
      },
      { property: "og:title", content: "Contact Us \u2014 Masters Degree & PG College Institute of Pharmaceutical Sciences" },
      { property: "og:description", content: "Reach our admissions and support teams." },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
  component: ContactPage,
});
function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start a conversation"
        subtitle="Whether you're a prospective student, parent, recruiter or partner - our team is ready to help."
        image={heroCampus}
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <Reveal>
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "Visit Us", v: SITE.address },
              { icon: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, t: "Call", v: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: Clock, t: "Office Hours", v: "Mon \u2013 Sat \xB7 9:00 AM \u2013 6:00 PM" },
            ].map((c) => (
              <div
                key={c.t}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-navy text-navy-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gold">{c.t}</p>
                  {c.href ? (
                    <a href={c.href} className="text-foreground hover:underline">
                      {c.v}
                    </a>
                  ) : (
                    <p className="text-foreground">{c.v}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-gold" />
                <h2 className="mt-5 text-2xl font-semibold text-foreground">Thank you!</h2>
                <p className="mt-2 text-muted-foreground">
                  Your message has been received. Our team will get back to you within 1-2 business
                  days.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <h2 className="text-2xl font-semibold text-foreground">Send us a message</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" placeholder="Jane Doe" />
                  <Field id="email" label="Email" type="email" placeholder="jane@email.com" />
                </div>
                <Field id="subject" label="Subject" placeholder="Admissions enquiry" />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
function Field({ id, label, type = "text", placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
export { Route };
