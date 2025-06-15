"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactsBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="zoom-in" className="banner-contact">
      <Image
        priority
        src="/Interior 11 - Lift Lobby.jpg"
        alt="Astana Residence Banner"
        width={1200}
        height={400}
        className="banner-image"
      />

      {/* Optional Overlay Text */}
      <div className="text">
        <h1>Contact Us</h1>
      </div>
    </div>
  );
};

export default ContactsBanner;
