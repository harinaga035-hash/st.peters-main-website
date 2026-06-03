import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, GraduationCap, ArrowRight } from "lucide-react";
import { NAV_ITEMS, PRIMARY_NAV, SITE } from "@/lib/site";

function getNavTarget(item) {
  if (item.to === "/#virtual-tour") {
    return {
      to: "/",
      hash: "virtual-tour",
    };
  }

  return { to: item.to };
}

function getActiveOptions(item) {
  if (item.to === "/#virtual-tour") {
    return {
      exact: true,
      includeHash: true,
    };
  }

  return { exact: item.to === "/" };
}

function Logo({ light }) {
  return (
    <Link to="/" className="flex min-h-11 items-center gap-2.5" aria-label={` ${SITE.name} home`}>
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl  ${light ? "bg-white/15 text-white" : "bg-gradient-navy text-navy-foreground"}`}
      >
        <GraduationCap className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-semibold  ${light ? "text-white" : "text-foreground"}`}
        >
          {SITE.short}
        </span>
        <span
          className={`block text-[10px] tracking-[0.25em]  ${light ? "text-white/70" : "text-muted-foreground"}`}
        >
          Institute of Pharmaceutical Sciences
        </span>
      </span>
    </Link>
  );
}
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setDrawer(false);
    setMega(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);
  const solid = scrolled || pathname !== "/";
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500  ${solid ? "glass shadow-soft" : "bg-transparent"}`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo light={!solid} />

          <div className="hidden items-center gap-1 lg:flex">
            {PRIMARY_NAV.map((item) => {
              const target = getNavTarget(item);
              return (
                <Link
                  key={item.to}
                  {...target}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors  ${solid ? "text-foreground/80 hover:text-foreground hover:bg-secondary" : "text-white/85 hover:text-white hover:bg-white/10"}`}
                  activeProps={{
                    className: solid
                      ? "rounded-full px-4 py-2 text-sm font-semibold text-foreground bg-secondary"
                      : "rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/15",
                  }}
                  activeOptions={getActiveOptions(item)}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              onClick={() => setMega((v) => !v)}
              aria-expanded={mega}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors  ${solid ? "text-foreground/80 hover:bg-secondary" : "text-white/85 hover:bg-white/10"}`}
            >
              Explore
              <ChevronDown className={`h-4 w-4 transition-transform  ${mega ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact-us"
              className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setDrawer(true)}
              aria-label="Open menu"
              className={`grid h-11 w-11 place-items-center rounded-full lg:hidden  ${solid ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mega menu (desktop) */}
      <AnimatePresence>
        {mega && (
          <>
            <motion.div
              className="fixed inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMega(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute inset-x-0 top-full mx-auto hidden max-w-7xl px-5 lg:block lg:px-8"
            >
              <div className="glass mt-2 grid grid-cols-3 gap-2 rounded-3xl p-4 shadow-elev">
                {NAV_ITEMS.map((item) => {
                  const target = getNavTarget(item);
                  return (
                    <Link
                      key={item.to}
                      {...target}
                      className="group flex items-start gap-3 rounded-2xl p-4 transition-colors hover:bg-secondary"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="flex items-center gap-1 font-semibold text-foreground">
                          {item.label}
                          <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-background shadow-elev"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <Logo />
                <button
                  onClick={() => setDrawer(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full text-foreground hover:bg-secondary"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-4 pb-28">
                {NAV_ITEMS.map((item) => {
                  const target = getNavTarget(item);
                  return (
                    <Link
                      key={item.to}
                      {...target}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 text-foreground transition-colors hover:bg-secondary"
                      activeProps={{
                        className:
                          "flex items-center gap-3 rounded-2xl px-3 py-3 bg-secondary text-foreground",
                      }}
                      activeOptions={getActiveOptions(item)}
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-semibold">{item.label}</span>
                        <span className="block text-xs text-muted-foreground">{item.desc}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="border-t border-border p-4">
                <Link
                  to="/contact-us"
                  className="flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 font-bold text-gold-foreground shadow-gold"
                >
                  Apply Now
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
export { Navbar };
