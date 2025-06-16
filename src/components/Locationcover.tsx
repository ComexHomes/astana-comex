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
      <h2 className="map-heading">Find Us</h2>
      <p className="map-description">
        Astana Residence is located in Ngara, Nairobi — a prime area offering
        unmatched convenience. Within walking distance of the CBD, National
        Museum, and just two minutes from the Nairobi Expressway.
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.787147242727!2d36.788776299999995!3d-1.3026754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1143c4d3d9f1%3A0xdf423987048693fd!2sNgara%2C+Nairobi!5e0!3m2!1sen!2ske!4v1719767000000!5m2!1sen!2ske"
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
