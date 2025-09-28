import '../ReusableComponents.css'
import '../ReusableDesign.css'
import ive_style_resize from '../../assets/ssc/ssc_brand.png'
import hiFi from '../../assets/ssc/hifi_crop.jpg'

export const Design = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Design</h2>
      </div>
      <section className='DesignContainer ssc'>
        <h5 className='h5 black dropCap design'>
          I refined typography, colors, and logo lockups to modernize the look
          while keeping the brand&apos;s Art Deco character intact. I also
          created a new logo that worked seamlessly with existing brand assets,
          making the identity feel updated without losing recognition. A muted,
          nature-inspired palette reinforced sustainability, while consistent
          use of type and iconography built trust through clarity and cohesion.
          Together, these system elements ensured the redesigned site felt both
          authentic to the brand and seamless for the user.
        </h5>
        <div className='ButtonContainer ssc'>
          <div className='Button enlarge white no_margin'>branding</div>
          <img
            className='competitive flow'
            src={ive_style_resize}
            alt={ive_style_resize}
          />
        </div>
        <h5 className='h5 black design'>
          <span className='leadin black'>In Figma, I translated </span>the
          design system into high fidelity wireframes that unified the brand
          story with user needs. Navigation was expanded for clarity, a
          dedicated sustainability section and ingredient glossary were added,
          and a standalone reviews page highlighted authentic feedback.
          <br />
          The checkout flow was simplified into a two-step process (shipping →
          payment), followed by order review and confirmation. Progress
          indicators, cleaner forms, and express options like Apple Pay and
          PayPal made checkout faster and easier for users.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white'>high fidelity wireframes</div>
          <img className='competitive hi_fi' src={hiFi} alt={hiFi} />
        </div>
      </section>
    </>
  )
}
