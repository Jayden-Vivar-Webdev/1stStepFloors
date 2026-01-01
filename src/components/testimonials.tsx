// components/sections/FacebookReviews.tsx
"use client";

import { Facebook, Star } from "lucide-react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Review = {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  profileImage?: string;
};

type FacebookReviewsProps = {
  heading?: string;
  subheading?: string;
  reviews?: Review[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  variant?: "dark" | "light";
};

const defaultReviews: Review[] = [
  {
    name: "Ahmad Reda",
    role: "Homeowner · 5/5 ★ on Facebook",
    content:
      "Antonio was professional and completed the flooring job on time and to a very high standard. Would definitely use 1st Step Floors again.",
    profileImage: "/images/reviews/ahmed-review.webp",
    rating: 5,
  },
  {
    name: "Julie Kane",
    role: "Homeowner · 5/5 ★ on Facebook",
    content:
      "Antonio did a fantastic job on our new floor. He was very reliable, friendly, professional and very reasonably priced. We highly recommend 1st Step Floors to everyone.",
    profileImage: "/images/reviews/julie-review.webp",
    rating: 5,
  },
  {
    name: "Linda Langford",
    role: "Homeowner · 5/5 ★ on Facebook",
    content:
      "Absolutely love our new floor. Antonio was very professional and prompt. Nothing was too difficult. Definitely give Antonio a call if you’re looking for new flooring you won’t be disappointed..",
    profileImage: "/images/reviews/linda-review.webp",
    rating: 5,
  },
];

export const FacebookReviews = ({
  heading = "Facebook reviews from real clients",
  subheading = "Dust-free installs, on-time schedules, and premium finishes—straight from homeowners, designers, and GC partners.",
  reviews = defaultReviews,
  ctaLabel = "Read more on Facebook",
  ctaHref = "https://facebook.com",
  className,
  variant = "dark",
}: FacebookReviewsProps) => {
  const isDark = variant === "dark";

  return (
    <section
      className={clsx(
        "py-20 lg:py-30",
        isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 text-center">
          <div
            className={clsx(
              "mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]",
              isDark
                ? "border-white/10 text-amber-300"
                : "border-amber-200 bg-amber-50 text-amber-700"
            )}
          >
            <Facebook
              className={clsx(
                "h-4 w-4",
                isDark ? "text-amber-300" : "text-amber-600"
              )}
            />
            <span>Facebook Reviews</span>
          </div>
          <h2
            className={clsx(
              "text-3xl font-semibold sm:text-4xl",
              isDark ? "text-white" : "text-slate-900"
            )}
          >
            {heading}
          </h2>
          <p
            className={clsx(
              "mx-auto max-w-2xl text-base",
              isDark ? "text-slate-300" : "text-slate-600"
            )}
          >
            {subheading}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews
            .slice(0, 3)
            .map(({ name, role, content, rating = 5, profileImage }) => (
              <div
                key={name}
                className={clsx(
                  "flex h-full flex-col rounded-3xl border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur",
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-white"
                )}
              >
                <div className="mb-4 flex items-center gap-3">
                  <Avatar
                    className={clsx(
                      "h-12 w-12",
                      isDark
                        ? "border border-white/20"
                        : "border border-slate-100"
                    )}
                  >
                    {profileImage && (
                      <AvatarImage
                        src={profileImage}
                        alt={name}
                        className="object-cover"
                      />
                    )}
                    <AvatarFallback
                      className={clsx(
                        "font-semibold",
                        isDark
                          ? "bg-slate-800 text-amber-300"
                          : "bg-slate-100 text-slate-700"
                      )}
                    >
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p
                      className={clsx(
                        "text-sm font-semibold",
                        isDark ? "text-white" : "text-slate-900"
                      )}
                    >
                      {name}
                    </p>
                    {role && (
                      <p
                        className={clsx(
                          "text-xs",
                          isDark ? "text-slate-400" : "text-slate-500"
                        )}
                      >
                        {role}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={clsx(
                        "h-4 w-4",
                        idx < rating
                          ? "fill-amber-300 text-amber-300"
                          : isDark
                          ? "text-slate-600"
                          : "text-slate-300"
                      )}
                    />
                  ))}
                </div>

                <p
                  className={clsx(
                    "text-sm",
                    isDark ? "text-slate-200" : "text-slate-600"
                  )}
                >
                  {content}
                </p>
              </div>
            ))}
        </div>

        {ctaHref && (
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className={clsx(
                "rounded-full px-6",
                isDark
                  ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                  : "bg-amber-400 text-slate-950 hover:bg-amber-300"
              )}
            >
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaLabel}
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
