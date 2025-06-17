"use client";
import React from "react";
import { FiMessageCircle } from "react-icons/fi"; // Feather icon similar to WhatsApp

const WhatsAppButton = () => {
  const phoneNumber = "+254709501501";
  const message = "Hello!";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\+/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-110 flex items-center justify-center z-[9999]"
      aria-label="Contact on WhatsApp"
    >
      <FiMessageCircle className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;
