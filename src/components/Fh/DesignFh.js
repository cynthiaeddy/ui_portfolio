import { useState } from 'react'
import '../ReusableComponents.css'
import '../ReusableDesign.css'
import fh_styletile from '../../assets/fh/feline_health_style.png'
import fh_hi_desktop from '../../assets/fh/fh_hifi_desktopcrop.png'
import fh_hi_mobile from '../../assets/fh/fh_hifi_mobile.png'
import { ModalFhLoDesktop } from '../Modals/ModalFhLoDesktop'
import { ModalFhLoMobile } from '../Modals/ModalFhLoMobile'
import { ModalFhHiDesktop } from '../Modals/ModalFhHiDesktop'
import { ModalFhHiMobile } from '../Modals/ModalFhHiMobile'

export const DesignFh = () => {
  const [ismodalFhLoDesktopOpen, setIsmodalFhLoDesktopOpen] = useState(false)
  const [ismodalFhLoMobileOpen, setIsmodalFhLoMobileOpen] = useState(false)
  const [ismodalFhHiDesktopOpen, setIsmodalFhHiDesktopOpen] = useState(false)
  const [ismodalFhHiMobileOpen, setIsmodalFhHiMobileOpen] = useState(false)

  const modalFhLoDesktopClose = () => {
    setIsmodalFhLoDesktopOpen(false)
    document.body.style.overflow = 'auto'
  }

  const modalFhLoMobileClose = () => {
    setIsmodalFhLoMobileOpen(false)
    document.body.style.overflow = 'auto'
  }

  const modalFhHiDesktopClose = () => {
    setIsmodalFhHiDesktopOpen(false)
    document.body.style.overflow = 'auto'
  }

  const modalFhHiMobileClose = () => {
    setIsmodalFhHiMobileOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Design</h2>
      </div>
      <section className='DesignContainer fh'>
        <h5 className='h5 black dropCap design'>
          I refined typography, colors, and logo lockups to modernize the look
          while keeping the brand&apos;s Art Deco character intact. I also
          created a new logo that worked seamlessly with existing brand assets,
          making the identity feel updated without losing recognition. A muted,
          nature-inspired palette reinforced sustainability, while consistent
          use of type and iconography built trust through clarity and cohesion.
          Together, these system elements ensured the redesigned site felt both
          authentic to the brand and seamless for the user.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white no_margin'>branding</div>
          <img
            className='competitive flow'
            src={fh_styletile}
            alt={fh_styletile}
          />
        </div>
        <div className='ButtonContainer'></div>
        <h5 className='h5 dropCap black too'>
          After testing both the mobile and desktop low-fidelity wireframes and
          incorporating user feedback, I developed high-fidelity wireframes for
          further testing on both platforms. The goal was to refine the design
          and enhance the user experience, particularly by addressing usability
          concerns on mobile and improving visual consistency on desktop.The
          following updates were made to improve the booking flow across both
          platforms:
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white fh'>high fidelity desktop</div>
        </div>
        <img
          className='competitive designFh four'
          src={fh_hi_desktop}
          alt={fh_hi_desktop}
        />
        <div className='ButtonContainer fh_mobile'>
          <div className='Button enlarge white'>high fidelity mobile</div>
        </div>
        <img
          className='competitive fh_mobile'
          src={fh_hi_mobile}
          alt={fh_hi_mobile}
        />
      </section>
      <ModalFhLoDesktop
        isOpen={ismodalFhLoDesktopOpen}
        modalSscClose={modalFhLoDesktopClose}
      />
      <ModalFhLoMobile
        isOpen={ismodalFhLoMobileOpen}
        modalSscClose={modalFhLoMobileClose}
      />
      <ModalFhHiDesktop
        isOpen={ismodalFhHiDesktopOpen}
        modalSscClose={modalFhHiDesktopClose}
      />
      <ModalFhHiMobile
        isOpen={ismodalFhHiMobileOpen}
        modalSscClose={modalFhHiMobileClose}
      />
    </>
  )
}
