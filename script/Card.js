import {popupImage, popupCardImage, popupTextImage} from './Constants.js';
import {openPopup, closePopup, closeOverlay, closeOverlayByEsc, unblockButton} from './Utils.js';


export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards').cloneNode(true);
        this._likeButton = cardElement.querySelector('.cards__like');
        this._deleteButton = cardElement.querySelector('.cards__trash');
        this._cardImage = cardElement.querySelector('.cards__image');
        return cardElement;
    }

    _handleOpenPopup() {
        popupCardImage.src = this._link;
        popupCardImage.alt = this._name;
        popupTextImage.textContent = this._name;
        openPopup(popupImage);
    }


    _handleClickLike = () => {
        this._likeButton.classList.toggle('cards__like_active');
    }

    _handleClickTrash = () => {
        this._deleteButton.closest('.cards').remove();
    }

    _setEventListener() {
        this._cardImage.addEventListener('click', () => {
            this._handleOpenPopup();
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
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        return this._element;
    }
}
