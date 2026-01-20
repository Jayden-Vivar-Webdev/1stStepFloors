import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const phoneNumber = "0417696602";

const followUpSteps: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "We’ll call you shortly",
    description:
      "Expect a quick call from our team to confirm access, timelines, and what you want your floors to look and feel like.",
    icon: Clock3,
  },
  {
    title: "On-site measure booked",
    description:
      "We lock in a site visit that fits your calendar, check subfloor prep, and map out any compliance details.",
    icon: Ruler,
  },
  {
    title: "Material shortlist",
    description:
      "Bring any inspiration images— we’ll curate hybrid timber, laminate, or herringbone options that match your brief.",
    icon: Sparkles,
  },
  {
    title: "Install date secured",
    description:
      "Approve the quote and we reserve your crew, send a simple prep checklist, and arrive ready to install.",
    icon: ShieldCheck,
  },
];

const heroHighlights = [
  { label: "Avg. response time", value: "Under 30 mins" },
  { label: "Site visit availability", value: "Within 7 days" },
  { label: "Projects completed", value: "1,200+" },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/flooring-types/herringbone.JPG"
          alt="Premium herringbone flooring installation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-black/90" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-light-primary backdrop-blur">
            <CheckCircle2 className="h-4 w-4" />
            <span>Request received</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                Thank you your flooring quote is locked in
              </h1>
              <p className="max-w-3xl text-lg text-slate-200">
                We’ll ring to confirm a site visit, discuss
                finishes, and keep your project on schedule with dust-free,
                detail-driven installs.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 bg-transparent text-white hover:border-white"
                asChild
              >
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back home
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-primary text-slate-950 bg-primary:hover"
              asChild
            >
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call us now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:border-white"
              asChild
            >
              <Link href="/services" className="flex items-center gap-2">
                View services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg backdrop-blur"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 backdrop-blur">
            <Sparkles className="h-5 w-5 text-light-primary" />
            <p>
              Precision installs, clean job sites, and transparent scheduling
              for homeowners, designers, and builders.
            </p>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {followUpSteps.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-light-primary ring-1 ring-primary/30 transition group-hover:bg-primary group-hover:text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-primary/30 bg-gradient-to-b from-amber-400/10 via-slate-900 to-slate-950 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-light-primary">
                Need it sooner?
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Fast-track your install or line up a builder deadline
              </h3>
              <p className="text-sm text-slate-200">
                Call or text and we’ll prioritise your project, arrange access
                with your builder, and get a crew booked without delays.
              </p>
              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-light-primary" />
                  <div>
                    <p className="font-semibold text-white">
                      Compliance-first installs
                    </p>
                    <p>We follow manufacturer and builder requirements.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 text-light-primary" />
                  <div>
                    <p className="font-semibold text-white">
                      Dust-free preparation
                    </p>
                    <p>Clean job sites and protected finishes on handover.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-primary text-slate-950 bg-primary:hover"
                asChild
              >
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-2"
                  aria-label={`Call ${phoneNumber}`}
                >
                  <Phone className="h-4 w-4" />
                  {phoneNumber}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:border-white"
                asChild
              >
                <Link href="/#flooring-gallery" className="flex items-center gap-2">
                  See our work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
