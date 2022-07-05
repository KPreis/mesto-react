import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import { api } from '../utils/api.js';
import { fieldsetAddPlace, fieldsetEditAvstar } from '../utils/consts.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function App() {
  const [cards, setData] = React.useState([]);
  const [currentUser, setDataProfile] = React.useState({ name: '', about: '' });
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
      .then(([initialCards, dataProfile]) => {
        setData(initialCards);
        setDataProfile(dataProfile);
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

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setData((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then(() => {
      setData(cards.filter((result) => result._id !== card._id));
    });
  };

  const handleUpdateUser = (profile) => {
    api
      .setProfile(profile)
      .then((result) => {
        setDataProfile(result);
        setIsOpenEditProfilePopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            cards={cards}
            handleCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
          <Footer />
          <ImagePopup card={card} onClose={closeAllPopups} />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
