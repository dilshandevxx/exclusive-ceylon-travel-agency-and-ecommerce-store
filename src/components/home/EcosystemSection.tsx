"use client";

import Image from "next/image";
import Link from "next/link";
import { brandVision, divisions } from "@/lib/brand";

export function EcosystemSection() {
  const images = {
    "Lifestyle Studio": "/images/ecosystem/lifestyle-studio.png",
    "Trails Wellassa Travel Experiences": "/images/ecosystem/trails-wellassa.png",
    "Promises Moments Events": "/images/ecosystem/promises-moments.png",
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-16 max-w-4xl lg:mb-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#1e3a5f]/30"></span>
            <p className="text-[12px] font-bold tracking-[0.3em] text-[#1e3a5f]/60 uppercase">
              Our Vision
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-[#0d1117] sm:text-5xl lg:text-6xl">
            A lifestyle ecosystem for{" "}
            <span className="relative inline-block italic">
              authentic
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5" stroke="#c45c26" strokeWidth="2" fill="none" opacity="0.4" />
              </svg>
            </span>{" "}
            island living
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#0d1117]/70 md:text-xl lg:max-w-2xl">
            {brandVision}
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {divisions.map((division, idx) => (
            <Link
              key={division.short}
              href={division.href}
              className="group relative flex h-[500px] flex-col overflow-hidden rounded-2xl bg-[#0d1117] transition-all duration-700 hover:shadow-2xl hover:shadow-[#1e3a5f]/10 lg:h-[650px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={images[division.name as keyof typeof images]}
                  alt={division.name}
                  fill
                  className="object-cover opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent transition-opacity duration-700 group-hover:from-[#0d1117]/90" />
              </div>

              {/* Content Overlay */}
              <div className="relative mt-auto p-8 transition-transform duration-500 group-hover:-translate-y-2 lg:p-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 backdrop-blur-md">
                   <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">0{idx + 1}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {division.name}
                </h3>
                <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/70 transition-opacity duration-500 group-hover:text-white/90">
                  {division.description}
                </p>
                
                <div className="mt-8 flex items-center gap-3 text-white">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase underline-offset-8 transition-all group-hover:underline">
                    {division.cta}
                  </span>
                  <svg 
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c45c26]/10 blur-[100px] transition-opacity duration-700 group-hover:opacity-100 opacity-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
