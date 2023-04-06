import { PopupWithForm } from './PopupWithForm';

function PopupEditAvatar(props) {
  return (
    <>
      <PopupWithForm
        popupType="edit-avatar"
        name="Обновить аватар"
        isOpened={props.isOpened}
        onClose={props.onClose}
        children={
          <>
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
          </>
        }
      />
    </>
  );
}

export { PopupEditAvatar };
