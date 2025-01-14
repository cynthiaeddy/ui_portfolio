import { NavLink } from 'react-router'
import './Ux.css'
import { SscCardMobile } from '../../components/CardButtons/SscCardMobile'
import { NytCardMobile } from '../../components/CardButtons/NytCardMobile'
import { FhCardMobile } from '../../components/CardButtons/FhCardMobile'
export const UxMobile = () => {
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
      you are in mobile
      <div className='BottomContainer ux'>
        <div className='UxTopContainer'>
          <SscCardMobile />
          <NytCardMobile />
        </div>
        <div className='UxBottomContainer'>
          <FhCardMobile />
        </div>
      </div>
    </>
  )
}
