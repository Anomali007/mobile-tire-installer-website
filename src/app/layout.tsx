import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Don's Mobile Tire | Mobile Tire Service in Wisconsin",
    template: "%s | Don's Mobile Tire",
  },
  description:
    "Mobile tire installation service in Wisconsin. We come to you for tire installs, rotations, balancing, and TPMS service. Skip the shop!",
  keywords: [
    "mobile tire service",
    "tire installation",
    "Wisconsin tire service",
    "mobile tire repair",
    "tire rotation",
    "TPMS service",
  ],
  authors: [{ name: "Don's Mobile Tire" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Don's Mobile Tire",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
