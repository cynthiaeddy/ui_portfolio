import '../ReusableComponents.css'
import '../ReusableDesign.css'
import fh_styletile from '../../assets/fh/feline_health_style.png'
import fh_hi_desktop from '../../assets/fh/fh_hifi_desktopcrop.png'
import fh_hi_mobile from '../../assets/fh/fh_hifi_mobile.png'

export const DesignFh = () => {
  return (
    <>
      <div className='BlackHeds white'>
        <h2 className='h2_white cases_openerText'>Design</h2>
      </div>
      <section className='DesignContainer fh'>
        <h5 className='h5 black dropCap design'>
          I refined typography, colors, and UI elements to modernize the site
          while staying true to Feline Health&apos;s playful spirit. A refreshed
          logo created cohesion, while neon pink accents echoed the
          clinic&apos;s interiors and added energy. Consistent use of type,
          buttons, and iconography built clarity and trust, with subtle touches
          highlighted boxes and cards adding personality without clutter. The
          result is a site that feels as welcoming online as the one-doctor
          practice does in person.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white no_margin'>branding</div>
          <img
            className='competitive flow'
            src={fh_styletile}
            alt={fh_styletile}
          />
        </div>
        <h5 className='h5 black design'>
          <span className='leadin black'>High fidelity wireframes </span>
          translated the validated flow into a fully realized experience that
          balanced the clinic&apos;s personality with user needs. I streamlined
          navigation so hours and contact details were always accessible, and
          redesigned the appointment button to stand out more on mobile. Layout
          and hierarchy were adjusted to guide users with less effort, while
          consistent typography and neon-inspired accents carried the
          clinic&apos;s playful atmosphere online.
        </h5>
        <div className='ButtonContainer'>
          <div className='Button enlarge white fh'>high fidelity desktop</div>
        </div>
        <img
          className='competitive designFh four'
          src={fh_hi_desktop}
          alt={fh_hi_desktop}
        />
        <div className='ButtonContainer fh_mobile'>
          <div className='Button enlarge white'>high fidelity mobile</div>
        </div>
        <img
          className='competitive fh_mobile'
          src={fh_hi_mobile}
          alt={fh_hi_mobile}
        />
      </section>
    </>
  )
}
