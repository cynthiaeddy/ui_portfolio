import { NavLink } from 'react-router'
import '../Home/Home.css'
import '../Print/Print.css'
import './Development.css'
import { DevImages } from '../../components/DevImages/DevImages.js'
export const Development = () => {
  return (
    <>
      <section className='TopContainer'>
        <div className='main_type'>i am</div>
        <div className='HomeButtonContainer'>
          <NavLink to='/ui_ux' className='HomeButton ux default'>
            a ui<span className='smallSlash'>/</span>ux designer{' '}
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
            href='https://cynthiaeddy.dev'
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
