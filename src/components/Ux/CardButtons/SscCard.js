/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */
import './CardButtons.css'
export const SscCard = () => {
  return (
    <div className='Card'>
      <div className='CardText'>
        <div className='CardOpener'>
          Sustainable Soap Co. needed a website redesign to better reflect its
          eco-conscious, small-batch products.
        </div>
        <h6>case study</h6>
        <p className='CardDescription'>
          I transformed an underperforming website into a visually compelling
          experience that tells the brand&apos;s sustainability story and converts
          casual visitors into loyal customers.
        </p>
      </div>
      <div className='CardImage'>
        <img className='CardImage' src={opener} alt={opener} />
      </div>
      <button className='Button_website'>view project</button>
    </div>
  )
}
