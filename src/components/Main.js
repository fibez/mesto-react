import profileAvatar from '../images/profile-avatar.jpg';
import { PopupProfileEdit } from './PopupProfileEdit';
import { PopupCardsAdd } from './PopupCardsAdd';
import { PopupEditAvatar } from './PopupEditAvatar';
import { ImagePopup } from './ImagePopup';
import { PopupRemoveCard } from './PopupRemoveCard';

function Main(props) {
  return (
    <>
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__info-container">
            <button className="profile__avatar-button" onClick={props.onEditAvatar}>
              <img className="profile__avatar" src={profileAvatar} alt="Аватар профиля" />
            </button>
            <p className="profile__description">Description</p>
            <div className="profile__name-button-container">
              <h1 className="profile__name">Me</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать описание профиля"
                onClick={props.onEditProfile}
              />
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить фотографию"
            onClick={props.onAddPlace}
          />
        </section>
        <section className="elements content__elements" />
        <PopupProfileEdit isOpened={props.isEditProfileOpen} onClose={props.onClose} />
        <PopupCardsAdd isOpened={props.isAddPlacePopupOpen} onClose={props.onClose} />
        <PopupEditAvatar isOpened={props.isEditAvatarPopupOpen} onClose={props.onClose} />
        <PopupRemoveCard isOpened={''} /> {/*-------------------*/}
        <ImagePopup />
      </main>
    </>
  );
}

export { Main };
