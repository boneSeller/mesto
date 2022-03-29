import {Card} from './Card.js';
import { FormValidator } from './FormValidator.js';
import {
  popupImage, 
  popupCloseImage, 
  initialCards, 
  formValidationConfig,
  popupCardImage,
  popupTextImage,
  popupOpenProfile,
  popupProfile,
  popupCloseProfile,
  profileName,
  popupCloseCards,
  profileJob,
  popupCard,
  popupOpenCards,
  cardContainer,
  formProfile,
  inputName,
  inputJob,
  formCard,
  inputTittle,
  inputLink
} from './constants.js';
import {Popup} from './Popup.js';
import {PopupWithForm} from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js';
import {UserInfo} from './UserInfo.js';
import {Section} from './Section.js'; 


const popupWithImage = new PopupWithImage('.popup_image');

popupWithImage.setEventListeners();

function handleCardClick(name, link)  {
  popupWithImage.open(name, link);
}


const createNewCard = (item) => { 
  const cardNew = new Card(item, '#cards__template', handleCardClick);
  return cardNew.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(createNewCard(data));
  }
}, cardContainer)

cardList.renderItems();


const cardPopup = new PopupWithForm('.popup_cards', () => {
  const userInfo = {
    name: inputTittle.value,
    link: inputLink.value
  }
  cardList.addItem(createNewCard(userInfo));
  cardPopup.close();
  });


cardPopup.setEventListeners();




const userInfoProfile = new UserInfo({
  name: '.profile__name',
  description: '.profile__job'});

const popupWithForm = new PopupWithForm('.popup_profile', () => {
  userInfoProfile.setUserInfo(inputName, inputJob)
});

popupWithForm.setEventListeners();

popupOpenCards.addEventListener('click', () => {
    cardPopup.open();
    editCard.blockButton();
    editCard.resetErrors();
} )

popupOpenProfile.addEventListener('click',() => {
  const user = userInfoProfile.getUserInfo();
  inputName.value = user.name;
  inputJob.value = user.description;
  popupWithForm.open();
  editForm.unblockButton();
  editForm.resetErrors();
});




const editForm = new FormValidator(formValidationConfig, formProfile);
editForm.enableValidation();

const editCard = new FormValidator(formValidationConfig, formCard);
editCard.enableValidation();











