import '../ReusableComponents.css'
import triple_nyt from '../../assets/nyt/triple_nyt4.png'

export const OpenerNytMobile = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' src={triple_nyt} alt={triple_nyt} />
      </div>
      <div className='textWrapper'>
        <h2 className='cases_openerText mobile'>NYT Cooking App (concept)</h2>
        <h4 className='h4 black opener'>
          A concept project adding a serving size adjustment feature to the NYT
          Cooking app, improving recipe accuracy, grocery lists, and meal prep.
        </h4>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <div className='InfoSection'>
            <div className='Button enlarge opener'>problem</div>
            <h4 className='h4 opener_text center'>
              The app lacks a serving size adjustment feature, making it
              difficult for users to scale recipes accurately. This leads to
              errors, inconsistencies, and confusion during meal prep. Without
              automatic updates to grocery lists and nutritional info, the
              experience feels incomplete.
            </h4>
          </div>
          <div className='InfoSection'>
            <div className='Button enlarge opener'>solution</div>
            <h4 className='h4 opener_text center'>
              I designed a serving size adjustment feature that automatically
              recalculates ingredients, cooking times, instructions, and grocery
              lists in real time — ensuring recipe accuracy and improving the
              overall cooking experience.
            </h4>
          </div>
          <div className='InfoSmall'>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>project</h6>
              <h4 className='h4 small opener mobile '>Add a Feature</h4>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>role</h6>
              <h4 className='h4 small opener mobile'>
                UX Researcher <br />
                UI Designer
              </h4>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>duration</h6>
              <h4 className='h4 small opener mobile'>4 Weeks</h4>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener '>tools</h6>
              <h4 className='h4 small opener mobile'>
                Figma <br />
                Photoshop
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
