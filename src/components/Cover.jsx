"use client"

import Image from "next/image"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Cover() {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, []) // Optional: add empty dependency array to run only once on mount

  return (
    <div data-aos='fade-up'>
      {/* Use src as a string path from the public folder */}
      <Image 
        data-aos='fade-up' 
        priority 
        className='coverimage' 
        src="/Interior 08 - Studio 03.jpg"  // <-- This image must be placed in public/
        alt="Cover Image" 
        width={1200}  // Set appropriate width
        height={500}  // Set height or use layout="responsive"
      />
    </div>
  )
}

export default Cover