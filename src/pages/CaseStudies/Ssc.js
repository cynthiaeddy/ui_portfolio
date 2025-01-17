import { useState, useEffect } from 'react'
import './CaseStudies.css'
import { Opener } from '../../components/Ssc/Opener'
import { OpenerMobile } from '../../components/Ssc/OpenerMobile'
import { Research } from '../../components/Ssc/Research'
import { Define } from '../../components/Ssc/Define'
import { Ideate } from '../../components/Ssc/Ideate'
import { Design } from '../../components/Ssc/Design'
import { Testing } from '../../components/Ssc/Testing'
import { Prototype } from '../../components/Ssc/Prototype'
import { Reflection } from '../../components/Ssc/Reflection'

export const Ssc = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    // Attach resize event listener
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const isMobile = windowWidth <= 479

  return (
    <section className='Container studies'>
      {isMobile ? <OpenerMobile /> : <Opener />}
      <Research />
      <Define />
      <Ideate />
      <Design />
      <Testing />
      <Prototype />
      <Reflection />
    </section>
  )
}
