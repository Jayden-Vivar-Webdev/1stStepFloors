"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import content from "@/content/content.json";
import { UrlObject } from "url";

const iconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
};

type TextLink = {
  label: string;
  href?: never;
};

type NavLink = {
  label: string;
  href: string | UrlObject;
};

type FooterLink = TextLink | NavLink;

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const Footer: FC = () => {
  const { brand, socials, sections, bottomLinks } = content.footer;

  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Brand Info */}
          <div>
            <Link
              href={brand.logoHref}
              className="text-xl font-semibold tracking-tight"
            >
              {brand.name}
            </Link>
            <p className="mt-4 text-sm text-slate-400">{brand.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                if (!Icon) return null; // skip if icon doesn't exist
                return (
                  <Button
                    key={social.icon}
                    variant="secondary"
                    size="icon"
                    className="rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                {section.title}
              </h4>

              <ul className="mt-4 space-y-3 text-sm">
                {section.links.map((link, idx) => (
                  <li key={`${section.title}-${idx}`}>
                    {"href" in link ? (
                      <Link
                        href={link.href}
                        className="text-slate-400 transition hover:text-slate-100"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-slate-400">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {bottomLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="transition hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
