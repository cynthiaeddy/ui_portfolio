import { Link } from 'react-router-dom'
import opener from '../../assets/nyt/home.png'
export const PrototypeNyt = () => {
  return (
    <section className='InnerContainer prototype'>
      <img className='prototype' src={opener} />
      <Link
        to='https://www.figma.com/proto/4q3KKecaz9tVgbqn02lF1r/swot-button_works?page-id=335%3A649&node-id=335-806&viewport=920%2C-220%2C0.35&t=5NdCA0OqmngmFNJ1-1&scaling=scale-down&content-scaling=fixed'
        target='_blank'
        rel='noopener noreferrer'
        className='ButtonContainer'
      >
        <div className='Button_website'>view prototype</div>
      </Link>
    </section>
  )
}
