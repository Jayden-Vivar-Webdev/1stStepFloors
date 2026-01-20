// app/components/nav-bar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 lg:py-3 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight lg:justify-self-start"
        >
          <img
            src="/images/logo-1.png"
            alt="1st Step Flooring"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-8 px-2 py-1 text-sm font-medium lg:flex lg:justify-self-center">
          <Link
            href="/"
            className="rounded-full px-3 py-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="rounded-full px-3 py-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-3 py-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
          <div className="text-right leading-tight">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Call now
            </p>
            <a
              href="tel:0417696602"
              className="text-sm font-semibold text-slate-900 transition-colors hover:text-amber-600"
            >
              0417 696 602
            </a>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-amber-400 text-amber-950 hover:bg-amber-300"
          >
            <Link className="flex items-center gap-2 text-slate-950" href="/contact">
              
              Book a measure
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="px-6 pt-6 text-left">
                <SheetTitle className="text-lg">1st Step Floors</SheetTitle>
              </SheetHeader>

              <div className="space-y-5 px-6 pb-8">
                
                <div className="flex flex-col gap-2 text-base font-medium">
                  <Link
                    href="/"
                    className="rounded-md px-2 py-2 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-md px-2 py-2 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md px-2 py-2 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
                  >
                    Contact
                  </Link>
                </div>

                <Button
                  asChild
                  className="w-full bg-amber-400 text-amber-950 hover:bg-amber-300"
                  size="lg"
                >
                  <Link href="tel:0417696602">
                    <Phone className="h-4 w-4" />
                    Call 0417 696 602
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
