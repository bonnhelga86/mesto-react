import React from 'react';

function ImagePopup({ card, name, onClose, onEscapeClose }) {

  const cardIsEmpty = (Object.keys(card).length === 0);

  React.useEffect(() => {
    if (cardIsEmpty) return;

    document.addEventListener('keyup', onEscapeClose);

    return() => {
      document.removeEventListener('keyup', onEscapeClose);
    }
  }, [cardIsEmpty])

  return(
    <div className={(cardIsEmpty)
                  ? `popup popup_overlay-dark popup-${name}`
                  : `popup popup_overlay-dark popup-${name} popup_opened`}
        onClick={onClose}
    >
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <figure className="popup-image__wrap">
          <img src={card.link} alt={card.name} className="popup-image__photo" />
          <figcaption className="popup-image__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
