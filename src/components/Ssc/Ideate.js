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
          <h5 className='h5 marginTop'>
            <span className='leadin'>Based on my research, </span> I determined
            the essential sections and features the website should incorporate:
          </h5>
          <ul className='h5 bullets'>
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
          </ul>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>mood board</div>
            <img
              className='competitive mood'
              src={ive_mood_resize}
              alt={ive_mood_resize}
            />
            <div className='ButtonContainer'>
              <h5 className='h5 marginTop'>
                <span className='leadin'>Based on my research, </span> I the
                essential sections and features the website should incorporate:
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
                <h5 className='h5 dropCap'>
                  In moderated testing of the low-fidelity wireframes, 5
                  participants completed their tasks of exploring the homepage,
                  purchasing the vegan soap and accessing information about the
                  company&apos;s sustainability practices and product usage. All
                  five users succeeded without errors and found the navigation
                  intuitive, though they suggested increasing the hamburger menu
                  size and improving access to product reviews. <br /> <br />{' '}
                  Next steps for the high-fidelity wireframes:{' '}
                </h5>
              </h5>
              <div className='Button enlarge ideate'>lo fi</div>
              <img className='competitive ideate' src={lo_fi} alt={lo_fi} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
