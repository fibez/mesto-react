import React from 'react';

function Card(props) {
  const card = props.card;

  function showCounter() {
    if (card.likes.length > 0) {
      const counter = card.likes.length;
      return counter;
    }
  }

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <div className="elements__card">
        <img className="elements__image" src={card.link} alt="Фотография" onClick={handleCardClick} />
        <div className="elements__wrapper">
          <h2 className="elements__place-name">{card.name}</h2>
          <div className="elements__like-container">
            <button className="elements__like" type="button" aria-label="Понравилось"></button>
            <span className="elements__like-counter">{showCounter()}</span>
          </div>
        </div>
        <button className="elements__bucket elements__bucket_type_hidden" type="button" aria-label="Удалить"></button>
      </div>
    </>
  );
}

export { Card };
