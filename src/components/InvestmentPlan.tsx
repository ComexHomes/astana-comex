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
        <h1>Investor&rsquo;s Plan</h1>
        <h3>Astana Residence Never Looked This Good</h3>
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
              prime location offering unmatched convenience. It&apos;s within
              walking distance of the CBD, National Museum, and just two minutes
              from the Nairobi Expressway.
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
              gym, CCTV surveillance, high-speed lifts, visitors reception,
              back-up generator, borehole water supply, and internet
              connectivity. Designed for students and young professionals.
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
            <h2>PROJECT TIMELINE</h2>
          </div>
          <div className="text-area-investment">
            <p>Q4 2024 – Q4 2026</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>RENTAL YIELD</h2>
          </div>
          <div className="text-area-investment">
            <ul>
              <li>
                <strong>Studio:</strong> KSH 23,400/month (8% yield)
              </li>
              <li>
                <strong>One Bedroom:</strong> KSH 36,400/month (8% yield)
              </li>
            </ul>
          </div>
        </div>

        {/* Card 6 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>CAPITAL APPRECIATION</h2>
          </div>
          <div className="text-area-investment">
            <p>
              <strong>Expected Growth:</strong> Up to 30% over 2 years, thanks
              to premium location, high tenant demand, and strategic development
              planning.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="investment">
        {/* Card 7 */}
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

        {/* Card 8 */}
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

        {/* Card 9 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>UNIT PRICING</h2>
          </div>
          <div className="text-area-investment">
            <ul>
              <li>
                <strong>Studio:</strong> From KSH 3,510,000
              </li>
              <li>
                <strong>One-Bedroom:</strong> From KSH 5,460,000
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentPlan;
