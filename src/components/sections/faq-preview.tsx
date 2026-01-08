import Link from "next/link";
import { Section, SectionHeader } from "@/components/layout/section";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { previewFaqs } from "@/data/faqs";

export function FAQPreview() {
  return (
    <Section background="white">
      <SectionHeader title="Common questions" />

      <div className="mx-auto max-w-2xl">
        <Accordion>
          {previewFaqs.map((faq) => (
            <AccordionItem key={faq.id} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all FAQs
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
          </Link>
        </div>
      </div>
    </Section>
  );
}
