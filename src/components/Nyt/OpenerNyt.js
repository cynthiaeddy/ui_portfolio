import '../ReusableOpener.css'
import opener from '../../assets/nyt/home.png'
import recipe from '../../assets/nyt/recipe_serve.png'
import grocery from '../../assets/nyt/grocery_edit.png'

export const OpenerNyt = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' src={opener} alt={opener} />
        <img className='OpenerFoto' src={recipe} alt={recipe} />
        <img className='OpenerFoto' src={grocery} alt={grocery} />
      </div>
      <div className='background'></div>
      <div className='textWrapper'>
        <h2 className='cases_openerText'>The New York Times Cooking App</h2>
        <h5 className='h5 openerType'>
          is a subscription-based platform with over 110 million users accessing
          22,000+ recipes with personalized features and shopping lists.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <h6 className='h6 studies'>PROBLEM</h6>
          <h5 className='h5 black'>
            The NYT Cooking app lacks a feature to adjust serving sizes, making
            it difficult for users to scale recipes accurately. This can lead to
            errors, inconsistencies, and confusion during meal prep.
          </h5>
          <br />
          <h6 className='h6 studies'>solution</h6>
          <h5 className='h5 black'>
            Introducing a serving size adjustment feature would automatically
            update ingredients, cooking times, instructions, and grocery lists
            in real-time, ensuring recipe accuracy and improving the overall
            cooking experience.
          </h5>
        </div>
        <div className='InfoSmall'>
          <h6 className='h6 small'>role</h6>
          <h5 className='h5 small'>
            UX Researcher <br />
            UI Designer
          </h5>
          <br />
          <h6 className='h6 small'>duration</h6>
          <h5 className='h5 small'>4 Weeks</h5>
          <br />
          <h6 className='h6 small'>tools</h6>
          <h5 className='h5 small'>
            Figma <br />
            Photoshop
          </h5>
        </div>
      </div>
      <div className='divider_curved'></div>
    </section>
  )
}
