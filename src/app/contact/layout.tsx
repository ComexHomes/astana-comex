import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact: Book a Viewing",
  description: "Book a viewing or video tour of Astana Residence, Ngara. Call or WhatsApp +254 709 501 501 or email info@comexhomes.ke.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact: Book a Viewing", description: "Book a viewing or video tour of Astana Residence, Ngara. Call or WhatsApp +254 709 501 501 or email info@comexhomes.ke.", url: "https://www.astanaresidence.com/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
