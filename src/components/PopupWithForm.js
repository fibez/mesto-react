function PopupWithForm({ popupType, isOpened, onClose, name, children, buttonText }) {
  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть попап" onClick={onClose} />
        <p className="popup__description">{name}</p>
        <form className={`popup__form popup__form_type_${popupType}`} name={name} noValidate="">
          {children}
          <button className="popup__save-button popup__save-button_inactive" type="submit" disabled="">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export { PopupWithForm };
