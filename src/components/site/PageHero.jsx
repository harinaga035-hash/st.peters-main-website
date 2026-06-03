import { motion } from "framer-motion";
import { Breadcrumbs } from "./Breadcrumbs";
function PageHero({ eyebrow, title, subtitle, image, crumbs }) {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden sm:min-h-[58vh]">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-30 sm:pb-14 sm:pt-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Breadcrumbs items={crumbs} light />
          <p className="eyebrow mt-5 text-gold sm:mt-6">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-[2.35rem] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
export { PageHero };
