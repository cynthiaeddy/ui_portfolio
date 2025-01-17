import { useState, useEffect } from 'react'
import './CaseStudies.css'
import { OpenerFh } from '../../components/Fh/OpenerFh'
import { OpenerFhMobile } from '../../components/Fh/OpenerFhMobile'
import { ResearchFh } from '../../components/Fh/ResearchFh'
import { DefineFh } from '../../components/Fh/DefineFh'
import { IdeateFh } from '../../components/Fh/IdeateFh'
import { DesignFh } from '../../components/Fh/DesignFh'
import { TestingFh } from '../../components/Fh/TestingFh'
import { PrototypeFh } from '../../components/Fh/PrototypeFh'
import { ReflectionFh } from '../../components/Fh/ReflectionFh'

export const Fh = () => {
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
      {isMobile ? <OpenerFhMobile /> : <OpenerFh />}
      <ResearchFh />
      <DefineFh />
      <IdeateFh />
      <DesignFh />
      <TestingFh />
      <PrototypeFh />
      <ReflectionFh />
    </section>
  )
}
