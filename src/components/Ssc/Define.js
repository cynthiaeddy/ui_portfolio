import '../ReusableComponents.css'
import '../ReusableDefine.css'

export const Define = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Define</h2>
      </div>
      <section className='DefineContainer ssc'>
        <h4 className='h4 black '>
          <span className='leadin black'>
            After identifying users&apos; core needs,{' '}
          </span>{' '}
          I distilled insights into three priorities:
        </h4>
        <section>
          <div className='dropCap hang one'>1</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Trust in Sustainability</h6>
            <h4 className='h4 small'>
              Showcase certifications, eco-proof, and sustainable practices in
              clear, visible ways so customers feel confident that their
              purchases align with their values.
            </h4>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>2</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Transparent Details</h6>
            <h4 className='h4 small'>
              Provide straightforward information about product ingredients and
              usage, making it easy for customers to understand what
              they&apos;re buying while reinforcing the brand&apos;s
              eco-friendly mission.
            </h4>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>3</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Seamless Shopping</h6>
            <h4 className='h4 small'>
              Streamline navigation, highlight authentic reviews, and emphasize
              branding to create a smooth, engaging experience that feels both
              convenient and personal, like shopping at a local market.
            </h4>
          </div>
        </section>
      </section>
    </>
  )
}
