import { useState, useEffect } from 'react'

import ScrollToTop from './components/ScrollToTop'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import './App.css'
// import { Navbar } from './components/Navbars/Navbar'
import { NavbarNew } from './components/Navbars/NavbarNew'
import { NavbarMobile } from './components/Navbars/NavbarMobile'
// import { Home } from './pages/Home/Home'
import { HomeNew } from './pages/HomeNew/HomeNew'

import { Print } from './pages/Print/Print'
import { Development } from './pages/Development/Development'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Ux } from './pages/Ux/Ux'
import { UxTablet } from './pages/Ux/UxTablet'
import { UxMobile } from './pages/Ux/UxMobile'
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
    const timer1 = setTimeout(() => setFadeOut(true), 1000) // start fade out
    const timer2 = setTimeout(() => navigate('/work'), 3500) // after fade, route

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
  const isTablet = windowWidth >= 479 && windowWidth <= 1030
  const isDesktop = windowWidth >= 1031

  let routes = (
    <Routes>
      <Route path='/' element={<HomeToWork />} />
      <Route path='/work' element={<Work />} />

      <Route exact path='/design' element={<Print />} />
      <Route exact path='/development' element={<Development />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route
        path='/ui_ux'
        element={isDesktop ? <Ux /> : isTablet ? <UxTablet /> : <UxMobile />}
      />

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
        {/* <Navbar /> */}
        {routes}
      </Router>
      {/* <Footer /> */}
    </div>
  )
}

export default App
