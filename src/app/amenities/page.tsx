// app/amenities/page.tsx

import React from "react";

// Components
import BannerAmenities from "@/components/BannerAmenities";
import AmenitiesSlider from "@/components/Amenitiesslider";

// SEO & Metadata
import Head from "next/head";
import AmenitiesFirst from "@/components/Amenitiesfirst";
import CoverAmenities from "@/components/Coveramenities";
import AmenitiesSecond from "@/components/Amenitiessecond";
import CityAmenities from "@/components/Cityamenities";

const AmenitiesPage = () => {
  return (
    <>
      <Head>
        <title>Amenities | Astana Residence</title>
        <meta
          name="description"
          content="Explore world-class amenities at Astana Residence in Ngara, Nairobi — including rooftop lounge, swimming pool, gym, security, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Amenities | Astana Residence" />
        <meta
          property="og:description"
          content="Experience luxury living with top-tier amenities like rooftop lounge, swimming pool, gym, and 24/7 security at Astana Residence in Ngara, Nairobi."
        />
        <meta
          property="og:url"
          content="https://www.astanarezidence.com/amenities"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <BannerAmenities />
      <AmenitiesFirst />
      <CoverAmenities />
      <AmenitiesSecond />
      <AmenitiesSlider />
      <CityAmenities />
    </>
  );
};

export default AmenitiesPage;
