import me from '../../assets/about/me.png'
import outside from '../../assets/about/outside.png'
import quilt from '../../assets/about/quilt.png'
import cynthia_eddy_resume from '../../assets/about/cynthia_eddy_resume.pdf'

import './About.css'
export const About = () => {
  return (
    <section className='Container about mobile'>
      <div className='AboutContainerNew'>
        <div className='AboutImages'>
          <img src={me} className='AboutImage me' alt={me} />
          <img src={quilt} className='AboutImage' alt={quilt} />
          <img src={outside} className='AboutImage' alt={outside} />
        </div>
        <div className='AboutHi'>i&apos;ve been lucky</div>
        <div className='HomeSerif about'>
          enough to <span className='HomeSerif Bold'>design</span> across
          <span className='HomeSerif Bold'> mediums, </span>
          starting in <span className='HomeSerif Bold'>print</span> and
          transitioning to
          <span className='HomeSerif Bold'> digital</span> early —
          <br />
        </div>

        <h4 className='AboutText'>
          working on iPad and iPhone interfaces before they became the norm.
          Along the way, I completed both a software development and a UX/UI
          design bootcamp — training that deepened my ability to think across
          disciplines and bridge design with development.
          <br />
          <br />
          With a foundation in editorial storytelling and technical fluency, I
          create user-centered experiences that are both intuitive and visually
          engaging — across editorial sites, e-commerce projects, and custom web
          apps.
          <br />
          <br />
          Outside of work, I like to keep my hands busy — quilting,
          silversmithing, or experimenting in the kitchen. I find inspiration
          everywhere: walking through the city, catching outdoor concerts, or
          heading to a hiking trail just beyond it. Travel sparks ideas too —
          most recently in Croatia and Mérida, Mexico.
        </h4>
        <footer className='AboutInfo'>
          <a href={cynthia_eddy_resume} className='About_link'>
            <div className='AboutResume view'>
              view my resume <span className='AboutResume_span'> |</span>{' '}
            </div>
          </a>
          <a href={cynthia_eddy_resume} download>
            <div className='AboutResume download'> download my resume</div>
          </a>
        </footer>
      </div>
    </section>
  )
}
