import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Exclusive Ceylon",
  description:
    "Reach Exclusive Ceylon for Promises Moments events, partnerships, and bespoke Sri Lanka experiences.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
