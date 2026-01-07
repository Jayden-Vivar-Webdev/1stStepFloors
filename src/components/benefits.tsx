import BenefitsSection from "./reusable/benefits-section";
import content from "@/content/content.json";
export const BenefitsSectionData = [
  { title: "Satisfaction Guarantee", stat: "100%" },
  { title: "Support Availability", stat: "24/7" },
  { title: "Australian Owned", stat: "100%" },
  { title: "Google Reviews", stat: "5/5" },
];

export default function BenefitsHome() {
  const { pages } = content;

  return <BenefitsSection {...pages.home["benefits-section"]} />;
}
