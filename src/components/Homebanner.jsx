"use client"

import Image from "next/image"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Homebanner() {

  useEffect(() => {
    AOS.init({ duration: 1500 }) // Initializes animation on component mount
  }, []) // Ensures effect runs only once

  return (
    <div data-aos="zoom-in" className="main-banner">
      {/* Banner image from public folder */}
      <Image 
        priority 
        className="banner-image" 
        src="/Interior 01 - 1 BR Lounge.jpg" 
        alt="Astana Residence Banner" 
        width={1200} // Add width and height for better layout performance
        height={600}
      />

      {/* Overlay text introducing Astana Residence */}
      <div className="text">
        <h1>Welcome to Astana Residence</h1>
        <h3>Ngara, Nairobi - Luxury Living Redefined</h3>
      </div>
    </div>
  )
}

export default Homebanner