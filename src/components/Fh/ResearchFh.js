import '../ReusableComponents.css'
import '../ReusableResearch.css'
import competitive from '../../assets/fh/feline_analysis.png'
import affinity_map from '../../assets/fh/fh_affinity.png'
import affinity_map_mobile from '../../assets/fh/affinity_fh_mobile.png'
import persona from '../../assets/fh/feline_health_persona.png'

export const ResearchFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Research</h2>
      </div>
      <section className='ResearchContainer fh'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap'>
            I kicked off research with a competitive analysis of local
            veterinary websites to see where Feline Health fit. Larger practices
            emphasized convenience and extended services, membership-based
            clinics leaned into tech-driven access, and smaller practices built
            trust through transparency and personal care. What stood out was the
            unique strength of Feline Health as a one-doctor practice—personal,
            consistent, and trusted. The opportunity was to bring that same
            warmth online while adding modern usability features like online
            booking.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>competitive analysis</div>
            <img
              className='competitive research_fh '
              src={competitive}
              alt={competitive}
            />
          </div>
        </div>
        <div className='InnerContainer'>
          <h5 className='h5 marginTop'>
            <span className='leadin'>To understand user motivations </span> and
            pain points around veterinary care, I conducted five interviews and
            organized feedback into an affinity map. Clear patterns emerged:
            users wanted clinic details upfront, preferred text reminders for
            appointments, and valued transparency from a one-doctor
            practice—insights that directly shaped design priorities.
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>affinity mapping</div>
            <picture>
              <source media='(max-width: 479px)' srcSet={affinity_map_mobile} />
              <source media='(min-width: 480px)' srcSet={affinity_map} />
              <img
                className='competitive  affinity_fh'
                src={affinity_map}
                alt='Affinity map'
                loading='lazy'
              />
            </picture>
            <h5 className='h5 marginTop'>
              <span className='leadin'>Marvin embodies a rising group </span>
              of conscientious pet owners who prioritize both quality veterinary
              care and cost-effectiveness, underscoring the demand for clear,
              accessible services that offer professional care at affordable
              prices, free from hidden fees or unnecessary complexity.
            </h5>
          </div>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>persona</div>
          </div>
          <img className='competitive persona_fh' src={persona} alt={persona} />
        </div>
      </section>
    </>
  )
}
