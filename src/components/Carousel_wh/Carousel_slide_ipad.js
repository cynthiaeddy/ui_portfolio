import React, { useState, useRef, useEffect, forwardRef } from 'react'
import './Carousel_phone.css'

const Carousel_slide_ipad = forwardRef(({ src, notifyReady }, externalRef) => {
  const [isReady, setIsReady] = useState(false)
  const videoRef = useRef(null)

  // Assign the forwarded ref
  useEffect(() => {
    if (!externalRef) return
    if (typeof externalRef === 'function') {
      externalRef(videoRef.current)
    } else {
      externalRef.current = videoRef.current
    }
  }, [externalRef])

  const handleLoaded = () => {
    const video = videoRef.current
    if (video && video.videoWidth > 0 && video.videoHeight > 0) {
      if (!isReady) {
        setIsReady(true)
        if (notifyReady) notifyReady()
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
        className={`video-player ${isReady ? 'visible' : 'hidden'}`}
        playsInline
        muted
        controls
        loop
        onLoadedMetadata={handleLoaded}
        onCanPlay={handleLoaded}
        // optional: add preload or style here
      />
    </div>
  )
})

Carousel_slide_ipad.displayName = 'Carousel_slide_ipad'

export default Carousel_slide_ipad
