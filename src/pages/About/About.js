import me from '../../assets/about/me.png'
import outside from '../../assets/about/outside.png'
import quilt from '../../assets/about/quilt.png'

import './About.css'
export const About = () => {
  return (
    <section className='Container about'>
      <div className='AboutHi'>
        hiya,i&apos;m <br />
        cynthia
      </div>
      <div className='AboutContainerNew'>
        <div className='AboutImages'>
          <img src={me} className='AboutImage me' alt={me} />
          <img src={quilt} className='AboutImage' alt={quilt} />
          <img src={outside} className='AboutImage' alt={outside} />
        </div>
        <h4 className='AboutText'>
          I&apos;ve been lucky enough to design across a variety of mediums,
          starting in print and making my way into digital early on—working on
          iPad and iPhone interfaces before they became the norm. After a
          software development bootcamp, I spent a few years coding and
          freelancing, but design has always been my true passion.
          <br />
          <br />
          Outside of work, I&apos;m all about making—quilting, silversmithing,
          and experimenting in the kitchen. These creative outlets keep me
          inspired and shape my work in UX/UI. I&apos;ve lived in New York for
          decades, and the city (plus my hiking trips around it) constantly
          sparks new ideas. Travel also feeds my creativity—recent trips to
          Croatia and an upcoming adventure in Merida, Mexico, are already
          inspiring new thoughts.
          <br />
          <br />
          Today, I bring together my design and tech experience to create
          digital experiences that are not only visually engaging but also
          intuitive and user-focused. Whether it&apos;s a website, app, or
          prototype, my goal is always to craft seamless, enjoyable user
          journeys.
        </h4>
      </div>
    </section>
  )
}