"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AmenitiesSecond() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation initializes only once

  return (
    <div data-aos="fade-up" className="amenities-second">
      <div className="amenities-first-heading">
        <h3>ASTANA</h3>
        <h2>RESIDENCE</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Discover the pinnacle of luxury and immerse yourself in the finest
          living experience at Astana Residence. This exceptional development
          seamlessly combines timeless elegance with classic charm, offering a
          sophisticated and refined lifestyle like no other.
        </p>
        <p>
          Rising above the ordinary, Astana Residence redefines modern living in
          Ngara, Nairobi. This mixed-use development integrates residential,
          retail, entertainment, and leisure spaces, complemented by luxurious
          five-star amenities and breathtaking views of the CBD skyline and
          beyond.
        </p>
      </div>
    </div>
  );
}

export default AmenitiesSecond;
