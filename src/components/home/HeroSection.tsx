"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Curated mixed gallery of Travel and Shop items
const galleryItems = [
  {
    id: 1,
    title: "South Coast Whales",
    type: "Travel",
    href: "/packages/south-coast",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    position: "top-[10%] left-[5%] w-[25vw] max-w-[300px] aspect-[4/5]",
    speed: 0.05,
  },
  {
    id: 2,
    title: "Packable Daypack",
    type: "Shop",
    href: "/shop",
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
    position: "top-[15%] right-[8%] w-[20vw] max-w-[250px] aspect-square",
    speed: 0.03,
  },
  {
    id: 3,
    title: "Tea Country Escape",
    type: "Travel",
    href: "/packages/tea-country",
    img: "https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=600&q=80",
    position: "top-[55%] left-[12%] w-[22vw] max-w-[280px] aspect-video",
    speed: 0.04,
  },
  {
    id: 4,
    title: "UV Field Hat",
    type: "Shop",
    href: "/shop",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80",
    position: "bottom-[10%] right-[15%] w-[18vw] max-w-[220px] aspect-[3/4]",
    speed: 0.06,
  },
  {
    id: 5,
    title: "Galle Fort Heritage",
    type: "Travel",
    href: "/packages/galle",
    img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
    position: "top-[60%] right-[35%] w-[24vw] max-w-[300px] aspect-[4/5]",
    speed: 0.02,
  },
  {
    id: 6,
    title: "Insulated Bottle",
    type: "Shop",
    href: "/shop",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    position: "top-[25%] left-[35%] w-[15vw] max-w-[200px] aspect-[3/4]",
    speed: 0.07,
  },
];

export function HeroSection() {
  const [hoveredItem, setHoveredItem] = useState<typeof galleryItems[0] | null>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x * 100); // Max offset 50px
      mouseY.set(y * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#0d1317]">
      <SiteHeader />

      {/* Parallax Floating Gallery */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            style={{
              x: useSpring(useMotionValue(0), { stiffness: 50, damping: 20 }), // We map this below
              y: useSpring(useMotionValue(0), { stiffness: 50, damping: 20 }),
            }}
            className={`absolute ${item.position} overflow-hidden rounded-sm transition-transform duration-500`}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Hack: Framer motion style mapping in render to keep it simple */}
            <motion.div
              style={{
                x: springX.get() * item.speed * -10, // Move opposite to mouse
                y: springY.get() * item.speed * -10,
              }}
              className="absolute inset-0 h-[120%] w-[120%] -left-[10%] -top-[10%]"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 0vw, 30vw"
                className="object-cover opacity-40 mix-blend-screen transition-all duration-700 ease-out hover:opacity-100 hover:scale-110 cursor-pointer"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Fallback Slideshow Background */}
      <div className="absolute inset-0 z-0 block md:hidden opacity-30">
        <Image
           src={galleryItems[0].img}
           alt="Background"
           fill
           className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1317]/80 to-[#0d1317]" />
      </div>

      {/* Central Interactive Title */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-dark pointer-events-auto flex flex-col items-center justify-center rounded-sm p-12 shadow-2xl backdrop-blur-xl"
        >
          {/* Interactive Subtitle */}
          <div className="h-6 mb-8 overflow-hidden">
             <AnimatePresence mode="wait">
                <motion.p
                  key={hoveredItem ? hoveredItem.id : "default-subtitle"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="font-sans text-[10px] font-bold text-white uppercase tracking-[0.4em]"
                >
                  {hoveredItem ? `Interactive Preview` : `EST. 2024 • BIBILE`}
                </motion.p>
             </AnimatePresence>
          </div>

          {/* Interactive Main Title */}
          <h1 className="h-[120px] sm:h-[180px] md:h-[220px] overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
               {hoveredItem ? (
                 <motion.div
                   key={`hovered-${hoveredItem.id}`}
                   initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                   exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                   className="flex flex-col items-center"
                 >
                    <span className="block font-[family-name:var(--font-serif)] text-5xl font-light leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
                       {hoveredItem.type === "Travel" ? "Explore" : "Discover"}
                    </span>
                    <span className="mt-4 block font-[family-name:var(--font-serif)] text-4xl font-light italic text-[var(--accent-gold)] sm:text-6xl md:text-7xl">
                       {hoveredItem.title}
                    </span>
                 </motion.div>
               ) : (
                 <motion.div
                   key="default-title"
                   initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                   exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 >
                    <span className="block font-[family-name:var(--font-serif)] text-6xl font-light leading-[0.9] tracking-[-0.02em] text-white sm:text-8xl md:text-9xl lg:text-[10rem]">
                       Exclusive
                    </span>
                    <span className="block font-[family-name:var(--font-serif)] text-6xl font-light italic leading-[0.9] tracking-tight text-white/90 sm:text-8xl md:text-9xl lg:text-[10rem]">
                       Ceylon
                    </span>
                 </motion.div>
               )}
            </AnimatePresence>
          </h1>

          {/* Action Button that changes based on hover */}
          <div className="mt-12 h-14">
             <AnimatePresence mode="wait">
                <motion.div
                   key={hoveredItem ? hoveredItem.id : "default-actions"}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.4 }}
                >
                   {hoveredItem ? (
                     <Link
                       href={hoveredItem.href}
                       className="group flex items-center gap-6 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[10px] font-bold tracking-[0.3em] text-white uppercase transition-all duration-500 hover:bg-white/10 hover:border-white/40"
                     >
                       <span>View Details</span>
                       <div className="h-[1px] w-8 bg-white/40 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
                     </Link>
                   ) : (
                     <div className="flex gap-6">
                       <Link
                         href="/packages"
                         className="group flex items-center gap-6 rounded-full border border-white/10 px-8 py-4 text-[10px] font-bold tracking-[0.3em] text-white uppercase transition-all duration-500 hover:border-white/30"
                       >
                         <span>Journeys</span>
                         <div className="h-[1px] w-8 bg-white/20 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
                       </Link>
                       <Link
                         href="/shop"
                         className="group flex items-center gap-6 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 px-8 py-4 text-[10px] font-bold tracking-[0.3em] text-[var(--accent-gold)] uppercase transition-all duration-500 hover:bg-[var(--accent-gold)]/20"
                       >
                         <span>Studio</span>
                         <div className="h-[1px] w-8 bg-[var(--accent-gold)]/40 transition-all duration-500 group-hover:w-12 group-hover:bg-[var(--accent-gold)]" />
                       </Link>
                     </div>
                   )}
                </motion.div>
             </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
