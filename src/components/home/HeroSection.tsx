"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const bgImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1546708973-c6258d4a9f33?auto=format&fit=crop&w=2000&q=80", alt: "Misty Mountains" },
  { id: 2, src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2000&q=80", alt: "Sigiriya" },
  { id: 3, src: "https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=2000&q=80", alt: "Tea Estate" },
];

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % bgImages.length);
    }, 6000); // Crossfade every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black font-sans text-white">
      
      {/* Crossfading Background Images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={bgImages[currentIdx].src}
            alt={bgImages[currentIdx].alt}
            fill
            priority
            className="object-cover object-center brightness-[0.8]"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Vignette Overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Custom Transparent Header */}
      <header className="absolute inset-x-0 top-0 z-20 pt-6">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="font-[family-name:var(--font-sans)] text-2xl font-bold tracking-tight">
            EXCLUSIVE CEYLON
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-10">
              <li><Link href="/" className="text-sm font-medium hover:text-white/80 transition text-white">Home</Link></li>
              <li><Link href="/packages" className="text-sm font-medium hover:text-white/80 transition text-white/80">Destination</Link></li>
              <li><Link href="/packages" className="text-sm font-medium hover:text-white/80 transition text-white/80">Tour</Link></li>
              <li><Link href="/contact" className="text-sm font-medium hover:text-white/80 transition text-white/80">Contact</Link></li>
            </ul>
          </nav>

          {/* Action Button */}
          <Link href="/shop" className="hidden md:flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-gray-100 transition shadow-sm">
            Register Now
          </Link>
        </div>
      </header>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 mx-auto max-w-[1600px]">
         <div className="max-w-2xl">
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="text-6xl md:text-8xl lg:text-[110px] font-semibold leading-[0.95] tracking-tight mb-12"
            >
               Overseas <br />
               Holiday <br />
               Solutions.
            </motion.h1>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.4 }}
            >
               <Link href="/packages" className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gray-100 transition shadow-lg">
                  Get Started
               </Link>
            </motion.div>
         </div>
      </div>

      {/* Bottom Footer Elements */}
      <div className="absolute inset-x-0 bottom-10 z-20 pointer-events-none">
         <div className="mx-auto flex flex-col md:flex-row items-end justify-between px-6 md:px-12 max-w-[1600px] gap-6">
            
            {/* Bottom Left: Avatar Group */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="flex items-center gap-4 pointer-events-auto"
            >
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-transparent relative overflow-hidden bg-white shadow-sm">
                     <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-transparent relative overflow-hidden bg-white shadow-sm z-10">
                     <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-transparent relative overflow-hidden bg-white shadow-sm z-20">
                     <Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80" alt="User" fill className="object-cover" />
                  </div>
               </div>
               <div>
                  <p className="text-xs font-medium text-white/80">Booked by over</p>
                  <p className="text-sm font-bold text-white">10K+ people</p>
               </div>
            </motion.div>

            {/* Bottom Right: Translucent Tags */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="flex flex-wrap items-center gap-3 pointer-events-auto"
            >
               <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-xs font-medium text-white/90">
                  Serenity
               </div>
               <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-xs font-medium text-white/90">
                  Nature
               </div>
               <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-xs font-medium text-white/90">
                  Haven
               </div>
            </motion.div>

         </div>
      </div>

    </section>
  );
}
