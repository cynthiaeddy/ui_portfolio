// import React from 'react'
import React, { useState } from 'react'
import Carousel_phone from '../../components//Carousel_wh/Carousel_phone'
import './Wh.css'

// Import your videos
import video1 from '../../assets/wh/toc_iphone.mp4'
import video3 from '../../assets/wh/beauty_iphone.mp4'
import video2 from '../../assets/wh/commute5.mp4'
import video5 from '../../assets/wh/iphone_fashion.mp4'
import video4 from '../../assets/wh/workout_iphone.mp4'

export const Wh = () => {
  const [isCarouselReady, setIsCarouselReady] = useState(false)
  const videoSources = [video1, video2, video3, video4, video5]

  return (
    <div className='WhContainer'>
      {!isCarouselReady && (
        <div className='carousel-spinner-overlay'>
          <div className='spinner' />
        </div>
      )}
      <Carousel_phone
        videoSources={videoSources}
        onFirstVideoReady={() => setIsCarouselReady(true)}
      />
      <button className='Button_website iphone'>view</button>
    </div>
  )
}
