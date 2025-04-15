import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/swirl_sm.jpg'
import navActive from '../../assets/bug.svg'

export const NavbarNew = () => {
  return (
    <nav id='NavbarContainer'>
      <div className='NavbarSection'>
        <ul className='Navbar-items'>
          <li className='nav-item work-link'>
            <NavLink
              to={{
                pathname: '/',
                state: { fromHome: true },
              }}
              className='nav-links'
              activeClassName='active'
            >
              home
              <img src={navActive} className='navActive' alt='navActive' />
            </NavLink>
          </li>
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
          <img src={logo} className='logo' alt='logo' />
        </div>
      </div>
    </nav>
  )
}
