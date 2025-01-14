import { useState, useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbars/Navbar'
// import { NavbarMobile } from './components/Navbars/NavbarMobile'
import { Home } from './pages/Home/Home'
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
import { SplashScreen } from './components/SplashScreen'

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
  // const isMobile = windowWidth <= 767
  const isTablet = windowWidth >= 479 && windowWidth <= 1030
  const isDesktop = windowWidth >= 1031

  let routes = (
    <Routes>
      <Route exact path='/' element={<SplashScreen />} />
      <Route exact path='/' element={<Home />} />
      <Route exact path='/design' element={<Print />} />
      <Route exact path='/development' element={<Development />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route
        path='/ux_ui'
        element={isDesktop ? <Ux /> : isTablet ? <UxTablet /> : <UxMobile />}
      />

      <Route exact path='/ux_ui/ssc_case_study' element={<Ssc />} />
      <Route exact path='/ux_ui/nyt_cooking_case_study' element={<Nyt />} />
      <Route exact path='/ux_ui/fh_case_study' element={<Fh />} />
    </Routes>
  )
  return (
    <div className='AppContainer'>
      <Router>
        <ScrollToTop />
        {/* {!isMobile ? <Navbar /> : <NavbarMobile />} */}
        <Navbar />
        {routes}
      </Router>
    </div>
  )
}

export default App
