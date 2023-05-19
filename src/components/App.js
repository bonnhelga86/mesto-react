import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({name: '', about: ''});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(userName, userDescription) {
    setUserInfo({name: userName, about: userDescription});
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
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

  React.useEffect(() => {
    document.addEventListener('keyup', handleEscClose);

    return() => {
      document.removeEventListener('keyup', handleEscClose);
    }
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, selectedCard])

  return (
    <>
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        buttonValue="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
      >
        <input
          name="profile-name"
          type="text"
          defaultValue={userInfo.name}
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
          defaultValue={userInfo.about}
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

      <PopupWithForm name="delete" title="Вы уверены?" buttonValue="Да" onClose={handleCloseClick} />

      <ImagePopup card={selectedCard} name='image' onClose={handleCloseClick} />

    </>
  );
}

export default App;