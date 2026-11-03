import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities: Pool, Gym, Rooftop Lounge and Business Centre",
  description: "Swimming pool, fully fitted gym, rooftop residents lounge, coffee lounge, business centre, high speed lifts, CCTV, manned security, backup generator and borehole water.",
  alternates: { canonical: "/amenities" },
  openGraph: { title: "Amenities: Pool, Gym, Rooftop Lounge and Business Centre", description: "Swimming pool, fully fitted gym, rooftop residents lounge, coffee lounge, business centre, high speed lifts, CCTV, manned security, backup generator and borehole water.", url: "https://www.astanaresidence.com/amenities" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
