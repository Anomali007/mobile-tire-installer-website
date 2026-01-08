import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { faqsByCategory } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about mobile tire service. Learn about our process, coverage, pricing, and more.",
};

const categoryLabels = {
  service: "Service Questions",
  booking: "Booking & Scheduling",
  payment: "Payment & Pricing",
  general: "General Questions",
};

export default function FAQPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our mobile tire service"
        />
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-12">
          {(Object.keys(faqsByCategory) as Array<keyof typeof faqsByCategory>).map(
            (category) => (
              <div key={category}>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {categoryLabels[category]}
                </h3>
                <Card>
                  <Accordion>
                    {faqsByCategory[category].map((faq) => (
                      <AccordionItem key={faq.id} title={faq.question}>
                        {faq.answer}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </div>
            )
          )}
        </div>
      </Section>

      {/* Still have questions */}
      <Section background="gray">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Still have questions?
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            We&apos;re here to help. Reach out and we&apos;ll get back to you as
            soon as possible.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Contact Us</Button>
            <Button variant="outline" href={`tel:${siteConfig.phone}`}>
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
