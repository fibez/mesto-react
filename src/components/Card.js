function Card(props) {
  function showCounter() {
    if (props.card.likes.length > 0) {
      const counter = props.card.likes.length;
      return counter;
    }
  }
  return (
    <>
      <div className="elements__card">
        <img className="elements__image" src={props.card.link} alt="Фотография" />
        <div className="elements__wrapper">
          <h2 className="elements__place-name">{props.card.name}</h2>
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
