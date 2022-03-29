import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popup, inputTittle, inputLink) {
        super(popup);
        this._popupImage = document.querySelector('.popup__image');
        this._popupDescription = document.querySelector('.popup__text');
    }
    
    open(name, link) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupDescription.textContent = name;
        super.open();
    }
}