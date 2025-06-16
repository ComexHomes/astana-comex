"use client";

import React, { useState } from "react";
import OneBedroomModal from "./Onebedroommodal";

// Components

function OneBedroomFirst() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="amenities-second pos">
      <div className="amenities-first-heading">
        <h3>BREATHTAKING VIEWS</h3>
        <h2>WELL DESIGNED ONE BEDROOM LAYOUTS</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Experience skyline views and a floor plan crafted for today’s urban
          lifestyle. Every executive one‑bedroom residence delivers:
          Breathtaking open windows that flood the living space with natural
          light Intuitive, open‑concept layout that maximizes every square foot
          Sophisticated finishes and premium materials for a refined look and
          feel Generous living‑and‑dining zone that flows seamlessly into a
          modern kitchen Serene bedroom retreat designed for rest, privacy and
          ample storage
        </p>

        <ul className="bedrooms">
          <li>
            <span className="bullet"></span>
            Executive 1‑Bedroom Residence — 452 sq ft
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "30px" }} className="btn-area">
        <button onClick={handleClick} className="btn">
          View Floor Plan
        </button>
      </div>

      {openModal && <OneBedroomModal closeModal={setOpenModal} />}
    </div>
  );
}

export default OneBedroomFirst;
