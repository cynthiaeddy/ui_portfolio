import './../ReusableComponents.css'
import style_tile from '../../../../assets/fh/feline_health_style.png'

export const IdeateFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2>Ideate</h2>
      </div>
      <section className='WideContainer ideate'>
        <div className='InnerContainer'>
          <h5 className='h5 marginTop'>
            <span className='leadin'>I then moved on to ideation, </span>{' '}
            identifying critical website features and design elements:
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>
                A responsive design to ensure accessibility on all devices, with
                a clear visual hierarchy and prominent calls-to-action (CTAs).
              </h5>
            </li>
            <li>
              <h5>
                The ability to schedule appointments directly via a calendar
                with real-time availability.
              </h5>
            </li>
            <li>
              <h5>
                Easy-to-find contact information, including hours, location,
                map, phone number, and email.
              </h5>
            </li>
            <li>
              <h5 className='leadin'>
                A logo redesign and updated branding that echoed the new clinic
                aesthetic.
              </h5>
            </li>
          </ul>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>style tile</div>
            <img
              className='competitive style'
              src={style_tile}
              alt={style_tile}
            />
          </div>
        </div>
      </section>
    </>
  )
}