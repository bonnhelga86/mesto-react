import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
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

  function handleEditProfileClick() {
    props.onEditProfile(userName, userDescription);
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
              onClick={handleEditProfileClick}
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
          {cards.map(card => <Card key={card._id} cardInfo={card} onCardClick={props.onCardClick} />)}
        </ul>
      </section>
    </main>
  )
}

export default Main;
