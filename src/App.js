import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ImagePopup from './components/ImagePopup';
import PopupWithForm from './components/PopupWithForm';
import { api } from './utils/api.js';
import {
  fieldsetAddPlace,
  fieldsetEditProfile,
  fieldsetEditAvstar,
} from './utils/consts.js';
import { useEffect, useState } from 'react';

function App() {
  const [cards, setData] = useState([]);
  const [dataProfile, setDataProfile] = useState([]);
  const [card, setCard] = useState(null);
  const [isEditProfilePopupOpen, setIsOpenEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsOpenAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setIsOpenEditAvatarPopup] = useState(false);
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfile()]).then(
      ([initialCards, profileData]) => {
        setData(initialCards);
        setDataProfile(profileData);
      }
    );
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
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          {fieldsetEditAvstar}
        </PopupWithForm>
        ;
        <PopupWithForm
          title={'Редактировать профиль'}
          id={'profileEditPopup'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          {fieldsetEditProfile}
        </PopupWithForm>
        ;
        <PopupWithForm
          title={'Новое место'}
          id={'cardAddPopup'}
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
