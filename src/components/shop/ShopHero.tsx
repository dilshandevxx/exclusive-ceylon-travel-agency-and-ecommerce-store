import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80";

export function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-[#0d1117]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/85 to-[#0d1117]/55"
          aria-hidden
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-20">
        <nav className="text-[11px] font-medium tracking-[0.15em] text-white/55 uppercase">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/35">
              /
            </li>
            <li className="text-white/90">Travel shop</li>
          </ol>
        </nav>
        <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          Travel essentials
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
          Gear we use on recce trips—breathable layers, resilient luggage, and
          small accessories tuned for Sri Lanka&apos;s coasts, rails, and
          highlands.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/85 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7eb8da]" aria-hidden />
          Free tracked shipping on orders over $150
        </p>
      </div>
    </section>
  );
}
