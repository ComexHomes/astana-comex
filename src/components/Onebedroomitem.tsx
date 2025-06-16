"use client";

import Image from "next/image";
import React from "react";

interface OneBedroomItemProps {
  src: string;
  alt: string;
  index: number;
}

const OneBedroomItem: React.FC<OneBedroomItemProps> = ({ src, alt, index }) => {
  return (
    <div className="listItem" key={index}>
      <Image
        src={src}
        alt={alt || "Astana Residence Unit"}
        width={300}
        height={200}
        className="listItemImage"
      />
    </div>
  );
};

export default OneBedroomItem;
