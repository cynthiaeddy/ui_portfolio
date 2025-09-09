import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/work', { replace: true, state: { fromHome: true } })
    }, 100)

    return () => clearTimeout(timer)
  }, [navigate])

  return null
}
