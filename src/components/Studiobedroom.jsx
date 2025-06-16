"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Studiobedroom() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Added dependency array

  const brochure = "https://example.com/Astana_Residence_Brochure.pdf"; // Replace with actual URL if available

  const handleClick = (url) => {
    console.log("This button has been clicked");

    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
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
