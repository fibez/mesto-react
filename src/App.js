import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <>
      <body className="page">
        <header className="header page__header">
          <img className="header__logo" src={logo} alt="Логотип портала" />
        </header>
        <main className="content">
          <section className="profile content__profile">
            <div className="profile__info-container">
              <button className="profile__avatar-button">
                <img
                  className="profile__avatar"
                  src="<%=require('./images/profile-avatar.jpg')%>"
                  alt="Аватар профиля"
                />
              </button>
              <p className="profile__description">Description</p>
              <div className="profile__name-button-container">
                <h1 className="profile__name">Me</h1>
                <button className="profile__edit-button" type="button" aria-label="Редактировать описание профиля" />
              </div>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить фотографию" />
          </section>
          <section className="elements content__elements" />
        </main>
        <footer className="footer page__footer">
          <p className="footer__copyright">©&nbsp;2020 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_profile-edit">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть попап" />
            <p className="popup__description">Редактировать профиль</p>
            <form className="popup__form popup__form_type_profile-edit" name="profile-form" noValidate="">
              <input
                className="popup__input popup__input_type_name"
                id="profile-name"
                placeholder="Как вас зовут?"
                name="profile-input-name"
                defaultValue=""
                required=""
                minLength={2}
                maxLength={40}
              />
              <span className="popup__error" id="profile-name-error" />
              <input
                className="popup__input popup__input_type_profession"
                id="profile-profession"
                placeholder="Кто вы?"
                name="profile-input-profession"
                defaultValue=""
                required=""
                minLength={2}
                maxLength={200}
              />
              <span className="popup__error" id="profile-profession-error" />
              <button className="popup__save-button popup__save-button_inactive" type="submit" disabled="">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_cards-add">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть попап" />
            <p className="popup__description">Новое место</p>
            <form className="popup__form popup__form_type_add-card" name="add-cards-form" noValidate="">
              <input
                className="popup__input popup__input_type_place-name"
                id="place-name"
                placeholder="Название"
                name="cards-input-place-name"
                defaultValue=""
                required=""
                minLength={2}
                maxLength={30}
              />
              <span className="popup__error popup__error_type_add-card" id="place-name-error" />
              <input
                className="popup__input popup__input_type_img-link"
                id="img-link"
                placeholder="Ссылка на картинку"
                name="cards-input-img-link"
                defaultValue=""
                required=""
                type="url"
              />
              <span className="popup__error popup__error_type_img-link" id="img-link-error" />
              <button className="popup__save-button popup__save-button_inactive" type="submit" disabled="">
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_galery">
          <div className="popup__container popup__galery-container">
            <button className="popup__close-button" type="button" aria-label="Закрыть попап" />
            <img className="popup__image" src="#" alt="Фотография" />
            <h2 className="popup__image-desription" />
          </div>
        </div>
        <div className="popup popup_type_remove-card">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть попап" />
            <p className="popup__description">Вы уверены?</p>
            <form className="popup__form popup__form_type_remove-card" name="remove-card-form" noValidate="">
              <button
                className="popup__save-button popup__confirm-button"
                type="submit"
                aria-label="Подтвердить удаление карточки?"
              >
                Да
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_edit-avatar">
          <div className="popup__container">
            <button className="popup__close-button" type="button" aria-label="Закрыть попап" />
            <p className="popup__description">Обновить аватар</p>
            <form className="popup__form popup__form_type_edit-avatar" name="edit-avatar-form" noValidate="">
              <input
                className="popup__input popup__input_type_avatar-link"
                id="avatar-link"
                placeholder="Ссылка на аватар"
                name="cards-input-avatar-link"
                defaultValue=""
                required=""
                type="url"
              />
              <span className="popup__error popup__error_type_avatar-link" id="avatar-link-error" />
              <button
                className="popup__save-button popup__save-button_inactive"
                type="submit"
                aria-label="Сохранить новый аватар"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
