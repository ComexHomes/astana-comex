"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

function Enquirestrip() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); // Ensures animation initializes once on mount

  return (
    <div data-aos="zoom-in" className="enquirestrip">
      <div className="description-area">
        <div>
          <WhatsAppButton />
        </div>
        <div className="place">
          <h3>you are viewing</h3>
          <h2>Astana Residence</h2>
        </div>
        <div className="place">
          <h3>prices from</h3>
          <h2>KSHS. 3.5M</h2>
        </div>
        <div className="place">
          <h3>completion date</h3>
          <h2>Q1 2029</h2>
        </div>
        <div className="place">
          <h3>payment over</h3>
          <h2>42 Months</h2>
        </div>
        <div className="place">
          <h3>location</h3>
          <h2>Ngara, Nairobi</h2>
        </div>
      </div>

      <div className="btn-area">
        <div className="place">
          <Link
            href="https://zfrmz.com/63qeS4QHxcWIQdgr1NB3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Register Interest</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Enquirestrip;
