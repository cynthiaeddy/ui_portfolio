/* eslint-disable prettier/prettier */
import { useState } from 'react'
import './../ReusableComponents.css'
// eslint-disable-next-line no-unused-vars
import magBlk1H from '../../../../assets/ssc/magBlk1H.png'
import magBlk1 from '../../../../assets/ssc/magBlk1.png'
import competitive from '../../../../assets/fh/feline_competitive.png'
import affinity_map from '../../../../assets/fh/feline_health_affinity_mapcrop.png'
import persona from '../../../../assets/fh/feline_health_persona.png'
// import { ModalSsc } from '../Modals/ModalSsc'
// import { ModalSscAffinity } from '../Modals/ModalSscAffinity'

export const ResearchFh = () => {
  // const [ismodalSscOpen, setIsmodalSscOpen] = useState(false)
  // const [ismodalSscAffinityOpen, setIsmodalSscAffinityOpen] = useState(false)
  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };


  // const modalSscOpen = () => {
  //   setIsmodalSscOpen(true)
  //   document.body.style.overflow = 'hidden'
  // }
  // const modalSscClose = () => {
  //   setIsmodalSscOpen(false)
  //   document.body.style.overflow = 'auto'
  // }
  // const modalSscAffinityOpen = () => {
  //   setIsmodalSscAffinityOpen(true)
  //   document.body.style.overflow = 'hidden'
  // }
  // const modalSscAffinityClose = () => {
  //   setIsmodalSscAffinityOpen(false)
  //   document.body.style.overflow = 'auto'
  // }



  return (
    <>
      <div className='BlackHeds'>
        <h2>Research</h2>
      </div>
      <section className='WideContainer Fh Research'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
          To elevate Feline Health&apos;s website, I first analyzed competing veterinary clinics. This research revealed opportunities to improve the site with features like online appointment scheduling, client reviews/testimonials, and more engaging content. One of Feline Health&apos;s key advantages over competitors is its personal, hands-on approach, with Dr. Blair building strong relationships with both cats and their owners—something that traveling vets can&apos;t offer.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitve analysis swot</div>
            <button onClick={''} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            {hover ? <img className='magnifier' src={magBlk1H} alt={magBlk1H}
              /> : <img className='magnifier' src={magBlk1} alt={magBlk1}
              />}
            </button>
            <img
              className='competitive'
              src={competitive}
              alt={competitive}
            />
          </div>
        </div>
      </section>
      <section className='WideContainer bottom'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
          In addition to competitor research, I conducted five moderated Zoom research sessions, where I gained valuable insights into the needs and preferences of Feline Health&apos;s target users. The primary takeaways included:
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>100% of users prioritized easy-to-find clinic location and clear, intuitive navigation.</h5>
            </li>
            <li>
              <h5>Users wanted the ability to book appointments online and receive text reminders for visits.</h5>
            </li>
            <li>
              <h5>
              Proximity to the clinic was a key factor in choosing a veterinary provider.
              </h5>
            </li>
            <h5 className='h5 research'>
              <span className='leadin'>These insights helped me understand</span> what would truly engage users and improve their experience with the website.
              </h5>
          </ul>

          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <button onClick={''} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            {hover ? <img className='magnifier' src={magBlk1H} alt={magBlk1H}
              /> : <img className='magnifier' src={magBlk1} alt={magBlk1}
              />}
            </button>
          <img className='competitive' src={affinity_map} alt={affinity_map} />
          <h5 className='h5 marginTop'>
            <span className='leadin'>Marvin embodies a rising group </span>
             of conscientious pet owners who prioritize both quality veterinary care and cost-effectiveness, underscoring the demand for clear, accessible services that offer professional care at affordable prices, free from hidden fees or unnecessary complexity.
            </h5>
            </div>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>persona</div>
          </div>
          <img className='competitive persona' src={persona} alt={persona} />
        </div>
      </section>
      {/* <ModalSsc isOpen={ismodalSscOpen} modalSscClose={modalSscClose} />
      <ModalSscAffinity
        isOpen={ismodalSscAffinityOpen}
        modalSscClose={modalSscAffinityClose} */}
      {/* /> */}
    </>
  )
}
