import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/swirl_sm.jpg'
import navActive from '../../assets/bug.svg'

export const NavbarNew = () => {
  const [spin, setSpin] = useState(false)

  const handleMouseEnter = () => {
    if (!spin) setSpin(true)
  }
  return (
    <nav id='NavbarContainer'>
      <div className='NavbarSection'>
        <ul className='Navbar-items'>
          <li className='nav-item work-link'>
            <NavLink to='/work' className='nav-links' activeClassName='active'>
              work
              <img src={navActive} className='navActive' alt='navActive' />
            </NavLink>
          </li>
          <li className='nav-item work-link'>
            <NavLink to='/about' className='nav-links' activeClassName='active'>
              about
              <img src={navActive} className='navActive' alt='navActive' />
            </NavLink>
          </li>
          <li className='nav-item work-link'>
            <NavLink
              to='/contact'
              className='nav-links'
              activeClassName='active'
            >
              contact
              <img src={navActive} className='navActive' alt='navActive' />
            </NavLink>
          </li>
        </ul>
        <div className='Navbar-logo'>
          <img
            src={logo}
            className={`logo ${spin ? 'spin' : ''}`}
            alt='logo'
            onMouseEnter={handleMouseEnter}
            onAnimationEnd={() => setSpin(false)}
          />
        </div>
      </div>
    </nav>
  )
}
