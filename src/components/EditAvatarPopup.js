import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose, onEscapeClose }) {
  const avatarRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const avatar = avatarRef.current.value;
    avatarRef.current.value = '';
    onUpdateAvatar(avatar);
  }

  return(
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonValue="Сохранить"
      isOpen={isOpen}
      onSubmitForm={handleSubmit}
      onClose={onClose}
      onEscapeClose={onEscapeClose}
    >
      <input
        ref={avatarRef}
        name="avatar-link"
        type="url"
        placeholder="ссылка на аватар"
        className="form__input"
        required
      />
      <span className="form__text-error form__text-error_type_avatar-link">Вы пропустили это поле</span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
