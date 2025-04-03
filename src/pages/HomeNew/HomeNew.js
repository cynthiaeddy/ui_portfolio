// import { NavLink } from 'react-router'
import './HomeNew.css'
import { Cards } from '../../components/Cards/Cards'

export const HomeNew = () => {
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
          <button type='submit' className='Button_website home'>
            ^
          </button>
        </div>
      </div>
      <div className='HomeContainerBottom'>{<Cards />}</div>
    </section>
  )
}

export default HomeNew
