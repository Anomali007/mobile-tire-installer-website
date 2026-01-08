import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}. Read our terms and conditions for using our mobile tire services.`,
};

export default function TermsPage() {
  return (
    <Section background="white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Last updated: January 2025
        </p>

        <div className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Agreement to Terms
            </h2>
            <p>
              By accessing or using {siteConfig.name}&apos;s services, you agree to be
              bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Services Provided
            </h2>
            <p className="mb-4">
              {siteConfig.name} provides mobile tire installation, rotation,
              balancing, TPMS service, and related automotive services at customer
              locations within our service area.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Services are performed on customer-provided tires unless otherwise agreed</li>
              <li>Service availability depends on location, scheduling, and weather conditions</li>
              <li>We reserve the right to refuse service if safety conditions are not met</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Booking and Scheduling
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Appointments are subject to availability and confirmation</li>
              <li>A deposit may be required to secure your appointment</li>
              <li>You are responsible for providing accurate contact and location information</li>
              <li>
                Please ensure a safe, level parking area is available for service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Customer Responsibilities
            </h2>
            <p className="mb-4">When booking our services, you agree to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide accurate vehicle and contact information</li>
              <li>Ensure the vehicle is accessible at the scheduled time</li>
              <li>Provide wheel lock keys if your vehicle has them</li>
              <li>Inform us of any known vehicle issues that may affect service</li>
              <li>Ensure the service location is safe and suitable for work</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Payment Terms
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Prices are provided before service begins</li>
              <li>Payment is due upon completion of service</li>
              <li>We accept major credit cards, debit cards, and cash</li>
              <li>Deposits are applied to the final service total</li>
              <li>Additional charges may apply for services beyond the original scope</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Cancellation Policy
            </h2>
            <p>
              Please see our{" "}
              <a
                href="/refunds"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Cancellation & Refund Policy
              </a>{" "}
              for details on cancellations, rescheduling, and refunds.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Limitation of Liability
            </h2>
            <p>
              {siteConfig.name} is not liable for any indirect, incidental, special,
              or consequential damages arising from use of our services. Our total
              liability shall not exceed the amount paid for the service in question.
              We are not responsible for pre-existing vehicle conditions or damage not
              caused by our service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Service Warranty
            </h2>
            <p>
              We stand behind our workmanship. If you experience any issues with our
              service, please contact us within 30 days and we will work to resolve
              the issue. This warranty covers our labor only and does not cover tire
              defects or normal wear.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Weather and Safety
            </h2>
            <p>
              We reserve the right to reschedule appointments due to inclement weather
              or unsafe conditions. Customer and technician safety is our priority.
              We will contact you as soon as possible if rescheduling is necessary.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service at any time. Continued use of our
              services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Phone:</strong>{" "}
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
          </section>
        </div>
      </div>
    </Section>
  );
}
