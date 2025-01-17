import { useState, useEffect } from 'react'
import './CaseStudies.css'
import { OpenerNyt } from '../../components/Nyt/OpenerNyt'
import { OpenerNytMobile } from '../../components/Nyt/OpenerNytMobile'
import { ResearchNyt } from '../../components/Nyt/ResearchNyt'
import { DefineNyt } from '../../components/Nyt/DefineNyt'
import { IdeateNyt } from '../../components/Nyt/IdeateNyt'
import { DesignNyt } from '../../components/Nyt/DesignNyt'
import { TestingNyt } from '../../components/Nyt/TestingNyt'
import { PrototypeNyt } from '../../components/Nyt/PrototypeNyt'
import { ReflectionNyt } from '../../components/Nyt/ReflectionNyt'

export const Nyt = () => {
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
      {isMobile ? <OpenerNytMobile /> : <OpenerNyt />}
      <ResearchNyt />
      <DefineNyt />
      <IdeateNyt />
      <DesignNyt />
      <TestingNyt />
      <PrototypeNyt />
      <ReflectionNyt />
    </section>
  )
}
