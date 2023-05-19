function ImagePopup(props) {
  return(
    <div className={props.card 
                  ? `popup popup_overlay-dark popup-${props.name} popup_opened` 
                  : `popup popup_overlay-dark popup-${props.name}`}
        onClick={props.onClose}
    >
      <div className="popup__container popup__container_type_image">
        <button 
          className="popup__close" 
          type="button" 
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <figure className="popup-image__wrap">
          <img src={props.card.link} alt="#" className="popup-image__photo" />
          <figcaption className="popup-image__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;