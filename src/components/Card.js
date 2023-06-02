function Card({ cardInfo, onCardClick }) {

  return(
    <li className="elements__item">
      <button className="elements__trash" type="button" aria-label="Удалить"></button>
      <img
        src={cardInfo.link}
        alt={cardInfo.name}
        className="elements__photo"
        onClick={() => onCardClick(cardInfo)}
      />
      <div className="elements__content">
        <button className="elements__like" type="button" aria-label="Лайкнуть"></button>
        <span className="elements__like-count">{cardInfo.likes.length}</span>
        <h2 className="elements__title">{cardInfo.name}</h2>
      </div>
    </li>
  )
}

export default Card;
