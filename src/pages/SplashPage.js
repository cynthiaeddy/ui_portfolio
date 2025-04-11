import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollDownIconCircle from '../components/Button_animated/ScrollDownIconCircle'

const SplashPage = () => {
  const [fadeOut, setFadeOut] = useState(false)

  const handleTransition = () => {
    setFadeOut(true)
    setTimeout(() => {
      window.location.href = '/home' // Or use your route here
    }, 1000) // Wait for the animation to finish before redirect
  }

  return (
    <div className={`splash-page ${fadeOut ? 'fade-out' : ''}`}>
      <h1>Welcome to My Site</h1>
      <button onClick={handleTransition}>Enter</button>
    </div>
  )
}

const HomePage = () => (
  <div className='home-page'>
    <h1>Home Page Content</h1>
    <ScrollDownIconCircle /> {/* Your Scroll Down Animation */}
  </div>
)

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/work' component={HomePage} />
        <Route exact path='/' component={SplashPage} />
      </Switch>
    </Router>
  )
}

export default App
