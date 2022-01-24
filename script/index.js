// POPUP PROFILE
const popupOpen = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup_profile');
const popupClose = document.querySelector('.popup__close_profile');
let nameInput = document.querySelector('.popup__user_name');
let jobInput = document.querySelector('.popup__user_job');
const popupSave = document.querySelector('.popup__save_profile');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');   
let formElement = document.querySelector('.popup__form_profile');



// PROFILE 

function openPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.add('popup_opened');
}


function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);




// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); 
    

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}


formElement.addEventListener('submit', formSubmitHandler);




// LIKE 




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





const renderCards = (item) => {

  const cardNew = templateCards.cloneNode(true);
  const nameCards = cardNew.querySelector('.cards__text');
  const linkCards =  cardNew.querySelector('.cards__image');


  nameCards.textContent = item.name;
  linkCards.src = item.link;


  cardContainer.prepend(cardNew);

  const likeButton = document.querySelector('.cards__like');
  const deleteButton = document.querySelector('.cards__trash');

  likeButton.addEventListener('click', handleLikeButton);
  deleteButton.addEventListener('click', handleDeleteButton);

}


const handleLikeButton = (e) => {
  e.target.classList.toggle('cards__like_active');
}

const handleDeleteButton = (e) => {
  e.target.closest('.cards').remove();
}


function formSubmitHandlerCards(evt) {
  evt.preventDefault(); 
  const cardInfo = {
    name: popupText.value,
    link: popupLink.value
  }

  renderCards(cardInfo);
  
  popupCardsClose();
}

initialCards.forEach(item => {
  renderCards(item);
})


formCards.addEventListener('submit', formSubmitHandlerCards);


