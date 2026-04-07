import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { HomeFooter } from "@/components/home/HomeFooter";
import { MobileNav } from "@/components/home/MobileNav";
import { InnerHeader } from "@/components/layout/InnerHeader";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <InnerHeader activeHref="/contact" />
      </div>

      <main className="mx-auto max-w-[800px] px-5 py-14 md:px-10 md:py-20">
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
            <li className="text-[#0d1117]/80">Contact</li>
          </ol>
        </nav>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#0d1117] sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#0d1117]/65">
          For <strong className="font-semibold text-[#0d1117]">Promises Moments</strong>{" "}
          events, partnership enquiries, and bespoke experiences across Sri
          Lanka—we&apos;ll respond with care.
        </p>
        <p className="mt-8 text-base leading-relaxed text-[#0d1117]/70">
          A dedicated contact form and concierge details will appear here soon.
          Until then, reach out through your Exclusive Ceylon host or the channel
          you already use with our team.
        </p>
        <Link
          href="/about"
          className="mt-10 inline-flex text-sm font-semibold text-[#1e3a5f] underline-offset-4 transition hover:underline"
        >
          Read our story
        </Link>
      </main>

      <MobileNav variant="page" activeHref="/contact" />
      <HomeFooter />
    </>
  );
}
