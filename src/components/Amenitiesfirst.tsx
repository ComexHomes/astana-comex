"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AmenitiesFirst() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation initializes only once

  return (
    <div data-aos="fade-up" className="amenities-first">
      <div className="amenities-first-heading">
        <h3>LINKING YOU</h3>
        <h2>TO THE CITYS HEART</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Experience modern urban living at its finest in Ngara, Nairobi. Astana
          Residence is perfectly positioned near the Central Business District,
          National Museum, Thika Superhighway, and just minutes from the Nairobi
          Expressway.
        </p>
        <p>
          Surrounded by world-class amenities, this mixed-use development offers
          seamless access to retail, entertainment, leisure, and convenience —
          all within walking distance.
        </p>
      </div>

      <div style={{ marginTop: "30px" }} className="btn-area">
        <button className="btn-light">View Amenities</button>
      </div>
    </div>
  );
}

export default AmenitiesFirst;
