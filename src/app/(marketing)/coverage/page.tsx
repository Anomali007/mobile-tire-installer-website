import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { coverageAreas, majorCities } from "@/data/coverage-areas";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Coverage Area",
  description:
    "Mobile tire service across Wisconsin including Milwaukee, Madison, Green Bay, and surrounding areas. Check if we serve your location.",
};

export default function CoveragePage() {
  const otherCities = coverageAreas.filter((area) => area.type === "city");

  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Coverage Area"
          subtitle="We provide mobile tire service across Wisconsin and surrounding areas"
        />
      </Section>

      {/* Major cities */}
      <Section background="white">
        <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          Major Service Areas
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {majorCities.map((city) => (
            <Card key={city.name} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                {city.name}
              </span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Other cities */}
      <Section background="gray">
        <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          Additional Areas We Serve
        </h3>
        <div className="flex flex-wrap gap-2">
          {otherCities.map((city) => (
            <Badge key={city.name} variant="default">
              {city.name}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Not sure section */}
      <Section background="white">
        <Card className="mx-auto max-w-2xl text-center">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            Not sure if we cover your area?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Contact us with your address and we&apos;ll let you know if we can serve
            your location. We&apos;re expanding our coverage regularly.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Contact Us</Button>
            <Button variant="outline" href={`tel:${siteConfig.phone}`}>
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Card>
      </Section>

      {/* Service hours */}
      <Section background="gray">
        <div className="mx-auto max-w-2xl">
          <SectionHeader title="Service Hours" />
          <Card>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">
                  Monday - Friday
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {siteConfig.hours.weekday}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">
                  Saturday
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {siteConfig.hours.saturday}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">
                  Sunday
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {siteConfig.hours.sunday}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
