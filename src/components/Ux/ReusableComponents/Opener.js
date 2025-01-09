/* eslint-disable no-unused-vars */
import '../../ReusableComponents.css'
import opener_down from '../../../assets/ssc/opener_down.png'
import soap_ive from '../../../assets/ssc/soap_ive.png'
import soap_opener from '../../../assets/ssc/soap_opener.png'

export const Opener = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' src={soap_opener} alt={soap_opener} />
        <img className='OpenerFoto' src={opener_down} alt={opener_down} />
        <img className='OpenerFoto' src={soap_ive} alt={soap_ive} />
      </div>
      <div className='background'></div>
      <div className='textWrapper'>
        <h2>Sustainable Soap Co.</h2>
        <h5 className='h5 openerType'>
          specializes in small batch sustainable products such as soaps, shampoo
          and lotions for hair and body.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <h6 className='h6 studies'>PROBLEM</h6>
          <h5 className='h5 black'>
            The website struggles with low traffic and customer engagement due
            to a generic design that fails to stand out. A redesign is needed to
            create a visually appealing experience aligned with the brand&apos;s
            sustainable ethos, boosting conversions and user satisfaction.
          </h5>
          <br />
          <h6 className='h6 studies'>solution</h6>
          <h5 className='h5 black'>
            How might we redesign the website to create an engaging, visually
            appealing experience that showcases it&apos;s eco-friendly products,
            reflects it&apos;s sustainable ethos, and effectively converts
            visitors into loyal customers?
          </h5>
        </div>
        <div className='InfoSmall'>
          <h6 className='h6 small'>role</h6>
          <h5 className='h5 small'>
            UX Researcher <br />
            UI Designer
          </h5>
          <br />
          <h6 className='h6 small'>duration</h6>
          <h5 className='h5 small'>12 Weeks</h5>
          <br />
          <h6 className='h6 small'>tools</h6>
          <h5 className='h5 small'>
            Figma <br />
            Photoshop
          </h5>
        </div>
      </div>
      <div className='divider_curved'></div>
    </section>
  )
}
export default Opener
