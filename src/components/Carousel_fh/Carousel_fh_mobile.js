import React, { useState } from 'react'
import './Carousel_fh.css' // Custom CSS for your carousel
import { items } from './items_mobile' // Import items from the data folder
import arrowL from '../../assets/ssc/arrowL.png'
import arrowLhover from '../../assets/ssc/arrowLhover.png'
import arrowR from '../../assets/ssc/arrowR.png'
import arrowRhover from '../../assets/ssc/arrowRhover.png'

export const Carousel_fh_mobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(false)
  const [hoverR, setHoverR] = useState(false)

  const handleMouseIn = () => {
    setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }
  const handleMouseInR = () => {
    setHoverR(true)
  }

  const handleMouseOutR = () => {
    setHoverR(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className='carousel-container'>
      <button
        className='prev-button mobile'
        onClick={goToPrevious}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
      >
        {hover ? (
          <img className='arrow' src={arrowLhover} alt={arrowLhover} />
        ) : (
          <img className='arrow' src={arrowL} alt={arrowL} />
        )}
      </button>
      <div className='carousel-content'>
        <img
          className='carousel-image mobile'
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
        />
        <h1 className='carousel-title'>{items[currentIndex].title}</h1>
      </div>
      <button
        className='next-button mobile'
        onClick={goToNext}
        onMouseOver={handleMouseInR}
        onMouseOut={handleMouseOutR}
      >
        {hoverR ? (
          <img className='arrow' src={arrowRhover} alt={arrowRhover} />
        ) : (
          <img className='arrow' src={arrowR} alt={arrowR} />
        )}
      </button>
    </div>
  )
}
