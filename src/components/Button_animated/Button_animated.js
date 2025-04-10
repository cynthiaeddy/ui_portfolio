import React from 'react'
import './Button_animated.css' // Import the CSS file

export const Button_animated = () => {
  return (
    <button className='animated-button'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        className='down-arrow'
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M12 16l-4-4h8z' fill='white' />
      </svg>
      Scroll Down
    </button>
  )
}

export default Button_animated
