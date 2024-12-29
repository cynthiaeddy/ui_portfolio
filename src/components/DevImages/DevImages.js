/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
import james from '../../assets/web/james.png'
import museum from '../../assets/web/museum.jpg'
import match_gamealt3 from '../../assets/web/match_gamealt3.jpg'
import redlighthouse from '../../assets/web/redlighthouse.png'
import whiteDoor from '../../assets/web/whiteDoor1.jpg'
import earth from '../../assets/web/wint3.png'

import '../PrintImages/PrintImages.css'

export const DevImages = () => {
  return (
    <section className='DevImagesContainer'>
      <div className='Dev'>
      <figure className='DevImages'>
        <img className='DevImage fit'src={redlighthouse} alt={redlighthouse} />

      </figure>
      <figure className='DevImages'>
        <img  className='DevImage'src={james} alt={james} />

      </figure>

      <figure className='DevImages'>
        <img className='DevImage'src={museum} alt={museum} />

      </figure>
      <figure className='DevImages'>
        <img  className='WebDevImageImage'src={earth} alt={earth} />

        </figure>
        <figure className='DevImages'>
        <img  className='DevImage hb'src={whiteDoor} alt={whiteDoor} />

        </figure>
        <figure className='DevImages'>
        <img  className='WebImage hb'src={match_gamealt3} alt={match_gamealt3} />

      </figure>
      </div>
    </section>
  )
}
