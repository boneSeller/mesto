// POPUP PROFILE
const popupOpen = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup_profile');
const popupClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__user_name');
let jobInput = document.querySelector('.popup__user_job');
const popupSave = document.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');   
let formElement = document.querySelector('.popup__form');

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




// LIKE 
let likeButton = document.querySelector('.cards__like');

likeButton.addEventListener('click', function() {
  likeButton.classList.toggle('cards__like_active');
})


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
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    
    let nameValue = nameInput.value;
    let jobValue = jobInput.value; 
    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
    closePopup();
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent

}


formElement.addEventListener('submit', formSubmitHandler);

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

function addCard(textValue, imageValue) {
  const cardTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardTemplate.querySelector('.cards').cloneNode(true);

  cardElement.querySelector('.cards__text').textContent = textValue;
  cardElement.querySelector('cards__image').src = imageValue;
}
