import '../ReusableComponents.css'
import '../ReusableTesting.css'

import iteration from '../../assets/nyt/nyt_iteration.png'

export const TestingNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer nyt'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap nyt'>
            Six users tested the high-fidelity prototypes, and the results were
            strong. Satisfaction with the serving size adjustment feature
            reached 93%, with participants praising the clarity of the red +/-
            buttons. Grocery lists scored 87%, though users requested inline
            editing, which was outside the project&apos;s scope. Overall
            usability was rated at 87%, with the design aligning well to the NYT
            brand identity. The main feedback was to allow single-unit
            increments rather than adjustments of two.
          </h5>
          <div className='ButtonContainer nyt'>
            <div className='Button enlarge iter nyt'>iteration</div>
            <img
              className='competitive nyt_iteraction'
              src={iteration}
              alt={iteration}
            />
          </div>
        </div>
      </section>
    </>
  )
}
