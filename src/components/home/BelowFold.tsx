import Image from "next/image";
import Link from "next/link";

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
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-14 xl:gap-20">
          <div className="space-y-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.1] tracking-tight text-[#0d1117] sm:text-4xl lg:text-5xl">
                Join the expedition—
                <span className="text-[#1e3a5f]">no route too wild</span>
              </h2>
              <div className="space-y-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-sm">
                  <Image
                    src={secondaryImage}
                    alt="Resort pool overlooking tropical ocean"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d1117]">
                    Island-born expertise
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0d1117]/65">
                    We pair hand-picked stays with drivers who know the back
                    roads, the best hopper spots, and when the light hits the
                    fort walls just right. Add premium luggage and apparel
                    curated for tropical transit.
                  </p>
                </div>
              </div>
            </div>

            <section aria-labelledby="shop-heading">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h2
                    id="shop-heading"
                    className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#0d1117]"
                  >
                    Travel essentials
                  </h2>
                  <p className="mt-1 text-sm text-[#0d1117]/60">
                    Field-tested gear for heat, monsoon mist, and long rail days.
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
                Destinations crafted
              </p>
              <p className="relative mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold tracking-tight md:text-7xl">
                40+
              </p>
              <p className="relative mt-2 max-w-[240px] text-sm leading-relaxed text-white/75">
                Signature stops across cultural triangle, hill country, and the
                southern cape.
              </p>
            </div>

            {packages.map((pkg) => (
              <article
                key={pkg.href}
                className="overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
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

            <Link
              href="/packages"
              className="group relative flex min-h-[220px] overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={panelHero}
                alt="Tropical beach shoreline"
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/85 via-[#0d1117]/35 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  Safe,
                  <br />
                  seamless travel
                </p>
                <p className="mt-2 text-sm text-white/80">
                  24/7 concierge, vetted drivers, and clear cancellation windows.
                </p>
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
