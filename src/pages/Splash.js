import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/work', { replace: true }) // replace: true prevents going "back" to /
  }, [navigate])

  return null
}
