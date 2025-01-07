import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional for smooth scrolling
    })
  }, [location])

  return children
}

export default ScrollToTop
