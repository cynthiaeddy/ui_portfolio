// import { NavLink } from 'react-router'
import '../HomeNew/HomeNew.css'
import { Cards } from '../../components/Cards/Cards'
import { Footer } from '../../components/Footer/Footer'
// import Button_animated from '../../components/Button_animated/Button_animated'
// import Button_two from '../../components/Button_animated/Button_two'
import ScrollDownIconCircle from '../../components/Button_animated/ScrollDownIconCircle'

export const Work = () => {
  return (
    <>
      <section className='HomeContainer'>
        <div className='HomeContainerTop'>
          <div className='AboutHome'>hiya, i&apos;m cynthia.</div>
          <div className='HomeSerif'>
            I create <span className='HomeSerif Bold'>beautiful,</span>
            <br /> <span className='HomeSerif Bold'>
              intuitive
            </span> experiences <br />
            through <span className='HomeSerif Bold'>thoughtful,</span> <br />
            <span className='HomeSerif Bold'>human</span> centered design.
            <ScrollDownIconCircle />
          </div>
        </div>
        <div className='HomeContainerBottom'>{<Cards />}</div>
      </section>
      {<Footer />}
    </>
  )
}
