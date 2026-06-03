import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/site";
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/12">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="font-display text-xl font-semibold sm:text-2xl">{SITE.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A globally ranked institution shaping future-ready leaders through academic
              excellence, pioneering research, and a vibrant, inclusive campus community.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/75 transition-colors hover:text-white link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 shrink-0 text-gold" />
                <a href={`mailto: ${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 shrink-0 text-gold" />
                <a href={`tel: ${SITE.phone}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-white/55 sm:flex-row sm:text-left">
          <p>
            (c) {/* @__PURE__ */ new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Accredited - NAAC A++ - NBA - Globally Ranked</p>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
