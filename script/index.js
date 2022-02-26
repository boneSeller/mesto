import {Card} from './Card.js';
import { FormValidator } from './FormValidator.js';
import {popupImage, popupCloseImage, initialCards, formValidationConfig} from './constants.js';
import {openPopup, closePopup, closeOverlay, closeOverlayByEsc} from './utils.js';


//POPUP
const popupOpenProfile = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const profileName = document.querySelector('.profile__name');
const popupCloseCards = document.querySelector('.popup__close_cards');
const profileJob = document.querySelector('.profile__job');
const popupCard = document.querySelector('.popup_cards');
const popupOpenCards = document.querySelector('.profile__button');
const cardContainer = document.querySelector('.elements');
const formProfile = document.forms.formProfile;
const inputName = formProfile.elements.username;
const inputJob = formProfile.elements.userjob;
const formCard = document.forms.formCards;
const inputTittle = formCard.elements.usertittle;
const inputLink = formCard.elements.userlink;



const editForm = new FormValidator(formValidationConfig, formProfile);
editForm.enableValidation();

const editCard = new FormValidator(formValidationConfig, formCard);
editCard.enableValidation();

// PROFILE
const openProfilePopup = () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  editForm.resetErrors();
  openPopup(popupProfile);
}


function createNewCard(info)  {
  const cardNew = new Card(info, '#cards__template');
  const cardElement = cardNew.generateCard();
  cardContainer.prepend(cardElement);
}


initialCards.forEach((item) => {
  createNewCard(item);
});

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}


function handleSubmitCardsForm(evt) {
  evt.preventDefault();
  const cardInfo = {
    name: inputTittle.value,
    link: inputLink.value
  }
  createNewCard(cardInfo);
  closePopup(popupCard);
}




popupOpenProfile.addEventListener('click',() => { openProfilePopup()});
popupCloseProfile.addEventListener('click', () => { closePopup(popupProfile) });
formProfile.addEventListener('submit', handleSubmitProfileForm);
popupOpenCards.addEventListener('click', () => { formCard.reset(); openPopup(popupCard); editCard.resetErrors(); });
popupCloseCards.addEventListener('click', () => { closePopup(popupCard) });
popupCloseImage.addEventListener('click', () => { closePopup(popupImage) });
formCard.addEventListener('submit',  handleSubmitCardsForm);



