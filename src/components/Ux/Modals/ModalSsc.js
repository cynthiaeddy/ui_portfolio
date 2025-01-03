/* eslint-disable no-unused-vars */
import './ModalSsc.css';
const ModalSsc = ({ show, handleClose, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose} className='Button_close'>
          close
        </button>
      </section>
    </div>
  );
}
