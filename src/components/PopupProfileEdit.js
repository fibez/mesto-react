import { PopupWithForm } from './PopupWithForm';

function PopupProfileEdit(props) {
  return (
    <>
      <PopupWithForm
        popupType="profile-edit"
        name="Редактировать профиль"
        isOpened={props.isOpened}
        onClose={props.onClose}
        children={
          <>
            <input
              className={`popup__input popup__input_type_name`}
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
          </>
        }
      />
    </>
  );
}

// ${props.isOpened ? 'popup_opened' : ''}

export { PopupProfileEdit };
