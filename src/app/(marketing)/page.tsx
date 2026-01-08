import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustBadges } from "@/components/sections/trust-badges";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CoveragePreview } from "@/components/sections/coverage-preview";
import { Reviews } from "@/components/sections/reviews";
import { FleetTeaser } from "@/components/sections/fleet-teaser";
import { FAQPreview } from "@/components/sections/faq-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Mobile Tire Service in Wisconsin | ${siteConfig.name}`,
  description:
    "Skip the shop. Get tires installed at your home, work, or wherever you're parked in Wisconsin. Upfront pricing, easy scheduling, and pro installation.",
  openGraph: {
    title: `Mobile Tire Service in Wisconsin | ${siteConfig.name}`,
    description:
      "Skip the shop. Get tires installed at your home, work, or wherever you're parked in Wisconsin. Upfront pricing, easy scheduling, and pro installation.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <HowItWorks />
      <CoveragePreview />
      <Reviews />
      <FleetTeaser />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
