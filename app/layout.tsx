import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { practice, seo } from "@/data/site";
import { siteUrl } from "@/lib/siteUrl";

/* Self-hosted variable fonts: no third-party requests, no layout shift. */
const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/Fraunces-Italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = localFont({
  src: "./fonts/DMSans.woff2",
  weight: "300 700",
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: practice.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: practice.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds' sunlit therapy office in Santa Monica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f1ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
