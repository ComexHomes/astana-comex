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
        <h3>Your Second Stream Starts Here</h3>
        <h1>The Smart Investors Choice</h1>
        <h3>Astana Residence — Where Returns Meet Refined Living</h3>
      </div>

      <div data-aos="fade-up" className="investment-area">
        {/* Card 1 */}
        <div className="investment-card">
          <div className="heading-place">
            <h2>PREMIUM LOCATION</h2>
          </div>
          <div className="text-area-investment">
            <p>
              Astana Residence enjoys a prime address in Ngara, Nairobi —
              offering unmatched convenience in the heart of the city. Just a
              short walk to the CBD and National Museum, and only two minutes
              from the Nairobi Expressway, it puts you effortlessly close to
              everything that matters.
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
              Astana Residence sets a new standard for modern living,
              thoughtfully designed for students and young professionals. Enjoy
              world-class amenities including a rooftop lounge, swimming pool,
              fully equipped gym, high-speed lifts, CCTV surveillance, visitor
              reception, reliable backup power, borehole water supply, and
              seamless internet connectivity — all crafted for comfort,
              security, and lifestyle.
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
              The surge in demand for upscale Airbnbs, hotel-style apartments,
              and stylish one-bedroom units is reshaping Kenyas property market.
              With a solid foundation and increasing returns, this sector
              continues to attract a wave of forward-thinking investors.
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
            <p>Q3 2025 – Q1 2029</p>
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
                <strong>Studio:</strong> KSH 29000/month (10% yield)
              </li>
              <li>
                <strong>One Bedroom:</strong> KSH 45000/month (10% yield)
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
              <strong>Expected Growth:</strong> Up to 30% over 2 years. Thanks
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
              payments may be eligible for special discounts. Please contact
              Property Consultants for more details.
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
