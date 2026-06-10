"use client";

import Image from "next/image";
import Link from "next/link";
import { brandTagline, divisions } from "@/lib/brand";
import { SiteHeader } from "./SiteHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2800&q=100";

export function HeroSection() {
  const { scrollY } = useScroll();
  
  // Cinematic Parallax and zoom effects
  const imageScale = useTransform(scrollY, [0, 1200], [1.05, 1.25]);
  const imageY = useTransform(scrollY, [0, 1200], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section 
      className="relative h-screen min-h-[800px] w-full overflow-hidden bg-charcoal"
    >
      {/* Cinematic Background with Slow Zoom and Parallax */}
      <motion.div 
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 h-[110%] w-full"
      >
        <Image
          src={heroImage}
          alt="Sigiriya rock and lush landscape in Sri Lanka"
          fill
          priority
          className="object-cover object-center brightness-[0.7] contrast-[1.15]"
          sizes="100vw"
          quality={100}
        />
      </motion.div>

      {/* Premium Gradients for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/90" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" aria-hidden />
      
      {/* Subtle Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />

      <SiteHeader />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          {/* Subtle Tagline */}
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 0.7, letterSpacing: "0.5em" }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="mb-10 font-sans text-[10px] font-bold text-white uppercase sm:text-xs"
          >
            {brandTagline.replace(/ \| /g, " • ")}
          </motion.p>

          {/* Main Masthead Heading */}
          <h1 className="text-white text-glow">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-[family-name:var(--font-serif)] text-6xl font-light leading-[0.9] tracking-[-0.02em] sm:text-8xl md:text-9xl lg:text-[11rem]"
            >
              Exclusive
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-[family-name:var(--font-serif)] text-6xl font-light italic leading-[0.9] tracking-tight text-white/90 sm:text-8xl md:text-9xl lg:text-[11rem]"
            >
              Ceylon
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="mt-10 block font-sans text-lg font-light tracking-wide text-white/70 sm:text-xl md:text-2xl"
            >
              The <span className="italic text-white">refined</span> side of island living
            </motion.span>
          </h1>

          {/* Premium Glassmorphic Action Hooks */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.2 }}
            className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Link
              href="/packages"
              className="glass-panel-dark group flex items-center gap-6 rounded-full px-8 py-4 text-[10px] font-bold tracking-[0.3em] text-white uppercase transition-all duration-500 hover:bg-white/10"
            >
              <span>Explore Journeys</span>
              <div className="h-[1px] w-8 bg-white/40 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
            </Link>
            
            <Link
              href="/shop"
              className="group flex items-center gap-6 rounded-full px-8 py-4 text-[10px] font-bold tracking-[0.3em] text-white uppercase transition-all duration-500 hover:text-white/80"
            >
              <span>Lifestyle Studio</span>
              <div className="h-[1px] w-8 bg-white/40 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cinematic Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-6"
        >
          <span className="font-sans text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase">Discover</span>
          <div className="relative h-16 w-[1px] overflow-hidden bg-white/10">
            <motion.div 
               animate={{ y: ["-100%", "100%"] }}
               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
               className="h-full w-full bg-white/50"
            />
          </div>
        </motion.div>
      </div>

      {/* Side Content Highlights */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden px-12 pb-12 lg:block">
        <div className="flex items-center justify-between border-t border-white/10 pt-8">
          {divisions.map((d, i) => (
            <motion.div
              key={d.short}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + (i * 0.2), duration: 0.8 }}
              className="flex items-center gap-6 font-sans text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase"
            >
              <span className="h-[1px] w-8 bg-white/20" />
              <span className="transition-colors hover:text-white/80 cursor-default">{d.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
