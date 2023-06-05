import React from 'react';

function PopupWithForm({ name, title, buttonValue, isOpen, onSubmitForm, onClose, onEscapeClose, children }) {

  React.useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keyup', onEscapeClose);

    return() => {
      document.removeEventListener('keyup', onEscapeClose);
    }
  }, [isOpen])

  return(
    <div
      className={isOpen ? `popup popup-${name} popup_opened` : `popup popup-${name}`}
      onClick={onClose}
    >
      <div className="popup__container popup__container_type_form">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`form popup-${name}__form`}
          onSubmit={onSubmitForm}
          name={`${name}-form`}
          noValidate
        >
          {children}
          <button className="button popup__button">{buttonValue}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
