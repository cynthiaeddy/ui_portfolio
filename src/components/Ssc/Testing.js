import '../ReusableComponents.css'
import '../ReusableTesting.css'
import home_new from '../../assets/ssc/new_iterations/home.png'
import story from '../../assets/ssc/new_iterations/values.png'
import search from '../../assets/ssc/new_iterations/search.png'
import product from '../../assets/ssc/new_iterations/products.png'
import cart from '../../assets/ssc/new_iterations/cart.png'
import checkout from '../../assets/ssc/new_iterations/checkout.png'
import review from '../../assets/ssc/new_iterations/review.png'
import menu_1 from '../../assets/ssc/new_iterations/menu.png'

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
            <div className='iteration_container'>
              <img className='ssc ' src={home_new} alt={home_new} />
              <h5>
                Each icon goes to it&apos;s own section on Our Values page when
                clicked
              </h5>
            </div>
            <div className='iteration_container bottom'>
              <img className='ssc two' src={menu_1} alt={menu_1} />
              <h5>
                About Us navigation expanded into a drodown with two subpages
              </h5>
            </div>
          </div>
          <div className='ssc_testing_new'>
            <div className='iteration_container'>
              <img className='ssc ' src={story} alt={story} />
              <h5>
                My Story and Our Values are now separate pages, with social
                links on My Story and &quot;learn more&quot; links on Our Values
              </h5>
            </div>
            <div className='iteration_container bottom'>
              <img className='ssc two search' src={search} alt={search} />
              <h5>
                Search field restyled, trending labels refined, and product
                cards updated for consistency
              </h5>
            </div>
          </div>
          <div className='ssc_testing_new'>
            <div className='iteration_container'>
              <img className='ssc two product' src={product} alt={product} />
              <h5>
                Continue shopping button added to Product page for smoother
                browsing
              </h5>
            </div>
            <div className='iteration_container bottom'>
              <img className='ssc cart' src={cart} alt={cart} />
              <h5>Added item count indicator and empty cart state</h5>
            </div>
          </div>
          <div className='ssc_testing_new'>
            <div className='iteration_container'>
              <img className='ssc two' src={checkout} alt={checkout} />
              <h5>Input fields restyled with gold strokes for consistency</h5>
            </div>
            <div className='iteration_container bottom last'>
              <img className='ssc two' src={review} alt={review} />
              <h5>Subheads update for consistent hierachy and clarity</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
