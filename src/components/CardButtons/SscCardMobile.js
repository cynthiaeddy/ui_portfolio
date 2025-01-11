import { Link } from 'react-router-dom'
import opener from '../../assets/ssc/soap_opener.png'
import './CardButtons.css'
export const SscCardMobile = () => {
  return (
    <Link to='ssc_case_study' className='CardContainer'>
      <section className='Card'>
        <div className='CardText'>
          <div className='CardOpener'>
            Sustainable Soap Co. needed a website redesign to better reflect its
            eco-conscious, small-batch products.
          </div>
          <h6>case study</h6>
          <p className='CardDescription'>
            I transformed an underperforming website into a visually compelling
            experience that tells the brand&apos;s sustainability story and
            converts casual visitors into loyal customers.
          </p>
        </div>
        <div className='CardImage Mobile'>
          <img className='IndiCard' src={opener} alt={opener} />
        </div>
        <button className='Button_website'>view project</button>
      </section>
      <div className='footer'>end to end project</div>
    </Link>
  )
}
