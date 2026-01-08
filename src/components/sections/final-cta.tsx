import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function FinalCTA() {
  return (
    <Section background="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Ready to book mobile tire service?
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Pick your service and lock in a time window — we&apos;ll handle the
          rest.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/book" size="lg">
            Book Now
          </Button>
          <Button variant="outline" size="lg" href={`tel:${siteConfig.phone}`}>
            Call/Text {siteConfig.phoneDisplay}
          </Button>
        </div>
      </div>
    </Section>
  );
}
