import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import content from "@/content/content.json";
import Footer from "@/components/footer";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const defaultTitle =
  "1st Step Flooring | Premium Flooring Installations Across Sydney";
const defaultDescription =
  "Hybrid timber, laminate, and herringbone flooring expertly installed with dust-free finishes, transparent pricing, and fast callouts across Sydney.";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: defaultTitle,
    template: "%s | 1st Step Flooring",
  },
  description: defaultDescription,
  applicationName: "1st Step Flooring",
  authors: [{ name: "1st Step Flooring" }],
  creator: "1st Step Flooring",
  keywords: [
    "flooring installation Sydney",
    "hybrid timber flooring",
    "laminate flooring",
    "herringbone flooring",
    "commercial flooring contractors",
    "flooring quote Sydney",
    "1st Step Flooring",
  ],
  category: "business",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl || "/",
    siteName: "1st Step Flooring",
    images: [
      {
        url: "/images/site-og.png",
        width: 1200,
        height: 630,
        alt: "Premium flooring installation by 1st Step Flooring",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/site-og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: siteUrl
    ? {
        canonical: "/",
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pages } = content;
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NavBar />
        {children}
        <Footer />
        <div className="fixed bottom-4 right-5 z-50">
          <a
            href={`tel:${pages.home["hero-home"].phoneNumber}`}
            className="block"
            aria-label="Call Now Button"
          >
            <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="svg-inline--fa fa-phone text-white w-1/2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
