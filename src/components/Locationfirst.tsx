"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function LocationFirst() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation runs only once

  return (
    <div data-aos="fade-up" className="amenities-first">
      <div className="amenities-first-heading">
        <h2>PERFECTLY POSITIONED</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Rising above the ordinary, Astana Residence redefines modern living in
          Ngara, Nairobi. This exceptional mixed use development seamlessly
          integrates residential, retail, entertainment, and leisure spaces, all
          complemented by luxurious five-star amenities with breathtaking views
          of the CBD skyline and beyond. Perfectly situated within walking
          distance of the CBD, National Museum, and Thika Superhighway, and just
          two minutes from the Nairobi Expressway, Astana Apartments offers
          unparalleled convenience at the heart of the city.
        </p>
      </div>

      <div style={{ marginTop: "30px" }} className="btn-area">
        <Link
          href="https://maps.app.goo.gl/15c9hdiKjR91XrwA6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-light">Head to Google Maps</button>
        </Link>
      </div>
    </div>
  );
}

export default LocationFirst;
