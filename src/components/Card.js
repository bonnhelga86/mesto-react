function Card(props) {

  function handleClick() {
    props.onCardClick(props.cardInfo);
  }

  return(
    <li className="elements__item" key={props.cardInfo._id}>
      <button className="elements__trash" type="button" aria-label="Удалить"></button>
      <img 
        src={props.cardInfo.link} 
        alt={props.cardInfo.name} 
        className="elements__photo"
        onClick={handleClick} 
      />
      <div className="elements__content">
        <button className="elements__like" type="button" aria-label="Лайкнуть"></button>
        <span className="elements__like-count">{props.cardInfo.likes.length}</span>
        <h2 className="elements__title">{props.cardInfo.name}</h2>
      </div>
    </li>
  )
}

export default Card;