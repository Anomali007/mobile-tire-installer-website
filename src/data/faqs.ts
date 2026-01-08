export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "service" | "booking" | "payment" | "general";
}

export const faqs: FAQ[] = [
  {
    id: "presence-required",
    question: "Do I need to be present?",
    answer:
      "Usually yes — unless we've confirmed access to the vehicle and any required keys or wheel locks ahead of time. We recommend being available to ensure everything goes smoothly.",
    category: "service",
  },
  {
    id: "what-to-have-ready",
    question: "What do I need ready?",
    answer:
      "A safe, flat parking spot where we can work on your vehicle, and any wheel lock key if your vehicle has locking lug nuts. That's it — we bring all the tools and equipment.",
    category: "service",
  },
  {
    id: "bad-weather",
    question: "What if weather is bad?",
    answer:
      "Safety comes first. If conditions aren't suitable for safe work, we'll reschedule to the next available time window at no extra charge. We'll contact you as soon as possible if rescheduling is needed.",
    category: "booking",
  },
  {
    id: "service-areas",
    question: "What areas do you cover?",
    answer:
      "We serve much of Wisconsin, including Milwaukee, Madison, Green Bay, Kenosha, Racine, Appleton, and many surrounding cities. Check our coverage page or contact us to confirm we serve your location.",
    category: "general",
  },
  {
    id: "how-long",
    question: "How long does service take?",
    answer:
      "Most tire installations take 45-60 minutes for a set of four. Rotate and balance typically takes 30-45 minutes. Actual time depends on the service and vehicle specifics.",
    category: "service",
  },
  {
    id: "tire-sourcing",
    question: "Do you sell tires or do I provide them?",
    answer:
      "We're a mobile installation service — you provide the tires. Order from your preferred retailer (Tire Rack, Discount Tire, Amazon, etc.) and have them shipped to your location. We'll handle the installation.",
    category: "general",
  },
  {
    id: "payment",
    question: "How does payment work?",
    answer:
      "We accept all major credit cards, debit cards, and cash. Payment is due upon completion of service. You'll receive a digital receipt for your records.",
    category: "payment",
  },
  {
    id: "deposit",
    question: "Is a deposit required?",
    answer:
      "A deposit may be required to reserve your appointment window, especially for same-day or next-day service. The deposit is applied to your final balance.",
    category: "payment",
  },
  {
    id: "cancellation",
    question: "What's your cancellation policy?",
    answer:
      "We understand plans change. Cancel or reschedule at least 24 hours before your appointment for a full refund of any deposit. Late cancellations may forfeit the deposit.",
    category: "booking",
  },
  {
    id: "fleet-services",
    question: "Do you offer fleet services?",
    answer:
      "Yes! We work with businesses managing multiple vehicles. Fleet customers get priority scheduling, centralized billing options, and volume pricing. Contact us for fleet pricing.",
    category: "general",
  },
];

export const faqsByCategory = {
  service: faqs.filter((faq) => faq.category === "service"),
  booking: faqs.filter((faq) => faq.category === "booking"),
  payment: faqs.filter((faq) => faq.category === "payment"),
  general: faqs.filter((faq) => faq.category === "general"),
};

export const previewFaqs = faqs.slice(0, 3);
