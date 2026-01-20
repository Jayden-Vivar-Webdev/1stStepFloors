import type { Metadata } from "next";
import type { ReactNode } from "react";

const contactTitle =
  "Contact | Get a Flooring Quote in Sydney | 1st Step Flooring";
const contactDescription =
  "Talk with 1st Step Flooring for fast quotes, site visits, and dust-free flooring installations across Sydney.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  keywords: [
    "contact 1st Step Flooring",
    "flooring quote Sydney",
    "flooring installer near me",
    "Book site visit",
    "flooring contractor contact",
  ],
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/site-og.png",
        width: 1200,
        height: 630,
        alt: "Flooring consultation and quote with 1st Step Flooring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: ["/images/site-og.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
