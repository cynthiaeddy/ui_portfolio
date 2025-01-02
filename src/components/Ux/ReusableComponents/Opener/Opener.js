/* eslint-disable no-unused-vars */
import './ReusableComponents.css'
import opener_down from '../../../../assets/ssc/opener_down.png'
import soap_ive from '../../../../assets/ssc/soap_ive.png'
import soap_opener from '../../../../assets/ssc/soap_opener.png'

export const Opener = () => {
  return (
    <section className='OpenerContainer'>
      <div className='Opener'>
        <img className='OpenerFoto' src={soap_opener} alt={soap_opener} />
        <img className='OpenerFoto' src={opener_down} alt={opener_down} />
        <img className='OpenerFoto' src={soap_ive} alt={soap_ive} />
      </div>
      <div className='background'></div>
    </section>
  )
}
export default Opener
