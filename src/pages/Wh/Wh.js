// import React from 'react'
import React, { useState } from 'react'
import Carousel_ipad from '../../components/Carousel_wh/Carousel_ipad'
import Carousel_phone from '../../components/Carousel_wh/Carousel_phone'
import './Wh.css'

// Import your videos
import video1 from '../../assets/wh/toc_iphone.mp4'
import video3 from '../../assets/wh/beauty_iphone.mp4'
import video2 from '../../assets/wh/commute5.mp4'
import video5 from '../../assets/wh/iphone_fashion.mp4'
import video4 from '../../assets/wh/workout_iphone.mp4'
import video6 from '../../assets/wh/h20_ipad.mp4'
import video7 from '../../assets/wh/h20_ipad.mp4'

export const Wh = () => {
  const [isPhoneReady, setIsPhoneReady] = useState(false)
  const [isIpadReady, setIsIpadReady] = useState(false)

  const videoSources = [video1, video2, video3, video4, video5]
  const videoSources_ipad = [video6, video7]

  return (
    <div className='WhContainer'>
      {/* Show spinner until the phone carousel is loaded */}
      {!isPhoneReady && (
        <div className='carousel-spinner-overlay'>
          <div className='spinner' />
        </div>
      )}

      {/* Render phone carousel */}
      <div>title for iphone</div>
      <div className='iphone-carousel-wrapper'>
        <Carousel_phone
          videoSources={videoSources}
          onFirstVideoReady={() => {
            setIsPhoneReady(true) // When phone carousel is loaded
            setIsIpadReady(true) // Trigger iPad carousel to start loading immediately
          }}
        />
      </div>
      <button className='Button_website iphone'>down for ipad</button>

      {/* Render iPad carousel only after phone carousel is ready */}
      {isIpadReady && (
        <>
          <div>title for ipad</div>
          <div className='ipad-carousel-wrapper'>
            <Carousel_ipad
              videoSources_ipad={videoSources_ipad}
              onFirstVideoReady={() => setIsIpadReady(true)}
            />
          </div>
          <button className='Button_website iphone'>view</button>
        </>
      )}
    </div>
  )
}
