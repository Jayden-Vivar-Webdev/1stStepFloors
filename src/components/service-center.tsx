import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { iconMap } from "./icon-integrate";

type Feature = {
  text: string;
};

type Card = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: Feature[];
};

type ServiceCenterSectionProps = {
  id: string;
  badge: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  cards: Card[];
  ctaText: string;
  ctaHref: string;
  theme?: "light" | "dark"; // <-- optional theme
};

export default function ServiceCenterSection({
  id,
  badge,
  heading,
  description,
  imageSrc,
  imageAlt,
  imageCaption,
  cards,
  ctaText,
  ctaHref,
  theme = "light",
}: ServiceCenterSectionProps) {
  const isDark = theme === "dark";

  // Colors based on theme
  const sectionBg = isDark ? "bg-slate-950" : "bg-white";
  const textPrimary = isDark ? "text-slate-100" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-600";
  const cardBg = isDark ? "bg-slate-900" : "bg-white";
  const cardBorder = isDark ? "border-slate-800" : "border-gray-100";
  const badgeBg = isDark ? "bg-primary" : "bg-primary-light";
  const badgeText = isDark ? "text-white" : "text-dark-primary";
  const iconBg = isDark
    ? "bg-primary text-white"
    : "bg-primary-light text-primary";

  return (
    <section className={`py-20 ${sectionBg}`} id={id}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block ${badgeBg} ${badgeText} px-4 py-1 rounded-full text-sm font-medium mb-4`}
          >
            {badge}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textPrimary}`}>
            {heading}
          </h2>
          <p className={`max-w-3xl mx-auto ${textSecondary}`}>{description}</p>
        </div>

        {/* Image */}
        <div className="flex justify-center pb-10">
          <div
            className={`relative rounded-xl overflow-hidden shadow-lg ${cardBorder} max-h-200`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none" />
            <div
              className={`absolute bottom-0 left-0 right-0 ${badgeBg} p-4 text-center`}
            >
              <p className={`text-sm font-medium`}>{imageCaption}</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-8 ${cardBg} ${cardBorder}`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${iconBg}`}
                >
                  <FontAwesomeIcon
                    icon={iconMap[card.icon as string]}
                    className="text-xl"
                  />
                </div>
                <h3 className={`text-xl font-bold ${textPrimary}`}>
                  {card.title}
                </h3>
              </div>

              <p className={`${textSecondary} mb-6`}>{card.description}</p>

              <ul className="space-y-3 mb-6">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-primary mt-1 mr-2 text-sm"
                      />
                    </span>
                    <span className={textSecondary}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            {ctaText} →
          </a>
        </div>
      </div>
    </section>
  );
}
