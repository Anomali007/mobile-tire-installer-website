import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingCategories, pricingNotes } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing & Fees",
  description:
    "Transparent pricing for mobile tire services. See our service fees, tire installation costs, and more. No surprises.",
};

export default function PricingPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="No surprises — just clear, upfront pricing"
          subtitle="You'll see your service total before confirming. Here's our pricing structure."
        />
      </Section>

      <Section background="white">
        <div className="space-y-8">
          {pricingCategories.map((category) => (
            <Card key={category.category}>
              <CardTitle className="mb-2">{category.category}</CardTitle>
              {category.description && (
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              )}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                        {item.notes && (
                          <Badge variant="outline" className="text-xs">
                            {item.notes}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Notes */}
      <Section background="gray">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardTitle className="mb-4">Important Notes</CardTitle>
            <ul className="space-y-3">
              {pricingNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    {note}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Deposit info */}
      <Section background="white">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            Deposit Policy
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            A deposit may be required to reserve your appointment window, especially
            for same-day or next-day service. The deposit is applied to your final
            balance. Cancel at least 24 hours before for a full refund.
          </p>
          <Button href="/book" size="lg">
            Book Now
          </Button>
        </div>
      </Section>
    </>
  );
}
