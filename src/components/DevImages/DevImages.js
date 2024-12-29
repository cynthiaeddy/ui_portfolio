import james from '../../assets/web/james.png'
import museum from '../../assets/web/museum.jpg'
import match_gamealt3 from '../../assets/web/match_gamealt3.jpg'
import redlighthouse from '../../assets/web/redlighthouse.png'
import whiteDoor from '../../assets/web/whiteDoor1.jpg'
import earth from '../../assets/web/wint3.png'

import '../DevImages/DevImages.css'

export const DevImages = () => {
  return (
    <section className='DevImagesContainer'>
      <img className='DevImage' src={redlighthouse} alt={redlighthouse} />

      <img className='DevImage' src={james} alt={james} />

      <img className='DevImage' src={museum} alt={museum} />

      <img className='DevImage' src={earth} alt={earth} />

      <img className='DevImage wd' src={whiteDoor} alt={whiteDoor} />

      <img className='DevImage' src={match_gamealt3} alt={match_gamealt3} />
    </section>
  )
}
