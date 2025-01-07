/* eslint-disable no-unused-vars */
import { useState } from 'react'
/* eslint-disable prettier/prettier */
import './../ReusableComponents.css'
import magWh from '../../../../assets/ssc/magWh.png'
import magWhH from '../../../../assets/ssc/magWhH.png'
import user_flow from '../../../../assets/nyt/nyt_user_flow2.png'
// import hiFi from '../../../assets/ssc/hifi_crop.jpg'
// import mid_fi from '../../../assets/ssc/ive_mid_fi.png'
import { ModalNytFlow } from '../../Modals/ModalNytFlow'
// import { ModalSscLoFi } from '../Modals/ModalSscLoFi'
// import { ModalSscHiFi } from '../Modals/ModalSscHiFi'


export const DesignNyt = () => {
  const [hover, setHover] = useState(false);
  const [ismodalNytFlowOpen, setIsmodalNytFlowOpen] = useState(false)
  // const [ismodalSscLoFiOpen, setIsmodalSscLoFiOpen] = useState(false)
  // const [ismodalSscHiFiOpen, setIsmodalSscHiFiOpen] = useState(false)

    const handleMouseIn = () => {
      setHover(true);
    };

    const handleMouseOut = () => {
      setHover(false);
    };

    const modalNytFlowOpen = () => {
      setIsmodalNytFlowOpen(true)
      document.body.style.overflow = 'hidden'
    }
    const modalNytFlowClose = () => {
      setIsmodalNytFlowOpen(false)
      document.body.style.overflow = 'auto'
    }

    // const modalSscLoFiOpen = () => {
    //   setIsmodalSscLoFiOpen(true)
    //   document.body.style.overflow = 'hidden'
    // }
    // const modalSscLoFiClose = () => {
    //   setIsmodalSscLoFiOpen(false)
    //   document.body.style.overflow = 'auto'
    // }
    // const modalSscHiFiOpen = () => {
    //   setIsmodalSscHiFiOpen(true)
    //   document.body.style.overflow = 'hidden'
    // }
    // const modalSscHiFiClose = () => {
    //   setIsmodalSscHiFiOpen(false)
    //   document.body.style.overflow = 'auto'
    // }
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white'>Design</h2>
      </div>
      <section className='OpenerContainer define'>
        <h5 className='h5 black center'>
          <span className='leadin black'>
          After identifying key features </span> for serving size functionality, I created a user flow showing how users can adjust recipe portions while managing grocery lists and nutritional information.
        </h5>
        <div className='ButtonContainer'>
                    <div className='Button enlarge white'>user task flow</div>
                    <button onClick={modalNytFlowOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                      /> : <img className='magnifier wh' src={magWh} alt={magWh}
                      />}
                    </button>
          <img className='competitive flow nyt' src={user_flow} alt={user_flow} />
        </div>
        <div className='divider_curved top'></div>
        <div className='divider_curved_down'></div>
        <h5 className='h5 dropCap black'>
        The low-fidelity wireframes helped shape the content structure and layout, ensuring key elements were organized effectively. By referring to the persona and affinity map, I focused on presenting crucial information that keeps users engaged, particularly on the landing and product pages.
        </h5>
        <ul className='h5 bullets'>
            <li className='first_li_research black'>
              <h5 className='h5 black'>Wireframes provided insights into content structure and page organization.</h5>
            </li>
            <li className='black'>
              <h5 className='h5 black'>Persona and affinity map guided the prioritization of user-friendly, engaging information.</h5>
            </li>
            <li className='smHed'>
              <h6 className='h6 small space'>
                landing page
              </h6 >
            </li>
            <li className='black'>
              <h5 className='h5 black'>
              Mission statement highlighting sustainability and handcrafted products.
              </h5>
            </li>
            <li className='black'>
              <h5 className='h5 black'>
              SSC&apos;s values presented with icons and brief text.
              </h5>
          </li>
          <li className='smHed'>
              <h6 className='h6 small space'>
                product page
              </h6>
            </li>
            <li className='black'>
              <h5 className='h5 black'>
              Features usage instructions, ingredients, and customer reviews.              </h5>
            </li>
        </ul>
        <div className='ButtonContainer'>
                    <div className='Button enlarge white'>low fidelity wireframes</div>
                    <button onClick={''} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                      /> : <img className='magnifier wh' src={magWh} alt={magWh}
                      />}
                    </button>
          <img className='competitive mid_fi' src={''} alt={''} />
        </div>
        <div className='divider_curved top'></div>
        <h5 className='h5 dropCap black'>
        In moderated testing of the low-fidelity wireframes, 5 participants completed their tasks of exploring the homepage, purchasing the vegan soap and accessing information about the company&apos;s sustainability practices and product usage. All five users succeeded without errors and found the navigation intuitive, though they suggested increasing the hamburger menu size and improving access to product reviews. <br /> <br /> Next steps for the high-fidelity wireframes:        </h5>
        <ul className='h5 bullets'>
            <li className='first_li_research black'>
              <h5 className='h5 black'>Expanding the navigation bar and detailing sustainability practices via new pages of an ingredients glossary and reviews to enhance transparency and user satisfaction.</h5>
            </li>
            <li className='black'>
              <h5 className='h5 black'> Art deco branding theme was already established. The new logo and branding echo and coexist with old in order for it to be updated seamlessly and cohesively, while making the brand more distinct and emphasizing sustainability again in the tagline.</h5>
            </li>
        </ul>
        <div className='ButtonContainer'>
                    <div className='Button enlarge white'>high fidelity wireframes</div>
                    <button onClick={''} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                      /> : <img className='magnifier wh' src={magWh} alt={magWh}
                      />}
                    </button>
          <img className='competitive hi_fi' src={''} alt={''} />
        </div>


      </section>
      <ModalNytFlow isOpen={ismodalNytFlowOpen} modalSscClose={modalNytFlowClose} />
      {/* <ModalSscLoFi isOpen={ismodalSscLoFiOpen} modalSscClose={modalSscLoFiClose} />
      <ModalSscHiFi isOpen={ismodalSscHiFiOpen} modalSscClose={modalSscHiFiClose} />  */}
    </>
  )
}
