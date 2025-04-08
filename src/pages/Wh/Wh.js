// import { Carousel_phone } from '../../components/Carousel_wh/Carousel_phone.js'
// import './Wh.css'

// export const Wh = () => {
//   return (
//     <section className='Container wh'>
//       {/* im here */}
//       <Carousel_phone />
//     </section>
//   )
// }

import React from 'react'
import Carousel_phone from '../../components//Carousel_wh/Carousel_phone'

// Import your videos
import video1 from '../../assets/wh/try3.mp4'
import video2 from '../../assets/wh/try3.mp4'
import video3 from '../../assets/wh/try3.mp4'

export const Wh = () => {
  const videoSources = [video1, video2, video3]

  return (
    <div className='max-w-3xl mx-auto mt-10'>
      <Carousel_phone videoSources={videoSources} />
    </div>
  )
}
