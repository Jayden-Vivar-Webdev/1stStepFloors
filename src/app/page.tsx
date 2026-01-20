"use client";

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
import { LeadFormData } from "@/components/hero-section";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  function handleLeadSubmit(link: string) {
    router.push(link);
  }
  const { pages } = content;

  const onSubmit = async (data: LeadFormData): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append("access_key", "363210b2-8ac0-437d-a5ee-f71b2f2d6218");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      router.push("/thank-you"); 
      return true;
    }

    return false;
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
};



  return (
    <main className="min-h-screen">
      <FlooringHero
        {...pages.home["hero-home"]}
        onPrimaryClick={() => handleLeadSubmit("tel:0417696602")}
        onSecondaryClick={() => handleLeadSubmit("contact")}
        onLeadSubmit={onSubmit}
      />
      
      <Reviews
        {...pages.home["review-data"]} // spreads heading, subheading, reviews, ctaLabel, ctaHref
      />
      <BenefitsHome />
      <HowItWorks />
      <FlooringGallery {...pages.home["flooring-gallery"]} />
      {/* <FloorCostCalculator /> */}
      <ServicesSection {...pages.services.featuredServicesSection} />
      <ContactSection {...pages.home["contact-section"]} onLeadSubmit={onSubmit} />
    </main>
  );
}
