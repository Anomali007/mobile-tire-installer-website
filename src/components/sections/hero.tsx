import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pb-16 pt-12 dark:from-gray-900 dark:to-gray-950 md:pb-24 md:pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Mobile Tire Service —{" "}
            <span className="text-blue-600 dark:text-blue-400">
              We Come To You
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            Skip the shop. Get tires installed at your home, work, or wherever
            you&apos;re parked in {siteConfig.serviceArea}. Upfront pricing,
            easy scheduling, and pro installation.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`tel:${siteConfig.phone}`}
            >
              Call/Text {siteConfig.phoneDisplay}
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Fast scheduling &bull; Clear pricing &bull; On-site service
          </p>
        </div>
      </Container>
    </section>
  );
}
