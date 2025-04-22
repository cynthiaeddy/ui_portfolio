import React, { useState } from 'react'
import Carousel_ipad from '../../components/Carousel_wh/Carousel_ipad'
import Carousel_phone from '../../components/Carousel_wh/Carousel_phone'
import './Wh.css'

// Import your videos
import video1 from '../../assets/wh/toc_iphone2.mp4'
import video3 from '../../assets/wh/beauty_iphone2.mp4'
import video2 from '../../assets/wh/commute2.mp4'
import video5 from '../../assets/wh/iphone_fashion2.mp4'
import video4 from '../../assets/wh/workout_iphone1.mp4'
import video7 from '../../assets/wh/summer4.mp4'
import video9 from '../../assets/wh/h20_ipad2.mp4'
import video6 from '../../assets/wh/toc_ipad1.mp4'
import video8 from '../../assets/wh/stacked3.mp4'
import video10 from '../../assets/wh/mother2.mp4'
import poster from '../../assets/wh/placeholder.jpg'
import poster1 from '../../assets/wh/placeholder.jpg'
import poster2 from '../../assets/wh/placeholder.jpg'
import poster3 from '../../assets/wh/placeholder.jpg'
import poster4 from '../../assets/wh/placeholder.jpg'

export const Wh = () => {
  const [isPhoneReady, setIsPhoneReady] = useState(false)
  const [isIpadReady, setIsIpadReady] = useState(false)

  const videoSources = [
    { src: video1, poster: poster },
    { src: video2, poster: poster1 },
    { src: video3, poster: poster2 },
    { src: video4, poster: poster3 },
    { src: video5, poster: poster4 },
  ]
  const videoSources_ipad = [video6, video7, video8, video9, video10]

  return (
    <div className='WhContainer'>
      {/* Show spinner until the phone carousel is loaded */}
      {!isPhoneReady && (
        <div className='carousel-spinner-overlay'>
          <div className='spinner' />
        </div>
      )}

      {/* Render phone carousel */}
      <div className='iphone-carousel-wrapper'>
        <Carousel_phone
          videoSources={videoSources}
          onFirstVideoReady={() => {
            setIsPhoneReady(true) // When phone carousel is loaded
            setIsIpadReady(true) // Trigger iPad carousel to start loading immediately
          }}
        />
      </div>
      {/* Render iPad carousel only after phone carousel is ready */}
      {isIpadReady && (
        <>
          <div className='ipad-carousel-wrapper'>
            <Carousel_ipad
              videoSources_ipad={videoSources_ipad}
              onFirstVideoReady={() => setIsIpadReady(true)}
            />
          </div>
          <button
            className='Button_website iphone'
            onClick={() =>
              window.open('https://cynthiaeddy.me/digital', '_blank')
            }
          >
            view more on cynthiaeddy.me
          </button>
        </>
      )}
    </div>
  )
}
