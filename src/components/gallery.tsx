// components/sections/FlooringGallery.tsx
"use client";

import Image from "next/image";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";
import { StringToBoolean } from "class-variance-authority/types";

type FlooringType = {
  name: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
};

type FlooringGalleryProps = {
  heading?: string;
  subheading?: string;
  items: FlooringType[];
  className?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  base: string;
  secondary: string;
};

export function FlooringGallery({
  heading = "Flooring styles we install",
  subheading = "From engineered hardwood to large-format tile, our crews deliver showroom finishes with job-site precision.",
  items,
  className,
  backgroundImage = "/images/herringbone-bg.png",
  backgroundAlt = "Decorative wood texture background",
  base,
  secondary,
}: FlooringGalleryProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden py-20 text-slate-900 lg:py-24",
        className
      )}
    >
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          sizes="100vw"
          priority={true}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-black/60 opacity-90" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-3 text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-primary bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-light-primary`}
          >
            <span>Selection</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-white">{subheading}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ name, subtitle, description, image, imageAlt }) => (
            <article
              key={name}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-950 bg-slate-950 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent" />
                <Badge
                  className={`absolute left-4 top-4 rounded-full bg-primary text-slate-950 backdrop-blur`}
                >
                  {name}
                </Badge>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                {subtitle && (
                  <p className={`text-sm font-semibold text-dark-primary-500`}>
                    {subtitle}
                  </p>
                )}
                {description && (
                  <p className="text-sm text-white">{description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
