import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Partners",
  description: `Partner with ${siteConfig.name}. We work with tow companies, tire retailers, auto shops, and more to provide comprehensive tire service.`,
};

const partnerTypes = [
  {
    title: "Tow Companies",
    description:
      "Partner with us to offer your customers mobile tire service. When a customer needs more than a tow, we can help with on-site tire repair and installation.",
    benefits: [
      "Referral program available",
      "Quick response for your customers",
      "Professional service representation",
    ],
  },
  {
    title: "Tire Retailers",
    description:
      "Sell tires without the installation overhead. We handle the mobile installation so you can focus on sales.",
    benefits: [
      "Expand your service offerings",
      "No installation equipment needed",
      "Flexible scheduling for your customers",
    ],
  },
  {
    title: "Auto Dealerships",
    description:
      "Offer mobile tire service to your customers as a value-add. We can service vehicles at your lot or at customer locations.",
    benefits: [
      "Enhance customer experience",
      "Fleet service available",
      "Volume pricing options",
    ],
  },
  {
    title: "Property Managers",
    description:
      "Provide a valuable service to your tenants and residents. We can service vehicles on-site at apartment complexes and office parks.",
    benefits: [
      "Tenant/resident amenity",
      "On-site service at your property",
      "Scheduled regular visits available",
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Partner With Us"
          subtitle="Join our network of partners to provide better tire service to your customers"
        />
      </Section>

      {/* Why Partner */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Why Partner With {siteConfig.name}?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We believe in building strong relationships with local businesses.
            By partnering together, we can provide better service to more customers
            while helping each other grow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Card className="text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Mutual Growth
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Referral opportunities that benefit both businesses
            </p>
          </Card>

          <Card className="text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Professional Service
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Quality work that reflects well on your business
            </p>
          </Card>

          <Card className="text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Reliable Response
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dependable service your customers can count on
            </p>
          </Card>
        </div>
      </Section>

      {/* Partner Types */}
      <Section background="gray">
        <SectionHeader
          title="Partnership Opportunities"
          subtitle="Ways we can work together"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {partnerTypes.map((partner, index) => (
            <Card key={index}>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {partner.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {partner.description}
              </p>
              <ul className="space-y-2">
                {partner.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg
                      className="h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Interested in Partnering?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Let&apos;s discuss how we can work together. Contact us to learn more about
            partnership opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact?subject=partnership" size="lg">
              Contact Us About Partnerships
            </Button>
            <Button variant="outline" size="lg" href={`tel:${siteConfig.phone}`}>
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
