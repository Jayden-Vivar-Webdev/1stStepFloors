// components/sections/BenefitsSection.tsx
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Stat = {
  title: string;
  stat: string;
};

type BenefitsSectionProps = {
  bgImage: string;
  bgAlt: string;
  badgeText: string;
  title: [string, string];
  pointsTitle: string;
  points: string[];
  statsTitle: string;
  stats: Stat[];
};

export default function BenefitsSection({
  bgImage,
  bgAlt,
  badgeText,
  title,
  pointsTitle,
  points,
  statsTitle,
  stats,
}: BenefitsSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {/* Image half */}
      <div className="absolute inset-0 -z-10 lg:right-auto lg:w-1/2">
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-black/60 opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-10 lg:py-48">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              <span>{badgeText}</span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title[0]} <span className="text-amber-400">{title[1]}</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg font-semibold text-white">{pointsTitle}</p>
              <ul className="space-y-4 text-slate-200">
                {points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">{statsTitle}</p>
              <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <dt className="text-sm text-slate-300">{item.title}</dt>
                    <dd className="mt-2 text-3xl font-semibold text-white">
                      {item.stat}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-amber-400 text-slate-950 hover:bg-amber-300"
            >
              <Link href="/contact#contact">Book a Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
