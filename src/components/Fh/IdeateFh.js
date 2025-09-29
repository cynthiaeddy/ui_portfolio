import '../ReusableComponents.css'
import '../ReusableIdeate.css'
import style_tile from '../../assets/fh/feline_user_flow.png'
// import lo_fi from '../../assets/fh/fh_mobile_lofi.png'
// import lo_fi_1 from '../../assets/fh/fh_mobile1.png'
import fh_lo_desktop from '../../assets/fh/fh_lofi_desktop1.png'
import fh_lo_desktopadd from '../../assets/fh/fh_lofi_desktopadd.png'
import fh_lo_mobile from '../../assets/fh/fh_lofi_mobile1.png'
// import style_tile from '../../assets/fh/nyt_user_flow_VERT1.png'

export const IdeateFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Ideate</h2>
      </div>
      <section className='IdeateContainer fh'>
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
            <img className='competitive fh' src={style_tile} alt={style_tile} />
          </div>
          <div className='ButtonContainer lo_fi'>
            <h5 className='h5 marginTop'>
              <span className='leadin'> I tested low fidelity </span> with
              wireframes with five participants to validate the appointment
              booking flow — selecting a date, choosing a time, and confirming
              the visit. 100% of users completed the tasks successfully and
              rated the process easy to follow. Overall satisfaction was 84%,
              lowered by feedback that contact details weren&apos;t always
              visible when participants wanted to review information during the
              flow.
            </h5>
          </div>
          <div className='WireframesContainer'>
            <div className='ButtonContainer design_fh'>
              <div className='Button enlarge ideate fh'>
                low fidelity desktop
              </div>
              <picture>
                <source media='(max-width: 479px)' srcSet={fh_lo_desktopadd} />
                <source media='(min-width: 480px)' srcSet={fh_lo_desktop} />
                <img
                  className='competitive flow fh'
                  src={fh_lo_desktop}
                  alt='Affinity map'
                  loading='lazy'
                />
              </picture>
            </div>
            <div className='ButtonContainer design_fh first'>
              <div className='Button enlarge ideate fh'>
                low fidelity mobile
              </div>
              <img
                className='competitive mid_fi mobile'
                src={fh_lo_mobile}
                alt={fh_lo_mobile}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
