"use client";

import Image from "next/image";
import Link from "next/link";
import {
  brandOrigin,
  founder,
} from "@/lib/brand";
import { EcosystemSection } from "./EcosystemSection";
import { openWhatsAppInquiry } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const secondaryImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=100";

const packageCoast =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=100";

const packageHighlands =
  "https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=1000&q=100";

const panelHero =
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1000&q=100";

const shopItems = [
  {
    title: "UV field hat",
    price: "$48",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=100",
  },
  {
    title: "Packable daypack",
    price: "$112",
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=100",
  },
  {
    title: "Insulated bottle",
    price: "$36",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=100",
  },
];

const packages = [
  {
    title: "South coast & whales",
    desc: "Mirissa blues, Galle fort walks, and sunset sails.",
    from: "From $1,890",
    href: "/packages/south-coast",
    image: packageCoast,
  },
  {
    title: "Tea country escape",
    desc: "Ella trains, misty plantations, and slow mornings.",
    from: "From $2,240",
    href: "/packages/tea-country",
    image: packageHighlands,
  },
];

function FounderSignature() {
  return (
    <svg 
      className="h-16 w-auto text-charcoal/80" 
      viewBox="0 0 200 60" 
      fill="currentColor"
    >
      <path d="M10,40 Q30,10 50,40 T90,40 Q110,10 130,40 T170,40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="10" y="55" className="italic font-[family-name:var(--font-serif)] text-[12px] opacity-60">Founder's Signature</text>
    </svg>
  );
}

export function BelowFold() {
  return (
    <div className="bg-[var(--background)]">
      <EcosystemSection />

      <div className="mx-auto max-w-[1600px] px-6 pb-32 pt-24 lg:px-12 lg:pb-48">
        
        {/* Editorial Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 grid gap-16 lg:grid-cols-2 lg:gap-32 xl:grid-cols-[1fr_1.2fr]"
        >
          <div className="flex flex-col justify-center space-y-16 lg:pr-12">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl font-light leading-[0.95] tracking-tight text-charcoal sm:text-6xl md:text-7xl lg:text-8xl">
              Rooted in <br />
              <span className="italic text-[var(--accent-earth)]">Bibile</span>
            </h2>
            <div className="flex flex-col gap-10">
               <p className="max-w-md font-sans text-lg font-light leading-relaxed text-charcoal/70">
                  {brandOrigin}
               </p>
               <FounderSignature />
            </div>
          </div>
          
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-[3/2]">
            <Image
              src={secondaryImage}
              alt="Tropical luxury setting"
              fill
              className="object-cover transition-transform duration-[3s] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Glassmorphic floating card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="glass-panel absolute bottom-8 left-8 max-w-[280px] p-8 sm:bottom-12 sm:left-12 sm:max-w-sm"
            >
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-light text-charcoal">
                Crafted for the island rhythm
              </h3>
              <p className="mt-4 font-sans text-xs leading-relaxed text-charcoal/70">
                Hospitality, lifestyle, and village-born insight united in one refined platform.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Cinematic Bento Box Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          
          {/* Marketplace Header */}
          <div className="col-span-full mb-8 flex flex-col justify-between gap-8 border-b border-charcoal/10 pb-8 sm:flex-row sm:items-end lg:col-span-12">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[var(--accent-gold)] uppercase">
                Lifestyle Studio
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-light tracking-tight text-charcoal lg:text-6xl">
                Curated <span className="italic">essentials</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="group mb-2 flex items-center gap-6 font-sans text-[10px] font-bold tracking-[0.3em] text-charcoal uppercase"
            >
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-charcoal/30">View catalog</span>
              <div className="h-[1px] w-12 bg-charcoal/20 transition-all duration-500 group-hover:w-24 group-hover:bg-charcoal" />
            </Link>
          </div>

          {/* Shop Items (Bento Top Row) */}
          {shopItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative col-span-full flex flex-col overflow-hidden sm:col-span-4 lg:col-span-4"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#e8e8e6]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Hover Buy Action */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0">
                  <button
                    onClick={() => openWhatsAppInquiry({ productName: item.title, price: item.price })}
                    className="glass-panel flex w-full items-center justify-between rounded-full px-6 py-4 transition-all hover:bg-white/20"
                  >
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white uppercase">Acquire</span>
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/80">{item.price}</span>
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                 <p className="font-[family-name:var(--font-serif)] text-2xl font-light text-charcoal">
                   {item.title}
                 </p>
                 <p className="font-sans text-[11px] font-bold tracking-[0.2em] text-[var(--accent-gold)] uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                   {item.price}
                 </p>
              </div>
            </motion.div>
          ))}

          {/* Journeys Header */}
          <div className="col-span-full mt-24 mb-8 flex flex-col justify-between gap-8 border-b border-charcoal/10 pb-8 sm:flex-row sm:items-end lg:col-span-12">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[var(--accent-gold)] uppercase">
                Selected Journeys
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-light tracking-tight text-charcoal lg:text-6xl">
                Island <span className="italic">itineraries</span>
              </h2>
            </div>
            <Link
              href="/packages"
              className="group mb-2 flex items-center gap-6 font-sans text-[10px] font-bold tracking-[0.3em] text-charcoal uppercase"
            >
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-charcoal/30">All journeys</span>
              <div className="h-[1px] w-12 bg-charcoal/20 transition-all duration-500 group-hover:w-24 group-hover:bg-charcoal" />
            </Link>
          </div>

          {/* Journeys Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-full grid gap-8 lg:col-span-8 lg:grid-cols-2"
          >
            {packages.map((pkg, index) => (
              <Link 
                key={pkg.href} 
                href={pkg.href}
                className="group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-sm lg:aspect-auto lg:h-[600px]"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-[3s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                <div className="relative z-10 p-8 sm:p-10">
                  <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[var(--accent-gold)] uppercase">
                    {pkg.from}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-serif)] text-3xl font-light leading-tight text-white sm:text-4xl">
                    {pkg.title}
                  </h3>
                  <p className="mt-4 max-w-sm font-sans text-sm font-light leading-relaxed text-white/70 opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:-translate-y-2">
                    {pkg.desc}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Dedicated Event Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-full lg:col-span-4"
          >
            <Link
              href="/contact"
              className="group relative flex h-[600px] w-full flex-col justify-between overflow-hidden rounded-sm bg-charcoal p-10 text-white"
            >
              <Image
                src={panelHero}
                alt="Ocean shoreline"
                fill
                className="object-cover opacity-40 mix-blend-overlay transition-transform duration-[4s] group-hover:scale-110 group-hover:opacity-60"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="relative z-10 flex items-center justify-between">
                <p className="font-sans text-[9px] font-bold tracking-[0.4em] text-white/50 uppercase">
                  Est. {founder.foundingYear}
                </p>
                <div className="h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
              </div>
              
              <div className="relative z-10 mt-auto">
                <p className="font-sans text-[9px] font-bold tracking-[0.4em] text-[var(--accent-gold)] uppercase">
                   Personalized
                </p>
                <p className="mt-6 font-[family-name:var(--font-serif)] text-5xl font-light leading-[1] text-white">
                  Events <br />
                  <span className="italic text-white/70">Staged</span>
                </p>
                <div className="mt-12 flex items-center gap-6 text-white/80">
                   <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase transition-colors group-hover:text-white">Plan an event</span>
                   <div className="h-[1px] w-12 bg-white/20 transition-all duration-500 group-hover:w-24 group-hover:bg-white" />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
