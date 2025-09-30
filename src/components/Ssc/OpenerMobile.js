import '../ReusableComponents.css'
import soap_opener from '../../assets/ssc/soap_opener_sm.png'
import soap_ive from '../../assets/ssc/soap_ive_sm.png'
import opener_down from '../../assets/ssc/opener_down.png'

export const OpenerMobile = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' src={soap_opener} alt={soap_opener} />
        <img className='OpenerFoto' src={opener_down} alt={opener_down} />
        <img className='OpenerFoto' src={soap_ive} alt={soap_ive} />
      </div>
      <div className='textWrapper'>
        <h2 className='cases_openerText mobile'> Sustainable Soap Co.</h2>
        <h5 className='h5 black opener'>
          End-to-end redesign of my niece&apos;s e-commerce site, a small-batch
          brand making eco-friendly soaps, shampoos, and lotions — highlighting
          sustainability and a seamless shopping experience.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <div className='InfoSection'>
            <div className='Button enlarge opener'>problem</div>
            <h5 className='h5 opener_text center'>
              The original site looked generic and failed to communicate the
              sustainable ethos. Traffic was low, customer engagement was weak,
              and visitors weren&apos;t converting into buyers. Without a strong
              brand identity or clear transparency, the website wasn&apos;t
              trust.
            </h5>
          </div>
          <div className='InfoSection'>
            <div className='Button enlarge opener'>solution</div>
            <h5 className='h5 opener_text center'>
              The redesign should convey my niece&apos;s brand—authentic,
              modern, and rooted in sustainability—while reinforcing
              transparency and trust. By highlighting small-batch products,
              sharing the brand story, and making sustainability proof easy to
              access, the goal is to deepen customer connection and foster
              long-term loyalty.
            </h5>
          </div>
          <div className='InfoSmall'>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>project</h6>
              <h5 className='h5 small opener mobile'>
                End to End Mobile
                <br />
                Redesign
                <br />
              </h5>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>role</h6>
              <h5 className='h5 small opener mobile'>
                UX Researcher <br />
                UI Designer
              </h5>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>duration</h6>
              <h5 className='h5 small opener mobile'>12 Weeks</h5>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>tools</h6>
              <h5 className='h5 small opener mobile'>
                Figma <br />
                Photoshop
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
