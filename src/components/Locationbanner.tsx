"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LocationBanner() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Empty dependency array ensures effect runs once after mount

  return (
    <div data-aos="zoom-in" className="banner-amenities">
      <Image
        className="banner-image"
        src="/Interior 02 - 1 BR Lounge 2.jpg"
        alt="Astana Residence Location Banner"
        width={1200}
        height={400}
        priority
      />

      <div className="text">
        <h1>Location</h1>
      </div>
    </div>
  );
}

export default LocationBanner;
