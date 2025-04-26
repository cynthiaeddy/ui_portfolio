import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Work.css'
import { Cards } from '../../components/Cards/Cards'
import ScrollDownIconCircle from '../../components/Button_animated/ScrollDownIconCircle'

export const Work = () => {
  const location = useLocation()
  const fromHome = location.state?.fromHome === true
  const [fadeIn, setFadeIn] = useState(fromHome ? false : true)

  useEffect(() => {
    if (fromHome) {
      const timer = setTimeout(() => setFadeIn(true), 50)
      return () => clearTimeout(timer)
    }
  }, [fromHome])
  return (
    <div className={`work-wrapper ${fadeIn ? 'fade-in' : ''}`}>
      <section className='HomeContainer'>
        <div className='HomeContainerTop'>
          <div className='AboutHome'>hiya, i&apos;m cynthia.</div>
          <div className='HomeSerif'>
            I create <span className='HomeSerif Bold'>beautiful,</span>
            <br /> <span className='HomeSerif Bold'>
              intuitive
            </span> experiences <br />
            through <span className='HomeSerif Bold'>thoughtful,</span> <br />
            <span className='HomeSerif Bold'>human</span> centered design.
            <ScrollDownIconCircle />
          </div>
        </div>
        <div className='HomeContainerBottom'>
          <Cards />
        </div>
      </section>
    </div>
  )
}
