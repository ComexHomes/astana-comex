"use client"

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Studiobedroom() {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, []) // Added dependency array

  const brochure = 'https://example.com/Astana_Residence_Brochure.pdf'  // Replace with actual URL if available

  const handleClick = (url) => {
    console.log('This button has been clicked')

    const fileName = url.split("/").pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  const runHandleClick = () => {
    handleClick(brochure)
  }

  return (
    <div data-aos='fade-up' className='studiobedroom'>
      <div className="top-layer">
        <div className="side">
          <h2>One Bedroom</h2>

          <p>The epitome of elegant and intuitive design,</p>
          <p>each one-bedroom apartment offers an effortless blend of luxurious comfort,</p>
          <p>spacious living areas, and architectural sophistication.</p>

          <ul>
            <li><strong>Size:</strong> 42 sqm</li>
            <li><strong>Price From:</strong> KES 5,460,000</li>
            <li><strong>Rental Expected:</strong> KES 36,400/month</li>
            <li><strong>Rental Yield:</strong> 8%</li>
          </ul>
        </div>

        <div className="middle-line"></div>

        <div className="side">
          <h2>Studios</h2>

          <p>Nestled in modern convenience yet connected to world-class amenities,</p>
          <p>Astana Residence offers an exquisite collection of premium studios,</p>
          <p>designed for efficiency, style, and comfort.</p>

          <ul>
            <li><strong>Size:</strong> 27 sqm</li>
            <li><strong>Price From:</strong> KES 3,510,000</li>
            <li><strong>Rental Expected:</strong> KES 23,400/month</li>
            <li><strong>Rental Yield:</strong> 8%</li>
          </ul>
        </div>
      </div>

      <div className="bottom-layer">
        <button className='btn-light' onClick={runHandleClick}>Download Brochure</button>
      </div>
    </div>
  )
}

export default Studiobedroom