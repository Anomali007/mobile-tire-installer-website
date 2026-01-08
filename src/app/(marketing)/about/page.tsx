import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Don's Mobile Tire — your trusted mobile tire service in Wisconsin. Professional, convenient, and reliable.",
};

const values = [
  {
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
    title: "Safety First",
    description:
      "Every tire is torqued to manufacturer specifications. We follow proper procedures to ensure your safety on the road.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
    title: "Respect Your Time",
    description:
      "We show up when we say we will. No waiting around at a shop — we come to you and get the job done efficiently.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprises. You'll know exactly what you're paying before we start any work.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Customer Focused",
    description:
      "Your satisfaction matters. We communicate clearly, answer questions, and make sure you're happy with the service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="About Don's Mobile Tire"
          subtitle="Bringing professional tire service directly to you across Wisconsin"
        />
      </Section>

      {/* Story */}
      <Section background="white">
        <div className="mx-auto max-w-3xl">
          <Card>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                {siteConfig.name} was founded on a simple idea: tire service
                shouldn&apos;t mean losing half your day at a shop. We bring professional
                tire installation directly to your driveway, workplace, or wherever
                you need us.
              </p>
              <p>
                Based in Wisconsin, we serve communities across the state with the
                same quality service you&apos;d expect from a traditional shop — just
                more convenient. Our fully-equipped service vehicle has everything
                needed to mount, balance, and install tires on-site.
              </p>
              <p>
                Whether you&apos;re a busy professional, a parent juggling schedules,
                or managing a fleet of vehicles, we make tire service fit your life
                — not the other way around.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray">
        <SectionHeader
          title="What We Stand For"
          subtitle="The principles that guide our work"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Card key={index}>
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                {value.icon}
              </div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quality commitment */}
      <Section background="white">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Our Quality Commitment"
            subtitle="Professional standards, every time"
          />

          <Card>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
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
                  <strong className="text-gray-900 dark:text-white">
                    Torque to spec:
                  </strong>{" "}
                  Every lug nut is torqued to your vehicle&apos;s manufacturer
                  specifications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
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
                  <strong className="text-gray-900 dark:text-white">
                    TPMS reset:
                  </strong>{" "}
                  Tire pressure monitoring sensors properly reset after every service
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
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
                  <strong className="text-gray-900 dark:text-white">
                    Proper balancing:
                  </strong>{" "}
                  Each wheel is balanced for a smooth, vibration-free ride
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
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
                  <strong className="text-gray-900 dark:text-white">
                    Clean workspace:
                  </strong>{" "}
                  We leave your area as clean as we found it
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready to experience the difference?
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Book your mobile tire service today
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              Book Now
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
