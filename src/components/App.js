// import './App.css';
import React, { useState } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupProfileEdit } from './PopupProfileEdit';
import { PopupCardsAdd } from './PopupCardsAdd';
import { PopupEditAvatar } from './PopupEditAvatar';
import { ImagePopup } from './ImagePopup';
import { PopupRemoveCard } from './PopupRemoveCard';

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileCLick() {
    setIsEditProfileOpen(true);
  }

  function handleAddCardClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link });
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleAvatarClick}
          onEditProfile={handleEditProfileCLick}
          onAddPlace={handleAddCardClick}
          onCardClick={handleCardClick}
          onClose={closeAllPopups}
        />
        <Footer />
        <PopupProfileEdit isOpened={isEditProfileOpen} onClose={closeAllPopups} />
        <PopupCardsAdd isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <PopupEditAvatar isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupRemoveCard isOpened={''} /> {/*-------------------*/}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
