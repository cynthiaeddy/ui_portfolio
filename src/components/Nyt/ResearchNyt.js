/* eslint-disable prettier/prettier */
import { useState } from 'react'
import '../ReusableComponents.css'
import magBlk1H from '../../assets/ssc/magBlk1H.png'
import magBlk1 from '../../assets/ssc/magBlk1.png'
import competitive_sm from '../../assets/nyt/nyt_swot.png'
import affinity_map from '../../assets/nyt/nyt_affinity_crop.png'
import persona from '../../assets/nyt/nyt_persona.png'
import { ModalNytCompSwot } from '../Modals/ModalNytCompSwot'
import { ModalNytAffinity } from '../Modals/ModalNytAffinity'

export const ResearchNyt = () => {
  const [ismodalNytSwotOpen, setIsmodalNytSwotOpen] = useState(false)
  const [ismodalNytAffinityOpen, setIsmodalNytAffinityOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const handleMouseIn = () => {
    setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }


  const modalNytSwotOpen = () => {
    setIsmodalNytSwotOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const modalNytSwotClose = () => {
    setIsmodalNytSwotOpen(false)
    document.body.style.overflow = 'auto'
  }
  const modalNytAffinityOpen = () => {
    setIsmodalNytAffinityOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const modalNytAffinityClose = () => {
    setIsmodalNytAffinityOpen(false)
    document.body.style.overflow = 'auto'
  }



  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Research</h2>
      </div>
      <section className='WideContainer nyt research'>
        <div className='InnerContainer cases nyt'>
          <h5 className='h5 dropCap'>
          Through competitive research of recipe platforms, I identified an opportunity to enhance the NYT Cooking app with dynamic serving size adjustment that would automatically recalculate ingredients, grocery lists, and nutritional information proportionally.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitve analysis swot</div>
            <button onClick={modalNytSwotOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            {hover ? <img className='magnifier' src={magBlk1H} alt={magBlk1H}
              /> : <img className='magnifier' src={magBlk1} alt={magBlk1}
              />}
            </button>
            <img
              className='competitive'
              src={competitive_sm}
              alt={competitive_sm}
            />
          </div>
        </div>
      </section>
      <section className='WideContainer bottom'>
        <div className='InnerContainer cases'>
          <h5 className='h5 dropCap'>
          In moderated research sessions with five participants, I explored how home cooks interact with recipe scaling features. Through affinity mapping, I found that users highly value accurate recipe scaling and want seamless integration with the NYT Cooking app&apos;s grocery list and nutritional information tools. Smart scaling capabilities that automatically adjust all recipe components would greatly enhance usability and improve the cooking experience. The following patterns highlight key user needs and expectations:
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>Recipe adjustments must update ingredient quantities, steps, and cooking times simultaneously.</h5>
            </li>
            <li>
              <h5>Serving size changes should automatically reflect in grocery lists to ensure accurate shopping.</h5>
            </li>
            <li>
              <h5>
              Visual cues for scaled recipes improve clarity and user confidence.
              </h5>
            </li>
            <li>
              <h5>
              Users value tools that support batch cooking, smaller portions, and dietary preferences.
              </h5>
            </li>
            <li>
              <h5>
              Automatic scaling features need to be fast, intuitive, and time-saving.
              </h5>
            </li>
          </ul>

          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <button onClick={modalNytAffinityOpen} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            {hover ? <img className='magnifier' src={magBlk1H} alt={magBlk1H}
              /> : <img className='magnifier' src={magBlk1} alt={magBlk1}
              />}
            </button>
          <img className='competitive' src={affinity_map} alt={affinity_map} />
          <h5 className='h5 marginTop'>
            <span className='leadin'>Sarah is an empty nester </span>
             embracing her newfound time to explore cooking as a creative outlet. She seeks tools and inspiration that make scaling recipes, discovering unique ingredients, and learning new techniques both seamless and enjoyable.
            </h5>
            </div>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>persona</div>
          </div>
          <img className='competitive persona' src={persona} alt={persona} />
        </div>
      </section>
       <ModalNytAffinity isOpen={ismodalNytAffinityOpen} modalSscClose={modalNytAffinityClose} />
      <ModalNytCompSwot
        isOpen={ismodalNytSwotOpen}
        modalSscClose={modalNytSwotClose}
      />
    </>
  )
}
