import './Modals.css'
import { IoCloseCircle } from 'react-icons/io5'
import lo_fi from '../../assets/ssc/ive_mid_fiheds.png'

export const ModalSscLoFi = ({ isOpen = true, modalSscClose }) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className='ModalWrapper'>
      <div className='ModalContainer'>
        <div className='modalSsc'>
          <button
            type='button'
            onClick={modalSscClose}
            className='ModalContainer-button'
          >
            <IoCloseCircle
              size={32}
              style={{
                float: 'right',
                background: 'white',
                borderRadius: '50%',
              }}
            />
          </button>
          <div className='ModalContainerScroll no'>
            <img className='competitive_lg' src={lo_fi} alt='competitive' />
          </div>
        </div>
      </div>
    </div>
  )
}
