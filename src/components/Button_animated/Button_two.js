// import './Button_two.css'

// export const Button_two = () => {
//   return (
//     <div className='Button_home'>
//       <div className='scroll-down'></div>
//     </div>
//   )
// }
// export default Button_two
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './Button_two.css'

const Button_two = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className='scroll-down' onClick={scrollToNextSection}>
      <FaArrowDown />
    </div>
  )
}

export default Button_two
