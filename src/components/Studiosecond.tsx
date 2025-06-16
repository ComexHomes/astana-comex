"use client";

import React, { useState } from "react";
import RevealModal from "./Revealmodal";

function StudioSecond() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="amenities-second">
      <div className="amenities-first-heading">
        <h3>CHECK OUT OUR</h3>
        <h2>FLOOR PLANS</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Discover urban living deeply rooted in modernity yet effortlessly
          connected to the green heart of Ngara, Nairobi — surrounded by
          world-class amenities and designed for students & young professionals.
        </p>
      </div>

      <div style={{ marginTop: "30px" }} className="btn-area">
        <button className="btn" onClick={handleClick}>
          View Floor Plans
        </button>
      </div>

      {openModal && <RevealModal closeModal={setOpenModal} />}
    </div>
  );
}

export default StudioSecond;
