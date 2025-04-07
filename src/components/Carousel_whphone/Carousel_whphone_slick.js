import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import ReactPlayer from 'react-player'
import item1 from '../../assets/wh/wh_pho.mp4'
import item2 from '../../assets/wh/wh_pho.mp4'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false, // Set to true if you want videos to autoplay
  afterChange: () => {
    // Pause all videos
    const videos = document.querySelectorAll('video')
    videos.forEach((video) => video.pause())

    // Play the current video
    const currentVideo = document.querySelector(`.slick-current video`)
    if (currentVideo) {
      currentVideo.play()
    }
  },
}

export const Carousel_whphone_slick = () => {
  // const videos = [
  //   { id: { item1 }, title: 'Video 1' },
  //   { id: { item2 }, title: 'Video 2' },
  //   // Add more video objects as needed
  // ]
  return (
    <div className='whcarousel-container'>
      <Slider {...settings}>
        <div>
          <video controls width='100%' src={item1}></video>
        </div>
        <div>
          <video controls width='100%' src={item2}></video>
        </div>
        {/* Add more video slides as needed */}
      </Slider>
    </div>
  )
}
