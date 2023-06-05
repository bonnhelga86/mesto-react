import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [selectedDeleteCard, setSelectedDeleteCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, cardsData]) => {
          setCurrentUser(userData);
          setCards(cardsData);
        })
        .catch(error => {
          console.error(error);
        })
  }, [])

  // ---------------  Заменить 4 функции одной?  ----------------
  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }

  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(true);
  // }

  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(true);
  // }

// ------------------  End  ------------------------

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
        .then(userData => {
          setCurrentUser(userData);
          closeAllPopups();
        })
        .catch(error => {
          console.error(error);
        });
  }

  function handleUpdateUser(name, about) {
    api.setUserInfo(name, about)
        .then(userData => {
          setCurrentUser(userData);
          closeAllPopups();
        })
        .catch(error => {
          console.error(error);
        });
  }

  function handleCardLike(card, isLiked) {
    api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          setCards((cards) => cards.map((oldCard) => oldCard._id === card._id ? newCard : oldCard));
        })
        .catch(error => {
          console.error(error);
        });
  }

  function handleCardDeletePopupOpen(cardId) {
    setSelectedDeleteCard(cardId);
    setIsDeleteCardPopupOpen(true);
  }

  function handleCardDelete(event) {
    event.preventDefault();

    api.deleteCard(selectedDeleteCard)
        .then(() => {
          setCards(cards.filter(card => card._id !== selectedDeleteCard));
          setSelectedDeleteCard(null);
        })
        .catch(error => {
          console.error(error);
        });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({});
  }

  function handleEscClose(event) {
    if (event.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleCloseClick(event) {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
      closeAllPopups();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        cards={cards}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={setSelectedCard}
        onCardLike={handleCardLike}
        onDeleteCard={handleCardDeletePopupOpen}
      />
      <Footer />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onUpdateAvatar={handleUpdateAvatar}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onUpdateUser={handleUpdateUser}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      />

      <PopupWithForm
        name="card"
        title="Новое место"
        buttonValue="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      >
        <input
          name="card-name"
          type="text"
          placeholder="Название"
          className="form__input"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__text-error form__text-error_type_card-name"></span>
        <input
          name="card-link"
          type="url"
          placeholder="Ссылка на картинку"
          className="form__input"
          required
        />
        <span className="form__text-error form__text-error_type_card-link"></span>
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonValue="Да"
        isOpen={isDeleteCardPopupOpen}
        onSubmitForm={handleCardDelete}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      />

      <ImagePopup card={selectedCard} name='image' onClose={handleCloseClick} onEscapeClose={handleEscClose} />

    </CurrentUserContext.Provider>
  );
}

export default App;
