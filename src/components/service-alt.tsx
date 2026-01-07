import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ListItem = {
  text: string;
};

type ServiceBlock = {
  title: string;
  items: ListItem[];
};

type ServiceSectionProps = {
  id?: string;
  badge: string;
  heading: string;
  description: string;
  leftBlock: ServiceBlock;
  rightBlock: ServiceBlock;
  noteTitle: string;
  noteText: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function ServiceSectionAlt({
  id,
  badge,
  heading,
  description,
  leftBlock,
  rightBlock,
  noteTitle,
  noteText,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="py-20 bg-white" id={id}>
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className="lg:w-1/2">
            <span className="inline-block bg-primary-light text-dark-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              {badge}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>

            <p className="text-lg text-secondary-600 mb-8">{description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[leftBlock, rightBlock].map((block, idx) => (
                <div key={idx}>
                  <h3 className="font-bold mb-3">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-primary mt-1 mr-2 text-sm"
                          />
                        </span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-primary-light border-l-4 border-dark p-4 rounded-r-lg mb-8">
              <h4 className="font-bold text-dark-primary-500 mb-2">
                {noteTitle}
              </h4>
              <p className="text-secondary-700">{noteText}</p>
            </div>

            <a
              href={ctaHref}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg"
            >
              {ctaText}
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
