import { NavLink } from 'react-router'
import '../Home/Home.css'
import '../Print/Print.css'
import './Development.css'
import { DevImages } from '../../components/DevImages/DevImages.js'
export const Development = () => {
  // eslint-disable-next-line prettier/prettier
  return (
    <>
      <section className='TopContainer'>
        <div className='main_type'>i am</div>
        <div className='HomeButtonContainer'>
          <NavLink to='/ux_ui' className='HomeButton ux default'>
            a ux<span className='smallSlash'>/</span>ui designer{' '}
          </NavLink>
          <NavLink to='/design' className='HomeButton'>
            print & digital designer
          </NavLink>
          <div className='HomeButton print'>software developer</div>
        </div>
      </section>
      <div className='BottomContainer dev'>
        {<DevImages />}
        <div className='Footer'>
          <a
            href='https://www.cynthiaeddy.com'
            target='_blank'
            rel='noopener noreferrer'
            className='Footer_text'
          >
            <button className='Button_website'>
              click to view developer website
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
