import './CaseStudies.css'
import { OpenerFh } from '../../components/Ux/ReusableComponents/Fh/OpenerFh'
import { ResearchFh } from '../../components/Ux/ReusableComponents/Fh/ResearchFh'
// import { Define } from '../../components/Ux/ReusableComponents/Define'
// import { Ideate } from '../../components/Ux/ReusableComponents/Ideate'
// import { Design } from '../../components/Ux/ReusableComponents/Design'
// import { Testing } from '../../components/Ux/ReusableComponents/Testing'
// import { Prototype } from '../../components/Ux/ReusableComponents/Prototype'
// import { Reflection } from '../../components/Ux/ReusableComponents/Reflection'

export const Fh = () => {
  return (
    <section className='Container studies'>
      <OpenerFh />
      <ResearchFh />
      {/* <Define />
      <Ideate />
      <Design />
      <Testing />
      <Prototype />
      <Reflection />  */}
    </section>
  )
}