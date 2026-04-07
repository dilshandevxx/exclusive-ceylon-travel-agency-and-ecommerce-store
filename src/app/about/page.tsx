import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { HomeFooter } from "@/components/home/HomeFooter";
import { MobileNav } from "@/components/home/MobileNav";
import { InnerHeader } from "@/components/layout/InnerHeader";
import { founder, founderNarrative } from "@/lib/brand";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <InnerHeader activeHref="/about" />
      </div>

      <main>
        <header className="border-b border-[#0d1117]/08 bg-[#f8f8f8] px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[800px]">
            <nav className="text-[11px] font-medium tracking-[0.15em] text-[#0d1117]/45 uppercase">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-[#0d1117]">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-[#0d1117]/25">
                  /
                </li>
                <li className="text-[#0d1117]/80">About</li>
              </ol>
            </nav>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-[#0d1117] sm:text-5xl">
              Our story
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#0d1117]/65">
              Exclusive Ceylon is a lifestyle-driven Sri Lankan brand founded in{" "}
              {founder.origin} in {founder.foundingYear}—built to celebrate the
              island&apos;s beauty, culture, craftsmanship, and meaningful
              experiences.
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-[800px] px-5 py-14 md:px-10 md:py-20">
          {founderNarrative.map((section) => (
            <section key={section.title} className="mb-14 last:mb-0">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#0d1117]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-[#0d1117]/70">
                {section.paragraphs.map((p, i) => (
                  <p key={`${section.title}-${i}`}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16 border-t border-[#0d1117]/10 pt-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#0d1117]">
              Three divisions, one ecosystem
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-[#0d1117]/70">
              <li>
                <strong className="font-semibold text-[#0d1117]">
                  Lifestyle Studio
                </strong>
                —curated lifestyle products and refined island design.
              </li>
              <li>
                <strong className="font-semibold text-[#0d1117]">
                  Trails Wellassa Travel Experiences
                </strong>
                —authentic village travel and immersive journeys.
              </li>
              <li>
                <strong className="font-semibold text-[#0d1117]">
                  Promises Moments Events
                </strong>
                —personalized events and celebrations.
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-[#0d1117]/70">
              Together, these divisions create a platform where visitors and
              locals can discover slow living, tradition, and refined luxury—
              woven into one coherent Exclusive Ceylon experience.
            </p>
          </section>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-md bg-[#0a0a0a] px-6 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-black"
            >
              Lifestyle Studio
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-md border border-[#0d1117] px-6 py-3 text-xs font-semibold tracking-[0.12em] text-[#0d1117] uppercase transition hover:bg-[#0d1117] hover:text-white"
            >
              Trails Wellassa
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-[#0d1117]/25 px-6 py-3 text-xs font-semibold tracking-[0.12em] text-[#0d1117] uppercase transition hover:border-[#0d1117]/40"
            >
              Promises Moments
            </Link>
          </div>
        </article>
      </main>

      <MobileNav variant="page" activeHref="/about" />
      <HomeFooter />
    </>
  );
}
