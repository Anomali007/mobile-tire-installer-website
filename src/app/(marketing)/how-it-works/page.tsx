import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Book mobile tire service in 4 easy steps. Pick your service, choose your time, confirm your booking, and we arrive at your location.",
};

const steps = [
  {
    number: "1",
    title: "Pick your service",
    description:
      "Choose the service you need — new tire installation, rotation and balance, TPMS service, or flat repair. It only takes a minute to select what you need.",
    details: [
      "Browse our service options",
      "Select what your vehicle needs",
      "No shop visit required",
    ],
  },
  {
    number: "2",
    title: "Choose your location + time window",
    description:
      "Tell us where and when works best for you. We come to your home, workplace, or wherever you're parked in Wisconsin.",
    details: [
      "Enter your address",
      "Pick a convenient time window",
      "Morning, afternoon, or evening options",
    ],
  },
  {
    number: "3",
    title: "Confirm your booking",
    description:
      "Review your service details and confirm. You'll receive a confirmation with all the information you need, plus updates as your appointment approaches.",
    details: [
      "Review service summary",
      "Receive confirmation email/text",
      "Get arrival updates",
    ],
  },
  {
    number: "4",
    title: "We arrive and get it done",
    description:
      "Our technician arrives at your location fully equipped. We handle everything professionally, leaving you with a clean finish and digital receipt.",
    details: [
      "Professional on-site service",
      "Torque to manufacturer specs",
      "Digital receipt provided",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="How It Works"
          subtitle="Getting mobile tire service is simple. Here's what to expect."
        />
      </Section>

      <Section background="white">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid items-start gap-8 md:grid-cols-12"
            >
              {/* Step number */}
              <div className="md:col-span-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-10">
                <Card>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <svg
                          className="h-4 w-4 text-blue-500"
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
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What to have ready */}
      <Section background="gray">
        <SectionHeader
          title="What to have ready"
          subtitle="A few things to prepare before your appointment"
        />

        <div className="mx-auto max-w-2xl">
          <Card>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  1
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Safe, flat parking spot
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A level surface where we can safely work on your vehicle
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  2
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Wheel lock key (if applicable)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If your vehicle has locking lug nuts, have the key ready
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  3
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Your tires (for new installs)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Have your new tires delivered to your location before the appointment
                  </p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready to book?
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Get started with your mobile tire service
          </p>
          <div className="mt-6">
            <Button href="/book" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
