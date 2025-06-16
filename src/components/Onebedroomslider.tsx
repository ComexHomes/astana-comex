"use client";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRef, useState } from "react"; // Removed unused `useEffect`
import OneBedroomItem from "./Onebedroomitem";

function OneBedroomSlider() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (!listRef.current) return;

    const distance = listRef.current.getBoundingClientRect().x - 50; // ✅ Changed to `const`

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 19) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const Images = [
    {
      id: 0,
      src: "/001.jpg",
      alt: "Studio Apartment - Astana Residence",
    },
    {
      id: 1,
      src: "/002.jpg",
      alt: "Modern Studio Interior - Astana Residence",
    },
    {
      id: 2,
      src: "/003.jpg",
      alt: "Open Plan Studio Layout - Astana Residence",
    },
    {
      id: 3,
      src: "/004.jpg",
      alt: "Light-Filled Studio Unit - Astana Residence",
    },
    {
      id: 4,
      src: "/006.jpg",
      alt: "Contemporary Studio Kitchen - Astana Residence",
    },
    {
      id: 5,
      src: "/007.jpg",
      alt: "Luxury One Bedroom Interior - Astana Residence",
    },
    {
      id: 6,
      src: "/008.jpg",
      alt: "Spacious 1-Bedroom Unit - Astana Residence",
    },
    {
      id: 7,
      src: "/009.jpg",
      alt: "Modern One Bedroom Space - Astana Residence",
    },
    {
      id: 8,
      src: "/Interior 01 - 1 BR Lounge.jpg",
      alt: "1-Bedroom Lounge View - Astana Residence",
    },
    {
      id: 9,
      src: "/Interior 02 - 1 BR Lounge 2.jpg",
      alt: "1-Bedroom Living Area - Astana Residence",
    },
    {
      id: 10,
      src: "/Interior 03 - 1 BR Lounge & Dining.jpg",
      alt: "1-Bedroom Lounge & Dining - Astana Residence",
    },
    {
      id: 11,
      src: "/Interior 04 - 1 BR Dining.jpg",
      alt: "1-Bedroom Dining Area - Astana Residence",
    },
    {
      id: 12,
      src: "/Interior 07 - Studio 01.jpg",
      alt: "Studio 01 Interior - Astana Residence",
    },
    {
      id: 13,
      src: "/Interior 08 - Studio 03.jpg",
      alt: "Well-Designed Studio - Astana Residence",
    },
    {
      id: 14,
      src: "/Interior 09 - Reception.jpg",
      alt: "Grand Entrance & Reception - Astana Residence",
    },
    {
      id: 15,
      src: "/Interior 10 - Studio 02.jpg",
      alt: "Natural Light & Smart Storage - Astana Residence",
    },
    {
      id: 16,
      src: "/Interior 11 - Lift Lobby.jpg",
      alt: "Luxury Lift Lobby - Astana Residence",
    },
    {
      id: 17,
      src: "/005.jpg",
      alt: "Smartly Designed Studio - Astana Residence",
    },
    {
      id: 18,
      src: "/001.jpg",
      alt: "Premium Studio Apartment - Astana Residence",
    },
    {
      id: 19,
      src: "/002.jpg",
      alt: "Modern Studio Layout - Astana Residence",
    },
  ];

  return (
    <div style={{ marginTop: "30px" }} className="list">
      <div className="wrapper">
        <AiOutlineArrowLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved ? "none" : "block" }}
        />
        <div className="container" ref={listRef}>
          {Images.map((image) => (
            <OneBedroomItem key={image.id} index={image.id} {...image} />
          ))}
        </div>
        <AiOutlineArrowRight
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>

      <div className="slider-pagination">
        <span>
          {slideNumber + 1} / {Images.length}
        </span>
      </div>
    </div>
  );
}

export default OneBedroomSlider;
