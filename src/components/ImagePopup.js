import React from 'react';

function ImagePopup(props) {
  const isOpened = Boolean(Object.keys(props.card).length);
  const cardSrc = props.card.link;
  const cardName = props.card.name;

  return (
    <>
      <div className={`popup popup_type_galery ${isOpened ? 'popup_opened' : ''}`}>
        <div className="popup__container popup__galery-container">
          <button className="popup__close-button" type="button" aria-label="Закрыть попап" onClick={props.onClose} />
          <img className="popup__image" src={cardSrc} alt={cardName} />
          <h2 className="popup__image-desription">{props.card.name}</h2>
        </div>
      </div>
    </>
  );
}

export { ImagePopup };
