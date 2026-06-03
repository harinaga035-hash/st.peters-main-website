import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircleQuestion, PhoneCall } from "lucide-react";
import { SITE } from "@/lib/site";

const phoneHref = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
const whatsappHref = `https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
  `Hello ${SITE.short}, I would like to know more about admissions.`,
)}`;

const actions = [
  {
    label: "WhatsApp",
    href: whatsappHref,
    icon: WhatsAppIcon,
    external: true,
    className:
      "border-[#b9f5cc]/70 bg-[linear-gradient(135deg,rgba(37,211,102,0.96),rgba(20,148,76,0.96))] text-white shadow-[0_16px_34px_-16px_rgba(37,211,102,0.9),0_10px_28px_-18px_rgba(15,23,42,0.55)] hover:shadow-[0_20px_48px_-14px_rgba(37,211,102,0.95),0_16px_34px_-20px_rgba(15,23,42,0.65)]",
  },
  {
    label: "Call Us",
    href: phoneHref,
    icon: PhoneCall,
    className:
      "border-white/35 bg-gradient-navy text-navy-foreground shadow-[0_16px_38px_-18px_oklch(0.24_0.055_264/0.72),0_10px_28px_-18px_rgba(15,23,42,0.55)] hover:shadow-[0_22px_58px_-18px_oklch(0.24_0.055_264/0.82),0_16px_34px_-20px_rgba(15,23,42,0.65)]",
  },
];

const buttonBase =
  "group relative grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border backdrop-blur-xl transition-all duration-300 before:pointer-events-none before:absolute before:inset-1 before:rounded-full before:border before:border-white/30 before:bg-white/10 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-white/10 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:-translate-y-1 hover:scale-110 hover:after:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:h-[3.75rem] sm:w-[3.75rem]";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.04 4.8A11.1 11.1 0 0 0 6.6 21.76L5.2 27l5.36-1.36a11.08 11.08 0 0 0 5.48 1.44h.01A11.14 11.14 0 0 0 27.2 15.96 11.13 11.13 0 0 0 16.04 4.8Zm0 20.42h-.01a9.2 9.2 0 0 1-4.7-1.29l-.34-.2-3.18.81.85-3.09-.22-.36a9.23 9.23 0 1 1 7.6 4.13Zm5.06-6.9c-.28-.14-1.64-.8-1.9-.9-.25-.1-.44-.14-.63.14-.18.27-.72.9-.88 1.08-.16.18-.32.2-.6.07-.27-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.12.28-.32.42-.48.14-.16.18-.27.28-.46.09-.18.04-.34-.02-.48-.07-.14-.63-1.51-.86-2.07-.23-.54-.46-.47-.63-.48h-.54c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.2 1.26.17 1.73.1.53-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32Z" />
    </svg>
  );
}

function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-3 sm:bottom-8 sm:right-7 sm:gap-4"
      aria-label="Quick contact actions"
    >
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noreferrer" : undefined}
          aria-label={action.label}
          title={action.label}
          className={`${buttonBase} ${action.className}`}
        >
          <action.icon className="relative z-10 h-6 w-6 drop-shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" />
        </a>
      ))}
      <Link
        to="/contact-us"
        aria-label="Enquire Now"
        title="Enquire Now"
        className={`${buttonBase} border-gold/45 bg-[linear-gradient(135deg,oklch(0.93_0.045_86/0.96),oklch(0.75_0.12_78/0.96))] text-navy shadow-[0_16px_38px_-16px_oklch(0.74_0.11_78/0.78),0_10px_28px_-18px_rgba(15,23,42,0.55)] hover:shadow-[0_24px_60px_-16px_oklch(0.74_0.11_78/0.85),0_16px_34px_-20px_rgba(15,23,42,0.65)]`}
      >
        <MessageCircleQuestion className="relative z-10 h-6 w-6 drop-shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" />
      </Link>
    </motion.div>
  );
}

export { FloatingActions };
