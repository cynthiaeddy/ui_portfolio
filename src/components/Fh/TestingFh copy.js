import '../ReusableComponents.css'
import '../ReusableTesting.css'
// import desktop_homesm from '../../assets/fh/iterations/fh_desktophome_small.png'
import desktop_homes_1031 from '../../assets/fh/iterations/fh_desktophome_small1.png'
import desktop_homebig from '../../assets/fh/iterations/fh_home_big.png'
import desktop_home from '../../assets/fh/iterations/fh_home5.png'

import desktop_hours from '../../assets/fh/iterations/fh_homehours_mid.png'
import desktop_hours_big from '../../assets/fh/iterations/fh_homehours_big.png'
// import desktop_hourssm from '../../assets/fh/iterations/fh_desktophours_small.png'
import desktop_hours_1031 from '../../assets/fh/iterations/fh_desktophours_small1.png'
// import desktop_hoursbig from '../../assets/fh/iterations/fh_desktophours_small1.png'
// import desktop_apptsm from '../../assets/fh/iterations/fh_desktopappt_small1.png'
// import desktop_appt from '../../assets/fh/iterations/fh_desktopappt_small1.png'
import desktop_appt1 from '../../assets/fh/iterations/fh_desktopappt_small1.png'
import desktop_appt736 from '../../assets/fh/iterations/fh_desktopappt_736.png'
// import desktop_apptbigger from '../../assets/fh/iterations/fh_desktopappt_small1.png'
// import desktop_appt_big from '../../assets/fh/iterations/fh_desktopappt_small1.png'
// import mobile_appt from '../../assets/fh/iterations/fh_appt_mobile.png'
// import mobile_home from '../../assets/fh/iterations/fh_home_mobile5.png'
// import mobile_home2 from '../../assets/fh/iterations/fh_mobile_home2.png'
// import mobile_home1 from '../../assets/fh/iterations/fh_mobile_home1.png'

// import mobile_apptnew from '../../assets/fh/iterations/fh_mobile_apptnew.png'
// import mobile_homenew from '../../assets/fh/iterations/fh_mobile_homenew.png'
// import mobile_home2new from '../../assets/fh/iterations/fh_mobile_home2new.png'
// import mobile_home1new from '../../assets/fh/iterations/fh_mobile_home3new.png'

import mobile_appt from '../../assets/fh/iterations/fh_mobile_apptstationary.png'
import mobile_homenew from '../../assets/fh/iterations/fh_mobile_homestationary.png'
import mobile_home2new from '../../assets/fh/iterations/fh_mobile_homestationary1.png'
import mobile_home1new from '../../assets/fh/iterations/fh_mobile_homestationary2.png'
export const TestingFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer fh'>
        <div className='InnerContainer'>
          <h4 className='h4 dropCap'>
            I conducted usability testing with five participants to evaluate the
            redesigned booking flow. All participants completed the process
            without errors, and satisfaction rose to 92% after improvements to
            navigation and mobile usability. Participants found clinic details
            easier to access and the appointment button clearer on mobile.
            Feedback also pointed to the need for an emergency number in the
            footer, which guided the final refinements to improve access to
            critical information.
          </h4>
          <div className='ButtonContainer'>
            <div className='Button enlarge fh_iter'>iterations desktop</div>
          </div>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_homebig} />
            <source media='(max-width: 768px)' srcSet={desktop_home} />
            {/* <source media='(min-width: 480px)' srcSet={desktop_homesm} /> */}
            <source media='(min-width: 1031p)' srcSet={desktop_homes_1031} />

            <img
              className='competitive fh_desktop'
              src={desktop_homes_1031}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_hours_big} />
            <source media='(max-width: 768px)' srcSet={desktop_hours} />
            <source media='(max-width: 1030px)' srcSet={desktop_hours_1031} />
            <source media='(min-width: 1031px)' srcSet={desktop_hours_1031} />
            <img
              className='competitive fh_desktop'
              src={desktop_hours_1031}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_appt736} />
            <source media='(max-width: 1030px)' srcSet={desktop_appt736} />
            {/* <source media='(min-width: 480px)' srcSet={desktop_appt1} /> */}
            <source media='(min-width: 1031px)' srcSet={desktop_appt1} />

            <img
              className='competitive fh_desktop appt'
              src={desktop_hours_1031}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iterations mobile</div>
          </div>
          <div className='mobile_iter_container'>
            <div className='fh_mobile'>
              <img
                className='fh_testing'
                src={mobile_homenew}
                alt={mobile_homenew}
              />
              <img
                className='fh_testing'
                src={mobile_home1new}
                alt={mobile_home1new}
              />
            </div>
            <div className='fh_mobile'>
              <img
                className='fh_testing home3'
                src={mobile_home2new}
                alt={mobile_home2new}
              />
              <img className='fh_testing' src={mobile_appt} alt={mobile_appt} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
