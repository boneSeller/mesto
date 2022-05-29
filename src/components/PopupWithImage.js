import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popup, inputTittle, inputLink) {
        super(popup);
        this._popupImage = document.querySelector('.popup__image');
        this._popupDescription = document.querySelector('.popup__text');
    }
    
    open(inputsValues){
        super.open();
        this._popupDescription.textContent = inputsValues.name;
        this._popupImage.alt = inputsValues.name;
        this._popupImage.src = inputsValues.link;
      };
}