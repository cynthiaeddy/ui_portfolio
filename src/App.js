// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbars/Navbar'
import { Home } from './pages/Home/Home'
import { Print } from './pages/Print/Print'
import { Development } from './pages/Development/Development'

const App = () => {
  let routes = (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/design' element={<Print />} />
      <Route exact path='/development' element={<Development />} />
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
