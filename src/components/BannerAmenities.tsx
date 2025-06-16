"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BannerAmenities() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation initializes only once

  return (
    <div data-aos="zoom-in" className="banner-amenities">
      <Image
        priority
        src="/004.jpg" // Image from public folder
        alt="Astana Residence Amenities Banner"
        width={1200}
        height={400}
        className="banner-image"
      />

      <div className="text">
        <h1>Amenities</h1>
      </div>
    </div>
  );
}

export default BannerAmenities;
