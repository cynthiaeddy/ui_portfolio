import { Link } from 'react-router-dom'
import opener from '../../../assets/ssc/soap_opener.png'
export const Prototype = () => {
  return (
    <section className='InnerContainer prototype'>
      <img className='prototype' src={opener} />
      <Link
        to='https://www.figma.com/proto/bydkeyzGPj6APDeyhxtssh/ssc_lo-fi?page-id=775%3A7936&node-id=775-10073&node-type=frame&viewport=1970%2C-172%2C0.51&t=4bq3vrl1YDvdpyiV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=775%3A10073'
        target='_blank'
        rel='noopener noreferrer'
        className='ButtonContainer'
      >
        <div className='Button_website'>view prototype</div>
      </Link>
    </section>
  )
}
