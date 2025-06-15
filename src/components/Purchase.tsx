"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Purchase() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation runs only once

  return (
    <div data-aos="fade-up" className="purchase-plan">
      <div data-aos="fade-up" className="top-text">
        <h3>Astana Residence</h3>
        <h1>Purchase Plan</h1>
      </div>

      <ol data-aos="fade-up" className="list-purchase">
        <li>
          <span>1.</span>Select your unit with a Comex Homes Sales Executive.
        </li>
        <li>
          <span>2.</span>Fill out a reservation form with assistance from your
          sales executive.
        </li>
        <li>
          <span>3.</span>
          <ul className="inner-list">
            <li>
              <span>i.</span>Pay a refundable deposit of 25% of the total
              purchase price.
            </li>
            <li>
              <span>ii.</span>Provide a copy of your National ID & KRA PIN
              Certificate, or Certificate of Incorporation (for companies) & KRA
              PIN.
            </li>
          </ul>
        </li>
        <li>
          <span>4.</span>Review the draft legal documentation issued by our
          team. Our legal representative will guide you through the process if
          needed.
        </li>
        <li>
          <span>5.</span>Sign the Agreement for Sale and pay the initial
          instalment due as outlined in the agreement.
        </li>
        <li>
          <span>6.</span>Make balance payments in instalments during
          construction, according to the schedule outlined in the sale
          agreement.
        </li>
      </ol>
    </div>
  );
}

export default Purchase;
