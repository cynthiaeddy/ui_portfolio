import '../ReusableOpener.css'

import opener_down from '../../assets/ssc/opener_down.png'
import soap_ive from '../../assets/ssc/soap_ive.png'
import soap_opener from '../../assets/ssc/soap_opener.png'

export const Opener = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img
          className='OpenerFoto'
          rel='preload'
          src={soap_opener}
          alt={soap_opener}
        />
        <img
          className='OpenerFoto'
          rel='preload'
          src={opener_down}
          alt={opener_down}
        />
        <img
          className='OpenerFoto'
          rel='preload'
          src={soap_ive}
          alt={soap_ive}
        />
      </div>
      <div className='textWrapper'>
        <h2 className='openerText'> Sustainable Soap Co.</h2>
        <h5 className='h5 openerType lead'>
          End-to-end redesign of an e-commerce website for small-batch
          sustainable soaps, shampoos, and lotions, showcasing sustainability
          while creating a seamless shopping experience.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <div className='InfoSection'>
            <div className='Button_website opener margin'>problem</div>
            <h5 className='h5 opener_text center'>
              The original site looked generic and failed to communicate the
              brand&apos;s sustainable ethos. Traffic was low, customer
              engagement was weak, and visitors weren&apos;t converting into
              buyers. Without a strong brand identity or clear transparency, the
              website wasn&apos;t building trust.
            </h5>
          </div>
          <div className='InfoSection'>
            <div className='Button_website opener margin'>solution</div>
            <h5 className='h5 opener_text center'>
              Redesign the experience to feel authentic and modern while making
              sustainability proof front and center. The new site highlights
              eco-friendly products, shares the brand&apos;s story, and
              streamlines the shopping flow to build confidence and loyalty.
            </h5>
          </div>
          <div className='InfoSmall'>
            <div className='InfoSmallSection'>
              <h6 className='h6 small opener'>project</h6>
              <h5 className='h5 small opener'>
                End to End Mobile
                <br />
                Redesign
              </h5>
            </div>
            <div>
              <h6 className='h6 small opener'>role</h6>
              <h5 className='h5 small opener'>
                UX Researcher <br />
                UI Designer
              </h5>
            </div>
            <div>
              <h6 className='h6 small opener'>duration</h6>
              <h5 className='h5 small opener'>12 Weeks</h5>
            </div>
            <div>
              <h6 className='h6 small opener'>tools</h6>
              <h5 className='h5 small opener'>
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
export default Opener
