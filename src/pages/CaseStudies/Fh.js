import './CaseStudies.css'
import { OpenerFh } from '../../components/Fh/OpenerFh'
import { ResearchFh } from '../../components/Fh/ResearchFh'
import { DefineFh } from '../../components/Fh/DefineFh'
import { IdeateFh } from '../../components/Fh/IdeateFh'
import { DesignFh } from '../../components/Fh/DesignFh'
import { TestingFh } from '../../components/Fh/TestingFh'
import { PrototypeFh } from '../../components/Fh/PrototypeFh'
import { ReflectionFh } from '../../components/Fh/ReflectionFh'

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
      <ReflectionFh />
    </section>
  )
}
