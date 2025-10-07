import '../ReusableComponents.css'
import '../ReusableTesting.css'

import iteration from '../../assets/nyt/nyt_iteration.png'
import iteration_small from '../../assets/nyt/nyt_iteration_small.png'
import iteration_smallest from '../../assets/nyt/nyt_iteration_smallest.png'

export const TestingNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer nyt'>
        <div className='InnerContainer'>
          <h4 className='h4 dropCap nyt'>
            Six users tested the high-fidelity prototypes, and the results were
            strong. Satisfaction with the serving size adjustment feature
            reached 93%, with participants praising the clarity of the red +/-
            buttons. Grocery lists scored 87%, though users requested inline
            editing, which was outside the project&apos;s scope. Overall
            usability was rated at 87%, with the design aligning well to the NYT
            brand identity. The main feedback was to allow single-unit
            increments rather than adjustments of two.
          </h4>
          <div className='ButtonContainer nyt'>
            <div className='Button enlarge iter nyt'>iteration</div>
            <picture>
              <source media='(max-width: 479px)' srcSet={iteration_smallest} />
              <source media='(max-width: 768px)' srcSet={iteration_small} />
              <source media='(min-width: 769px)' srcSet={iteration} />
              <img
                className='competitive nyt'
                src={iteration}
                alt='Affinity map'
                loading='lazy'
              />
            </picture>
            <h5>
              Before the feature increased/decreased by 2 from 2 to 8 serving
              sizes
              <br />
              Now the feature increases/decreases by 1 from 1 to 8 serving sizes
            </h5>
          </div>
        </div>
      </section>
    </>
  )
}
