"use client";

import React, { useEffect, useState } from "react";

const TourModal: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="tour-modal-overlay" onClick={() => setVisible(false)}>
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
            onClick={() => setVisible(false)}
            aria-label="Close tour"
          >
            &times;
          </button>
        </div>

        <div className="tour-modal-iframe-wrap">
          <iframe
            style={{ maxWidth: "100%", width: "100%", height: "100%", border: 0 }}
            src="https://www.klapty.com/tour/tunnel/5Ka0mhRYoV"
            frameBorder={0}
            allowFullScreen
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
          />
        </div>

        <div className="tour-modal-footer">
          <button className="btn" onClick={() => setVisible(false)}>
            Close Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
