"use client";

import React, { useState } from "react";
import StudioModal from "./Studiomodal";

// Components

function StudioFirst() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="amenities-first">
      <div className="amenities-first-heading">
        <h3>BREATHTAKING VIEWS</h3>
        <h2>WELL DESIGNED STUDIO LAYOUTS</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Astana Residence presents a refined collection of premium studio
          apartments—crafted with young professionals and students in mind. Each
          291 SQFT studio offers: Modern convenience paired with timeless design
          Thoughtfully planned layouts that maximize space and functionality
          High-quality finishes and integrated storage solutions A lifestyle of
          comfort and connectivity, in a vibrant urban setting Compact yet
          elevated, these studios deliver everything you need to live, work, and
          unwind effortlessly—all within a world-class environment.
        </p>

        <ul className="bedrooms">
          <li>
            <strong>Premium Studio</strong> – 291 SQFT studio
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "30px" }} className="btn-area">
        <button className="btn-light" onClick={handleClick}>
          View Floor Plan
        </button>
      </div>

      {openModal && <StudioModal closeModal={setOpenModal} />}
    </div>
  );
}

export default StudioFirst;
