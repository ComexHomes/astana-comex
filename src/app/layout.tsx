// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script"; // ✅ Import Script once
import "./globals.css";
import Navbar from "@/components/Navbar";
import Enquirestrip from "@/components/Enquirestrip";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
        {children}
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  title: "Astana Residence | Luxury Living in Ngara, Nairobi",
  description:
    "Discover luxury living at Astana Residence in Ngara, Nairobi. Premium studios and one-bedroom apartments designed for students and young professionals.",
  keywords:
    "Astana Residence, luxury apartments, Nairobi residence, student housing, young professionals, Comex Homes, studio apartments, one bedroom Nairobi",
  openGraph: {
    title: "Astana Residence | Luxury Living in Ngara, Nairobi",
    description:
      "Premium studio and one-bedroom apartments offering luxury, convenience, and high rental yield in Ngara, Nairobi.",
    url: "https://www.astanarezidence.com", // Fixed trailing spaces
    siteName: "Astana Residence",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Astana Residence Banner Image",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astana Residence | Luxury Living in Ngara, Nairobi",
    description:
      "Premium studio and one-bedroom apartments offering luxury, convenience, and high rental yield in Ngara, Nairobi.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

        {/* ✅ Zoho SalesIQ */}
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqc3cf373178f3dac5e2e10db2009795931cec75f0cd67bafb92dd9dae12fb3f11"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
