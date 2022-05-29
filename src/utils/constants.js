
export const initialCards = [
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

export const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};


export const popupImage = document.querySelector('.popup_image');
export const popupCardImage =  document.querySelector('.popup__image');
export const popupTextImage = document.querySelector('.popup__text');
export const popupCloseImage = document.querySelector('.popup__close_image');
export const popupOpenProfile = document.querySelector('.profile__edit');
export const popupProfile = document.querySelector('.popup_profile');
export const popupCloseProfile = document.querySelector('.popup__close_profile');
export const profileName = document.querySelector('.profile__name');
export const popupCloseCards = document.querySelector('.popup__close_cards');
export const profileJob = document.querySelector('.profile__job');
export const popupCard = document.querySelector('.popup_cards');
export const popupOpenCards = document.querySelector('.profile__button');
export const cardContainer = document.querySelector('.elements');
export const formProfile = document.forms.formProfile;
export const inputName = formProfile.elements.username;
export const inputJob = formProfile.elements.userjob;
export const formCard = document.forms.formCards;
export const inputTittle = formCard.elements.usertittle;
export const inputLink = formCard.elements.userlink;
export const avatarEdit = document.querySelector('.profile__container__edit');
export const avatarPopup = document.querySelector('#popup-avatar');
export const avatar = document.querySelector('.profile__avatar');
export const formAvatar = document.forms.formAvatar;
export const deletePopup = document.querySelector("#popup-delete");
export const inputsPopup = document.querySelectorAll('.popup__input');
