"use client";

import Image from "next/image";
import React, { useEffect } from "react";

// Define Props Type
interface OneBedroomModalProps {
  closeModal: (value: boolean) => void;
}

const OneBedroomModal: React.FC<OneBedroomModalProps> = ({ closeModal }) => {
  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1500 }));
  }, []);

  const handleClick = () => {
    closeModal(false);
  };

  return (
    <div data-aos="zoom-in" className="modal-overlay">
      <div className="modal-content onebedroommodal">
        <div className="text-above">
          <button className="btn" onClick={handleClick}>
            Close
          </button>
        </div>

        <div className="image-below">
          <Image
            src="/009.jpg" // Image from public folder
            alt="One Bedroom Floor Plan - Astana Residence"
            width={900}
            height={400}
            priority
            className="floor-plan-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OneBedroomModal;
