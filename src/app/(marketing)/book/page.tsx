import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { BookingForm } from "@/components/forms/booking-form";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Book your mobile tire service appointment. We come to your location in Wisconsin for tire installation, rotation, balancing, and more.",
};

export default function BookPage() {
  return (
    <>
      <Section background="gradient">
        <SectionHeader
          title="Book Mobile Tire Service"
          subtitle="Fill out the form below and we'll contact you to confirm your appointment"
        />
      </Section>

      <Section background="white">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact card */}
            <Card>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Prefer to call?
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Give us a call or text and we&apos;ll help you schedule your
                appointment.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <svg
                  className="h-5 w-5"
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
                {siteConfig.phoneDisplay}
              </a>
            </Card>

            {/* What to expect */}
            <Card>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                What to expect
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
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
                  We&apos;ll confirm your appointment within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
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
                  You&apos;ll receive arrival updates on the day of service
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
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
                  A deposit may be required to secure your appointment
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
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
                  Balance is due upon completion of service
                </li>
              </ul>
            </Card>

            {/* Service hours */}
            <Card>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Service Hours
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex justify-between">
                  <span>Mon-Fri</span>
                  <span>{siteConfig.hours.weekday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>{siteConfig.hours.saturday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>{siteConfig.hours.sunday}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
