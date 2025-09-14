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
          End-to-End Redesign of an e-commerce website specializing in
          small-batch sustainable soaps, shampoos, and lotions, showcasing
          sustainability while creating a seamless shopping experience.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          {/* <div className='divider_curved_down'></div> */}
          <div className='Button_website opener margin'>problem</div>
          <h5 className='h5 black'>
            Sustainable Soap Co. had a clear mission but a generic website that
            didn&apos;t reflect it. Traffic was low, engagement was weak, and
            customers weren&apos;t connecting with the brand&apos;s story.
            Without transparency or a distinct visual identity, the site
            wasn&apos;t converting visitors into buyers.
          </h5>
          <br />
          <div className='Button_website opener '>solution</div>
          <h5 className='h5 black lead'>
            How might we redesign the website to create an engaging, visually
            appealing experience that showcases it&apos;s eco-friendly products,
            reflects it&apos;s sustainable ethos, and effectively converts
            visitors into loyal customers?
          </h5>
          <div className='InfoSmall'>
            <div>
              <h6 className='h6 small'>project</h6>
              <h5 className='h5 small'>
                End to End Mobile
                <br />
                Redesign
              </h5>
            </div>
            <div>
              <h6 className='h6 small'>role</h6>
              <h5 className='h5 small'>
                UX Researcher <br />
                UI Designer
              </h5>
            </div>
            <div>
              <h6 className='h6 small'>duration</h6>
              <h5 className='h5 small'>12 Weeks</h5>
            </div>
            <div>
              <h6 className='h6 small'>tools</h6>
              <h5 className='h5 small'>
                Figma <br />
                Photoshop
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='divider_curved lead'></div> */}
    </section>
  )
}
export default Opener
