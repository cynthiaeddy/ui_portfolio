import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './Carousel_phone.css'

import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel_slide_ipad from './Carousel_slide_ipad'

const NextArrow = ({ onClick }) => (
  <div className='custom-arrow next-arrow ipad' onClick={onClick}>
    <FaArrowRight color='grey' size={14} />
  </div>
)

const PrevArrow = ({ onClick }) => (
  <div className='custom-arrow prev-arrow ipad' onClick={onClick}>
    <FaArrowLeft color='grey' size={14} />
  </div>
)

export const Carousel_ipad = ({ videoSources_ipad, onFirstVideoReady }) => {
  const sliderRef = useRef(null)
  const videoRefs = useRef([])
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  // useEffect(() => {
  //   videoRefs.current.forEach((video) => {
  //     if (video) {
  //       video.setAttribute('playsinline', '')
  //     }
  //   })
  // }, [videoRefs])

  return (
    <Slider {...settings} ref={sliderRef}>
      {videoSources_ipad.map((src, idx) => (
        <div key={idx} className='slide-wrapper'>
          <Carousel_slide_ipad
            ref={(el) => (videoRefs.current[idx] = el)}
            src={src}
            notifyReady={idx === 0 ? onFirstVideoReady : undefined}
          />
        </div>
      ))}
    </Slider>
  )
}
export default Carousel_ipad
