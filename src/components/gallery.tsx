// components/sections/FlooringGallery.tsx
"use client";

import Image from "next/image";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";

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
  items?: FlooringType[];
  className?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
};

const defaultItems: FlooringType[] = [
  {
    name: "Engineered Hardwood",
    subtitle: "White Oak · Chevron · Matte Finish",
    description:
      "Sustainably sourced planks with precision-milled tongues for seamless installs.",
    image: "/images/flooring-types/hybrid-flooring.JPG",
    imageAlt: "Engineered hardwood flooring in modern living room",
  },
  {
    name: "Luxury Vinyl Plank (LVP)",
    subtitle: "Waterproof · Pet-friendly",
    description:
      "High-definition textures and aluminum-oxide wear layers for busy households.",
    image: "/images/flooring-types/cross-ref.JPG",
    imageAlt: "Luxury vinyl plank flooring kitchen",
  },
  {
    name: "Large-Format Tile",
    subtitle: "Porcelain · Oversized slabs",
    description:
      "Laser-leveled substrates and feather-finish skim coats keep grout lines crisp.",
    image: "/images/flooring-types/herringbone.JPG",
    imageAlt: "Large-format tile bathroom floor",
  },
  {
    name: "Herringbone & Inlays",
    subtitle: "Custom patterns · Border details",
    description:
      "We template every cut to deliver perfect reveals on premium layouts.",
    image: "/images/flooring-types/laminate.JPG",
    imageAlt: "Herringbone flooring detail",
  },
  {
    name: "Stairs & Transitions",
    subtitle: "Nosing · Wrapped treads",
    description:
      "Seamless transitions between rooms and staircases with color-matched trims.",
    image: "/images/flooring-types/simple.JPG",
    imageAlt: "Wood stairs matching flooring",
  },
  {
    name: "Commercial Spec Flooring",
    subtitle: "Retail · Offices · Hospitality",
    description:
      "Durable finishes engineered for ADA compliance, high traffic, and easy maintenance.",
    image: "/images/flooring-types/staircase-flooring.JPG",
    imageAlt: "Commercial flooring in retail space",
  },
];

export function FlooringGallery({
  heading = "Flooring styles we install",
  subheading = "From engineered hardwood to large-format tile, our crews deliver showroom finishes with job-site precision.",
  items = defaultItems,
  className,
  backgroundImage = "/images/herringbone-bg.png",
  backgroundAlt = "Decorative wood texture background",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-950 bg-slate-950 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
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
                <Badge className="absolute left-4 top-4 rounded-full bg-amber-400 text-slate-950 backdrop-blur">
                  {name}
                </Badge>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                {subtitle && (
                  <p className="text-sm font-semibold text-amber-500">
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
