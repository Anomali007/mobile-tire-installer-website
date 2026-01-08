import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950">
      <Container>
        <div className="text-center">
          <p className="text-6xl font-bold text-blue-600 dark:text-blue-400">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/">Go back home</Button>
            <Button href="/contact" variant="outline">
              Contact support
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
