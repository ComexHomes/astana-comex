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
        <h2>CONNECTED TO THE CITYS CORE</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Welcome to next-generation urban living in Ngara, Nairobi. Astana
          Residence places you steps away from the Central Business District,
          the National Museum, Thika Superhighway, and the Nairobi Expressway —
          keeping you effortlessly connected to the pulse of the city.
        </p>
        <p>
          This vibrant mixed-use address blends premium living with unmatched
          convenience, offering walkable access to top-tier retail,
          entertainment, dining, and lifestyle amenities — all in one dynamic
          location.
        </p>
      </div>

      {/* <div style={{ marginTop: "30px" }} className="btn-area">
        <button className="btn-light">View Amenities</button>
      </div> */}
    </div>
  );
}

export default AmenitiesFirst;
