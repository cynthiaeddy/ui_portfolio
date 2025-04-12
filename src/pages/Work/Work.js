import '../HomeNew/HomeNew.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Cards } from '../../components/Cards/Cards'
// import { Footer } from '../../components/Footer/Footer'
import ScrollDownIconCircle from '../../components/Button_animated/ScrollDownIconCircle'

export const Work = () => {
  const location = useLocation()
  const fromHome = location.state?.fromHome === true
  const [fadeIn, setFadeIn] = useState(false)
  console.log('fromHome:', fromHome, 'location', location)

  useEffect(() => {
    if (!fromHome) {
      setFadeIn(true)
    }
  }, [fromHome])

  useEffect(() => {
    {
      setFadeIn(true)
    }
  }, [])

  return (
    <div className={`fade-wrapper ${fadeIn ? 'fade-in' : 'fade-out'}`}>
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
      {/* // <Footer />
      //{' '} */}
    </div>
  )
}
