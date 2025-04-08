import './Carousel_phone.css'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel_slide from './Carousel_slide'

export const Carousel_phone = ({ videoSources }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {videoSources.map((src, idx) => (
        <div key={idx}>
          <Carousel_slide src={src} />
        </div>
      ))}
    </Slider>
  )
}
export default Carousel_phone
