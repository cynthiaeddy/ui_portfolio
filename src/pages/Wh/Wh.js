import React from 'react'
import Carousel_phone from '../../components//Carousel_wh/Carousel_phone'
import './Wh.css'

// Import your videos
import video1 from '../../assets/wh/try3.mp4'
import video2 from '../../assets/wh/try3.mp4'
import video3 from '../../assets/wh/try3.mp4'

export const Wh = () => {
  const videoSources = [video1, video2, video3]

  return (
    <div className='WhContainer'>
      <Carousel_phone videoSources={videoSources} />
    </div>
  )
}
