import '../ReusableComponents.css'
import '../ReusableIdeate.css'
import style_tile from '../../assets/fh/feline_user_flow.png'
import lo_fi from '../../assets/fh/fh_desktop1.png'
import lo_fi_1 from '../../assets/fh/fh_mobile1.png'
// import lo_fi_2 from '../../assets/fh/fh_lofi_split_3.png'

export const IdeateFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Ideate</h2>
      </div>
      <section className='IdeateContainer'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            The flow begins on the homepage, where users can choose how to book:
            by email, phone, or through an online calendar. In the improved
            experience, the calendar leads them step by step—selecting a date,
            choosing a time slot, and confirming the visit. Each step highlights
            the most important details and allows users to review or go back
            before finalizing. The goal was to make scheduling feel simple,
            reliable, and as straightforward as talking to the clinic
            directly—without the delays or errors.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge fh'>user flow</div>
            <img
              className='competitive style'
              src={style_tile}
              alt={style_tile}
            />
          </div>
          <div className='ButtonContainer lo_fi'>
            <h5 className='h5 marginTop'>
              <span className='leadin'> I tested low fidelity </span> with
              wireframes with five participants to validate the appointment
              booking flow — selecting a date, choosing a time, and confirming
              the visit. 100% of users completed the tasks successfully and
              rated the process easy to follow. Overall satisfaction was 84%,
              slightly lowered by feedback that contact details weren&apos;t
              visible when users wanted to double-check information.
            </h5>
            <div className='Button enlarge ideate nyt '>
              low fidelity desktop
            </div>
            <img className='competitive' src={lo_fi} alt={lo_fi} />
            <div className='Button enlarge ideate nyt '>
              low fidelity mobile
            </div>
            <img className='competitive fh' src={lo_fi_1} alt={lo_fi_1} />
          </div>
        </div>
      </section>
    </>
  )
}
