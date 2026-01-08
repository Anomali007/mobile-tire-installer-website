export interface PricingItem {
  name: string;
  description: string;
  price: string;
  notes?: string;
}

export interface PricingCategory {
  category: string;
  description?: string;
  items: PricingItem[];
}

export const pricingCategories: PricingCategory[] = [
  {
    category: "Mobile Service Fee",
    description: "One-time fee per visit covering travel and equipment.",
    items: [
      {
        name: "Standard Service Call",
        description: "Covers travel to your location within our service area",
        price: "$25 - $50",
        notes: "Fee varies by location",
      },
    ],
  },
  {
    category: "Tire Installation",
    description: "Professional mount and balance for customer-provided tires.",
    items: [
      {
        name: "Mount & Balance (per tire)",
        description: "Includes mounting, balancing, and TPMS reset",
        price: "$25/tire",
      },
      {
        name: "Full Set (4 tires)",
        description: "Mount, balance, and TPMS reset for all four tires",
        price: "$80",
        notes: "Best value",
      },
    ],
  },
  {
    category: "Maintenance Services",
    items: [
      {
        name: "Tire Rotation",
        description: "Rotate tires to manufacturer's recommended pattern",
        price: "$35",
      },
      {
        name: "Rotate & Balance",
        description: "Rotation plus wheel balancing for all four tires",
        price: "$60",
      },
      {
        name: "Flat Repair",
        description: "Patch/plug repair for repairable punctures",
        price: "$30",
        notes: "If repairable",
      },
    ],
  },
  {
    category: "TPMS Services",
    items: [
      {
        name: "TPMS Reset/Relearn",
        description: "Reset sensors after tire service",
        price: "Included",
        notes: "With tire service",
      },
      {
        name: "TPMS Sensor Replacement",
        description: "Replace faulty sensor (per sensor)",
        price: "$50 - $75/sensor",
        notes: "Parts + labor",
      },
    ],
  },
  {
    category: "Additional Services",
    items: [
      {
        name: "Old Tire Disposal",
        description: "Environmentally responsible disposal (per tire)",
        price: "$3/tire",
      },
      {
        name: "Valve Stem Replacement",
        description: "New rubber valve stems (per stem)",
        price: "$5/stem",
      },
    ],
  },
];

export const pricingNotes = [
  "Prices may vary based on vehicle type and location",
  "A deposit may be required to reserve your appointment",
  "Final pricing confirmed before service begins",
  "We accept all major credit cards, debit, and cash",
];
