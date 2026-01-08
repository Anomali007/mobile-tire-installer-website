import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
}

export function createMetadata({ title, description, path = "" }: MetadataProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `https://donsmobiletire.com${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
