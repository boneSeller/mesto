
import './index.css';
import { Card } from './../components/Card.js';
import { FormValidator } from './../components/FormValidator.js';
import {
  formValidationConfig,
  popupOpenProfile,
  popupOpenCards,
  cardContainer,
  formProfile,
  inputName,
  inputJob,
  formCard,
  inputTittle,
  inputLink,
  avatarEdit,
  avatarPopup,
  avatar,
  formAvatar,
} from '../utils/constants.js';
import { Popup } from './../components/Popup.js';
import { PopupWithForm } from './../components/PopupWithForm.js';
import { PopupWithImage } from './../components/PopupWithImage.js';
import { UserInfo } from './../components/UserInfo.js';
import { Section } from './../components/Section.js';
import { Api } from './../components/Api.js';
import { PopupWithDelete } from '../components/PopupWithDelete';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
      authorization: '12c24169-53aa-4b9e-a065-7c4554a7ca18',
      'Content-Type': 'application/json'
}});

let userId;

const userInfo = new UserInfo({
  name: ".profile__name",
  about: ".profile__job",
  avatar: ".profile__avatar"
});

const popupWithImage = new PopupWithImage('.popup_image');
const popupDelete = new PopupWithDelete('#popup-delete');



const editForm = new FormValidator(formValidationConfig, formProfile);
editForm.enableValidation();

const editCard = new FormValidator(formValidationConfig, formCard);
editCard.enableValidation();

const editAvatar = new FormValidator(formValidationConfig, formAvatar);
editAvatar.enableValidation();




Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
      userId = data._id;
      userInfo.setUserInfo(data);
      initialCardsList.renderItems(cards);
  })
  .catch(err => {
    console.log(err);
  });



function createNewCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    },
    handleCardDelete: () => {
      popupDelete.setSubmitAction(() => {
        popupDelete.showLoading(true);
        api.deleteCard(data._id)
        .then(() => {
        card.deleteCard();
        popupDelete.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupDelete.showLoading(false);
        })
      })
      popupDelete.open();
    },
    handleLikeClick: () => {
      card.putLike();
    }
  }, '#cards__template', api, userId);

  return card.generateCard();
}



const initialCardsList = new Section({
  renderer: (data) => {
    initialCardsList.addItem(createNewCard(data));
  }
}, cardContainer);

const popupAddCard = new PopupWithForm('#popup-cards', (inputsValues) => {
  popupAddCard.showLoading(true);
  api.addUserCard(inputsValues)
    .then((data) => {
      initialCardsList.addItem(createNewCard(data));
      popupAddCard.close();
      editCard.resetErrors();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.showLoading(false);
    })
});



const popupEditProfile = new PopupWithForm('#popup-profile', (userData) => {
  popupEditProfile.showLoading(true);
  api.setUserInfo(userData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.showLoading(false);
    })
});

popupOpenProfile.addEventListener('click',() => {
  const {name, about} = userInfo.getUserInfo();
  popupEditProfile.showLoading(false);
  editForm.resetErrors();
  inputName.value = name;
  inputJob.value = about;
  popupEditProfile.open();
});


popupOpenCards.addEventListener('click', () => {
  editCard.resetErrors();
  popupAddCard.open();
})


const avatarEditPopup = new PopupWithForm('#popup-avatar', (inputsValues) => {
  avatarEditPopup.showLoading(true);
  api.updateUserAvatar(inputsValues)
    .then((data) => {
      userInfo.setUserAvatar(data);
      avatarEditPopup.close();
      editAvatar.resetErrors();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarEditPopup.showLoading(false);
    })
});

avatarEdit.addEventListener('click', () => {
  avatarEditPopup.showLoading(false);
  editAvatar.resetErrors();
  avatarEditPopup.open();
});

popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupDelete.setEventListeners();
avatarEditPopup.setEventListeners();













