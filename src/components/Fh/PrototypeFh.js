import { Link } from 'react-router-dom'
import '../ReusablePrototype.css'
import opener from '../../assets/fh/feline_desktop.png'
import openerMobile from '../../assets/fh/mobile_home.png'
export const PrototypeFh = () => {
  return (
    <section className='PrototypeContainer fh'>
      <div className='prototype_container_desktop'>
        <img className='prototype fh_desktop' src={opener} />
        <Link
          to='https://www.figma.com/proto/a6XJCrlXeIL4GX3rwHzDtU/feline-health?page-id=904%3A13501&node-id=1365-2532&node-type=frame&viewport=444%2C324%2C0.25&t=p055KIT4rfUmUI41-1&scaling=scale-down&content-scaling=fixed'
          target='_blank'
          rel='noopener noreferrer'
          className='ButtonContainer'
        >
          <div className='Button_website'>view desktop prototype</div>
        </Link>
      </div>
      <div className='prototype_container_mobile'>
        <img className='prototype fh_mobile' src={openerMobile} />
        <Link
          to='https://www.figma.com/proto/a6XJCrlXeIL4GX3rwHzDtU/feline-health?page-id=1147%3A2545&node-id=1147-2720&node-type=frame&viewport=-31%2C2297%2C0.5&t=8CUFSB64dyvT3lRT-1&scaling=scale-down&content-scaling=fixed'
          target='_blank'
          rel='noopener noreferrer'
          className='ButtonContainer'
        >
          <div className='Button_website'>view mobile prototype</div>
        </Link>
      </div>
    </section>
  )
}
