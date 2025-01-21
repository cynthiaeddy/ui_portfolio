import '../ReusableOpener.css'
import desktop from '../../assets/fh/feline_desktop.png'
import mobile from '../../assets/fh/mobile_home.png'

export const OpenerFh = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener fh'>
        <img className='OpenerFoto desktop' src={desktop} alt={desktop} />
        <img className='OpenerFoto mobile' src={mobile} alt={mobile} />
      </div>
      <div className='background'></div>
      <div className='textWrapper'>
        <h2 className='cases_openerText'>Feline Health</h2>
        <h5 className='h5 openerType'>
          is a woman owned and run veterinary clinic. It&apos;s a cats only
          practice and has one doctor, whom I adore.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <h6 className='h6 studies'>PROBLEM</h6>
          <h5 className='h5 black'>
            Dr. Blair&apos;s website fails to capture the vibrant atmosphere of
            Feline Health Veterinary, with clunky design and missing key
            information. It doesn&apos;t reflect the lively space, defined by
            neon signs and cat wallpaper, or the special bond between Dr. Blair
            and her feline patients and their owners.
          </h5>
          <br />
          <h6 className='h6 studies'>solution</h6>
          <h5 className='h5 black'>
            The challenge was to redesign the site to better reflect the
            clinic&apos;s energy, improve usability, and engage users, with
            simpler navigation, vibrant design, and clear calls to action.
          </h5>
        </div>
        <div className='InfoSmall'>
          <h6 className='h6 small'>role</h6>
          <h5 className='h5 small'>
            UX Researcher <br />
            UI Designer
          </h5>
          <br />
          <h6 className='h6 small'>duration</h6>
          <h5 className='h5 small'>8 Weeks</h5>
          <br />
          <h6 className='h6 small'>tools</h6>
          <h5 className='h5 small'>
            Figma <br />
            Photoshop
          </h5>
        </div>
      </div>
      <div className='divider_curved'></div>
    </section>
  )
}
