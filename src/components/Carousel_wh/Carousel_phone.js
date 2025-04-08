import './Carousel_phone.css'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel_slide from './Carousel_slide'

const NextArrow = ({ onClick }) => (
  <div className='custom-arrow next-arrow' onClick={onClick}>
    ►
  </div>
)

const PrevArrow = ({ onClick }) => (
  <div className='custom-arrow prev-arrow' onClick={onClick}>
    ◄
  </div>
)

export const Carousel_phone = ({ videoSources, onFirstVideoReady }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Slider {...settings}>
      {videoSources.map((src, idx) => (
        <div key={idx} className='slide-wrapper'>
          <Carousel_slide
            src={src}
            notifyReady={idx === 0 ? onFirstVideoReady : undefined}
          />
        </div>
      ))}
    </Slider>
  )
}
export default Carousel_phone
