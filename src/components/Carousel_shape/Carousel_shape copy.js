import React, { useState } from 'react'
import './Carousel_shape.css'
import { items } from './items'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const Carousel_shape = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className='carousel-container shape'>
        <button className='nav-button left' onClick={goToPrevious}>
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

        <button className='nav-button right' onClick={goToNext}>
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
        view more on cynthiaeddy.me
      </button>
    </>
  )
}
