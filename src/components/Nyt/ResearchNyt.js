import { useState } from 'react'
import '../ReusableComponents.css'
import '../ReusableResearch.css'
import magBlk1H from '../../assets/ssc/magBlk1H.png'
import magBlk1 from '../../assets/ssc/magBlk1.png'
// import competitive_sm from '../../assets/nyt/nyt_swot.png'
import competitive from '../../assets/nyt/nyt_ana.png'
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
      <section className='ResearchContainer'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            To begin the research, I compared four recipe platforms that
            approach serving size and meal planning differently. Yummly provided
            dynamic serving size adjustments and grocery list integration,
            though nutritional updates were inconsistent. RecipeTin Eats offered
            serving size adjustments at the ingredient level, but with no links
            to groceries or nutrition. Mob attracted younger audiences with
            quick, social-driven content, but lacked advanced features and
            serving size flexibility. Tasty stood out with engaging videos and a
            wide recipe base, yet had no built-in scaling, leaving users to
            guess adjustments.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitive analysis</div>
            <img className='competitive' src={competitive} alt={competitive} />
          </div>
        </div>
      </section>
      <section className='ResearchContainer bottom'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            In moderated research sessions with five participants, I explored
            how home cooks interact with recipe scaling features. Through
            affinity mapping, I found that users highly value accurate recipe
            scaling and want seamless integration with the NYT Cooking
            app&apos;s grocery list and nutritional information tools. Smart
            scaling capabilities that automatically adjust all recipe components
            would greatly enhance usability and improve the cooking experience.
            The following patterns highlight key user needs and expectations:
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>
                Recipe adjustments must update ingredient quantities, steps, and
                cooking times simultaneously.
              </h5>
            </li>
            <li>
              <h5>
                Serving size changes should automatically reflect in grocery
                lists to ensure accurate shopping.
              </h5>
            </li>
            <li>
              <h5>
                Visual cues for scaled recipes improve clarity and user
                confidence.
              </h5>
            </li>
            <li>
              <h5>
                Users value tools that support batch cooking, smaller portions,
                and dietary preferences.
              </h5>
            </li>
            <li>
              <h5>
                Automatic scaling features need to be fast, intuitive, and
                time-saving.
              </h5>
            </li>
          </ul>

          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <button
              onClick={modalNytAffinityOpen}
              onMouseOver={handleMouseIn}
              onMouseOut={handleMouseOut}
            >
              {hover ? (
                <img className='magnifier' src={magBlk1H} alt={magBlk1H} />
              ) : (
                <img className='magnifier' src={magBlk1} alt={magBlk1} />
              )}
            </button>
            <img
              className='competitive'
              src={affinity_map}
              alt={affinity_map}
            />
            <h5 className='h5 marginTop'>
              <span className='leadin'>Sarah is an empty nester </span>
              embracing her newfound time to explore cooking as a creative
              outlet. She seeks tools and inspiration that make scaling recipes,
              discovering unique ingredients, and learning new techniques both
              seamless and enjoyable.
            </h5>
          </div>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>persona</div>
          </div>
          <img className='competitive persona' src={persona} alt={persona} />
        </div>
      </section>
      <ModalNytAffinity
        isOpen={ismodalNytAffinityOpen}
        modalSscClose={modalNytAffinityClose}
      />
      <ModalNytCompSwot
        isOpen={ismodalNytSwotOpen}
        modalSscClose={modalNytSwotClose}
      />
    </>
  )
}
