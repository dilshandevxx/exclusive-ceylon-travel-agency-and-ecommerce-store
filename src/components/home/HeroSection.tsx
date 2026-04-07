import Image from "next/image";
import Link from "next/link";
import { brandMission, brandTagline, divisions } from "@/lib/brand";
import { SiteHeader } from "./SiteHeader";

const heroImage =
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2400&q=80";

const cardImage =
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80";

const taglineParts = brandTagline.split(" | ");

export function HeroSection() {
  return (
    <section className="relative min-h-[min(92vh,900px)] w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="Sigiriya rock and lush landscape in Sri Lanka"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/55 via-[#0d1117]/25 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/50 via-transparent to-[#0d1117]/20"
        aria-hidden
      />

      <SiteHeader />

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,900px)] max-w-[1600px] flex-col justify-center px-5 pb-32 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <aside className="order-2 lg:order-1 lg:self-center">
            <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/25 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:p-6 lg:max-w-none">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
                <Image
                  src={cardImage}
                  alt="Curated lifestyle and travel essentials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase">
                Lifestyle Studio
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white leading-tight">
                Curated for slow island living
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Lifestyle products and essentials selected for climate, craft, and
                the rhythm of authentic Sri Lankan living.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-xs font-bold tracking-[0.15em] text-[#0d1117] uppercase transition hover:bg-white/90"
              >
                Shop Collection
              </Link>
            </div>
          </aside>

          <div className="order-1 flex flex-col justify-center text-center lg:order-2 lg:pr-4 lg:text-right">
            <p className="mx-auto mb-5 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase sm:text-[11px] lg:ml-auto lg:mr-0 lg:justify-end">
              {taglineParts.map((part, i) => (
                <span key={part} className="inline-flex items-center gap-3">
                  {i > 0 ? (
                    <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" aria-hidden />
                  ) : null}
                  {part.trim()}
                </span>
              ))}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-white">
              <span className="block text-4xl font-bold leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Exclusive Ceylon
              </span>
              <span className="mt-4 block text-xl font-medium leading-[1.2] tracking-normal text-white/90 sm:text-2xl md:text-3xl lg:text-4xl">
                A different side of Sri Lanka
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-md text-base leading-[1.8] text-white/70 sm:text-lg lg:ml-auto lg:mr-0 lg:max-w-lg">
              {brandMission}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-end">
              <Link
                href="/packages"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#c45c26] px-8 py-4 text-[11px] font-bold tracking-[0.15em] text-white uppercase transition hover:bg-[#a64b1d] sm:w-auto"
              >
                Trails Wellassa
              </Link>
              <Link
                href="/shop"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-[11px] font-bold tracking-[0.15em] text-white uppercase backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
              >
                Lifestyle Studio
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-8 md:px-10">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            {divisions.map((d) => (
              <div
                key={d.short}
                className="flex items-center gap-4 text-left text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase sm:text-[11px]"
              >
                <span className="h-px w-8 shrink-0 bg-white/20" />
                <span>{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
