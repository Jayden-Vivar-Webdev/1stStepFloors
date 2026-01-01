// app/components/how-it-works.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Ruler, Layers, Hammer } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Book your estimate",
    desc: "Tell us about your space and ideal timeline. We’ll confirm a site visit within 24 hours.",
    icon: ClipboardCheck,
  },
  {
    title: "On-site measurements",
    desc: "Our specialists inspect subfloors, measure precisely, and flag any prep work needed.",
    icon: Ruler,
  },
  {
    title: "Select materials",
    desc: "Choose from curated hardwood, LVP, tile, or laminate samples tailored to your lifestyle.",
    icon: Layers,
  },
  {
    title: "Expert installation",
    desc: "Certified installers complete the job dust-free, on schedule, and walk you through care tips.",
    icon: Hammer,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-30" id="how-it-works">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Process
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            How our flooring installation works
          </h2>
          <p className="max-w-2xl text-slate-600">
            A transparent four-step workflow built to minimize downtime and keep
            every detail on schedule.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <Card
              key={title}
              className="group relative overflow-hidden border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-500" />
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-slate-950">
                    {idx + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-40 text-amber-500 ring-1 ring-amber-200 transition group-hover:bg-amber-500 group-hover:text-white">
                    <Icon size={18} strokeWidth={2} />
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
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-amber-400 px-6 py-3 text-slate-950 shadow-lg hover:bg-amber-400 hover:shadow-xl transition-all duration-200"
          >
            <Link href="#estimate-form">Book a free estimate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
