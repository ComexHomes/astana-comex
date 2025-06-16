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
          The epitome of elegant and intuitive design, each one-bedroom
          apartment offers an effortless blend of luxurious comfort, spacious
          living areas, and architectural sophistication. These units are
          designed for modern urban living.
        </p>

        <ul className="bedrooms">
          <li>
            <span className="bullet"></span>
            Premium One Bedroom - 42 SQM
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
