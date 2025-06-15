"use client"

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

function Revealarea() {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, []) // Added empty dependency array for performance

  return (
    <div data-aos='fade-up' className='amenities-second'>
      <div className="amenities-first-heading">
        <h3>WELCOME TO</h3>
        <h2>ASTANA RESIDENCE</h2>
      </div>

      <div className="amenities-first-text">
        <p>
          Astana Residence offers a perfect balance of luxury and functionality, tailored for students and young professionals. 
          Discover contemporary studio and one-bedroom apartments designed to elevate your lifestyle with elegant finishes, modern amenities, and strategic location advantages.
        </p>
      </div>

      <div style={{ marginTop: '20px' }} className='btn-area'>
        <Link href='https://zfrmz.com/63qeS4QHxcWIQdgr1NB3'  target='_blank'>
          <button className="btn">Register Interest</button>
        </Link>
      </div>
    </div>
  )
}

export default Revealarea