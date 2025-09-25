import '../ReusableComponents.css'
import '../ReusableResearch.css'
import competitive from '../../assets/nyt/nyt_ana.png'
import affinity_map from '../../assets/nyt/nyt_affinity.png'
import affinity_map_mobile from '../../assets/nyt/affinity_nyt_mobile.png'
import persona from '../../assets/nyt/nyt_persona.png'

export const ResearchNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Research</h2>
      </div>
      <section className='ResearchContainer nyt'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            I started by looking at how recipe platforms approached serving size
            and meal planning. Some offered dynamic adjustments with grocery
            integrations, while others only allowed scaling at the ingredient
            level. Many leaned on video content or large recipe libraries but
            lacked flexibility for real-world cooking needs. From this, I saw an
            opportunity for NYT Cooking to blend its trusted editorial voice
            with tools that empower users—like serving-size adjustment and
            smarter grocery support.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitive analysis</div>
            <img className='competitive' src={competitive} alt={competitive} />
          </div>
        </div>
        <div className='InnerContainer'>
          <h5 className='h5 marginTop'>
            <span className='leadin'>To explore how home cooks interact </span>
            with recipe scaling, I ran five moderated research sessions and
            organized feedback into an affinity map. Clear patterns emerged:
            users valued accurate recipe adjustments, expected grocery lists and
            nutritional data to update automatically, and looked for visual cues
            to build confidence. They also wanted flexibility for batch cooking
            or smaller portions, and emphasized that scaling should be fast,
            intuitive, and time-saving—insights that guided the feature design.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <picture>
              <source media='(max-width: 479px)' srcSet={affinity_map_mobile} />
              <source media='(min-width: 480px)' srcSet={affinity_map} />
              <img
                className='competitive affinity'
                src={affinity_map}
                alt='Affinity map'
                loading='lazy'
              />
            </picture>
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
    </>
  )
}
