"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InvestorsGuideBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="zoom-in" className="banner-amenities">
      <Image
        priority
        src="/007.jpg"
        alt="Astana Residence - Investors Guide Banner"
        width={1200}
        height={400}
        className="banner-image"
      />

      <div className="text">
        <h1>Investor’s Guide</h1>
      </div>
    </div>
  );
};

export default InvestorsGuideBanner;
