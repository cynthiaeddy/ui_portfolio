import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import HomeNew from '../pages/HomeNew/HomeNew'
// import Ux from '../pages/Ux/Ux'

export const SplashScreen = () => {
  const [timePassed, setTimePassed] = useState(false)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimePassed(true)
      setRedirect(true)

      // window.location.replace('/ui_ux')
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return !timePassed ? <HomeNew /> : redirect ? <Navigate to='./work' /> : null
}
