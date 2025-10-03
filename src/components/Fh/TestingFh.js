import '../ReusableComponents.css'
import '../ReusableTesting.css'
// import desktop_homesm from '../../assets/fh/iterations/fh_desktophome_small.png'
import desktop_homes_big1 from '../../assets/fh/iterations/fh_desktophome_small1.png'
import desktop_homebig from '../../assets/fh/iterations/fh_home_big.png'
import desktop_home from '../../assets/fh/iterations/fh_home5.png'

import desktop_hours from '../../assets/fh/iterations/fh_homehours_mid.png'
import desktop_hours_big from '../../assets/fh/iterations/fh_homehours_big.png'
import desktop_hourssm from '../../assets/fh/iterations/fh_desktophours_small.png'
import desktop_hours_big1 from '../../assets/fh/iterations/fh_desktophours_small1.png'
// import desktop_hoursbig from '../../assets/fh/iterations/fh_desktophours_small1.png'
import desktop_apptsm from '../../assets/fh/iterations/fh_desktopappt_small1.png'
import desktop_appt from '../../assets/fh/iterations/fh_desktopappt_small1.png'
import desktop_appt1 from '../../assets/fh/iterations/fh_desktopappt_small1.png'
// import desktop_apptbigger from '../../assets/fh/iterations/fh_desktopappt_small1.png'
// import desktop_appt_big from '../../assets/fh/iterations/fh_desktopappt_small1.png'
import mobile_appt from '../../assets/fh/iterations/fh_appt_mobile.png'
import mobile_home from '../../assets/fh/iterations/fh_home_mobile5.png'
import mobile_home2 from '../../assets/fh/iterations/fh_mobile_home2.png'
import mobile_home1 from '../../assets/fh/iterations/fh_mobile_home1.png'

export const TestingFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer fh'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            I conducted usability testing with five participants to evaluate the
            redesigned booking flow. All participants completed the process
            without errors, and satisfaction rose to 92% after improvements to
            navigation and mobile usability. Participants found clinic details
            easier to access and the appointment button clearer on mobile.
            Feedback also pointed to the need for an emergency number in the
            footer, which guided the final refinements to improve access to
            critical information.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge fh_iter'>iterations desktop</div>
          </div>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_homebig} />
            <source media='(max-width: 768px)' srcSet={desktop_home} />
            {/* <source media='(min-width: 480px)' srcSet={desktop_homesm} /> */}
            <source media='(min-width: 1031p)' srcSet={desktop_homes_big1} />

            <img
              className='competitive fh_desktop'
              src={desktop_homes_big1}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_hours_big} />
            <source media='(max-width: 768px)' srcSet={desktop_hours} />
            <source media='(max-width: 1030px)' srcSet={desktop_hourssm} />
            <source media='(min-width: 1031px)' srcSet={desktop_hours_big1} />
            <img
              className='competitive fh_desktop'
              src={desktop_hours_big1}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_appt} />
            <source media='(max-width: 768px)' srcSet={desktop_appt1} />
            <source media='(min-width: 480px)' srcSet={desktop_apptsm} />
            <source media='(min-width: 1031px)' srcSet={desktop_hours_big1} />

            <img
              className='competitive fh_desktop appt'
              src={desktop_hours_big1}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iterations mobile</div>
          </div>
          <div className='fh_mobile'>
            <img className='fh_testing' src={mobile_home} alt={mobile_home} />
            <img className='fh_testing' src={mobile_home2} alt={mobile_home2} />
          </div>
          <div className='fh_mobile'>
            <img
              className='fh_testing home3'
              src={mobile_home1}
              alt={mobile_home1}
            />
            <img className='fh_testing' src={mobile_appt} alt={mobile_appt} />
          </div>
        </div>
      </section>
    </>
  )
}
