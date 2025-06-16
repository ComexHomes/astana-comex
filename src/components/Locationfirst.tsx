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
        <h2>LOCATION</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Nestled in the heart of Ngara, Astana Residence is perfectly
          positioned for convenience and accessibility. The development is
          located just a short distance from key landmarks such as the Nairobi
          CBD, National Museum, and Nairobi Expressway.
        </p>

        <p>
          This prime location ensures you&apos;re always close to retail hubs,
          educational institutions, and transport networks — making it ideal for
          students, young professionals, and investors alike.
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
