export type { Service } from "@/data/services";
export type { FAQ } from "@/data/faqs";
export type { CoverageArea } from "@/data/coverage-areas";
export type { PricingItem, PricingCategory } from "@/data/pricing";
export type { NavItem } from "@/data/navigation";
export type { SiteConfig } from "@/data/site";

export interface BookingFormData {
  serviceType: "new-tire" | "rotate-balance" | "tpms" | "flat-repair";
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  preferredDate: string;
  preferredTime: "morning" | "afternoon" | "evening";
  vehicleInfo?: string;
  notes?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
