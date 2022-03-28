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


const popupWithImage = new PopupWithImage(popupImage);

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


const cardPopup = new PopupWithForm(popupCard, (item) => {
  cardList.addItem(createNewCard(item));
  cardPopup.close();
  console.log(cardPopup)
  });


cardPopup.setEventListeners();




const userInfoProfile = new UserInfo({
  name: profileName,
  description: profileJob});

const popupWithForm = new PopupWithForm(popupProfile, () => {
  userInfoProfile.setUserInfo(inputName, inputJob)
});

popupWithForm.setEventListeners();

popupOpenCards.addEventListener('click', () => {
    cardPopup.open();
} )

popupOpenProfile.addEventListener('click',() => {
  const user = userInfoProfile.getUserInfo();
  inputName.value = user.name;
  inputJob.value = user.description;
  popupWithForm.open();
});




const editForm = new FormValidator(formValidationConfig, formProfile);
editForm.enableValidation();

const editCard = new FormValidator(formValidationConfig, formCard);
editCard.enableValidation();











