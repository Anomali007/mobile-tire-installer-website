import Link from "next/link";
import { siteConfig } from "@/data/site";
import { footerNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {siteConfig.name}
              </Link>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Mobile tire installation service in {siteConfig.serviceArea}. We
                come to you for tire installs, rotations, and more.
              </p>
              <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Services column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Business
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.business.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/book"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <span className="font-medium">Mon-Fri:</span>{" "}
                  {siteConfig.hours.weekday}
                </li>
                <li>
                  <span className="font-medium">Saturday:</span>{" "}
                  {siteConfig.hours.saturday}
                </li>
                <li>
                  <span className="font-medium">Sunday:</span>{" "}
                  {siteConfig.hours.sunday}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
