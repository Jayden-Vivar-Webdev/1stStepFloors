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
};

export const ServicesSection = ({
  title = "Our Services",
  subtitle = "Flexible services for residential, commercial, and industrial jobs.",
  services,
}: ServicesSectionProps) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10 grid gap-4 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl text-slate-900">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-base text-slate-600">{subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader className="space-y-3">
              <CardTitle>{service.title}</CardTitle>
              {service.image && (
                <div className="overflow-hidden rounded-lg border border-slate-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <CardDescription>{service.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {service.ctaLabel ?? "Learn more"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
