import '../ReusableComponents.css'
import '../ReusableDefine.css'

import venn from '../../assets/nyt/nyt_venn1.png'

export const DefineNyt = () => {
  return (
    <>
      <div className='BlackHeds white nyt'>
        <h2 className='h2_white cases_openerText'>Define</h2>
      </div>
      <section className='DefineContainer'>
        <h5 className='h5 black center nyt'>
          <span className='leadin black'>Through user research </span> and
          affinity mapping I identified three priorities:
        </h5>
        <section>
          <div className='dropCap hang one'>1</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Flexible Serving Sizes</h6>
            <h5 className='h5 small'>
              Give users more control by letting them adjust recipes to match
              their household size, reducing food waste while making cooking
              more approachable.
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>2</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Integrated Updates</h6>
            <h5 className='h5 small'>
              Users wanted serving-size adjustments to connect seamlessly across
              the experience — from ingredients to grocery lists to nutrition.
              This integration made cooking easier, reduced errors, and built
              trust in the tool.
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>3</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Intuitive Interface</h6>
            <h5 className='h5 small'>
              Precision alone wasn&apos;t enough; the feature also had to feel
              effortless. Simple controls, clear visual cues, and real-time
              updates gave users confidence and encouraged them to experiment.
            </h5>
          </div>
        </section>
        <h5 className='h5 black center venn'>
          <span className='leadin black'>These insights helped define </span>{' '}
          the goals, which I represented visually using a Venn diagram.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white'>venn diagram</div>
          <img className='competitive venn' src={venn} alt={venn} />
        </div>
      </section>
    </>
  )
}
