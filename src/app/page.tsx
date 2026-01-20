"use client"; // <-- THIS IS CRUCIAL

import { useRouter } from "next/navigation";
import BenefitsHome from "@/components/benefits";
import { FloorCostCalculator } from "@/components/calculator";
import { ContactSection } from "@/components/contact-section";
import { FlooringGallery } from "@/components/gallery";
import { FlooringHero } from "@/components/hero-section";
import { HowItWorks } from "@/components/process";
import { ServicesSection } from "@/components/services";
import { Reviews } from "@/components/testimonials";
import content from "@/content/content.json";

export default function Home() {
  const router = useRouter();

  function handleLeadSubmit(link: string) {
    router.push(link);
  }
  const { pages } = content;

  return (
    <main className="min-h-screen">
      <FlooringHero
        {...pages.home["hero-home"]}
        onPrimaryClick={() => handleLeadSubmit("tel:0417696602")}
        onSecondaryClick={() => handleLeadSubmit("contact")}
      />
      <Reviews
        {...pages.home["review-data"]} // spreads heading, subheading, reviews, ctaLabel, ctaHref
      />
      <BenefitsHome />
      <HowItWorks />
      <FlooringGallery {...pages.home["flooring-gallery"]} />
      {/* <FloorCostCalculator /> */}
      <ServicesSection {...pages.services.featuredServicesSection} />
      <ContactSection {...pages.home["contact-section"]} />
    </main>
  );
}
