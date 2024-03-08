import React from 'react'
import "../style/modal-component.scss"

function Modal({ onClose, header, text, actions }) {
    const handleWindowClick = (e) => {
        if (e.target.classList.contains("modal-window")) {
          onClose();
        }
      };
    
    return (
        <>
            <div className="modal-window" onClick={handleWindowClick}>
                <section className="modal-content">
                    <article className='modal-header'>
                        <h2>{header}</h2>
                        <button className='modal-header__close-button' onClick={onClose}>X</button>
                    </article>

                    <article className='modal-text'>
                        <p>{text}</p>
                    </article>

                    <article className="modal-buttons">
                        {actions}
                    </article>
                </section>
            </div>
        </>
    );
}

export default Modal