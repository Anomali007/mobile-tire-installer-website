export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Coverage", href: "/coverage" },
  { label: "Pricing", href: "/pricing" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: [
    { label: "New Tire Install", href: "/services/new-tire-install" },
    { label: "Rotate & Balance", href: "/services/rotate-balance" },
    { label: "TPMS Service", href: "/services/tpms-service" },
    { label: "Flat Repair", href: "/services/flat-repair" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Coverage Area", href: "/coverage" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
  ],
  business: [
    { label: "Fleet Services", href: "/fleet" },
    { label: "Partners", href: "/partners" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refunds" },
  ],
};
