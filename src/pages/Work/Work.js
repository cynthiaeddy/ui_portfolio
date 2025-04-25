import './Work.css'
import { Cards } from '../../components/Cards/Cards'
import ScrollDownIconCircle from '../../components/Button_animated/ScrollDownIconCircle'

export const Work = () => {
  return (
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
      <div className='HomeContainerBottom'>
        <Cards />
      </div>
    </section>
  )
}
