import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, children, setModalOpen }) => {
  if (isOpen) {
    return (
      <div className='modal_bg' onClick={setModalOpen}>
        <div className="modal_content">

          <div className="xclose" title='Fechar' onClick={setModalOpen}>
            X
          </div>
          
          {children}

          <div className='modal_btn'>
            <button onClick={setModalOpen}>
              Fechar
            </button>
          </div>

        </div>
      </div>
    )
  }
  return null
}

export default Modal