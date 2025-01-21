import '../ReusableComponents.css'
import '../ReusableTesting.css'
import { Carousel_fh } from '../Carousel_fh/Carousel_fh.js'
import { Carousel_fh_mobile } from '../Carousel_fh/Carousel_fh_mobile.js'

export const TestingFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer fh'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            Testing was an essential part of refining the website. I conducted
            moderated testing with five participants, achieving a 100%
            completion rate and 0% error rate. Users found the website
            intuitive, with easy navigation and visually appealing branding. I
            made several key adjustments based on user feedback:{' '}
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>
                Added an emergency contact number in the footer for after-hours
                inquiries.
              </h5>
            </li>
            <li>
              <h5>
                Provided text information above the appointment calendar icon
                for clarity.
              </h5>
            </li>
            <li>
              <h5>
                Included a “back to top” button in mobile to improve long-scroll
                navigation .{' '}
              </h5>
            </li>
            <li>
              <h5>
                Changed Book Appointment background to pink for instant
                recognition on desktop.{' '}
              </h5>
            </li>
          </ul>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iterations carousel</div>
          </div>
          <Carousel_fh />
          <Carousel_fh_mobile />
        </div>
      </section>
    </>
  )
}
