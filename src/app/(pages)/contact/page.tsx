"use client";
import { ContactSection } from "@/components/contact-section";
import { FlooringHero } from "@/components/hero-section";
import content from "@/content/content.json";

export default function ContactPage() {
  const { theme, pages } = content;
  return (
    <>
      <ContactSection
        {...pages.home["contact-section"]}
        base={theme.baseColor}
        secondary={theme.secondary}
      />
    </>
  );
}
