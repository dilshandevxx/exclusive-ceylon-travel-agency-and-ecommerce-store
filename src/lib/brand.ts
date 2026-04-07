/** Core brand messaging — Exclusive Ceylon */
export const brandTagline =
  "Luxury Lifestyle | Travel Experiences | Special Moments in Sri Lanka";

export const brandMission =
  "Exclusive Ceylon is a lifestyle-driven Sri Lankan brand built to celebrate the island’s natural beauty, culture, craftsmanship, and meaningful experiences.";

export const brandOrigin =
  "Founded in Bibile, Sri Lanka, the brand brings together carefully curated lifestyle products, authentic village travel experiences, and personalized events under one unique concept.";

export const brandVision =
  "Our vision is to create a platform where visitors and locals can discover a different side of Sri Lanka — one that combines nature, culture, slow living, and refined island luxury.";

export const divisions = [
  {
    short: "Lifestyle Studio",
    name: "Lifestyle Studio",
    description:
      "Carefully curated lifestyle products and refined design inspired by the island.",
    href: "/shop",
    cta: "Explore the studio",
  },
  {
    short: "Trails Wellassa",
    name: "Trails Wellassa Travel Experiences",
    description:
      "Authentic village travel and immersive journeys across Sri Lanka’s landscapes.",
    href: "/packages",
    cta: "View journeys",
  },
  {
    short: "Promises Moments",
    name: "Promises Moments Events",
    description:
      "Personalized events and celebrations crafted for unforgettable moments.",
    href: "/contact",
    cta: "Plan an event",
  },
] as const;

export const founder = {
  name: "Sandun M. Prathapa Arachchi",
  foundingYear: 2023,
  origin: "Bibile, Sri Lanka",
};

export const founderNarrative: { title: string; paragraphs: string[] }[] = [
  {
    title: "Founder story",
    paragraphs: [
      `${founder.name} is the founder of Exclusive Ceylon, a concept inspired by real-life experiences across different industries including hospitality, sales, administration, and customer service.`,
    ],
  },
  {
    title: "Early career",
    paragraphs: [
      "His professional journey began in the pharmaceutical industry, where he developed strong skills in organization, discipline, and operational management. He later worked in the Ayurvedic wellness sector, gaining exposure to Sri Lanka’s traditional healing knowledge and local product culture.",
      "Moving into the media industry at TV Derana, Sandun developed experience in sales administration, marketing coordination, and business communication while working with corporate clients and broadcast programs.",
    ],
  },
  {
    title: "Hospitality & service",
    paragraphs: [
      "His hospitality journey continued in Negombo at a fine dining restaurant where he worked in the Food & Beverage department as a bartender and service staff member. This experience allowed him to understand the true meaning of guest experience, service quality, and international hospitality standards.",
    ],
  },
  {
    title: "The vision",
    paragraphs: [
      "These diverse experiences eventually shaped his vision for creating a brand that combines hospitality, lifestyle, culture, and tourism.",
      `In ${founder.foundingYear}, Sandun founded Exclusive Ceylon, a concept designed to showcase Sri Lanka’s hidden beauty, traditional lifestyle, and curated experiences through a modern and elegant approach.`,
    ],
  },
];
