import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
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

  return !timePassed ? <Home /> : redirect ? <Navigate to='./ui_ux' /> : null
}
