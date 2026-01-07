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
  reviews: Review[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  variant?: "dark" | "light" | string;
};

export const Reviews = ({
  heading,
  subheading,
  reviews,
  ctaLabel,
  ctaHref,
  className,
  variant = "dark",
}: FacebookReviewsProps) => {
  const isDark = variant === "dark";

  return (
    <section
      className={clsx(
        "py-20 lg:py-30",
        isDark ? `bg-secondary-dark text-white` : `text-slate-900`,
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 text-center">
          <div
            className={clsx(
              "mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]",
              isDark ? `.review-dark` : `review-light`
            )}
          >
            <Facebook
              className={clsx(
                "h-4 w-4",
                isDark ? `text-light-primary` : `text-dark-primary`
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
                          ? `bg-slate-800 text-light-primary`
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

                <div
                  className={`mb-4 flex items-center gap-1 text-light-primary`}
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={clsx(
                        "h-4 w-4",
                        idx < rating
                          ? `item-fill text-light-primary`
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
                  ? `bg-primary text-slate-950 bg-primary:hover`
                  : `bg-primary text-slate-950 bg-primary:hover`
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
