import '../ReusableComponents.css'
import '../ReusableIdeate.css'
import ive_mood_resize from '../../assets/ssc/ive_mood.png'
import lo_fi from '../../assets/ssc/ive_mid_fi.png'
import user_flow from '../../assets/ssc/ssc_user_flow2.png'
export const Ideate = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Ideate</h2>
      </div>
      <section className='IdeateContainer ssc'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            To set the visual direction, I created a mood board that blended the
            brand&apos;s Art Deco roots with clean, natural visuals. Earthy
            tones and ingredient-focused imagery signaled sustainability, while
            clean layouts and authentic textures built a sense of trust.
            Together, these elements defined the typography, color, and imagery
            that carried through the redesign.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>mood board</div>
            <img
              className='competitive mood'
              src={ive_mood_resize}
              alt={ive_mood_resize}
            />
            <div className='ButtonContainer ideate'>
              <h5 className='h5 marginTop'>
                <span className='leadin'>I mapped the key journey </span>
                from homepage → product discovery → checkout. The focus was on
                simplifying decisions and making sustainability info and reviews
                easy to find.
              </h5>
              <div className='Button enlarge style'>user flow</div>
              <img
                className='competitive style'
                src={user_flow}
                alt={user_flow}
              />
            </div>
            <div className='ButtonContainer lo_fi'>
              <h5 className='h5 marginTop'>
                <span className='leadin'>
                  I created low fidelity wireframes{' '}
                </span>
                in Figma and ran moderated testing with 5 participants. Their
                tasks included exploring the homepage and purchasing the vegan
                soap. 100% of participants completed the tasks without errors
                and found the navigation intuitive, though they suggested
                enlarging the hamburger menu and making product reviews easier
                to access.
              </h5>

              <div className='Button enlarge ideate'>low fidelity</div>
              <img className='competitive ideate' src={lo_fi} alt={lo_fi} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
