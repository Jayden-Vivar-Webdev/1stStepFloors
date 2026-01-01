import BenefitsSection from "./reusable/benefits-section";

export const BenefitsSectionData = [
  { title: "Satisfaction Guarantee", stat: "100%" },
  { title: "Support Availability", stat: "24/7" },
  { title: "Australian Owned", stat: "100%" },
  { title: "Google Reviews", stat: "5/5" },
];

export default function BenefitsHome() {
  return (
    <BenefitsSection
      bgImage="/images/featured-img.webp"
      bgAlt="Craftsman measuring hardwood planks"
      badgeText="Precision Install Workflow"
      title={["Bring designer floors", "to life without delays."]}
      pointsTitle="Why homeowners choose us"
      points={[
        "Laser-measured layouts and detailed prep reports.",
        "Dust-contained removal keeps the rest of your home livable.",
        "Dedicated PM who sends daily updates with photos.",
      ]}
      statsTitle="Results delivered"
      stats={[
        { title: "Projects finished on schedule", stat: "98%" },
        { title: "Client satisfaction rating", stat: "4.9/5" },
      ]}
    />
  );
}
