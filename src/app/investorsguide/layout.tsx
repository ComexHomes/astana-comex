import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor's Guide: Rental Yield and Payment Plan",
  description: "Astana Residence investor guide: expected rent KES 29,000 (studio) and KES 45,000 (one bedroom), about 10% yield, 25% deposit and quarterly instalments.",
  alternates: { canonical: "/investorsguide" },
  openGraph: { title: "Investor's Guide: Rental Yield and Payment Plan", description: "Astana Residence investor guide: expected rent KES 29,000 (studio) and KES 45,000 (one bedroom), about 10% yield, 25% deposit and quarterly instalments.", url: "https://www.astanaresidence.com/investorsguide" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
