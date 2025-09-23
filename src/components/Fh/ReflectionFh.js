import '../ReusableComponents.css'
import '../ReusableReflection.css'

export const ReflectionFh = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Reflection</h2>
      </div>
      <section className='ReflectionContainer'>
        <div className='OpenerInfo'>
          <div className='Info'>
            <div className='InfoSection'>
              <div className='Button_website opener margin'>problem</div>
              <h5 className='h5 opener_text center'>
                The clinic&apos;s website felt outdated and clunky, with missing
                key information. It failed to capture Feline Health&apos;s
                vibrant atmosphere—neon signs, playful wallpaper, and a
                welcoming energy—or reflect the special bond Dr. Blair,
                who&apos;s my vet and whom I adore, builds with her feline
                patients and their owners.
              </h5>
            </div>
            <div className='InfoSection'>
              <div className='Button_website opener margin'>solution</div>
              <h5 className='h5 opener_text center'>
                The goal is for the website to capture Feline Health&apos;s
                lively personality while making the experience intuitive for cat
                owners. Simplified navigation, online booking, and playful
                design details translate its neon-and-wallpaper aesthetic into a
                trusted digital extension of Dr. Blair&apos;s practice.
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
        <div className='InnerContainer reflection'>
          <h5 className='leadin'>
            What challenges did I face, and what do I think led to them?
          </h5>
          <h5 className='h5'>
            I ended up creating unnecessary mid-fidelity pages that didn&apos;t
            align with the task flow and initially prioritized the desktop
            version for high-fidelity wireframes, which led to a rushed mobile
            design.
          </h5>
          <br />
          <h5 className='leadin'>How could I have improved my approach?</h5>
          <h5 className='h5'>
            I could have managed my time more effectively by adhering to the
            project scope and starting with the mobile version for a more
            cohesive user experience.
          </h5>
          <br />
          <h5 className='leadin'>What insights did I gain? </h5>
          <h5 className='h5'>
            This project highlighted the importance of defining goals and the
            steps necessary to clarify the UX experience. I also enhanced my
            user interviewing skills and learned to better evaluate project
            scope through consultations with my mentor and peers.
          </h5>
        </div>
      </section>
    </>
  )
}
