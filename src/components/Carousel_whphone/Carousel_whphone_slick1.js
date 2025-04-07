import React, { useState } from 'react'
import './yuck.css'
import { videot } from './videos1' // Import items from the data folder

export const Carousel_whphone_slick1 = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className='carousel-container'>
      <button className='nav-button prev' onClick={prevSlide}>
        &lt;
      </button>

      <div className='video-slide'>
        <video
          key={videot[currentIndex].id}
          src={videot[currentIndex].url}
          controls
        />
      </div>

      <button className='nav-button next' onClick={nextSlide}>
        &gt;
      </button>
    </div>
  )
}

// export default VideoCarousel
