"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CoverAmenities() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation initializes only once

  return (
    <div data-aos="fade-up" className="cover-amenities-container">
      {/* Image from public folder */}
      <Image
        priority
        src="/Interior 11 - Lift Lobby.jpg"
        alt="Astana Residence Studio Interior"
        width={1200}
        height={600}
        className="cover-amenities-image"
      />
    </div>
  );
}

export default CoverAmenities;
