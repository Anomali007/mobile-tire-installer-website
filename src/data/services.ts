export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: "tire" | "rotate" | "sensor" | "flat";
  features: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "new-tire-install",
    slug: "new-tire-install",
    title: "New Tire Install",
    shortDescription: "Mount + balance on-site for tires you've purchased.",
    fullDescription:
      "We come to your location to mount and balance new tires. Whether you've purchased tires online, from a local shop, or had them delivered, we'll install them wherever you are — at home, work, or anywhere in our service area.",
    icon: "tire",
    features: [
      "Professional mount and balance",
      "Torque to manufacturer specs",
      "TPMS reset included",
      "Old tire disposal available",
      "Service at your location",
    ],
    cta: "Book tire install",
  },
  {
    id: "rotate-balance",
    slug: "rotate-balance",
    title: "Rotate & Balance",
    shortDescription: "Smooth ride, longer tire life.",
    fullDescription:
      "Regular tire rotation and balancing extends tire life and ensures an even, comfortable ride. We'll rotate your tires to the manufacturer's recommended pattern and balance each wheel for optimal performance.",
    icon: "rotate",
    features: [
      "Extends tire life",
      "Improves fuel efficiency",
      "Smoother ride quality",
      "Recommended every 5,000-7,500 miles",
      "Quick service at your location",
    ],
    cta: "Book rotation",
  },
  {
    id: "tpms",
    slug: "tpms-service",
    title: "TPMS Service",
    shortDescription: "Sensor diagnostics, reset, and replacements.",
    fullDescription:
      "Tire Pressure Monitoring System (TPMS) keeps you safe by alerting you to low tire pressure. We diagnose TPMS warnings, reset sensors after tire service, and replace faulty sensors as needed.",
    icon: "sensor",
    features: [
      "TPMS diagnostics",
      "Sensor reset and relearn",
      "Sensor replacement",
      "Battery check",
      "Clear dashboard warnings",
    ],
    cta: "Book TPMS service",
  },
  {
    id: "flat-repair",
    slug: "flat-repair",
    title: "Flat Repair / Roadside",
    shortDescription: "If it's repairable, we'll fix it on-site.",
    fullDescription:
      "Got a flat? If the tire can be safely repaired, we'll patch it on-site and get you back on the road. We assess the damage, perform professional repairs when possible, and can help with replacement if needed.",
    icon: "flat",
    features: [
      "On-site flat repair",
      "Professional patch/plug",
      "Damage assessment",
      "Spare tire mounting",
      "Roadside assistance",
    ],
    cta: "Get help now",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
