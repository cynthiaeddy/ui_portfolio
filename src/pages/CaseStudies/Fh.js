import './CaseStudies.css'
import { OpenerFh } from '../../components/Ux/ReusableComponents/Fh/OpenerFh'
import { ResearchFh } from '../../components/Ux/ReusableComponents/Fh/ResearchFh'
import { DefineFh } from '../../components/Ux/ReusableComponents/Fh/DefineFh'
import { IdeateFh } from '../../components/Ux/ReusableComponents/Fh/IdeateFh'
import { DesignFh } from '../../components/Ux/ReusableComponents/Fh/DesignFh'
import { TestingFh } from '../../components/Ux/ReusableComponents/Fh/TestingFh'
// import { Prototype } from '../../components/Ux/ReusableComponents/Prototype'
// import { Reflection } from '../../components/Ux/ReusableComponents/Reflection'

export const Fh = () => {
  return (
    <section className='Container studies'>
      <OpenerFh />
      <ResearchFh />
      <DefineFh />
      <IdeateFh />
      <DesignFh />
      <TestingFh />
      {/* <Prototype />
      <Reflection />  */}
    </section>
  )
}
