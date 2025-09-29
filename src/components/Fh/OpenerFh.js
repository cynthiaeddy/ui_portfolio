import '../ReusableOpener.css'
import desktop from '../../assets/fh/feline_desktop.png'
import mobile from '../../assets/fh/mobile_home.png'

export const OpenerFh = () => {
  return (
    <section className='OpenerContainer fh'>
      <div className='Opener fh '>
        <img
          className='OpenerFoto desktop fh'
          rel='preload'
          src={desktop}
          alt={desktop}
        />
        <img
          className='OpenerFoto mobile fh'
          rel='preload'
          src={mobile}
          alt={mobile}
        />
      </div>
      <div className='textWrapper fh'>
        <h2 className='openerText'>Feline Health</h2>
        <h5 className='h5 black opener'>
          Responsive redesign of a cat-only veterinary clinic website,
          introducing online booking and elevating usability and brand
          personality.
        </h5>
      </div>
      <div className='OpenerInfo'>
        <div className='Info'>
          <div className='InfoSection'>
            <div className='Button_website opener margin'>problem</div>
            <h5 className='h5 opener_text center'>
              The website didn&apos;t reflect the clinic&apos;s vibrant
              personality or the warm, one-doctor care that makes it special.
              The design was clunky, with missing information and dated
              navigation. It failed to capture the playful space—defined by neon
              signs and cat wallpaper—or the bond Dr. Blair builds with her
              patients and their owners (she&apos;s also my vet, whom I trust).
            </h5>
          </div>
          <div className='InfoSection'>
            <div className='Button_website opener margin'>solution</div>
            <h5 className='h5 opener_text center'>
              The site should convey the clinic&apos;s energy and personal touch
              while simplifying the experience for cat owners. Clearer
              navigation, online booking, and design details echoing the
              neon-and-wallpaper aesthetic would create a trusted digital
              extension of Dr. Blair&apos;s care—approachable, intuitive, and
              connect with.
            </h5>
          </div>
          <div className='InfoSmall'>
            <div className='InfoSmallSection'>
              <h6 className='h6 small opener'>project</h6>
              <h5 className='h5 small opener'>
                Responsive Site
                <br />
                Redesign
              </h5>
            </div>
            <div>
              <h6 className='h6 small opener'>role</h6>
              <h5 className='h5 small opener'>
                UX Researcher <br />
                UI Designer
              </h5>
            </div>
            <div>
              <h6 className='h6 small opener'>duration</h6>
              <h5 className='h5 small opener'>8 Weeks</h5>
            </div>
            <div>
              <h6 className='h6 small opener'>tools</h6>
              <h5 className='h5 small opener'>
                Figma <br />
                Photoshop
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
