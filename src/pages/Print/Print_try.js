/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router'
// import fit from '../../assets/print/print_fit.png'
import '../Home/Home.css'
import './Print.css'
import { PrintImages } from '../../components/PrintImages/PrintImages.js'
export const Print = () => {
  // eslint-disable-next-line prettier/prettier
  return (
    <>
      <section className='TopContainer'>
        <div className='main_type co'>i am</div>
        <div className='HomeButtonContainer'>
          <NavLink to='/ux_ui' className='print_text '>
            a ux<span className='smallSlash'>/</span>ui designer{' '}
          </NavLink>
          <div className='print_text '>print & digital designer</div>
          <NavLink to='/development' className='print_text '>
            software developer
          </NavLink>
        </div>
      </section>
    <div className='PrintContainer'>
        <div className='InnerContainer'>
          {<PrintImages />}</div>
          <div>
      <a
                href='https://www.cynthiaeddy.me'
                target='_blank'
                rel='noopener noreferrer'
                className='Footer_text'
              >
      <button className='Button_website'>click to view print & digital website</button>
              </a>
      </div>
    </div>
    </>
  )
}
