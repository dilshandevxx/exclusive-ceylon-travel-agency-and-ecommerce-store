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

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,900px)] max-w-[1600px] flex-col justify-center px-5 pb-28 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <aside className="order-2 lg:order-1 lg:self-center">
            <div className="mx-auto w-full max-w-sm rounded-lg border border-white/35 bg-white/12 p-5 shadow-xl backdrop-blur-md md:p-6">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-md bg-white/10">
                <Image
                  src={cardImage}
                  alt="Curated lifestyle and travel essentials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
                Lifestyle Studio
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white">
                Curated for slow island living
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Lifestyle products and essentials selected for climate, craft, and
                the rhythm of authentic Sri Lankan living.
              </p>
              <Link
                href="/shop"
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-[#0a0a0a] px-5 py-3 text-xs font-semibold tracking-[0.15em] text-white uppercase transition hover:bg-black"
              >
                Shop Lifestyle Studio
              </Link>
            </div>
          </aside>

          <div className="order-1 flex flex-col justify-center text-center lg:order-2 lg:pr-4 lg:text-right">
            <p className="mx-auto mb-4 flex max-w-xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] font-medium tracking-[0.22em] text-white/75 uppercase sm:text-[11px] lg:ml-auto lg:mr-0 lg:justify-end">
              {taglineParts.map((part, i) => (
                <span key={part} className="inline-flex items-center gap-2">
                  {i > 0 ? (
                    <span className="text-white/35" aria-hidden>
                      |
                    </span>
                  ) : null}
                  {part.trim()}
                </span>
              ))}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-white drop-shadow-sm">
              <span className="block text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                Exclusive Ceylon
              </span>
              <span className="mt-3 block text-2xl font-semibold leading-[1.1] tracking-tight text-white/95 sm:text-3xl lg:text-4xl">
                A different side of
                <br />
                Sri Lanka
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/85 lg:ml-auto lg:mr-0 lg:max-w-lg lg:text-lg">
              {brandMission}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-xs font-semibold tracking-[0.12em] text-[#0d1117] uppercase transition hover:bg-white/90"
              >
                Trails Wellassa
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-md border border-white/50 bg-transparent px-6 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-white/10"
              >
                Lifestyle Studio
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/5 px-6 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-white/10"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 md:px-10">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3 border-t border-white/25 pt-4 sm:flex-row sm:items-center sm:justify-between">
            {divisions.map((d) => (
              <div
                key={d.short}
                className="flex items-center gap-3 text-left text-[10px] font-medium tracking-[0.14em] text-white/70 uppercase sm:text-[11px] sm:tracking-[0.18em] sm:text-xs"
              >
                <span className="h-px w-6 shrink-0 bg-white/35 sm:w-8" />
                <span className="line-clamp-2 sm:line-clamp-none">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
