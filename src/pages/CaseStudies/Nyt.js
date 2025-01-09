import './CaseStudies.css'
import { OpenerNyt } from '../../components/Nyt/OpenerNyt'
import { ResearchNyt } from '../../components/Nyt/ResearchNyt'
import { DefineNyt } from '../../components/Nyt/DefineNyt'
import { IdeateNyt } from '../../components/Nyt/IdeateNyt'
import { DesignNyt } from '../../components/Nyt/DesignNyt'
import { TestingNyt } from '../../components/Nyt/TestingNyt'
import { PrototypeNyt } from '../../components/Nyt/PrototypeNyt'
import { ReflectionNyt } from '../../components/Nyt/ReflectionNyt'

export const Nyt = () => {
  return (
    <section className='Container studies'>
      <OpenerNyt />
      <ResearchNyt />
      <DefineNyt />
      <IdeateNyt />
      <DesignNyt />
      <TestingNyt />
      <PrototypeNyt />
      <ReflectionNyt />
    </section>
  )
}
