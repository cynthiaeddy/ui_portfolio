// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbars/Navbar'

function App() {
  return (
    <div className='AppContainer'>
      <Router>
        <Navbar />
      </Router>
    </div>
  )
}

export default App
