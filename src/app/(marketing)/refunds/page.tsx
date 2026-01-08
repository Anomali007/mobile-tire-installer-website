import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: `Cancellation and refund policy for ${siteConfig.name}. Learn about our policies for appointment changes and refunds.`,
};

export default function RefundsPage() {
  return (
    <Section background="white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Cancellation & Refund Policy
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Last updated: January 2025
        </p>

        <div className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
          {/* Summary Card */}
          <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
            <h2 className="mb-3 font-semibold text-blue-900 dark:text-blue-100">
              Quick Summary
            </h2>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• Cancel 24+ hours before: Full deposit refund</li>
              <li>• Cancel within 24 hours: Deposit may be forfeited</li>
              <li>• Rescheduling: Free with 24+ hours notice</li>
              <li>• Weather cancellations: Automatic reschedule, no penalty</li>
            </ul>
          </Card>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Cancellation Policy
            </h2>
            <p className="mb-4">
              We understand that plans change. Here&apos;s how our cancellation policy
              works:
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  24+ Hours Before Appointment
                </h3>
                <p className="mt-2">
                  Cancel or reschedule with no penalty. Any deposit paid will be
                  fully refunded or applied to your rescheduled appointment.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Less Than 24 Hours Before Appointment
                </h3>
                <p className="mt-2">
                  Late cancellations may result in forfeiture of the deposit. This
                  helps cover the cost of reserved time and preparation. Exceptions
                  may be made for emergencies — please contact us.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  No-Show
                </h3>
                <p className="mt-2">
                  If you&apos;re not available at the scheduled time and location without
                  prior notice, the deposit will be forfeited and a service call fee
                  may apply to future bookings.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Rescheduling
            </h2>
            <p>
              Need to change your appointment time? No problem. Rescheduling is free
              with at least 24 hours notice. Contact us by phone or email to find a
              new time that works for you. Your deposit will be applied to the new
              appointment.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Weather-Related Cancellations
            </h2>
            <p>
              If we need to cancel or reschedule due to weather conditions (rain,
              snow, extreme temperatures, etc.), we will contact you as soon as
              possible to reschedule. There is no penalty for weather-related
              cancellations, and your deposit will be applied to the rescheduled
              appointment.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Refund Policy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Deposit Refunds
                </h3>
                <p className="mt-2">
                  Deposits are refundable when you cancel at least 24 hours before
                  your scheduled appointment. Refunds are processed to the original
                  payment method within 5-7 business days.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Service Refunds
                </h3>
                <p className="mt-2">
                  If you&apos;re not satisfied with our service, please contact us within
                  48 hours. We will work to resolve any issues. Refunds for completed
                  services are evaluated on a case-by-case basis.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Partial Service
                </h3>
                <p className="mt-2">
                  If service cannot be completed due to unforeseen circumstances
                  (vehicle issues, inaccessible location, etc.), you will only be
                  charged for work completed. Any unused portion of your payment will
                  be refunded.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              How to Cancel or Reschedule
            </h2>
            <p className="mb-4">Contact us using any of these methods:</p>
            <ul className="space-y-2">
              <li>
                <strong>Phone/Text:</strong>{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Please include your name, appointment date, and reason for
              cancellation/rescheduling.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Questions?
            </h2>
            <p>
              If you have questions about our cancellation or refund policy, please
              don&apos;t hesitate to{" "}
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                contact us
              </a>
              . We&apos;re happy to help.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
