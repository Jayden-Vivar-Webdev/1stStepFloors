// app/components/how-it-works.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Ruler, Layers, Hammer } from "lucide-react";
import Link from "next/link";
import content from "@/content/content.json";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// steps in your JSON have icon: "ClipboardCheck" etc.
const iconMap = LucideIcons;

export function HowItWorks() {
  const { theme, pages } = content;
  return (
    <section className="bg-white py-30" id="how-it-works">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-3">
          <p
            className={`inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white`}
          >
            {pages.home["how-it-works"].badgeText}
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {pages.home["how-it-works"].headline}
          </h2>
          <p className="max-w-2xl text-slate-600">
            {pages.home["how-it-works"].subheadline}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pages.home["how-it-works"].steps.map(
            ({ title, desc, icon }, idx) => {
              const IconComponent = iconMap[
                icon as keyof typeof iconMap
              ] as LucideIcon;

              return (
                <Card
                  key={title}
                  className="group relative overflow-hidden border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
                >
                  <div className={`card-top-border`} />
                  <CardContent className="space-y-4 p-5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-slate-950`}
                      >
                        {idx + 1}
                      </span>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full process-card-icon`}
                      >
                        <IconComponent size={18} strokeWidth={2} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className={`rounded-lg bg-primary px-6 py-3 text-slate-950 shadow-lg hover:bg-primary hover:shadow-xl transition-all duration-200`}
          >
            <Link href="#contact">{pages.home["how-it-works"].ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
