import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './ScrollDownIconCircle.css'

const ScrollDownIconCircle = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className='scroll-down-circle' onClick={scrollToNextSection}>
      <FaArrowDown />
    </div>
  )
}

export default ScrollDownIconCircle
