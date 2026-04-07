import Image from "next/image";
import Link from "next/link";
import {
  brandOrigin,
  brandVision,
  divisions,
  founder,
} from "@/lib/brand";
import { EcosystemSection } from "./EcosystemSection";

const secondaryImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80";

const packageCoast =
  "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80";

const packageHighlands =
  "https://images.unsplash.com/photo-1596422847843-9e26051876bd?auto=format&fit=crop&w=800&q=80";

const panelHero =
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80";

const shopItems = [
  {
    title: "UV field hat",
    price: "$48",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Packable daypack",
    price: "$112",
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Insulated bottle",
    price: "$36",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80",
  },
];

const packages = [
  {
    title: "South coast & whales",
    desc: "Mirissa blues, Galle fort walks, and sunset sails with a private host.",
    from: "From $1,890",
    href: "/packages/south-coast",
    image: packageCoast,
  },
  {
    title: "Tea country escape",
    desc: "Ella trains, misty plantations, and slow mornings in boutique stays.",
    from: "From $2,240",
    href: "/packages/tea-country",
    image: packageHighlands,
  },
];

function DotMapBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
        backgroundSize: "10px 10px",
      }}
      aria-hidden
    />
  );
}

export function BelowFold() {
  return (
    <div className="bg-[#f8f8f8]">
      <EcosystemSection />

      <div className="mx-auto max-w-[1600px] px-5 pb-16 md:px-10 md:pb-24">
        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-14 xl:gap-20">
          <div className="space-y-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.1] tracking-tight text-[#0d1117] sm:text-4xl lg:text-5xl">
                Rooted in Bibile—
                <span className="text-[#1e3a5f]">crafted for the island</span>
              </h2>
              <div className="space-y-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-sm">
                  <Image
                    src={secondaryImage}
                    alt="Tropical resort pool overlooking the ocean"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d1117]">
                    Our story begins in the village
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0d1117]/65">
                    {brandOrigin}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#0d1117]/65">
                    Together, Lifestyle Studio, Trails Wellassa Travel
                    Experiences, and Promises Moments Events form one lifestyle
                    ecosystem—so guests and locals can experience nature,
                    culture, and refined island luxury in one place.
                  </p>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex text-sm font-semibold text-[#1e3a5f] underline-offset-4 transition hover:underline"
                  >
                    Read our founder story
                  </Link>
                </div>
              </div>
            </div>

            <section aria-labelledby="shop-heading">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#0d1117]/45 uppercase">
                    Lifestyle Studio
                  </p>
                  <h2
                    id="shop-heading"
                    className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#0d1117]"
                  >
                    Curated travel essentials
                  </h2>
                  <p className="mt-1 text-sm text-[#0d1117]/60">
                    Pieces chosen for climate, movement, and everyday elegance on
                    the road.
                  </p>
                </div>
                <Link
                  href="/shop"
                  className="inline-flex w-fit items-center justify-center rounded-md border border-[#0d1117] bg-transparent px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#0d1117] uppercase transition hover:bg-[#0d1117] hover:text-white"
                >
                  Shop all
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {shopItems.map((item) => (
                  <Link
                    key={item.title}
                    href="/shop"
                    className="group overflow-hidden rounded-md bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
                  >
                    <div className="relative aspect-square overflow-hidden rounded bg-[#f0f0f0]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#0d1117]">
                      {item.title}
                    </p>
                    <p className="text-sm font-medium text-[#c45c26]">
                      {item.price}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-md bg-[#0d1117] px-6 py-10 text-white shadow-lg">
              <DotMapBg />
              <p className="relative text-[11px] font-medium tracking-[0.25em] text-white/55 uppercase">
                Founded in {founder.origin}
              </p>
              <p className="relative mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight md:text-6xl">
                {founder.foundingYear}
              </p>
              <p className="relative mt-2 max-w-[260px] text-sm leading-relaxed text-white/75">
                Exclusive Ceylon brings hospitality, lifestyle, and village-born
                insight into one refined platform.
              </p>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-[#0d1117]/45 uppercase">
                Trails Wellassa Travel Experiences
              </p>
              {packages.map((pkg) => (
                <article
                  key={pkg.href}
                  className="mb-4 overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] last:mb-0"
                >
                  <Link href={pkg.href} className="block">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[#0d1117]">
                        {pkg.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#0d1117]/65">
                        {pkg.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#1e3a5f]">
                          {pkg.from}
                        </span>
                        <span className="rounded-md bg-[#0a0a0a] px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                          Book
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <Link
              href="/contact"
              className="group relative flex min-h-[220px] overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={panelHero}
                alt="Ocean shoreline at sunset"
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/85 via-[#0d1117]/35 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
                  Promises Moments Events
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  Special moments,
                  <br />
                  thoughtfully staged
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Personalized celebrations and bespoke gatherings across the
                  island.
                </p>
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
