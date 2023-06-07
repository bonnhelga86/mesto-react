import React from 'react';

function Popup({ isOpen, onEscapeClose, name, onClose, extraClassName='', type, children }) {
  React.useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keyup', onEscapeClose);

    return() => {
      document.removeEventListener('keyup', onEscapeClose);
    }
  }, [isOpen])

  return(
    <div
        className={isOpen
                    ? `popup ${extraClassName} popup-${name} popup_opened`
                    : `popup ${extraClassName} popup-${name}`
                  }
        onClick={onClose}
    >
      <div className={`popup__container popup__container_type_${type}`}>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default Popup;
