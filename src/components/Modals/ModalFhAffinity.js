import React, { useRef, useEffect, useState } from 'react'
import './Modals.css'
import { IoCloseCircle } from 'react-icons/io5'
import affinity from '../../assets/fh/feline_health_affinity_mapcrop.png'

export const ModalFhAffinity = ({ isOpen = true, modalSscClose }) => {
  if (!isOpen) {
    return null
  }
  const modalContentRef = useRef(null)
  const [modalHeight, setModalHeight] = useState('auto')

  useEffect(() => {
    if (modalContentRef.current && isOpen) {
      setModalHeight(modalContentRef.current.offsetHeight + 'px')
    }
  }, [isOpen])

  return (
    <div className='ModalWrapper'>
      <div className='ModalContainer'>
        <div
          className='modal-content'
          ref={modalContentRef}
          style={{ height: modalHeight }}
        >
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
              <img
                className='competitive_lg'
                src={affinity}
                alt='competitive'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
