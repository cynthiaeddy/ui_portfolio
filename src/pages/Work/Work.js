import '../HomeNew/HomeNew.css'
import { useEffect, useState } from 'react'
import { Cards } from '../../components/Cards/Cards'
import { Footer } from '../../components/Footer/Footer'
// import Button_animated from '../../components/Button_animated/Button_animated'
// import Button_two from '../../components/Button_animated/Button_two'
import ScrollDownIconCircle from '../../components/Button_animated/ScrollDownIconCircle'

export const Work = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true)
    }, 100) // small delay before fade in starts

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className={`work-wrapper ${fadeIn ? 'fade-in' : 'fade-start'}`}>
        <section className='HomeContainer'>
          <div className='HomeContainerTop'>
            <div className='AboutHome '>hiya, i&apos;m cynthia.</div>
            <div className='HomeSerif'>
              I create <span className='HomeSerif Bold'>beautiful,</span>
              <br /> <span className='HomeSerif Bold'>intuitive</span>{' '}
              experiences <br />
              through <span className='HomeSerif Bold'>thoughtful,</span> <br />
              <span className='HomeSerif Bold'>human</span> centered design.
              <ScrollDownIconCircle />
            </div>
          </div>
          <div className='HomeContainerBottom'>{<Cards />}</div>
        </section>
        {<Footer />}
      </div>
    </>
  )
}
