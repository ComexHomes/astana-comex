"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LocationCover() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation initializes only once

  return (
    <div data-aos="fade-up" className="location-cover">
      {/* <h2 className="map-heading">Find Us</h2>
      <p className="map-description">
        Astana Residence is located in Ngara, Nairobi — a prime area offering
        unmatched convenience. Within walking distance of the CBD, National
        Museum, and just two minutes from the Nairobi Expressway.
      </p> */}

      <iframe
        src="https://maps.app.goo.gl/BmazAu2jtXXaPpdh7?g_st=ic"
        width="100%"
        height="600"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Astana Residence Map Location"
        aria-label="Map showing location of Astana Residence in Ngara, Nairobi"
      ></iframe>
    </div>
  );
}
