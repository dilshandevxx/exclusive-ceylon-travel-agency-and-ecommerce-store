import { BrandLogo } from "@/components/brand/BrandLogo";
import { IconBag, IconSearch, IconUser } from "@/components/home/icons";
import { primaryNav } from "@/lib/site-nav";
import Link from "next/link";

type Props = {
  activeHref?: string;
};

export function InnerHeader({ activeHref }: Props) {
  return (
    <header className="relative border-b border-[#0d1117]/08 bg-[#f8f8f8]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 md:gap-6 md:px-10">
        <BrandLogo variant="header-on-light" />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-8 lg:gap-10">
            {primaryNav.map((item) => {
              const active = activeHref === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      active
                        ? "text-[13px] font-semibold text-[#0d1117]"
                        : "text-[13px] font-medium tracking-wide text-[#0d1117]/65 transition hover:text-[#0d1117]"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 text-[#0d1117] sm:gap-2">
          <button
            type="button"
            className="rounded-md p-2 transition hover:bg-[#0d1117]/06"
            aria-label="Search"
          >
            <IconSearch />
          </button>
          <Link
            href="/shop"
            className="rounded-md p-2 transition hover:bg-[#0d1117]/06"
            aria-label="Shopping bag"
          >
            <IconBag />
          </Link>
          <Link
            href="/account"
            className="rounded-md p-2 transition hover:bg-[#0d1117]/06"
            aria-label="Account"
          >
            <IconUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
