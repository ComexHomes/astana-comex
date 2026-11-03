import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location: Ngara, Walking Distance to Nairobi CBD",
  description: "Astana Residence is in Ngara, within walking distance of Nairobi CBD, the National Museum and Thika Superhighway, about two minutes from the Nairobi Expressway.",
  alternates: { canonical: "/location" },
  openGraph: { title: "Location: Ngara, Walking Distance to Nairobi CBD", description: "Astana Residence is in Ngara, within walking distance of Nairobi CBD, the National Museum and Thika Superhighway, about two minutes from the Nairobi Expressway.", url: "https://www.astanaresidence.com/location" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
