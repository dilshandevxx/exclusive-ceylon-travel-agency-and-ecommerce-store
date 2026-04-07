import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel shop | Exclusive Ceylon",
  description:
    "Curated travel gear for Sri Lanka—luggage, apparel, accessories, and hydration. Field-tested essentials for island journeys.",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
