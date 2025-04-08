// // // import { useCallback, useEffect, useRef, useState } from 'react'
// // // import LightGallery from 'lightgallery/react'
// // // import lgVideo from 'lightgallery/plugins/video'
// // import 'lightgallery/css/lightgallery.css'
// // // import 'lightgallery/css/lg-zoom.css'
// // // import 'lightgallery/css/lg-thumbnail.css'
// // // import './style.css'
// // import lgThumbnail from 'lightgallery/plugins/thumbnail'
// // // import { LightGallery as ILightGallery } from 'lightgallery/lightgallery'

// // import React, { useRef, useEffect, useState, useCallback } from 'react'
// // // import lightGallery from 'lightgallery'
// // import 'lightgallery/css/lightgallery.css'
// // import 'lightgallery/css/lg-video.css'
// // import lgVideo from 'lightgallery/plugins/video'
// // import { LightGallery } from 'lightgallery/react'
// // import item1 from '../../assets/wh/wh_pho.mp4'

// // export const Carousel_whnew = () => {
// //   const lightGalleryRef = useRef
// //   // < ILightGallery > null
// //   const containerRef = useRef(null)
// //   const [galleryContainer, setGalleryContainer] = useState(null)

// //   const onInit = useCallback((detail) => {
// //     if (detail) {
// //       lightGalleryRef.current = detail.instance
// //       lightGalleryRef.current.openGallery()
// //     }
// //   }, [])

// //   useEffect(() => {
// //     if (containerRef.current) {
// //       setGalleryContainer(containerRef.current)
// //     }
// //   }, [])

// //   const videos = [
// //     {
// //       src: { item1 },
// //       subHtml: `<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>`,
// //     },
// //     {
// //       src: 'https://www.youtube.com/watch?v=ttLu7ygaN6I',
// //       subHtml: `<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>`,
// //       thumb: 'https://img.youtube.com/vi/your_youtube_video_id/mqdefault.jpg',
// //     },
// //     {
// //       src: 'https://www.youtube.com/watch?v=C3vyugaBhSs',
// //       subHtml: `<h4>UE5 | In The Heart Of The Forest by Anastasia Gorban</h4>`,
// //     },
// //     // Add more video objects as needed
// //   ]

// //   //   {
// //   //     source: [
// //   //         {
// //   //             src: '/videos/video1.mp4',
// //   //             type: 'video/mp4',
// //   //         },
// //   //         ...
// //   //     ],
// //   //     // Optional video tracks - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
// //   //     tracks : [
// //   //         {
// //   //             src: '/videos/title.txt',
// //   //             kind:'captions'
// //   //         }
// //   //     ],
// //   //     attributes: { preload: false, controls: true },
// //   // };

// //   return (
// //     <div className='App'>
// //       <div
// //         style={{
// //           height: '800px',
// //         }}
// //         ref={containerRef}
// //       ></div>
// //       <div>
// //         <LightGallery
// //           container={galleryContainer}
// //           onInit={onInit}
// //           plugins={[lgThumbnail, lgVideo]}
// //           closable={false}
// //           showMaximizeIcon={true}
// //           slideDelay={400}
// //           thumbWidth={130}
// //           thumbHeight={'100px'}
// //           thumbMargin={6}
// //           appendSubHtmlTo={'.lg-item'}
// //           dynamic={true}
// //           dynamicEl={videos}
// //           videojs
// //           videojsOptions={{ muted: false }}
// //           hash={false}
// //           elementClassNames={'inline-gallery-container'}
// //         ></LightGallery>
// //       </div>
// //     </div>
// //   )
// // }
// import { FC, useCallback, useEffect, useRef, useState } from 'react'
// import LightGallery from 'lightgallery/react'
// import { LightGallery as ILightGallery } from 'lightgallery/lightgallery'
// import lgZoom from 'lightgallery/plugins/zoom'
// import lgThumbnail from 'lightgallery/plugins/thumbnail'

// export const Carousel_whnew = () => {
//   const lightGalleryRef = useRef < ILightGallery > null
//   const containerRef = useRef(null)
//   const [galleryContainer, setGalleryContainer] = useState(null)

//   const onInit = useCallback((detail) => {
//     if (detail) {
//       lightGalleryRef.current = detail.instance
//       lightGalleryRef.current.openGallery()
//     }
//   }, [])

//   useEffect(() => {
//     if (containerRef.current) {
//       setGalleryContainer(containerRef.current)
//     }
//   }, [])

//   return (
//     <div className='App'>
//       <div style={{ height: '800px' }} ref={containerRef}></div>
//       <LightGallery
//         container={galleryContainer}
//         onInit={onInit}
//         plugins={[lgZoom, lgThumbnail]}
//         dynamic={true}
//         dynamicEl={[
//           {
//             src: '...',
//             responsive: '...',
//             thumb: '...',
//             subHtml: `...`,
//           },
//           {
//             src: '...',
//             responsive: '...',
//             thumb: '...',
//             subHtml: `...`,
//           },
//         ]}
//       />
//     </div>
//   )
// }

import { useCallback, useEffect, useRef, useState } from 'react'
// import { LightGallery } from 'lightgallery/lightgallery'
import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'
// import './style.scss'

export const Carousel_whnew = () => {
  const lightGalleryRef = useRef(null)
  const containerRef = useRef(null)
  const [galleryContainer, setGalleryContainer] = useState(null)

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGalleryRef.current = detail.instance
      // Since we are using dynamic mode, we need to programmatically open lightGallery
      lightGalleryRef.current.openGallery()
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer(containerRef.current)
    }
  }, [])

  const videos = [
    {
      src: 'https://youtu.be/IUN664s7N-c',
      subHtml: `<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>`,
    },
    {
      src: 'https://www.youtube.com/watch?v=ttLu7ygaN6I',
      subHtml: `<h4>Forest Path - Unreal Engine 5 Cinematic by Sharkyy</h4>`,
    },
    {
      src: 'https://www.youtube.com/watch?v=C3vyugaBhSs',
      subHtml: `<h4>UE5 | In The Heart Of The Forest by Anastasia Gorban</h4>`,
    },
    // Add more video objects as needed
  ]

  return (
    <>
      <div ref={containerRef} />
      <LightGallery
        container={galleryContainer}
        onInit={onInit}
        plugins={[lgThumbnail, lgVideo]}
        closable={false}
        showMaximizeIcon={true}
        slideDelay={400}
        thumbWidth={130}
        thumbHeight={'100px'}
        thumbMargin={6}
        appendSubHtmlTo={'.lg-item'}
        dynamic={true}
        dynamicEl={videos}
        // videojs
        // videojsOptions={{ muted: false }}
        hash={false}
        elementClassNames={'inline-gallery-container'}
      />
    </>
  )
}
