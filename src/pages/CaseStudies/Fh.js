import './CaseStudies.css'
import { OpenerFh } from '../../components/Ux/ReusableComponents/Fh/OpenerFh'
import { ResearchFh } from '../../components/Ux/ReusableComponents/Fh/ResearchFh'
import { DefineFh } from '../../components/Ux/ReusableComponents/Fh/DefineFh'
import { IdeateFh } from '../../components/Ux/ReusableComponents/Fh/IdeateFh'
import { DesignFh } from '../../components/Ux/ReusableComponents/Fh/DesignFh'
import { TestingFh } from '../../components/Ux/ReusableComponents/Fh/TestingFh'
import { PrototypeFh } from '../../components/Ux/ReusableComponents/Fh/PrototypeFh'

export const Fh = () => {
  return (
    <section className='Container studies'>
      <OpenerFh />
      <ResearchFh />
      <DefineFh />
      <IdeateFh />
      <DesignFh />
      <TestingFh />
      <PrototypeFh />
      {/* <Reflection />  */}
    </section>
  )
}
