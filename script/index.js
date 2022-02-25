
import {Card, initialCards} from './Card.js';
import { FormValidator , formValidationConfig } from './FormValidator.js';


//POPUP
const popupOpenProfile = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const profileName = document.querySelector('.profile__name');
const popupCloseCards = document.querySelector('.popup__close_cards');
const profileJob = document.querySelector('.profile__job');
const popupCard = document.querySelector('.popup_cards');
const popupOpenCards = document.querySelector('.profile__button');
const popupImage = document.querySelector('.popup_image');
const popupCloseImage = document.querySelector('.popup__close_image');
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
  openPopup(popupProfile)
}

const  createNewCard = () => {
  const cardInfo = {
    name: inputTittle.value,
    link: inputLink.value
  }

  const cardNew = new Card(cardInfo, '#cards__template');
  const cardElement = cardNew.generateCard();
  cardContainer.prepend(cardElement);
}


initialCards.forEach((item) => {
  const card = new Card(item, '#cards__template');
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
});

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', closeOverlayByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  unblockButton();
  document.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', closeOverlayByEsc);
}



function closeOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    const open = document.querySelector('.popup_opened');
    closePopup(open);
  }
}

function closeOverlayByEsc(evt) {
  if (evt.key == 'Escape') {
    const open = document.querySelector('.popup_opened');
    closePopup(open);
  };
}


function handleSubmitCardsForm(evt) {
  evt.preventDefault();
  createNewCard();
  blockButton();
  formCard.reset();
  closePopup(popupCard);
}

const blockButton = () => {
  const popupButton = document.querySelector('#cardButton');
  popupButton.classList.add('popup__button_disabled');
  popupButton.setAttribute('disabled', true);
}

const unblockButton = () => {
  const popupButton = document.querySelector('#profileButton');
  const popupErrorName = document.querySelector('.username-error');
  const popupErrorJob = document.querySelector('.userjob-error');
  inputName.classList.remove('popup__input_type_error');
  inputJob.classList.remove('popup__input_type_error');
  popupErrorName.classList.remove('popup__error_visible');
  popupErrorJob.classList.remove('popup__error_visible');
  popupButton.classList.remove('popup__button_disabled');
  popupButton.removeAttribute('disabled');
}

popupOpenProfile.addEventListener('click', openProfilePopup);
popupCloseProfile.addEventListener('click', () => { closePopup(popupProfile) });
formProfile.addEventListener('submit', handleSubmitProfileForm);
popupOpenCards.addEventListener('click', () => { openPopup(popupCard) });
popupCloseCards.addEventListener('click', () => { closePopup(popupCard) });
popupCloseImage.addEventListener('click', () => { closePopup(popupImage) });
formCard.addEventListener('submit',  handleSubmitCardsForm);


//for git 2.8


