"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Star } from "lucide-react";
import clsx from "clsx";

type Stat = { label: string; value: string };
type LeadFormData = { name: string; email: string; phone: string };

type ContactSectionProps = {
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  ctaHidden: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  desktopSrc: string;
  mobileSrc: string;
  backgroundAlt: string;
  phoneNumber: string;
  formHeadline: string;
  formSubheadline: string;
  onLeadSubmit: (data: LeadFormData) => boolean | Promise<boolean>;
  className?: string;
};

export const ContactSection = ({
  headline,
  subheadline,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryClick,
  onSecondaryClick,
  ctaHidden,
  desktopSrc,
  mobileSrc,
  backgroundAlt,
  phoneNumber,
  formHeadline,
  formSubheadline,
  onLeadSubmit,
  className,
}: ContactSectionProps) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try{
      const success = await onLeadSubmit?.(formData);
      if (!success) setError(true);
    }catch(error){
      console.error("Error in submission:", error);
    }finally {
      setIsSubmitting(false);
    }
    
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={clsx(
        `relative overflow-hidden bg-slate-950 text-white`,
        className
      )}
      id="contact-bottom"
    >
      <div className="absolute inset-0">
        <Image
          src={isMobile ? mobileSrc : desktopSrc}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] md:object-center"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#050505]/90 opacity-80`}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 pt-20 pb-20 lg:items-center lg:gap-20 lg:px-10 lg:py-44">
        {/* LEFT COLUMN */}

        <div className="flex-1 space-y-8">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {headline.split(" ").map((word, index) =>
                word === "Flooring" || word === "Solutions" ? (
                  <span key={index} className={`text-primary`}>
                    {word}{" "}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">{subheadline}</p>
          </div>
          {error && <p>An Error has occured submitting your form please ensure all fields are filled out correctly and try again.</p>}
          {!ctaHidden && (
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className={`bg-primary text-slate-950 bg-primary:hover cursor-pointer`}
                onClick={onPrimaryClick}
              >
                {primaryCtaLabel}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:border-white cursor-pointer"
                onClick={onSecondaryClick}
              >
                {secondaryCtaLabel}
              </Button>
            </div>
          )}

          <div className="relative flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Contact Us Now
                </p>
                <p className="text-2xl font-semibold text-white">
                  Schedule within 7 days
                </p>
                <p className="mt-2 text-sm text-slate-300">{formSubheadline}</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="lead-name" className="text-slate-200">
                    Full name
                  </Label>
                  <Input
                    id="lead-name"
                    placeholder="John Smith"
                    className={`bg-slate-950/50 text-white placeholder:text-slate-500`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-email" className="text-slate-200">
                    Email
                  </Label>
                  <Input
                    id="lead-email"
                    type="email"
                    placeholder="your@email.com"
                    className={`bg-slate-950/50 text-white placeholder:text-slate-500`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead-phone" className="text-slate-200">
                    Phone number
                  </Label>
                  <Input
                    id="lead-phone"
                    type="tel"
                    placeholder="0424 420 715"
                    className={`bg-slate-950/50 text-white placeholder:text-slate-500`}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full bg-primary text-slate-950 bg-primary:hover`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : formHeadline}
                </Button>
              </form>

              <div className="flex justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <a
                  href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`}
                  className="mt-1 flex items-center gap-2 text-lg font-semibold text-white hover:underline"
                >
                  <Phone className={`h-5 w-5 text-light-primary`} />
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur">
            <div className={`flex items-center text-light-primary`}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`h-4 w-4 item-fill text-light-primary`}
                />
              ))}
            </div>
            <div className="text-sm text-slate-200">
              Trusted by multiple builders & designers across Sydney.
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN FORM */}
      </div>
    </section>
  );
};
