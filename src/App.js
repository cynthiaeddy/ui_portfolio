// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbars/Navbar'
import { Home } from './pages/Home/Home'

const App = () => {
  let routes = (
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route exact path='/projects' element={<ProjectsContainer />} />
      <Route exact path='/projects/:title' element={<Project />} />
      <Route exact path='/about-me' element={<AboutMe />} /> */}
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
