"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ResidenceBanner() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation initializes only once

  return (
    <div data-aos="zoom-in" className="banner-amenities">
      {/* Use image from public folder */}
      <Image
        priority
        src="/Interior 04 - 1 BR Dining.jpg"
        alt="Astana Residence Banner"
        width={1200}
        height={400}
        className="banner-image"
      />

      <div className="text">
        <h1>Residences</h1>
      </div>
    </div>
  );
}

export default ResidenceBanner;
