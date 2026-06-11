"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";

const bgImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1546708973-c6258d4a9f33?auto=format&fit=crop&w=2000&q=80", alt: "Misty Mountains" },
  { id: 2, src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2000&q=80", alt: "Sigiriya" },
  { id: 3, src: "https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=2000&q=80", alt: "Tea Estate" },
];

const stats = [
  { value: "10M+", label: "Total Customers" },
  { value: "09+", label: "Years Experience" },
  { value: "12K", label: "Total Destinations" },
  { value: "5.0", label: "Average Rating" },
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
    <section className="relative w-full bg-[#FAFAFA] font-sans pb-12">
      
      {/* Edge-to-edge hero image container with rounded bottom */}
      <div className="w-full">
         <div className="relative h-[85vh] min-h-[700px] w-full rounded-b-[3rem] overflow-hidden bg-black shadow-2xl">
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
                  className="object-cover object-center brightness-[0.7]"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

            {/* Custom Transparent Header */}
            <header className="absolute inset-x-0 top-0 z-20 pt-8">
              <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
                {/* Logo */}
                <Link href="/" className="font-[family-name:var(--font-sans)] text-2xl font-bold tracking-tight text-white">
                  EXCLUSIVE CEYLON
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                  <ul className="flex items-center gap-10">
                    <li><Link href="/" className="text-sm font-medium hover:text-white transition text-white">Home</Link></li>
                    <li><Link href="/packages" className="text-sm font-medium hover:text-white transition text-white/70">Packages</Link></li>
                    <li><Link href="/shop" className="text-sm font-medium hover:text-white transition text-white/70">Shop</Link></li>
                    <li><Link href="/about" className="text-sm font-medium hover:text-white transition text-white/70">About</Link></li>
                    <li><Link href="/contact" className="text-sm font-medium hover:text-white transition text-white/70">Contact</Link></li>
                  </ul>
                </nav>

                {/* Action Button */}
                <div className="hidden md:flex items-center gap-6">
                  <button className="text-white text-sm font-bold flex items-center gap-1 hover:text-white/80 transition">
                     En <span className="text-[10px]">▼</span>
                  </button>
                  <Link href="/contact" className="flex items-center justify-center bg-white text-black px-8 py-3 rounded-full text-xs font-bold hover:bg-gray-100 transition shadow-sm">
                    Login
                  </Link>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
               <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[1.05] tracking-tight mb-6 text-white max-w-4xl"
               >
                  Extraordinary natural and cultural charm
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-white/90 text-lg mb-16 font-medium tracking-wide"
               >
                  Exploring the beauty of Sri Lanka together with us
               </motion.p>

               {/* Floating Search Bar */}
               <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full flex flex-col md:flex-row items-center gap-2 shadow-2xl w-full max-w-4xl"
               >
                  <div className="flex-1 flex items-center gap-4 px-6 py-3 w-full border-b md:border-b-0 md:border-r border-white/20">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                     </div>
                     <div className="text-left cursor-pointer group">
                        <p className="text-[11px] text-white/60 font-bold uppercase tracking-widest mb-0.5">Location</p>
                        <p className="text-sm text-white font-semibold group-hover:text-gray-200 transition">Sri Lanka ▼</p>
                     </div>
                  </div>
                  <div className="flex-1 flex items-center gap-4 px-6 py-3 w-full border-b md:border-b-0 md:border-r border-white/20">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                     </div>
                     <div className="text-left cursor-pointer group">
                        <p className="text-[11px] text-white/60 font-bold uppercase tracking-widest mb-0.5">Date</p>
                        <p className="text-sm text-white font-semibold group-hover:text-gray-200 transition">12 Aug 2026 ▼</p>
                     </div>
                  </div>
                  <div className="flex-1 flex items-center gap-4 px-6 py-3 w-full">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                     </div>
                     <div className="text-left cursor-pointer group">
                        <p className="text-[11px] text-white/60 font-bold uppercase tracking-widest mb-0.5">Guests</p>
                        <p className="text-sm text-white font-semibold group-hover:text-gray-200 transition">2 Guests ▼</p>
                     </div>
                  </div>
                  <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg shrink-0 w-full md:w-auto m-1">
                     Search
                  </button>
               </motion.div>
            </div>
         </div>
         
         {/* Overlapping Stat Cards */}
         <div className="relative z-20 mx-auto max-w-[1200px] px-6 -mt-12 md:-mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
               {stats.map((stat, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.8 + (i * 0.1), ease: "easeOut" }}
                     className="bg-white rounded-[2rem] p-6 md:p-8 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:-translate-y-1 transition-transform duration-300"
                  >
                     <h3 className="text-3xl md:text-[40px] font-bold text-[#111] mb-3 tracking-tight">{stat.value}</h3>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">{stat.label}</p>
                  </motion.div>
               ))}
            </div>
         </div>

      </div>
    </section>
  );
}
