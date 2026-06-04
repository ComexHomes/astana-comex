"use client";

import React, { useEffect, useState } from "react";

interface TourModalProps {
  open?: boolean;
  onClose?: () => void;
}

const TourModal: React.FC<TourModalProps> = ({ open, onClose }) => {
  const [visible, setVisible] = useState(false);

  const isControlled = open !== undefined;

  useEffect(() => {
    if (!isControlled) setVisible(true);
  }, [isControlled]);

  const handleClose = () => {
    if (isControlled) {
      onClose?.();
    } else {
      setVisible(false);
    }
  };

  if (isControlled ? !open : !visible) return null;

  return (
    <div className="tour-modal-overlay" onClick={handleClose}>
      <div
        className="tour-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tour-modal-header">
          <div>
            <p className="tour-modal-label">EXPLORE</p>
            <h2 className="tour-modal-title">3D Virtual Tour</h2>
            <p className="tour-modal-sub">
              Step inside Astana Residence — experience it before you visit.
            </p>
          </div>
          <button
            className="tour-modal-close"
            onClick={handleClose}
            aria-label="Close tour"
          >
            &times;
          </button>
        </div>

        <div className="tour-modal-iframe-wrap">
          <iframe
            style={{ maxWidth: "100%", width: "100%", height: "100%", border: 0 }}
            src="https://www.klapty.com/tour/tunnel/5Ka0mhRYoV"
            allowFullScreen
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
          />
        </div>

        <div className="tour-modal-footer">
          <button className="btn" onClick={handleClose}>
            Close Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
