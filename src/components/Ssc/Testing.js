import '../ReusableComponents.css'
import '../ReusableTesting.css'
import home_new from '../../assets/ssc/carousel/ssc_home.png'
import story from '../../assets/ssc/carousel/ssc_story1.png'
import search from '../../assets/ssc/carousel/ssc_search1.png'
import product from '../../assets/ssc/carousel/ssc_product1.png'
import cart from '../../assets/ssc/carousel/ssc_cart1.png'
import checkout from '../../assets/ssc/carousel/ssc_checkout1.png'
import review from '../../assets/ssc/carousel/ssc_review1.png'
import menu_1 from '../../assets/ssc/carousel/ssc_menu_1.png'

export const Testing = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer ssc'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            The moderated testing of the high-fidelity wireframes involved five
            participants who evaluated the site&apos;s usability and design
            enhancements. All participants rated the site a perfect 5 out of 5
            for ease of use, finding the purchasing process intuitive and the
            navigation straightforward. However, some users noted that the
            sustainability information felt vague and suggested adding a
            dedicated page to clarify the company&apos;s practices. Overall, the
            site scored 98% for ease of use and 100% for checkout flow. <br />
            <br />
            <span className='leadin'>
              Moving forward, I implemented several iterations,
            </span>{' '}
            including adding dropdown menus, enhancing the sustainability
            section, and making icons more interactive to improve the user
            experience and strengthen the brand message.
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
