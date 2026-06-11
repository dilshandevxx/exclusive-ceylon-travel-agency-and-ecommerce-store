"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Star, Heart, Quote, Search, MapPin, Wallet, Compass, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function BelowFold() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { icon: Search, title: "Find your destination", desc: "Embark on a journey to discover your dream destination, where adventure and relaxation await." },
    { icon: Mail, title: "Contact us", desc: "Reach out to our dedicated travel specialists to customize your perfect itinerary." },
    { icon: MapPin, title: "Book a ticket", desc: "Easily secure your travel arrangements with our seamless booking process." },
    { icon: Compass, title: "Explore destination", desc: "Immerse yourself in the local culture and create unforgettable memories." }
  ];

  const packages = [
    { title: "Yala Safari Package", price: "$250", duration: "7 Days", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80" },
    { title: "Ella Train Journey", price: "$210", duration: "5 Days", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80" },
    { title: "Galle Fort Tour", price: "$180", duration: "3 Days", image: "https://images.unsplash.com/photo-1620849641777-66bd327361cd?auto=format&fit=crop&w=800&q=80" },
  ];

  const shopItems = [
    { name: "Silver Tips White Tea", price: "$45", img: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=600&q=80" },
    { name: "Linen Safari Shirt", price: "$125", img: "https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&w=600&q=80" },
    { name: "Artisan Clay Pot", price: "$85", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80" },
    { name: "Ceylon Cinnamon", price: "$28", img: "https://images.unsplash.com/photo-1608933200779-19ecac720e5e?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="bg-[#FAFAFA] font-sans text-[#111] py-24 pb-32 overflow-hidden">
      
      {/* 1. SRI LANKAN TOURISM (Bento Grid) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-[1200px] px-6 md:px-8 mb-32"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
           <div>
              <motion.p variants={fadeUpVariant} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">INTRODUCTION</motion.p>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight">Sri Lankan tourism</motion.h2>
           </div>
           <motion.p variants={fadeUpVariant} className="text-gray-500 text-sm max-w-md font-medium leading-relaxed">
             Sri Lanka's natural beauty includes lush forests, ancient ruins, and endless white sand beaches waiting for you.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[500px]">
           {/* Top Left (Wide) */}
           <motion.div variants={fadeUpVariant} className="md:col-span-2 relative rounded-3xl overflow-hidden group min-h-[240px]">
              <Image src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=1200&q=80" alt="Sigiriya" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-bold uppercase tracking-widest mb-1">CULTURAL HERITAGE</p>
                 <h3 className="text-2xl font-semibold">Lion's Rock, Sigiriya</h3>
              </div>
           </motion.div>

           {/* Top Right (Small) */}
           <motion.div variants={fadeUpVariant} className="md:col-span-1 relative rounded-3xl overflow-hidden group min-h-[240px]">
              <Image src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80" alt="Beach" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-bold uppercase tracking-widest mb-1">COASTAL</p>
                 <h3 className="text-xl font-semibold">Unawatuna</h3>
              </div>
           </motion.div>

           {/* Bottom Left (Small) */}
           <motion.div variants={fadeUpVariant} className="md:col-span-1 relative rounded-3xl overflow-hidden group min-h-[240px]">
              <Image src="https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=800&q=80" alt="Tea" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-bold uppercase tracking-widest mb-1">HIGHLANDS</p>
                 <h3 className="text-xl font-semibold">Nuwara Eliya</h3>
              </div>
           </motion.div>

           {/* Bottom Right (Wide) */}
           <motion.div variants={fadeUpVariant} className="md:col-span-2 relative rounded-3xl overflow-hidden group min-h-[240px]">
              <Image src="https://images.unsplash.com/photo-1620849641777-66bd327361cd?auto=format&fit=crop&w=1200&q=80" alt="Falls" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-bold uppercase tracking-widest mb-1">NATURE</p>
                 <h3 className="text-2xl font-semibold">Bambarakanda Falls</h3>
              </div>
           </motion.div>
        </div>
      </motion.section>

      {/* 2. ONE CLICK FOR YOU (Accordion) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="mx-auto max-w-[1200px] px-6 md:px-8 mb-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
           {/* Left Image */}
           <motion.div variants={fadeUpVariant} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <Image src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1000&q=80" alt="Traveler" fill className="object-cover transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-x-6 bottom-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex items-center justify-between">
                 <p className="text-white text-sm font-medium w-2/3">Launch your journey faster than ever. We manage every detail seamlessly.</p>
                 <button className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shrink-0 hover:bg-gray-100 transition shadow-lg">
                    <ArrowRight className="w-5 h-5" />
                 </button>
              </div>
           </motion.div>

           {/* Right Accordion */}
           <div className="flex flex-col gap-6">
              <motion.div variants={fadeUpVariant}>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">HOW IT WORKS</p>
                 <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">One click for you</h2>
              </motion.div>

              <div className="space-y-6">
                 {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = activeStep === idx;
                    return (
                       <motion.div 
                          key={idx} 
                          variants={fadeUpVariant}
                          onClick={() => setActiveStep(idx)}
                          className={`cursor-pointer border border-gray-100 rounded-3xl p-6 transition-all duration-300 ${isActive ? 'bg-white shadow-xl shadow-black/5 scale-[1.02]' : 'bg-transparent hover:bg-white/50'}`}
                       >
                          <div className="flex gap-6 items-start">
                             <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                                <Icon className="w-5 h-5" />
                             </div>
                             <div>
                                <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-black' : 'text-gray-400'}`}>{step.title}</h3>
                                <motion.div 
                                   initial={false} 
                                   animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }} 
                                   className="overflow-hidden"
                                >
                                   <p className="text-gray-500 text-sm leading-relaxed font-medium pb-2">{step.desc}</p>
                                </motion.div>
                             </div>
                          </div>
                       </motion.div>
                    );
                 })}
              </div>
           </div>
        </div>
      </motion.section>

      {/* 3. OUR TOURIST DESTINATION (Cards) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-[1200px] px-6 md:px-8 mb-40"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
           <div>
              <motion.p variants={fadeUpVariant} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">LOCATIONS</motion.p>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight">Our tourist destination</motion.h2>
           </div>
           <motion.p variants={fadeUpVariant} className="text-gray-500 text-sm max-w-sm font-medium leading-relaxed">
             Our trusted destinations offer an unmatched blend of luxury, history, and natural splendor.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {packages.map((pkg) => (
             <motion.div key={pkg.title} variants={fadeUpVariant} className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-lg cursor-pointer">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" />
                
                {/* Top Tags */}
                <div className="absolute top-6 inset-x-6 flex justify-between items-start">
                   <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold">
                      {pkg.duration}
                   </div>
                   <div className="bg-white/20 backdrop-blur-md border border-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                   </div>
                </div>

                {/* Bottom Glass Bar */}
                <div className="absolute bottom-6 inset-x-6 bg-black/30 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex justify-between items-center text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                   <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/60 font-bold mb-1">SRI LANKA</p>
                      <h3 className="text-sm font-semibold">{pkg.title}</h3>
                   </div>
                   <div className="text-right">
                      <p className="text-lg font-bold">{pkg.price}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
        
        <motion.div variants={fadeUpVariant} className="flex justify-center">
           <Link href="/packages" className="bg-black text-white px-10 py-4 rounded-full text-xs font-bold hover:bg-gray-800 transition shadow-xl hover:-translate-y-1">
              View All
           </Link>
        </motion.div>
      </motion.section>

      {/* 4. LIFESTYLE STUDIO (Custom Shop Addition matching aesthetic) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="mx-auto max-w-[1200px] px-6 md:px-8 mb-40"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
           <div>
              <motion.p variants={fadeUpVariant} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">MARKETPLACE</motion.p>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight">Lifestyle Studio</motion.h2>
           </div>
           <motion.div variants={fadeUpVariant}>
             <Link href="/shop" className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-gray-800 transition shadow-lg">
                Visit Shop
             </Link>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {shopItems.map((item) => (
              <motion.div key={item.name} variants={fadeUpVariant} className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-gray-100">
                 <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gray-50 mb-6">
                    <Image src={item.img} alt={item.name} fill className="object-cover mix-blend-multiply p-6 transition-transform duration-[2s] group-hover:scale-110" />
                    <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors z-10">
                       <Heart className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-500 group-hover:fill-red-500 transition-colors" />
                    </button>
                 </div>
                 <div className="px-2 pb-2">
                    <h3 className="font-bold text-[15px] mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-sm font-medium">{item.price}</p>
                 </div>
              </motion.div>
           ))}
        </div>
      </motion.section>

      {/* 5. TESTIMONIAL */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mx-auto max-w-[1000px] px-6 md:px-8 mb-40 border-t border-gray-200 pt-32"
      >
         <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-r border-transparent md:border-gray-200 pr-0 md:pr-12">
               <div className="w-20 h-20 rounded-full overflow-hidden mb-6 shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80" alt="Reviewer" width={80} height={80} className="object-cover w-full h-full" />
               </div>
               <h4 className="font-bold text-lg mb-1">Donald Sullivan</h4>
               <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">FOUNDER, TECH</p>
               <div className="flex gap-4 text-gray-400">
                  <button className="hover:text-black transition"><ArrowLeft className="w-5 h-5" /></button>
                  <button className="text-black hover:text-gray-600 transition"><ArrowRight className="w-5 h-5" /></button>
               </div>
            </div>
            
            <div className="relative">
               <Quote className="absolute -top-12 -left-10 w-24 h-24 text-gray-100 -z-10" />
               <p className="text-xl md:text-3xl font-medium leading-[1.6] tracking-tight text-gray-600">
                  "This travel website is incredibly easy to use. Like how they present various destination options and travel packages with clear details. Highly recommended for any traveler."
               </p>
            </div>
         </div>
      </motion.section>

      {/* 6. OUR TRAVEL MEMORIES (Blog) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="mx-auto max-w-[1200px] px-6 md:px-8"
      >
        <div className="text-center mb-16">
           <motion.p variants={fadeUpVariant} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">OUR BLOG</motion.p>
           <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold tracking-tight">Our travel memories</motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <motion.div variants={fadeUpVariant} className="bg-white rounded-[2.5rem] p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-6">
                 <Image src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=1000&q=80" alt="Blog post" fill className="object-cover transition-transform duration-[3s] group-hover:scale-105" />
              </div>
              <div className="px-4 pb-4">
                 <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">MARCH 12, 2026</p>
                 <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-gray-600 transition-colors">2026 Travel trends – what you need to know</h3>
                 <p className="text-gray-500 text-sm font-medium leading-relaxed">Discover the up and coming destinations and travel styles that will define the year ahead in global exploration.</p>
              </div>
           </motion.div>

           <motion.div variants={fadeUpVariant} className="bg-white rounded-[2.5rem] p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-6">
                 <Image src="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1000&q=80" alt="Blog post" fill className="object-cover transition-transform duration-[3s] group-hover:scale-105" />
              </div>
              <div className="px-4 pb-4">
                 <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">FEB 28, 2026</p>
                 <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-gray-600 transition-colors">Jeep Adventure in the new attraction for tourism</h3>
                 <p className="text-gray-500 text-sm font-medium leading-relaxed">Experience the thrill of off-road exploration as jeep tours become the must-do activity for adventure seekers.</p>
              </div>
           </motion.div>
        </div>

        <motion.div variants={fadeUpVariant} className="flex justify-center">
           <Link href="/journal" className="bg-black text-white px-10 py-4 rounded-full text-xs font-bold hover:bg-gray-800 transition shadow-xl hover:-translate-y-1">
              View All
           </Link>
        </motion.div>

      </motion.section>

    </div>
  );
}
