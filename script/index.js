// POPUP PROFILE
const popupOpenProfile = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const profileButton = document.querySelector('#profileButton');
const profileName = document.querySelector('.profile__name');
const popupCloseCards = document.querySelector('.popup__close_cards');
const profileJob = document.querySelector('.profile__job');
const popupCard = document.querySelector('.popup_cards');
const popupOpenCards = document.querySelector('.profile__button');
const textCards = document.querySelector('.cards__text');
const cardButton = document.querySelector('#cardButton');
const formProfile = document.forms.formProfile;
const inputName = formProfile.elements.username;
const inputJob = formProfile.elements.userjob;
const popupFormCard = document.forms.formCards;
const formCard = document.forms.formCards;
const inputTittle = formCard.elements.usertittle;
const inputLink = formCard.elements.userlink;

// PROFILE 
const openProfilePopup = () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile)
}


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


