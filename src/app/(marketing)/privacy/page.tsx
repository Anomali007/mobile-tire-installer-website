import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <Section background="white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Last updated: January 2025
        </p>

        <div className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Introduction
            </h2>
            <p>
              {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
              committed to protecting your personal information. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information
              when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Personal Data:</strong> Name, phone number, email address,
                and mailing address that you voluntarily provide when booking a
                service or contacting us.
              </li>
              <li>
                <strong>Vehicle Information:</strong> Vehicle make, model, year, and
                location for service purposes.
              </li>
              <li>
                <strong>Payment Information:</strong> Payment card details processed
                securely through our payment provider.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website, including IP address, browser type, and pages visited.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, operate, and maintain our services</li>
              <li>Process and complete transactions</li>
              <li>Send you service confirmations and updates</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about services, offers, and promotions</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information
              to third parties without your consent, except as described in this
              policy. We may share information with trusted service providers who
              assist us in operating our website and conducting our business,
              provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security measures
              to protect your personal information. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Cookies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your experience. You can set your browser to refuse cookies,
              but some features of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of any changes by posting the new Privacy Policy on this page and
              updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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
