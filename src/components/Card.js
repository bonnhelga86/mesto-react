import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card({ cardInfo, onCardClick, onDeleteCard }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardInfo.owner._id === currentUser._id;
  const isLiked = cardInfo.likes.some(like => like._id === currentUser._id);

  return(
    <li className="elements__item">
      {isOwn && <button className="elements__trash" onClick={onDeleteCard} type="button" aria-label="Удалить"></button>}
      <img
        src={cardInfo.link}
        alt={cardInfo.name}
        className="elements__photo"
        onClick={() => onCardClick(cardInfo)}
      />
      <div className="elements__content">
        <button
          className={isLiked ? `elements__like elements__like_type_active` : `elements__like`}
          type="button"
          aria-label="Лайкнуть">
        </button>
        <span className="elements__like-count">{cardInfo.likes.length}</span>
        <h2 className="elements__title">{cardInfo.name}</h2>
      </div>
    </li>
  )
}

export default Card;