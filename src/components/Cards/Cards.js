import { Link } from 'react-router-dom'
import james_desktop from '../../assets/opener_cards/james_combine.png'
import './Cards.css'
export const Cards = () => {
  return (
    <>
      <section className='CardContainerHome'>
        <Link to='' className='IndieCard'>
          <img
            className='CardImageHome jamesdt'
            src={james_desktop}
            alt={james_desktop}
          />
          <div className='CardDek'>
            <h2 className='Card_hed'>World Food</h2>
            <div className='hed_and_blurb'>
              <h6 className='Card_blurb'>
                responsive UI and software development
              </h6>
              <p className='Card_p'>
                End to end live project designed and built for James
                Oseland&apos;s World Food Book Series
              </p>
            </div>
            <button className='Button_website'>view</button>
          </div>
        </Link>
        <Link to='' className='IndieCard'>
          <img className='CardImage' src={james_desktop} alt={james_desktop} />
        </Link>
      </section>
    </>
  )
}
