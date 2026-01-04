import BenefitsHome from "@/components/benefits";
import { FloorCostCalculator } from "@/components/calculator";
import { ContactSection } from "@/components/contact-section";
import { FlooringGallery } from "@/components/gallery";
import { FlooringHero } from "@/components/hero-section";
import { HowItWorks } from "@/components/process";
import { Reviews } from "@/components/testimonials";
import content from "@/content/content.json";

export default function Home() {
  const { theme, pages } = content;
  return (
    <main className="min-h-screen">
      <FlooringHero
        {...pages.home["hero-home"]}
        primary={theme["primary-color"]}
        secondary={theme.secondary}
        base={theme.baseColor}
      />
      <Reviews
        {...pages.home["review-data"]} // spreads heading, subheading, reviews, ctaLabel, ctaHref
        base={theme.baseColor}
        secondary={theme.secondary}
      />
      <BenefitsHome />
      <HowItWorks />
      <FlooringGallery
        {...pages.home["flooring-gallery"]}
        base={theme.baseColor}
        secondary={theme.secondary}
      />
      <FloorCostCalculator />
      <ContactSection
        {...pages.home["contact-section"]}
        base={theme.baseColor}
        secondary={theme.secondary}
      />
    </main>
  );
}
