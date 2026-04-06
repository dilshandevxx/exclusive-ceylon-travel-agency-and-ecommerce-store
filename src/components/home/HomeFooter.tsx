import Link from "next/link";

const cols = [
  {
    title: "Explore",
    links: [
      { href: "/packages", label: "Packages" },
      { href: "/shop", label: "Travel shop" },
      { href: "/stories", label: "Stories" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/policies", label: "Policies" },
      { href: "/account", label: "Account" },
    ],
  },
];

export function HomeFooter() {
  return (
    <footer className="border-t border-[#0d1117]/10 bg-[#f8f8f8]">
      <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#0d1117]">
              Exclusive Ceylon
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#0d1117]/60">
              Premium Sri Lanka travel design, trusted hosts, and essentials for
              the modern explorer.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#0d1117]/45 uppercase">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#0d1117]/70 transition hover:text-[#0d1117]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#0d1117]/10 pt-8 text-xs text-[#0d1117]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Exclusive Ceylon. All rights reserved.</p>
          <p className="text-[11px] tracking-wide">
            Colombo · Galle · Kandy · Ella
          </p>
        </div>
      </div>
    </footer>
  );
}
