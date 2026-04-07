"use client";

import { BrandLogo } from "@/components/brand/BrandLogo";
import Link from "next/link";
import { brandOrigin, divisions, founder } from "@/lib/brand";

const footerCols = [
  {
    title: "Collection",
    links: [
      { href: "/shop", label: "Lifestyle Studio" },
      { href: "/packages", label: "Trails Wellassa" },
      { href: "/events", label: "Promises Moments" },
    ],
  },
  {
    title: "Journal",
    links: [
      { href: "/stories", label: "Our Stories" },
      { href: "/about", label: "Our Origin" },
      { href: "/philosophy", label: "Philosophy" },
    ],
  },
  {
    title: "Inquiries",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "Fulfillment" },
      { href: "/policies", label: "Legal" },
    ],
  },
];

const socialLinks = [
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "PINTEREST", href: "https://pinterest.com" },
  { label: "FACEBOOK", href: "https://facebook.com" },
];

export function HomeFooter() {
  return (
    <footer className="bg-[#0d1117] text-white/50">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        {/* Top Section: Signature & Story */}
        <div className="mb-24 grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-32">
          <div className="space-y-10">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl font-light tracking-tight text-white lg:text-6xl">
              Exclusive <br />
              <span className="italic text-white/70">Ceylon</span>
            </h2>
            <p className="max-w-md font-sans text-sm leading-relaxed text-white/40">
              Luxury lifestyle, authentic village travel, and bespoke events—
              Lifestyle Studio, Trails Wellassa, and Promises Moments. <br />
              Founded in <span className="text-white/60">{founder.origin}</span>, Sri Lanka.
            </p>
            <div className="flex gap-6 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="font-sans text-[10px] font-bold tracking-[0.3em] text-white/30 transition-colors hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-16">
            {footerCols.map((col) => (
              <div key={col.title}>
                <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">
                  {col.title}
                </p>
                <ul className="mt-8 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-xs font-semibold tracking-[0.1em] text-white/40 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Legal & Credit */}
        <div className="flex flex-col gap-8 border-t border-white/5 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase">
            © {new Date().getFullYear()} EXCLUSIVE CEYLON. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
             <div className="hidden h-px w-12 bg-white/10 md:block" />
             <p className="font-[family-name:var(--font-serif)] text-xs italic text-white/40">
                Bibila — The Heart of our Island experiences
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
