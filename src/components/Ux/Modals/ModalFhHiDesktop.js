import './Modals.css'
import './../ReusableComponents/ReusableComponents.css'
import { IoCloseCircle } from 'react-icons/io5'
import hi_desktop from '../../../assets/fh/fh_hifi_desktop.png'

export const ModalFhHiDesktop = ({ isOpen = true, modalSscClose }) => {
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
            <img className='fhModal' src={hi_desktop} alt={hi_desktop} />
          </div>
        </div>
      </div>
    </div>
  )
}
