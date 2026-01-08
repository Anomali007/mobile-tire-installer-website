export const siteConfig = {
  name: "Don's Mobile Tire",
  description: "Mobile tire installation service in Wisconsin. We come to you for tire installs, rotations, balancing, and TPMS service.",
  phone: "5129698429",
  phoneDisplay: "(512) 969-8429",
  email: "contact@donsmobiletire.com",
  address: {
    city: "Wisconsin",
    state: "WI",
  },
  serviceArea: "Wisconsin",
  hours: {
    weekday: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "",
    google: "",
  },
  links: {
    booking: "/book",
    services: "/services",
    coverage: "/coverage",
    pricing: "/pricing",
    about: "/about",
    faq: "/faq",
    contact: "/contact",
  },
} as const;

export type SiteConfig = typeof siteConfig;
