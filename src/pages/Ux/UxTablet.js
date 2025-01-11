import { NavLink } from 'react-router'
import './Ux.css'
import { SscCard } from '../../components/CardButtons/SscCard'
import { NytCard } from '../../components/CardButtons/NytCard'
import { FhCard } from '../../components/CardButtons/FhCard'
export const UxTablet = () => {
  return (
    <>
      <section className='TopContainer'>
        <div className='main_type'>i am</div>
        <div className='HomeButtonContainer'>
          <div className='UxButton '>
            a ux<span className='smallSlash default'>/</span>ui designer{' '}
          </div>
          <NavLink to='/design' className='HomeButton'>
            print & digital designer
          </NavLink>
          <NavLink to='/development' className='HomeButton'>
            software developer
          </NavLink>
        </div>
      </section>
      you are in tablet
      <div className='BottomContainer'>
        <div className='UxTopContainer'>
          <SscCard />
          <NytCard />
        </div>
        <div className='UxBottomContainer'>
          <FhCard />
        </div>
      </div>
    </>
  )
}
// export default Ux
