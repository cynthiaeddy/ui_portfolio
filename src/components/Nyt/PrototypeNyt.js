import { Link } from 'react-router-dom'
import opener from '../../assets/nyt/home.png'
import '../ReusablePrototype.css'

export const PrototypeNyt = () => {
  return (
    <section className='PrototypeContainer'>
      <img className='prototype' src={opener} />
      <Link
        to='https://www.figma.com/proto/CEzzZHi83KNuRahEInadwf/prototype?page-id=0%3A1&node-id=1-740&p=f&viewport=181%2C288%2C0.25&t=OXfIQg9wZLeXczUL-1&scaling=scale-down&content-scaling=fixed'
        target='_blank'
        rel='noopener noreferrer'
        className='ButtonContainer'
      >
        <div className='Button_website'>view prototype</div>
      </Link>
    </section>
  )
}
