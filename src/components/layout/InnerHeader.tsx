import Link from "next/link";

type Props = {
  activeHref?: string;
};

export function InnerHeader({ activeHref }: Props) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative w-full bg-[#FAFAFA] pt-8 pb-4 border-b border-gray-100">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="font-[family-name:var(--font-sans)] text-2xl font-bold tracking-tight text-black">
          EXCLUSIVE CEYLON
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition ${
                    activeHref === item.href
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-black text-sm font-bold flex items-center gap-1 hover:text-gray-600 transition">
             En <span className="text-[10px]">▼</span>
          </button>
          <Link 
            href="/contact" 
            className="flex items-center justify-center bg-black text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-gray-800 transition shadow-sm"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
