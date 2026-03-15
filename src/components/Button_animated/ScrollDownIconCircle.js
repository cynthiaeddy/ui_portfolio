import React, { useEffect, useRef } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './ScrollDownIconCircle.css'

const ScrollDownIconCircle = () => {
  const arrowRef = useRef(null)

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  const playHoverAnimation = () => {
    const arrow = arrowRef.current
    if (!arrow) return

    arrow.style.animation = 'none'
    arrow.offsetHeight
    arrow.style.animation = 'fade_move_down .8s ease-in-out 1'
  }

  useEffect(() => {
    const arrow = arrowRef.current
    if (!arrow) return

    arrow.style.animation = 'fade_move_down 1.2s ease-in-out 3'
  }, [])

  return (
    <div
      className='scroll-down-circle'
      onClick={scrollToNextSection}
      onMouseEnter={playHoverAnimation}
    >
      <span ref={arrowRef} className='scroll-down-arrow'>
        <FaArrowDown />
      </span>
    </div>
  )
}

export default ScrollDownIconCircle
