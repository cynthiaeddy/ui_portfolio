import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarMobile.css'
import logo from '../../assets/swirl_sm.jpg'
import MenuButton from './MenuButton'
import navActive from '../../assets/bug.svg'
// import { Style } from '@material-ui/icons'
// import { MenuOpen } from '@material-ui/icons'

export const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoverHome, setHoverHome] = useState(false)
  const [hoverUx, setHoverUx] = useState(false)
  const [hoverDesign, setHoverDesign] = useState(false)
  const [hoverDev, setHoverDev] = useState(false)
  const [hoverAbout, setHoverAbout] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMouseInHome = () => {
    setHoverHome(true)
  }
  const handleMouseOutHome = () => {
    setHoverHome(false)
  }
  const handleMouseInUx = () => {
    setHoverUx(true)
  }
  const handleMouseOutUx = () => {
    setHoverUx(false)
  }
  const handleMouseInDesign = () => {
    setHoverDesign(true)
  }
  const handleMouseOutDesign = () => {
    setHoverDesign(false)
  }
  const handleMouseInDev = () => {
    setHoverDev(true)
  }
  const handleMouseOutDev = () => {
    setHoverDev(false)
  }
  const handleMouseInAbout = () => {
    setHoverAbout(true)
  }
  const handleMouseOutAbout = () => {
    setHoverAbout(false)
  }
  const handleMouseInContact = () => {
    setHoverContact(true)
  }
  const handleMouseOutContact = () => {
    setHoverContact(false)
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
        <li className='nav-item_mobile'>
          <NavLink
            to='/'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInHome}
            onMouseLeave={handleMouseOutHome}
          >
            {hoverHome ? (
              <div className='hover_item hover'>
                Home
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                home
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
        <li className='nav-item_mobile'>
          <NavLink
            to='/ux_ui'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInUx}
            onMouseLeave={handleMouseOutUx}
          >
            {hoverUx ? (
              <div className='hover_item hover'>
                ux/ui
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                ux/ui
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
        <li className='nav-item_mobile'>
          <NavLink
            to='/design'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInDesign}
            onMouseLeave={handleMouseOutDesign}
          >
            {hoverDesign ? (
              <div className='hover_item hover'>
                design
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                design
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
        <li className='nav-item_mobile'>
          <NavLink
            to='/development'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInDev}
            onMouseLeave={handleMouseOutDev}
          >
            {hoverDev ? (
              <div className='hover_item hover'>
                development
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                development
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
        <li className='nav-item_mobile'>
          <NavLink
            to='/about'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInAbout}
            onMouseLeave={handleMouseOutAbout}
          >
            {hoverAbout ? (
              <div className='hover_item hover'>
                about
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                about
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
        <li className='nav-item_mobile'>
          <NavLink
            to='/contact'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInContact}
            onMouseLeave={handleMouseOutContact}
          >
            {hoverContact ? (
              <div className='hover_item hover'>
                contact
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                contact
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
