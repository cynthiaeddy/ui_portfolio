import { Link } from 'react-router-dom'
import desktop from '../../assets/fh/feline_desktop.png'
// eslint-disable-next-line no-unused-vars
import mobile from '../../assets/fh/mobile_home.png'

import './CardButtons.css'
export const FhCardMobile = () => {
  return (
    <Link to='/ux_ui/fh_case_study' className='CardContainer mobile'>
      <section className='Card'>
        <div className='CardText mobile'>
          <div className='CardOpener'>
            Feline Health Veterinary needed a redesigned, responsive website
            that reflected its vibrant, cat-centric atmosphere to provide a
            seamless experience for its clients.
          </div>
          <h6>case study</h6>
          <p className='CardDescription nyt'>
            In this case study, I&apos;ll show how I redesigned and made the
            site responsive, turning it into an engaging digital experience that
            reflects the clinic&apos;s personality and serves its clients.
          </p>
        </div>
        <div className='CardImage mobile'>
          <img className='IndiCard' src={mobile} alt={mobile} />
          <button className='Button_website'>view project</button>
          <img className='IndiCard desktop' src={desktop} alt={desktop} />
        </div>
      </section>
      <div className='footer nyt'>redesign and responsive website</div>
    </Link>
  )
}
