function PopupWithImage() {
  return(
    <div className="popup popup_overlay-dark popup-image">
      <div className="popup__container popup__container_type_image">
        <button className="popup__close" type="button" aria-label="Закрыть"></button>
        <figure className="popup-image__wrap">
          <img src="#" alt="#" className="popup-image__photo" />
          <figcaption className="popup-image__caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default PopupWithImage;