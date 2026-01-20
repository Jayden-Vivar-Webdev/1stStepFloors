import type { Metadata } from "next";
import type { ReactNode } from "react";

const servicesTitle =
  "Services | Reliable Trades & Maintenance | 1st Step Flooring";
const servicesDescription =
  "Emergency repairs, scheduled maintenance, and installation upgrades with licensed tradies, transparent pricing, and fast response across Sydney.";

export const metadata: Metadata = {
  title: servicesTitle,
  description: servicesDescription,
  keywords: [
    "emergency repairs Sydney",
    "maintenance services",
    "installation upgrades",
    "licensed tradies",
    "1st Step Flooring services",
  ],
  openGraph: {
    title: servicesTitle,
    description: servicesDescription,
    url: "/services",
    type: "website",
    images: [
      {
        url: "/images/site-og.png",
        width: 1200,
        height: 630,
        alt: "Flooring specialists providing maintenance and installation services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: servicesTitle,
    description: servicesDescription,
    images: ["/images/site-og.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
