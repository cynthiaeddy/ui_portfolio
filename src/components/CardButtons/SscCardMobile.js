import { Link } from 'react-router-dom'
import opener from '../../assets/ssc/soap_opener.png'
import './CardButtons.css'
export const SscCardMobile = () => {
  return (
    <Link to='/ux_ui/ssc_case_study' className='CardContainer'>
      <section className='Card'>
        <div className='CardText'>
          <div className='CardOpener'>
            Sustainable Soap Co. needed a website redesign to better reflect its
            eco-conscious, small-batch products.
          </div>
        </div>
        <div className='CardImage'>
          <img className='IndiCard' src={opener} alt={opener} />
          <button className='Button_website'>view project</button>
        </div>
      </section>
      <h6>case study</h6>
      <p className='CardDescription'>
        I transformed an underperforming website into a visually compelling
        experience that tells the brand&apos;s sustainability story and converts
        casual visitors into loyal customers.
      </p>
      <div className='footer'>end to end project</div>
    </Link>
  )
}
