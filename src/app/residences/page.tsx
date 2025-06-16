// app/residences/page.tsx

import React from "react";

// Components
import ResidenceBanner from "@/components/ResidenceBanner";
import OneBedroomCover from "@/components/Onebedroomcover";
import StudioSecond from "@/components/Studiosecond";

// SEO & Metadata
import Head from "next/head";
import OneBedroomFirst from "@/components/Onebedroomfirst";
import StudioFirst from "@/components/Studiofirst";
import OneBedroomSlider from "@/components/Onebedroomslider";

const ResidencesPage = () => {
  return (
    <>
      <Head>
        <title>Residences | Astana Residence</title>
        <meta
          name="description"
          content="Explore premium studio and one-bedroom apartments at Astana Residence in Ngara, Nairobi – designed for students, young professionals, and investors."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Residences | Astana Residence" />
        <meta
          property="og:description"
          content="Discover modern studio and one-bedroom apartments at Astana Residence – luxury living in the heart of Ngara, Nairobi."
        />
        <meta
          property="og:url"
          content="https://www.astanarezidence.com/residences"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <ResidenceBanner />
      <OneBedroomFirst />
      <StudioFirst />
      <OneBedroomSlider />
      <OneBedroomCover />
      <StudioSecond />
    </>
  );
};

export default ResidencesPage;
