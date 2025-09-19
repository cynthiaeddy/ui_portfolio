import { useState } from 'react'
import '../ReusableComponents.css'
import '../ReusableDesign.css'
import hifi from '../../assets/nyt/nyt_hificrop.png'
import { ModalNytFlow } from '../Modals/ModalNytFlow'
import { ModalNytLoFi } from '../Modals/ModalNytLoFi'
import { ModalNytHiFi } from '../Modals/ModalNytHiFi'

export const DesignNyt = () => {
  const [ismodalNytFlowOpen, setIsmodalNytFlowOpen] = useState(false)
  const [ismodalNytLoFiOpen, setIsmodalNytLoFiOpen] = useState(false)
  const [ismodalNytHiFiOpen, setIsmodalNytHiFiOpen] = useState(false)

  const modalNytFlowClose = () => {
    setIsmodalNytFlowOpen(false)
    document.body.style.overflow = 'auto'
  }

  const modalNytLoFiClose = () => {
    setIsmodalNytLoFiOpen(false)
    document.body.style.overflow = 'auto'
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
        <div className='ButtonContainer'></div>
        <h5 className='h5 dropCap black fh'>
          Building on the low fidelity feedback, I refined the grocery list
          interface by enlarging and moving the Edit/Done controls and aligning
          the deletion pattern with NYT&apos;s existing UI. I then tested the hi
          fi prototypes with 6 participants. 93% were satisfied with the serving
          size adjustment, praising the clear +/− controls. Grocery lists scored
          87%, and overall usability 87%. Participants still wanted inline
          editing to add or change items directly, but this functionality was
          beyond the project scope.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white'>high fidelity wireframes</div>
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
