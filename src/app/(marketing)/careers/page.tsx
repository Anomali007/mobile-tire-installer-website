import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Join the Team",
  description: `Join ${siteConfig.name}. We're looking for skilled tire technicians and professionals to join our growing mobile tire service team.`,
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
    title: "Flexible Schedule",
    description: "Work hours that fit your lifestyle with advance scheduling",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Work Outdoors",
    description: "No shop walls — work at different locations throughout the day",
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
    title: "Competitive Pay",
    description: "Earn based on your skills and completed jobs",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Growth Opportunity",
    description: "Join a growing business with room to advance",
  },
];

const requirements = [
  "Experience with tire installation, rotation, and balancing",
  "Valid driver's license with clean driving record",
  "Ability to lift up to 50 lbs and work in various weather conditions",
  "Strong customer service and communication skills",
  "Reliable, punctual, and self-motivated",
  "Own transportation to job sites (preferred)",
];

export default function CareersPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Join the Team"
          subtitle="Help us bring convenient tire service to customers across Wisconsin"
        />
      </Section>

      {/* Why Join */}
      <Section background="white">
        <SectionHeader
          title="Why Work With Us?"
          subtitle="Benefits of joining the team"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                {benefit.icon}
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="gray">
        <SectionHeader
          title="Open Positions"
          subtitle="Current opportunities to join our team"
        />

        <div className="mx-auto max-w-2xl">
          <Card>
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Mobile Tire Technician
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Full-time / Part-time • Wisconsin
                </p>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
                Hiring
              </span>
            </div>

            <p className="mb-4 text-gray-600 dark:text-gray-400">
              We&apos;re looking for experienced tire technicians to join our mobile
              service team. You&apos;ll travel to customer locations to perform tire
              installations, rotations, balancing, and related services.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
              Requirements:
            </h4>
            <ul className="mb-6 space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
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
                  <span className="text-gray-600 dark:text-gray-400">{req}</span>
                </li>
              ))}
            </ul>

            <Button href="/contact?subject=careers">Apply Now</Button>
          </Card>
        </div>
      </Section>

      {/* Contractors */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Independent Contractors Welcome
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Already have your own tire equipment and want to partner with us? We work
            with independent contractors who want to expand their business. Bring your
            skills and equipment — we&apos;ll bring the customers.
          </p>
          <div className="mt-6">
            <Button href="/contact?subject=contractor" variant="outline">
              Learn About Contracting
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready to Join Us?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Send us your information and tell us about your experience. We&apos;ll be in
            touch to discuss opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact?subject=careers" size="lg">
              Apply Now
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
