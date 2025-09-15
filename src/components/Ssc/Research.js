import '../ReusableComponents.css'
import '../ReusableResearch.css'
import affinity_map from '../../assets/ssc/Group 361.png'
import doit from '../../assets/ssc/Frame 88.png'
import persona from '../../assets/ssc/ive_persona.png'

export const Research = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Research</h2>
      </div>
      <section className='ResearchContainer ssc'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            Kicking off the research, I compared three sustainable soap brands
            with overlapping markets. The Handmade Soap Company showed the most
            polish, with strong branding, product photography, and a broad line,
            though navigation felt cluttered. Idaho Soap Company had consistent
            branding and easy navigation but a limited range and simpler site.
            Small Batch Soapery offered unique, artisan products, yet the
            website suffered from broken links, confusing navigation, and
            inconsistent branding, with only light emphasis on sustainability.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitive analysis</div>
            <img className='competitive research' src={doit} alt={doit} />
          </div>
        </div>
        <div className='InnerContainer'>
          <h5 className='h5 marginTop'>
            <span className='leadin'>To understand user motivations</span> and
            shopping behavior, I conducted interviews and organized feedback
            into an affinity map. Clear patterns emerged: users wanted proof of
            sustainability, preferred small/local businesses, and relied heavily
            on authentic reviews—insights that guided key design decisions.
          </h5>

          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <img
              className='competitive affinity'
              src={affinity_map}
              alt={affinity_map}
            />
            <h5 className='h5 marginTop'>
              <span className='leadin'> Emma represents the insights </span>
              from my research: an eco-conscious, research-driven shopper who
              values small-batch brands and expects both quality and
              convenience. She highlights the need for better transparency in
              sustainable shopping, since she won&apos;’t commit without clear
              without clear proof of sustainability. d
            </h5>
          </div>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>persona</div>
          </div>
          <img className='competitive persona' src={persona} alt={persona} />
        </div>
      </section>
    </>
  )
}
