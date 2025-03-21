import '../ReusableComponents.css'
import '../ReusableIdeate.css'

export const IdeateNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Ideate</h2>
      </div>
      <section className='IdeateContainer'>
        <div className='InnerContainer'>
          <h5 className='h5 marginTop'>
            <span className='leadin'>Drawing from my research </span> I
            identified the key sections and features that the website should
            include:
          </h5>
          <ul className='h5 bullets'>
            <li className='first_li_research'>
              <h5>
                An intuitive interface providing serving size controls with
                visual feedback and real-time updates
              </h5>
            </li>
            <li>
              <h5>
                A dynamic system for automated recalculation of ingredients,
                grocery lists, and nutritional information
              </h5>
            </li>
            <li>
              <h5>
                A consistent visual system presenting original vs. adjusted
                quantities
              </h5>
            </li>
            <li>
              <h5>
                A seamless approach integrating with existing NYT Cooking
                features
              </h5>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
