import { ContactSection } from "@/components/contact-section";
import { FlooringHero } from "@/components/hero-section";

export default function ContactPage() {
  return (
    <>
      <FlooringHero
        ctaHidden={true}
        headline="Contact Us"
        subheadline="Get in touch with us to discuss your flooring needs."
        primaryCtaLabel="Call Now"
        secondaryCtaLabel="See Recent Projects"
        desktopSrc="/images/flooring-types/herringbone.JPG"
        mobileSrc="/images/flooring-types/herringbone.JPG"
      />
    </>
  );
}
