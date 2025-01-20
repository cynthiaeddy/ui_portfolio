import '../ReusableComponents.css'
import '../ReusableTesting.css'

import iteration from '../../assets/nyt/nyt_iterationTypecrop.png'

export const TestingNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Testing</h2>
      </div>
      <section className='TestingContainer'>
        <div className='InnerContainer'>
          <h5 className='h5 dropCap nyt'>
            The high-fidelity wireframe testing with 6 participants revealed
            strong results:
            <ul className='h5 bullets'>
              <li className='first_li_testing'>
                <h5>
                  Users rated the serving size feature highly (93%
                  satisfaction), with all users appreciating the red +/-
                  adjustment buttons for visibility.
                </h5>
              </li>
              <li className='first_li_research'>
                <h5>
                  The grocery list functionality received an 87% satisfaction
                  score, though users requested additional features like inline
                  editing that are beyond the current project scope.
                </h5>
              </li>
              <li className='first_li_research'>
                <h5>
                  Overall site usability scored 87%, with users noting that the
                  UI design aligned well with the New York Times brand identity.
                </h5>
              </li>
              <li>
                <h5>
                  The main improvement request was to allow single-unit
                  increments for serving size adjustments instead of increments
                  of two.
                </h5>
              </li>
            </ul>
          </h5>
          <div className='ButtonContainer'>
            <div className='Button enlarge'>iteration</div>
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
