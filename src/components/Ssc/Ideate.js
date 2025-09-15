import '../ReusableComponents.css'
import '../ReusableIdeate.css'
import ive_mood_resize from '../../assets/ssc/ive_mood.png'
// import ive_style from '../../assets/ssc/ive_style_resize.png'
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
          {/* <h5 className='h5 marginTop'>
            <span className='leadin'>Based on my research, </span> I determined
            the essential sections and features the website should incorporate:
          </h5> */}
          {/* <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>Intuitive navigation with search functionality</h5>
            </li>
            <li>
              <h5>
                Comprehensive product pages and user-friendly checkout process
              </h5>
            </li>
            <li>
              <h5>Company story and ingredient sourcing information</h5>
            </li>
            <li>
              <h5>User engagement elements: reviews, social media links</h5>
            </li>
            <li>
              <h5 className='leadin'>Updated branding and design elements</h5>
            </li>
          </ul> */}
          <h5 className='h5 dropCap'>
            {/* To set the visual direction, I created a mood board that blended the
            brand&apos;s Art Deco roots with clean, natural visuals. This
            preserved the heritage while signaling sustainability and trust. */}
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
                {/* <span className='leadin'>Based on my research, </span> I the
                essential sections and features the website should incorporate: */}
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
