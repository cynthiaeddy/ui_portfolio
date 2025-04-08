// import React from 'react'
import React, { useState } from 'react'
import Carousel_ipad from '../../components/Carousel_wh/Carousel_slide_ipad'
import './Wh.css'

// Import your videos
import video6 from '../../assets/wh/h20_ipad.mp4'

export const Wh = () => {
  const [isIpadReady, setIsIpadReady] = useState(false)

  const videoSources_ipad = [video6]

  return (
    <div className='WhContainer_ipad'>
      {/* Show spinner until the phone carousel is loaded */}
      {!isIpadReady && (
        <div className='carousel-spinner-overlay'>
          <div className='spinner' />
        </div>
      )}
      <div>title for ipad</div>
      <Carousel_ipad
        videoSources_ipad={videoSources_ipad}
        onFirstVideoReady={() => setIsIpadReady(true)} // iPad carousel load completes
      />
      <button className='Button_website iphone'>view</button>
    </div>
  )
}
