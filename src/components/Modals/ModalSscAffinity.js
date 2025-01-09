import './Modals.css'
import { IoCloseCircle } from 'react-icons/io5'
import affinity from '../../assets/ssc/ive_affinity_mapsm.png'

export const ModalSscAffinity = ({ isOpen = true, modalSscClose }) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className='ModalWrapper'>
      <div className='ModalContainer overflow'>
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
          <div className='ModalContainerScroll'>
            <img className='competitive_lg' src={affinity} alt='competitive' />
          </div>
        </div>
      </div>
    </div>
  )
}
