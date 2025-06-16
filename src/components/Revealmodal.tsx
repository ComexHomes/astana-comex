"use client";

import Image from "next/image";
import React, { useEffect } from "react";

interface RevealModalProps {
  closeModal: (value: boolean) => void;
}

const RevealModal: React.FC<RevealModalProps> = ({ closeModal }) => {
  const handleClick = () => {
    closeModal(false);
  };

  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1500 }));
  }, []);

  return (
    <div data-aos="zoom-in" className="modal-overlay">
      <div className="modal-content reveal-modal">
        <div className="text-above">
          <button className="btn" onClick={handleClick}>
            Close
          </button>
        </div>

        <div className="image-below">
          <Image
            src="/Interior 08 - Studio 03.jpg" // ← Use any relevant image you've used before
            alt="Astana Residence | Studio Floor Plan"
            width={900}
            height={400}
            priority
            className="floor-plan-image"
          />
        </div>

        <div className="modal-details">
          <h3>Premium Studio Apartment</h3>
          <ul>
            <li>
              <strong>Size:</strong> 27 SQM
            </li>
            <li>
              <strong>Price From:</strong> KSH 3,510,000
            </li>
            <li>
              <strong>Rental Expected:</strong> KSH 23,400/month
            </li>
            <li>
              <strong>Rental Yield:</strong> 8%
            </li>
            <li>
              <strong>Capital Appreciation:</strong> Up to 30% over 2 years
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RevealModal;
