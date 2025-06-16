"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function InvestmentPlan() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation runs only once

  return (
    <div data-aos="fade-up" className="investment-plan">
      <div className="top-text">
        <h3>Second Source of Income</h3>
        <h1>Investors Plan</h1>
        <h3>Astana Residence never looked this good</h3>
      </div>

      <div data-aos="fade-up" className="investment-area">
        {/* Card 1 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>PREMIUM LOCATION</h2>
          </div>
          <div className="text-area-investment">
            <p>
              Astana Residence is perfectly positioned in Ngara, Nairobi — a
              prime location offering unmatched convenience. It's within walking
              distance of the CBD, National Museum, and just two minutes from
              the Nairobi Expressway.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>LIFESTYLE & AMENITIES</h2>
          </div>
          <div className="text-area-investment">
            <p>
              Astana Residence redefines modern living with world-class
              amenities including: Swimming pool, rooftop lounge, fully fitted
              gym, CCTV surveillance, high-speed lifts, and more. Experience
              luxury and functionality designed for students and young
              professionals.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>HIGH DEMAND REAL ESTATE</h2>
          </div>
          <div className="text-area-investment">
            <p>
              The growing demand for upscale Airbnb accommodations and
              contemporary studio and one-bedroom apartments has created an
              ideal environment for real estate investors. Astana Residence
              offers a unique opportunity to invest in a project that delivers
              strong rental yield and capital appreciation.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="investment">
        {/* Card 4 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>PROJECT TIMELINES</h2>
          </div>
          <div className="text-area-investment">
            <p>Q4 2024 – Q4 2026</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>STANDARD PAYMENT PLAN</h2>
          </div>
          <div className="text-area-investment">
            <p>
              25% deposit, balance payable in quarterly instalments during
              construction period.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>ALTERNATIVE PAYMENT PLAN</h2>
          </div>
          <div className="text-area-investment">
            <p>
              <strong>Upfront Payment:</strong> Buyers who opt for early full
              payments may be eligible for special discounts. Please contact our
              sales team for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentPlan;
