import '../ReusableComponents.css'
import opener from '../../assets/nyt/home.png'
import recipe from '../../assets/nyt/recipe_serve.png'
import grocery from '../../assets/nyt/grocery_edit.png'

export const OpenerNytMobile = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' src={opener} alt={opener} />
        <img className='OpenerFoto' src={recipe} alt={recipe} />
        <img className='OpenerFoto' src={grocery} alt={grocery} />
      </div>
      <div className='textWrapper'>
        <h2 className='cases_openerText mobile'>
          The New York Times Cooking App
        </h2>
        <h5 className='h5 black opener'>
          is a subscription-based platform with over 110 million users accessing
          22,000+ recipes with personalized features and shopping lists.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <div className='InfoSection'>
            <div className='Button_website opener margin'>problem</div>
            <h5 className='h5 opener_text center'>
              The NYT Cooking app lacks a feature to adjust serving sizes,
              making making it difficult for users to scale recipes accurately.
              This can lead to errors, inconsistencies, and confusion during
              meal prep.
            </h5>
          </div>
          <div className='InfoSection'>
            <div className='Button_website opener margin'>solution</div>
            <h5 className='h5 opener_text center'>
              Introducing a serving size adjustment feature would automatically
              update ingredients, cooking times, instructions, and grocery lists
              in real-time, ensuring recipe accuracy and improving the overall
              cooking experience.
            </h5>
          </div>
          <div className='InfoSmall'>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>project</h6>
              <h5 className='h5 small opener mobile '>Add a Feature</h5>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>role</h6>
              <h5 className='h5 small opener mobile'>
                UX Researcher <br />
                UI Designer
              </h5>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener'>duration</h6>
              <h5 className='h5 small opener mobile'>4 Weeks</h5>
            </div>
            <div className='MobileSm'>
              <h6 className='h6 small opener '>tools</h6>
              <h5 className='h5 small opener mobile'>
                Figma <br />
                Photoshop
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
