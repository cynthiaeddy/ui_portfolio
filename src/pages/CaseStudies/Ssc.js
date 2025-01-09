import './CaseStudies.css'
import { Opener } from '../../components/Ssc/Opener'
import { Research } from '../../components/Ssc/Research'
import { Define } from '../../components/Ssc/Define'
import { Ideate } from '../../components/Ssc/Ideate'
import { Design } from '../../components/Ssc/Design'
import { Testing } from '../../components/Ssc/Testing'
import { Prototype } from '../../components/Ssc/Prototype'
import { Reflection } from '../../components/Ssc/Reflection'

export const Ssc = () => {
  return (
    <section className='Container studies'>
      <Opener />
      <Research />
      <Define />
      <Ideate />
      <Design />
      <Testing />
      <Prototype />
      <Reflection />
    </section>
  )
}
