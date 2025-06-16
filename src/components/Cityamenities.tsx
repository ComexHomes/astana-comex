"use client";

import { TbSwimming } from "react-icons/tb";
import { GiLift } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import {
  FaParking,
  FaRegBuilding,
  FaSatelliteDish,
  FaUsersCog,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsFillLightbulbFill } from "react-icons/bs";
import { MdWaterDrop } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { MdBusinessCenter } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CityAmenities() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="city">
      <div className="top">
        <h2>World-Class</h2>
        <h2 className="uppercase two">Amenities</h2>
      </div>

      <div id="amenities" className="bottom-city">
        {/* Core Amenities */}
        <div className="city-card">
          <TbSwimming className="icon-city" color="#777777" />
          <h3>Infinity Swimming Pool</h3>
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
          <h3>Manned Security Entry</h3>
        </div>

        <div className="city-card">
          <FaRegBuilding className="icon-city" color="#777777" />
          <h3>Visitors Reception Area</h3>
        </div>

        <div className="city-card">
          <BsFillLightbulbFill className="icon-city" color="#777777" />
          <h3>Backup Power Generator</h3>
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

        <div className="city-card">
          <FaParking className="icon-city" color="#777777" />
          <h3>Secure Parking for Residents & Visitors</h3>
        </div>

        <div className="city-card">
          <FaUsersCog className="icon-city" color="#777777" />
          <h3>Onsite Management Facilities</h3>
        </div>

        <div className="city-card">
          <FaSatelliteDish className="icon-city" color="#777777" />
          <h3>Satellite TV & Internet Provisions</h3>
        </div>
      </div>
    </div>
  );
}

export default CityAmenities;
