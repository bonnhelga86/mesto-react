import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
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

  function handleAddPlace(name, link) {
    api.setCard(name, link)
        .then(newCard => {
          setCards([newCard, ...cards]);
          closeAllPopups();
        })
        .catch(error => {
          console.error(error);
        });
  }

  function handleLikeCard(card, isLiked) {
    api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          setCards((cards) => cards.map((oldCard) => oldCard._id === card._id ? newCard : oldCard));
        })
        .catch(error => {
          console.error(error);
        });
  }

  function handleDeleteCardPopupOpen(cardId) {
    setSelectedDeleteCard(cardId);
    setIsDeleteCardPopupOpen(true);
  }

  function handleDeleteCard(event) {
    event.preventDefault();
    api.deleteCard(selectedDeleteCard)
        .then(() => {
          setCards(cards.filter(card => card._id !== selectedDeleteCard));
          setSelectedDeleteCard(null);
          closeAllPopups();
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
        onCardLike={handleLikeCard}
        onDeleteCard={handleDeleteCardPopupOpen}
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

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onAddPlace={handleAddPlace}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      />

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonValue="Да"
        isOpen={isDeleteCardPopupOpen}
        onSubmitForm={handleDeleteCard}
        onClose={handleCloseClick}
        onEscapeClose={handleEscClose}
      />

      <ImagePopup card={selectedCard} name='image' onClose={handleCloseClick} onEscapeClose={handleEscClose} />

    </CurrentUserContext.Provider>
  );
}

export default App;
