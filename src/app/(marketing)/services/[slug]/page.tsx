import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.fullDescription,
  };
}

const iconMap = {
  tire: (
    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
    </svg>
  ),
  rotate: (
    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  sensor: (
    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  flat: (
    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      {/* Hero */}
      <Section background="gradient">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              {iconMap[service.icon]}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {service.fullDescription}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book" size="lg">
                {service.cta}
              </Button>
              <Button variant="outline" size="lg" href={`tel:${siteConfig.phone}`}>
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Placeholder for service image */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10" />
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section background="white">
        <SectionHeader
          title="What's Included"
          subtitle="Everything you get with this service"
        />

        <div className="mx-auto max-w-2xl">
          <Card>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 shrink-0 text-green-500"
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
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* How It Works for this service */}
      <Section background="gray">
        <SectionHeader
          title="How It Works"
          subtitle="Simple process from booking to completion"
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              1
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Book Online</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Select {service.title.toLowerCase()} and choose your preferred time and location.
            </p>
          </Card>
          <Card className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              2
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">We Come to You</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Our technician arrives at your location with all necessary equipment.
            </p>
          </Card>
          <Card className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              3
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Done Right</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Professional service completed on-site with a digital receipt provided.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready for {service.title.toLowerCase()}?
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Book your appointment today and we&apos;ll come to you.
          </p>
          <div className="mt-6">
            <Button href="/book" size="lg">
              {service.cta}
            </Button>
          </div>
        </div>
      </Section>

      {/* Other Services */}
      <Section background="gray">
        <SectionHeader
          title="Other Services"
          subtitle="Explore our full range of mobile tire services"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {otherServices.map((otherService) => (
            <Link key={otherService.id} href={`/services/${otherService.slug}`}>
              <Card hover className="h-full">
                <div className="mb-3 inline-flex rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  {iconMap[otherService.icon]}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  {otherService.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {otherService.shortDescription}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
