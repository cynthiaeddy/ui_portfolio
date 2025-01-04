import './CaseStudies.css'
import { Opener } from '../../components/Ux/ReusableComponents/Opener'
import { Research } from '../../components/Ux/ReusableComponents/Research'
import { Define } from '../../components/Ux/ReusableComponents/Define'
import { Ideate } from '../../components/Ux/ReusableComponents/Ideate'

export const Ssc = () => {
  return (
    <section className='Container studies'>
      <Opener />
      <Research />
      <Define />
      <Ideate />
    </section>
  )
}
