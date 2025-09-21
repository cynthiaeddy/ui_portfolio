import '../ReusableComponents.css'
import '../ReusableResearch.css'
import affinity_map from '../../assets/ssc/affinity_ssc.png'
import doit from '../../assets/ssc/ssc_analysis.png'
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
            I began by analyzing sustainable e-commerce sites to understand how
            small-batch brands were presenting themselves online. I noticed some
            leaned on convenience and scale, while others focused on artisanal
            storytelling or eco-certifications. What stood out was the lack of
            balance between brand authenticity and shopping usability. That
            insight shaped the opportunity for SSC: a site that feels true to
            its roots while making sustainability proof easy to access.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitive analysis</div>
            <img className='competitive research' src={doit} alt={doit} />
          </div>
        </div>
        <div className='InnerContainer'>
          <h5 className='h5 marginTop'>
            <span className='leadin'>To understand user motivations</span> and
            shopping behavior, I conducted five interviews and organized
            feedback into an affinity map. Clear patterns emerged: users wanted
            proof of sustainability, preferred small/local businesses, and
            relied heavily on authentic reviews—insights that guided key design
            decisions.
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
              sustainable shopping, since she won&apos;t commit without clear
              proof of sustainability.
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
