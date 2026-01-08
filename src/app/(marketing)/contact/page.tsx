import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { ContactForm } from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Don's Mobile Tire. Call, text, or send us a message. We're here to help with your mobile tire service needs.",
};

export default function ContactPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Contact Us"
          subtitle="Have questions? We're here to help."
        />
      </Section>

      <Section background="white">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Phone */}
            <Card>
              <div className="mb-3 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                Call or Text
              </h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-lg text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Available during business hours
              </p>
            </Card>

            {/* Email */}
            <Card>
              <div className="mb-3 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {siteConfig.email}
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                We typically respond within 1 business day
              </p>
            </Card>

            {/* Hours */}
            <Card>
              <div className="mb-3 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Business Hours
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Monday - Friday</span>
                  <span>{siteConfig.hours.weekday}</span>
                </li>
                <li className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Saturday</span>
                  <span>{siteConfig.hours.saturday}</span>
                </li>
                <li className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Sunday</span>
                  <span>{siteConfig.hours.sunday}</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                Send us a message
              </h3>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
