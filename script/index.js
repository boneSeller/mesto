// POPUP PROFILE
const popupOpenProfile = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const popupSaveProfile = document.querySelector('.popup__save_profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');   
const popupCard = document.querySelector('.popup_cards');
const popupImage = document.querySelector('.popup_image');
const popupOpenCards = document.querySelector('.profile__button');
const popupCloseCards = document.querySelector('.popup__close_cards');
const imageText = document.querySelector('.popup__text');
const imagePopupUrl = document.querySelector('.popup__image'); 
const textCards = document.querySelector('.cards__text');
const savePopupCard = document.querySelector('.popup__save_cards');
const popupCloseImage = document.querySelector('.popup__close_image');
const cardContainer = document.querySelector('.elements');
const formProfile = document.forms.formProfile;
const username = formProfile.elements.username;
const userjob = formProfile.elements.userjob;
const formCard = document.forms.formCards;
const usertittle = formCard.elements.usertitle;
const userlink = formCard.elements.userlink;

// PROFILE 
const OpenProfilePopup = () => {
  username.value = profileName.textContent;
  userjob.value = profileJob.textContent;
  openPopup(popupProfile)
}


function handleSubmitProfileForm(evt) {
    evt.preventDefault(); 
    profileName.textContent = username.value;
    profileJob.textContent = userjob.value;
    setSubmitButton(false, popupSaveProfile);
    closePopup(popupProfile);
}

function setSubmitButton(isFormValid, savebutton) {
  if (isFormValid) {
    savebutton.removeAttribute('disabled');
    savebutton.classList.remove('popup__save_disabled')
  }

  else { 
    savebutton.setAttribute('disabled', true);
    savebutton.classList.add('popup__save_disabled')
  }
}



function createCard(name,link) {
  const templateCard = document.querySelector('#cards__template').content;
  const cardNew = templateCard.querySelector('.cards').cloneNode(true);
  const cardImage = cardNew.querySelector('.cards__image');
  const cardText = cardNew.querySelector('.cards__text');
  cardText.textContent = name;
  const cardLike = cardNew.querySelector('.cards__like');
  const deleteButton = cardNew.querySelector('.cards__trash');
  

  cardImage.alt = name;
  cardImage.src= link;

  
  cardLike.addEventListener('click', (e) => {
    e.target.classList.toggle('cards__like_active')
  })

  deleteButton.addEventListener('click', (e) => {
    e.target.closest('.cards').remove();
  })

  cardImage.addEventListener('click', () => {
      imageText.textContent = name;
      imagePopupUrl.alt = name;
      imagePopupUrl.src = link;
      openPopup(popupImage);
  })

  return cardNew;
}

  initialCards.forEach(createNewCard);


  function createNewCard(item) {
    const cardNew = createCard(item.name, item.link);
    cardContainer.prepend(cardNew);
  }

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}



function handleSubmitCardsForm(evt) {
  evt.preventDefault(); 
  const cardInfo = {
    name: usertittle.value ,
    link: userlink.value
  }
  formCard.reset();
  createNewCard(cardInfo);
  setSubmitButton(false, savePopupCard);
  closePopup(popupCard);
}





popupOpenProfile.addEventListener('click', OpenProfilePopup);
popupCloseProfile.addEventListener('click', () => {closePopup(popupProfile)});
formProfile.addEventListener('submit', handleSubmitProfileForm);
popupOpenCards.addEventListener('click', () => {openPopup(popupCard)});
popupCloseCards.addEventListener('click', () => { closePopup(popupCard)});
popupCloseImage.addEventListener('click', () => { closePopup(popupImage)});
formCard.addEventListener('submit', handleSubmitCardsForm);

//for git
formProfile.addEventListener('input', (evt) => {
  const isValid = username.value.length > 0 && userjob.value.length > 0;
  setSubmitButton(isValid, popupSaveProfile);
});

formCard.addEventListener('input', (evt) => {
  const isValid = usertittle.value.length > 0 && userlink.value.length > 0;
  setSubmitButton(isValid, savePopupCard);
});
