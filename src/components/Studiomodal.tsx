"use client";

import Image from "next/image";
import React, { useEffect } from "react";

// Define Props Type
interface StudioModalProps {
  closeModal: (value: boolean) => void;
}

const StudioModal: React.FC<StudioModalProps> = ({ closeModal }) => {
  const handleClick = () => {
    closeModal(false);
  };

  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1500 }));
  }, []);

  return (
    <div data-aos="zoom-in" className="modal-overlay">
      <div className="modal-content studio-modal">
        <div className="text-above">
          <button className="btn" onClick={handleClick}>
            Close
          </button>
        </div>

        <div className="image-below">
          <Image
            src="/studio-plan.jpeg"
            alt="Studio Floor Plan - Astana Residence"
            width={900}
            height={400}
            priority
            className="floor-plan-image"
          />
        </div>

        <div className="modal-details">
          <h3>Premium Studio Apartment</h3>
          <p>
            <strong>Size:</strong> 27 SQM
          </p>
          <p>
            <strong>Price From:</strong> KSH 3,510,000
          </p>
          <p>
            <strong>Rental Expected:</strong> KSH 23,400/month
          </p>
          <p>
            <strong>Rental Yield:</strong> 8%
          </p>
          <p>
            <strong>Capital Appreciation:</strong> 30% over 2 years
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudioModal;
