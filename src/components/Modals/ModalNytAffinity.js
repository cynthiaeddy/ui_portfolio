import './Modals.css'
import { IoCloseCircle } from 'react-icons/io5'
import affinity from '../../assets/nyt/nyt_affinity_crop.png'

export const ModalNytAffinity = ({ isOpen = true, modalSscClose }) => {
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
            <img className='competitive_lg' src={affinity} alt='competitive' />
          </div>
        </div>
      </div>
    </div>
  )
}
