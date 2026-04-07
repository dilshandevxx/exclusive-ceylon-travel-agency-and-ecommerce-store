"use client";

import Image from "next/image";
import Link from "next/link";
import {
  brandOrigin,
  brandVision,
  divisions,
  founder,
} from "@/lib/brand";
import { EcosystemSection } from "./EcosystemSection";
import { openWhatsAppInquiry } from "@/lib/whatsapp";

const secondaryImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80";

const packageCoast =
  "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80";

const packageHighlands =
  "https://images.unsplash.com/photo-1596422847843-9e26051876bd?auto=format&fit=crop&w=800&q=80";

const panelHero =
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80";

const shopItems = [
  {
    title: "UV field hat",
    price: "$48",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Packable daypack",
    price: "$112",
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Insulated bottle",
    price: "$36",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80",
  },
];

const packages = [
  {
    title: "South coast & whales",
    desc: "Mirissa blues, Galle fort walks, and sunset sails with a private host.",
    from: "From $1,890",
    href: "/packages/south-coast",
    image: packageCoast,
  },
  {
    title: "Tea country escape",
    desc: "Ella trains, misty plantations, and slow mornings in boutique stays.",
    from: "From $2,240",
    href: "/packages/tea-country",
    image: packageHighlands,
  },
];

function DotMapBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
        backgroundSize: "10px 10px",
      }}
      aria-hidden
    />
  );
}

export function BelowFold() {
  return (
    <div className="bg-[#f8f8f8]">
      <EcosystemSection />

      <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-12 lg:pb-32">
        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_360px] lg:gap-24">
          <div className="space-y-24">
            {/* Rooted in Bibile Section */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <h2 className="font-[family-name:var(--font-serif)] text-4xl font-light leading-[1.1] tracking-tight text-[#0d1117] sm:text-5xl lg:text-6xl">
                Rooted in Bibile— <br />
                <span className="italic text-[#1e3a5f]/80">crafted for the island</span>
              </h2>
              <div className="space-y-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm grayscale-[0.3] transition-all duration-1000 hover:grayscale-0">
                  <Image
                    src={secondaryImage}
                    alt="Tropical resort pool"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="max-w-md">
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#0d1117]">
                    Our story begins in the village
                  </h3>
                  <p className="mt-6 font-sans text-sm leading-relaxed text-[#0d1117]/60">
                    {brandOrigin}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#0d1117]/60">
                    Together, Lifestyle Studio, Trails Wellassa Travel
                    Experiences, and Promises Moments Events form one lifestyle
                    ecosystem—so guests and locals can experience nature,
                    culture, and refined island luxury in one place.
                  </p>
                  <Link
                    href="/about"
                    className="group mt-8 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.2em] text-[#1e3a5f] uppercase"
                  >
                    <span className="border-b border-[#1e3a5f]/20 pb-1 group-hover:border-[#1e3a5f]">Read our story</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Shop Preview Section */}
            <section aria-labelledby="shop-heading" className="pt-12">
              <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#0d1117]/10 pb-10 sm:flex-row sm:items-end">
                <div>
                  <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#0d1117]/40 uppercase">
                    Lifestyle Studio
                  </p>
                  <h2
                    id="shop-heading"
                    className="mt-4 font-[family-name:var(--font-serif)] text-3xl font-light tracking-tight text-[#0d1117] lg:text-4xl"
                  >
                    Curated travel essentials
                  </h2>
                </div>
                <Link
                  href="/shop"
                  className="group flex items-center gap-3 font-sans text-[11px] font-bold tracking-[0.2em] text-[#0d1117] uppercase"
                >
                  <span className="border-b border-transparent pb-1 group-hover:border-[#0d1117]/30">Shop all collection</span>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                {shopItems.map((item) => (
                  <div
                    key={item.title}
                    className="group flex flex-col"
                  >
                    <Link href="/shop" className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#f0f0f0]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-1000 group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                    </Link>
                    <div className="mt-5 space-y-1">
                       <p className="font-[family-name:var(--font-serif)] text-lg font-light text-[#0d1117]">
                         {item.title}
                       </p>
                       <div className="flex items-center justify-between">
                         <p className="font-sans text-[11px] font-bold tracking-[0.1em] text-[#c45c26] uppercase">
                           {item.price}
                         </p>
                         <button
                           onClick={() => 
                             openWhatsAppInquiry({
                               productName: item.title,
                               price: item.price
                             })
                           }
                           className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#1e3a5f] uppercase transition hover:text-[#0d1117]"
                         >
                           Buy Now
                         </button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Aside Section */}
          <aside className="space-y-16 lg:pt-12">
            <div className="relative overflow-hidden rounded-sm bg-[#0d1117] p-10 text-white">
              <DotMapBg />
              <p className="relative font-sans text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                Established
              </p>
              <p className="relative mt-6 font-[family-name:var(--font-serif)] text-7xl font-light leading-none">
                {founder.foundingYear}
              </p>
              <p className="relative mt-8 font-sans text-sm leading-relaxed text-white/50">
                Exclusive Ceylon brings hospitality, lifestyle, and village-born
                insight into one refined platform.
              </p>
            </div>

            <div className="space-y-10">
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#0d1117]/40 uppercase">
                Selected Journeys
              </p>
              <div className="space-y-12">
                {packages.map((pkg) => (
                  <article key={pkg.href} className="group flex flex-col">
                    <Link href={pkg.href} className="block space-y-6">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover transition duration-1000 group-hover:scale-[1.05]"
                          sizes="(max-width: 1024px) 100vw, 360px"
                        />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-[family-name:var(--font-serif)] text-xl font-light text-[#0d1117]">
                          {pkg.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#0d1117]/60">
                          {pkg.desc}
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                           <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#1e3a5f] uppercase">
                             {pkg.from}
                           </span>
                           <div className="h-px flex-1 bg-[#1e3a5f]/10" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="group relative flex aspect-[4/5] overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[400px]"
            >
              <Image
                src={panelHero}
                alt="Ocean shoreline"
                fill
                className="object-cover transition duration-1000 group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-[#0d1117]/20 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-10">
                <p className="font-sans text-[9px] font-bold tracking-[0.3em] text-white/60 uppercase">
                   Personalized
                </p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-light leading-[1.2] text-white">
                  Events thoughtfully <span className="italic">staged</span>
                </p>
                <div className="mt-6 flex items-center gap-4 text-white/80">
                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group-hover:text-white">Plan an event</span>
                   <div className="h-px w-8 bg-white/30 transition-all group-hover:w-12 group-hover:bg-white" />
                </div>
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
