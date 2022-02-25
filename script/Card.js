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


class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards').cloneNode(true);
        this._likeButton = cardElement.querySelector('.cards__like');
        this._deleteButton = cardElement.querySelector('.cards__trash');
        return cardElement;
    }

    _handleOpenPopup() {
        document.querySelector('.popup__image').src = this._link;
        document.querySelector('.popup__image').alt = this._name;
        document.querySelector('.popup__text').textContent = this._name;
        document.querySelector('.popup_image').classList.add('popup_opened');
    }

    _handleClosePopup() {
        document.querySelector('.popup_image').classList.remove('.popup_opened');
    }

    _handleClickLike = () => {
        this._likeButton.classList.toggle('cards__like_active');
    }

    _handleClickTrash = () => {
        this._deleteButton.closest('.cards').remove();
    }

    _setEventListener() {
        this._element.addEventListener('click', () => {
            this._handleOpenPopup();
        });

       document.querySelector('.popup__close_image').addEventListener('click', () => {
            this._handleClosePopup();
        });

        this._likeButton.addEventListener('click', () => {
            this._handleClickLike();
        })

        this._deleteButton.addEventListener('click', () => {
            this._handleClickTrash();
        })
    }

    generateCard()  {
        this._element = this._getTemplate();
        this._setEventListener();

        this._element.querySelector('.cards__text').textContent = this._name;
        this._element.querySelector('.cards__image').src = this._link;
        this._element.querySelector('.cards__image').alt = this._name;

        return this._element;
    }
}







export {Card, initialCards};