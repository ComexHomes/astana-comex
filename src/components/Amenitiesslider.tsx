"use client";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import ListItem from "./ListItem";
import AOS from "aos";
import "aos/dist/aos.css";
import type { StaticImageData } from "next/image";

// Import images from public folder
import ImageOne from "../../public/001.jpg"; // Studio Apartment
import ImageTwo from "../../public/002.jpg";
import ImageThree from "../../public/003.jpg";
import ImageFour from "../../public/004.jpg";
import ImageFive from "../../public/006.jpg";
import ImageSix from "../../public/007.jpg";
import ImageSeven from "../../public/008.jpg";
import ImageEight from "../../public/009.jpg";
import ImageNine from "../../public/Interior 01 - 1 BR Lounge.jpg";
import ImageTen from "../../public/Interior 02 - 1 BR Lounge 2.jpg";
import ImageEleven from "../../public/Interior 03 - 1 BR Lounge & Dining.jpg";
import ImageTwelve from "../../public/Interior 04 - 1 BR Dining.jpg";
import ImageThirteen from "../../public/Interior 07 - Studio 01.jpg";
import ImageFourteen from "../../public/Interior 08 - Studio 03.jpg";
import ImageFifteen from "../../public/Interior 09 - Reception.jpg";
import ImageSixteen from "../../public/Interior 10 - Studio 02.jpg";
import ImageSeventeen from "../../public/Interior 11 - Lift Lobby.jpg";

// Define Unit Type
interface Unit {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  size?: string;
  price?: string;
  rentalYield?: string;
  description?: string;
}

const AmenitiesSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (!listRef.current) return;
    const distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 16) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const Units: Unit[] = [
    {
      id: 0,
      src: ImageOne,
      alt: "Studio Apartment",
      title: "Premium Studio",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "8% Yield | KSH 23,400/month",
    },
    {
      id: 1,
      src: ImageTwo,
      alt: "Studio Apartment Interior",
      title: "Modern Studio Living",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "High ROI for Investors",
    },
    {
      id: 2,
      src: ImageThree,
      alt: "Spacious Studio Layout",
      title: "Open Plan Studio",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "Perfect for Students & Young Professionals",
    },
    {
      id: 3,
      src: ImageFour,
      alt: "Bright Studio Unit",
      title: "Light-Filled Studio",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "Great Airbnb Potential",
    },
    {
      id: 4,
      src: ImageFive,
      alt: "Modern Studio Kitchen",
      title: "Contemporary Studio",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "Functional Kitchen & Space Design",
    },
    {
      id: 5,
      src: ImageSix,
      alt: "Elegant One Bedroom Apartment",
      title: "Elegant One Bedroom",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "8% Yield | KSH 36,400/month",
    },
    {
      id: 6,
      src: ImageSeven,
      alt: "Luxury One Bedroom Interior",
      title: "Spacious 1-Bedroom",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "Ideal for Executives",
    },
    {
      id: 7,
      src: ImageEight,
      alt: "Contemporary One Bedroom",
      title: "Modern One Bedroom",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "Stylish Urban Living",
    },
    {
      id: 8,
      src: ImageNine,
      alt: "1-Bedroom Lounge View",
      title: "Integrated Living Area",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "Contemporary Design",
    },
    {
      id: 9,
      src: ImageTen,
      alt: "Rooftop Lounge with City View",
      title: "Skyline Rooftop Lounge",
      description: "Relax with panoramic views of Nairobi CBD",
    },
    {
      id: 10,
      src: ImageEleven,
      alt: "Fully Fitted Gym",
      title: "State-of-the-Art Fitness Centre",
    },
    {
      id: 11,
      src: ImageTwelve,
      alt: "Infinity Edge Swimming Pool",
      title: "Infinity Edge Swimming Pool",
    },
    {
      id: 12,
      src: ImageThirteen,
      alt: "Studio 01 Interior",
      title: "Modern Studio Layout",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "Efficient Design for Urban Living",
    },
    {
      id: 13,
      src: ImageFourteen,
      alt: "Studio 03 Interior",
      title: "Well-Designed Studio",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "Balanced Proportion & Features",
    },
    {
      id: 14,
      src: ImageFifteen,
      alt: "Reception Area",
      title: "Grand Entrance & Reception",
    },
    {
      id: 15,
      src: ImageSixteen,
      alt: "Studio 02 Interior",
      title: "Contemporary Studio Interior",
      size: "27 SQM",
      price: "KSH 3,510,000",
      rentalYield: "Natural Light & Smart Storage",
    },
    {
      id: 16,
      src: ImageSeventeen,
      alt: "Lift Lobby Interior",
      title: "Luxury Lift Lobby",
    },
  ];

  return (
    <div data-aos="fade-up" className="list">
      <div className="wrapper">
        <AiOutlineArrowLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved ? "none" : "block" }}
        />
        <div className="container" ref={listRef}>
          {Units.map((unit) => (
            <ListItem key={unit.id} {...unit} />
          ))}
        </div>
        <AiOutlineArrowRight
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default AmenitiesSlider;
