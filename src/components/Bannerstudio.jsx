import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "../../public/Interior 03 - 1 BR Lounge.jpg";

function Bannerstudio() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="zoom-in" className="banner-amenities">
      <Image className="banner-image" src={Banner} alt="Banner Amenities" />

      <div className="text">
        <h1>Studios</h1>
      </div>
    </div>
  );
}

export default Bannerstudio;
