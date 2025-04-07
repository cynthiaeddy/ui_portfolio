// src/VideoCarousel.js
import React, { useState } from 'react'
import './VideoCarousel.css'
import item2 from '../../assets/wh/try.mp4'
// import item3 from '../../assets/wh/try2.mp4'
// import item4 from '../../assets/wh/try3.mp4'

const videos = [
  {
    id: 1,
    url: { item2 },
    title: 'Sample Video 1',
  },
  {
    id: 2,
    url: { item2 },
    title: 'Sample Video 2',
  },
  {
    id: 3,
    url: 'https://www.w3schools.com/html/horse.mp4',
    title: 'Sample Video 3',
  },
]

export const Carousel_chat = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className='carousel-container'>
      <button className='prev' onClick={prevSlide}>
        &#60;
      </button>
      <div className='carousel-slide'>
        <video
          src={videos[currentIndex].url}
          controls
          autoPlay
          muted
          loop
          className='carousel-video'
        />
        <h3>{videos[currentIndex].title}</h3>
      </div>
      <button className='next' onClick={nextSlide}>
        &#62;
      </button>
    </div>
  )
}

// export default VideoCarousel
