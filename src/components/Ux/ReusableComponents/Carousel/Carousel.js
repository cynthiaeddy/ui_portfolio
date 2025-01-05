import React, { useState } from 'react'
import './Carousel.css' // Import the custom CSS file

const Carousel = ({ items }) => {
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

  return (
    <div className='carousel-container'>
      <button className='carousel-button prev-button' onClick={goToPrevious}>
        Previous
      </button>
      <div className='carousel-content'>
        <h1 className='carousel-title'>{items[currentIndex].title}</h1>
      </div>
      <button className='carousel-button next-button' onClick={goToNext}>
        Next
      </button>
    </div>
  )
}

export default ItemCarousel
