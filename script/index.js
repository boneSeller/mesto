// POPUP PROFILE
const popupOpenProfile = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('#popup-profile');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const nameInput = document.querySelector('.popup__user_name');
const jobInput = document.querySelector('.popup__user_job');
const popupSaveProfile = document.querySelector('.popup__save_profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');   
const formElement = document.querySelector('.popup__form_profile');
const popupCard = document.querySelector('.popup_cards');
const popupImage = document.querySelector('#popup-image');
const popupOpenCards = document.querySelector('.profile__button');
const popupCloseCards = document.querySelector('.popup__close_cards');
const imageText = document.querySelector('.popup__text');
const imagePopupUrl = document.querySelector('.popup__image'); 
const textCards = document.querySelector('.cards__text');
const savePopupCard = document.querySelector('.popup__save_cards');
const popupText = document.querySelector('.popup__user_title');
const popupLink = document.querySelector('.popup__user_link');
const formCards = document.querySelector('.popup__form_cards');
const popupCloseImage = document.querySelector('.popup__close_image');
const cardContainer = document.querySelector('.elements');

// PROFILE 
function dataProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}



function handleSubmitProfileForm(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}


function createCard(name,link) {
  const templateCard = document.querySelector('#cards__template').content;
  const cardNew = templateCard.querySelector('.cards').cloneNode(true);
  const cardImage = cardNew.querySelector('.cards__image');
  const cardText = cardNew.querySelector('.cards__text');
  cardText.textContent = name;
  const likeButton = cardNew.querySelector('.cards__like');
  const deleteButton = cardNew.querySelector('.cards__trash');
  

  cardImage.alt = name;
  cardImage.src= link;

  
  likeButton.addEventListener('click', (e) => {
    e.target.classlist.toggle('cards__like_active');
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

  initialCards.forEach(function(item) {
    const cardNew = createCard(item.name, item.link);
    cardContainer.prepend(cardNew);
  });


  function createNewCard() {
    const cardNew = createCard(popupText.value, popupLink.value);
    cardContainer.prepend(cardNew);
    closePopup(popupCard);
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
    name: popupText.value,
    link: popupLink.value
  }
  createNewCard(cardInfo);
}




popupOpenProfile.addEventListener('click', () => {dataProfile(); openPopup(popupProfile)});
popupCloseProfile.addEventListener('click', () => {closePopup(popupProfile)});
formElement.addEventListener('submit', handleSubmitProfileForm);
popupOpenCards.addEventListener('click', () => {openPopup(popupCard)});
popupCloseCards.addEventListener('click', () => { closePopup(popupCard)});
popupCloseImage.addEventListener('click', () => { closePopup(popupImage)});
formCards.addEventListener('submit', handleSubmitCardsForm);

//for git