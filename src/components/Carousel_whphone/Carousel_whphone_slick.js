import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import './Carousel_wh.css' // Custom CSS for your carousel
// import item1 from '../../assets/wh/wh_pho.mp4'
// import item2 from '../../assets/wh/try.mp4'
// import item3 from '../../assets/wh/try2.mp4'
import item4 from '../../assets/wh/try3.mp4'

// import item2 from '../../assets/wh/beauty-discuss-ezgif.com-speed.gif'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // prevArrow: false,
  // nextArrow: false,
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
    // <div className='whcarousel-container'>
    <Slider {...settings}>
      {/* <div>
          <video
            controls
            width='50%'
            src={item1}
            style={{
              // minWidth: '100%',
              // minHeight: '100%',
              objectFit: 'cover',
              width: 'auto',
              height: 'auto',
            }}
          ></video>
        </div> */}
      <div>
        <video
          controls
          width='75%'
          src={item4}
          style={{
            // minWidth: '100%',
            // minHeight: '100%',
            objectFit: 'cover',
            width: 'auto',
            height: 'auto',
          }}
        ></video>
      </div>
      <div>
        <video
          controls
          width='75%'
          src={item4}
          style={{
            // minWidth: '100%',
            // minHeight: '100%',
            objectFit: 'cover',
            width: 'auto',
            height: 'auto',
          }}
        ></video>
      </div>
      <div>
        <video
          controls
          width='75%'
          src={item4}
          style={{
            // minWidth: '100%',
            // minHeight: '100%',
            objectFit: 'cover',
            width: 'auto',
            height: 'auto',
          }}
        ></video>
      </div>
      {/* Add more video slides as needed */}
      {/* <<Slider {...settings}>
      <div>
        <GifPlayer gif={item2} still={item2} autoplay={true} />
      </div>
      <div>
        <GifPlayer gif={item2} still={item2} autoplay={true} />
      </div> */}
    </Slider>
  )
}
