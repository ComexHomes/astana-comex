// src/components/ListItem.tsx

import Image from "next/image";
import type { StaticImageData } from "next/image";
import React from "react";

// Define Props Interface for ListItem
interface ListItemProps {
  src: string | StaticImageData;
  alt: string;
  title?: string;
  size?: string;
  price?: string;
  rentalYield?: string;
  description?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  src,
  alt,
  title,
  size,
  price,
  rentalYield,
  description,
}) => {
  return (
    <div className="listItem">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="listItemImage"
      />
      <div className="listItemDetails">
        {title && <h3 className="listItemTitle">{title}</h3>}
        {size && (
          <p>
            <strong>Size:</strong> {size}
          </p>
        )}
        {price && (
          <p>
            <strong>Price From:</strong> {price}
          </p>
        )}
        {rentalYield && (
          <p>
            <strong>Rental Yield:</strong> {rentalYield}
          </p>
        )}
        {description && <p className="listItemDescription">{description}</p>}
      </div>
    </div>
  );
};

export default ListItem;
