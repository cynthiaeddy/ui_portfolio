import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useGoatCounter = () => {
  const location = useLocation()

  useEffect(() => {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({
        path: location.pathname + location.search,
        title: document.title,
      })
    }
  }, [location])
}

export default useGoatCounter
