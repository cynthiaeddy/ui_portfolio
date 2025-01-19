import './Modals.css'
import { IoCloseCircle } from 'react-icons/io5'
import flow from '../../assets/nyt/nyt_user_flow2crop.png'

export const ModalNytFlow = ({ isOpen = true, modalSscClose }) => {
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
            <img className='competitive_lg' src={flow} alt='competitive' />
          </div>
        </div>
      </div>
    </div>
  )
}
