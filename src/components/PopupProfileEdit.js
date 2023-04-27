import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { PopupWithForm } from './PopupWithForm';

function PopupProfileEdit({ isOpened, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    const userData = {
      name: name,
      about: description,
    };

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(userData);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      popupType="profile-edit"
      name="Редактировать профиль"
      isOpened={isOpened}
      onClose={onClose}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input popup__input_type_name`}
        id="profile-name"
        placeholder="Как вас зовут?"
        name="profile-input-name"
        defaultValue={name}
        required=""
        minLength={2}
        maxLength={40}
        onChange={handleNameChange}
      />
      <span className="popup__error" id="profile-name-error" />
      <input
        className="popup__input popup__input_type_profession"
        id="profile-profession"
        placeholder="Кто вы?"
        name="profile-input-profession"
        defaultValue={description}
        required=""
        minLength={2}
        maxLength={200}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error" id="profile-profession-error" />
    </PopupWithForm>
  );
}

export { PopupProfileEdit };
