import { useState, useEffect } from 'react'

import ScrollToTop from './components/ScrollToTop'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import './App.css'
import { NavbarNew } from './components/Navbars/NavbarNew'
import { NavbarMobile } from './components/Navbars/NavbarMobile'
import { HomeNew } from './pages/HomeNew/HomeNew'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Ssc } from './pages/CaseStudies/Ssc'
import { Fh } from './pages/CaseStudies/Fh'
import { Nyt } from './pages/CaseStudies/Nyt'
import { Wh } from './pages/Wh/Wh'
import { Shape } from './pages/Shape/Shape'
import { Work } from './pages/Work/Work'

const HomeToWork = () => {
  const [fadeOut, setFadeOut] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 500) // start fade out
    const timer2 = setTimeout(
      () => navigate('/work', { state: { fromHome: true } }),
      3500,
    ) // after fade, route

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [navigate])

  return (
    <div className={`fade-wrapper ${fadeOut ? 'fade-out' : 'fade-in'}`}>
      <HomeNew />
    </div>
  )
}

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Update windowWidth on window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    // Attach resize event listener
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Define breakpoints for screen sizes
  const isMobile = windowWidth <= 768

  let routes = (
    <Routes>
      <Route path='/' element={<HomeToWork />} />
      <Route exact path='/work' element={<Work />} />

      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />

      <Route exact path='/work/ssc' element={<Ssc />} />
      <Route exact path='/work/nyt' element={<Nyt />} />
      <Route exact path='/work/fh' element={<Fh />} />
      <Route exact path='/work/wh' element={<Wh />} />
      <Route exact path='/work/editorial' element={<Shape />} />
    </Routes>
  )
  return (
    <div className='AppContainer'>
      <Router>
        <ScrollToTop />
        {!isMobile ? <NavbarNew /> : <NavbarMobile />}
        {routes}
      </Router>
    </div>
  )
}

export default App
