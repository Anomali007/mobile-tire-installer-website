import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile tire installation, rotation, balancing, TPMS service, and flat repair. We come to you in Wisconsin.",
};

const iconMap = {
  tire: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
    </svg>
  ),
  rotate: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  sensor: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  flat: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Our Services"
          subtitle="Professional mobile tire services at your location. We bring the shop to you."
        />
      </Section>

      <Section background="white">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <Card className={index % 2 === 1 ? "bg-gray-50 dark:bg-gray-900" : ""}>
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  {/* Icon and title */}
                  <div>
                    <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                      {iconMap[service.icon]}
                    </div>
                    <CardTitle className="mb-3 text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.fullDescription}
                    </CardDescription>
                    <div className="mt-6">
                      <Button href="/book">{service.cta}</Button>
                    </div>
                  </div>

                  {/* Features */}
                  <CardContent>
                    <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
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
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready to get started?
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Book your mobile tire service today
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              Book Now
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
