import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <PopupWithForm name="avatar" title="Обновить аватар" buttonValue="Сохранить">
        <input
          name="avatar-link"
          type="url"
          placeholder="ссылка на аватар"
          className="form__input"
          required
        />
        <span className="form__text-error form__text-error_type_avatar-link">Вы пропустили это поле</span>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Редактировать профиль" buttonValue="Сохранить">
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
      </PopupWithForm>

      <PopupWithForm name="card" title="Новое место" buttonValue="Создать">
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

      <PopupWithForm name="delete" title="Вы уверены?" buttonValue="Да">

      </PopupWithForm>

      <PopupWithImage />

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
