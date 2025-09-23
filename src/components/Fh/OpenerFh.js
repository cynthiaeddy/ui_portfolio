import '../ReusableOpener.css'
import desktop from '../../assets/fh/feline_desktop.png'
import mobile from '../../assets/fh/mobile_home.png'

export const OpenerFh = () => {
  return (
    <section className='OpenerContainer'>
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
              The clinic&apos;s website felt outdated and clunky, with missing
              key information. It failed to capture Feline Health&apos;s vibrant
              atmosphere—neon signs, playful wallpaper, and a welcoming
              energy—or reflect the special bond Dr. Blair, who&apos;s my vet
              and whom I adore, builds with her feline patients and their
              owners.
            </h5>
          </div>
          <div className='InfoSection'>
            <div className='Button_website opener margin'>solution</div>
            <h5 className='h5 opener_text center'>
              The goal is for the website to capture Feline Health&apos;s lively
              personality while making the experience intuitive for cat owners.
              Simplified navigation, online booking, and playful design details
              translate its neon-and-wallpaper aesthetic into a trusted digital
              extension of Dr. Blair&apos;s practice.
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
