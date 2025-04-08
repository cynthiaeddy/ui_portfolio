// VideoSlide.jsx
import React, { useState, useRef } from 'react'
// import './spinner.css' // Make sure to import your CSS

export const Carousel_slide = ({ src, notifyReady }) => {
  const [isReady, setIsReady] = useState(false)
  const videoRef = useRef(null)

  const handleLoaded = () => {
    const video = videoRef.current
    if (video && video.videoWidth > 0 && video.videoHeight > 0) {
      if (!isReady) {
        setIsReady(true)
        if (notifyReady) notifyReady() // Fire only for first video
      }
    }
  }

  return (
    <div className='video-slide'>
      {!isReady && (
        <div className='video-spinner-overlay'>
          <div className='spinner' />
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        controls
        onLoadedMetadata={handleLoaded}
        onCanPlay={handleLoaded}
        className={`video-player ${isReady ? 'visible' : 'hidden'}`}
      />
    </div>
  )
}
export default Carousel_slide
