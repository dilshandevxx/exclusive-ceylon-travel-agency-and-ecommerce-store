import Link from "next/link";
import { primaryNav } from "@/lib/site-nav";

type Props = {
  variant?: "hero" | "page";
  activeHref?: string;
};

export function MobileNav({ variant = "hero", activeHref }: Props) {
  const isPage = variant === "page";

  return (
    <nav
      className={
        isPage
          ? "border-t border-[#0d1117]/10 bg-[#f8f8f8] px-5 py-3 md:hidden"
          : "border-t border-white/15 bg-[#0d1117]/90 px-5 py-3 backdrop-blur-md md:hidden"
      }
      aria-label="Mobile primary"
    >
      <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {primaryNav.map((l) => {
          const active = activeHref === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  active
                    ? isPage
                      ? "text-[12px] font-semibold text-[#0d1117]"
                      : "text-[12px] font-semibold text-white"
                    : isPage
                      ? "text-[12px] font-medium tracking-wide text-[#0d1117]/70"
                      : "text-[12px] font-medium tracking-wide text-white/90"
                }
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
