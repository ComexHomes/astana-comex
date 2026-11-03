"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="main-footer">
      <div className="top">
        <div className="footer-section">
          <Image
            src="/ASTANA-RESIDENCE-LOGO-BLACK.png"
            height={80}
            width={120}
            className="footer-image"
            priority
            alt="Astana Residence Logo"
          />
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section">
          <h3>Office Hours</h3>
          <p>Monday - Friday: 08:30 AM to 4:30 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section">
          <h3>Comex Homes</h3>
          <p>Telkom Plaza, 1st Floor, Hurlingham</p>
          <p>Phone: +254 709 501 501</p>
          <p>Email: info@comexhomes.ke</p>
        </div>
      </div>

      <div className="footer-seo-links" style={{ textAlign: "center", fontSize: 13, lineHeight: 1.9, padding: "8px 16px" }}>
        <a href="/apartments/apartments-for-sale-in-ngara">Apartments for sale in Ngara</a>
        {" · "}<a href="/apartments/apartments-for-sale-near-nairobi-cbd">Near Nairobi CBD</a>
        {" · "}<a href="/apartments/student-and-young-professional-apartments-nairobi">For students and young professionals</a>
        {" · "}<a href="/apartments/apartments-near-thika-road-and-expressway">Near Thika Road</a>
        {" · "}<a href="/apartments/apartments-near-parklands-and-pangani">Near Parklands and Pangani</a>
        {" · "}<a href="/apartments/buy-apartment-in-nairobi-from-abroad">Buy from abroad</a>
        <br />
        A <a href="https://www.comexhomes.ke/">Comex Homes</a> project · Also selling: <a href="https://www.lukenyaridge.com/">Lukenya Ridge plots, Mombasa Road</a>
      </div>
      <div className="bottom">
        <p>Astana Residence &copy; {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
