import Link from "next/link";

const links = [
  { href: "/packages", label: "Packages" },
  { href: "/shop", label: "Travel shop" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
  return (
    <nav
      className="border-t border-white/15 bg-[#0d1117]/90 px-5 py-3 backdrop-blur-md md:hidden"
      aria-label="Mobile primary"
    >
      <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[12px] font-medium tracking-wide text-white/90"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
