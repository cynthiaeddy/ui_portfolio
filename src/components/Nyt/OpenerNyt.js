import '../ReusableOpener.css'
import opener from '../../assets/nyt/home.png'
import recipe from '../../assets/nyt/recipe_serve.png'
import grocery from '../../assets/nyt/grocery_edit.png'

export const OpenerNyt = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' rel='preload' src={opener} alt={opener} />
        <img className='OpenerFoto' rel='preload' src={recipe} alt={recipe} />
        <img className='OpenerFoto' rel='preload' src={grocery} alt={grocery} />
      </div>
      <div className='textWrapper'>
        <h2 className='openerText'>The New York Times Cooking App</h2>
        <h5 className='h5 black opener'>
          A concept project adding a serving size adjustment feature to the NYT
          Cooking app, improving recipe accuracy, grocery lists, and meal prep.
        </h5>
      </div>
      <div className='OpenerInfo nyt'>
        <div className='Info'>
          <div className='InfoSection'>
            <div className='Button_website opener margin nyt'>problem</div>
            <h5 className='h5 opener_text center nyt'>
              The app lacks a serving size adjustment feature, making it
              difficult for users to scale recipes accurately. This leads to
              errors, inconsistencies, and confusion during meal prep. Without
              automatic updates to grocery lists and nutritional info, the
              experience feels incomplete.
            </h5>
          </div>
          <div className='InfoSection'>
            <div className='Button_website opener margin nyt'>solution</div>
            <h5 className='h5 opener_text center nyt'>
              I designed a serving size adjustment feature that automatically
              recalculates ingredients, cooking times, instructions, and grocery
              lists in real time — ensuring recipe accuracy and improving the
              overall cooking experience.
            </h5>
          </div>
        </div>
        <div className='InfoSmall'>
          <div>
            <h6 className='h6 small opener'>project</h6>
            <h5 className='h5 small opener nyt'>Add a Feature</h5>
          </div>
          <div>
            <h6 className='h6 small opener'>role</h6>
            <h5 className='h5 small opener nyt'>
              UX Researcher <br />
              UI Designer
            </h5>
          </div>
          <div>
            <h6 className='h6 small opener'>duration</h6>
            <h5 className='h5 small opener nyt'>4 Weeks</h5>
          </div>
          <div>
            <h6 className='h6 small opener'>tools</h6>
            <h5 className='h5 small opener nyt'>
              Figma <br />
              Photoshop
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
