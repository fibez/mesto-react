import profileAvatar from '../images/profile-avatar.jpg';

function Main() {
  return (
    <>
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__info-container">
            <button className="profile__avatar-button">
              <img className="profile__avatar" src={profileAvatar} alt="Аватар профиля" />
            </button>
            <p className="profile__description">Description</p>
            <div className="profile__name-button-container">
              <h1 className="profile__name">Me</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать описание профиля" />
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить фотографию" />
        </section>
        <section className="elements content__elements" />
      </main>
    </>
  );
}

export { Main };
