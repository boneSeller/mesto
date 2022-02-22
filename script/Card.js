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

const popupImage = document.querySelector('.popup_image');
const imagePopup = document.querySelector('.popup__image');
const imageText = document.querySelector('.popup__text');
const popupCloseImage = document.querySelector('.popup__close_image');
const cardContainer = document.querySelector('.elements');


class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards').cloneNode(true);
        return cardElement;
    }

    _handleOpenPopup() {
        imagePopup.src = this._link;
        imagePopup.alt = this._name;
        imageText.textContent = this._name;
        popupImage.classList.add('.popup_opened');
    }

    _handleClosePopup() {
        popupImage.classList.remove('.popup_opened');
    }

    _handleClickLike() {
        this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    }

    _handleClickTrash() {
        this._element.querySelector('.cards__trash').closest('.cards').remove();
    }

    _setEventListener() {
        this._element.addEventListener('click', () => {
            this._handleOpenPopup();
        });

        popupCloseImage.addEventListener('click', () => {
            this._handleClosePopup();
        });

        this._element.querySelector('.cards__like').addEventListener('click', () => {
            this._handleClickLike();
        })

        this._element.querySelector('.cards__trash').addEventListener('click', () => {
            this._handleClickTrash();
        })
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListener();

        this._element.querySelector('.cards__text').textContent = this._name;
        this._element.querySelector('.cards__image').src = this._link;
        this._element.querySelector('.cards__image').alt = this._name;

        return this._element;
    }
}

    initialCards.forEach((item) => {
    const card = new Card(item, '#cards__template');
    const cardElement = card.generateCard();
    cardContainer.prepend(cardElement);
})

 const  createNewCard = () => {
     const cardInfo = {
         name: inputTittle.value,
         link: inputLink.value
     }
     const cardNew = new Card(cardInfo, '#cards__template');
     const cardElement = cardNew.generateCard();
     cardContainer.prepend(cardElement);
 }