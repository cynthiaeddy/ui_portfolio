import { NavLink } from 'react-router'
import './Ux.css'
import { SscCard } from '../../components/Ux/CardButtons/SscCard'
export const Ux = () => {
  return (
    <>
      <section className='Container'>
        <div className='main_type'>i am</div>
        <div className='HomeButtonContainer'>
          <div className='UxButton '>
            a ux<span className='smallSlash default'>/</span>ui designer{' '}
          </div>
          <NavLink to='design' className='HomeButton'>
            print & digital designer
          </NavLink>
          <NavLink to='development' className='HomeButton'>
            software developer
          </NavLink>
        </div>
      </section>
      <div className='UxContainer'>
        <div className='UxTopContainer'>
          <SscCard />
          <SscCard />
        </div>
      </div>
    </>
  )
}
// export default UX
