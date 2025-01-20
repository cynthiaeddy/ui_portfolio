import '../ReusableComponents.css'
import '../ReusableDefine.css'

export const DefineFh = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Define</h2>
      </div>
      <section className='DefineContainer'>
        <h5 className='h5 black center'>
          <span className='leadin black'>From my research, </span> I identified
          several areas for improvement that needed to be addressed:
        </h5>
        <section>
          <div className='dropCap hang one'>1</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Logo Redesign</h6>
            <h5 className='h5 small'>
              Aligning the clinic&apos;s logo with the refreshed branding to
              create a cohesive visual identity and strengthen brand
              consistency.
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>2</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Enhancing Transparency</h6>
            <h5 className='h5 small'>
              {' '}
              Improving navigation to make important information easy to find,
              enhancing user experience across all pages.
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>3</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Integration of Office Design</h6>
            <h5 className='h5 small'>
              Translating the vibrant, updated physical space into the
              website&apos;s visual design, ensuring a seamless reflection of
              the clinic&apos;s environment online.
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>4</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Optimizing User Experience</h6>
            <h5 className='h5 small'>
              Enhancing both desktop and mobile interfaces to ensure a modern,
              responsive design with intuitive navigation and seamless usability
              for all users.
            </h5>
          </div>
        </section>
      </section>
    </>
  )
}
