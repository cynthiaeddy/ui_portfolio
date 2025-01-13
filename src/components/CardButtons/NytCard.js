import { Link } from 'react-router-dom'
import opener from '../../assets/nyt/home.png'
import './CardButtons.css'
export const NytCard = () => {
  return (
    <Link to='/ux_ui/nyt_cooking_case_study' className='CardContainer'>
      <section className='Card'>
        <div className='CardText'>
          <div className='CardOpener'>
            The New York Times Cooking app needed a recipe scaling feature to
            solve user frustrations with portion calculations.
          </div>
          <h6>case study</h6>
          <p className='CardDescription nyt'>
            In this case study, I explored how feature development turns
            everyday cooking challenges into seamless digital experiences,
            enhancing both functionality and user satisfaction.
          </p>
        </div>
        <div className='CardImage'>
          <img className='IndiCard' src={opener} alt={opener} />
          <button className='Button_website'>view project</button>
        </div>
      </section>
      <div className='footer nyt'>add a feature to an existing website</div>
    </Link>
  )
}
