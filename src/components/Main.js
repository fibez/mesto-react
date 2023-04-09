import profileAvatar from '../images/profile-avatar.jpg';
import { useEffect, useState } from 'react';
import { api } from './utils/Api';
import { Card } from './Card';

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(profileAvatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);

        setCards(initialCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__info-container">
            <button className="profile__avatar-button" onClick={onEditAvatar}>
              <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
            </button>
            <p className="profile__description">{userDescription}</p>
            <div className="profile__name-button-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать описание профиля"
                onClick={onEditProfile}
              />
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить фотографию" onClick={onAddPlace} />
        </section>
        <ul className="elements content__elements">
          {cards.map((card) => {
            return (
              <li key={card._id}>
                <Card card={card} onCardClick={onCardClick} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export { Main };
