import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FeatureItem = {
  title: string;
  description: string;
};

type DeliveryOption = {
  title: string;
  description: string;
};

type ServiceRightSectionProps = {
  id?: string;
  badge: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: FeatureItem[];
  deliveryTitle: string;
  deliveryOptions: DeliveryOption[];
  ctaText: string;
  ctaHref: string;
  theme?: "light" | "dark"; // <-- optional theme
};

export default function ServiceRightSection({
  id,
  badge,
  heading,
  description,
  imageSrc,
  imageAlt,
  features,
  deliveryTitle,
  deliveryOptions,
  ctaText,
  ctaHref,
  theme = "light", // default to light
}: ServiceRightSectionProps) {
  // Define colors based on theme
  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-slate-950" : "bg-white";
  const textColor = isDark ? "text-slate-100" : "text-slate-800";
  const secondaryTextColor = isDark ? "text-slate-400" : "text-slate-600";
  const borderColor = isDark ? "border-slate-800" : "border-gray-100";
  const badgeBg = isDark ? "bg-primary" : "bg-primary-light";
  const badgeText = isDark ? "text-white" : "text-dark-primary";

  return (
    <section className={`py-20 ${bgColor}`} id={id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <div
              className={`relative rounded-xl overflow-hidden shadow-lg ${borderColor}`}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <span
              className={`inline-block ${badgeBg} ${badgeText} px-4 py-1 rounded-full text-sm font-medium mb-4`}
            >
              {badge}
            </span>

            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textColor}`}>
              {heading}
            </h2>

            <p className={`text-lg mb-8 ${textColor}`}>{description}</p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start">
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className={`text-primary mt-1 mr-2 text-sm`}
                    />
                  </span>
                  <div className="ml-0">
                    <h3 className={`text-lg font-bold mb-1 ${textColor}`}>
                      {feature.title}
                    </h3>
                    <p className={`${secondaryTextColor}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Options */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>
                {deliveryTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliveryOptions.map((option, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-lg shadow-md ${bgColor} ${borderColor}`}
                  >
                    <h4 className={`font-bold mb-2 ${textColor}`}>
                      {option.title}
                    </h4>
                    <p className={`text-sm ${secondaryTextColor}`}>
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={ctaHref}
              className="inline-flex bg-primary text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
