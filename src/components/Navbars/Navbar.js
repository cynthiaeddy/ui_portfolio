import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/swirl_sm.jpg'
import navActive from '../../assets/bug.svg'

export const Navbar = () => {
  return (
    <nav id='NavbarContainer'>
      {/* <div className='Navbar-items'> */}

      <div className='NavbarSection'>
        <ul className='Navbar-items'>
          <li className='nav-item'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'nav-links nav-link-active' : 'nav-links inactive'
              }
            >
              Home
            </NavLink>
            <img src={navActive} className='navActive' alt='navActive' />
          </li>
          <li className='nav-item'>
            <NavLink to='/ux_ui' className='nav-links'>
              ux/ui
            </NavLink>
            <img src={navActive} className='navActive' alt='navActive' />
          </li>
          <li className='nav-item'>
            <NavLink to='/design' className='nav-links'>
              editorial design
            </NavLink>
            <img src={navActive} className='navActive' alt='navActive' />
          </li>
          <li className='nav-item'>
            <NavLink to='/development' className='nav-links'>
              web development
            </NavLink>
            <img src={navActive} className='navActive' alt='navActive' />
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-links'>
              about
            </NavLink>
            <img src={navActive} className='navActive' alt='navActive' />
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' className='nav-links'>
              contact
            </NavLink>
            <img src={navActive} className='navActive' alt='navActive' />
          </li>
        </ul>
        <div className='Navbar-logo'>
          <img src={logo} className='logo' alt='logo' />
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
