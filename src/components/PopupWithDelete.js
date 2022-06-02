import {Popup} from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupButton = this._popupForm.querySelector('.popup__button');
    this._buttonText = this._popupButton.textContent;
}

showLoading(isLoading) {
  if (isLoading) {
    this._popupButton.textContent = 'Удаление...';
  } else {
    this._popupButton.textContent = this._buttonText;
  }
}

setSubmitAction(action) {
  this._handleSubmitAction = action;
}

setEventListeners() {
  super.setEventListeners()
  this._popupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleSubmitAction();
  })
}
}
