import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this._popupButton = this._popupForm.querySelector('.popup__button');
        this._buttonText = this._popupButton.textContent;
    }
    _getInputValues() {
        this._formValues  = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
          });
        
        return this._formValues;
    }

    setEventListeners() {
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

    showLoading(isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Сохранение...';
        } else {
            this._popupButton.textContent = this._buttonText;
        }
      };
}