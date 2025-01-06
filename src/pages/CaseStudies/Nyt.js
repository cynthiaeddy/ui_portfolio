import './CaseStudies.css'
import { OpenerNyt } from '../../components/Ux/ReusableComponents/Nyt/OpenerNyt'
import { ResearchNyt } from '../../components/Ux/ReusableComponents/Nyt/ResearchNyt'
// import { Define } from '../../components/Ux/ReusableComponents/Define'
// import { Ideate } from '../../components/Ux/ReusableComponents/Ideate'
// import { Design } from '../../components/Ux/ReusableComponents/Design'
// import { Testing } from '../../components/Ux/ReusableComponents/Testing'
// import { Prototype } from '../../components/Ux/ReusableComponents/Prototype'
// import { Reflection } from '../../components/Ux/ReusableComponents/Reflection'

export const Nyt = () => {
  return (
    <section className='Container studies'>
      <OpenerNyt />
      <ResearchNyt />
      {/* <Define />
      <Ideate />
      <Design />
      <Testing />
      <Prototype />
      <Reflection /> */}
    </section>
  )
}
