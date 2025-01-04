import './Modals.css'
// import { GrClose } from 'react-icons/gr'
import { IoCloseCircle } from 'react-icons/io5'
// import closeButton from
import competitive_lg from '../../../assets/ssc/competitive_two.png'

export const ModalSsc = ({ isOpen = true, modalSscClose }) => {
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
          <div className='ModalContainerScroll'>
            <img
              className='competitive_lg'
              src={competitive_lg}
              alt='competitive'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
