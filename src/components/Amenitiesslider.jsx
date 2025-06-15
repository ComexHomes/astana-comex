import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import ListItem from "./ListItem";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images based on unit types: Studio and One Bedroom
import ImageOne from "../../public/001.jpg"; // Studio Apartment
import ImageTwo from "../../public/002.jpg";
import ImageThree from "../../public/003.jpg";
import ImageFour from "../../public/004.jpg";
import ImageFive from "../../public/006.jpg";
import ImageSix from "../../public/007.jpg";
import ImageSeven from "../../public/008.jpg";
import ImageEight from "../../public/009.jpg";
import ImageNine from "../../public/Interior 01 - 1 BR Lounge.jpg";
import ImageTen from "../../public/Interior 02 - 1 BR Lounge.jpg"; // Conceptual image
import ImageEleven from "../../public/Interior 03 - 1 BR Lounge.jpg"; // Conceptual image
import ImageTwelve from "../../public/Interior 04 - 1 BR Lounge.jpg"; // Conceptual image

function Amenitiesslider() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const Units = [
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
      alt: "One Bedroom Apartment",
      title: "Elegant One Bedroom",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "8% Yield | KSH 36,400/month",
    },
    {
      id: 5,
      src: ImageSix,
      alt: "Luxury One Bedroom",
      title: "Spacious 1-Bedroom",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "Ideal for Executives",
    },
    {
      id: 6,
      src: ImageSeven,
      alt: "Contemporary 1-Bedroom",
      title: "Modern One Bedroom",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "Stylish Urban Living",
    },
    {
      id: 7,
      src: ImageEight,
      alt: "Well-Lit Bedroom",
      title: "Functional Bedroom Space",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "Balanced Proportion & Features",
    },
    {
      id: 8,
      src: ImageNine,
      alt: "1-Bedroom Kitchen & Lounge",
      title: "Integrated Living Area",
      size: "42 SQM",
      price: "KSH 5,460,000",
      rentalYield: "Contemporary Design",
    },
    {
      id: 9,
      src: ImageTen,
      alt: "Rooftop Lounge View",
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
      alt: "Swimming Pool",
      title: "Infinity Edge Swimming Pool",
    },
  ];

  return (
    <div data-aos="fade-up" className="list">
      <div className="amenities-slider-heading">
        <h3>EXPLORE</h3>
        <h2>ASTANA RESIDENCE UNITS</h2>
      </div>
      <div className="wrapper">
        <AiOutlineArrowLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {Units.map((unit) => (
            <ListItem
              key={unit.id}
              index={unit.id}
              src={unit.src}
              alt={unit.alt}
              {...unit}
            />
          ))}
        </div>
        <AiOutlineArrowRight
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>

      <div className="slider-pagination">
        <span>
          {slideNumber + 1} / {Units.length}
        </span>
      </div>
    </div>
  );
}

export default Amenitiesslider;
