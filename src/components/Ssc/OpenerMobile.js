import '../ReusableComponents.css'
import soap_opener from '../../assets/ssc/soap_opener.png'

export const OpenerMobile = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto ssc' src={soap_opener} alt={soap_opener} />
      </div>
      <div className='background ssc'></div>
      <div className='textWrapper'>
        <h2 className='cases_openerText'> Sustainable Soap Co.</h2>
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
          <div className='MobileSm'>
            <h6 className='h6 small'>role</h6>
            <h5 className='h5 small'>UX Researcher UI Designer</h5>
          </div>
          <div className='MobileSm'>
            <h6 className='h6 small'>duration</h6>
            <h5 className='h5 small'>12 Weeks</h5>
          </div>
          <div className='MobileSm'>
            <h6 className='h6 small'>tools</h6>
            <h5 className='h5 small'>Figma Photoshop</h5>
          </div>
        </div>
      </div>
      <div className='divider_curved'></div>
    </section>
  )
}
