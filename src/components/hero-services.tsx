"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  alt: string;
};

export function TradieHero({
  eyebrow = "Trusted local tradies",
  headline,
  description,
  primaryCta,
  secondaryCta,
  image,
  alt,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
        <div className="max-w-xl">
          <Badge className="mb-4 bg-amber-500/10 text-amber-300">
            {eyebrow}
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {headline.split(" ").map((word, idx) =>
              word.toLowerCase() === "maintenance" ? (
                <span key={idx} className="text-primary">
                  {word}{" "}
                </span>
              ) : (
                <span key={idx}>{word} </span>
              )
            )}
          </h1>
          <p className="mt-4 text-lg text-slate-200">{description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild className="text-slate-950">
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 border-white/40 bg-transparent text-white hover:border-white cursor-pointer"
                asChild
              >
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
