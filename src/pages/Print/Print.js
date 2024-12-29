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
      <section className='Container'>
        <div className='main_type'>i am</div>
        <div className='HomeButtonContainer'>
          <NavLink to='/ux_ui' className='HomeButton ux default'>
            a ux<span className='smallSlash'>/</span>ui designer{' '}
          </NavLink>
          <div className='HomeButton print'>print & digital designer</div>
          <NavLink to='/development' className='HomeButton'>
            software developer
          </NavLink>
        </div>
      </section>
    <div className='PrintContainer'>
        <div className='InnerContainer'>
          {<PrintImages/>}</div>
    </div>
    </>
  )
}
