function PopupWithForm(props) {

  return(
    // <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
    <div className={props.isOpen ? `popup popup-${props.name} popup_opened` : `popup popup-${props.name}`}>
      <div className="popup__container popup__container_type_form">
        <button 
          className="popup__close" 
          type="button" 
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className={`form popup-${props.name}__form`} name={`${props.name}-form`} noValidate>
          {props.children}
          <button className="button popup__button">{props.buttonValue}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;