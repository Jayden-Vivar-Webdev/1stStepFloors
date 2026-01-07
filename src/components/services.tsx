"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Service = {
  title: string;
  summary: string;
  features: string[];
  ctaLabel?: string;
  image?: string;
  imageAlt?: string;
};

type ServicesSectionProps = {
  title?: string;
  subtitle?: string;
  services: Service[];
  theme?: "light" | "dark"; // <-- optional theme
};

export const ServicesSection = ({
  title = "Our Services",
  subtitle = "Flexible services for residential, commercial, and industrial jobs.",
  services,
  theme = "light",
}: ServicesSectionProps) => {
  const isDark = theme === "dark";

  // Colors based on theme
  const sectionBg = isDark ? "bg-slate-950" : "bg-white";
  const textPrimary = isDark ? "text-slate-100" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-600";
  const cardBg = isDark ? "bg-slate-900" : "bg-white";
  const cardBorder = isDark ? "border-slate-800" : "border-slate-100";
  const featureDot = "bg-amber-500"; // stays the same
  const buttonVariant = isDark
    ? "bg-primary text-white hover:bg-primary-dark"
    : "";

  return (
    <section className={`container mx-auto px-6 py-30 ${sectionBg}`}>
      <div className="mb-10 grid gap-4 text-center">
        <p className="inline-flex mx-auto items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Services
        </p>
        <h2
          className={`text-3xl font-semibold sm:text-4xl text-slate-900${textPrimary}`}
        >
          {title}
        </h2>
        <p className={`mx-auto max-w-2xl text-base ${textSecondary}`}>
          {subtitle}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className={`flex flex-col ${cardBg} ${cardBorder}`}
          >
            <CardHeader className="space-y-3">
              <CardTitle className={textPrimary}>{service.title}</CardTitle>
              {service.image && (
                <div
                  className={`overflow-hidden rounded-lg border ${cardBorder}`}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <CardDescription className={textSecondary}>
                {service.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className={`flex items-start gap-2 text-sm ${textSecondary}`}
                >
                  <span className={`mt-1 h-2 w-2 rounded-full ${featureDot}`} />
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${buttonVariant}`}>
                {service.ctaLabel ?? "Learn more"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
