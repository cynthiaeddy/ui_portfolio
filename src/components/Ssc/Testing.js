import '../ReusableComponents.css'
import '../ReusableTesting.css'
import home_new from '../../assets/ssc/home_mute.png'
import story from '../../assets/ssc/story.png'
import search from '../../assets/ssc/search.png'
import product from '../../assets/ssc/product.png'
import cart from '../../assets/ssc/cart.png'
import checkout from '../../assets/ssc/checkout.png'
import review from '../../assets/ssc/review.png'
import menu_1 from '../../assets/ssc/menu.png'

export const Testing = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer ssc'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            Moderated usability testing with 5 participants validated the
            redesign. Every participant rated the site 5/5 for usability, with
            scores of 98% for ease of use and 100% for checkout flow. While the
            purchasing process felt seamless, participants noted that
            sustainability information still needed more depth. Based on this, I
            planned refinements to strengthen transparency and clarity. <br />
            <br />
            <span className='leadin'>
              Moving forward, I implemented several iterations
            </span>{' '}
            to improve clarity and flow. Homepage icons now link to dedicated
            values sections, navigation was expanded, a cart page and empty
            state were added, and design details like button styles, field
            strokes, and subheads were standardized. These updates made the site
            feel more consistent and user-friendly.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iterations</div>
          </div>
          <div className='ssc_testing_new'>
            <img className='ssc ' src={home_new} alt={home_new} />
            <img className='ssc ' src={menu_1} alt={menu_1} />
          </div>
          <div className='ssc_testing_new'>
            <img className='ssc ' src={story} alt={story} />
            <img className='ssc ' src={search} alt={search} />
          </div>
          <div className='ssc_testing_new'>
            <img className='ssc ' src={product} alt={product} />
            <img className='ssc ' src={cart} alt={cart} />
          </div>
          <div className='ssc_testing_new last'>
            <img className='ssc checkout' src={checkout} alt={checkout} />
            <img className='ssc review' src={review} alt={review} />
          </div>
        </div>
      </section>
    </>
  )
}
