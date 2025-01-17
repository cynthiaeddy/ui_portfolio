import '../ReusableComponents.css'
import ive_mood_resize from '../../assets/ssc/ive_mood.png'
import ive_style from '../../assets/ssc/ive_style_resize.png'

export const Ideate = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Ideate</h2>
      </div>
      <section className='WideContainer ideate ssc'>
        <div className='InnerContainer cases'>
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
            <img className='mood' src={ive_mood_resize} alt={ive_mood_resize} />
            <div className='ButtonContainer'>
              <div className='Button enlarge'>style tile</div>
              <img
                className='competitive style'
                src={ive_style}
                alt={ive_style}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
