import { NavLink } from 'react-router'
import '../Home/Home.css'
import './Print.css'
import '../Ux/Ux.css'
import { PrintImages } from '../../components/PrintImages/PrintImages.js'
export const Print = () => {
  return (
    <>
      <section className='TopContainer'>
        <div className='main_type'>i am</div>
        <div className='HomeButtonContainer'>
          <NavLink to='/ui_ux' className='HomeButton ux default'>
            a ui<span className='smallSlash'>/</span>ux designer{' '}
          </NavLink>
          <div className='HomeButton print'>print & digital designer</div>
          <NavLink to='/development' className='HomeButton'>
            software developer
          </NavLink>
        </div>
      </section>
      <div className='BottomContainer print'>
        {<PrintImages />}
        <div className='Footer editorial'>
          <a
            href='https://www.cynthiaeddy.me'
            target='_blank'
            rel='noopener noreferrer'
            className='Footer_text'
          >
            <button className='Button_website'>
              click to view print & digital website
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
