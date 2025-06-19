"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Studiobedroom() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Added dependency array

  // Correct path for files in the public folder
  const brochure = "/CATALOGUE ASTANA.pdf"; // Remove ../../public/ prefix

  const handleClick = (url) => {
    console.log("This button has been clicked");

    try {
      // Create a temporary link element
      const link = document.createElement("a");
      link.href = url;
      link.download = "CATALOGUE ASTANA.pdf"; // Set explicit filename
      link.target = "_blank"; // Open in new tab as fallback

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(url, "_blank");
    }
  };

  const runHandleClick = () => {
    handleClick(brochure);
  };

  return (
    <div data-aos="fade-up" className="studiobedroom">
      <div className="top-layer">
        <div className="side">
          <h2>One Bedroom</h2>

          <p>
            Our one-bedroom apartments provide spacious, well-lit living areas,
            promising a contemporary and elegant residential experience.
            Investors can anticipate excellent returns from this highly coveted
            property.
          </p>

          <ul>
            <li>
              <strong>Size:</strong> 452 sqft
            </li>
            <li>
              <strong>Price From:</strong> KES 5,460,000
            </li>
            <li>
              <strong>Rental Expected:</strong> KES 45000/month
            </li>
            <li>
              <strong>Rental Yield:</strong> 10%
            </li>
          </ul>
        </div>

        <div className="middle-line"></div>

        <div className="side">
          <h2>Studios</h2>

          <p>
            Our stylish studio units are designed to provide an open,
            light-filled environment for contemporary living.
          </p>

          <ul>
            <li>
              <strong>Size:</strong> 291 sqft
            </li>
            <li>
              <strong>Price From:</strong> KES 3,510,000
            </li>
            <li>
              <strong>Rental Expected:</strong> KES 29000/month
            </li>
            <li>
              <strong>Rental Yield:</strong> 10%
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-layer">
        <button className="btn-light" onClick={runHandleClick}>
          Download Brochure
        </button>
      </div>
    </div>
  );
}

export default Studiobedroom;
