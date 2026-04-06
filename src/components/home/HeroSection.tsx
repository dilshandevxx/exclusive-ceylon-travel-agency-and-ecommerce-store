import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";

const heroImage =
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2400&q=80";

const cardImage =
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80";

const heroFeatures = [
  "Curated local hosts",
  "Premium gear tested on-island",
  "Flexible booking",
];

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
                  alt="Compact travel backpack"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white">
                Island-ready carry system
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Weather-sealed packs and organizers built for humidity, trains,
                and tea-country trails.
              </p>
              <Link
                href="/shop"
                className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-[#0a0a0a] px-5 py-3 text-xs font-semibold tracking-[0.15em] text-white uppercase transition hover:bg-black"
              >
                Shop now
              </Link>
            </div>
          </aside>

          <div className="order-1 flex flex-col justify-center text-center lg:order-2 lg:pr-4 lg:text-right">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl xl:text-7xl">
              Journeys that
              <br />
              move with you
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/85 lg:ml-auto lg:mr-0 lg:max-w-lg lg:text-lg">
              Bespoke Sri Lanka itineraries, trusted guides, and travel
              essentials—one refined experience from Colombo to the coast.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-xs font-semibold tracking-[0.12em] text-[#0d1117] uppercase transition hover:bg-white/90"
              >
                View packages
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-md border border-white/50 bg-transparent px-6 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-white/10"
              >
                Browse shop
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 md:px-10">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3 border-t border-white/25 pt-4 sm:flex-row sm:items-center sm:justify-between">
            {heroFeatures.map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 text-left text-[11px] font-medium tracking-[0.18em] text-white/70 uppercase sm:text-xs"
              >
                <span className="h-px w-8 shrink-0 bg-white/35 sm:w-10" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
