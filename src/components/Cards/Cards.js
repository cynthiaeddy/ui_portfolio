import { Link } from 'react-router-dom'
import james_desktop from '../../assets/opener_cards/james_combine.png'
import ssc from '../../assets/opener_cards/soaptriad.png'
import wh from '../../assets/opener_cards/whcombine.png'
import nyt from '../../assets/opener_cards/nyt_triad.png'
import './Cards.css'
import fhd from '../../assets/opener_cards/fh_combine.png'
import './Cards.css'
import './Cards.css'
import singles from '../../assets/opener_cards/singles_5.png'
import './Cards.css'
export const Cards = () => {
  return (
    <>
      <section className='CardContainerHome'>
        <Link to='/work/ssc' className='IndieCard'>
          <img className='CardImageHome ssc' src={ssc} alt={ssc} />
          <div className='CardDek'>
            <h2 className='Card_hed'>Sustainable Soap Co.</h2>
            <div className='hed_and_blurb'>
              <h6 className='Card_blurb'>mobile ux/ui design</h6>
              <p className='Card_p'>
                End to end redesign of a e-commerce website refining user
                experience and brand identity.
              </p>
            </div>
            <button className='Button_website'>view</button>
          </div>
        </Link>
        <Link to='https://www.jamesoseland.com' className='IndieCard'>
          <img
            className='CardImageHome'
            src={james_desktop}
            alt={james_desktop}
          />
          <div className='CardDek'>
            <h2 className='Card_hed'>World Food</h2>
            <div className='hed_and_blurb'>
              <h6 className='Card_blurb'>
                responsive UI design/software development
              </h6>
              <p className='Card_p'>
                End to end project designed and built for James Oseland&apos;s
                World Food book series.
              </p>
            </div>
            <button className='Button_website'>view</button>
          </div>
        </Link>
        <Link to='/work/wh' className='IndieCard'>
          <img className='CardImageHome wh' src={wh} alt={wh} />
          <div className='CardDek'>
            <h2 className='Card_hed'>Women&apos;s Health</h2>
            <div className='hed_and_blurb'>
              <h6 className='Card_blurb'>mobile and tablet ui design</h6>
              <p className='Card_p'>
                UI design lead for digital publications, optimizing engagement
                through user-centered layouts and dynamic digital content.
              </p>
            </div>
            <button className='Button_website'>view</button>
          </div>
        </Link>
        <Link to='/work/nyt' className='IndieCard'>
          <img className='CardImageHome nyt' src={nyt} alt={nyt} />
          <div className='CardDek'>
            <h2 className='Card_hed'>New York Times Cooking App</h2>
            <div className='hed_and_blurb'>
              <h6 className='Card_blurb'>mobile Ux/Ui design</h6>
              <p className='Card_p'>
                Add a feature project which enables users to adjust a
                recipe&apos;s serving size.
              </p>
            </div>
            <button className='Button_website'>view</button>
          </div>
        </Link>
        <Link to='/work/fh' className='IndieCard'>
          <img className='CardImageHome jamesdt' src={fhd} alt={fhd} />
          <div className='CardDek'>
            <h2 className='Card_hed'>Feline Health</h2>
            <div className='hed_and_blurb'>
              <h6 className='Card_blurb'>responsive ux/ui design</h6>
              <p className='Card_p'>
                Responsive redesign of a veterinary clinic website, enhancing
                experience and functionality.
              </p>
            </div>
            <button className='Button_website'>view</button>
          </div>
        </Link>
        <Link to='/work/editorial' className='IndieCard'>
          <img className='CardImageHome jamesdt' src={singles} alt={singles} />
          <div className='CardDek'>
            <h2 className='Card_hed'>Editorial Design</h2>
            <div className='hed_and_blurb'>
              <h6 className='Card_blurb'>
                Layout, typography, storytelling
                {/* Layout, typography, and visual storytelling */}
              </h6>
              <p className='Card_p'>
                Editorial design for multiple print publications, blending
                content, structure, and visual flow.
              </p>
            </div>
            <button className='Button_website'>view</button>
          </div>
        </Link>
      </section>
    </>
  )
}
