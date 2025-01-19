import './Modals.css'
import { IoCloseCircle } from 'react-icons/io5'
import flow from '../../assets/ssc/ssc_user_flowcrop.png'

export const ModalSscFlow = ({ isOpen = true, modalSscClose }) => {
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
            <img className='competitive_lg' src={flow} alt='competitive' />
          </div>
        </div>
      </div>
    </div>
  )
}
