import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/swirl_sm.jpg'
import navActive from '../../assets/bug.svg'

export const Navbar = () => {
  return (
    <nav id='NavbarContainer'>
      <div className='NavbarSection'>
        <ul className='Navbar-items'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' activeClassName='active'>
              Home
              <img
                src={navActive}
                className='navActive'
                alt='navActive'
                style={{
                  visibility: ({ isActive }) =>
                    isActive ? 'visible' : 'hidden',
                }}
              />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/ux_ui' className='nav-links' activeClassName='active'>
              ux/ui
              <img
                src={navActive}
                className='navActive'
                alt='navActive'
                style={{
                  visibility: ({ isActive }) =>
                    isActive ? 'visible' : 'hidden',
                }}
              />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/design'
              className='nav-links'
              activeClassName='active'
            >
              design
              <img
                src={navActive}
                className='navActive'
                alt='navActive'
                style={{
                  visibility: ({ isActive }) =>
                    isActive ? 'visible' : 'hidden',
                }}
              />
            </NavLink>
          </li>
          <li className='nav-item'>
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
                  visibility: ({ isActive }) =>
                    isActive ? 'visible' : 'hidden',
                }}
              />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-links' activeClassName='active'>
              about
              <img
                src={navActive}
                className='navActive'
                alt='navActive'
                style={{
                  visibility: ({ isActive }) =>
                    isActive ? 'visible' : 'hidden',
                }}
              />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/contact'
              className='nav-links'
              activeClassName='active'
            >
              contact
              <img
                src={navActive}
                className='navActive'
                alt='navActive'
                style={{
                  visibility: ({ isActive }) =>
                    isActive ? 'visible' : 'hidden',
                }}
              />
            </NavLink>
          </li>
        </ul>
        <div className='Navbar-logo'>
          <img src={logo} className='logo' alt='logo' />
        </div>
      </div>
    </nav>
  )
}
