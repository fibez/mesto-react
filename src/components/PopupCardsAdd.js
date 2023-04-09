import { PopupWithForm } from './PopupWithForm';

function PopupCardsAdd({ isOpened, onClose }) {
  return (
    <PopupWithForm
      popupType="cards-add"
      name="Новое место"
      isOpened={isOpened}
      onClose={onClose}
      buttonText={'Создать'}
    >
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
    </PopupWithForm>
  );
}

export { PopupCardsAdd };
