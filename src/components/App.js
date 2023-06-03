import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
        .then(userData => {
          setCurrentUser(userData);
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
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={setSelectedCard}
        onDeleteCard={setIsDeleteCardPopupOpen}
      />
      <Footer />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonValue="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      >
        <input
          name="avatar-link"
          type="url"
          placeholder="ссылка на аватар"
          className="form__input"
          required
        />
        <span className="form__text-error form__text-error_type_avatar-link">Вы пропустили это поле</span>
      </PopupWithForm>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonValue="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      >
        <input
          name="profile-name"
          type="text"
          defaultValue={currentUser.name}
          placeholder="Ваше имя"
          className="form__input"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__text-error form__text-error_type_profile-name">Вы пропустили это поле</span>
        <input
          name="profile-profession"
          type="text"
          defaultValue={currentUser.about}
          placeholder="Ваш тип деятельности"
          className="form__input"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__text-error form__text-error_type_profile-profession"></span>
      </PopupWithForm>

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
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      />

      <ImagePopup card={selectedCard} name='image' onClose={handleCloseClick} onEscapeClose={handleEscClose} />

    </CurrentUserContext.Provider>
  );
}

export default App;
