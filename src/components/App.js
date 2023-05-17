import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <PopupWithForm name="avatar" title="Обновить аватар" buttonValue="Сохранить" />
      <PopupWithForm name="profile" title="Редактировать профиль" buttonValue="Сохранить" />
      <PopupWithForm name="card" title="Новое место" buttonValue="Создать" />
      <PopupWithForm name="delete" title="Вы уверены?" buttonValue="Да" />

      {/* Начало блока Popup-profile */}
      {/* <div className="popup popup-profile">
        <div className="popup__container popup__container_type_form">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup-profile__form  form" name="profile-form" noValidate>
            <input
              name="profile-name"
              type="text"
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
              placeholder="Ваш тип деятельности"
              className="form__input"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__text-error form__text-error_type_profile-profession"></span>
            <button className="button popup__button">Сохранить</button>
          </form>
        </div>
      </div> */}
      {/* Конец блока Popup-profile */}

      {/* Начало блока Popup-card */}
      <div className="popup popup-card">
        <div className="popup__container popup__container_type_form">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup-card__form  form" name="card-form" noValidate>
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
            <button className="button popup__button" disabled>Создать</button>
          </form>
        </div>
      </div>
      {/* Конец блока Popup-card */}

      {/* Начало блока Popup-image */}
      <div className="popup popup_overlay-dark popup-image">
        <div className="popup__container popup__container_type_image">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <figure className="popup-image__wrap">
            <img src="#" alt="#" className="popup-image__photo" />
            <figcaption className="popup-image__caption"></figcaption>
          </figure>
        </div>
      </div>
      {/* Конец блока Popup-image */}

      {/* Начало блока Popup-delete */}
      <div className="popup popup-delete">
        <div className="popup__container popup__container_type_form">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <div className="popup-delete__wrap">
            <h2 className="popup-delete__text">Вы уверены?</h2>
            <button className="button popup__button">Да</button>
          </div>
        </div>
      </div>
      {/* Конец блока Popup-delete */}

      {/* Начало блока Popup-avatar */}
      <div className="popup popup-avatar">
        <div className="popup__container popup__container_type_form">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup-avatar__form  form" name="avatar-form" noValidate>
            <input
              name="avatar-link"
              type="url"
              placeholder="ссылка на аватар"
              className="form__input"
              required
            />
            <span className="form__text-error form__text-error_type_avatar-link">Вы пропустили это поле</span>
            <button className="button popup__button" disabled>Сохранить</button>
          </form>
        </div>
      </div>
      {/* Конец блока Popup-avatar */}

      {/* Начало блока template */}
      <template id="elements__template">
        <li className="elements__item">
          <button className="elements__trash" type="button" aria-label="Удалить"></button>
          <img src="#" alt="#" className="elements__photo" />
          <div className="elements__content">
            <button className="elements__like" type="button" aria-label="Лайкнуть"></button>
            <span className="elements__like-count"></span>
            <h2 className="elements__title"></h2>
          </div>
        </li>
      </template>
      {/* Конец блока template */}

    </>
  );
}

export default App;
