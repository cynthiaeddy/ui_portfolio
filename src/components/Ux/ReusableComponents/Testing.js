/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import './ReusableComponents.css'
import { Carousel } from './Carousel/Carousel.js'


// import mag_wh from '../../../assets/ssc/mag_white.png'
import mag_blk from '../../../assets/ssc/mag_blk.png'
import ive_mood_resize from '../../../assets/ssc/ive_mood.png'
import ive_style from '../../../assets/ssc/ive_style_resize.png'

export const Testing = () => {

  return (
    <>
      <div className='BlackHeds'>
        <h2>Testing</h2>
      </div>
      <section className='WideContainer ideate'>
        <div className='InnerContainer'>
        <h5 className='h5 dropCap'>
        The moderated testing of the high-fidelity wireframes involved five participants who evaluated the site&apos;s usability and design enhancements. All participants rated the site a perfect 5 out of 5 for ease of use, finding the purchasing process intuitive and the navigation straightforward. However, some users noted  that the sustainability information felt vague and suggested adding a dedicated page to clarify the companyaposs practices. Overall, the site scored 98% for ease of use and 100% for checkout flow. <br /><br />
        <span className='leadin'>Moving forward, I implemented several iterations,</span> including adding dropdown menus, enhancing the sustainability section, and making icons more interactive to improve the user experience and strengthen the brand message.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iterations carousel</div>
          </div>
          <Carousel />
        </div>
      </section>
    </>
  )
}