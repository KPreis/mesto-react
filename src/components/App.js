import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/api.js';
import {
  fieldsetAddPlace,
  fieldsetEditProfile,
  fieldsetEditAvstar,
} from '../utils/consts.js';
import React from 'react';

function App() {
  const [cards, setData] = React.useState([]);
  const [dataProfile, setDataProfile] = React.useState({});
  const [card, setCard] = React.useState(null);
  const [isEditProfilePopupOpen, setIsOpenEditProfilePopup] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsOpenAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsOpenEditAvatarPopup] = React.useState(
    false
  );
  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfile()])
      .then(([initialCards, profileData]) => {
        setData(initialCards);
        setDataProfile(profileData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCardClick = (card) => {
    setCard(card);
  };

  const handleEditAvatarClick = () => {
    setIsOpenEditAvatarPopup(true);
  };
  const handleEditProfileClick = () => {
    setIsOpenEditProfilePopup(true);
  };
  const handleAddPlaceClick = () => {
    setIsOpenAddPlacePopup(true);
  };
  const closeAllPopups = () => {
    setIsOpenAddPlacePopup(false);
    setIsOpenEditProfilePopup(false);
    setIsOpenEditAvatarPopup(false);
    setCard(null);
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          cards={cards}
          dataProfile={dataProfile}
          handleCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <ImagePopup card={card} onClose={closeAllPopups} />
        <PopupWithForm
          title={'Обновить аватар'}
          id={'avatarUpdatePopup'}
          textButton={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          {fieldsetEditAvstar}
        </PopupWithForm>
        ;
        <PopupWithForm
          title={'Редактировать профиль'}
          id={'profileEditPopup'}
          textButton={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          {fieldsetEditProfile}
        </PopupWithForm>
        ;
        <PopupWithForm
          title={'Новое место'}
          id={'cardAddPopup'}
          textButton={'Сохранить'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          {fieldsetAddPlace}
        </PopupWithForm>
        ;
      </div>
    </div>
  );
}

export default App;
