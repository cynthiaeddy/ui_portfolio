import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './Carousel_phone.css'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel_slide_ipad from './Carousel_slide_ipad'

const NextArrow = ({ onClick, style }) => (
  <div
    className='custom-arrow next-arrow'
    onClick={onClick}
    style={{
      ...style,
      position: 'absolute',
      top: '50%',
      right: '-100px',
      transform: 'translateY(-50%)',
      zIndex: 2,
    }}
  >
    <FaArrowRight color='grey' size={14} />
  </div>
)

const PrevArrow = ({ onClick, style }) => (
  <div
    className='custom-arrow prev-arrow'
    onClick={onClick}
    style={{
      ...style,
      position: 'absolute',
      top: '50%',
      left: '-100px',
      transform: 'translateY(-50%)',
      zIndex: 2,
    }}
  >
    <FaArrowLeft color='grey' size={14} />
  </div>
)

export const Carousel_ipad = ({ videoSources_ipad, onFirstVideoReady }) => {
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
      {videoSources_ipad.map((src, idx) => (
        <div key={idx} className='slide-wrapper'>
          <Carousel_slide_ipad
            src={src}
            notifyReady={idx === 0 ? onFirstVideoReady : undefined}
          />
        </div>
      ))}
    </Slider>
  )
}
export default Carousel_ipad
