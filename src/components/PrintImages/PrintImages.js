import fit from '../../assets/print/print_fit.png'
import lunch from '../../assets/print/print_lunch.png'
import ipad_hb from '../../assets/print/print_ipad_hb.png'
import jersey from '../../assets/print/print_web_jersey.png'
import phone from '../../assets/print/print_web_phone.png'
import './PrintImages.css'

export const PrintImages = () => {
  return (
    <section className='PrintImagesContainer'>
      <div className='Print'>
        <figure className='PrintImages fit'>
          <img className='PrintImage fit' src={fit} alt={fit} />
          <figcaption className='Print_captions'>shape magazine</figcaption>
        </figure>
        <figure className='PrintImages lunch'>
          <img className='PrintImage' src={lunch} alt={lunch} />
          <figcaption className='Print_captions no_margin'>
            shape magazine
          </figcaption>
        </figure>
      </div>
      <div className='Web'>
        <figure className='WebImages'>
          <img className='WebImage' src={phone} alt={phone} />
          <figcaption className='Print_captions'>
            women&apos;s health magazine
          </figcaption>
        </figure>
        <figure className='WebImages'>
          <img className='WebImage' src={jersey} alt={jersey} />
          <figcaption className='Print_captions'>
            good housekeeping
            <br />
            magazine
          </figcaption>
        </figure>
        <figure className='WebImages'>
          <img className='WebImage hb' src={ipad_hb} alt={ipad_hb} />
          <figcaption className='Print_captions no_margin'>
            house beautiful
            <br />
            magazine
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
