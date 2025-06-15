// src/app/investorsguide/page.tsx or src/pages/investorsguide.tsx

import React from "react";

// Components
import InvestmentPlan from "@/components/InvestmentPlan";
import InvestorsGuideBanner from "@/components/InvestorsGuideBanner";
import Purchase from "@/components/Purchase";

// SEO & Metadata
import Head from "next/head";

const InvestorsGuidePage = () => {
  return (
    <>
      <Head>
        <title>Investor’s Guide | Astana Residence</title>
        <meta
          name="description"
          content="Explore investment opportunities at Astana Residence in Ngara, Nairobi. High-yield studio and one-bedroom apartments designed for students and young professionals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="Investor’s Guide | Astana Residence"
        />
        <meta
          property="og:description"
          content="Explore investment opportunities at Astana Residence in Ngara, Nairobi. High-yield studio and one-bedroom apartments designed for students and young professionals."
        />
        <meta
          property="og:url"
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <InvestorsGuideBanner />
      <InvestmentPlan />
      <Purchase />
    </>
  );
};

export default InvestorsGuidePage;
