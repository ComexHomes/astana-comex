"use client";

import React from "react";
import Image from "next/image";

function OneBedroomCover() {
  return (
    <div className="one-bedroom-cover">
      {/* Using a public folder image */}
      <Image
        src="/006.jpg" // ← Replace with any image you want from the public folder
        alt="Astana Residence | One Bedroom Interior"
        width={1200}
        height={600}
        className="cover-image"
      />
    </div>
  );
}

export default OneBedroomCover;
