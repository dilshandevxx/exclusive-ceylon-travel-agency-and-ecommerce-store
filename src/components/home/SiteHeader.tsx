import Link from "next/link";
import { IconBag, IconSearch, IconUser, LogoMark } from "./icons";

const nav = [
  { href: "/packages", label: "Packages" },
  { href: "/shop", label: "Travel shop" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-6 md:pt-8">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 md:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-white drop-shadow-sm"
        >
          <LogoMark className="h-8 w-8 md:h-9 md:w-9" />
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight md:text-xl">
            Exclusive Ceylon
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-8 lg:gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] font-medium tracking-wide text-white/95 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 text-white sm:gap-2">
          <button
            type="button"
            className="rounded-md p-2 transition hover:bg-white/10"
            aria-label="Search"
          >
            <IconSearch />
          </button>
          <Link
            href="/shop"
            className="rounded-md p-2 transition hover:bg-white/10"
            aria-label="Shopping bag"
          >
            <IconBag />
          </Link>
          <Link
            href="/account"
            className="rounded-md p-2 transition hover:bg-white/10"
            aria-label="Account"
          >
            <IconUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
