import './ReusableComponents.css'
// import mag_wh from '../../../assets/ssc/mag_white.png'
import mag_blk from '../../../assets/ssc/mag_blk.png'
import competitive_sm from '../../../assets/ssc/competitive_sm.png'
import affinity_map from '../../../assets/ssc/ive_affinity_mapsm.png'
import persona from '../../../assets/ssc/ive_persona.png'

export const Research = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2>Research</h2>
      </div>
      <section className='WideContainer '>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            To kick off the research phase, I conducted an in-depth analysis of
            competing sustainable soap brands. The focus was to uncover what
            sets Sustainable Soap Co. apart and identify ways to showcase their
            commitment to eco-conscious practices through refined, distinctive
            branding.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitve analysis swot</div>
            <img className='magnifier' src={mag_blk} alt={mag_blk} />
          </div>
          <img
            className='competitive'
            src={competitive_sm}
            alt={competitive_sm}
          />
          <h5 className='h5 leadins'>
            <span className='leadin'>From the competitive analysis,</span> I
            learned that while many sustainable soap brands focus on
            eco-friendly values and high-quality, handcrafted products, there
            are clear opportunities for Sustainable Soap Co. to stand out.
            Customers are increasingly drawn to small, artisan businesses that
            prioritize local sourcing and sustainability, and by strengthening
            Sustainable Soap Co.&apos;s brand story and visual appeal, we can
            better reflect the quality of their products and create a stronger
            connection with their audience. <br />
            <br />
            <span className='leadin'>
              Competitors also have inconsistent
            </span>{' '}
            branding and poor site navigation, presenting an opportunity for us
            to improve user experience by refining Sustainable Soap Co.&apos;s
            design and making features like product reviews and search
            functionality more visible.
          </h5>
        </div>
      </section>
      <section className='WideContainer bottom'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            I conducted five moderated research sessions via Zoom to explore how
            users approach sustainable shopping decisions. Using affinity
            mapping to organize the findings, key insights emerged: users are
            methodical researchers who prioritize verified information and
            transparency. They show strong preference for small businesses over
            large retailers, consistently seek detailed product information, and
            rely heavily on authentic reviews. Users value personal
            recommendations and direct brand relationships throughout their
            shopping journey. From these insights, five distinct patterns
            emerged in how users approach sustainable shopping:
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>Thorough product research and verification purchasing</h5>
            </li>
            <li>
              <h5>Small business preference and direct brand relationships</h5>
            </li>
            <li>
              <h5>
                Detailed ingredient and manufacturing process investigation
              </h5>
            </li>
            <li>
              <h5>
                Reliance on authentic reviews and community recommendations
              </h5>
            </li>
            <li>
              <h5>
                Need for clear sustainability documentation and verification
              </h5>
            </li>
          </ul>

          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <img className='magnifier' src={mag_blk} alt={mag_blk} />
          </div>
          <img className='competitive' src={affinity_map} alt={affinity_map} />
          <div className='ButtonContainer persona'>
            <div className='Button enlarge'>persona</div>
          </div>
          <img className='competitive persona' src={persona} alt={persona} />
        </div>
      </section>
    </>
  )
}
