import '../ReusableComponents.css'
import '../ReusableDefine.css'

import venn from '../../assets/nyt/nyt_venn1.png'

export const DefineNyt = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Define</h2>
      </div>
      <section className='DefineContainer'>
        <h5 className='h5 black center'>
          <span className='leadin black'>Through user research </span> and
          affinity mapping I identified three priorities:
        </h5>
        <section>
          <div className='dropCap hang one'>1</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Smart Scaling Algorithm</h6>
            <h5 className='h5 small'>
              The feature needed to recalculate serving sizes while preserving
              recipe integrity. Ingredient quantities, cooking times, and
              preparation steps had to update together; otherwise, users lost
              trust in the recipe.
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>2</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Integrated Updates</h6>
            <h5 className='h5 small'>
              Scaling couldn&apos;t stop at ingredients. Users expected changes
              to ripple through grocery lists and nutritional data, making
              shopping easier and preventing mistakes.
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>3</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>User Interface Improvements</h6>
            <h5 className='h5 small'>
              Accuracy wasn&apos;t enough — the feature had to feel simple and
              natural. Clear controls, visual cues, and real-time updates built
              confidence and encouraged experimentation.
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
