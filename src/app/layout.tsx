// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script"; // ✅ Import Script once
import "./globals.css";
import Navbar from "@/components/Navbar";
import Enquirestrip from "@/components/Enquirestrip";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, FACTS, FAQS, PHONE } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Astana Residence | Studio and 1 Bedroom Apartments for Sale in Ngara, Nairobi",
    template: "%s | Astana Residence",
  },
  description:
    "Studios from KES 3.51M and one bedrooms from KES 5.46M in Ngara, walking distance to Nairobi CBD. About 10% expected yield, pool, gym, rooftop lounge. Sold and managed by Comex Homes.",
  keywords: [
    "Astana Residence",
    "apartments for sale in Ngara",
    "studio apartments for sale Nairobi",
    "1 bedroom apartment for sale Nairobi",
    "apartments near Nairobi CBD",
    "Comex Homes",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Astana Residence | Studios and 1 Bedrooms in Ngara, Nairobi",
    description:
      "Studios from KES 3.51M and one bedrooms from KES 5.46M in Ngara, walking distance to Nairobi CBD. About 10% expected rental yield.",
    url: SITE,
    siteName: "Astana Residence",
    images: [{ url: "/001.jpg", alt: "Astana Residence, Ngara, Nairobi" }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astana Residence | Studios and 1 Bedrooms in Ngara, Nairobi",
    description: "Studios from KES 3.51M in Ngara, walking distance to Nairobi CBD.",
    images: ["/001.jpg"],
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : {}),
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : {}),
    },
  },
};

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": `${SITE}/#residence`,
    name: FACTS.name,
    url: SITE,
    image: `${SITE}/001.jpg`,
    description: `New studio and one bedroom apartments in ${FACTS.location}.`,
    address: { "@type": "PostalAddress", addressLocality: "Ngara", addressRegion: "Nairobi", addressCountry: "KE" },
    amenityFeature: FACTS.amenities.map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
    makesOffer: [
      { "@type": "Offer", name: "Studio apartment, 291 sqft", price: FACTS.studio.priceNum, priceCurrency: "KES", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "One bedroom apartment, 452 sqft", price: FACTS.oneBed.priceNum, priceCurrency: "KES", availability: "https://schema.org/InStock" },
    ],
    containedInPlace: { "@type": "Place", name: "Ngara, Nairobi, Kenya" },
  },
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.comexhomes.ke/#organization",
    name: "Comex Homes",
    url: "https://www.comexhomes.ke",
    telephone: PHONE,
    email: "info@comexhomes.ke",
    address: { "@type": "PostalAddress", streetAddress: "Telkom Plaza, 1st Floor, Hurlingham", addressLocality: "Nairobi", addressCountry: "KE" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-KE">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Enquirestrip />
          <Footer />
        </footer>
        <WhatsAppButton />
        {ld.map((d, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
        ))}

        {/* Vercel Web Analytics (enable it in the Vercel dashboard) */}
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />

        {/* Metricool (was inside next/head on the home page, which the App Router ignores) */}
        <Script id="metricool" strategy="lazyOnload">
          {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"e8d4e123d329ca216a27723f23c6f43f"})});`}
        </Script>

        {/* ✅ Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '26026286693641024');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=26026286693641024&ev=PageView&noscript=1" />
        </noscript>

        {/* ✅ Google Analytics (gtag) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZTSB4BN10X`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZTSB4BN10X');
          `}
        </Script>
      </body>
    </html>
  );
}
