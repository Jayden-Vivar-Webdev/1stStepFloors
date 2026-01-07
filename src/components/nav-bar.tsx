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
    <header className="border-b bg-none backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:py-3">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight w-60 h-25 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <img
            src={"/images/logo-1.png"}
            className="object-cover h-full w-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex space-x-3">
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-muted-foreground"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-foreground transition-colors hover:text-muted-foreground"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-foreground transition-colors hover:text-muted-foreground"
          >
            Contact
          </Link>
          <Button
            asChild
            size="lg"
            className="bg-amber-400 text-amber-950 hover:bg-amber-300"
          >
            <Link className="text-slate-950" href="tel:1300 000 000">
              <Phone className="h-4 w-4" />
              Call 0417 696 602
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>1st Step Floors</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-3 px-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
                <Button
                  asChild
                  className="mt-2 bg-amber-400 text-amber-950 hover:bg-amber-300"
                  size="lg"
                >
                  <Link href="tel:1300 000 000">
                    <Phone className="h-4 w-4" />
                    Call 1300 000 123
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
