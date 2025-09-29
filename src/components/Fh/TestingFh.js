import '../ReusableComponents.css'
import '../ReusableTesting.css'
import desktop_home from '../../assets/fh/fh_desktop_home.png'
import desktop_home1 from '../../assets/fh/fh_home_desktop2.png'
import desktop_appt from '../../assets/fh/fh_appt_desktop1.png'
import desktop_home2 from '../../assets/fh/fh_home1.png'
import desktop_home3 from '../../assets/fh/fh_home2.png'
import desktop_home4 from '../../assets/fh/fh_home4.png'
import desktop_home5 from '../../assets/fh/fh_home5.png'
import desktop_appt1 from '../../assets/fh/fh_appt.png'
import mobile_home from '../../assets/fh/fh_home_mobile5.png'
import mobile_home2 from '../../assets/fh/fh_mobile_home2.png'
import mobile_home1 from '../../assets/fh/fh_mobile_home1.png'
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
            <div className='Button enlarge'>iterations desktop</div>
          </div>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_home2} />
            <source media='(min-width: 480px)' srcSet={desktop_home} />
            <img
              className='competitive  '
              src={desktop_home}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_home4} />
            <source media='(min-width: 480px)' srcSet={desktop_home} />
            <img
              className='competitive  '
              src={desktop_home5}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <img
            className='competitive fh_iteraction'
            src={desktop_home}
            alt={desktop_home}
          />
          <picture>
            <source media='(max-width: 769px)' srcSet={desktop_home3} />
            <source media='(min-width: 768px)' srcSet={desktop_home1} />
            <img
              className='competitive  '
              src={desktop_home1}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <img
            className='competitive fh_iteraction'
            src={desktop_home1}
            alt={desktop_home1}
          />
          <picture>
            <source media='(max-width: 479px)' srcSet={desktop_appt1} />
            <source media='(min-width: 480px)' srcSet={desktop_appt} />
            <img
              className='competitive  '
              src={desktop_appt}
              alt='Affinity map'
              loading='lazy'
            />
          </picture>
          <img
            className='competitive fh_iteraction'
            src={desktop_appt}
            alt={desktop_appt}
          />
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
