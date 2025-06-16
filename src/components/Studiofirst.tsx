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
          Nestled in modern convenience yet connected to a world-class
          lifestyle, Astana Residence offers an exquisite collection of premium
          studios designed for students and young professionals.
        </p>

        <ul className="bedrooms">
          <li>
            <strong>Premium Studio</strong> – 27 SQM
          </li>
        </ul>

        <p>
          Masterfully set, the Studios are balanced in both proportion and
          features. All the contemporary life-enhancing design elements expected
          in this class are blended seamlessly.
        </p>
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
