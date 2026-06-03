import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
function CTABand({
  title = "Ready to begin your journey?",
  description = "Join a community of innovators, researchers, and changemakers. Applications for the upcoming intake are now open.",
  primaryLabel = "Apply Now",
  primaryTo = "/contact-us",
  secondaryLabel = "Talk to Admissions",
  secondaryTo = "/contact-us",
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-navy px-5 py-12 text-center shadow-elev sm:px-12 sm:py-14 lg:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[2rem] font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to={primaryTo}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
export { CTABand };
