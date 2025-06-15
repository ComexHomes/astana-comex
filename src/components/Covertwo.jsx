"use client"
import Image from "next/image"
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Covertwo() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div>
        <Image data-aos='fade-up' className='coverimage' src="/Interior 07 - Studio 01.jpg" width={1200} // Add width and height for better layout performance
        height={600} alt='cover'/>
    </div>
  )
}

export default Covertwo