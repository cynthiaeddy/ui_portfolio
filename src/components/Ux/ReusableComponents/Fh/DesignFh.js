import './../ReusableComponents.css'
// import { useState } from 'react'
/* eslint-disable prettier/prettier */
// import './../ReusableComponents.css'
// import magWh from '../../../../assets/ssc/magWh.png'
// import magWhH from '../../../../assets/ssc/magWhH.png'
import user_flow from '../../../../assets/fh/second iteration_final.png'
// import { ModalSscFlow } from '../Modals/ModalSscFlow'
// import { ModalSscLoFi } from '../Modals/ModalSscLoFi'
// import { ModalSscHiFi } from '../Modals/ModalSscHiFi'


export const DesignFh = () => {
  // const [hover, setHover] = useState(false);
  // const [ismodalSscFlowOpen, setIsmodalSscFlowOpen] = useState(false)
  // const [ismodalSscLoFiOpen, setIsmodalSscLoFiOpen] = useState(false)
  // const [ismodalSscHiFiOpen, setIsmodalSscHiFiOpen] = useState(false)

    // const handleMouseIn = () => {
    //   setHover(true);
    // };

    // const handleMouseOut = () => {
    //   setHover(false);
    // };

    // const modalSscFlowOpen = () => {
    //   setIsmodalSscFlowOpen(true)
    //   document.body.style.overflow = 'hidden'
    // }
    // const modalSscFlowClose = () => {
    //   setIsmodalSscFlowOpen(false)
    //   document.body.style.overflow = 'auto'
    // }

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
          Next, I created a user task flow </span> to streamline the appointment booking process. The goal was to make the user journey as intuitive as possible.
        </h5>
        <div className='ButtonContainer'>
                    <div className='Button enlarge white'>user task flow</div>
          <img className='competitive designFh' src={user_flow} alt={user_flow} />
        </div>
        <div className='divider_curved top'></div>
        <div className='divider_curved_down'></div>
        <h5 className='h5 dropCap black'>
        The low-fidelity wireframes were essential in streamlining the design of the appointment booking feature. By simplifying the user flow and organizing the content structure, I aimed to create a more intuitive and efficient booking process. Below are the key elements of the design:


        </h5>
        <ul className='h5 bullets'>
            <li className=''>
              <h5 className='h5 black'>Designed a two-step process for booking online appointments to simplify navigation.</h5>
            </li>
          <section>
        <div className='smallWrapper'><h6 className='h6 small'>First step</h6><h5 className='h5 small'>User selects a date from a monthly calendar.</h5></div>
          </section>
          <section>
        <div className='smallWrapper'><h6 className='h6 small'>Second step</h6><h5 className='h5 small'>Available time slots are displayed based on the selected date.</h5></div>
        </section>
        </ul>
        {/* <div className='ButtonContainer'>
                    <div className='Button enlarge white'>low fidelity wireframes</div>
                    <button onClick={''} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                      /> : <img className='magnifier wh' src={magWh} alt={magWh}
                      />}
                    </button>
          <img className='competitive mid_fi' src={mid_fi} alt={mid_fi} />
        </div> */}
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
        {/* <div className='ButtonContainer'>
                    <div className='Button enlarge white'>high fidelity wireframes</div>
                    <button onClick={modalSscHiFiOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                      /> : <img className='magnifier wh' src={magWh} alt={magWh}
                      />}
                    </button>
          <img className='competitive hi_fi' src={hiFi} alt={hiFi} />
        </div> */}


      </section>
      {/* <ModalSscFlow isOpen={ismodalSscFlowOpen} modalSscClose={modalSscFlowClose} />
      <ModalSscLoFi isOpen={ismodalSscLoFiOpen} modalSscClose={modalSscLoFiClose} />
      <ModalSscHiFi isOpen={ismodalSscHiFiOpen} modalSscClose={modalSscHiFiClose} /> */}
    </>
  )
}
