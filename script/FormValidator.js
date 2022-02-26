
export class FormValidator {
        constructor(settings, form) {
            this._form = form;
            this._settings = settings;

            this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
            this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
        }

        _showInputError = (inputElement, errorMessage) => {
            const {errorClass, inputErrorClass} = this._settings;
            const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.add(inputErrorClass);
            errorElement.textContent = errorMessage;
            errorElement.classList.add(errorClass);
        }

        _hideInputError = (inputElement) => {
            const {errorClass, inputErrorClass} = this._settings;

            const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.remove(inputErrorClass);
            errorElement.classList.remove(errorClass);
            errorElement.textContent = '';
        }

        _isValid = (inputElement) => {
            if (!inputElement.validity.valid) {
                this._showInputError(inputElement, inputElement.validationMessage);
            } else {
                this._hideInputError(inputElement);
            }
        }

        _hasInvalidInput = () => {
            return this._inputList.some((inputElement) => {
                return !inputElement.validity.valid;
            });
        }

        blockButton = () => {
            const {inactiveButtonClass} = this._settings;
            this._buttonElement.classList.add(inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        }

        _unblockButton = () => {
            const {inactiveButtonClass} = this._settings;
            this._buttonElement.classList.remove(inactiveButtonClass);
            this._buttonElement.disabled = false;
        }


        _toggleButtonState = () =>  {
            if (this._hasInvalidInput()) {
                this.blockButton();
            } else {
                this._unblockButton();
            }
        }

        resetErrors() {
            this._toggleButtonState();
            this._inputList.forEach((inputElement) => {
                this._hideInputError(inputElement);
            });
        }

        enableValidation() {
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
            this._setEventListener();
        }

        _setEventListener = () => {
            this._inputList.forEach((inputElement) => {
                inputElement.addEventListener('input', () => {
                    this._isValid(inputElement);
                    this._toggleButtonState();
                })
            })
        }
    }


 
