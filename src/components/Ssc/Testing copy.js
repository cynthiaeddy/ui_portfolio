import '../ReusableComponents.css'
import '../ReusableTesting.css'
import home_new from '../../assets/ssc/iterations/home_mute.png'
import story from '../../assets/ssc/iterations/story.png'
import search from '../../assets/ssc/iterations/search.png'
import product from '../../assets/ssc/iterations/product.png'
import cart from '../../assets/ssc/iterations/cart.png'
import checkout from '../../assets/ssc/iterations/checkout.png'
import review from '../../assets/ssc/iterations/review.png'
import menu_1 from '../../assets/ssc/iterations/menu.png'

export const Testing = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer ssc'>
        <div className='InnerContainer'>
          <h4 className='h4 dropCap'>
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
          </h4>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iterations</div>
          </div>
          <div className='ssc_testing_new'>
            <img className='ssc ' src={home_new} alt={home_new} />
            <img className='ssc two' src={menu_1} alt={menu_1} />
          </div>
          <div className='ssc_testing_new'>
            <img className='ssc ' src={story} alt={story} />
            <img className='ssc two search' src={search} alt={search} />
          </div>
          <div className='ssc_testing_new'>
            <img className='ssc two product' src={product} alt={product} />
            <img className='ssc cart' src={cart} alt={cart} />
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
