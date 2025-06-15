"use client"; // Required if using React 18+ with App Router

import { TbSwimming } from "react-icons/tb";
import { GiLift } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md"; // For Manned Security
import { FaRegBuilding } from "react-icons/fa"; // For Visitors Reception
import { CgGym } from "react-icons/cg";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsFillLightbulbFill } from "react-icons/bs"; // For Backup Power
import { MdWaterDrop } from "react-icons/md"; // For Borehole Water Supply
import { FiMonitor } from "react-icons/fi"; // For CCTV Surveillance

// ✅ Add these missing imports:
import { MdBusinessCenter } from "react-icons/md"; // Business Centre
import { FaCouch } from "react-icons/fa"; // Residents Lounge / Lounge Area

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function City() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="city">
      <div className="top">
        <h2>World-Class</h2>
        <h2 className="uppercase two">Amenities</h2>
      </div>

      <div className="bottom-city">
        <div className="city-card">
          <TbSwimming className="icon-city" color="#777777" />
          <h3>Swimming Pool</h3>
        </div>

        <div className="city-card">
          <GiLift className="icon-city" color="#777777" />
          <h3>High-Speed Lifts</h3>
        </div>

        <div className="city-card">
          <FiMonitor className="icon-city" color="#777777" />
          <h3>CCTV Surveillance</h3>
        </div>

        <div className="city-card">
          <MdOutlineSecurity className="icon-city" color="#777777" />
          <h3>Manned Security</h3>
        </div>

        <div className="city-card">
          <FaRegBuilding className="icon-city" color="#777777" />
          <h3>Visitors Reception</h3>
        </div>

        <div className="city-card">
          <BsFillLightbulbFill className="icon-city" color="#777777" />
          <h3>Backup Generator</h3>
        </div>

        <div className="city-card">
          <MdWaterDrop className="icon-city" color="#777777" />
          <h3>Borehole Water Supply</h3>
        </div>

        <div className="city-card">
          <CgGym className="icon-city" color="#777777" />
          <h3>Fully Fitted Gym</h3>
        </div>

        <div className="city-card">
          <AiOutlineCoffee className="icon-city" color="#777777" />
          <h3>Coffee Lounge</h3>
        </div>

        <div className="city-card">
          <MdBusinessCenter className="icon-city" color="#777777" />
          <h3>Business Centre</h3>
        </div>

        <div className="city-card">
          <FaCouch className="icon-city" color="#777777" />
          <h3>Rooftop Residents Lounge</h3>
        </div>
      </div>

      <div style={{ marginTop: "30px" }} className="btn-area">
        <Link href="/amenities/#amenities">
          <button className="btn">Explore Amenities</button>
        </Link>
      </div>
    </div>
  );
}

export default City;