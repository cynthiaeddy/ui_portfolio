import '../ReusableOpener.css'
// import opener_sm from '../../assets/nyt/home_sm.png'
// import recipe_sm from '../../assets/nyt/recipe_serve_sm.png'
// import grocery_sm from '../../assets/nyt/grocery_edit_sm.png'
import triple_nyt from '../../assets/nyt/triple_nyt.png'

export const OpenerNyt = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' src={triple_nyt} alt={triple_nyt} />
        {/* <img
          className='OpenerFoto'
          rel='preload'
          src={recipe_sm}
          alt={recipe_sm}
        />
        <img
          className='OpenerFoto'
          rel='preload'
          src={grocery_sm}
          alt={grocery_sm}
        /> */}
      </div>

      <div className='textWrapper'>
        <h2 className='openerText nyt'>The New York Times Cooking App</h2>
        <h5 className='h5 black opener'>
          A concept project adding a serving size adjustment feature to the NYT
          Cooking app, improving recipe accuracy, grocery lists, and meal prep.
        </h5>
      </div>
      <div className='OpenerInfo '>
        <div className='Info'>
          <div className='InfoSection'>
            <div className='Button enlarge opener'>problem</div>
            <h5 className='h5 opener_text center '>
              The app lacks a serving size adjustment feature, making it
              difficult for users to scale recipes accurately. This leads to
              errors, inconsistencies, and confusion during meal prep. Without
              automatic updates to grocery lists and nutritional info, the
              experience feels incomplete.
            </h5>
          </div>
          <div className='InfoSection'>
            <div className='Button enlarge opener '>solution</div>
            <h5 className='h5 opener_text center '>
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
            <h5 className='h5 small opener '>Add a Feature</h5>
          </div>
          <div>
            <h6 className='h6 small opener'>role</h6>
            <h5 className='h5 small opener '>
              UX Researcher <br />
              UI Designer
            </h5>
          </div>
          <div>
            <h6 className='h6 small opener'>duration</h6>
            <h5 className='h5 small opener '>4 Weeks</h5>
          </div>
          <div>
            <h6 className='h6 small opener'>tools</h6>
            <h5 className='h5 small opener '>
              Figma <br />
              Photoshop
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
