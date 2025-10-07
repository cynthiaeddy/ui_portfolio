import '../ReusableComponents.css'
import '../ReusableResearch.css'
import affinity_map_mobile from '../../assets/ssc/affinity_ssc_mobile.png'
import affinity_map from '../../assets/ssc/affinity_ssc.png'
import doit from '../../assets/ssc/ssc_analysis.png'
import analysis_mobile from '../../assets/ssc/analysis_mobile_ssc.png'
import persona from '../../assets/ssc/ive_persona.png'

export const Research = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Research</h2>
      </div>
      <section className='ResearchContainer ssc'>
        <div className='InnerContainer'>
          <h4 className='h4 dropCap'>
            I began by analyzing sustainable e-commerce sites to understand how
            small-batch brands were presenting themselves online. I noticed some
            leaned on convenience and scale, while others focused on artisanal
            storytelling or eco-certifications. What stood out was the lack of
            balance between brand authenticity and shopping usability. That
            insight shaped the opportunity for SSC: a site that feels true to
            its roots while making sustainability proof easy to access.
          </h4>
          <div className='ButtonContainer'>
            <div className='Button enlarge ssc_research'>
              competitive analysis
            </div>
            <picture>
              <source media='(max-width: 479px)' srcSet={analysis_mobile} />
              <source media='(min-width: 480px)' srcSet={doit} />
              <img
                className='competitive affinity ssc'
                src={doit}
                alt='Affinity map'
                loading='lazy'
              />
            </picture>
          </div>
        </div>
        <div className='InnerContainer'>
          <h4 className='h4 marginTop'>
            <span className='leadin'>To understand user motivations</span> and
            shopping behavior, I conducted five interviews and organized
            feedback into an affinity map. Clear patterns emerged: users wanted
            proof of sustainability, preferred small/local businesses, and
            relied heavily on authentic reviews—insights that guided key design
            decisions.
          </h4>

          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <picture>
              <source media='(max-width: 479px)' srcSet={affinity_map_mobile} />
              <source media='(min-width: 480px)' srcSet={affinity_map} />
              <img
                className='competitive affinity'
                src={affinity_map}
                alt='Affinity map'
                loading='lazy'
              />
            </picture>
            <h4 className='h4 marginTop'>
              <span className='leadin'> Emma represents the insights </span>
              from my research: an eco-conscious, research-driven shopper who
              values small-batch brands and expects both quality and
              convenience. She highlights the need for better transparency in
              sustainable shopping, since she won&apos;t commit without clear
              proof of sustainability.
            </h4>
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
