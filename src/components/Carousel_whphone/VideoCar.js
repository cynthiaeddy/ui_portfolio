// src/VideoCarousel.js
import React from 'react'
import Slider from 'react-slick'
// import item from './assets/try3.mp4';
import video1 from '../../assets/wh/try3.mp4'
import video2 from '../../assets/wh/try3.mp4'
import video3 from '../../assets/wh/try3.mp4'
import './VideoCar.css'

// Video carousel component
export const VideoCar = () => {
  const settings = {
    // dots: true, // Show navigation dots
    // infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one video at a time
    slidesToScroll: 1, // Scroll one video at a time
    // autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Delay between autoplay (3 seconds)
    arrows: true, // Hide previous/next arrows (since slick dots will be used)
  }

  return (
    <div className='video-carousel'>
      <Slider {...settings}>
        <div>
          <video controls width='100%' height='auto'>
            <source src={video1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls width='100%' height='auto'>
            <source src={video2} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls width='100%' height='auto'>
            <source src={video3} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </Slider>
    </div>
  )
}
