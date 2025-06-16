"use client";

import Image from "next/image";
// import Logo from '../assets/logoblack.jpg'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation runs only once after mount

  return (
    <div data-aos="fade-up" className="main-footer">
      <div className="top">
        <div className="area">
          <div className="right-area-side">
            <Image
              src="/ASTANA-RESIDENCE-LOGO.png"
              height={80}
              width={120}
              className="footer-image"
              priority
              alt="Astana Residence Logo"
            />
          </div>

          <div className="logo-line"></div>
        </div>
        <div className="area">
          <div className="right-area-side">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 08:30 AM to 4:30 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>

          <div className="area-line"></div>
        </div>
        <div className="right-area-side">
          <h3>Comex Homes</h3>
          <p>Hurligham Telkom Plaza, 1st Floor</p>
          <p>Phone: +254 709 501 501</p>
          <p>Email: info@comexhomes.ke</p>
        </div>
      </div>

      <div className="bottom">
        <p>Astana Residence &copy; {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
