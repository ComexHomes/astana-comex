import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Astana Residence and Comex Homes",
  description: "Astana Residence is developed by Kolobot Holdings Limited, designed by Salcohm Studios and sold and managed by Comex Homes.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Astana Residence and Comex Homes", description: "Astana Residence is developed by Kolobot Holdings Limited, designed by Salcohm Studios and sold and managed by Comex Homes.", url: "https://www.astanaresidence.com/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
