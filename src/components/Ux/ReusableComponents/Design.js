/* eslint-disable no-unused-vars */
import { useState } from 'react'
/* eslint-disable prettier/prettier */
import './ReusableComponents.css'
import mag_wh from '../../../assets/ssc/mag_wh.png'
import mag_blk from '../../../assets/ssc/mag_blk.png'
import user_flow from '../../../assets/ssc/ssc_user_flow.png'
import mid_fi from '../../../assets/ssc/ive_mid_fi.png'
import { ModalSscFlow } from '../Modals/ModalSscFlow'
import { ModalSscLoFi } from '../Modals/ModalSscLoFi'

export const Design = () => {
  const [hover, setHover] = useState(false);
  const [ismodalSscFlowOpen, setIsmodalSscFlowOpen] = useState(false)
  const [ismodalSscLoFiOpen, setIsmodalSscLoFiOpen] = useState(false)

    const handleMouseIn = () => {
      setHover(true);
    };

    const handleMouseOut = () => {
      setHover(false);
    };

    const modalSscFlowOpen = () => {
      setIsmodalSscFlowOpen(true)
      document.body.style.overflow = 'hidden'
    }
    const modalSscFlowClose = () => {
      setIsmodalSscFlowOpen(false)
      document.body.style.overflow = 'auto'
    }

    const modalSscLoFiOpen = () => {
      setIsmodalSscLoFiOpen(true)
      document.body.style.overflow = 'hidden'
    }
    const modalSscLoFiClose = () => {
      setIsmodalSscLoFiOpen(false)
      document.body.style.overflow = 'auto'
    }
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white'>Design</h2>
      </div>
      <section className='OpenerContainer define'>
        <h5 className='h5 black center'>
          <span className='leadin black'>
          After determining the project&apos;s key objectives, </span> I created a user flow to purchase a product emphasizing on intuitive navigation and search functionality.
        </h5>
        <div className='ButtonContainer'>
                    <div className='Button enlarge white'>affinity mapping</div>
                    <button onClick={modalSscFlowOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier' src={mag_blk} alt={mag_blk}
                      /> : <img className='magnifier' src={mag_wh} alt={mag_wh}
                      />}
                    </button>
          <img className='competitive flow' src={user_flow} alt={user_flow} />
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
                    <button onClick={modalSscLoFiOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    {hover ? <img className='magnifier' src={mag_blk} alt={mag_blk}
                      /> : <img className='magnifier' src={mag_wh} alt={mag_wh}
                      />}
                    </button>
          <img className='competitive mid_fi' src={mid_fi} alt={mid_fi} />
        </div>

      </section>
      <ModalSscFlow isOpen={ismodalSscFlowOpen} modalSscClose={modalSscFlowClose} />
      <ModalSscLoFi isOpen={ismodalSscLoFiOpen} modalSscClose={modalSscLoFiClose} />
    </>
  )
}
