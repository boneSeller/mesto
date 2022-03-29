import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
    }
    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
          });
        
        return this._formValues;
    
    }

    setEventListeners = () => {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        })
    }

    close = () => {
        super.close();
        this._popupForm.reset();
    }
}