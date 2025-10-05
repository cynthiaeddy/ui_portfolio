import '../ReusableComponents.css'
import '../ReusableTesting.css'

import desktop_homes from '../../assets/fh/new_iterations/fh_desktophome_small.png'
import desktop_hours from '../../assets/fh/new_iterations/fh_desktophours_small.png'
import desktop_appt from '../../assets/fh/new_iterations/fh_desktopappt_small.png'

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
          <div className='iteration_container'>
            <img
              className='competitive fh_desktop'
              src={desktop_homes}
              alt={desktop_homes}
              loading='lazy'
            />
            <h5>
              A) Changed book appointment link to pink <br />
              B) Added prompt to show calendar icon &quot;Click to Book
              Appointment&quot; on hover
            </h5>
          </div>
          <div className='iteration_container'>
            <img
              className='competitive fh_desktop'
              src={desktop_hours}
              alt={desktop_hours}
              loading='lazy'
            />
            <h5>
              Changed After Hours Emergency information to a 24/7 emergency vet
              clinic
            </h5>
          </div>
          <div className='iteration_container'>
            <img
              className='competitive fh_desktop appt'
              src={desktop_appt}
              alt={desktop_appt}
              loading='lazy'
            />
            <h5>Changed user option to only show available time slots</h5>
          </div>
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
