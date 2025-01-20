import '../ReusableComponents.css'
import '../ReusableDefine.css'

import venn from '../../assets/nyt/nyt_venn.png'

export const DefineNyt = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Define</h2>
      </div>
      <section className='DefineContainer'>
        <h5 className='h5 black center'>
          <span className='leadin black'>Through user research </span> and
          affinity mapping analysis, I identified these key priorities for the
          NYT Cooking app&apos;s serving size feature:
        </h5>
        <section>
          <div className='dropCap hang one'>1</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Smart Scaling Algorithm</h6>
            <h5 className='h5 small'>
              Develop an accurate serving size adjustment feature that maintains
              recipe taste and integrity while automatically recalculating
              ingredients
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>2</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>Integrated Updates</h6>
            <h5 className='h5 small'>
              Ensure the scaling feature simultaneously updates grocery lists
              and nutritional information when serving sizes change
            </h5>
          </div>
        </section>
        <section>
          <div className='dropCap hang'>3</div>
          <div className='smallWrapper'>
            <h6 className='h6 small'>User Interface Improvements</h6>
            <h5 className='h5 small'>
              Design an intuitive interface with clear controls and visual
              indicators to help users adjust serving sizes confidently
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
