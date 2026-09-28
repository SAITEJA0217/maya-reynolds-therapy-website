import type { Metadata } from "next";
import localFont from "next/font/local";

/* Closest open-licence matches to the reference's type (see docs/reference-spec.md). */
const newsreader = localFont({
  src: [
    { path: "../fonts/Newsreader.woff2", weight: "200 800", style: "normal" },
    { path: "../fonts/Newsreader-Italic.woff2", weight: "200 800", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});
const mulish = localFont({
  src: [
    { path: "../fonts/Mulish.woff2", weight: "200 900", style: "normal" },
    { path: "../fonts/Mulish-Italic.woff2", weight: "200 900", style: "italic" },
  ],
  variable: "--font-mulish",
  display: "swap",
});
const msMadi = localFont({
  src: "../fonts/MsMadi.woff2",
  weight: "400",
  variable: "--font-ms-madi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reference clone — structural study",
  robots: { index: false, follow: false },
};

export default function ReferenceLayout({ children }: LayoutProps<"/reference">) {
  return (
    <div
      data-theme="reference"
      className={`${newsreader.variable} ${mulish.variable} ${msMadi.variable} bg-canvas font-body text-body`}
    >
      {children}
    </div>
  );
}
