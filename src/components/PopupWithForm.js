function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup__type_${props.popupType} ${props.isOpened ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button className="popup__close-button" type="button" aria-label="Закрыть попап" onClick={props.onClose} />
          <p className="popup__description">{props.name}</p>
          <form className={`popup__form popup__form_type_${props.popupType}`} name={props.name} noValidate="">
            {props.children}
          </form>
        </div>
      </div>
    </>
  );
}

export { PopupWithForm };
