import { PopupWithForm } from './PopupWithForm';

function PopupEditAvatar({ isOpened, onClose }) {
  return (
    <PopupWithForm
      popupType="edit-avatar"
      name="Обновить аватар"
      isOpened={isOpened}
      onClose={onClose}
      buttonText={'Сохранить'}
    >
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
    </PopupWithForm>
  );
}

export { PopupEditAvatar };
