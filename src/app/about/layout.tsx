import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our story | Exclusive Ceylon",
  description:
    "Founded in Bibile, Sri Lanka—learn how Exclusive Ceylon unites Lifestyle Studio, Trails Wellassa Travel Experiences, and Promises Moments Events.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
