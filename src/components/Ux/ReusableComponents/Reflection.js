/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import '../../ReusableComponents.css'
import { Carousel } from './Carousel/Carousel.js'


// import mag_wh from '../../../assets/ssc/mag_white.png'
import mag_blk from '../../../assets/ssc/mag_blk.png'
import ive_mood_resize from '../../../assets/ssc/ive_mood.png'
import ive_style from '../../../assets/ssc/ive_style_resize.png'

export const Reflection = () => {

  return (
    <>
      <div className='BlackHeds'>
        <h2>Reflection</h2>
      </div>
      <section className='WideContainer reflection'>
        <div className='InnerContainer reflection'>
          <h5 className='leadin'>
            What challenges did I face, and what do I think led to them?
          </h5>
          <h5 className='h5'>
            I discovered that users had varying interpretations of sustainability, with some perspectives being quite clear and others more ambiguous. The original design of the website was quite basic, lacking much of the information users expressed as important in my initial research. As I aimed to include the elements users considered essential for purchasing sustainable products, it became challenging to create a more comprehensive website within the timeframe. However, this process was ultimately rewarding as it allowed me to enhance the user experience significantly.
          </h5>
          <br />
          <h5 className='leadin'>
          How could I have improved my approach?
          </h5>
          <h5 className='h5'>
          I could have reached out and questioned sustainability experts and content creators which might have helped in crafting more impactful messaging about the products.          </h5>
          <br />
          <h5 className='leadin'>
          What insights did I gain?          </h5>
          <h5 className='h5'>
          I gained insights into the diverse interpretations of sustainability among users, highlighting how these views can affect engagement. The basic design of the site proved insufficient in meeting user needs, and the challenge of expanding it within a limited timeframe underscored the importance of prioritizing essential content. I also recognized that collaborating with experts could enhance sustainability messaging, improving user engagement and trust.          </h5>
          </div>
      </section>
    </>
  )
}
