"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  shopCategories,
  shopProducts,
  type ShopCategory,
} from "./shop-data";
import { openWhatsAppInquiry } from "@/lib/whatsapp";

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function ShopCatalog() {
  const [category, setCategory] = useState<ShopCategory>("all");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">(
    "featured",
  );

  const filtered = useMemo(() => {
    let list =
      category === "all"
        ? [...shopProducts]
        : shopProducts.filter((p) => p.category === category);

    if (sort === "price-asc") {
      list = [...list].sort((a, b) => a.priceUsd - b.priceUsd);
    } else if (sort === "price-desc") {
      list = [...list].sort((a, b) => b.priceUsd - a.priceUsd);
    } else {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [category, sort]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-[#0d1117]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {shopCategories.map((c) => {
            const active = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={
                  active
                    ? "rounded-md bg-[#0d1117] px-4 py-2 text-xs font-semibold tracking-wide text-white"
                    : "rounded-md border border-[#0d1117]/15 bg-white px-4 py-2 text-xs font-medium tracking-wide text-[#0d1117]/75 transition hover:border-[#0d1117]/30"
                }
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="shop-sort"
            className="text-[11px] font-semibold tracking-[0.18em] text-[#0d1117]/45 uppercase"
          >
            Sort
          </label>
          <select
            id="shop-sort"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as typeof sort)
            }
            className="rounded-md border border-[#0d1117]/15 bg-white px-3 py-2 text-sm text-[#0d1117] outline-none focus:border-[#0d1117]/40"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price · Low to high</option>
            <option value="price-desc">Price · High to low</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-[#0d1117]/55">
        Showing{" "}
        <span className="font-medium text-[#0d1117]">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "item" : "items"}
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <li key={product.id}>
            <article className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] bg-[#f0f0f0]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge ? (
                  <span className="absolute left-3 top-3 rounded bg-[#0d1117] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[#0d1117]">
                  {product.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0d1117]/60">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#0d1117]/08 pt-4">
                  <span className="text-base font-semibold text-[#c45c26]">
                    {formatPrice(product.priceUsd)}
                  </span>
                  <button
                    type="button"
                    title="Buy via WhatsApp"
                    onClick={() =>
                      openWhatsAppInquiry({
                        productName: product.name,
                        price: formatPrice(product.priceUsd),
                      })
                    }
                    className="rounded-md bg-[#0a0a0a] px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-black"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
