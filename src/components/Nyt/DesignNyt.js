import { useState } from 'react'
import '../ReusableComponents.css'
import '../ReusableDesign.css'
import magWh from '../../assets/ssc/magWh.png'
import magWhH from '../../assets/ssc/magWhH.png'
import user_flow from '../../assets/nyt/nyt_user_flow2.png'
import lofi from '../../assets/nyt/nyt_midfi_big.png'
import hifi from '../../assets/nyt/nyt_hificrop.png'
import { ModalNytFlow } from '../Modals/ModalNytFlow'
import { ModalNytLoFi } from '../Modals/ModalNytLoFi'
import { ModalNytHiFi } from '../Modals/ModalNytHiFi'

export const DesignNyt = () => {
  const [hover, setHover] = useState(false)
  const [ismodalNytFlowOpen, setIsmodalNytFlowOpen] = useState(false)
  const [ismodalNytLoFiOpen, setIsmodalNytLoFiOpen] = useState(false)
  const [ismodalNytHiFiOpen, setIsmodalNytHiFiOpen] = useState(false)

  const handleMouseIn = () => {
    setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }

  const modalNytFlowOpen = () => {
    setIsmodalNytFlowOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const modalNytFlowClose = () => {
    setIsmodalNytFlowOpen(false)
    document.body.style.overflow = 'auto'
  }

  const modalNytLoFiOpen = () => {
    setIsmodalNytLoFiOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const modalNytLoFiClose = () => {
    setIsmodalNytLoFiOpen(false)
    document.body.style.overflow = 'auto'
  }
  const modalNytHiFiOpen = () => {
    setIsmodalNytHiFiOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const modalNytHiFiClose = () => {
    setIsmodalNytHiFiOpen(false)
    document.body.style.overflow = 'auto'
  }
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Design</h2>
      </div>
      <section className='DesignContainer'>
        <h5 className='h5 black center'>
          <span className='leadin black'>After identifying key features </span>{' '}
          for serving size functionality, I created a user flow showing how
          users can adjust recipe portions while managing grocery lists and
          nutritional information.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white'>user flow</div>
          <button
            onClick={modalNytFlowOpen}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
          >
            {hover ? (
              <img className='magnifier wh' src={magWhH} alt={magWhH} />
            ) : (
              <img className='magnifier wh' src={magWh} alt={magWh} />
            )}
          </button>
          <img
            className='competitive flow nyt'
            src={user_flow}
            alt={user_flow}
          />
        </div>
        <div className='divider_curved top'></div>
        <div className='divider_curved_down'></div>
        <h5 className='h5 dropCap black'>
          The user flow diagram helped me visualize how serving size adjustments
          would impact the recipe page&apos;s layout and functionality, guiding
          the creation of low-fidelity wireframes. The goal was to incorporate
          NYT&apos;s existing UI while ensuring that features like nutritional
          information and the grocery list would update dynamically when the
          serving size was changed. Following are the key points:
        </h5>
        <ul className='h5 bullets'>
          <li className='first_li_research black'>
            <h5 className='h5 black'>
              Mapped key interaction points where serving size adjustments
              affect layout, ingredient quantities, and features like the
              grocery list and nutritional information.
            </h5>
          </li>
          <li className='black'>
            <h5 className='h5 black'>
              Designed wireframes to visualize how changes in serving size would
              update ingredient amounts, nutritional data, and the grocery list
              in real-time.
            </h5>
          </li>
          <li className='black'>
            <h5 className='h5 black'>
              Ensured seamless integration with NYT’s existing UI, maintaining
              consistency in design while adding dynamic updates for the new
              feature.
            </h5>
          </li>
        </ul>
        <div className='ButtonContainer'>
          <div className='Button enlarge white'>low fidelity wireframes</div>
          <button
            onClick={modalNytLoFiOpen}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
          >
            {hover ? (
              <img className='magnifier wh' src={magWhH} alt={magWhH} />
            ) : (
              <img className='magnifier wh' src={magWh} alt={magWh} />
            )}
          </button>
          <img className='competitive mid_fi' src={lofi} alt={lofi} />
        </div>
        <div className='divider_curved top'></div>
        <h5 className='h5 dropCap black too'>
          In moderated testing of the low-fidelity wireframes, five participants
          rated the serving size feature 5/5 for ease of use. However, the
          overall satisfaction score was 88%, due to dissatisfaction with the
          existing NYT UI, particularly around the grocery list editing. Since
          their existing UI was out of my scope, I focused on the following
          leaving the rest of the NYT designed unchanged:
        </h5>
        <ul className='h5 bullets'>
          <li className='first_li_research black'>
            <h5 className='h5 black'>
              Enlarged and moved the edit and done buttons from the top
              navigation bar to the right of the recipe name.
            </h5>
          </li>
          <li className='black'>
            <h5 className='h5 black'>
              {' '}
              Changed the edit grocery list page deletion UI to mirror the
              existing NYT’s UI.
            </h5>
          </li>
        </ul>
        <div className='ButtonContainer'>
          <div className='Button enlarge white'>high fidelity wireframes</div>
          <button
            onClick={modalNytHiFiOpen}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
          >
            {hover ? (
              <img className='magnifier wh' src={magWhH} alt={magWhH} />
            ) : (
              <img className='magnifier wh' src={magWh} alt={magWh} />
            )}
          </button>
          <img className='competitive hi_fi nyt' src={hifi} alt={hifi} />
        </div>
      </section>
      <ModalNytFlow
        isOpen={ismodalNytFlowOpen}
        modalSscClose={modalNytFlowClose}
      />
      <ModalNytLoFi
        isOpen={ismodalNytLoFiOpen}
        modalSscClose={modalNytLoFiClose}
      />
      <ModalNytHiFi
        isOpen={ismodalNytHiFiOpen}
        modalSscClose={modalNytHiFiClose}
      />
    </>
  )
}
