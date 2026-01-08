import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Reviews & Proof",
  description:
    "See what customers are saying about Don's Mobile Tire. Real reviews, real results from our mobile tire service in Wisconsin.",
};

const proofPoints = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Professional Installation",
    description: "Every tire torqued to manufacturer specifications for your safety.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "On-Time Arrival",
    description: "We show up when we say we will, respecting your time.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "No hidden fees. You know what you're paying before we start.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Digital Documentation",
    description: "Receive a digital receipt and service record for every job.",
  },
];

// Placeholder testimonials - these would be replaced with real reviews
const testimonials = [
  {
    name: "Coming Soon",
    location: "Wisconsin",
    rating: 5,
    text: "We're collecting reviews from satisfied customers. Check back soon or be one of our first reviewers!",
    date: "",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Reviews & Proof"
          subtitle="Real work, real results. See why customers trust us with their tire service."
        />
      </Section>

      {/* Proof Points */}
      <Section background="white">
        <SectionHeader
          title="What Sets Us Apart"
          subtitle="Our commitment to quality service"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <Card key={index} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-green-100 p-4 text-green-600 dark:bg-green-900/50 dark:text-green-400">
                {point.icon}
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                {point.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reviews Section */}
      <Section background="gray">
        <SectionHeader
          title="Customer Reviews"
          subtitle="What our customers are saying"
        />

        <div className="mx-auto max-w-3xl">
          {/* Placeholder for reviews */}
          <Card className="text-center">
            <div className="mb-4 inline-flex rounded-full bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Reviews Coming Soon
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              We&apos;re just getting started and collecting feedback from our customers.
              Book a service today and be one of our first reviewers!
            </p>
            <Button href="/book">Book Your Service</Button>
          </Card>
        </div>
      </Section>

      {/* Photo Gallery Placeholder */}
      <Section background="white">
        <SectionHeader
          title="Photo Gallery"
          subtitle="See our work in action"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-500">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Photos of completed jobs coming soon
        </p>
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
