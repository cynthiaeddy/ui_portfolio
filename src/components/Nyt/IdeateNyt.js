import '../ReusableComponents.css'
import '../ReusableIdeate.css'
import nyt_user_flow from '../../assets/nyt/nyt_user_flow_VERT.png'
import nyt_user_flowcrop from '../../assets/nyt/nyt_user_flow_VERTcrop.png'
import lo_fi from '../../assets/nyt/nyt_midfi_big.png'
import lo_fi_mobile from '../../assets/nyt/nyt_midfi_big_mobile.png'

export const IdeateNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Ideate</h2>
      </div>
      <section className='IdeateContainer nyt'>
        <div className='InnerContainer'>
          <h4 className='h4 dropCap'>
            I mapped the journey from the homepage into a recipe, through
            serving size adjustment, and into tools like grocery lists and
            nutritional information. The flow emphasizes intuitive serving
            adjustments with quantities updating instantly, while giving users
            the option to edit a grocery list or view nutrition before returning
            to the recipe. The goal was to reduce the friction of manual
            recalculation and ensure every change in servings carried through
            seamlessly.
          </h4>
          <div className='ButtonContainer'>
            <div className='Button enlarge ideate nyt'>user flow</div>
            <picture>
              <source media='(max-width: 1030px)' srcSet={nyt_user_flowcrop} />
              <source media='(min-width: 1031px)' srcSet={nyt_user_flow} />
              <img
                className='competitive ideate nyt'
                src={nyt_user_flow}
                alt='Affinity map'
                loading='lazy'
              />
            </picture>
            {/* <img
              className='competitive ideate nyt'
              src={nyt_user_flow}
              alt={nyt_user_flow}
            /> */}
          </div>
          <div className='ButtonContainer lo_fi nyt'>
            <h4 className='h4 marginTop'>
              <span className='leadin'>I tested low fidelity </span>
              wireframes with 5 participants to validate the user flow —
              adjusting a recipes&apos; serving size and checking the grocery
              list. 100% of users completed the tasks successfully and rated the
              flow easy to use. Overall satisfaction was 88%, lowered by the
              fact that in the existing NYT UI, participants couldn&apos;t edit
              the grocery list (for example, adding an extra lemon to the
              items).
            </h4>

            <div className='Button enlarge ideate nyt1 '>low fidelity</div>

            <picture>
              <source media='(max-width: 479px)' srcSet={lo_fi_mobile} />
              <source media='(min-width: 480px)' srcSet={lo_fi} />
              <img
                className='competitive affinity'
                src={lo_fi}
                alt='Affinity map'
                loading='lazy'
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  )
}
