import '../ReusableComponents.css'
import '../ReusableTesting.css'

import desktop_homes from '../../assets/fh/new_iterations/fh_desktophome_small.png'
import desktop_homesmall from '../../assets/fh/new_iterations/fh_desktophome.png'
import desktop_homesmallest from '../../assets/fh/new_iterations/fh_desktophome_smallest.png'
import desktop_hours from '../../assets/fh/new_iterations/fh_desktophours_small.png'
import desktop_hourssmall from '../../assets/fh/new_iterations/fh_desktophours.png'
import desktop_hourssmallest from '../../assets/fh/new_iterations/fh_desktophours_smallest.png'
import desktop_appt from '../../assets/fh/new_iterations/fh_desktopappt_small.png'
import desktop_apptsmall from '../../assets/fh/new_iterations/fh_desktopappt.png'
import desktop_apptsmallest from '../../assets/fh/new_iterations/fh_desktopappt_smallest.png'

import mobile_appt from '../../assets/fh/new_iterations/fh_mobile_appt.png'
import mobile_home from '../../assets/fh/new_iterations/fh_mobile_home.png'
import mobile_buttons from '../../assets/fh/new_iterations/fh_mobile_homebuttons.png'
import mobile_hours from '../../assets/fh/new_iterations/fh_mobile_homehours.png'
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
          <div className='desktop_iter_container'>
            <div className='iteration_container'>
              <picture>
                <source
                  media='(max-width: 479px)'
                  srcSet={desktop_homesmallest}
                />
                <source media='(max-width: 768px)' srcSet={desktop_homesmall} />
                <source media='(min-width: 769px)' srcSet={desktop_homes} />
                <img
                  className='competitive fh_desktop'
                  src={desktop_homes}
                  alt='Affinity map'
                  loading='lazy'
                />
              </picture>
              <h5 className='testingFh_h5'>
                <span className='letter_bullets'>A</span>) Changed book
                appointment link to pink <br />
                <span className='letter_bullets'>B</span>) Added prompt to show
                calendar icon &quot;Click to Book Appointment&quot; on hover
              </h5>
            </div>
            <div className='iteration_container'>
              <picture>
                <source
                  media='(max-width: 479px)'
                  srcSet={desktop_hourssmallest}
                />
                <source
                  media='(max-width: 768px)'
                  srcSet={desktop_hourssmall}
                />
                <source media='(min-width: 769px)' srcSet={desktop_hours} />
                <img
                  className='competitive fh_desktop'
                  src={desktop_hours}
                  alt='Affinity map'
                  loading='lazy'
                />
              </picture>
              <h5>
                Changed After Hours Emergency information to a 24/7 emergency
                vet clinic
              </h5>
            </div>
            <div className='iteration_container last'>
              <picture>
                <source
                  media='(max-width: 479px)'
                  srcSet={desktop_apptsmallest}
                />
                <source media='(max-width: 768px)' srcSet={desktop_apptsmall} />
                <source media='(min-width: 769px)' srcSet={desktop_appt} />
                <img
                  className='competitive fh_desktop'
                  src={desktop_appt}
                  alt='Affinity map'
                  loading='lazy'
                />
              </picture>
              <h5>Changed user options to only show available time slots</h5>
            </div>
          </div>
          <div className='ButtonContainer'>
            <div className='Button enlarge fh_iter '>iterations mobile</div>
          </div>
          <div className='mobile_iter_container'>
            <div className='fh_mobile'>
              <img className='fh_testing' src={mobile_home} alt={mobile_home} />
              <h5>
                Added prompt to show calendar icon &quot;Click to Book
                Appointment&quot; on hover
              </h5>
            </div>
            <div className='fh_mobile'>
              <img
                className='fh_testing'
                src={mobile_buttons}
                alt={mobile_buttons}
              />
              <h5>Changed all button heights to 40px for ease of use</h5>
            </div>
            <div className='fh_mobile'>
              <img
                className='fh_testing'
                src={mobile_hours}
                alt={mobile_hours}
              />
              <h5>
                Changed After Hours Emergency information to a 24/7 emergency
                vet clinic and added Scroll to Top button
              </h5>
            </div>
            <div className='fh_mobile'>
              <img className='fh_testing' src={mobile_appt} alt={mobile_appt} />
              <h5>Changed user options to only show available time slots</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
