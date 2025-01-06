import './Modals.css'
import './../ReusableComponents/ReusableComponents.css'
import { IoCloseCircle } from 'react-icons/io5'
import hi_desktop from '../../../assets/fh/fh_hi_desktop_top.png'
import hi_desktop_bottom from '../../../assets/fh/fh_hi_desktop_bottom.png'

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
            <div className='Container_desktop'>
              <img
                className='competitive fh_top'
                src={hi_desktop}
                alt={hi_desktop}
              />
              <img
                className='competitive fh_bottom'
                src={hi_desktop_bottom}
                alt={hi_desktop_bottom}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
