import { PopupWithForm } from './PopupWithForm';

function PopupRemoveCard(props) {
  return (
    <>
      <PopupWithForm
        popupType="remove-card"
        name="Вы уверены?"
        isOpened={props.isOpened}
        onClose={props.onClose}
        children={
          <>
            <button
              className="popup__save-button popup__confirm-button"
              type="submit"
              aria-label="Подтвердить удаление карточки?"
            >
              Да
            </button>
          </>
        }
      />
    </>
  );
}

export { PopupRemoveCard };
