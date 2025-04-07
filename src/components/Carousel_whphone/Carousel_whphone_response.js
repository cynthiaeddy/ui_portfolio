import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
// import ReactPlayer from 'react-player'
import item1 from '../../assets/wh/wh_pho.mp4'
import item2 from '../../assets/wh/wh_pho.mp4'
export const Carousel_whphone_response = () => {
  const videos = [
    { id: { item1 }, title: 'Video 1' },
    { id: { item2 }, title: 'Video 2' },
    // Add more video objects as needed
  ]
  return (
    <div className='carousel-container'>
      <Carousel>
        {videos.map((video) => (
          <div key={video.id}>
            <iframe
              width='560'
              height='315'
              // src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder='0'
              // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
