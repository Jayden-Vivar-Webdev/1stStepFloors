import BenefitsHome from "@/components/benefits";
import { FloorCostCalculator } from "@/components/calculator";
import { ContactSection } from "@/components/contact-section";
import { FlooringGallery } from "@/components/gallery";
import { FlooringHero } from "@/components/hero-section";
import { HowItWorks } from "@/components/process";
import { FacebookReviews } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <FlooringHero ctaHidden={true} />
      <FacebookReviews variant="light" className="mt-20" />
      <BenefitsHome />
      <HowItWorks />
      <FlooringGallery />
      <FloorCostCalculator />
      <ContactSection ctaHidden={true} />
    </main>
  );
}
