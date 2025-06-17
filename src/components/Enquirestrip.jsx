// Enquirestrip.jsx
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Enquirestrip() {
  const [showStrip, setShowStrip] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1500 });

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If footer is within 200px of the viewport, hide strip
      if (footerPosition < windowHeight - 100) {
        setShowStrip(false);
      } else {
        setShowStrip(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className={`enquirestrip ${!showStrip ? "hidden" : ""}`}
      style={{ transition: "opacity 0.3s ease" }}
    >
      <div className="description-area">
        {/* Your existing description items */}
        <div className="place">
          <h3>you are viewing</h3>
          <h2>Astana Residence</h2>
        </div>
        <div className="place">
          <h3>prices from</h3>
          <h2>KSHS. 3.5M</h2>
        </div>
        <div className="place">
          <h3>completion date</h3>
          <h2>Q1 2029</h2>
        </div>
        <div className="place">
          <h3>payment over</h3>
          <h2>42 Months</h2>
        </div>
        <div className="place">
          <h3>location</h3>
          <h2>Ngara, Nairobi</h2>
        </div>
      </div>

      <div className="btn-area">
        <div className="place">
          <Link
            href="https://zfrmz.com/63qeS4QHxcWIQdgr1NB3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Register Interest</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Enquirestrip;
