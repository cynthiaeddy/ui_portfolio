import { useState, useEffect } from 'react'
import Home from '../pages/Home/Home'
import Ux from '../pages/Ux/Ux'

export const SplashScreen = () => {
  const [timePassed, setTimePassed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimePassed(true)
      // window.location.replace('/ux_ui')
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return !timePassed ? <Home /> : <Ux />
}
