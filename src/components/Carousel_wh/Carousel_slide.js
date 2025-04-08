// VideoSlide.jsx
import React, { useState, useRef } from 'react'
// import './spinner.css' // Make sure to import your CSS

export const Carousel_slide = ({ src }) => {
  const [isReady, setIsReady] = useState(false)
  const videoRef = useRef(null)

  const handleLoaded = () => {
    const video = videoRef.current
    if (video && video.videoWidth > 0 && video.videoHeight > 0) {
      setIsReady(true)
    }
  }

  return (
    <div className='relative w-full h-full'>
      {!isReady && (
        <div className='absolute inset-0 flex items-center justify-center bg-black z-10'></div>
      )}

      <video
        ref={videoRef}
        src={src}
        controls
        onLoadedMetadata={handleLoaded}
        onCanPlay={handleLoaded}
        className={`w-full h-auto transition-opacity duration-300 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
export default Carousel_slide
