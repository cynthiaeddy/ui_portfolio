import React, { useState } from 'react'
import './Carousel_shape.css'
import { items } from './items'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const Carousel_shape = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const goToNext = () => {
    if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className='carousel-container shape'>
        <button
          className={`nav-button left ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft className='arrow-icon' />
        </button>

        <div className='carousel-content shape'>
          <img
            className='carousel-image shape'
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
          />
          <h1 className='carousel-title'>{items[currentIndex].title}</h1>
        </div>

        <button
          className={`nav-button right ${currentIndex === items.length - 1 ? 'disabled' : ''}`}
          onClick={goToNext}
          disabled={currentIndex === items.length - 1}
        >
          <FaArrowRight className='arrow-icon' />
        </button>

        <div className='carousel-indicators'>
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <button
        className='Button_website iphone'
        onClick={() => window.open('https://cynthiaeddy.me/print', '_blank')}
      >
        more editorial work on cynthiaeddy.me
      </button>
    </>
  )
}
