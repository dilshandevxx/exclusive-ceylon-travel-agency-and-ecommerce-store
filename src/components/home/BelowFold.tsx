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
import { motion } from "framer-motion";

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

function FounderSignature() {
  return (
    <svg
      className="h-12 w-auto animate-pulse text-[#1e3a5f]/40 transition-all hover:text-[#1e3a5f]/60"
      viewBox="0 0 200 60"
      fill="currentColor"
    >
      <path d="M10,40 Q30,10 50,40 T90,40 Q110,10 130,40 T170,40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="10" y="55" className="italic font-[family-name:var(--font-serif)] text-[14px]">Founder's Signature</text>
    </svg>
  );
}

export function BelowFold() {
  return (
    <div className="bg-[#f8f8f8]">
      <EcosystemSection />

      <div className="mx-auto max-w-[1400px] px-6 pb-32 lg:px-12 lg:pb-48">
        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_360px] lg:gap-32">
          <div className="space-y-32">
            {/* Rooted in Bibile Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24"
            >
              <div className="space-y-12">
                <h2 className="font-[family-name:var(--font-serif)] text-5xl font-light leading-[1] tracking-tight text-[#0d1117] sm:text-6xl lg:text-7xl">
                  Rooted in <br />
                  <span className="italic text-[#1e3a5f]/80">Bibile</span>
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="max-w-md font-sans text-base leading-relaxed text-[#0d1117]/60">
                    {brandOrigin}
                  </p>
                  <FounderSignature />
                </div>
              </div>
              <div className="space-y-12">
                <motion.div
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm grayscale-[0.3] transition-all duration-1000 hover:grayscale-0"
                >
                  <Image
                    src={secondaryImage}
                    alt="Tropical resort pool"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </motion.div>
                <div className="max-w-md">
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#0d1117]">
                    Crafted for the island rhythm
                  </h3>
                  <p className="mt-6 font-sans text-sm leading-relaxed text-[#0d1117]/60">
                    Together, Lifestyle Studio, Trails Wellassa Travel
                    Experiences, and Promises Moments Events form one lifestyle
                    ecosystem—so guests and locals can experience nature,
                    culture, and refined island luxury in one place.
                  </p>
                  <Link
                    href="/about"
                    className="group mt-10 inline-flex items-center gap-6 font-sans text-[10px] font-bold tracking-[0.3em] text-[#1e3a5f] uppercase"
                  >
                    <span className="border-b border-[#1e3a5f]/20 pb-1 group-hover:border-[#1e3a5f]">Read our story</span>
                    <div className="h-px w-8 bg-[#1e3a5f]/20 transition-all group-hover:w-16 group-hover:bg-[#1e3a5f]" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Shop Preview Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              aria-labelledby="shop-heading"
              className="pt-12"
            >
              <div className="mb-16 flex flex-col justify-between gap-8 border-b border-[#0d1117]/10 pb-12 sm:flex-row sm:items-end">
                <div>
                  <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#c45c26] uppercase">
                    Lifestyle Studio
                  </p>
                  <h2
                    id="shop-heading"
                    className="mt-6 font-[family-name:var(--font-serif)] text-4xl font-light tracking-tight text-[#0d1117] lg:text-5xl"
                  >
                    Curated travel <span className="italic">essentials</span>
                  </h2>
                </div>
                <Link
                  href="/shop"
                  className="group mb-1 flex items-center gap-6 font-sans text-[10px] font-bold tracking-[0.3em] text-[#0d1117] uppercase"
                >
                  <span className="border-b border-transparent pb-1 group-hover:border-[#0d1117]/30">View catalog</span>
                  <div className="h-px w-10 bg-[#0d1117]/10 transition-all group-hover:w-20 group-hover:bg-[#0d1117]" />
                </Link>
              </div>
              <div className="grid gap-12 sm:grid-cols-3">
                {shopItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="group flex flex-col"
                  >
                    <Link href="/shop" className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#f0f0f0]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                    </Link>
                    <div className="mt-6 space-y-1">
                      <p className="font-[family-name:var(--font-serif)] text-xl font-light text-[#0d1117]">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <p className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#c45c26] uppercase">
                          {item.price}
                        </p>
                        <button
                          onClick={() =>
                            openWhatsAppInquiry({
                              productName: item.title,
                              price: item.price
                            })
                          }
                          className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#1e3a5f] uppercase transition-colors hover:text-[#0d1117]"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar / Aside Section */}
          <aside className="space-y-20 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative overflow-hidden rounded-sm bg-[#0d1117] p-12 text-white"
            >
              <DotMapBg />
              <p className="relative font-sans text-[9px] font-bold tracking-[0.4em] text-white/30 uppercase">
                Established
              </p>
              <p className="relative mt-8 font-[family-name:var(--font-serif)] text-8xl font-light leading-none">
                {founder.foundingYear}
              </p>
              <p className="relative mt-10 font-sans text-sm leading-relaxed text-white/40">
                Exclusive Ceylon brings hospitality, lifestyle, and village-born
                insight into one refined platform.
              </p>
            </motion.div>

            <div className="space-y-12">
              <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#0d1117]/30 uppercase">
                Selected Journeys
              </p>
              <div className="space-y-16">
                {packages.map((pkg, index) => (
                  <motion.article
                    key={pkg.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 1 }}
                    className="group flex flex-col"
                  >
                    <Link href={pkg.href} className="block space-y-8">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 360px"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#0d1117]">
                          {pkg.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#0d1117]/50">
                          {pkg.desc}
                        </p>
                        <div className="flex items-center gap-6 pt-2">
                          <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#1e3a5f] uppercase">
                            {pkg.from}
                          </span>
                          <div className="h-px flex-1 bg-[#1e3a5f]/10 transition-all group-hover:bg-[#1e3a5f]/30" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <Link
                href="/contact"
                className="group relative flex aspect-[4/5] overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[450px]"
              >
                <Image
                  src={panelHero}
                  alt="Ocean shoreline"
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-12">
                  <p className="font-sans text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase">
                    Personalized
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-light leading-[1.1] text-white">
                    Events <br />
                    <span className="italic text-white/70">Staged</span>
                  </p>
                  <div className="mt-10 flex items-center gap-6 text-white/80">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors group-hover:text-white">Plan an event</span>
                    <div className="h-px w-10 bg-white/20 transition-all group-hover:w-20 group-hover:bg-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
