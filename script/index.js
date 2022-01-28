// POPUP PROFILE
const popupOpen = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const popupClose = document.querySelector('.popup__close_profile');
const nameInput = document.querySelector('.popup__user_name');
const jobInput = document.querySelector('.popup__user_job');
const popupSave = document.querySelector('.popup__save_profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');   
const formElement = document.querySelector('.popup__form_profile');
const popup = document.querySelector('.popup');


// PROFILE 
function addProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}


function openPopup() {
  addProfile();
  popup.classList.add('popup_opened');
}


function closePopup() {
    popupProfile.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);





function handleSubmitProfileForm(evt) {
    evt.preventDefault(); 
    

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}


formElement.addEventListener('submit', handleSubmitProfileForm);








//POPUP CARDS
const popupOpenCards = document.querySelector('.profile__button');
const popupCards = document.querySelector('.popup_cards');
const popupCloseCards = document.querySelector('.popup__close_cards');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];



// CARDS FUNCTION 

function popupCardsOpen() {
    popupCards.classList.add('popup_opened');
}

function popupCardsClose() {
    popupCards.classList.remove('popup_opened');
}

popupOpenCards.addEventListener('click', popupCardsOpen);
popupCloseCards.addEventListener('click', popupCardsClose);

//ADD CARDS

const cardContainer = document.querySelector('.elements');
const templateCards = document.querySelector('#cards__template').content.querySelector('.cards');
const textCards = document.querySelector('.cards__text');
const savePopupCard = document.querySelector('.popup__save_cards');
const popupText = document.querySelector('.popup__user_title');
const popupLink = document.querySelector('.popup__user_link');
const formCards = document.querySelector('.popup__form_cards');
const popupImage = document.querySelector('.popup_image');
const popupImageClose = document.querySelector('.popup__close_image');


const renderCard = (item) => {

  const cardNew = templateCards.cloneNode(true);
  const cardName = cardNew.querySelector('.cards__text');
  const cardLink =  cardNew.querySelector('.cards__image');


  cardName.textContent = item.name;
  cardLink.src = item.link;
  cardLink.alt = item.name;


  cardContainer.prepend(cardNew);

  const likeButton = document.querySelector('.cards__like');
  const deleteButton = document.querySelector('.cards__trash');

  likeButton.addEventListener('click', handleLikeButton);
  deleteButton.addEventListener('click', handleDeleteButton);

  const cardsImage = document.querySelector('.cards__image');

  cardsImage.addEventListener('click', handleImageClick);
  
}


const handleLikeButton = (e) => {
  e.target.classList.toggle('cards__like_active');
}

const handleDeleteButton = (e) => {
  e.target.closest('.cards').remove();
}


const handleImageClick = (e) => {
  const image = e.target;
  const imageUrl = image.src;
  const imageAlt = image.alt;
  const imageText = document.querySelector('.popup__text');
  const imagePopupUrl = document.querySelector('.popup__image'); 

  imageText.textContent = imageAlt;
  imagePopupUrl.alt = imageAlt;
  imagePopupUrl.src = imageUrl;
  openPopupImage();
}

function openPopupImage() {
  popupImage.classList.add('popup_opened');
}

function closePopupImage() {
  popupImage.classList.remove('popup_opened');
}

popupImageClose.addEventListener('click', closePopupImage);


function formSubmitHandlerCards(evt) {
  evt.preventDefault(); 
  const cardInfo = {
    name: popupText.value,
    link: popupLink.value
  }

  renderCard(cardInfo);
  
  popupCardsClose();
}

initialCards.forEach(item => {
  renderCard(item);
})


formCards.addEventListener('submit', formSubmitHandlerCards);


