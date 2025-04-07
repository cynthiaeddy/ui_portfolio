import React, { useState } from 'react'
// import './Carousel.css' // Custom CSS for your carousel
import { items } from './videos1' // Import items from the data folder
// import arrowL from '../../assets/ssc/arrowL.png'
// import arrowLhover from '../../assets/ssc/arrowLhover.png'
// import arrowR from '../../assets/ssc/arrowR.png'
// import arrowRhover from '../../assets/ssc/arrowRhover.png'
export const Carousel_chat1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(false)
  // const [hoverR, setHoverR] = useState(false)

  // const handleMouseIn = () => {
  //   setHover(true)
  // }

  // const handleMouseOut = () => {
  //   setHover(false)
  // }
  // const handleMouseInR = () => {
  //   setHoverR(true)
  // }

  // const handleMouseOutR = () => {
  //   setHoverR(false)
  // }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    // <div className='carousel-container'>
    //   <button
    //     className='prev-button ssc'
    //     onClick={goToPrevious}
    //     onMouseOver={handleMouseIn}
    //     onMouseOut={handleMouseOut}
    //   >
    //     {hover ? (
    //       <img className='arrow' src={arrowLhover} alt={arrowLhover} />
    //     ) : (
    //       <img className='arrow' src={arrowL} alt={arrowL} />
    //     )}
    //   </button>
    //   <div className='carousel-content'>
    //     <img
    //       className='carousel-image ssc'
    //       src={items[currentIndex].image}
    //       alt={items[currentIndex].title}
    //     />
    //     <h1 className='carousel-title'>{items[currentIndex].title}</h1>
    //   </div>
    //   <button
    //     className='next-button ssc'
    //     onClick={goToNext}
    //     onMouseOver={handleMouseInR}
    //     onMouseOut={handleMouseOutR}
    //   >
    //     {hoverR ? (
    //       <img className='arrow' src={arrowRhover} alt={arrowRhover} />
    //     ) : (
    //       <img className='arrow' src={arrowR} alt={arrowR} />
    //     )}
    //   </button>
    // </div>
    <div className='carousel-container'>
      <button className='prev' onClick={prevSlide}>
        &#60;
      </button>
      <div className='carousel-slide'>
        <video
          src={items[currentIndex].url}
          controls
          autoPlay
          muted
          loop
          className='carousel-video'
        />
        <h3>{items[currentIndex].title}</h3>
      </div>
      <button className='next' onClick={nextSlide}>
        &#62;
      </button>
    </div>
  )
}
