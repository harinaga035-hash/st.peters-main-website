import {
  Home,
  Building2,
  FlaskConical,
  Users,
  Landmark,
  Briefcase,
  Mail,
  Award,
  GraduationCap,
  ScanSearch,
} from "lucide-react";

export const SITE = {
  name: "St. Peter's Institute of Pharmaceutical Sciences",
  short: "St. Peter's",
  tagline: "Where Excellence Meets Innovation",
  email: "admissions@St. Peter's.edu",
  phone: "+1 (415) 555-0192",
  whatsapp: "+14155550192",
  address: "1 Scholars Way, Innovation District, CA 94000",
};

export const NAV_ITEMS = [
  { label: "Home", to: "/", icon: Home, desc: "Welcome to St. Peter's" },
  { label: "About Us", to: "/about-us", icon: GraduationCap, desc: "Our legacy & vision" },
  { label: "Infrastructure", to: "/infrastructure", icon: Building2, desc: "World-class campus" },
  { label: "Research", to: "/research", icon: FlaskConical, desc: "Discovery & innovation" },
  { label: "Virtual Tour", to: "/#virtual-tour", icon: ScanSearch, desc: "Explore campus online" },
  {
    label: "Student Activity Cell",
    to: "/student-activity-cell",
    icon: Users,
    desc: "Clubs, culture & life",
  },
  {
    label: "Administration",
    to: "/administration",
    icon: Landmark,
    desc: "Leadership & governance",
  },
  { label: "Placement Cell", to: "/placement-cell", icon: Briefcase, desc: "Careers & recruiters" },
  { label: "Accreditation", to: "/accreditation", icon: Award, desc: "Rankings & approvals" },
  { label: "Contact Us", to: "/contact-us", icon: Mail, desc: "Get in touch" },
];

export const PRIMARY_NAV = NAV_ITEMS.filter((i) =>
  ["/", "/about-us", "/infrastructure", "/research", "/#virtual-tour", "/placement-cell"].includes(
    i.to,
  ),
);
