import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Fleet & Commercial Services",
  description:
    "Mobile tire service for fleets and businesses. Priority scheduling, centralized billing, and volume pricing for companies managing multiple vehicles.",
};

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Priority Scheduling",
    description:
      "Get preferred time windows and faster response times for your fleet vehicles.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Centralized Billing",
    description:
      "Simplified invoicing and payment options. One bill for all your fleet services.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Volume Pricing",
    description:
      "Competitive rates for businesses with multiple vehicles. The more you service, the more you save.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Scheduled Maintenance",
    description:
      "Set up recurring service schedules to keep your fleet running smoothly.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "On-Site Service",
    description:
      "We come to your lot, depot, or job site. Minimize downtime by keeping vehicles where they need to be.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Service Records",
    description:
      "Detailed records for each vehicle. Track service history and plan future maintenance.",
  },
];

const industries = [
  "Delivery & logistics companies",
  "Property management fleets",
  "Car dealerships",
  "Rental car agencies",
  "Construction companies",
  "Landscaping businesses",
  "Sales teams with company vehicles",
  "Municipal and government fleets",
];

export default function FleetPage() {
  return (
    <>
      <Section background="gradient">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Fleet & Commercial Tire Service
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Keep your business moving with mobile tire service designed for fleets.
            We come to your location, reduce downtime, and simplify fleet maintenance.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact?subject=fleet" size="lg">
              Request Fleet Pricing
            </Button>
            <Button variant="outline" size="lg" href={`tel:${siteConfig.phone}`}>
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white">
        <SectionHeader
          title="Fleet Service Benefits"
          subtitle="Why businesses choose us for their tire service needs"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                {benefit.icon}
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section background="gray">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Trusted by businesses across Wisconsin"
        />

        <div className="mx-auto max-w-3xl">
          <Card>
            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
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
                  <span className="text-gray-700 dark:text-gray-300">{industry}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* How it works for fleets */}
      <Section background="white">
        <SectionHeader
          title="How Fleet Service Works"
          subtitle="Getting started is easy"
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              1
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tell us about your fleet size, vehicle types, and service needs.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              2
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Get Custom Pricing
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We&apos;ll create a tailored pricing plan based on your volume and requirements.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              3
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Schedule Service
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Set up recurring visits or call when you need us. We work around your schedule.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" className="text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Ready to simplify fleet tire service?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Contact us today for a custom fleet pricing quote. No obligation, just
            straightforward pricing for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact?subject=fleet"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Request Fleet Pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`tel:${siteConfig.phone}`}
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
