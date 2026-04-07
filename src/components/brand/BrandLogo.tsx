import Image from "next/image";
import Link from "next/link";
import { brandLogoSrc } from "@/lib/brand-assets";

type Variant = "header-on-dark" | "header-on-light" | "footer";

/** Approximate intrinsic ratio for Next/Image (wide wordmark); visual size comes from wrapper + max-h / w-auto. */
const INTRINSIC_W = 640;
const INTRINSIC_H = 180;

const variantConfig: Record<
  Variant,
  {
    wrap: string;
    img: string;
    priority: boolean;
    sizes: string;
  }
> = {
  "header-on-dark": {
    wrap:
      "inline-flex h-[2.6rem] max-w-[min(320px,82vw)] items-center justify-start sm:h-[3rem] sm:max-w-[min(340px,78vw)]",
    img: "max-h-full w-auto max-w-full rounded-none object-contain object-left drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]",
    priority: true,
    sizes: "(max-width: 640px) 82vw, 340px",
  },
  "header-on-light": {
    wrap:
      "inline-flex h-[2.6rem] max-w-[min(320px,82vw)] items-center justify-start sm:h-[3rem] sm:max-w-[min(340px,78vw)]",
    img: "max-h-full w-auto max-w-full rounded-none object-contain object-left",
    priority: false,
    sizes: "(max-width: 640px) 82vw, 340px",
  },
  footer: {
    wrap:
      "inline-flex h-8 max-w-[min(240px,90%)] items-center justify-start sm:h-9",
    img: "max-h-full w-auto max-w-full rounded-none object-contain object-left",
    priority: false,
    sizes: "240px",
  },
};

type Props = {
  variant: Variant;
  className?: string;
};

export function BrandLogo({ variant, className = "" }: Props) {
  const cfg = variantConfig[variant];

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center leading-none ${className}`}
    >
      <span className="sr-only">Exclusive Ceylon — Home</span>
      <span className={cfg.wrap}>
        <Image
          src={brandLogoSrc}
          alt=""
          width={INTRINSIC_W}
          height={INTRINSIC_H}
          sizes={cfg.sizes}
          priority={cfg.priority}
          quality={92}
          className={cfg.img}
        />
      </span>
    </Link>
  );
}
