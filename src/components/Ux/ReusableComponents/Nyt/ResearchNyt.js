/* eslint-disable prettier/prettier */
import { useState } from 'react'
import './../ReusableComponents.css'
import magBlk1H from '../../../../assets/ssc/magBlk1H.png'
import magBlk1 from '../../../../assets/ssc/magBlk1.png'
import competitive_sm from '../../../../assets/nyt/nyt_swot.png'
import affinity_map from '../../../../assets/ssc/ive_affinity_mapsm.png'
import persona from '../../../../assets/ssc/ive_persona.png'
// import { ModalSsc } from '../Modals/ModalSsc'
// import { ModalSscAffinity } from '../Modals/ModalSscAffinity'

export const ResearchNyt = () => {
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
      <section className='WideContainer '>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
          Through competitive research of recipe platforms, I identified an opportunity to enhance the NYT Cooking app with dynamic serving size adjustment that would automatically recalculate ingredients, grocery lists, and nutritional information proportionally.
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
              src={competitive_sm}
              alt={competitive_sm}
            />

            <h5 className='h5 leadins'>
              <span className='leadin'>From the competitive analysis,</span> I
              learned that while many sustainable soap brands focus on
              eco-friendly values and high-quality, handcrafted products, there
              are clear opportunities for Sustainable Soap Co. to stand out.
              Customers are increasingly drawn to small, artisan businesses that
              prioritize local sourcing and sustainability, and by strengthening
              Sustainable Soap Co.&apos;s brand story and visual appeal, we can
              better reflect the quality of their products and create a stronger
              connection with their audience. <br />
              <br />
              <span className='leadin'>
                Competitors also have inconsistent
              </span>{' '}
              branding and poor site navigation, presenting an opportunity for
              us to improve user experience by refining Sustainable Soap
              Co.&apos;s design and making features like product reviews and
              search functionality more visible.
            </h5>
          </div>
        </div>
      </section>
      <section className='WideContainer bottom'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            I conducted five moderated research sessions via Zoom to explore how
            users approach sustainable shopping decisions. Using affinity
            mapping to organize the findings, key insights emerged: users are
            methodical researchers who prioritize verified information and
            transparency. They show strong preference for small businesses over
            large retailers, consistently seek detailed product information, and
            rely heavily on authentic reviews. Users value personal
            recommendations and direct brand relationships throughout their
            shopping journey. From these insights, five distinct patterns
            emerged in how users approach sustainable shopping:
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>Thorough product research and verification purchasing</h5>
            </li>
            <li>
              <h5>Small business preference and direct brand relationships</h5>
            </li>
            <li>
              <h5>
                Detailed ingredient and manufacturing process investigation
              </h5>
            </li>
            <li>
              <h5>
                Reliance on authentic reviews and community recommendations
              </h5>
            </li>
            <li>
              <h5>
                Need for clear sustainability documentation and verification
              </h5>
            </li>
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
            <span className='leadin'>Emma represents a growing segment </span>
            of eco-conscious consumers who want to make sustainable choices
            while maintaining quality and convenience, highlighting the need for
            better transparency in sustainable shopping.
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
        modalSscClose={modalSscAffinityClose}
      /> */}
    </>
  )
}
