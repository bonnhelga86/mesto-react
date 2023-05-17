function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup-card').classList.add('popup_opened');
  }

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__content">

          <div className="profile__wrap-image">
            <img src="#" alt="" className="profile__image" onClick={handleEditAvatarClick} />
          </div>

          <div className="profile__info">
            <button 
              className="profile__edit" 
              type="button" 
              aria-label="Редактировать"
              onClick={handleEditProfileClick}
            ></button>
            <h1 className="profile__name"></h1>
            <p className="profile__profession"></p>
          </div>

        </div>
        <button
          className="button profile__button" 
          type="button" 
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      

      <section className="elements">
        <ul className="elements__list-item"></ul>
      </section>
    </main>
  )
}

export default Main;