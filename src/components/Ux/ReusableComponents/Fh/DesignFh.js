import { useState } from 'react'
import './../ReusableComponents.css'
// import { useState } from 'react'
/* eslint-disable prettier/prettier */
// import './../ReusableComponents.css'
import magWh from '../../../../assets/ssc/magWh.png'
import magWhH from '../../../../assets/ssc/magWhH.png'
import user_flow from '../../../../assets/fh/second iteration_final.png'
import fh_lo_desktop from '../../../../assets/fh/fh_lo_desktop.png'
import fh_lo_mobile from '../../../../assets/fh/fh_lo_mobile.png'
import fh_hi_desktop_top from '../../../../assets/fh/fh_hi_desktop_top.png'
import fh_hi_desktop_bottom from '../../../../assets/fh/fh_hi_desktop_bottom.png'
import fh_hi_mobile from '../../../../assets/fh/fh_hi_mobile.png'
import { ModalFhLoDesktop } from '../../Modals/ModalFhLoDesktop'
import { ModalFhLoMobile } from '../../Modals/ModalFhLoMobile'
// import { ModalSscHiFi } from '../Modals/ModalSscHiFi'


export const DesignFh = () => {
  const [hover, setHover] = useState(false);
  const [ismodalFhLoDesktopOpen, setIsmodalFhLoDesktopOpen] = useState(false)
  const [ismodalFhLoMobileOpen, setIsmodalFhLoMobileOpen] = useState(false)
  // const [ismodalSscLoFiOpen, setIsmodalSscLoFiOpen] = useState(false)
  // const [ismodalSscHiFiOpen, setIsmodalSscHiFiOpen] = useState(false)

    const handleMouseIn = () => {
      setHover(true);
    };

    const handleMouseOut = () => {
      setHover(false);
    };

    const modalFhLoDesktopOpen = () => {
      setIsmodalFhLoDesktopOpen(true)
      document.body.style.overflow = 'hidden'
    }
    const modalFhLoDesktopClose = () => {
      setIsmodalFhLoDesktopOpen(false)
      document.body.style.overflow = 'auto'
    }
    const modalFhLoMobileOpen = () => {
      setIsmodalFhLoMobileOpen(true)
      document.body.style.overflow = 'hidden'
    }
    const modalFhLoMobileClose = () => {
      setIsmodalFhLoMobileOpen(false)
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
        <div className='WireframesContainer'>
        <div className='ButtonContainer'>
                    <div className='Button enlarge white'>low fidelity desktop</div>
                    <button onClick={modalFhLoDesktopOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                      /> : <img className='magnifier wh' src={magWh} alt={magWh}
                      />}
                    </button>
          <img className='competitive mid_fi desktop' src={fh_lo_desktop} alt={fh_lo_desktop} />
        </div>
        <div className='ButtonContainer'>
                    <div className='Button enlarge white'>low fidelity mobile</div>
                    <button onClick={modalFhLoMobileOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                      /> : <img className='magnifier wh' src={magWh} alt={magWh}
                      />}
                    </button>
          <img className='competitive mid_fi mobile' src={fh_lo_mobile} alt={fh_lo_mobile} />
          </div>
          </div>
        <div className='divider_curved top'></div>
        <h5 className='h5 dropCap black'>
          After testing both the mobile and desktop low-fidelity wireframes and incorporating user feedback, I developed high-fidelity wireframes for further testing on both platforms. The goal was to refine the design and enhance the user experience, particularly by addressing usability concerns on mobile and improving visual consistency on desktop.The following updates were made to improve the booking flow across both platforms:
          <ul className='h5 bullets'>
          <li className='first_li_research black'>
              <h5 className='h5 black'>Added an extra CTA for booking appointments in the mobile version.</h5>
            </li>
            <li className='black'>
              <h5 className='h5 black'>Used the same background photo throughout the desktop booking screens to enhance user orientation.</h5>
            </li>
        </ul>
        </h5>
         <div className='ButtonContainer'>
                            <div className='Button enlarge white'>high fidelity desktop</div>
                            <button onClick={''} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                            {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                              /> : <img className='magnifier wh' src={magWh} alt={magWh}
                              />}
                            </button>
        </div>
        <div className='Container_desktop'>
        <img className='competitive fh_top' src={fh_hi_desktop_top} alt={fh_hi_desktop_top} />
        <img className='competitive fh_bottom' src={fh_hi_desktop_bottom} alt={fh_hi_desktop_bottom} />
        </div>
        <div className='ButtonContainer'>
                            <div className='Button enlarge white'>high fidelity mobile</div>
                            <button onClick={''} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                            {hover ? <img className='magnifier wh' src={magWhH} alt={magWhH}
                              /> : <img className='magnifier wh' src={magWh} alt={magWh}
                              />}
                            </button>
        </div>
        <img className='competitive fh_mobile' src={fh_hi_mobile} alt={fh_hi_mobile} />


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
      {/* {/* <ModalSscFlow isOpen={ismodalSscFlowOpen} modalSscClose={modalSscFlowClose} /> */}
      {/* <ModalSscLoFi isOpen={ismodalSscLoFiOpen} modalSscClose={modalSscLoFiClose} /> */}
      <ModalFhLoDesktop isOpen={ismodalFhLoDesktopOpen} modalSscClose={modalFhLoDesktopClose} />
      <ModalFhLoMobile isOpen={ismodalFhLoMobileOpen} modalSscClose={modalFhLoMobileClose} />
    </>
  )
}
