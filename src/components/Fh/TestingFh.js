import '../ReusableComponents.css'
import '../ReusableTesting.css'
import desktop_home from '../../assets/fh/fh_home_desktop.png'
import desktop_home1 from '../../assets/fh/fh_home_desktop1.png'
import desktop_appt from '../../assets/fh/fh_appt_desktop.png'
import mobile_home from '../../assets/fh/fh_home_mobile.png'
import mobile_appt from '../../assets/fh/fh_appt_mobile.png'

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
            <div className='Button enlarge'>iterations desktop</div>
          </div>
          <img
            className='competitive nyt_iteraction'
            src={desktop_home}
            alt={desktop_home}
          />
          <img
            className='competitive nyt_iteraction'
            src={desktop_home1}
            alt={desktop_home1}
          />
          <img
            className='competitive nyt_iteraction'
            src={desktop_appt}
            alt={desktop_appt}
          />
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iterations mobile</div>
          </div>
          <div className='ssc_testing_new fh'>
            <img className='ssc ' src={mobile_home} alt={mobile_home} />
            <img className='ssc ' src={mobile_appt} alt={mobile_appt} />
          </div>
        </div>
      </section>
    </>
  )
}
