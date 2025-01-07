// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbars/Navbar'
import { Home } from './pages/Home/Home'
import { Print } from './pages/Print/Print'
import { Development } from './pages/Development/Development'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Ux } from './pages/Ux/Ux'
import { Ssc } from './pages/CaseStudies/Ssc'
import { Fh } from './pages/CaseStudies/Fh'

const App = () => {
  let routes = (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/design' element={<Print />} />
      <Route exact path='/development' element={<Development />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/ux_ui' element={<Ux />} />
      <Route exact path='/ux_ui/ssc' element={<Ssc />} />
      <Route exact path='/ux_ui/fh' element={<Fh />} />
    </Routes>
  )
  return (
    <div className='AppContainer'>
      <Router>
        <Navbar />
        {routes}
      </Router>
    </div>
  )
}

export default App
