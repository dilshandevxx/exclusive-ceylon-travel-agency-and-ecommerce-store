"use client";

import { BrandLogo } from "@/components/brand/BrandLogo";
import { primaryNav } from "@/lib/site-nav";
import Link from "next/link";
import { useState } from "react";
import { IconBag, IconSearch, IconUser } from "./icons";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-4 md:pt-8">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 md:px-10">
        <div className="flex-1 md:flex-none">
          <BrandLogo variant="header-on-dark" />
        </div>

        {/* Desktop Nav */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-8 lg:gap-10">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] font-medium tracking-wide text-white/95 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 text-white sm:gap-2">
          <button
            type="button"
            className="hidden rounded-md p-2 transition hover:bg-white/10 sm:inline-flex"
            aria-label="Search"
          >
            <IconSearch />
          </button>
          
          <Link
            href="/shop"
            className="rounded-md p-2 transition hover:bg-white/10"
            aria-label="Shopping bag"
          >
            <IconBag />
          </Link>
          
          <Link
            href="/account"
            className="hidden rounded-md p-2 transition hover:bg-white/10 sm:inline-flex"
            aria-label="Account"
          >
            <IconUser />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex rounded-md p-2 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-5">
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-0 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 translate-y-1 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-0 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#0d1117] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex h-full flex-col p-8 pt-24">
          <ul className="space-y-6">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto border-t border-white/10 pt-8">
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Exclusive Ceylon</p>
            <div className="mt-4 flex gap-4 text-white">
               <Link href="/account" className="text-sm font-medium">Account</Link>
               <Link href="/shop" className="text-sm font-medium">Search</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
