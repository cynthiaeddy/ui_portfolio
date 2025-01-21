import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/swirl_sm.jpg'
import MenuButton from './MenuButton'
import navActive from '../../assets/bug.svg'

export const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleMouseIn = () => {
    setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }

  return (
    <nav id='navbar-mobile'>
      <div className='navbar-mobile-top'>
        <div className='navbar-spacer'></div>
        <div className='navbar-logo mobile'>
          <img src={logo} className='logo mobile' alt='logo' />
        </div>
        <div className='navbar-mobile_menu' onClick={toggleMenu}>
          <MenuButton isOpen={isMenuOpen} />
        </div>
      </div>
      <ul className={`navbar-mobile ${isMenuOpen ? 'active' : 'not-active'}`}>
        {' '}
        <li className='nav-item mobile top'>
          <NavLink
            to='/'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
          >
            {hover ? (
              <div className='hover_item'>
                Home
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                  // style={{
                  //   visibility: ({ isActive }) =>
                  //     isActive ? 'visible' : 'hidden',
                  // }}
                />
              </div>
            ) : (
              <>Home</>
            )}
            {/* Home
            <img
              src={navActive}
              className='navActive'
              alt='navActive' */}
            {/* // style={{ */}
            {/* //   visibility: ({ isActive }) => (isActive ? 'visible' : 'hidden'),
              // }}
            // />
            // <span
            //   className={`menu ${isMenuOpen ? 'active' : 'not-active'}`}
            // ></span> */}
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to='/'
            className='nav-links'
            activeClassName='active'
            onClick={toggleMenu}
          >
            Home
            <img
              src={navActive}
              className='navActive'
              alt='navActive'
              // style={{
              //   visibility: ({ isActive }) => (isActive ? 'visible' : 'hidden'),
              // }}
            />
            <span
              className={`menu ${isMenuOpen ? 'active' : 'not-active'}`}
            ></span>
          </NavLink>
        </li>
        <li className='nav-item mobile'>
          <NavLink to='/ux_ui' className='nav-links' activeClassName='active'>
            ux/ui
            <img
              src={navActive}
              className='navActive'
              alt='navActive'
              style={{
                visibility: ({ isActive }) => (isActive ? 'visible' : 'hidden'),
              }}
            />
          </NavLink>
        </li>
        <li className='nav-item mobile'>
          <NavLink to='/design' className='nav-links' activeClassName='active'>
            design
            <img
              src={navActive}
              className='navActive'
              alt='navActive'
              style={{
                visibility: ({ isActive }) => (isActive ? 'visible' : 'hidden'),
              }}
            />
          </NavLink>
        </li>
        <li className='nav-item mobile'>
          <NavLink
            to='/development'
            className='nav-links'
            activeClassName='active'
          >
            development
            <img
              src={navActive}
              className='navActive'
              alt='navActive'
              style={{
                visibility: ({ isActive }) => (isActive ? 'visible' : 'hidden'),
              }}
            />
          </NavLink>
        </li>
        <li className='nav-item mobile'>
          <NavLink to='/about' className='nav-links' activeClassName='active'>
            about
            <img
              src={navActive}
              className='navActive'
              alt='navActive'
              style={{
                visibility: ({ isActive }) => (isActive ? 'visible' : 'hidden'),
              }}
            />
          </NavLink>
        </li>
        <li className='nav-item mobile'>
          <NavLink to='/contact' className='nav-links' activeClassName='active'>
            contact
            <img
              src={navActive}
              className='navActive'
              alt='navActive'
              style={{
                visibility: ({ isActive }) => (isActive ? 'visible' : 'hidden'),
              }}
            />
          </NavLink>
        // </li> */}
      </ul>
    </nav>
  )
}
