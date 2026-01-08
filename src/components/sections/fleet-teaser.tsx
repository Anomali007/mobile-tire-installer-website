import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function FleetTeaser() {
  return (
    <Section background="dark">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Fleet & commercial tire service
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          If you manage multiple vehicles, we&apos;ll help you reduce downtime
          with scheduled mobile service, centralized billing, and priority
          windows.
        </p>
        <div className="mt-8">
          <Button
            href="/contact?subject=fleet"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900"
          >
            Request fleet pricing
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
