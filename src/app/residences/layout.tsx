import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio and One Bedroom Apartments in Ngara: Prices and Floor Plans",
  description: "Astana Residence studios (291 sqft, from KES 3.51M) and one bedrooms (452 sqft, from KES 5.46M) in Ngara, Nairobi, with pool, gym and rooftop lounge.",
  alternates: { canonical: "/residences" },
  openGraph: { title: "Studio and One Bedroom Apartments in Ngara: Prices and Floor Plans", description: "Astana Residence studios (291 sqft, from KES 3.51M) and one bedrooms (452 sqft, from KES 5.46M) in Ngara, Nairobi, with pool, gym and rooftop lounge.", url: "https://www.astanaresidence.com/residences" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
