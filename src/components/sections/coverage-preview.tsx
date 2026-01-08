import Link from "next/link";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { majorCities, coverageDescription } from "@/data/coverage-areas";

export function CoveragePreview() {
  return (
    <Section background="white">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader
          title="Serving Wisconsin and nearby areas"
          subtitle={coverageDescription}
        />

        {/* City list */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {majorCities.map((city) => (
            <span
              key={city.name}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {city.name}
            </span>
          ))}
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
            + more areas
          </span>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button href="/coverage" variant="outline">
            Check coverage
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </Section>
  );
}
