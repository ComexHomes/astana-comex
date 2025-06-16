// app/location/page.tsx

import React from "react";

// Components

// SEO & Metadata
import Head from "next/head";
import LocationBanner from "@/components/Locationbanner";
import LocationCover from "@/components/Locationcover";
import LocationFirst from "@/components/Locationfirst";

const LocationPage = () => {
  return (
    <>
      <Head>
        <title>Location | Astana Residence</title>
        <meta
          name="description"
          content="Discover the prime location of Astana Residence in Ngara, Nairobi — minutes from the CBD, National Museum, and Nairobi Expressway."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Location | Astana Residence" />
        <meta
          property="og:description"
          content="Discover the prime location of Astana Residence in Ngara, Nairobi — minutes from the CBD, National Museum, and Nairobi Expressway."
        />
        <meta
          property="og:url"
          content="https://www.astanarezidence.ke/location"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <LocationBanner />
      <LocationFirst />
      <LocationCover />
    </>
  );
};

export default LocationPage;
