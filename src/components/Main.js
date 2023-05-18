import React from 'react';
import api from '../utils/api.js';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, cardsData]) => {
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);

          setCards(cardsData);
        })
        .catch(error => {
          console.error(error);
        });
  }, [])

  function renderCards() {
    const arrayOfCard = [];

    cards.forEach(card => {
      const elem =  (
        <li className="elements__item" key={card._id}>
          <button className="elements__trash" type="button" aria-label="Удалить"></button>
          <img src={card.link} alt={card.name} className="elements__photo" />
          <div className="elements__content">
            <button className="elements__like" type="button" aria-label="Лайкнуть"></button>
            <span className="elements__like-count">{card.likes.length}</span>
            <h2 className="elements__title">{card.name}</h2>
          </div>
        </li>
      )
      arrayOfCard.push(elem);
    })

    console.log('arrayOfCard: ', arrayOfCard);
    return arrayOfCard;
  }
  
  return(
    <main className="content">
      <section className="profile">
        <div className="profile__content">

          <div className="profile__wrap-image">
            <img src={userAvatar} alt="" className="profile__image" onClick={props.onEditAvatar} />
          </div>

          <div className="profile__info">
            <button 
              className="profile__edit" 
              type="button" 
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            ></button>
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__profession">{userDescription}</p>
          </div>

        </div>
        <button
          className="button profile__button" 
          type="button" 
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      

      <section className="elements">
        <ul className="elements__list-item">
          {renderCards()}
        </ul>
      </section>
    </main>
  )
}

export default Main;