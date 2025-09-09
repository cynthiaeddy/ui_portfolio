import '../ReusableComponents.css'
import '../ReusableDesign.css'
import ive_style_resize from '../../assets/ssc/ive_style_resize.png'
import hiFi from '../../assets/ssc/hifi_crop.jpg'

export const Design = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Design</h2>
      </div>
      <section className='DesignContainer ssc'>
        <h5 className='h5 black center'>
          <span className='leadin black'>
            After determining the project&apos;s key objectives,{' '}
          </span>{' '}
          I created a user flow to purchase a product emphasizing on intuitive
          navigation and search functionality.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white no_margin'>design system</div>
          <img
            className='competitive flow'
            src={ive_style_resize}
            alt={ive_style_resize}
          />
        </div>
        <div className='divider_curved top'></div>
        <div className='divider_curved_down'></div>
        <h5 className='h5 dropCap black too'>
          In moderated testing of the low-fidelity wireframes, 5 participants
          completed their tasks of exploring the homepage, purchasing the vegan
          soap and accessing information about the company&apos;s sustainability
          practices and product usage. All five users succeeded without errors
          and found the navigation intuitive, though they suggested increasing
          the hamburger menu size and improving access to product reviews.{' '}
          <br /> <br /> Next steps for the high-fidelity wireframes:{' '}
        </h5>
        <ul className='h5 bullets'>
          <li className='first_li_research black'>
            <h5 className='h5 black'>
              Expanding the navigation bar and detailing sustainability
              practices via new pages of an ingredients glossary and reviews to
              enhance transparency and user satisfaction.
            </h5>
          </li>
          <li className='black'>
            <h5 className='h5 black'>
              {' '}
              Art deco branding theme was already established. The new logo and
              branding echo and coexist with old in order for it to be updated
              seamlessly and cohesively, while making the brand more distinct
              and emphasizing sustainability again in the tagline.
            </h5>
          </li>
        </ul>
        <div className='ButtonContainer'>
          <div className='Button enlarge white'>high fidelity wireframes</div>
          <img className='competitive hi_fi' src={hiFi} alt={hiFi} />
        </div>
      </section>
    </>
  )
}
