function ImagePopup() {
  return (
    <>
      <div className="popup popup_type_galery">
        <div className="popup__container popup__galery-container">
          <button className="popup__close-button" type="button" aria-label="Закрыть попап" />
          <img className="popup__image" src="#" alt="Фотография" />
          <h2 className="popup__image-desription" />
        </div>
      </div>
    </>
  );
}

export { ImagePopup };
