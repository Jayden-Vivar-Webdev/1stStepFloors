"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TradieHero } from "@/components/hero-services";
import content from "@/content/content.json";
import { ServicesSection } from "@/components/services";
import { ProcessStepsSection } from "@/components/steps-service";
import ServiceRight from "@/components/service-first";
import ServiceSection from "@/components/service-alt";
import ServiceCenterSection from "@/components/service-center";

type Service = {
  title: string;
  summary: string;
  features: string[];
  ctaLabel?: string;
  image?: string;
  imageAlt?: string;
};

type Testimonial = {
  quote: string;
  customer: string;
  location: string;
};

const heroData = {
  eyebrow: "Trusted local tradies",
  headline: "Reliable trades & maintenance done right",
  description:
    "From urgent call-outs to scheduled upkeep, we deliver quality workmanship, transparent pricing, and friendly service.",
  primaryCta: {
    label: "Book a site visit",
    href: "/contact",
  },
  secondaryCta: {
    label: "Call 0417 696 602",
    href: "tel:0417696602",
  },
};

const services: Service[] = [
  {
    title: "Emergency repairs",
    summary: "24/7 response for electrical, plumbing, and structural issues.",
    features: ["Rapid dispatch", "Licensed experts", "Upfront pricing"],
    ctaLabel: "Request emergency help",
  },
  {
    title: "Scheduled maintenance",
    summary: "Preventive checks that keep your assets safe and compliant.",
    features: [
      "Custom maintenance plans",
      "Detailed reporting",
      "Flexible hours",
    ],
    ctaLabel: "Plan maintenance",
  },
  {
    title: "Installations & upgrades",
    summary:
      "Modern upgrades for residential, commercial, and industrial sites.",
    features: [
      "Full project management",
      "Quality materials",
      "Safety assured",
    ],
    ctaLabel: "Start a project",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Obligation-free quote",
    description:
      "Share your job details, photos, or plans for a same-day estimate.",
  },
  {
    step: "02",
    title: "On-site assessment",
    description:
      "We inspect, confirm scope, and finalise timeline before starting.",
  },
  {
    step: "03",
    title: "Workmanship guarantee",
    description:
      "Certified tradies complete the job with full clean-up and warranty.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Top-notch work. They showed up on time, explained everything, and left the site spotless.",
    customer: "Hannah P.",
    location: "Richmond",
  },
  {
    quote:
      "Our factory fit-out was on budget and ahead of schedule. Highly recommend this crew.",
    customer: "Liam R.",
    location: "Sunshine West",
  },
];

export default function ServicesPage() {
  const { pages } = content;
  return (
    <main className="min-h-screen bg-slate-50">
      <TradieHero
        image={pages.services.hero.image}
        alt={pages.services.hero.alt}
        headline={pages.services.hero.headline}
        description={pages.services.hero.description}
        primaryCta={{
          label: pages.services.hero.primaryCta.label,
          href: pages.services.hero.primaryCta.href,
        }}
        secondaryCta={{
          label: pages.services.hero.secondaryCta.label,
          href: pages.services.hero.secondaryCta.href,
        }}
      />
      {/* <ServicesSection
        title={pages.services.featuredServicesSection.title}
        subtitle={pages.services.featuredServicesSection.subtitle}
        services={pages.services.featuredServicesSection.services}
      /> */}
      <ServiceRight
        {...pages.services.sectionServices.firstService}
        theme="light"
      />
      <ServiceSection {...pages.services.sectionServices.secondService} />
      <ServiceCenterSection
        {...pages.services.sectionServices.thirdService}
        theme="light"
      />
      <ProcessStepsSection steps={pages.services.processStepsSection.steps} />
    </main>
  );
}
