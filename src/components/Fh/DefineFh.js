import '../ReusableComponents.css'
import '../ReusableDefine.css'

export const DefineFh = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Define</h2>
      </div>
      <section className='DefineContainer'>
        <h4 className='h4 black center'>
          <span className='leadin black'>From my research, </span> I identified
          several areas for improvement that needed to be addressed:
        </h4>
        <section>
          <div className='dropCap hang one'>1</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Stronger Branding</h6>
            <h4 className='h4 small'>
              Refresh the logo and overall visual identity so the site feels
              cohesive and immediately recognizable, while reflecting the
              playful, welcoming personality of Feline Health.
            </h4>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>2</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Clear, Simple Navigation</h6>
            <h4 className='h4 small'>
              Make key details like hours, location, and contact information
              easy to find at a glance, creating a smoother experience for cat
              owners seeking quick answers.
            </h4>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>3</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Bring the Space Online</h6>
            <h4 className='h4 small'>
              Translate the one-doctor practice&apos;s warmth and the lively
              interiors—neon signs, cat wallpaper, and a sense of community—into
              the website, so visiting online feels like walking through the
              clinic&apos;s doors.
            </h4>
          </div>
        </section>
      </section>
    </>
  )
}
