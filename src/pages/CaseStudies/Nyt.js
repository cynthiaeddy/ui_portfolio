import './CaseStudies.css'
import { OpenerNyt } from '../../components/Ux/ReusableComponents/Nyt/OpenerNyt'
import { ResearchNyt } from '../../components/Ux/ReusableComponents/Nyt/ResearchNyt'
import { DefineNyt } from '../../components/Ux/ReusableComponents/Nyt/DefineNyt'
import { IdeateNyt } from '../../components/Ux/ReusableComponents/Nyt/IdeateNyt'
import { DesignNyt } from '../../components/Ux/ReusableComponents/Nyt/DesignNyt'

export const Nyt = () => {
  return (
    <section className='Container studies'>
      <OpenerNyt />
      <ResearchNyt />
      <DefineNyt />
      <IdeateNyt />
      <DesignNyt />
      {/* <Testing />
      <Prototype />
      <Reflection />  */}
    </section>
  )
}
