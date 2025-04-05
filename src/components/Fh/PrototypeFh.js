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
          to='https://www.figma.com/proto/MHrSzsnZHUUvWpdgJT16nM/feline-health-desktop?page-id=19%3A1025&node-id=19-1026&viewport=164%2C112%2C0.5&t=ggCjAhC3Tu8LI57Y-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=19%3A1026'
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
          to='https://www.figma.com/proto/a6XJCrlXeIL4GX3rwHzDtU/feline-health?page-id=1147%3A2545&node-id=1147-2563&viewport=35%2C1106%2C0.19&t=hkshLzhBQx9TTpcM-1&scaling=scale-down&content-scaling=fixed'
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
