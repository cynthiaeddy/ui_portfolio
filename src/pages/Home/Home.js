import { NavLink } from 'react-router'
import './Home.css'

export const Home = () => {
  return (
    <section className='TopContainer'>
      <div className='main_type'>i am</div>
      <div className='HomeButtonContainer'>
        <NavLink to='ux_ui' className='HomeButton ux'>
          a ux<span className='smallSlash'>/</span>ui designer{' '}
          <hr className='under'></hr>
        </NavLink>
        <NavLink to='design' className='HomeButton'>
          print & digital designer
        </NavLink>
        <NavLink to='development' className='HomeButton'>
          software developer
        </NavLink>
      </div>
    </section>
  )
}
