export type ShopCategory =
  | "all"
  | "luggage"
  | "apparel"
  | "accessories"
  | "hydration";

export type ShopProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceUsd: number;
  category: Exclude<ShopCategory, "all">;
  image: string;
  badge?: string;
};

export const shopCategories: { id: ShopCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "luggage", label: "Luggage" },
  { id: "apparel", label: "Apparel" },
  { id: "accessories", label: "Accessories" },
  { id: "hydration", label: "Hydration" },
];

export const shopProducts: ShopProduct[] = [
  {
    id: "1",
    slug: "monsoon-pack-40",
    name: "Monsoon pack 40L",
    description: "Weather-sealed main compartment, laptop sleeve, air-mesh back.",
    priceUsd: 112,
    category: "luggage",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
  },
  {
    id: "2",
    slug: "uv-field-hat",
    name: "UV field hat",
    description: "Wide brim, packable crown, moisture-wicking band.",
    priceUsd: 48,
    category: "apparel",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    slug: "insulated-steel-bottle",
    name: "Insulated steel bottle",
    description: "24h cold, leak-proof cap—ideal for humid days and long drives.",
    priceUsd: 36,
    category: "hydration",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    slug: "cabin-roller-55",
    name: "Cabin roller 55cm",
    description: "Quiet wheels, TSA lock, compression panels for island hops.",
    priceUsd: 198,
    category: "luggage",
    image:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    slug: "linen-travel-shirt",
    name: "Linen travel shirt",
    description: "Breathable weave, corozo buttons, tailored for warm climates.",
    priceUsd: 74,
    category: "apparel",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87a3407b321?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    slug: "ripstop-organizer-set",
    name: "Ripstop organizer set",
    description: "Three cubes: cables, toiletries, and compressible clothing.",
    priceUsd: 52,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    slug: "quick-dry-trail-shorts",
    name: "Quick-dry trail shorts",
    description: "Stretch fabric, zip pockets, DWR finish for sudden showers.",
    priceUsd: 68,
    category: "apparel",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    slug: "rfid-travel-wallet",
    name: "RFID travel wallet",
    description: "Passport, cards, and LKR sleeve in slim Italian leather.",
    priceUsd: 58,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1627123425774-a690cb6a31bd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    slug: "filter-cap-bottle-1l",
    name: "Filter cap bottle 1L",
    description: "Replaceable filter for tap and fountain water on the move.",
    priceUsd: 44,
    category: "hydration",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
  },
];
