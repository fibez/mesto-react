// import './App.css';
import React, { useState } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileCLick() {
    setIsEditProfileOpen(true);
  }

  function handleAddCardClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <body className="page">
        <Header />
        <Main
          onEditAvatar={handleAvatarClick}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          onEditProfile={handleEditProfileCLick}
          isEditProfileOpen={isEditProfileOpen}
          onAddPlace={handleAddCardClick}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <Footer />
      </body>
    </>
  );
}

export default App;
