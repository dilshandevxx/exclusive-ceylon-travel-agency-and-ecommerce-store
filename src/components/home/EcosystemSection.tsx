"use client";

import Image from "next/image";
import Link from "next/link";
import { brandVision, divisions } from "@/lib/brand";
import { motion } from "framer-motion";

export function EcosystemSection() {
  const images = {
    "Lifestyle Studio": "/images/ecosystem/lifestyle-studio.png",
    "Trails Wellassa Travel Experiences": "/images/ecosystem/trails-wellassa.png",
    "Promises Moments Events": "/images/ecosystem/promises-moments.png",
  };

  return (
    <section 
      className="relative overflow-hidden bg-[#f8f8f8] py-32 lg:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Editorial Vision Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 flex flex-col items-center text-center lg:mb-64"
        >
          <p className="font-sans text-[11px] font-bold tracking-[0.4em] text-[#1e3a5f]/40 uppercase">
            The Concept
          </p>
          <h2 className="mt-8 font-[family-name:var(--font-serif)] text-4xl font-light leading-[1.15] text-[#0d1117] sm:text-5xl lg:max-w-4xl lg:text-8xl">
            A lifestyle ecosystem for <br />
            <span className="italic">authentic island living</span>
          </h2>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="mt-12 w-px bg-[#1e3a5f]/10" 
          />
          <p className="mt-12 max-w-2xl font-sans text-base leading-relaxed text-[#0d1117]/60 md:text-lg">
            {brandVision}
          </p>
        </motion.div>

        {/* Division 1: Lifestyle Studio */}
        <div className="mb-48 grid gap-16 lg:mb-72 lg:grid-cols-2 lg:items-center lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#e5e5e5] lg:aspect-[3/4]"
          >
            <Image
              src={images["Lifestyle Studio"]}
              alt="Lifestyle Studio"
              fill
              className="object-cover transition-transform duration-[2s] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="max-w-md lg:ml-auto"
          >
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#c45c26] uppercase">01 — Studio</span>
            <h3 className="mt-6 font-[family-name:var(--font-serif)] text-4xl font-light text-[#0d1117] lg:text-5xl">
              {divisions[0].name}
            </h3>
            <p className="mt-8 font-sans text-base leading-relaxed text-[#0d1117]/65">
              {divisions[0].description}
            </p>
            <Link
              href={divisions[0].href}
              className="group mt-10 inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] text-[#0d1117] uppercase transition-colors hover:text-[#c45c26]"
            >
              <span className="border-b border-[#0d1117]/20 pb-1 group-hover:border-[#c45c26]/40">{divisions[0].cta}</span>
              <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Division 2: Trails Wellassa */}
        <div className="mb-48 grid gap-16 lg:mb-72 lg:grid-cols-2 lg:items-center lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
             <div className="max-w-md">
                <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#c45c26] uppercase">02 — Journeys</span>
                <h3 className="mt-6 font-[family-name:var(--font-serif)] text-4xl font-light text-[#0d1117] lg:text-5xl">
                  {divisions[1].name}
                </h3>
                <p className="mt-8 font-sans text-base leading-relaxed text-[#0d1117]/65">
                  {divisions[1].description}
                </p>
                <Link
                  href={divisions[1].href}
                  className="group mt-10 inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] text-[#0d1117] uppercase transition-colors hover:text-[#c45c26]"
                >
                  <span className="border-b border-[#0d1117]/20 pb-1 group-hover:border-[#c45c26]/40">{divisions[1].cta}</span>
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
             </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="order-1 relative aspect-[4/5] overflow-hidden rounded-sm bg-[#e5e5e5] lg:order-2 lg:aspect-[3/4]"
          >
            <Image
              src={images["Trails Wellassa Travel Experiences"]}
              alt="Trails Wellassa"
              fill
              className="object-cover transition-transform duration-[2s] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Division 3: Promises Moments */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mx-6 overflow-hidden bg-[#0d1117] px-6 py-32 sm:-mx-12 sm:px-12 lg:rounded-sm lg:py-56"
        >
           <div className="relative z-10 mx-auto max-w-4xl text-center">
              <span className="font-sans text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">03 — Moments</span>
              <h3 className="mt-10 font-[family-name:var(--font-serif)] text-5xl font-light text-white sm:text-6xl lg:text-8xl">
                Promises Moments <br />
                <span className="italic text-white/70">Events</span>
              </h3>
              <p className="mx-auto mt-12 max-w-xl font-sans text-base leading-relaxed text-white/50 md:text-lg">
                 {divisions[2].description}
              </p>
              <Link
                  href={divisions[2].href}
                  className="group mt-16 inline-flex flex-col items-center gap-2"
                >
                  <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase transition-colors group-hover:text-[#c45c26]">{divisions[2].cta}</span>
                  <motion.div 
                    initial={{ width: 48 }}
                    whileHover={{ width: 96 }}
                    className="h-px bg-white/20 group-hover:bg-[#c45c26]/50" 
                  />
              </Link>
           </div>
           
           {/* Subtle Background Image Overlay */}
           <div className="absolute inset-0 opacity-20 grayscale mix-blend-overlay">
              <Image
                src={images["Promises Moments Events"]}
                alt="Promises Moments"
                fill
                className="object-cover"
                sizes="100vw"
              />
           </div>
        </motion.div>
      </div>
    </section>
  );
}
